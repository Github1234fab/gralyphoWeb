import { c as create_ssr_component } from "./ssr.js";
const css = {
  code: "a.svelte-cdgdqt{background-color:var(--cta);color:var(--whiteGrey);font-family:'Red Hat Display';font-size:1rem;font-weight:700;border-radius:10px;text-align:center;padding:15px 20px;box-shadow:0px 0px 10px 2px rgba(76, 76, 76, 0.35);z-index:999}a.svelte-cdgdqt:hover{animation:svelte-cdgdqt-bounce 0.4s ease-in-out}@keyframes svelte-cdgdqt-bounce{0%{transform:scale(1) translateY(-2px)}25%{transform:scale(1) translateY(3px)}50%{transform:scale(1) translateY(-1px)}75%{transform:scale(1) translateY(2px)}100%{transform:scale(1) translateY(0)}}",
  map: null
};
const ButtonCTA = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<a href="/#section-form" class="svelte-cdgdqt" data-svelte-h="svelte-bhywgi">Contact</a>`;
});
export {
  ButtonCTA as B
};
