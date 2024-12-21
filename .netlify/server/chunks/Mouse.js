import { c as create_ssr_component, h as add_styles } from "./ssr.js";
import "./Gralypho.js";
import "./Mouse.svelte_svelte_type_style_lang.js";
const css = {
  code: "body{width:100vw;height:100vh}*,body{padding:0;margin:0}.container.svelte-1slfh7x{position:fixed;top:0;left:0;width:100%;height:100%;z-index:99999;pointer-events:none}.cursor.svelte-1slfh7x{z-index:100000;cursor:none;position:absolute;top:0;left:0;background-color:rgba(83, 100, 194, 0.275);border:solid 1px white;backdrop-filter:brightness(1.2);width:25px;height:25px;border-radius:50%;transform:translate(-50%, -50%) translate(var(--x, 0px), var(--y, 0px))}@media only screen and (max-width: 1024px){.cursor.svelte-1slfh7x{display:block}}@media only screen and (max-width: 768px){.cursor.svelte-1slfh7x{display:none}}",
  map: null
};
const Mouse = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return ` <div class="container svelte-1slfh7x"><div class="cursor svelte-1slfh7x"${add_styles({
    "--x": `${0}px`,
    "--y": `${0}px`
  })}></div> </div>`;
});
export {
  Mouse as M
};
