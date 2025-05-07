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
        slug, // ✅ Ajout ici
        ...data, // title, image, date, description, etc.
        content: marked(content)
      }
    };
  } catch (err) {
    console.error(`Erreur de chargement de l'article ${slug}:`, err);
    return {
      article: null
    };
  }
}

