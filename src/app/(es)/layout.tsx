import type { Metadata } from 'next';
import { Document } from '@/components/document';
import { pageMetadata } from '@/lib/metadata';
export const metadata: Metadata = pageMetadata('es');
export default function Layout({ children }: { children: React.ReactNode }) { return <Document locale="es">{children}</Document>; }
