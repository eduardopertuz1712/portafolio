import type { Metadata } from 'next';
import { profile, localizedPath, type Locale } from '@/content/site';

const configuredOrigin = profile.siteUrl || process.env.NEXT_PUBLIC_SITE_URL;
const vercelOrigin = process.env.VERCEL_PROJECT_PRODUCTION_URL || process.env.VERCEL_URL;
export const siteOrigin = (configuredOrigin || (vercelOrigin ? `https://${vercelOrigin}` : 'http://localhost:4173')).replace(/\/$/, '');
export const isPublicOrigin = !siteOrigin.startsWith('http://localhost');

export function pageMetadata(locale: Locale, path = '/', heading?: string, description?: string): Metadata {
  const title = heading ? `${heading} | Eduardo Pertuz` : 'Eduardo Pertuz | Software Developer';
  const summary = description || (locale === 'es' ? 'Desarrollador de software enfocado en Python, Flask, APIs REST, React, Next.js y bases de datos.' : 'Software developer focused on Python, Flask, REST APIs, React, Next.js, and databases.');
  const url = `${siteOrigin}${localizedPath(locale, path)}`;
  return {
    metadataBase: new URL(siteOrigin), title, description: summary,
    applicationName: 'Eduardo Pertuz — Portfolio',
    authors: [{ name: profile.name }],
    alternates: { canonical: url, languages: { es: `${siteOrigin}${localizedPath('es', path)}`, en: `${siteOrigin}${localizedPath('en', path)}`, 'x-default': `${siteOrigin}${localizedPath('es', path)}` } },
    openGraph: { title, description: summary, url, type: 'website', locale: locale === 'es' ? 'es_MX' : 'en_US', alternateLocale: locale === 'es' ? 'en_US' : 'es_MX', siteName: 'Eduardo Pertuz' },
    twitter: { card: 'summary', title, description: summary },
    robots: { index: isPublicOrigin, follow: true },
    icons: { icon: '/favicon.svg' },
  };
}

export function personSchema() {
  return { '@context': 'https://schema.org', '@type': 'Person', name: profile.name, jobTitle: 'Software Developer', ...(isPublicOrigin ? { url: siteOrigin } : {}), address: { '@type': 'PostalAddress', addressRegion: 'Atlántico', addressLocality: 'Barranquilla', addressCountry: 'CO' }, sameAs: [profile.github, ...(profile.linkedin ? [profile.linkedin] : [])] };
}
