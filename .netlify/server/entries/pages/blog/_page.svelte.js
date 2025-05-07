import { c as create_ssr_component, f as each, d as add_attribute, e as escape } from "../../../chunks/ssr.js";
const css = {
  code: "main.svelte-1xnrtty.svelte-1xnrtty{font-family:var(--Red);max-width:800px;margin:0 auto;padding:20px;background-color:#f9f9f9;border-radius:8px;box-shadow:0 2px 4px rgba(0, 0, 0, 0.1);height:100vh}main.svelte-1xnrtty h1.svelte-1xnrtty{font-size:1.5rem;margin-bottom:10px}main.svelte-1xnrtty h2.svelte-1xnrtty{font-size:1.2rem;margin-bottom:5px}ul.svelte-1xnrtty.svelte-1xnrtty{list-style-type:none;padding:20px}li.svelte-1xnrtty.svelte-1xnrtty{margin-bottom:20px;padding:10px;background-color:#fff;border-radius:8px;box-shadow:0 2px 4px rgba(0, 0, 0, 0.1)}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `<main class="svelte-1xnrtty"><h1 class="svelte-1xnrtty" data-svelte-h="svelte-dbxyy8">Blog</h1> <ul class="svelte-1xnrtty">${each(data.posts, (post) => {
    return `<li class="svelte-1xnrtty"><a${add_attribute("href", `/blog/${post.slug}`, 0)}><h2 class="svelte-1xnrtty">${escape(post.title)}</h2> <p>${escape(post.date)}</p></a> </li>`;
  })}</ul> </main>`;
});
export {
  Page as default
};
