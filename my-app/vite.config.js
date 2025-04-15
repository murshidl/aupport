import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  root: './', // Ensure root is set correctly
  publicDir: 'public', // Ensure public folder is correctly set
});
