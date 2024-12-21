import { c as create_ssr_component, v as validate_component, d as add_attribute, f as each } from "../../../chunks/ssr.js";
import { H as Header } from "../../../chunks/Mouse.svelte_svelte_type_style_lang.js";
/* empty css                                                   */
/* empty css                                                            */
import { C as CardsSectionB } from "../../../chunks/CardsSectionB.js";
import { F as Form } from "../../../chunks/Form.js";
import { M as Mouse } from "../../../chunks/Mouse.js";
import { B as ButtonCTA } from "../../../chunks/ButtonCTA.js";
const seo = "/_app/immutable/assets/seo3.Dz4cq-kb.png";
const css = {
  code: ".sites-section.svelte-ij3ncb.svelte-ij3ncb{display:grid;grid-template-columns:repeat(12, 1fr);grid-template-rows:auto;background-color:rgb(245, 244, 244);height:auto;font-size:16px}.hero.svelte-ij3ncb.svelte-ij3ncb{grid-column:1/13;grid-row:1;display:flex;flex-direction:column;align-items:center;justify-content:center;height:auto}.hero.svelte-ij3ncb h1.svelte-ij3ncb{text-align:center;font-family:var(--Geologica);font-weight:900;font-size:2.5rem;color:var(--primary);margin-top:0px;letter-spacing:-2px;padding:0px;line-height:50px;margin-top:70px}.hero.svelte-ij3ncb h1 span.svelte-ij3ncb{color:var(--green)}.hero.svelte-ij3ncb h2.svelte-ij3ncb{font-family:poppins;font-weight:300;font-size:var(--m);color:var(--primary);text-align:center;margin-top:50px;margin-bottom:100px;width:80%}.imgHero.svelte-ij3ncb.svelte-ij3ncb{max-width:30%;min-width:30%;margin-top:30px}.wrapper-SectionB.svelte-ij3ncb.svelte-ij3ncb{grid-column:1/13;grid-row:6;display:flex;flex-direction:column;justify-content:center;align-items:center;margin-top:0px;margin-bottom:50px}.wrapper-SectionB.svelte-ij3ncb h2.svelte-ij3ncb{font-family:'Red Hat Display';font-size:var(--l);color:var(--primary);font-weight:700;margin-top:50px;letter-spacing:-0.04em;margin-left:0px;text-align:center;margin-bottom:50px}.wrapper-form.svelte-ij3ncb.svelte-ij3ncb{grid-column:1/13;grid-row:7;display:flex;flex-direction:column;justify-content:center;align-items:center;background-color:var(--bgHero)}.testimonial.svelte-ij3ncb.svelte-ij3ncb{grid-column:1/13;grid-row:5;display:flex;flex-direction:column;justify-content:center;align-items:center;margin-top:100px;min-height:700px;background-image:linear-gradient(var(--primary), var(--secondary));padding:30px;gap:60px}.testimonial.svelte-ij3ncb h1.svelte-ij3ncb{font-family:'Poppins';font-weight:700;font-size:var(--l);color:var(--whiteGrey);text-align:center;line-height:40px;letter-spacing:0px;margin-bottom:30px;margin-top:30px}.testimonial.svelte-ij3ncb h2.svelte-ij3ncb{font-family:'Poppins';font-weight:300;font-size:var(--m);color:var(--whiteGrey);text-align:center;line-height:40px;letter-spacing:0px;margin-top:-30px}@keyframes svelte-ij3ncb-bounce{0%{transform:scale(1) translateY(-2px)}25%{transform:scale(1) translateY(3px)}50%{transform:scale(1) translateY(-1px)}75%{transform:scale(1) translateY(2px)}100%{transform:scale(1) translateY(0)}}@media screen and (min-width: 1224px) and (max-width: 2500px){.hero.svelte-ij3ncb h1.svelte-ij3ncb{line-height:1em}}@media screen and (min-width: 768px) and (max-width: 1224px){.hero.svelte-ij3ncb h1.svelte-ij3ncb{line-height:1em}}@media screen and (min-width: 300px) and (max-width: 768px){.hero.svelte-ij3ncb h1.svelte-ij3ncb{line-height:50px;font-size:2.5em}.imgHero.svelte-ij3ncb.svelte-ij3ncb{max-width:60%;min-width:60%;margin-top:30px}}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let accordeonTab = [
    {
      title: "Tarifs",
      p: "Nous proposons des stratégies courtes, le plus souvent en répondant à une problémétiques sur des sites existant. Nous proposons également des stratégies longues sous forme d'abonnement  afin d'atteindre un objectif fixé à l'avance. Nos tarfis sur les stratégie SEO et SEA débutent à partir de 500 euros et ne dépassent guère 2000 euros. "
    },
    {
      title: "Stratégie SEO",
      p: "Le SEO, pour Search Engine Optimization, constitue un ensemble de techniques et de bonnes pratiques (W3C), permettant à un site web d'être convenablement référencé sur les moteurs de recherche. La quête est d'obtenir une place privilégiée en première page des navigateurs selon la recherche utilisée par les internautes. Les normes du W3C peuvent pénaliser le site inernet en terme de référencement si elles ne sont pas respectées et les moteurs sont de plus en plus exigeants. Un référencement optimal consiste en un mix entre le respect des normes du W3C,  la syntaxe utlisée sur le site, l'usage des bons mots clefs et d'autres techniques permettant de placer un site internet dans les conditions optimales du référencement naturel"
    },
    {
      title: "Stratégie SEA",
      p: " Le référencement payant, le SEA, il requiert de très bonnes connaissances en matière d'outil de promotion marketing. Il s'agit de campagne de publicité qui peuvent être diffusés sur des sites partenaires, sur les réseaux ou en haut de page des moteurs de recherche, ou les deux. Ces outils d'apparence assez simples sont en réalité très complexes. Chaque mot clef est payant, une stratégie est donc nécessaire en amont. La qualité de la rédaction de l'annonce doit être pertinente et s'adresser facilement et directement au coeur de cible. Les annonces peuvent être automatisées et se déclencher à des périodes déterminées."
    }
  ];
  $$result.css.add(css);
  return `${validate_component(Mouse, "Mouse").$$render($$result, {}, {}, {})} ${validate_component(Header, "Header").$$render($$result, {}, {}, {})}  <section class="sites-section svelte-ij3ncb"><div class="hero svelte-ij3ncb"><img${add_attribute("src", seo, 0)} alt="" class="imgHero svelte-ij3ncb"> <h1 class="svelte-ij3ncb" data-svelte-h="svelte-iow16n">Visibilité:<br><span class="svelte-ij3ncb">SEO/SEA</span></h1> <h2 class="svelte-ij3ncb" data-svelte-h="svelte-11cdkb1">Nous sommes experts en straégie SEO et SEA. C&#39;est pour vous la garantie unique d&#39;atteindre vos
			futurs clients et d&#39;obtenir une visibilité optimale sur les moteurs de recherche. <br><br>Nous vous accompagnons dans la mise en place de votre stratégie de référencement naturel
			(SEO) et votre stratégie de référencement payant. (SEA). <br><br>Il faut maintenant
			compter avec les IA et notamment &quot;Search&quot; d&#39;openAI. C&#39;est une nouvelle stratégie qui constitue
			un enjeu crucial dans les nouvelles satrtégies de référencement.</h2> ${validate_component(ButtonCTA, "Button").$$render($$result, {}, {}, {})}</div>  <div class="wrapper-SectionB svelte-ij3ncb"><h2 class="svelte-ij3ncb" data-svelte-h="svelte-15zutjr">Optez pour un référencement gagnant. <br>Touchez votre ❤️ de cible <br>pour être visible.</h2> ${each(accordeonTab, (tab) => {
    return `${validate_component(CardsSectionB, "CardsSectionB").$$render($$result, { title: tab.title, p: tab.p }, {}, {})}`;
  })}</div>    <div class="testimonial svelte-ij3ncb" data-svelte-h="svelte-prsvsz"><h1 class="svelte-ij3ncb">Stratégie SEO, <br> les chiffres .</h1> <h2 class="svelte-ij3ncb">Le SEO génère plus de 1 000% de trafic par rapport aux stratégies sur les réseaux sociaux
			organiques .<br><br>
			92,96% du trafic global provient de Google Search, Google Images et Google Maps. <br><br>
			53,3% de tout le trafic de site provient de la recherche organique. <br><br>
			68% des expériences en ligne commencent par un moteur de recherche. <br><br></h2></div>  <div class="wrapper-form svelte-ij3ncb">${validate_component(Form, "Form").$$render($$result, {}, {}, {})}</div> </section>`;
});
export {
  Page as default
};
