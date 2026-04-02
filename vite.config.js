import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  server: {
    port: 5173, // স্ট্যান্ডার্ড পোর্ট
    strictPort: true,
    open: true,
  },
  build: {
    outDir: 'dist',
    minify: 'esbuild',
    sourcemap: false,
  }
});