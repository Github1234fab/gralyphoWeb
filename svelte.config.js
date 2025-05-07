import adapter from '@sveltejs/adapter-netlify';
import { mdsvex } from 'mdsvex';

const config = {
  extensions: ['.svelte', '.svx'],
  preprocess: mdsvex(),

  kit: {
    adapter: adapter(),
    ssr: true, // 👈 c’est ici que ça va, dans kit
  }
};

export default config;