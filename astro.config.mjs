import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://kyrvex.dev',
  output: 'static',
  build: { format: 'directory' },
});
