import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import './globals.css';
export const metadata: Metadata = { title: '404 — Señal perdida | Eduardo Pertuz', robots: { index: false, follow: false }, icons: { icon: '/favicon.svg' } };
export default function GlobalNotFound() { return <html lang="es"><body><main className="not-found" id="content"><Link href="/" className="monogram">EP<span>.</span></Link><div className="not-found-orbit" aria-hidden="true"/><p className="mono">404 / SIGNAL LOST</p><h1>Señal perdida<span>.</span></h1><p>Esta página parece haber salido de órbita.</p><p lang="en">This page seems to have drifted out of orbit.</p><div className="not-found-actions"><Link className="button button-primary" href="/"><ArrowLeft size={17} aria-hidden="true"/>Volver al inicio</Link><Link className="button button-outline" href="/en/" lang="en">Return home — EN</Link></div></main></body></html>; }
