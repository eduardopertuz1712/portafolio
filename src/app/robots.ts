import type { MetadataRoute } from 'next';
import { isPublicOrigin, siteOrigin } from '@/lib/metadata';
export const dynamic = 'force-static';
export default function robots(): MetadataRoute.Robots { return { rules: { userAgent: '*', ...(isPublicOrigin ? { allow: '/' } : { disallow: '/' }) }, sitemap: `${siteOrigin}/sitemap.xml` }; }
