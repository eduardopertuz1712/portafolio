import { existsSync } from 'node:fs';
import path from 'node:path';
import { bilingual } from '@/content/site';

const files = [
  { id: 'cv-eduardo-pertuz', title: bilingual('CV de Eduardo Pertuz', 'Eduardo Pertuz Resume'), language: 'Español', locale: 'es' },
] as const;

export function getResumes() {
  return files.map((file) => ({ ...file, href: `/resume/${file.id}.pdf`, available: existsSync(path.join(process.cwd(), 'public', 'resume', `${file.id}.pdf`)) }));
}

export type Resume = ReturnType<typeof getResumes>[number];
