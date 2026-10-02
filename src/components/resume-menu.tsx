'use client';

import { useEffect, useRef } from 'react';
import { ArrowUpRight, ChevronDown, Download, FileText } from 'lucide-react';
import { copy, profile, type Locale } from '@/content/site';
import type { Resume } from '@/lib/resumes';

export function ResumeMenu({ locale, resumes, hero = false }: { locale: Locale; resumes: Resume[]; hero?: boolean }) {
  const ref = useRef<HTMLDetailsElement>(null);
  const defaultResume = resumes.find((resume) => resume.id === `software-development-${locale}`);
  useEffect(() => {
    const outside = (event: PointerEvent) => { if (ref.current?.open && !ref.current.contains(event.target as Node)) ref.current.open = false; };
    const escape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && ref.current?.open) { ref.current.open = false; ref.current.querySelector('summary')?.focus(); }
    };
    document.addEventListener('pointerdown', outside);
    document.addEventListener('keydown', escape);
    return () => { document.removeEventListener('pointerdown', outside); document.removeEventListener('keydown', escape); };
  }, []);

  if (hero && defaultResume?.available) return <a className="button button-outline" href={defaultResume.href} target="_blank" rel="noopener noreferrer">{copy.viewResume[locale]}<ArrowUpRight size={17} aria-hidden="true" /><span className="sr-only">{locale === 'es' ? ' (PDF, nueva pestaña)' : ' (PDF, new tab)'}</span></a>;

  return <details className={`resume-menu${hero ? ' resume-hero' : ''}`} ref={ref}>
    <summary className={hero ? 'button button-outline' : 'resume-trigger'}>{hero ? copy.viewResume[locale] : copy.resume[locale]}<ChevronDown size={15} aria-hidden="true" /></summary>
    <div className="resume-panel">
      <p className="mono resume-label">{locale === 'es' ? 'CURRÍCULUM / PDF' : 'RESUME / PDF'}</p>
      {resumes.map((resume) => <div className="resume-item" key={resume.id}>
        <FileText size={18} aria-hidden="true" />
        <div><strong>{resume.title[locale]}</strong><span>{resume.language}{!resume.available && ` · ${locale === 'es' ? 'Próximamente' : 'Coming soon'}`}</span>
          {resume.available && <div className="resume-actions"><a href={resume.href} target="_blank" rel="noopener noreferrer">{locale === 'es' ? 'Abrir PDF' : 'Open PDF'}<ArrowUpRight size={14} aria-hidden="true" /><span className="sr-only">{locale === 'es' ? ' en nueva pestaña' : ' in a new tab'}</span></a><a href={resume.href} download aria-label={`${locale === 'es' ? 'Descargar' : 'Download'} ${resume.title[locale]} — ${resume.language}`}><Download size={16} aria-hidden="true" /></a></div>}
        </div>
      </div>)}
      {!resumes.some((resume) => resume.available) && <a className="resume-request" href={`mailto:${profile.email}?subject=${encodeURIComponent(locale === 'es' ? 'Solicitud de CV' : 'Resume request')}`}>{locale === 'es' ? 'Solicitar CV por correo' : 'Request a resume by email'}<ArrowUpRight size={15} aria-hidden="true" /></a>}
    </div>
  </details>;
}
