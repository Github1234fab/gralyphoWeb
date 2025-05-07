import adapter from '@sveltejs/adapter-netlify';
import { mdsvex } from 'mdsvex';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: ['.svelte', '.svx'],
  preprocess: mdsvex(),

  kit: {
    adapter: adapter(),
    // ✅ Ne mets pas `ssr: true` ici
  }
};

export default config;
