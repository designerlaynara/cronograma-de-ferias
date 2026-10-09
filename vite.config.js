import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// base relativa: o build funciona em qualquer subpasta (GitHub Pages, Netlify, etc.)
export default defineConfig({
  plugins: [react()],
  base: './',
});
