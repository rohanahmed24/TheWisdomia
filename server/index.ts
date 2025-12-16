import { spawn } from 'child_process';

const port = parseInt(process.env.PORT || '5000', 10);

console.log(`Starting Next.js on port ${port}...`);

const nextProcess = spawn('npx', ['next', 'dev', '-p', port.toString(), '--hostname', '0.0.0.0'], {
  stdio: 'inherit',
  shell: true,
  env: {
    ...process.env,
  },
});

nextProcess.on('error', (err) => {
  console.error('Failed to start Next.js:', err);
  process.exit(1);
});

nextProcess.on('close', (code) => {
  if (code !== 0) {
    console.error(`Next.js exited with code ${code}`);
    process.exit(code || 1);
  }
});

process.on('SIGINT', () => {
  nextProcess.kill('SIGINT');
});

process.on('SIGTERM', () => {
  nextProcess.kill('SIGTERM');
});
