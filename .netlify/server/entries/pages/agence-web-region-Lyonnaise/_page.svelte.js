import { c as create_ssr_component, v as validate_component } from "../../../chunks/ssr.js";
import { F as FaqLink } from "../../../chunks/FaqLink.js";
import { H as Header } from "../../../chunks/Header.js";
import { L as LinkSiteApplication } from "../../../chunks/LinkSiteApplication.js";
const css = {
  code: ".container.svelte-1c7ibhx{height:100%}.wrapper__text.svelte-1c7ibhx{display:flex;flex-direction:column;justify-content:center;align-items:center;width:80%;margin:0 auto}.title.svelte-1c7ibhx{font-family:var(--Geologica);font-size:var(--l);color:var(--primary);font-weight:900;margin-bottom:10px;letter-spacing:-1px;text-align:center;line-height:35px;margin-top:50px;padding:20px}.subtitle.svelte-1c7ibhx{font-family:var(--Geologica);font-size:1.5rem;color:var(--primary);font-weight:500;letter-spacing:-1px;text-align:center;line-height:40px;margin-top:30px;padding:25px}.subtitle__h3.svelte-1c7ibhx{font-family:var(--Geologica);font-size:var(--m);color:var(--primary);font-weight:700;letter-spacing:-1px;text-align:center;margin-top:30px}.paragraph.svelte-1c7ibhx{font-family:var(--Poppins);font-size:var(--m);color:var(--primary);font-weight:300;letter-spacing:-0.02em;text-align:center;align-self:center;padding:20px}.wrapper__img.svelte-1c7ibhx{display:flex;justify-content:center}.img.svelte-1c7ibhx{width:auto;height:400px;padding:20px}@media screen and (max-width: 768px){.img.svelte-1c7ibhx{width:auto;height:300px;padding:20px}}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${validate_component(Header, "Header").$$render($$result, {}, {}, {})} <div class="container svelte-1c7ibhx"><h1 class="title svelte-1c7ibhx" data-svelte-h="svelte-1bmvp9i">Gralypho, agence web <br> de la région Lyonnaise.</h1> <div class="wrapper__img svelte-1c7ibhx" data-svelte-h="svelte-8978ls"><img class="img svelte-1c7ibhx" src="https://fr.maps-lyon.com/img/1200/lyon-carte-de-la-r%C3%A9gion.jpg" alt="cart de la région Lyonnaise"></div> <div class="wrapper__text svelte-1c7ibhx" data-svelte-h="svelte-1fr7dia"><h2 class="subtitle svelte-1c7ibhx">Annecy, Genève, Lyon, Saint-Etienne, Bourg-en-Bresse, Valence ...</h2> <h3 class="subtitle__h3 svelte-1c7ibhx">Les grandes villes de la région Lyonnaise, à moins de 100km de l&#39;ouest Lyonnais.</h3> <p class="paragraph svelte-1c7ibhx">La région Lyonnaise est dense et dynamique. Les villes de la région sont proches les unes des
			autres et les échanges sont nombreux.
			<br> Les entreprises de la région Lyonnaise ont des besoins digitaux variés: des sites web
			Vitrine, des sites internet e-commerce, des sites web corporate, des sites institutionnels,
			des applications sur mesure, tous les besoins sont exprimés.
			<br> En tant qu&#39;agence Web, nous visons l&#39;excellence et la satisfaction de nos clients. Nous
			sommes à l&#39;écoute de de chaque besoin et nous nous adaptons à chaque demande. Notre coeur de métier
			est la création d&#39;outils digitaux sur mesure.</p> <h2 class="subtitle svelte-1c7ibhx">La force du digital, le travail en visio et l&#39;écologie préservée !</h2> <h3 class="subtitle__h3 svelte-1c7ibhx">Nous nous dépaçons seulement quand c&#39;est nécessaire.</h3> <p class="paragraph svelte-1c7ibhx">L&#39;avantage de notre métier de conception d&#39;outil digitaux est que nous pouvons travailler à
			distance. Nous pouvons donc travailler avec des clients de toute la région Lyonnaise sans nous
			déplacer.
			<br> Notre premier rendez-vous est gratuit. C&#39;est l&#39;occasion d&#39;effectuer un audi général
			avec notre client afin de comprendre ses besoins et ses attentes. Ce rendez-vous est
			nécessairement en présentiel pour un premier contact plus humain.
			<br> Ensuite, les différentes étapes de la conception de l&#39;outil digital se font à distance.
			Nous utilisons des outils de visioconférence pour échanger avec nos clients et leur présenter
			les avancées du projet. À la livraison, nous nous rendons une nouvelle fois sur place. <br>
			Ainsi, nous limitons nos déplacements et nous préservons l&#39;environnement.</p></div> ${validate_component(LinkSiteApplication, "Links").$$render($$result, {}, {}, {})} <div class="wrapper__faqLink">${validate_component(FaqLink, "FaqLink").$$render($$result, {}, {}, {})} <a href="/FAQ" data-svelte-h="svelte-ytks2v">FAQ</a></div> </div>`;
});
export {
  Page as default
};
