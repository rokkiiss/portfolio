// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://rokkiiss.github.io',
  base: '/portfolio',
  vite: {
    plugins: [tailwindcss()],
  },
});