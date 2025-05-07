import { c as create_ssr_component, v as validate_component } from "../../../chunks/ssr.js";
import { F as FaqLink } from "../../../chunks/FaqLink.js";
import { H as Header } from "../../../chunks/Header.js";
import { L as LinkSiteApplication } from "../../../chunks/LinkSiteApplication.js";
const css = {
  code: ".container.svelte-18wd5r9{height:100%}.wrapper__text.svelte-18wd5r9{display:flex;flex-direction:column;justify-content:center;align-items:center;width:80%;margin:0 auto}.title.svelte-18wd5r9{font-family:var(--Geologica);font-size:var(--l);color:var(--primary);font-weight:900;margin-bottom:10px;letter-spacing:-1px;text-align:center;line-height:35px;margin-top:50px}.subtitle.svelte-18wd5r9{font-family:var(--Geologica);font-size:1.5rem;color:var(--primary);font-weight:500;letter-spacing:-1px;text-align:center;line-height:40px;margin-top:30px;padding:25px}.subtitle__h3.svelte-18wd5r9{font-family:var(--Geologica);font-size:var(--m);color:var(--primary);font-weight:700;letter-spacing:-1px;text-align:center;margin-top:100px}.paragraph.svelte-18wd5r9{font-family:var(--Poppins);font-size:var(--m);color:var(--primary);font-weight:300;letter-spacing:-0.02em;text-align:center;align-self:center;padding:20px}.wrapper__img.svelte-18wd5r9{margin-top:50px;display:flex;justify-content:center;align-items:center}.img.svelte-18wd5r9{width:60%;margin:0 auto}@media screen and (max-width: 768px){.img.svelte-18wd5r9{height:200px;margin-top:20px}.wrapper__text.svelte-18wd5r9{width:90%;height:100%}}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${validate_component(Header, "Header").$$render($$result, {}, {}, {})} <div class="container svelte-18wd5r9"><h1 class="title svelte-18wd5r9" data-svelte-h="svelte-5sxnsf">Agence Web de Lyon Ouest</h1> <div class="wrapper__img svelte-18wd5r9" data-svelte-h="svelte-1a1xhl3"><img class="img svelte-18wd5r9" src="https://www.aflyon.org/wp-content/uploads/2023/06/bandeau-lyon-vue-fourviere.jpg" alt="Lyon"></div> <div class="wrapper__text svelte-18wd5r9" data-svelte-h="svelte-10580vw"><h2 class="subtitle svelte-18wd5r9">Comment trouver une bonne agence Web à Lyon ?</h2> <h3 class="subtitle__h3 svelte-18wd5r9">La clarté des informations</h3> <p class="paragraph svelte-18wd5r9">Il est important de bien comprendre ce que l&#39;agence Web à Lyon vous propose. Son UX design doit être parfait. L&#39;UX design définit l&#39;ergonomie des pages que vous consultez. Elles doivent
			permettre une navigation simple, aérée, facile, lisible, compréhensible.</p> <h3 class="subtitle__h3 svelte-18wd5r9">La qualité des prestations</h3> <p class="paragraph svelte-18wd5r9">Vous devez comprendre que l&#39;agence Web expose des prestations fondées par une vraie expertise
			et que les pages que vous consultez ne consiste pas en un simple remplissage de template, pour
			faire joli et en mettre plein les yeux. Les prestations de création de site internet,
			d&#39;applications Web, de design, de création d&#39;identité visuelles (...) doivent être perçues
			comme des compétences maîtrisées et démontrées.</p> <h3 class="subtitle__h3 svelte-18wd5r9">Portfolio</h3> <p class="paragraph svelte-18wd5r9">Le portfolio, contenant des liens vers les réalisations effectuées par l&#39;agence web à Lyon, est essentiel.
			Il vaut mieux accéder à quelques réalisations que vous pouvez physiquement consulter, plutôt
			qu&#39;une suite d&#39;image sans lien qui peuvent être fictifs</p> <h3 class="subtitle__h3 svelte-18wd5r9">Avis</h3> <p class="paragraph svelte-18wd5r9">Evidemment les avis sont essentiels, mais ce peut-être des fakes...</p> <h2 class="subtitle svelte-18wd5r9">En résumé</h2> <p class="paragraph svelte-18wd5r9">En conclusion, nous pouvons dire que l&#39;expertise proposée par l&#39;agence web à Lyon, doit être
			quantifiable et vérifiée. Une agence digitale devrait pouvoir prouver qu&#39;elle contient des
			développeurs Web dans son équipe et que le code est une compétence maîtrisée. Surtout si elle
			vous propose un service d&#39;application Web. Consultez le portfolio et assurez-vous que les
			réalisations sont consultables et qu&#39;elles ont bien été réalisées par l&#39;agence.</p></div> ${validate_component(LinkSiteApplication, "Links").$$render($$result, {}, {}, {})} <div class="wrapper__faqLink">${validate_component(FaqLink, "FaqLink").$$render($$result, {}, {}, {})} <a href="/FAQ" data-svelte-h="svelte-ytks2v">FAQ</a></div> </div>`;
});
export {
  Page as default
};
