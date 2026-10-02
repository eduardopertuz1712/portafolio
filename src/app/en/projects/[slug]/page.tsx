import { notFound } from 'next/navigation';
import { getProject, projects } from '@/content/projects';
import { ProjectPage } from '@/components/project-pages';
import { pageMetadata } from '@/lib/metadata';
export const dynamicParams = false;
export function generateStaticParams() { return projects.map(({slug}) => ({slug})); }
export async function generateMetadata({ params }: { params: Promise<{slug:string}> }) { const {slug} = await params; const project = getProject(slug); return project ? pageMetadata('en', `/projects/${slug}`, project.kind === 'residencias' ? 'Residency Management System' : project.name, project.description.en) : {}; }
export default async function Page({ params }: { params: Promise<{slug:string}> }) { const {slug} = await params; const project = getProject(slug); if (!project) notFound(); return <ProjectPage project={project} locale="en"/>; }
