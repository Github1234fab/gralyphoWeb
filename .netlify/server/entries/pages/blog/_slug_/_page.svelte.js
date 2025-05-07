import { c as create_ssr_component, e as escape, d as add_attribute } from "../../../../chunks/ssr.js";
const css = {
  code: "article.svelte-1bm1reg.svelte-1bm1reg{font-family:var(--Red);max-width:800px;margin:0 auto;padding:20px;background-color:#f9f9f9;border-radius:8px;box-shadow:0 2px 4px rgba(0, 0, 0, 0.1);height:100%}article.svelte-1bm1reg h1.svelte-1bm1reg{font-size:2rem;margin-bottom:10px}article.svelte-1bm1reg p.svelte-1bm1reg{font-size:1rem;color:#555}article.svelte-1bm1reg div.svelte-1bm1reg{font-size:1rem;line-height:1.6;color:#333}article.svelte-1bm1reg em.svelte-1bm1reg{font-style:italic;color:#888}img.svelte-1bm1reg.svelte-1bm1reg{max-width:100%;height:auto;border-radius:1rem;box-shadow:0 4px 12px rgba(0, 0, 0, 0.15);margin:1rem 0}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  const { article } = data;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-516gt9_START -->${$$result.title = `<title>${escape(article.title)}</title>`, ""}<meta name="description"${add_attribute("content", article.description, 0)}><meta property="og:title"${add_attribute("content", article.title, 0)}><meta property="og:description"${add_attribute("content", article.description, 0)}><meta property="og:image"${add_attribute("content", article.image, 0)}><meta property="og:url"${add_attribute("content", `https://gralypho.com//blog/${article.slug}`, 0)}><meta property="og:type" content="article"><!-- HEAD_svelte-516gt9_END -->`, ""} ${article ? `<article class="article-content svelte-1bm1reg"><h1 class="svelte-1bm1reg">${escape(article.title)}</h1> <p class="svelte-1bm1reg"><em class="svelte-1bm1reg">${escape(article.date)}</em></p> ${article.image ? `<img${add_attribute("src", article.image, 0)} alt="${"Illustration pour " + escape(article.title, true)}" class="featured-image svelte-1bm1reg">` : ``} <div class="svelte-1bm1reg"><!-- HTML_TAG_START -->${article.content}<!-- HTML_TAG_END --></div></article>` : `<p data-svelte-h="svelte-n3u3rp">Article introuvable.</p>`}`;
});
export {
  Page as default
};
