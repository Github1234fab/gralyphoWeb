import { c as create_ssr_component, d as add_attribute } from "./ssr.js";
const gralypho = "/_app/immutable/assets/logoGralypho.CI6Sh97R.jpeg";
const css = {
  code: ".logo.svelte-1vzsicl{width:50px;height:50px;border-radius:8px}.rect.svelte-1vzsicl{display:flex;gap:0px;min-width:20%;height:40px;font-weight:600;justify-content:center;align-items:center;border-radius:5px;margin-left:0px}.title.svelte-1vzsicl{font-family:var(--Poppins);font-size:0.8rem;color:var(--whiteGrey);margin-top:0px;font-weight:600;letter-spacing:-1px;margin-left:5px}.rect.svelte-1vzsicl:hover{animation:svelte-1vzsicl-bounce 0.4s ease-in-out}@keyframes svelte-1vzsicl-bounce{0%{transform:scale(1) translateY(-2px)}25%{transform:scale(1) translateY(3px)}50%{transform:scale(1) translateY(-1px)}75%{transform:scale(1) translateY(2px)}100%{transform:scale(1) translateY(0)}}",
  map: null
};
const Gralypho = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="rect svelte-1vzsicl" data-svelte-h="svelte-1bgfxj9"><img class="logo svelte-1vzsicl"${add_attribute("src", gralypho, 0)} alt="logo de Gralypho"> <h1 class="title svelte-1vzsicl">Gralypho</h1> </div>`;
});
export {
  Gralypho as G
};
