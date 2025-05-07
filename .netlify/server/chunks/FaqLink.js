import { c as create_ssr_component } from "./ssr.js";
/* empty css                                      */
const css = {
  code: ".faqLink.svelte-2ecl4b.svelte-2ecl4b{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:40px;height:auto;width:80%;margin:50px auto;background-color:var(--whiteGrey);border-radius:20px}.title.svelte-2ecl4b.svelte-2ecl4b{text-align:center;font-family:var(--Geologica);font-weight:400;font-size:2rem;color:var(--primary);margin-top:0px;letter-spacing:-2px;padding:10px;line-height:50px;margin-top:20px}.subtitle.svelte-2ecl4b.svelte-2ecl4b{text-align:center;font-family:var(--Geologica);font-weight:400;font-size:1rem;color:var(--primary);margin-top:0px;letter-spacing:-1px;padding:10px;line-height:40px;margin-bottom:50px}.faqLink.svelte-2ecl4b a.svelte-2ecl4b{font-family:'Red Hat Display';font-size:var(--m);font-weight:700;color:var(--whiteGrey);background-color:var(--cta);padding:20px 30px;text-decoration:none;box-shadow:0px 20px 10px 0px rgba(0, 0, 0, 0.269);margin-bottom:100px;border-radius:5px;margin-top:0px}@media screen and (max-width: 768px){.subtitle.svelte-2ecl4b.svelte-2ecl4b{font-size:1rem;line-height:30px}.faqLink.svelte-2ecl4b.svelte-2ecl4b{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:20px;height:auto;width:95%}}",
  map: null
};
const FaqLink = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<section class="faqLink svelte-2ecl4b" data-svelte-h="svelte-zirvsf"><h2 class="title svelte-2ecl4b">Vous vous posez des questions?</h2> <p class="subtitle svelte-2ecl4b">Consultez toutes nos réponses à propos de la création de site internet, de la création d&#39;applications,<br> des technologies utilisées, des tarifs, du référencement, etc.</p> <a href="/FAQ" class="svelte-2ecl4b">FAQ</a> </section>`;
});
export {
  FaqLink as F
};
