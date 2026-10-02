import Link from 'next/link';
import { ArrowUpRight, GitBranch as Github, Link as Linkedin, Mail, MapPin } from 'lucide-react';
import { copy, localizedPath, profile, type Locale } from '@/content/site';
import type { Project } from '@/content/projects';
import { ProjectVisual } from './project-visual';

export function SectionHeading({ number, label, title, children }: { number: string; label: string; title: string; children?: React.ReactNode }) {
  return <div className="section-heading"><div className="section-kicker mono"><span>{number}</span>{label}<i/></div><div className="section-title-row"><h2>{title}</h2>{children}</div></div>;
}
export function SocialLinks({ locale, icons = false }: { locale: Locale; icons?: boolean }) {
  return <div className="social-links"><a href={profile.github} target="_blank" rel="noopener noreferrer">{icons && <Github size={17} aria-hidden="true"/>}GitHub<ArrowUpRight size={14} aria-hidden="true"/><span className="sr-only">{locale === 'es' ? ' (nueva pestaña)' : ' (new tab)'}</span></a>{profile.linkedin && <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">{icons && <Linkedin size={17} aria-hidden="true"/>}LinkedIn<ArrowUpRight size={14} aria-hidden="true"/><span className="sr-only">{locale === 'es' ? ' (nueva pestaña)' : ' (new tab)'}</span></a>}<a href={`mailto:${profile.email}`}>{icons && <Mail size={17} aria-hidden="true"/>}Email<ArrowUpRight size={14} aria-hidden="true"/></a></div>;
}
export function ProjectName({ project, locale }: { project: Project; locale: Locale }) { return <>{locale === 'en' && project.kind === 'residencias' ? 'Residency Management System' : project.name}</>; }
export function ProjectCard({ project, locale, index }: { project: Project; locale: Locale; index: number }) {
  return <article className={`featured-project${index % 2 ? ' reversed' : ''}`}>
    <div className="project-visual-link"><ProjectVisual project={project} locale={locale}/></div>
    <div className="project-copy"><div className="project-category mono"><span>0{index + 1}</span>{project.category[locale]}</div><h3><ProjectName project={project} locale={locale}/></h3><p className="project-subtitle">{project.subtitle[locale]}</p><p className="project-description">{project.description[locale]}</p><ul className="tag-list" aria-label={locale === 'es' ? 'Tecnologías' : 'Technologies'}>{project.stack.slice(0,5).map((tech) => <li key={tech}>{tech}</li>)}</ul><div className="project-actions">{project.github && <a className="source-link" href={project.github} target="_blank" rel="noopener noreferrer" aria-label={`GitHub — ${project.name}`}><Github size={19} aria-hidden="true"/></a>}</div><span className={`project-status${project.kind === 'barberia' ? ' status-active' : ''}`}>{project.status[locale]}</span></div>
  </article>;
}
export function SecondaryCard({ project, locale }: { project: Project; locale: Locale }) {
  return <article className="secondary-card"><div className="secondary-top"><span className="mono">{project.kind === 'unity' ? 'GAME DEV' : 'DESKTOP'}</span><ArrowUpRight size={20} aria-hidden="true"/></div><h3><ProjectName project={project} locale={locale}/></h3><p>{project.description[locale]}</p><ul className="tag-list">{project.stack.slice(0,3).map((tech) => <li key={tech}>{tech}</li>)}</ul><span className="project-status">{project.status[locale]}</span></article>;
}
export function Contact({ locale }: { locale: Locale }) {
  return <section className="contact-section" id="contact"><div className="container"><div className="section-kicker mono"><span>06</span>{locale === 'es' ? 'CONTACTO' : 'CONTACT'}<i/></div><div className="contact-inner"><div><h2>{copy.contactTitle[locale]}</h2><p>{copy.contact[locale]}</p><a className="email-link" href={`mailto:${profile.email}`}>{profile.email}<ArrowUpRight aria-hidden="true"/></a></div><div className="contact-side"><span className="contact-orbit" aria-hidden="true">✳</span><SocialLinks locale={locale}/><p className="location"><MapPin size={14} aria-hidden="true"/>{profile.location[locale]}</p></div></div></div></section>;
}
export function Footer({ locale }: { locale: Locale }) {
  return <footer className="site-footer container"><div className="footer-brand"><Link className="monogram" href={localizedPath(locale)}>EP<span>.</span></Link><span>Software Developer</span></div><div className="footer-meta"><span>© {new Date().getFullYear()} Eduardo Pertuz</span><span>{locale === 'es' ? 'Construido con' : 'Built with'} Next.js & TypeScript</span></div></footer>;
}
