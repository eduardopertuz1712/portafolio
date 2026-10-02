import { ProjectsPage } from '@/components/project-pages';
import { pageMetadata } from '@/lib/metadata';
export const metadata = pageMetadata('en', '/projects', 'Projects', 'Projects by Eduardo Pertuz: MEVB, VetConnect, Transcription System, and E-commerce.');
export default function Page() { return <ProjectsPage locale="en"/>; }
