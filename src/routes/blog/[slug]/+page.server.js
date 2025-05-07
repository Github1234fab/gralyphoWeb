// import fs from 'fs';
// import path from 'path';
// import matter from 'gray-matter';
// import { marked } from 'marked';

// /** @type {import('./$types').PageServerLoad} */
// export async function load({ params }) {
// 	const { slug } = params;
// 	const filePath = path.join('src/content', `${slug}.md`);

// 	try {
// 		const fileContent = fs.readFileSync(filePath, 'utf-8');
// 		const { data, content } = matter(fileContent);

// 		return {
// 			article: {
// 				...data,
// 				content: marked(content)
// 			}
// 		};
// 	} catch (err) {
// 		console.error(`Erreur de chargement de l'article ${slug}:`, err);
// 		return {
// 			article: null
// 		};
// 	}
// }

// import fs from 'fs';
// import path from 'path';
// import matter from 'gray-matter';
// import { marked } from 'marked';

// /** @type {import('./$types').PageServerLoad} */
// export async function load({ params }) {
//   const { slug } = params;
//   const filePath = path.join('src/content', `${slug}.md`);

//   try {
//     const fileContent = fs.readFileSync(filePath, 'utf-8');
//     const { data, content } = matter(fileContent);

//     return {
//       article: {
//         slug,
//         ...data, // title, date, description, etc.
//         content: marked(content)
//       }
      
//     };
//   } catch (err) {
//     console.error(`Erreur de chargement de l'article ${slug}:`, err);
//     return {
//       article: null
//     };
//   }
// }


// /** Fonction utilisée par SvelteKit pour le prerender */
// export async function entries() {
//   const files = fs.readdirSync('src/content');
//   return files
//     .filter(file => file.endsWith('.md'))
//     .map(file => {
//       const slug = file.slice(0, -3); // Supprime ".md"
//       return { slug };
//     });
// }

// src/routes/blog/[slug]/+page.js
// src/routes/blog/[slug]/+page.js

// ---------------

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
  const { slug } = params;
  const filePath = path.join('src/content', `${slug}.md`);

  try {
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const { data, content } = matter(fileContent);

    return {
      article: {
        slug,
        ...data,
        content: marked(content)
      }
    };
  } catch (err) {
    console.error(`Erreur de chargement de l'article ${slug}:`, err);
    return {
      status: 404,
      error: new Error(`Article non trouvé : ${slug}`)
    };
  }
}


// /** Fonction utilisée par SvelteKit pour le prerender */
// export async function entries() {
//   const files = fs.readdirSync('src/content');
//   return files
//     .filter(file => file.endsWith('.md'))
//     .map(file => {
//       const slug = file.slice(0, -3); // Supprime ".md"
//       return { slug };
//     });
// }

// --------------


// src/routes/blog/[slug]/+page.js
// import fs from 'fs';
// import path from 'path';
// import matter from 'gray-matter';

// export async function load({ params }) {
//   const slug = params.slug;  // Récupère le slug depuis l'URL
//   const articlePath = path.join('src/content', `${slug}.md`);  // Chemin vers le fichier Markdown de l'article

//   // Vérifier si le fichier existe avant de le lire
//   if (!fs.existsSync(articlePath)) {
//     console.error(`Fichier non trouvé : ${articlePath}`);
//     return { status: 404, error: new Error(`Article non trouvé pour le slug: ${slug}`) }; // Retourner une erreur 404
//   }

//   try {
//     const fileContent = fs.readFileSync(articlePath, 'utf-8');
//     const { data, content } = matter(fileContent);  // Utilisation de gray-matter pour extraire les métadonnées

//     return {
//       props: {
//         title: data.title,
//         date: data.date,
//         content: content
//       }
//     };
//   } catch (err) {
//     console.error('Erreur lors de la lecture du fichier:', err);
//     return { status: 500, error: new Error('Erreur interne du serveur') }; // Retourner une erreur 500
//   }
// }
