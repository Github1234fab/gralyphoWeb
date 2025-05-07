import { c as create_ssr_component } from "./ssr.js";
/* empty css                                        */
const css = {
  code: "a.svelte-93e84g{background-color:var(--green);color:var(--primary);font-family:'Red Hat Display';font-size:1rem;font-weight:700;border-radius:8px;text-align:center;padding:10px 20px;box-shadow:0px 10px 10px rgba(62, 62, 62, 0.5);z-index:999;max-width:100px}a.svelte-93e84g:hover{animation:svelte-93e84g-bounce 0.4s ease-in-out}@keyframes svelte-93e84g-bounce{0%{transform:scale(1) translateY(-2px)}25%{transform:scale(1) translateY(3px)}50%{transform:scale(1) translateY(-1px)}75%{transform:scale(1) translateY(2px)}100%{transform:scale(1) translateY(0)}}",
  map: null
};
const ButtonCTA = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<a href="/#section-form" class="svelte-93e84g" data-svelte-h="svelte-bhywgi">Contact</a>`;
});
export {
  ButtonCTA as B
};
