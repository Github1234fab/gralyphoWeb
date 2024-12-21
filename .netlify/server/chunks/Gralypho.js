import { c as create_ssr_component } from "./ssr.js";
const css = {
  code: ".rect.svelte-1a3bepw{display:flex;flex-direction:column;min-width:20%;height:40px;font-weight:600;justify-content:center;align-items:center;border-radius:5px;margin-left:20px}.title.svelte-1a3bepw{font-family:var(--Red);font-size:1rem;color:var(--whiteGrey);margin-top:2px;font-weight:400}.rect.svelte-1a3bepw:hover{animation:svelte-1a3bepw-bounce 0.4s ease-in-out}.subtitle.svelte-1a3bepw{font-family:var(--Architects);color:var(--green);font-size:0.8rem;display:flex;justify-content:center;align-items:center;font-weight:600;border-radius:4px;margin-top:0px;rotate:-5deg;margin-left:-20px}@keyframes svelte-1a3bepw-bounce{0%{transform:scale(1) translateY(-2px)}25%{transform:scale(1) translateY(3px)}50%{transform:scale(1) translateY(-1px)}75%{transform:scale(1) translateY(2px)}100%{transform:scale(1) translateY(0)}}",
  map: null
};
const Gralypho = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="rect svelte-1a3bepw" data-svelte-h="svelte-i9rp3h"><h1 class="title svelte-1a3bepw">Gralypho - Communication</h1> <h2 class="subtitle svelte-1a3bepw">Agence Web</h2> </div>`;
});
export {
  Gralypho as G
};
