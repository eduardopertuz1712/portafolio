import { spawn } from 'node:child_process';
import { fileURLToPath } from 'node:url';

// Accept the standard preview flags while keeping Next.js as the dev server.
const forwarded = process.argv.slice(2).filter((argument) => argument !== '--strictPort')
  .map((argument) => argument === '--host' ? '--hostname' : argument);
if (!forwarded.includes('--port') && !forwarded.includes('-p')) forwarded.push('--port', '4173');
if (!forwarded.includes('--hostname') && !forwarded.includes('-H')) forwarded.push('--hostname', '0.0.0.0');
const executable = fileURLToPath(new URL('../node_modules/next/dist/bin/next', import.meta.url));
const child = spawn(process.execPath, [executable, 'dev', ...forwarded], { stdio: 'inherit', env: process.env });
for (const signal of ['SIGINT', 'SIGTERM']) process.on(signal, () => child.kill(signal));
child.on('exit', (code) => process.exit(code ?? 0));
child.on('error', (error) => { console.error(error.message); process.exit(1); });
