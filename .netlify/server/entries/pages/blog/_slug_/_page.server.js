import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";
async function load({ params }) {
  const { slug } = params;
  const filePath = path.join("src/content", `${slug}.md`);
  try {
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const { data, content } = matter(fileContent);
    return {
      article: {
        slug,
        ...data,
        // title, date, description, etc.
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
async function entries() {
  const files = fs.readdirSync("src/content");
  return files.filter((file) => file.endsWith(".md")).map((file) => {
    const slug = file.slice(0, -3);
    return { slug };
  });
}
export {
  entries,
  load
};
