import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export async function load() {
  const articlesDir = 'src/content';
  console.log('Environnement:', process.env.NODE_ENV);
  console.log('Chemin des articles:', path.resolve('src/content'));
  const files = fs.readdirSync(articlesDir);

  const posts = files.map(filename => {
    const filePath = path.join(articlesDir, filename);
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const { data } = matter(fileContent);

    return {
      ...data,
      slug: data.slug || filename.replace('.md', '')
    };
  });

  return { posts };
}