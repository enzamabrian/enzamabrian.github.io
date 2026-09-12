import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/enzamabrian.github.io/',
  build: {
    outDir: 'docs',
  },
});