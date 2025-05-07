import { c as create_ssr_component } from "./ssr.js";
const css = {
  code: "a.svelte-ra3tlp{font-family:var(--Geologica);font-size:var(--m);color:var(--whiteGrey);background-color:var(--primary);font-weight:700;letter-spacing:-1px;text-align:center;margin-top:0px;padding:25px;border-radius:8px;box-shadow:0px 30px 20px rgba(0, 0, 0, 0.227)}.bg-color.svelte-ra3tlp{background-color:var(--cta)}a.svelte-ra3tlp:hover{background-color:var(--blue)}.wrapper__links.svelte-ra3tlp{display:flex;gap:20px;justify-content:center;align-items:center;width:80%;margin:0 auto;margin-bottom:50px}.title.svelte-ra3tlp{font-family:var(--Geologica);font-size:var(--l);color:var(--primary);font-weight:900;margin-bottom:10px;letter-spacing:-1px;text-align:center;line-height:35px;margin-top:50px;padding:25px\n    }@media screen and (max-width: 768px){.wrapper__links.svelte-ra3tlp{flex-direction:column}}",
  map: null
};
const LinkSiteApplication = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<h2 class="title svelte-ra3tlp" data-svelte-h="svelte-1cwpqe2">Découvrez notre offre</h2> <div class="wrapper__links svelte-ra3tlp" data-svelte-h="svelte-g4gbxg"><a href="/creation-site-internet" class="svelte-ra3tlp">Notre offre de site internet</a> <a class="bg-color svelte-ra3tlp" href="/creation-application">Notre offre d&#39;application</a> </div>`;
});
export {
  LinkSiteApplication as L
};
