import { notFound } from 'next/navigation';
import { getProject, projects } from '@/content/projects';
import { ProjectPage } from '@/components/project-pages';
import { pageMetadata } from '@/lib/metadata';
export const dynamicParams = false;
export function generateStaticParams() { return projects.map(({slug}) => ({slug})); }
export async function generateMetadata({ params }: { params: Promise<{slug:string}> }) { const {slug} = await params; const project = getProject(slug); return project ? pageMetadata('es', `/projects/${slug}`, project.name, project.description.es) : {}; }
export default async function Page({ params }: { params: Promise<{slug:string}> }) { const {slug} = await params; const project = getProject(slug); if (!project) notFound(); return <ProjectPage project={project} locale="es"/>; }
