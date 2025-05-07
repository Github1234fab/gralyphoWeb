// import { mdsvex } from 'mdsvex'; // Importation correcte de mdsvex

// import adapter from '@sveltejs/adapter-netlify';

// /** @type {import('@sveltejs/kit').Config} */
// const config = {
// 	kit: {
// 		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
// 		// If your environment is not supported or you settled on a specific environment, switch out the adapter.
// 		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
// 		adapter: adapter()
// 	},

// 	// Ajout de mdsvex pour pouvoir utiliser Markdown dans tes fichiers .svelte
// 	extensions: ['.svelte', '.svx'], // On ajoute les extensions pour que Svelte reconnaisse les fichiers .svx (Markdown)
// 	preprocess: mdsvex() // Le préprocesseur mdsvex permet de gérer les fichiers markdown dans Svelte
// };

// export default config;


// import { mdsvex } from 'mdsvex';
// import adapter from '@sveltejs/adapter-netlify';

// /** @type {import('@sveltejs/kit').Config} */
// const config = {
// 	extensions: ['.svelte', '.svx'], // <-- doit être à la racine, pas dans `kit`
// 	preprocess: mdsvex(),

// 	kit: {
// 		adapter: adapter({
// 			fallback: 'index.html'
// 		}),
// 		prerender: {
// 			entries: ['*']
// 		}
// 	}
// };

// export default config;

import adapter from '@sveltejs/adapter-netlify';
import { mdsvex } from 'mdsvex';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter({
      fallback: 'index.html', // Prévient les erreurs de routes 404
    }),
    prerender: {
      entries: ['*'], // Permet de pré-rendre toutes les pages
    },
    preprocess: mdsvex(),
  },
};

export default config;

