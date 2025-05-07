import { c as create_ssr_component, e as escape, f as each, v as validate_component } from "../../../chunks/ssr.js";
import { M as Mouse } from "../../../chunks/Mouse.js";
import { H as Header } from "../../../chunks/Header.js";
import { F as Form } from "../../../chunks/Form.js";
/* empty css                                                    */
const css$1 = {
  code: ".card-tarif.svelte-13fpcs2.svelte-13fpcs2{display:flex;flex-direction:column;align-items:center;min-height:750px;max-width:300px;border-radius:15px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.182);margin-top:20px;margin-bottom:20px;flex-basis:30%;padding:10px}.title-banner.svelte-13fpcs2.svelte-13fpcs2{display:flex;flex-direction:column;justify-content:center;align-items:center;margin-bottom:20px;background-color:rgb(226, 160, 37);gap:0px;padding:30px;background-color:rgb(226, 160, 37);width:100%;min-height:200px}.title-banner.svelte-13fpcs2 h1.svelte-13fpcs2{font-size:var(--l);color:rgb(255, 255, 255);font-family:'Radio Canada Big'}.title-banner.svelte-13fpcs2 h2.svelte-13fpcs2{font-family:'Radio Canada Big';font-weight:100;font-size:1.2rem;color:rgb(255, 255, 255)}.center-card.svelte-13fpcs2.svelte-13fpcs2{display:flex;flex-direction:column;justify-content:space-between;align-items:center;min-height:400px}.wrapper-tarif-euro.svelte-13fpcs2.svelte-13fpcs2{display:flex;flex-direction:column;justify-content:center;align-items:center;margin-bottom:20px;margin-top:20px}.tarif-euro.svelte-13fpcs2.svelte-13fpcs2{font-family:'Radio Canada Big';font-size:var(--l);color:var(--primary)}.subtarif-euro.svelte-13fpcs2.svelte-13fpcs2{font-family:'Heebo';font-size:1.5rem;color:var(--primary);font-weight:100}.rubriques.svelte-13fpcs2.svelte-13fpcs2{display:flex;flex-direction:column;justify-content:center;align-items:center;margin-bottom:50px;min-height:300px}.li-rubrique.svelte-13fpcs2.svelte-13fpcs2{color:var(--primary);font-family:'Heebo';list-style-type:none;position:relative;margin-bottom:10px;font-weight:300}.li-rubrique.svelte-13fpcs2.svelte-13fpcs2::before{content:'➡️';position:absolute;left:-30px;top:-3px}.contact-tarif.svelte-13fpcs2.svelte-13fpcs2{font-family:'Radio Canada Big';display:flex;justify-content:center;align-items:center;color:var(--colorC);border:3px solid rgb(239, 238, 238);background-color:var(--cta);font-size:1rem;border-radius:8px;padding:20px 20px;text-decoration:none;font-size:var(--m);margin-bottom:20px;font-weight:500}.contact-tarif.svelte-13fpcs2.svelte-13fpcs2:hover{background-color:rgb(0, 0, 0);color:rgb(255, 255, 255)}.title-banner-bg-color1.svelte-13fpcs2.svelte-13fpcs2{background-color:#c55656}.title-banner-bg-color2.svelte-13fpcs2.svelte-13fpcs2{background-color:#127012}.title-banner-bg-color3.svelte-13fpcs2.svelte-13fpcs2{background-color:#4040bb}.title-banner-bg-color4.svelte-13fpcs2.svelte-13fpcs2{background-color:#e84b70}.title-banner-bg-color5.svelte-13fpcs2.svelte-13fpcs2{background-color:#3c1e63}.title-banner-bg-color6.svelte-13fpcs2.svelte-13fpcs2{background-color:#4a1a40}@media screen and (max-width: 1365px){.title-banner.svelte-13fpcs2 h1.svelte-13fpcs2{font-size:2em}}@media(max-width: 768px){.card-tarif.svelte-13fpcs2.svelte-13fpcs2{min-height:800px;min-width:320px}.title-banner.svelte-13fpcs2 h1.svelte-13fpcs2{font-size:2.5rem;color:rgb(255, 255, 255);font-family:'Radio Canada Big'}}",
  map: `{"version":3,"file":"Tarifs-Cards.svelte","sources":["Tarifs-Cards.svelte"],"sourcesContent":["<script>\\n\\texport let titleH1;\\n\\texport let titleH2;\\n\\texport let tarifEuro;\\n\\texport let subTarifEuro;\\n\\texport let rubriques;\\n\\texport let index;\\n<\/script>\\n\\n<div class=\\"card-tarif\\">\\n\\t<div class=\\"title-banner title-banner-bg-color{(index % 6) + 1}\\">\\n\\t\\t<h1>{titleH1}</h1>\\n\\t\\t<h2>{titleH2}</h2>\\n\\t</div>\\n\\t<div class=\\"center-card\\">\\n\\t\\t<div class=\\"wrapper-tarif-euro\\">\\n\\t\\t\\t<h3 class=\\"subtarif-euro\\">{subTarifEuro}</h3>\\n\\t\\t\\t<h2 class=\\"tarif-euro\\">{tarifEuro}</h2>\\n\\t\\t</div>\\n\\t\\t<div class=\\"rubriques\\">\\n\\t\\t\\t<ul>\\n\\t\\t\\t\\t{#each rubriques as rubrique (rubrique)}\\n\\t\\t\\t\\t\\t<li class=\\"li-rubrique\\">{rubrique}</li>\\n\\t\\t\\t\\t{/each}\\n\\t\\t\\t</ul>\\n\\t\\t</div>\\n\\t</div>\\n\\t<a href=\\"#form\\" class=\\"contact-tarif\\">Je veux en savoir +</a>\\n</div>\\n\\n<style>\\n\\t.card-tarif {\\n\\t\\tdisplay: flex;\\n\\t\\tflex-direction: column;\\n\\t\\talign-items: center;\\n\\t\\tmin-height: 750px;\\n\\t\\tmax-width: 300px;\\n\\t\\tborder-radius: 15px;\\n\\t\\tbox-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.182);\\n\\t\\tmargin-top: 20px;\\n\\t\\tmargin-bottom: 20px;\\n\\t\\tflex-basis: 30%;\\n\\t\\tpadding: 10px;\\n\\t}\\n\\t.title-banner {\\n\\t\\tdisplay: flex;\\n\\t\\tflex-direction: column;\\n\\t\\tjustify-content: center;\\n\\t\\talign-items: center;\\n\\t\\tmargin-bottom: 20px;\\n\\t\\tbackground-color: rgb(226, 160, 37);\\n\\t\\tgap: 0px;\\n\\t\\tpadding: 30px;\\n\\t\\tbackground-color: rgb(226, 160, 37);\\n\\t\\twidth: 100%;\\n\\t\\tmin-height: 200px;\\n\\t}\\n\\t.title-banner h1 {\\n\\t\\tfont-size: var(--l);\\n\\t\\tcolor: rgb(255, 255, 255);\\n\\t\\tfont-family: 'Radio Canada Big';\\n\\t}\\n\\t.title-banner h2 {\\n\\t\\tfont-family: 'Radio Canada Big';\\n\\t\\tfont-weight: 100;\\n\\t\\tfont-size: 1.2rem;\\n\\t\\tcolor: rgb(255, 255, 255);\\n\\t}\\n\\n\\t.center-card {\\n\\t\\tdisplay: flex;\\n\\t\\tflex-direction: column;\\n\\t\\tjustify-content: space-between;\\n\\t\\talign-items: center;\\n\\t\\tmin-height: 400px;\\n\\t}\\n\\t.wrapper-tarif-euro {\\n\\t\\tdisplay: flex;\\n\\t\\tflex-direction: column;\\n\\t\\tjustify-content: center;\\n\\t\\talign-items: center;\\n\\t\\tmargin-bottom: 20px;\\n\\t\\tmargin-top: 20px;\\n\\t}\\n\\n\\t.tarif-euro {\\n\\t\\tfont-family: 'Radio Canada Big';\\n\\t\\tfont-size: var(--l);\\n\\t\\tcolor: var(--primary);\\n\\t}\\n\\t.subtarif-euro {\\n\\t\\tfont-family: 'Heebo';\\n\\t\\tfont-size: 1.5rem;\\n\\t\\tcolor: var(--primary);\\n\\t\\tfont-weight: 100;\\n\\t}\\n\\t.rubriques {\\n\\t\\tdisplay: flex;\\n\\t\\tflex-direction: column;\\n\\t\\tjustify-content: center;\\n\\t\\talign-items: center;\\n\\t\\tmargin-bottom: 50px;\\n\\t\\tmin-height: 300px;\\n\\t}\\n\\t.li-rubrique {\\n\\t\\tcolor: var(--primary);\\n\\t\\tfont-family: 'Heebo';\\n\\t\\tlist-style-type: none;\\n\\t\\tposition: relative;\\n\\t\\tmargin-bottom: 10px;\\n\\t\\tfont-weight: 300;\\n\\t}\\n\\t.li-rubrique::before {\\n\\t\\tcontent: '➡️';\\n\\t\\tposition: absolute;\\n\\t\\tleft: -30px;\\n\\t\\ttop: -3px;\\n\\t}\\n\\t.contact-tarif {\\n\\t\\tfont-family: 'Radio Canada Big';\\n\\t\\tdisplay: flex;\\n\\t\\tjustify-content: center;\\n\\t\\talign-items: center;\\n\\t\\tcolor: var(--colorC);\\n\\t\\tborder: 3px solid rgb(239, 238, 238);\\n\\t\\tbackground-color: var(--cta);\\n\\t\\tfont-size: 1rem;\\n\\t\\tborder-radius: 8px;\\n\\t\\tpadding: 20px 20px;\\n\\t\\ttext-decoration: none;\\n\\t\\tfont-size: var(--m);\\n\\t\\tmargin-bottom: 20px;\\n\\t\\tfont-weight: 500;\\n\\t}\\n\\t.contact-tarif:hover {\\n\\t\\tbackground-color: rgb(0, 0, 0);\\n\\t\\tcolor: rgb(255, 255, 255);\\n\\t}\\n\\t.title-banner-bg-color1 {\\n\\t\\tbackground-color: #c55656; /* Remplacez par la couleur que vous voulez */\\n\\t}\\n\\n\\t.title-banner-bg-color2 {\\n\\t\\tbackground-color: #127012; /* Remplacez par la couleur que vous voulez */\\n\\t}\\n\\n\\t.title-banner-bg-color3 {\\n\\t\\tbackground-color: #4040bb; /* Remplacez par la couleur que vous voulez */\\n\\t}\\n\\t.title-banner-bg-color4 {\\n\\t\\tbackground-color: #e84b70; /* Remplacez par la couleur que vous voulez */\\n\\t}\\n\\t.title-banner-bg-color5 {\\n\\t\\tbackground-color: #3c1e63; /* Remplacez par la couleur que vous voulez */\\n\\t}\\n\\t.title-banner-bg-color6 {\\n\\t\\tbackground-color: #4a1a40; /* Remplacez par la couleur que vous voulez */\\n\\t}\\n\\t@media screen and (max-width: 1365px) {\\n\\t\\t.title-banner h1 {\\n\\t\\tfont-size: 2em;\\n\\t\\t}\\n\\t}\\n\\t@media (max-width: 768px) {\\n\\t\\t.card-tarif {\\n\\t\\t\\t\\tmin-height: 800px;\\n\\t\\t\\t\\tmin-width: 320px;\\n\\t\\t}\\n\\t\\t.title-banner h1 {\\n\\t\\t\\tfont-size: 2.5rem;\\n\\t\\t\\tcolor: rgb(255, 255, 255);\\n\\t\\t\\tfont-family: 'Radio Canada Big';\\n\\t\\t}\\n\\t}\\n</style>\\n"],"names":[],"mappings":"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"}`
};
const Tarifs_Cards = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { titleH1 } = $$props;
  let { titleH2 } = $$props;
  let { tarifEuro } = $$props;
  let { subTarifEuro } = $$props;
  let { rubriques } = $$props;
  let { index } = $$props;
  if ($$props.titleH1 === void 0 && $$bindings.titleH1 && titleH1 !== void 0) $$bindings.titleH1(titleH1);
  if ($$props.titleH2 === void 0 && $$bindings.titleH2 && titleH2 !== void 0) $$bindings.titleH2(titleH2);
  if ($$props.tarifEuro === void 0 && $$bindings.tarifEuro && tarifEuro !== void 0) $$bindings.tarifEuro(tarifEuro);
  if ($$props.subTarifEuro === void 0 && $$bindings.subTarifEuro && subTarifEuro !== void 0) $$bindings.subTarifEuro(subTarifEuro);
  if ($$props.rubriques === void 0 && $$bindings.rubriques && rubriques !== void 0) $$bindings.rubriques(rubriques);
  if ($$props.index === void 0 && $$bindings.index && index !== void 0) $$bindings.index(index);
  $$result.css.add(css$1);
  return `<div class="card-tarif svelte-13fpcs2"><div class="${"title-banner title-banner-bg-color" + escape(index % 6 + 1, true) + " svelte-13fpcs2"}"><h1 class="svelte-13fpcs2">${escape(titleH1)}</h1> <h2 class="svelte-13fpcs2">${escape(titleH2)}</h2></div> <div class="center-card svelte-13fpcs2"><div class="wrapper-tarif-euro svelte-13fpcs2"><h3 class="subtarif-euro svelte-13fpcs2">${escape(subTarifEuro)}</h3> <h2 class="tarif-euro svelte-13fpcs2">${escape(tarifEuro)}</h2></div> <div class="rubriques svelte-13fpcs2"><ul>${each(rubriques, (rubrique) => {
    return `<li class="li-rubrique svelte-13fpcs2">${escape(rubrique)}</li>`;
  })}</ul></div></div> <a href="#form" class="contact-tarif svelte-13fpcs2" data-svelte-h="svelte-7wjfqw">Je veux en savoir +</a> </div>`;
});
const css = {
  code: ".tarifs.svelte-138ip4i.svelte-138ip4i{display:flex;flex-wrap:wrap;justify-content:center;align-items:center;gap:30px;height:100%}#form.svelte-138ip4i.svelte-138ip4i{width:100vw}.hero.svelte-138ip4i.svelte-138ip4i{padding:30px;display:flex;flex-direction:column;align-items:center;justify-content:center;height:auto;width:100%}.hero.svelte-138ip4i h1.svelte-138ip4i{text-align:center;font-family:var(--Geologica);font-weight:900;font-size:var(--xl);color:var(--primary);margin-top:0px;letter-spacing:-2px;padding:0px;line-height:50px;margin-top:50px}.hero.svelte-138ip4i h1 span.svelte-138ip4i{color:var(--green)}.hero.svelte-138ip4i h3.svelte-138ip4i{font-family:poppins;font-weight:300;font-size:var(--m);color:var(--primary);text-align:center;width:50%;padding:30px}@media screen and (max-width: 768px){.hero.svelte-138ip4i h1.svelte-138ip4i{font-size:2.5rem;line-height:50px}.hero.svelte-138ip4i h3.svelte-138ip4i{width:110%;text-align:center;padding:40px}}",
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script>\\n\\timport TarifsCards from '../../Components/Tarifs-Cards.svelte';\\n\\timport Mouse from '../../Components/Mouse.svelte';\\n\\timport Header from '../../sections/Header.svelte';\\n\\timport { fade, slide } from 'svelte/transition';\\n\\timport Form from '../../Components/Form.svelte';\\n\\timport FaqLink from '../../Components/FaqLink.svelte';\\n\\n\\n\\tlet tabTarifs = [\\n\\t\\t{\\n\\t\\t\\ttitleH1: 'Site Web',\\n\\t\\t\\ttitleH2: 'Création de site Internet',\\n\\t\\t\\ttarifEuro: '799€',\\n\\t\\t\\tsubTarifEuro: 'À partir de ',\\n\\t\\t\\trubriques: [\\n\\t\\t\\t\\t'Landing Page (page unique)',\\n\\t\\t\\t\\t'Développement Front-End',\\n\\t\\t\\t\\t'Sans formulaire de contact',\\n\\t\\t\\t\\t'Référencement SEO',\\n\\t\\t\\t\\t'Design Responsive',\\n\\t\\t\\t\\t'Déploiement sur serveur'\\n\\t\\t\\t]\\n\\t\\t},\\n\\t\\t{\\n\\t\\t\\ttitleH1: 'Applications',\\n\\t\\t\\ttitleH2: \\"Création d'applications Web\\",\\n\\t\\t\\ttarifEuro: '5499€',\\n\\t\\t\\tsubTarifEuro: 'À partir de ',\\n\\t\\t\\trubriques: [\\n\\t\\t\\t\\t'Création du Design',\\n\\t\\t\\t\\t'Diagramme de classe UML',\\n\\t\\t\\t\\t'Diagramme de séquence',\\n\\t\\t\\t\\t'Développement Front-End',\\n\\t\\t\\t\\t'Développement Back-End',\\n\\t\\t\\t\\t'Déploiement sur serveur'\\n\\t\\t\\t]\\n\\t\\t},\\n\\t\\t{\\n\\t\\t\\ttitleH1: 'Référencement',\\n\\t\\t\\ttitleH2: 'SEO/SEA',\\n\\t\\t\\ttarifEuro: '699€',\\n\\t\\t\\tsubTarifEuro: 'À partir de ',\\n\\t\\t\\trubriques: [\\n\\t\\t\\t\\t'Analyse de la concurrence',\\n\\t\\t\\t\\t'Analyse des mots Clés',\\n\\t\\t\\t\\t'Implémentation des mots clés',\\n\\t\\t\\t\\t'Optimisation du contenu',\\n\\t\\t\\t\\t'Test et rapport de performance'\\n\\t\\t\\t]\\n\\t\\t},\\n\\t\\t{\\n\\t\\t\\ttitleH1: 'Médias ',\\n\\t\\t\\ttitleH2: 'Community Manager',\\n\\t\\t\\ttarifEuro: '599€',\\n\\t\\t\\tsubTarifEuro: 'À partir de ',\\n\\t\\t\\trubriques: [\\n\\t\\t\\t\\t\\"Plan d'action\\",\\n\\t\\t\\t\\t'Définition des objectifs',\\n\\t\\t\\t\\t'Rédaction des contenus',\\n\\t\\t\\t\\t'Organisation des publications'\\n\\t\\t\\t]\\n\\t\\t},\\n\\t\\t{\\n\\t\\t\\ttitleH1: 'Design',\\n\\t\\t\\ttitleH2: \\"Création d'identité et refonte\\",\\n\\t\\t\\ttarifEuro: '899€',\\n\\t\\t\\tsubTarifEuro: 'À partir de ',\\n\\t\\t\\trubriques: [\\n\\t\\t\\t\\t\\"Création d'identité graphique\\",\\n\\t\\t\\t\\t'Création de logo',\\n\\t\\t\\t\\t'Refonte du site web',\\n\\t\\t\\t\\t'Référencement'\\n\\t\\t\\t]\\n\\t\\t},\\n\\t\\t{\\n\\t\\t\\ttitleH1: 'Stratégie',\\n\\t\\t\\ttitleH2: 'Conseils Marketing',\\n\\t\\t\\ttarifEuro: '999€',\\n\\t\\t\\tsubTarifEuro: 'À partir de ',\\n\\t\\t\\trubriques: [\\n\\t\\t\\t\\t'Audit de site web',\\n\\t\\t\\t\\t'Audit des besoins',\\n\\t\\t\\t\\t'Analyse du marché',\\n\\t\\t\\t\\t'Définition de stratégie',\\n\\t\\t\\t\\t\\"mise en place de plan d'action\\",\\n\\t\\t\\t\\t'Analyse des performances'\\n\\t\\t\\t]\\n\\t\\t}\\n\\t];\\n<\/script>\\n\\n<Header />\\n<Mouse />\\n\\n<section class=\\"tarifs\\" in:fade={{ duration: 1000 }}>\\n\\t<div class=\\"hero\\">\\n\\t\\t<h1>Nos <br /><span>Tarifs</span></h1>\\n\\t\\t<h3>\\n\\t\\t\\tL'agence Gralypho pratique des tarifs réfléchis et très adaptatifs. Chaque projet est\\n\\t\\t\\tdifférent et la tarification dépend du besoin technologique qui est employé pour réaliser\\n\\t\\t\\tvotre projet.\\n\\t\\t</h3>\\n\\t</div>\\n\\t{#each tabTarifs as tarif, index (tarif)}\\n\\t\\t<TarifsCards\\n\\t\\t\\t{index}\\n\\t\\t\\ttitleH1={tarif.titleH1}\\n\\t\\t\\ttitleH2={tarif.titleH2}\\n\\t\\t\\ttarifEuro={tarif.tarifEuro}\\n\\t\\t\\tsubTarifEuro={tarif.subTarifEuro}\\n\\t\\t\\trubriques={tarif.rubriques}\\n\\t\\t/>\\n\\t{/each}\\n\\n\\t<!-- <div class=\\"wrapper__faqLink\\">\\n\\t\\t<FaqLink/>\\n\\t\\t<a href=\\"/FAQ/#tarif\\">FAQ</a>\\n\\t</div> -->\\n\\n\\t<div id=\\"form\\">\\n\\t\\t<Form />\\n\\t</div>\\n</section>\\n\\n<style>\\n\\t.tarifs {\\n\\t\\tdisplay: flex;\\n\\t\\tflex-wrap: wrap;\\n\\t\\tjustify-content: center;\\n\\t\\talign-items: center;\\n\\t\\tgap: 30px;\\n\\t\\theight: 100%;\\n\\t}\\n\\t#form {\\n\\t\\twidth: 100vw;\\n\\t}\\n\\t.hero {\\n\\t\\tpadding: 30px;\\n\\t\\tdisplay: flex;\\n\\t\\tflex-direction: column;\\n\\t\\talign-items: center;\\n\\t\\tjustify-content: center;\\n\\t\\theight: auto;\\n\\t\\twidth: 100%;\\n\\t}\\n\\t.hero h1 {\\n\\t\\ttext-align: center;\\n\\t\\tfont-family: var(--Geologica);\\n\\t\\tfont-weight: 900;\\n\\t\\tfont-size: var(--xl);\\n\\t\\tcolor: var(--primary);\\n\\t\\tmargin-top: 0px;\\n\\t\\tletter-spacing: -2px;\\n\\t\\tpadding: 0px;\\n\\t\\tline-height: 50px;\\n\\t\\tmargin-top: 50px;\\n\\t}\\n\\t.hero h1 span {\\n\\t\\tcolor: var(--green);\\n\\t}\\n\\t.hero h3 {\\n\\t\\tfont-family: poppins;\\n\\t\\tfont-weight: 300;\\n\\t\\tfont-size: var(--m);\\n\\t\\tcolor: var(--primary);\\n\\t\\ttext-align: center;\\n\\t\\twidth: 50%;\\n\\t\\tpadding: 30px;\\n\\t}\\n\\n\\n\\t@media screen and (max-width: 768px) {\\n\\t\\t.hero h1 {\\n\\t\\t\\tfont-size: 2.5rem;\\n\\t\\t\\tline-height: 50px;\\n\\t\\t}\\n\\t\\t.hero h3 {\\n\\t\\t\\twidth: 110%;\\n\\t\\t\\ttext-align: center;\\n\\t\\t\\tpadding: 40px;\\n\\t\\t}\\n\\t}\\n</style>\\n"],"names":[],"mappings":"AA8HC,qCAAQ,CACP,OAAO,CAAE,IAAI,CACb,SAAS,CAAE,IAAI,CACf,eAAe,CAAE,MAAM,CACvB,WAAW,CAAE,MAAM,CACnB,GAAG,CAAE,IAAI,CACT,MAAM,CAAE,IACT,CACA,mCAAM,CACL,KAAK,CAAE,KACR,CACA,mCAAM,CACL,OAAO,CAAE,IAAI,CACb,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,WAAW,CAAE,MAAM,CACnB,eAAe,CAAE,MAAM,CACvB,MAAM,CAAE,IAAI,CACZ,KAAK,CAAE,IACR,CACA,oBAAK,CAAC,iBAAG,CACR,UAAU,CAAE,MAAM,CAClB,WAAW,CAAE,IAAI,WAAW,CAAC,CAC7B,WAAW,CAAE,GAAG,CAChB,SAAS,CAAE,IAAI,IAAI,CAAC,CACpB,KAAK,CAAE,IAAI,SAAS,CAAC,CACrB,UAAU,CAAE,GAAG,CACf,cAAc,CAAE,IAAI,CACpB,OAAO,CAAE,GAAG,CACZ,WAAW,CAAE,IAAI,CACjB,UAAU,CAAE,IACb,CACA,oBAAK,CAAC,EAAE,CAAC,mBAAK,CACb,KAAK,CAAE,IAAI,OAAO,CACnB,CACA,oBAAK,CAAC,iBAAG,CACR,WAAW,CAAE,OAAO,CACpB,WAAW,CAAE,GAAG,CAChB,SAAS,CAAE,IAAI,GAAG,CAAC,CACnB,KAAK,CAAE,IAAI,SAAS,CAAC,CACrB,UAAU,CAAE,MAAM,CAClB,KAAK,CAAE,GAAG,CACV,OAAO,CAAE,IACV,CAGA,OAAO,MAAM,CAAC,GAAG,CAAC,YAAY,KAAK,CAAE,CACpC,oBAAK,CAAC,iBAAG,CACR,SAAS,CAAE,MAAM,CACjB,WAAW,CAAE,IACd,CACA,oBAAK,CAAC,iBAAG,CACR,KAAK,CAAE,IAAI,CACX,UAAU,CAAE,MAAM,CAClB,OAAO,CAAE,IACV,CACD"}`
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
  return `${validate_component(Header, "Header").$$render($$result, {}, {}, {})} ${validate_component(Mouse, "Mouse").$$render($$result, {}, {}, {})} <section class="tarifs svelte-138ip4i"><div class="hero svelte-138ip4i" data-svelte-h="svelte-2hoo48"><h1 class="svelte-138ip4i">Nos <br><span class="svelte-138ip4i">Tarifs</span></h1> <h3 class="svelte-138ip4i">L&#39;agence Gralypho pratique des tarifs réfléchis et très adaptatifs. Chaque projet est
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
  })}  <div id="form" class="svelte-138ip4i">${validate_component(Form, "Form").$$render($$result, {}, {}, {})}</div> </section>`;
});
export {
  Page as default
};
