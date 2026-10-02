import type { MetadataRoute } from 'next';
import { projects } from '@/content/projects';
import { localizedPath, type Locale } from '@/content/site';
import { siteOrigin } from '@/lib/metadata';
export const dynamic = 'force-static';
export default function sitemap(): MetadataRoute.Sitemap { return (['es','en'] as Locale[]).flatMap((locale) => ['/', '/projects', ...projects.map((p) => `/projects/${p.slug}`)].map((path) => ({ url: `${siteOrigin}${localizedPath(locale,path)}`, alternates: { languages: { es: `${siteOrigin}${localizedPath('es',path)}`, en: `${siteOrigin}${localizedPath('en',path)}` } } }))); }
