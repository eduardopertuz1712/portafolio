import { readFileSync, existsSync, readdirSync } from 'node:fs';
import { resolve, join, extname } from 'node:path';

// Checks the generated HTML, not the React implementation. Run after npm run build.
const root = resolve('out');
const errors = [];
const assert = (condition, message) => { if (!condition) errors.push(message); };
if (!existsSync(root)) throw new Error('Missing out/. Run npm run build first.');
const walk = dir => readdirSync(dir, { withFileTypes: true }).flatMap(entry => entry.isDirectory() ? walk(join(dir, entry.name)) : [join(dir, entry.name)]);
const files = walk(root).filter(path => path.endsWith('.html'));
const htmlByFile = new Map(files.map(path => [path, readFileSync(path, 'utf8')]));
const decode = value => value.replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#x27;|&#39;/g, "'");
const attrs = tag => Object.fromEntries([...tag.matchAll(/([\w:-]+)="([^"]*)"/g)].map(match => [match[1], decode(match[2])]));
const tags = (html, name) => [...html.matchAll(new RegExp(`<${name}\\b[^>]*>`, 'g'))].map(match => attrs(match[0]));
const fileFor = pathname => join(root, pathname.endsWith('/') ? pathname + 'index.html' : extname(pathname) ? pathname : pathname + '/index.html');
const slugs = [...readFileSync('src/content/projects.ts', 'utf8').matchAll(/slug: '([^']+)'/g)].map(match => match[1]);
const expected = ['', '/en'].flatMap(locale => [`${locale}/`, `${locale}/projects/`, ...slugs.map(slug => `${locale}/projects/${slug}/`)]);
let localLinks = 0;
const external = new Set();
for (const route of expected) {
  const file = fileFor(route);
  const html = htmlByFile.get(file);
  assert(!!html, `Missing route: ${route}`);
  if (!html) continue;
  const es = !route.startsWith('/en/');
  assert(tags(html, 'html')[0]?.lang === (es ? 'es' : 'en'), `${route}: incorrect document language`);
  assert(tags(html, 'h1').length === 1, `${route}: expected exactly one h1`);
  assert(tags(html, 'main').length === 1, `${route}: expected a main landmark`);
  assert(/<title>[^<]+<\/title>/.test(html), `${route}: missing title`);
  const metas = tags(html, 'meta');
  assert(metas.some(meta => meta.name === 'description' && meta.content), `${route}: missing description`);
  assert(metas.some(meta => meta.property === 'og:title' && meta.content), `${route}: missing Open Graph title`);
  assert(metas.some(meta => meta.name === 'twitter:card'), `${route}: missing Twitter card`);
  const links = tags(html, 'link');
  const canonical = links.find(link => link.rel === 'canonical');
  assert(canonical && new URL(canonical.href).pathname === route, `${route}: incorrect canonical path`);
  for (const locale of ['es', 'en', 'x-default']) assert(links.some(link => link.rel === 'alternate' && link.hrefLang === locale), `${route}: missing hreflang ${locale}`);
  const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map(match => match[1]);
  assert(new Set(ids).size === ids.length, `${route}: duplicate IDs`);
  for (const image of tags(html, 'img')) assert(Object.hasOwn(image, 'alt'), `${route}: image without alt`);
  for (const anchor of tags(html, 'a')) {
    assert(anchor.href && anchor.href !== '#', `${route}: empty link`);
    if (!anchor.href) continue;
    if (anchor.target === '_blank') assert(anchor.rel?.includes('noopener'), `${route}: unsafe new-tab link`);
    if (/^https?:/.test(anchor.href)) { external.add(anchor.href); continue; }
    if (anchor.href.startsWith('mailto:')) {
      assert(anchor.href.split('?')[0] === 'mailto:pertuzvillegaseduardoisaac@gmail.com', `${route}: unexpected email`); continue;
    }
    const target = new URL(anchor.href, 'https://example.test' + route);
    const destination = fileFor(decodeURIComponent(target.pathname));
    assert(existsSync(destination), `${route}: broken internal link ${anchor.href}`);
    if (target.hash && existsSync(destination)) {
      const page = htmlByFile.get(destination) || '';
      assert(page.includes(`id="${decodeURIComponent(target.hash.slice(1))}"`), `${route}: missing anchor ${anchor.href}`);
    }
    localLinks++;
  }
  for (const asset of [...tags(html, 'script').map(tag => tag.src), ...links.filter(link => ['stylesheet', 'icon', 'preload'].includes(link.rel)).map(link => link.href), ...tags(html, 'img').map(tag => tag.src)].filter(Boolean)) {
    if (asset.startsWith('/')) assert(existsSync(fileFor(new URL(asset, 'https://example.test').pathname)), `${route}: missing asset ${asset}`);
  }
  if (route === '/' || route === '/en/') assert(html.includes('"@type":"Person"'), `${route}: missing Person structured data`);
}
const sitemap = readFileSync(join(root, 'sitemap.xml'), 'utf8');
for (const route of expected) assert(sitemap.includes(route + '</loc>'), `Sitemap missing ${route}`);
const notFound = readFileSync(join(root, '404.html'), 'utf8');
assert(notFound.includes('Señal perdida') && notFound.includes('Return home'), 'Missing bilingual 404');
assert(notFound.includes('noindex'), '404 must not be indexed');
assert(existsSync(join(root, 'robots.txt')), 'Missing robots.txt');
assert(!existsSync(join(root, '__qa.html')), 'Remove temporary QA harness before delivery');
if (errors.length) { console.error(errors.join('\n')); process.exitCode = 1; }
else console.log(`PASS: ${expected.length} content routes, bilingual 404, ${localLinks} internal links, assets, anchors, metadata and sitemap.\n${external.size} external destinations checked for markup only (not remote availability).`);
