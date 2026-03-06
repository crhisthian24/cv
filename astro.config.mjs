// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://crhisthian24.github.io',
  base: '/cv',

  vite: {
    plugins: [tailwindcss()]
  }
});