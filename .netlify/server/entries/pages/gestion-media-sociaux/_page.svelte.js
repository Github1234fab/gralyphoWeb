import { c as create_ssr_component, v as validate_component, d as add_attribute, f as each } from "../../../chunks/ssr.js";
import { H as Header } from "../../../chunks/Mouse.svelte_svelte_type_style_lang.js";
/* empty css                                                   */
import { S as Services } from "../../../chunks/Services.js";
/* empty css                                                            */
import { C as CardsSectionB } from "../../../chunks/CardsSectionB.js";
import { F as Form } from "../../../chunks/Form.js";
import { B as ButtonCTA } from "../../../chunks/ButtonCTA.js";
import { M as Mouse } from "../../../chunks/Mouse.js";
const redaction = "/_app/immutable/assets/writing.BHXJFI1M.png";
const contenuMedia = "/_app/immutable/assets/contenuMedia.Ba13xP-t.png";
const publiciteMedia = "/_app/immutable/assets/publiciteMedia.fhB7rHAp.png";
const socialMedia = "/_app/immutable/assets/socialMedia.DR9kIDxN.png";
const css = {
  code: ".sites-section.svelte-17e38k5.svelte-17e38k5{display:flex;flex-direction:column;background-color:rgb(245, 244, 244);height:auto;font-size:16px}.imgHero.svelte-17e38k5.svelte-17e38k5{max-width:30%;min-width:30%;margin-top:30px}.hero.svelte-17e38k5.svelte-17e38k5{display:flex;flex-direction:column;align-items:center;justify-content:center;height:auto}.hero.svelte-17e38k5 h1.svelte-17e38k5{text-align:center;font-family:var(--Geologica);font-weight:900;font-size:2rem;color:var(--primary);margin-top:0px;letter-spacing:-1px;padding:0px;line-height:50px;margin-top:70px}.hero.svelte-17e38k5 h1 span.svelte-17e38k5{color:var(--green)}.hero.svelte-17e38k5 h2.svelte-17e38k5{font-family:poppins;font-weight:300;font-size:var(--m);color:var(--primary);text-align:center;margin-top:50px;margin-bottom:50px;width:80%}.container-service.svelte-17e38k5.svelte-17e38k5{display:flex;flex-direction:column;justify-content:center;align-items:center;margin-top:0px;margin-bottom:100px;padding:20px}.container-service.svelte-17e38k5 h1.svelte-17e38k5{text-align:center;font-family:'Red Hat Display';font-size:var(--l);font-weight:700;color:var(--primary);margin-top:50px;margin-bottom:100px;letter-spacing:-1px}.wrapper-service.svelte-17e38k5.svelte-17e38k5{display:flex;flex-wrap:wrap;justify-content:center;align-items:stretch;gap:20px;margin-top:20px;min-height:100%}.wrapper-SectionB.svelte-17e38k5.svelte-17e38k5{display:flex;flex-direction:column;justify-content:center;align-items:center;margin-top:0px;margin-bottom:100px;background-color:var(--whiteGrey)}.wrapper-SectionB.svelte-17e38k5 h1.svelte-17e38k5{text-align:center;font-family:'Red Hat Display';font-size:var(--l);font-weight:700;color:var(--primary);margin-top:0px;letter-spacing:-1px;margin-top:50px;margin-bottom:100px}.wrapper-form.svelte-17e38k5.svelte-17e38k5{display:flex;flex-direction:column;justify-content:center;align-items:center;background-color:var(--bgHero)}.testimonial.svelte-17e38k5.svelte-17e38k5{display:flex;flex-direction:column;justify-content:center;align-items:center;margin-top:0px;height:500px;background-image:linear-gradient(var(--primary), var(--secondary));padding:50px;gap:20px;border-bottom:1px solid rgb(79, 78, 78)}.testimonial.svelte-17e38k5 h2.svelte-17e38k5{font-family:'Poppins';font-weight:400;font-size:var(--m);color:white;text-align:center;line-height:40px;letter-spacing:0px}@keyframes svelte-17e38k5-bounce{0%{transform:scale(1) translateY(-2px)}25%{transform:scale(1) translateY(3px)}50%{transform:scale(1) translateY(-1px)}75%{transform:scale(1) translateY(2px)}100%{transform:scale(1) translateY(0)}}@media screen and (min-width: 1224px) and (max-width: 2500px){.hero.svelte-17e38k5 h1.svelte-17e38k5{line-height:1em}}@media screen and (min-width: 768px) and (max-width: 1224px){.hero.svelte-17e38k5 h1.svelte-17e38k5{line-height:1em}}@media screen and (min-width: 300px) and (max-width: 768px){.hero.svelte-17e38k5 h1.svelte-17e38k5{line-height:50px;font-size:2.5em}.imgHero.svelte-17e38k5.svelte-17e38k5{max-width:60%;min-width:60%;margin-top:30px}.wrapper-service.svelte-17e38k5.svelte-17e38k5{display:flex;flex-direction:column;justify-content:center;align-items:center;gap:10px;margin-top:20px;margin-bottom:50px;flex-wrap:nowrap}}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let accordeonTab = [
    {
      title: "Tarifs",
      p: "Nos forfaits de gestion des médias sociaux démarrent autour de 500 euros. Plus la mission est complexe plus le tarif grimpe, mais nous avons des solutions sous forme de  forfait, très intéressantes et très compétitives."
    },
    {
      title: "Contenu des missions de gestion des médias sociaux",
      p: "Le contenu des missions de gestion des médias sociaux portent essentiellement sur la conception des posts et des campagnes publicitaires pour votre marque ou votre business. Nous gérons la rédaction des annonces, leur contenu, leur fréquence et leur diffusion."
    }
  ];
  $$result.css.add(css);
  return `${validate_component(Mouse, "Mouse").$$render($$result, {}, {}, {})} ${validate_component(Header, "Header").$$render($$result, {}, {}, {})}  <section class="sites-section svelte-17e38k5"><div class="hero svelte-17e38k5"><img${add_attribute("src", socialMedia, 0)} alt="" class="imgHero svelte-17e38k5"> <h1 class="svelte-17e38k5" data-svelte-h="svelte-18h14ja">Gestion des <br><span class="svelte-17e38k5">Médias Sociaux</span></h1> <h2 class="svelte-17e38k5" data-svelte-h="svelte-95g3iq">L&#39;agence Gralypho s&#39;occupe de la gestion de vos réseaux sociaux. <br>
			Mises à jour régulières, création de contenu, gestion des interactions, etc. <br> Nous nous occupons
			de tout pour vous permettre de vous concentrer sur votre activité.</h2> ${validate_component(ButtonCTA, "Button").$$render($$result, {}, {}, {})}</div>  <div class="container-service svelte-17e38k5"><h1 class="svelte-17e38k5" data-svelte-h="svelte-uq95kc">Nos services de médias sociaux</h1> <div class="wrapper-service svelte-17e38k5">${validate_component(Services, "Service").$$render(
    $$result,
    {
      text: "Rédaction",
      description: "Nous nous chargeons de la conception de vos annonces. Leurs titres, leur contenu textuel, leurs slogans, leurs mots clefs. Derrière cette forme d'écriture se cache une vraie stratégie marketing. ",
      img: redaction,
      lien: "/Media-infos"
    },
    {},
    {}
  )} ${validate_component(Services, "Service").$$render(
    $$result,
    {
      text: "Création des contenus images et vidéos",
      img: contenuMedia,
      description: "Nous pouvons créer vos vidéos et vos images. Nous sommes formés à la conception d'image professionnelle. Que ce soit en photographie  et vidéo de produits, de portraits , de photos corporate, de groupe ou d'environnement (...), notre expertise fera la différence sur vos contenus et vos publications sortirons du lot, à coup sûr.",
      lien: "/Media-infos"
    },
    {},
    {}
  )} ${validate_component(Services, "Service").$$render(
    $$result,
    {
      text: "Campagnes publicitaires",
      description: "Nous sommes là pour vous aider à établir vos stratégies publicitaires et vos campagnes. Quand ?  Comment ? Pourquoi ? sont les questions auxquelles nous apporterons une réponse pertinente et sans faille pour vous permettre d'atteindre vos objectifs.",
      img: publiciteMedia,
      lien: "/Media-infos"
    },
    {},
    {}
  )} ${validate_component(Services, "Service").$$render(
    $$result,
    {
      text: "Formation et coaching",
      description: "Et pourquoi pas se former aux médias sociaux afin de devenir autonome et d'organiser vos campagnes et votre contenu vous-même? Nous pouvons vous former à travers des ateliers en ligne ou en présentiel adaptés à vos besoins et à votre business.",
      img: socialMedia,
      lien: "/Media-infos"
    },
    {},
    {}
  )}</div></div>  <div class="wrapper-SectionB svelte-17e38k5"><h1 class="svelte-17e38k5" data-svelte-h="svelte-11r2mc7">Les avantages de la gestion <br> des médias sociaux</h1> ${each(accordeonTab, (tab) => {
    return `${validate_component(CardsSectionB, "CardsSectionB").$$render($$result, { title: tab.title, p: tab.p }, {}, {})}`;
  })}</div>    <div class="testimonial svelte-17e38k5" data-svelte-h="svelte-rad2lk"><h2 class="svelte-17e38k5">J’aime les médias sociaux car ils existent à l’intersection de l’humanité et de la technologie
			– @jeremywaite</h2></div>  <div class="wrapper-form svelte-17e38k5">${validate_component(Form, "Form").$$render($$result, {}, {}, {})}</div> </section>`;
});
export {
  Page as default
};
