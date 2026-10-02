'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';
import { localizedPath, navigation, type Locale } from '@/content/site';
import { ResumeMenu } from './resume-menu';
import type { Resume } from '@/lib/resumes';

export function Header({ locale, resumes }: { locale: Locale; resumes: Resume[] }) {
  const pathname = usePathname();
  const mobile = useRef<HTMLDetailsElement>(null);
  const home = localizedPath(locale);
  const other: Locale = locale === 'es' ? 'en' : 'es';
  const normalized = pathname.replace(/^\/en(?=\/|$)/, '') || '/';
  const translated = localizedPath(other, normalized);
  useEffect(() => {
    const escape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && mobile.current?.open) {
        mobile.current.open = false;
        mobile.current.querySelector('summary')?.focus();
      }
    };
    const outside = (event: PointerEvent) => {
      if (mobile.current?.open && !mobile.current.contains(event.target as Node)) mobile.current.open = false;
    };
    document.addEventListener('keydown', escape);
    document.addEventListener('pointerdown', outside);
    return () => {
      document.removeEventListener('keydown', escape);
      document.removeEventListener('pointerdown', outside);
    };
  }, []);
  return <header className="site-header">
    <div className="container nav-inner">
      <Link className="monogram" href={home} aria-label={locale === 'es' ? 'Eduardo Pertuz — Inicio' : 'Eduardo Pertuz — Home'}>EP<span>.</span></Link>
      <nav className="desktop-nav" aria-label={locale === 'es' ? 'Navegación principal' : 'Main navigation'}>
        {navigation.map(item => <Link key={item.id} href={`${home}#${item.id}`}>{item.label[locale]}</Link>)}
      </nav>
      <div className="nav-actions">
        <div className="language-switch" aria-label={locale === 'es' ? 'Idioma' : 'Language'}>
          {(['es', 'en'] as Locale[]).map(language => language === locale ? <span key={language} className="language-current" aria-current="true" lang={language}>{language.toUpperCase()}</span> : <a key={language} href={translated} hrefLang={language} lang={language} aria-label={language === 'es' ? 'Cambiar a español' : 'Switch to English'} onClick={event => { event.currentTarget.href = translated + window.location.hash; }}>{language.toUpperCase()}</a>)}
        </div>
        <ResumeMenu locale={locale} resumes={resumes}/>
        <details ref={mobile} className="mobile-menu">
          <summary className="mobile-toggle" aria-controls="mobile-navigation" aria-label={locale === 'es' ? 'Menú de navegación' : 'Navigation menu'}><Menu className="menu-open" aria-hidden="true" size={21}/><X className="menu-close" aria-hidden="true" size={21}/></summary>
          <nav id="mobile-navigation" className="mobile-nav" aria-label={locale === 'es' ? 'Navegación móvil' : 'Mobile navigation'}>
            {navigation.map((item, index) => <Link key={item.id} href={`${home}#${item.id}`} onClick={() => { if (mobile.current) mobile.current.open = false; }}><span className="mono">0{index + 1}</span>{item.label[locale]}</Link>)}
          </nav>
        </details>
      </div>
    </div>
  </header>;
}
