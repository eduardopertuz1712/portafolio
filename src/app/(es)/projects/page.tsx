import { ProjectsPage } from '@/components/project-pages';
import { pageMetadata } from '@/lib/metadata';
export const metadata = pageMetadata('es', '/projects', 'Proyectos', 'Proyectos de Eduardo Pertuz: MEVB, VetConnect, Sistema de Transcripción y E-commerce.');
export default function Page() { return <ProjectsPage locale="es"/>; }
