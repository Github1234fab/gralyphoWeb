import { c as create_ssr_component, f as each, d as add_attribute, e as escape } from "../../../chunks/ssr.js";
const css = {
  code: "main.svelte-1xnrtty.svelte-1xnrtty{font-family:var(--Red);max-width:800px;margin:0 auto;padding:20px;background-color:#f9f9f9;border-radius:8px;box-shadow:0 2px 4px rgba(0, 0, 0, 0.1);height:100vh}main.svelte-1xnrtty h1.svelte-1xnrtty{font-size:1.5rem;margin-bottom:10px}main.svelte-1xnrtty h2.svelte-1xnrtty{font-size:1.2rem;margin-bottom:5px}ul.svelte-1xnrtty.svelte-1xnrtty{list-style-type:none;padding:20px}li.svelte-1xnrtty.svelte-1xnrtty{margin-bottom:20px;padding:10px;background-color:#fff;border-radius:8px;box-shadow:0 2px 4px rgba(0, 0, 0, 0.1)}",
  map: '{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script>\\n    export let data;\\n  <\/script>\\n  \\n  <main>\\n  <h1>Blog</h1>\\n  \\n  <ul>\\n    {#each data.posts as post}\\n      <li>\\n        <a href={`/blog/${post.slug}`}>\\n          <h2>{post.title}</h2>\\n          <p>{post.date}</p>\\n        </a>\\n      </li>\\n    {/each}\\n  </ul>\\n</main>\\n\\n<style>\\nmain{\\n    font-family: var(--Red);\\n    max-width: 800px;\\n    margin: 0 auto;\\n    padding: 20px;\\n    background-color: #f9f9f9;\\n    border-radius: 8px;\\n    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\\n    height: 100vh;\\n}\\nmain h1{\\n    font-size: 1.5rem;\\n    margin-bottom: 10px;\\n}\\nmain h2{\\n    font-size: 1.2rem;\\n    margin-bottom: 5px;\\n}\\n\\nul{\\n    list-style-type: none;\\n    padding: 20px;\\n}\\nli{\\n    margin-bottom: 20px;\\n    padding: 10px;\\n    background-color: #fff;\\n    border-radius: 8px;\\n    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\\n}\\n\\n</style>"],"names":[],"mappings":"AAoBA,kCAAI,CACA,WAAW,CAAE,IAAI,KAAK,CAAC,CACvB,SAAS,CAAE,KAAK,CAChB,MAAM,CAAE,CAAC,CAAC,IAAI,CACd,OAAO,CAAE,IAAI,CACb,gBAAgB,CAAE,OAAO,CACzB,aAAa,CAAE,GAAG,CAClB,UAAU,CAAE,CAAC,CAAC,GAAG,CAAC,GAAG,CAAC,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,GAAG,CAAC,CACxC,MAAM,CAAE,KACZ,CACA,mBAAI,CAAC,iBAAE,CACH,SAAS,CAAE,MAAM,CACjB,aAAa,CAAE,IACnB,CACA,mBAAI,CAAC,iBAAE,CACH,SAAS,CAAE,MAAM,CACjB,aAAa,CAAE,GACnB,CAEA,gCAAE,CACE,eAAe,CAAE,IAAI,CACrB,OAAO,CAAE,IACb,CACA,gCAAE,CACE,aAAa,CAAE,IAAI,CACnB,OAAO,CAAE,IAAI,CACb,gBAAgB,CAAE,IAAI,CACtB,aAAa,CAAE,GAAG,CAClB,UAAU,CAAE,CAAC,CAAC,GAAG,CAAC,GAAG,CAAC,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,GAAG,CAC3C"}'
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  $$result.css.add(css);
  return `<main class="svelte-1xnrtty"><h1 class="svelte-1xnrtty" data-svelte-h="svelte-dbxyy8">Blog</h1> <ul class="svelte-1xnrtty">${each(data.posts, (post) => {
    return `<li class="svelte-1xnrtty"><a${add_attribute("href", `/blog/${post.slug}`, 0)}><h2 class="svelte-1xnrtty">${escape(post.title)}</h2> <p>${escape(post.date)}</p></a> </li>`;
  })}</ul> </main>`;
});
export {
  Page as default
};
