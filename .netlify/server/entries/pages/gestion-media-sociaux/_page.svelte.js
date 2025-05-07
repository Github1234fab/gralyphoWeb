import { c as create_ssr_component, e as escape, d as add_attribute, v as validate_component } from "../../../chunks/ssr.js";
import { H as Header } from "../../../chunks/Header.js";
/* empty css                                                   */
/* empty css                                                     */
/* empty css                                                            */
/* empty css                                                          */
import { F as Form } from "../../../chunks/Form.js";
import { B as ButtonCTA } from "../../../chunks/ButtonCTA.js";
import { F as FaqLink } from "../../../chunks/FaqLink.js";
import { L as LinkSiteApplication } from "../../../chunks/LinkSiteApplication.js";
import { M as Mouse } from "../../../chunks/Mouse.js";
const css$1 = {
  code: ".card-services.svelte-wvnl31{display:flex;flex-direction:column;justify-content:center;align-items:center;gap:20px;min-height:600px;max-width:50%;background-color:var(--primary);overflow:hidden;padding:20px;box-shadow:0px 0px 10px rgba(0, 0, 0, 0.526)}.wrapper-text.svelte-wvnl31{display:flex;flex-direction:column;align-items:flex-start;justify-content:flex-start;padding:20px}.text-services.svelte-wvnl31{font-family:var(--Red);font-weight:800;color:var(--whiteGrey);font-size:var(--l);text-align:left}.description-services.svelte-wvnl31{font-family:poppins;font-weight:400;color:var(--whiteGrey);font-size:var(--s);text-align:left;letter-spacing:-0em;margin-top:20px}.img-services.svelte-wvnl31{width:auto;height:200px}.button-service.svelte-wvnl31{min-width:150px;height:50px;color:var(--colorC);border:2px solid var(--whiteGrey);background-color:var(--cta);border-radius:8px;color:var(--whiteGrey);font-family:epilogue;font-weight:500;font-size:1rem;cursor:pointer;box-shadow:0px 0px 10px rgba(76, 76, 76, 0.35);margin-top:40px;margin-bottom:30px}.button-service.svelte-wvnl31:hover{animation:svelte-wvnl31-bounce 0.4s ease-in-out}@keyframes svelte-wvnl31-bounce{0%{transform:scale(1) translateY(-2px)}25%{transform:scale(1.1) translateY(-2px)}50%{transform:scale(1) translateY(-2px)}75%{transform:scale(1.1) translateY(-2px)}100%{transform:scale(1) translateY(-2px)}}@media screen and (max-width: 768px){.card-services.svelte-wvnl31{display:flex;flex-direction:column;justify-content:center;align-items:center;gap:20px;flex:none;max-width:90%;min-height:0%}}",
  map: null
};
const Services = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { text } = $$props;
  let { img } = $$props;
  let { description } = $$props;
  let { lien } = $$props;
  if ($$props.text === void 0 && $$bindings.text && text !== void 0)
    $$bindings.text(text);
  if ($$props.img === void 0 && $$bindings.img && img !== void 0)
    $$bindings.img(img);
  if ($$props.description === void 0 && $$bindings.description && description !== void 0)
    $$bindings.description(description);
  if ($$props.lien === void 0 && $$bindings.lien && lien !== void 0)
    $$bindings.lien(lien);
  $$result.css.add(css$1);
  return `<div class="card-services svelte-wvnl31"><div class="wrapper-text svelte-wvnl31"><h2 class="text-services svelte-wvnl31">${escape(text)}</h2> <p class="description-services svelte-wvnl31">${escape(description)}</p></div> <img class="img-services svelte-wvnl31"${add_attribute("src", img, 0)} alt=""> <a${add_attribute("href", lien, 0)}><button class="button-service svelte-wvnl31" data-svelte-h="svelte-1w7mb7r">En savoir +</button></a> </div>`;
});
const redaction = "/_app/immutable/assets/writing.BHXJFI1M.png";
const contenuMedia = "/_app/immutable/assets/contenuMedia.Ba13xP-t.png";
const publiciteMedia = "/_app/immutable/assets/publiciteMedia.fhB7rHAp.png";
const socialMedia = "/_app/immutable/assets/socialMedia.DR9kIDxN.png";
const css = {
  code: ".sites-section.svelte-11v2rrr.svelte-11v2rrr{display:flex;flex-direction:column;background-color:rgb(245, 244, 244);height:auto;font-size:16px}.imgHero.svelte-11v2rrr.svelte-11v2rrr{max-width:30%;min-width:30%;margin-top:30px}.hero.svelte-11v2rrr.svelte-11v2rrr{display:flex;flex-direction:column;align-items:center;justify-content:center;height:auto}.hero.svelte-11v2rrr h1.svelte-11v2rrr{text-align:center;font-family:var(--Geologica);font-weight:900;font-size:2rem;color:var(--primary);margin-top:0px;letter-spacing:-1px;padding:0px;line-height:50px;margin-top:70px;padding:15px}.hero.svelte-11v2rrr h1 span.svelte-11v2rrr{color:var(--green)}.hero.svelte-11v2rrr h2.svelte-11v2rrr{font-family:poppins;font-weight:300;font-size:var(--m);color:var(--primary);text-align:center;margin-top:50px;margin-bottom:50px;width:80%}.container-service.svelte-11v2rrr.svelte-11v2rrr{display:flex;flex-direction:column;justify-content:center;align-items:center;margin-top:0px;padding:20px}.container-service.svelte-11v2rrr h1.svelte-11v2rrr{text-align:center;font-family:'Red Hat Display';font-size:var(--l);font-weight:700;color:var(--primary);margin-top:50px;margin-bottom:100px;letter-spacing:-1px;padding:10px}.wrapper-service.svelte-11v2rrr.svelte-11v2rrr{display:flex;justify-content:center;gap:10px;margin-top:20px;height:auto}.wrapper-form.svelte-11v2rrr.svelte-11v2rrr{display:flex;flex-direction:column;justify-content:center;align-items:center;background-color:var(--bgHero)}.testimonial.svelte-11v2rrr.svelte-11v2rrr{display:flex;flex-direction:column;justify-content:center;align-items:center;margin-top:0px;height:500px;background:var(--gradient);padding:50px;gap:20px;border-bottom:1px solid rgb(79, 78, 78)}.testimonial.svelte-11v2rrr h2.svelte-11v2rrr{font-family:'Poppins';font-weight:400;font-size:var(--m);color:white;text-align:center;line-height:40px;letter-spacing:0px}@keyframes svelte-11v2rrr-bounce{0%{transform:scale(1) translateY(-2px)}25%{transform:scale(1) translateY(3px)}50%{transform:scale(1) translateY(-1px)}75%{transform:scale(1) translateY(2px)}100%{transform:scale(1) translateY(0)}}@media screen and (min-width: 1224px) and (max-width: 2500px){.hero.svelte-11v2rrr h1.svelte-11v2rrr{line-height:1em}}@media screen and (min-width: 768px) and (max-width: 1224px){.hero.svelte-11v2rrr h1.svelte-11v2rrr{line-height:1em}}@media screen and (min-width: 300px) and (max-width: 1022px){.hero.svelte-11v2rrr h1.svelte-11v2rrr{line-height:50px;font-size:2.5em}.imgHero.svelte-11v2rrr.svelte-11v2rrr{max-width:60%;min-width:60%;margin-top:30px}.wrapper-service.svelte-11v2rrr.svelte-11v2rrr{display:flex;flex-direction:column;justify-content:center;align-items:center;gap:10px;margin-top:20px}}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${validate_component(Mouse, "Mouse").$$render($$result, {}, {}, {})} ${validate_component(Header, "Header").$$render($$result, {}, {}, {})}  <section class="sites-section svelte-11v2rrr"><div class="hero svelte-11v2rrr"><img${add_attribute("src", socialMedia, 0)} alt="" class="imgHero svelte-11v2rrr"> <h1 class="svelte-11v2rrr" data-svelte-h="svelte-18h14ja">Gestion des <br><span class="svelte-11v2rrr">Médias Sociaux</span></h1> <h2 class="svelte-11v2rrr" data-svelte-h="svelte-1d0peuf">L&#39;agence Gralypho s&#39;occupe de la gestion de vos réseaux sociaux. <br>
			Mises à jour régulières, création de contenu vidéo et photo, gestion des interactions, etc. <br> Nous nous occupons
			de tout pour vous permettre d&#39;atteindre votre public cible et de développer votre business.</h2> ${validate_component(ButtonCTA, "Button").$$render($$result, {}, {}, {})}</div>  <div class="container-service svelte-11v2rrr"><h1 class="svelte-11v2rrr" data-svelte-h="svelte-uq95kc">Nos services de médias sociaux</h1> <div class="wrapper-service svelte-11v2rrr">${validate_component(Services, "Service").$$render(
    $$result,
    {
      text: "Les différents types de contenus à poster.",
      description: "Nous nous chargeons de la conception de votre contenu à poster sur les réseaux sociaux. Les titres, le contenu textuel, les slogans, le choix des mots clefs... ",
      img: redaction,
      lien: "/community-management"
    },
    {},
    {}
  )} ${validate_component(Services, "Service").$$render(
    $$result,
    {
      text: "Service professionnel de création de contenu visuel.",
      img: contenuMedia,
      description: "Notre service de création de vidéo et photographie professionnelle vous permettra de vous démarquer sur les réseaux sociaux. Nous vous aidons à créer des contenus visuels de haute qualité.",
      lien: "/community-management"
    },
    {},
    {}
  )} ${validate_component(Services, "Service").$$render(
    $$result,
    {
      text: "Les campagnes publicitaires ADS.",
      description: "Nous sommes là pour vous aider à établir vos stratégies publicitaires et vos campagnes. Quand ?  Comment ? Pourquoi ? sont les questions auxquelles nous apporterons une réponse pertinente et sans faille pour vous permettre d'atteindre vos objectifs.",
      img: publiciteMedia,
      lien: "/community-management"
    },
    {},
    {}
  )} </div></div> ${validate_component(LinkSiteApplication, "Links").$$render($$result, {}, {}, {})} <div class="testimonial svelte-11v2rrr" data-svelte-h="svelte-rad2lk"><h2 class="svelte-11v2rrr">J’aime les médias sociaux car ils existent à l’intersection de l’humanité et de la technologie
			– @jeremywaite</h2></div>  <div class="wrapper__faqLink">${validate_component(FaqLink, "FaqLink").$$render($$result, {}, {}, {})} <a href="/FAQ/#reseau" data-svelte-h="svelte-1h9gkkc">FAQ</a></div> <div class="wrapper-form svelte-11v2rrr">${validate_component(Form, "Form").$$render($$result, {}, {}, {})}</div> </section>`;
});
export {
  Page as default
};
