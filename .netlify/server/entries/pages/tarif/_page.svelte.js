import { c as create_ssr_component, e as escape, f as each, v as validate_component } from "../../../chunks/ssr.js";
import { M as Mouse } from "../../../chunks/Mouse.js";
import { H as Header } from "../../../chunks/Mouse.svelte_svelte_type_style_lang.js";
import { F as Form } from "../../../chunks/Form.js";
const css$1 = {
  code: ".card-tarif.svelte-sb0tqu.svelte-sb0tqu{display:flex;flex-direction:column;align-items:center;min-height:600px;max-width:300px;border-radius:15px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.182);margin-top:20px;margin-bottom:20px;flex-basis:30%}.title-banner.svelte-sb0tqu.svelte-sb0tqu{display:flex;flex-direction:column;justify-content:center;align-items:center;margin-bottom:20px;background-color:rgb(226, 160, 37);gap:0px;padding:30px;background-color:rgb(226, 160, 37);width:100%}.title-banner.svelte-sb0tqu h1.svelte-sb0tqu{font-size:var(--l);color:rgb(255, 255, 255);font-family:'Radio Canada Big'}.title-banner.svelte-sb0tqu h2.svelte-sb0tqu{font-family:'Radio Canada Big';font-weight:100;font-size:1.2rem;color:rgb(255, 255, 255)}.center-card.svelte-sb0tqu.svelte-sb0tqu{display:flex;flex-direction:column;justify-content:space-between;align-items:center;min-height:400px}.wrapper-tarif-euro.svelte-sb0tqu.svelte-sb0tqu{display:flex;flex-direction:column;justify-content:center;align-items:center;margin-bottom:20px;margin-top:20px}.tarif-euro.svelte-sb0tqu.svelte-sb0tqu{font-family:'Radio Canada Big';font-size:var(--l);color:var(--primary)}.subtarif-euro.svelte-sb0tqu.svelte-sb0tqu{font-family:'Heebo';font-size:1.5rem;color:var(--primary);font-weight:100}.rubriques.svelte-sb0tqu.svelte-sb0tqu{display:flex;flex-direction:column;justify-content:center;align-items:center;margin-bottom:50px;min-height:300px}.li-rubrique.svelte-sb0tqu.svelte-sb0tqu{color:var(--primary);font-family:'Heebo';list-style-type:none;position:relative;margin-bottom:10px;font-weight:300}.li-rubrique.svelte-sb0tqu.svelte-sb0tqu::before{content:'➡️';position:absolute;left:-30px;top:-3px}.contact-tarif.svelte-sb0tqu.svelte-sb0tqu{font-family:'Radio Canada Big';display:flex;justify-content:center;align-items:center;color:var(--colorC);border:3px solid rgb(239, 238, 238);background-color:var(--cta);font-size:1rem;border-radius:8px;padding:20px 20px;text-decoration:none;font-size:var(--m);margin-bottom:20px;font-weight:500}.contact-tarif.svelte-sb0tqu.svelte-sb0tqu:hover{background-color:rgb(0, 0, 0);color:rgb(255, 255, 255)}.title-banner-bg-color1.svelte-sb0tqu.svelte-sb0tqu{background-color:#c55656}.title-banner-bg-color2.svelte-sb0tqu.svelte-sb0tqu{background-color:#127012}.title-banner-bg-color3.svelte-sb0tqu.svelte-sb0tqu{background-color:#4040bb}.title-banner-bg-color4.svelte-sb0tqu.svelte-sb0tqu{background-color:#e84b70}.title-banner-bg-color5.svelte-sb0tqu.svelte-sb0tqu{background-color:#3c1e63}.title-banner-bg-color6.svelte-sb0tqu.svelte-sb0tqu{background-color:#4a1a40}@media screen and (max-width: 1365px){.title-banner.svelte-sb0tqu h1.svelte-sb0tqu{font-size:2em}}@media(max-width: 768px){.card-tarif.svelte-sb0tqu.svelte-sb0tqu{min-height:800px;min-width:320px}.title-banner.svelte-sb0tqu h1.svelte-sb0tqu{font-size:2.5rem;color:rgb(255, 255, 255);font-family:'Radio Canada Big'}}",
  map: null
};
const Tarifs_Cards = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { titleH1 } = $$props;
  let { titleH2 } = $$props;
  let { tarifEuro } = $$props;
  let { subTarifEuro } = $$props;
  let { rubriques } = $$props;
  let { index } = $$props;
  if ($$props.titleH1 === void 0 && $$bindings.titleH1 && titleH1 !== void 0)
    $$bindings.titleH1(titleH1);
  if ($$props.titleH2 === void 0 && $$bindings.titleH2 && titleH2 !== void 0)
    $$bindings.titleH2(titleH2);
  if ($$props.tarifEuro === void 0 && $$bindings.tarifEuro && tarifEuro !== void 0)
    $$bindings.tarifEuro(tarifEuro);
  if ($$props.subTarifEuro === void 0 && $$bindings.subTarifEuro && subTarifEuro !== void 0)
    $$bindings.subTarifEuro(subTarifEuro);
  if ($$props.rubriques === void 0 && $$bindings.rubriques && rubriques !== void 0)
    $$bindings.rubriques(rubriques);
  if ($$props.index === void 0 && $$bindings.index && index !== void 0)
    $$bindings.index(index);
  $$result.css.add(css$1);
  return `<div class="card-tarif svelte-sb0tqu"><div class="${"title-banner title-banner-bg-color" + escape(index % 6 + 1, true) + " svelte-sb0tqu"}"><h1 class="svelte-sb0tqu">${escape(titleH1)}</h1> <h2 class="svelte-sb0tqu">${escape(titleH2)}</h2></div> <div class="center-card svelte-sb0tqu"><div class="wrapper-tarif-euro svelte-sb0tqu"><h3 class="subtarif-euro svelte-sb0tqu">${escape(subTarifEuro)}</h3> <h2 class="tarif-euro svelte-sb0tqu">${escape(tarifEuro)}</h2></div> <div class="rubriques svelte-sb0tqu"><ul>${each(rubriques, (rubrique) => {
    return `<li class="li-rubrique svelte-sb0tqu">${escape(rubrique)}</li>`;
  })}</ul></div></div> <a href="#form" class="contact-tarif svelte-sb0tqu" data-svelte-h="svelte-7wjfqw">Je veux en savoir +</a> </div>`;
});
const css = {
  code: ".tarifs.svelte-158wgi8.svelte-158wgi8{display:flex;flex-wrap:wrap;justify-content:center;align-items:center;gap:30px;height:100%}#form.svelte-158wgi8.svelte-158wgi8{width:100vw}.hero.svelte-158wgi8.svelte-158wgi8{padding:30px;display:flex;flex-direction:column;align-items:center;justify-content:center;height:auto;width:100%}.hero.svelte-158wgi8 h1.svelte-158wgi8{text-align:center;font-family:var(--Geologica);font-weight:900;font-size:var(--xl);color:var(--primary);margin-top:0px;letter-spacing:-2px;padding:0px;line-height:50px;margin-top:50px}.hero.svelte-158wgi8 h1 span.svelte-158wgi8{color:var(--green)}.hero.svelte-158wgi8 h3.svelte-158wgi8{font-family:poppins;font-weight:300;font-size:var(--m);color:var(--primary);text-align:center;width:50%;padding:30px}@media screen and (max-width: 768px){.hero.svelte-158wgi8 h1.svelte-158wgi8{font-size:2.5rem;line-height:50px}.hero.svelte-158wgi8 h3.svelte-158wgi8{width:110%;text-align:center;padding:40px}}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let tabTarifs = [
    {
      titleH1: "Site Web",
      titleH2: "Création de site Internet",
      tarifEuro: "799€",
      subTarifEuro: "À partir de ",
      rubriques: [
        "Landing Page (page unique)",
        "Développement Front-End",
        "Sans formulaire de contact",
        "Référencement SEO",
        "Design Responsive",
        "Déploiement sur serveur"
      ]
    },
    {
      titleH1: "Applications",
      titleH2: "Création d'applications Web",
      tarifEuro: "5499€",
      subTarifEuro: "À partir de ",
      rubriques: [
        "Création du Design",
        "Diagramme de classe UML",
        "Diagramme de séquence",
        "Développement Front-End",
        "Développement Back-End",
        "Déploiement sur serveur"
      ]
    },
    {
      titleH1: "Référencement",
      titleH2: "SEO/SEA",
      tarifEuro: "699€",
      subTarifEuro: "À partir de ",
      rubriques: [
        "Analyse de la concurrence",
        "Analyse des mots Clés",
        "Implémentation des mots clés",
        "Optimisation du contenu",
        "Test et rapport de performance"
      ]
    },
    {
      titleH1: "Médias ",
      titleH2: "Community Manager",
      tarifEuro: "599€",
      subTarifEuro: "À partir de ",
      rubriques: [
        "Plan d'action",
        "Définition des objectifs",
        "Rédaction des contenus",
        "Organisation des publications"
      ]
    },
    {
      titleH1: "Design",
      titleH2: "Création d'identité et refonte",
      tarifEuro: "899€",
      subTarifEuro: "À partir de ",
      rubriques: [
        "Création d'identité graphique",
        "Création de logo",
        "Refonte du site web",
        "Référencement"
      ]
    },
    {
      titleH1: "Stratégie",
      titleH2: "Conseils Marketing",
      tarifEuro: "999€",
      subTarifEuro: "À partir de ",
      rubriques: [
        "Audit de site web",
        "Audit des besoins",
        "Analyse du marché",
        "Définition de stratégie",
        "mise en place de plan d'action",
        "Analyse des performances"
      ]
    }
  ];
  $$result.css.add(css);
  return `${validate_component(Header, "Header").$$render($$result, {}, {}, {})} ${validate_component(Mouse, "Mouse").$$render($$result, {}, {}, {})} <section class="tarifs svelte-158wgi8"><div class="hero svelte-158wgi8" data-svelte-h="svelte-2hoo48"><h1 class="svelte-158wgi8">Nos <br><span class="svelte-158wgi8">Tarifs</span></h1> <h3 class="svelte-158wgi8">L&#39;agence Gralypho pratique des tarifs réfléchis et très adaptatifs. Chaque projet est
			différent et la tarification dépend du besoin technologique qui est employé pour réaliser
			votre projet.</h3></div> ${each(tabTarifs, (tarif, index) => {
    return `${validate_component(Tarifs_Cards, "TarifsCards").$$render(
      $$result,
      {
        index,
        titleH1: tarif.titleH1,
        titleH2: tarif.titleH2,
        tarifEuro: tarif.tarifEuro,
        subTarifEuro: tarif.subTarifEuro,
        rubriques: tarif.rubriques
      },
      {},
      {}
    )}`;
  })} <div id="form" class="svelte-158wgi8">${validate_component(Form, "Form").$$render($$result, {}, {}, {})}</div> </section>`;
});
export {
  Page as default
};
