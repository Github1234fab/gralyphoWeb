import { c as create_ssr_component, d as add_attribute, e as escape, f as each, v as validate_component } from "../../../chunks/ssr.js";
import { H as Header } from "../../../chunks/Mouse.svelte_svelte_type_style_lang.js";
/* empty css                                                   */
import { S as Services } from "../../../chunks/Services.js";
import { c as cible } from "../../../chunks/cible.js";
/* empty css                                                            */
import { C as CardsSectionB } from "../../../chunks/CardsSectionB.js";
import { F as Form } from "../../../chunks/Form.js";
/* empty css                                                     */
import { M as Mouse } from "../../../chunks/Mouse.js";
import { B as ButtonCTA } from "../../../chunks/ButtonCTA.js";
const css$2 = {
  code: ".card-type-site.svelte-117rcnx{transform:translateY(200px);display:flex;flex-direction:column;border-radius:3px;color:var(--whiteGrey);justify-content:center;align-items:center;min-height:20%;max-height:40%;min-width:200px;max-width:40%;border-radius:20px;background-color:transparent;box-shadow:0px 0px 14px  rgba(0, 0, 0, 0.659)}.wrapper-title-icon.svelte-117rcnx{display:flex;flex-direction:column;justify-content:center;align-items:center;gap:15px;background-color:transparent;padding:10px;border-radius:10%}.wrapper-text.svelte-117rcnx{display:flex;flex-direction:column;gap:20px;align-items:left;max-height:500px;padding:20px}.title.svelte-117rcnx{font-family:var(--Geologica);font-weight:600;font-size:var(--m);border-radius:8px;text-decoration:none;color:var(--primary);letter-spacing:-1px}.title.svelte-117rcnx:hover{animation:svelte-117rcnx-bounce 0.4s ease-in-out}.link-decouvrir.svelte-117rcnx{text-decoration:none;color:var(--whiteGrey);font-family:'radio canada big';font-weight:100;border-radius:6px;text-align:center;padding:10px;margin-left:auto;margin-right:auto;margin-top:30px;margin-bottom:10px;font-size:0.9rem;background-color:var(--cta)}.link-decouvrir.svelte-117rcnx:hover{animation:svelte-117rcnx-bounce 0.4s ease-in-out}.icon.svelte-117rcnx{height:35px}@keyframes svelte-117rcnx-bounce{0%{transform:scale(1) translateY(-2px)}25%{transform:scale(1) translateY(3px)}50%{transform:scale(1) translateY(-1px)}75%{transform:scale(1) translateY(2px)}100%{transform:scale(1) translateY(0)}}@media screen and (max-width: 3000px){.card-type-site.svelte-117rcnx{max-width:600px;min-height:200px;height:fit-content}}@media screen and (max-width: 768px){.link-decouvrir.svelte-117rcnx{padding:13px;width:auto;font-size:1.4em}}",
  map: null
};
const TypeSiteCards = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title } = $$props;
  let { icon } = $$props;
  let { lien } = $$props;
  let { lien2 } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.icon === void 0 && $$bindings.icon && icon !== void 0)
    $$bindings.icon(icon);
  if ($$props.lien === void 0 && $$bindings.lien && lien !== void 0)
    $$bindings.lien(lien);
  if ($$props.lien2 === void 0 && $$bindings.lien2 && lien2 !== void 0)
    $$bindings.lien2(lien2);
  $$result.css.add(css$2);
  return `<div class="card-type-site svelte-117rcnx"><div class="wrapper-text svelte-117rcnx"><div class="wrapper-title-icon svelte-117rcnx"><a${add_attribute("href", lien, 0)}><img${add_attribute("src", icon, 0)} alt="icon de types de sites" class="icon svelte-117rcnx"></a> <a${add_attribute("href", lien2, 0)} class="title svelte-117rcnx">${escape(title)}</a></div>  <a${add_attribute("href", lien, 0)} class="link-decouvrir svelte-117rcnx">Découvrir</a></div> </div>`;
});
const vitrine = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20640%20512'%3e%3c!--!Font%20Awesome%20Free%206.5.1%20by%20@fontawesome%20-%20https://fontawesome.com%20License%20-%20https://fontawesome.com/license/free%20Copyright%202024%20Fonticons,%20Inc.--%3e%3cpath%20d='M36.8%20192H603.2c20.3%200%2036.8-16.5%2036.8-36.8c0-7.3-2.2-14.4-6.2-20.4L558.2%2021.4C549.3%208%20534.4%200%20518.3%200H121.7c-16%200-31%208-39.9%2021.4L6.2%20134.7c-4%206.1-6.2%2013.2-6.2%2020.4C0%20175.5%2016.5%20192%2036.8%20192zM64%20224V384v80c0%2026.5%2021.5%2048%2048%2048H336c26.5%200%2048-21.5%2048-48V384%20224H320V384H128V224H64zm448%200V480c0%2017.7%2014.3%2032%2032%2032s32-14.3%2032-32V224H512z'%20fill='rgb(59,%20228,%2036)'/%3e%3c/svg%3e";
const portfolio = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20height='16'%20width='18'%20viewBox='0%200%20576%20512'%3e%3c!--!Font%20Awesome%20Free%206.5.1%20by%20@fontawesome%20-%20https://fontawesome.com%20License%20-%20https://fontawesome.com/license/free%20Copyright%202024%20Fonticons,%20Inc.--%3e%3cpath%20d='M512%2080c8.8%200%2016%207.2%2016%2016V416c0%208.8-7.2%2016-16%2016H64c-8.8%200-16-7.2-16-16V96c0-8.8%207.2-16%2016-16H512zM64%2032C28.7%2032%200%2060.7%200%2096V416c0%2035.3%2028.7%2064%2064%2064H512c35.3%200%2064-28.7%2064-64V96c0-35.3-28.7-64-64-64H64zM208%20256a64%2064%200%201%200%200-128%2064%2064%200%201%200%200%20128zm-32%2032c-44.2%200-80%2035.8-80%2080c0%208.8%207.2%2016%2016%2016H304c8.8%200%2016-7.2%2016-16c0-44.2-35.8-80-80-80H176zM376%20144c-13.3%200-24%2010.7-24%2024s10.7%2024%2024%2024h80c13.3%200%2024-10.7%2024-24s-10.7-24-24-24H376zm0%2096c-13.3%200-24%2010.7-24%2024s10.7%2024%2024%2024h80c13.3%200%2024-10.7%2024-24s-10.7-24-24-24H376z'%20fill='rgb(59,%20228,%2036)'/%3e%3c/svg%3e";
const commerce = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20576%20512'%3e%3c!--!Font%20Awesome%20Free%206.5.1%20by%20@fontawesome%20-%20https://fontawesome.com%20License%20-%20https://fontawesome.com/license/free%20Copyright%202024%20Fonticons,%20Inc.--%3e%3cpath%20d='M0%2024C0%2010.7%2010.7%200%2024%200H69.5c22%200%2041.5%2012.8%2050.6%2032h411c26.3%200%2045.5%2025%2038.6%2050.4l-41%20152.3c-8.5%2031.4-37%2053.3-69.5%2053.3H170.7l5.4%2028.5c2.2%2011.3%2012.1%2019.5%2023.6%2019.5H488c13.3%200%2024%2010.7%2024%2024s-10.7%2024-24%2024H199.7c-34.6%200-64.3-24.6-70.7-58.5L77.4%2054.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7%2048%200%2037.3%200%2024zM128%20464a48%2048%200%201%201%2096%200%2048%2048%200%201%201%20-96%200zm336-48a48%2048%200%201%201%200%2096%2048%2048%200%201%201%200-96z'%20fill='rgb(59,%20228,%2036)'/%3e%3c/svg%3e";
const blog = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20height='16'%20width='16'%20viewBox='0%200%20512%20512'%3e%3c!--!Font%20Awesome%20Free%206.5.1%20by%20@fontawesome%20-%20https://fontawesome.com%20License%20-%20https://fontawesome.com/license/free%20Copyright%202024%20Fonticons,%20Inc.--%3e%3cpath%20d='M192%2032c0%2017.7%2014.3%2032%2032%2032c123.7%200%20224%20100.3%20224%20224c0%2017.7%2014.3%2032%2032%2032s32-14.3%2032-32C512%20128.9%20383.1%200%20224%200c-17.7%200-32%2014.3-32%2032zm0%2096c0%2017.7%2014.3%2032%2032%2032c70.7%200%20128%2057.3%20128%20128c0%2017.7%2014.3%2032%2032%2032s32-14.3%2032-32c0-106-86-192-192-192c-17.7%200-32%2014.3-32%2032zM96%20144c0-26.5-21.5-48-48-48S0%20117.5%200%20144V368c0%2079.5%2064.5%20144%20144%20144s144-64.5%20144-144s-64.5-144-144-144H128v96h16c26.5%200%2048%2021.5%2048%2048s-21.5%2048-48%2048s-48-21.5-48-48V144z'%20fill='rgb(59,%20228,%2036)'%20/%3e%3c/svg%3e";
const corporate = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20height='16'%20width='14'%20viewBox='0%200%20448%20512'%3e%3c!--!Font%20Awesome%20Free%206.5.1%20by%20@fontawesome%20-%20https://fontawesome.com%20License%20-%20https://fontawesome.com/license/free%20Copyright%202024%20Fonticons,%20Inc.--%3e%3cpath%20d='M96%20128a128%20128%200%201%200%20256%200A128%20128%200%201%200%2096%20128zm94.5%20200.2l18.6%2031L175.8%20483.1l-36-146.9c-2-8.1-9.8-13.4-17.9-11.3C51.9%20342.4%200%20405.8%200%20481.3c0%2017%2013.8%2030.7%2030.7%2030.7H162.5c0%200%200%200%20.1%200H168%20280h5.5c0%200%200%200%20.1%200H417.3c17%200%2030.7-13.8%2030.7-30.7c0-75.5-51.9-138.9-121.9-156.4c-8.1-2-15.9%203.3-17.9%2011.3l-36%20146.9L238.9%20359.2l18.6-31c6.4-10.7-1.3-24.2-13.7-24.2H224%20204.3c-12.4%200-20.1%2013.6-13.7%2024.2z'%20fill='rgb(59,%20228,%2036)'/%3e%3c/svg%3e";
const institution = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20height='16'%20width='16'%20viewBox='0%200%20512%20512'%3e%3c!--!Font%20Awesome%20Free%206.5.1%20by%20@fontawesome%20-%20https://fontawesome.com%20License%20-%20https://fontawesome.com/license/free%20Copyright%202024%20Fonticons,%20Inc.--%3e%3cpath%20d='M243.4%202.6l-224%2096c-14%206-21.8%2021-18.7%2035.8S16.8%20160%2032%20160v8c0%2013.3%2010.7%2024%2024%2024H456c13.3%200%2024-10.7%2024-24v-8c15.2%200%2028.3-10.7%2031.3-25.6s-4.8-29.9-18.7-35.8l-224-96c-8-3.4-17.2-3.4-25.2%200zM128%20224H64V420.3c-.6%20.3-1.2%20.7-1.8%201.1l-48%2032c-11.7%207.8-17%2022.4-12.9%2035.9S17.9%20512%2032%20512H480c14.1%200%2026.5-9.2%2030.6-22.7s-1.1-28.1-12.9-35.9l-48-32c-.6-.4-1.2-.7-1.8-1.1V224H384V416H344V224H280V416H232V224H168V416H128V224zM256%2064a32%2032%200%201%201%200%2064%2032%2032%200%201%201%200-64z'%20fill='rgb(59,%20228,%2036)'/%3e%3c/svg%3e";
const css$1 = {
  code: ".C-section.svelte-b2wihd{display:grid;grid-template-columns:repeat(12, 1fr);grid-template-rows:auto;font-size:16px;background-color:var(--whiteGrey);margin-top:0px;overflow:hidden}.wrapper-cards.svelte-b2wihd{grid-column:1/13;grid-row:2/3;display:flex;flex-wrap:wrap;margin:0px auto;align-items:center;justify-content:center;gap:20px;max-width:70%;padding:20px 10px}@media screen and (min-width: 1270px){.wrapper-cards.svelte-b2wihd{max-width:50%}}@media screen and (max-width: 1120px){.C-section.svelte-b2wihd{font-size:15px}}@media screen and (max-width: 768px){.C-section.svelte-b2wihd{font-size:12px}}",
  map: null
};
const Csection = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let SiteCards = [
    {
      title: "Site vitrine",
      icon: vitrine,
      // p: "Créer un site internet vitrine permet de présenter la société, ses produits et ses services. Il permet de fournir des informations aux clients potentiels et de les diriger vers les canaux de vente ...",
      lien: "/creation-site-web-ouest-lyonnais"
    },
    {
      title: "Site E-commerce",
      // lien2: "/Sites",
      icon: commerce,
      // p: "Réaliser un site internet E-commerce permet à une entreprise de vendre des produits, des contenus ou des services en ligne, en restant ouverte 24h/24 et 7/7.",
      lien: "/creation-site-web-ouest-lyonnais"
    },
    {
      title: "Blog",
      icon: blog,
      // p: "Le blog d’entreprise est un site éditorial animé par un ou plusieurs auteurs qui publient des articles et des contenus sur des sujets spécifiques B2C ou B2B. ",
      lien: "/creation-site-web-ouest-lyonnais"
    },
    {
      title: "Portfolio",
      icon: portfolio,
      // p: "Le portfolio est une plateforme internet professionnelle qui permet aux créatifs, photographes, designers, indépendants (...) de présenter leurs travaux et leurs réalisations. ",
      lien: "/creation-site-web-ouest-lyonnais"
    },
    {
      title: "Site Corporate",
      icon: corporate,
      // p: "Les grandes entreprises, institutions ou organisations ont besoin de présenter leurs activités. Un site web corporate apporte les réponses nécessaires de ce point de vue.",
      lien: "/creation-site-web-ouest-lyonnais"
    },
    {
      title: "Site Institutionnel",
      icon: institution,
      // p: "Le site institutionnel est destiné à promouvoir l’image d’une organisation telle que les établissements d’enseignement, les associations et les organismes à but non lucratif. ",
      lien: "/creation-site-web-ouest-lyonnais"
    }
  ];
  $$result.css.add(css$1);
  return `<section class="C-section svelte-b2wihd"> <div class="wrapper-cards svelte-b2wihd">${each(SiteCards, (Cards) => {
    return `${validate_component(TypeSiteCards, "TypeSiteCards").$$render(
      $$result,
      {
        title: Cards.title,
        icon: Cards.icon,
        p: Cards.p,
        lien: Cards.lien,
        lien2: Cards.lien2
      },
      {},
      {}
    )}`;
  })}</div> </section>`;
});
const imgSeo = "/_app/immutable/assets/05.CMoTM9lH.png";
const imgDesign = "/_app/immutable/assets/30.BFCi5cgd.png";
const imgFormation = "/_app/immutable/assets/Web.BPc0i_0P.png";
const Profil = "/_app/immutable/assets/Ellipse 54.DIEw8Lr6.png";
const siteWeb = "/_app/immutable/assets/heroSiteWeb.GoXYDPiL.png";
const css = {
  code: ".sites-section.svelte-7ym7w8.svelte-7ym7w8{display:grid;grid-template-columns:repeat(12, 1fr);grid-template-rows:auto;background-color:var(--whiteGrey);height:auto;font-size:16px}.testimonial.svelte-7ym7w8 h1.svelte-7ym7w8{text-align:center;font-family:var(--Geologica);font-weight:400;font-size:2rem;color:var(--whiteGrey);margin-top:0px;letter-spacing:-2px;padding:0px;line-height:50px;margin-top:70px}.hero.svelte-7ym7w8.svelte-7ym7w8{grid-column:1/13;grid-row:1;display:flex;flex-direction:column;align-items:center;justify-content:space-around;height:auto;position:relative;z-index:0}.wrapper-text-hero.svelte-7ym7w8.svelte-7ym7w8{display:flex;flex-direction:column;align-items:center;justify-content:center}.img-hero.svelte-7ym7w8.svelte-7ym7w8{max-width:30%;min-width:30%;margin-top:30px}.hero.svelte-7ym7w8 h1.svelte-7ym7w8{text-align:center;font-family:var(--Geologica);font-weight:900;font-size:2.5rem;color:var(--primary);margin-top:0px;letter-spacing:-2px;padding:0px;line-height:50px;margin-top:70px}.hero.svelte-7ym7w8 h1 span.svelte-7ym7w8{color:var(--green)}.subtitle.svelte-7ym7w8.svelte-7ym7w8{font-family:poppins;font-weight:300;font-size:var(--m);color:var(--primary);text-align:center;margin-top:50px;margin-bottom:100px;max-width:70%}.wrapper-Csection.svelte-7ym7w8.svelte-7ym7w8{grid-column:1/13;grid-row:2;display:flex;flex-direction:column;justify-content:center;align-items:center}.container-service.svelte-7ym7w8.svelte-7ym7w8{grid-column:2/12;grid-row:4;display:flex;flex-direction:row;flex-wrap:wrap;justify-content:center;align-items:center;margin-top:30px}.container-service.svelte-7ym7w8 h1.svelte-7ym7w8{text-align:center;font-family:'Red Hat Display';font-size:var(--l);font-weight:700;color:var(--primary);margin-top:50px;margin-bottom:50px;letter-spacing:-1px}.wrapper-service.svelte-7ym7w8.svelte-7ym7w8{display:flex;flex-direction:row;flex-wrap:wrap;justify-content:center;align-items:center;gap:10px;margin-top:30px;margin-bottom:50px}.img.svelte-7ym7w8.svelte-7ym7w8{width:100px;height:100px;border-radius:50%}.wrapper-SectionB.svelte-7ym7w8.svelte-7ym7w8{grid-column:1/13;grid-row:6;display:flex;flex-direction:column;justify-content:center;align-items:center;margin-top:0px;margin-bottom:50px}.wrapper-SectionB.svelte-7ym7w8 h1.svelte-7ym7w8{text-align:center;font-family:'Red Hat Display';font-size:var(--l);font-weight:700;color:var(--primary);margin-top:0px;letter-spacing:-1px;margin-bottom:50px}.wrapper-form.svelte-7ym7w8.svelte-7ym7w8{grid-column:1/13;grid-row:8;display:flex;flex-direction:column;justify-content:center;align-items:center;background-color:var(--bgHero)}.testimonial.svelte-7ym7w8.svelte-7ym7w8{grid-column:1/13;grid-row:3;display:flex;flex-direction:column;justify-content:center;align-items:center;margin-top:100px;height:600px;background-image:linear-gradient(var(--primary), var(--secondary));gap:20px;padding:30px}.testimonial.svelte-7ym7w8 h2.svelte-7ym7w8{font-family:'Poppins';font-weight:300;font-size:var(--m);color:var(--whiteGrey);text-align:center;line-height:25px;letter-spacing:0px}.testimonial.svelte-7ym7w8 h4.svelte-7ym7w8{font-family:poppins;font-weight:600;font-size:var(--m);color:white;text-align:center;line-height:40px;letter-spacing:-1px}@keyframes svelte-7ym7w8-bounce{0%{transform:scale(1) translateY(-2px)}25%{transform:scale(1) translateY(3px)}50%{transform:scale(1) translateY(-1px)}75%{transform:scale(1) translateY(2px)}100%{transform:scale(1) translateY(0)}}@media screen and (max-width: 2500px){.hero.svelte-7ym7w8 h1.svelte-7ym7w8{line-height:1em}@media screen  and (max-width: 1224px){.hero.svelte-7ym7w8 h1.svelte-7ym7w8{line-height:1em}}@media screen and (max-width: 768px){.hero.svelte-7ym7w8 h1.svelte-7ym7w8{line-height:50px;font-size:var(--l)}.wrapper-service.svelte-7ym7w8.svelte-7ym7w8{grid-column:1/13;grid-row:2;display:flex;flex-direction:column;justify-content:center;align-items:center;margin-top:50px;gap:10px}.img-hero.svelte-7ym7w8.svelte-7ym7w8{max-width:70%;min-width:70%;margin-top:30px}}}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let accordeonTab = [
    {
      title: "Tarifs",
      p: "Nos tarifs démarrent à 500 euros pour un blog, 1000 euros pour une landing page (site page unique), 1500 euros pour un site vitrine, 2000 euros pour un site corporate, 2500 euros pour un site e-commerce, 3000 euros pour un site institutionnel, 3500 euros pour un site sur mesure entièrement codé (garantie sécurité et design innovant et sur mesure)."
    },
    {
      title: "Délai de conception et de mise en ligne",
      p: "Le délai de conception et de mise en ligne dépend du type de site internet que vous souhaitez. En règle général, le délai de conception et de mise en ligne est de 2 semaines pour un blog, 3 semaines pour une landing page, 4 semaines pour un site vitrine, 5 semaines pour un site corporate, 6 semaines pour un site e-commerce, 7 semaines pour un site institutionnel, 8 semaines pour un site sur mesure entièrement codé (garantie sécurité et design innovant et sur mesure)."
    },
    {
      title: "Sites Dynamiques - Possibilités et fonctionnalités",
      p: "Nos clients sont parfois surpris de découvir tout ce qu'un site internet peut contenir comme fonctionnalité et possibilité. En effet, un site internet peut contenir un blog, un portfolio, un formulaire de contact, un chatbot, un espace membre, un espace client, un espace administrateur, un espace de paiement, de réservation, de commande (etc).  Mais nous pouvons également collecter des données, les stocker, les consulter, les anaylser et s'en servir pour orienter votre activité. Nous pouvons également établir des requêtes API. C'est à dire que nous pouvons consulter des données externes contenues dans un autre site, une autre application que la vôtre et les rapatrier dans votre site pour les afficher. Par exemple, nous pouvons établir une requête auprès d'un service météo et afficher toutes les données métérologiques de votre localité en temps réel ou s'en servir pour valider l'ouverture d'un parc d'activité d'accrobranche, par exemple. Ou encore, nous pouvons requêter en temps réel les taux de prêt des banques pour une agence immobilière, etc."
    },
    {
      title: "Propriété, hébergement, nom de domaine et abonnement",
      p: "Nos clients se posent se questionnent souvent quant à la propriété de leur site. À qui appartient-il? Il vous appartient, parce que vous allez souscrire auprès d'un hebergeur et bien souvent cet hébergeur sera également la plateforme sur laquelle votre site sera réalisée et sur laquelle votre nom de domaine sera acheté. Cet souscription est à votre nom dès lors, vous êtes propriétaire de votre site.  Dans le cas ou nos codons votre site internet de A à Z, nous signons un contrat de maintenance et quand vous souhaiterez rompre ce contrat de maintenance, le site vous reviendra en main propre (le dossier contenant l'ensemble du code de votre site)."
    }
  ];
  $$result.css.add(css);
  return `${validate_component(Mouse, "Mouse").$$render($$result, {}, {}, {})} ${validate_component(Header, "Header").$$render($$result, {}, {}, {})}  <section class="sites-section svelte-7ym7w8"><div class="hero svelte-7ym7w8"><img${add_attribute("src", siteWeb, 0)} alt=" site web illustrés sur des écrans" class="img-hero svelte-7ym7w8"> <div class="wrapper-text-hero svelte-7ym7w8"><h1 class="svelte-7ym7w8" data-svelte-h="svelte-1yje4t3">Création de <br><span class="svelte-7ym7w8">Site Web</span></h1> <h2 class="subtitle svelte-7ym7w8" data-svelte-h="svelte-1845q9e">Créer un site internet, c&#39;est à la portée de tous. <br> Mais concevoir un site bien
				référencé, doté d&#39;un design percutant et d&#39;une stratégie dynamique <br>qui transforme vos
				visiteurs en clients, là, c&#39;est une autre histoire. <br>Et cette hsitoire nous en
				maîtrisons parfaitement l&#39;écriture !</h2> ${validate_component(ButtonCTA, "Button").$$render($$result, {}, {}, {})}</div></div>  <div class="container-service svelte-7ym7w8"><h1 class="svelte-7ym7w8" data-svelte-h="svelte-v6649i">Nos services Web</h1> <div class="wrapper-service svelte-7ym7w8">${validate_component(Services, "Service").$$render(
    $$result,
    {
      text: "Design UX/UI",
      description: "Nous concevons vos sites internet de A à Z. Nous élaborons votre design UX/UI sur mesure pour garantir à vos utilisateurs une expérience unique.",
      img: imgDesign,
      lien: "/Design-site-web-thurins/#wrapper-design"
    },
    {},
    {}
  )} ${validate_component(Services, "Service").$$render(
    $$result,
    {
      text: "Rédaction Web",
      img: imgSeo,
      description: "Nous nous chargeons de rédiger pour vous l'ensemble du contenu textuel de votre site internet. Titre, paragraphe, slogan, CTA, bannière, section ...",
      lien: "/Design-site-web-thurins/#wrapper-redaction-web"
    },
    {},
    {}
  )}</div> <div class="wrapper-service svelte-7ym7w8">${validate_component(Services, "Service").$$render(
    $$result,
    {
      text: "SEO",
      description: "Nous sommes experts en stratégie SEO. C'est pour vous la garantie d'être convenablement référencé sur les moteurs de recherche, d'être visible pour toucher vos cibles.",
      lien: "/Design-site-web-thurins",
      img: cible
    },
    {},
    {}
  )} ${validate_component(Services, "Service").$$render(
    $$result,
    {
      text: "Conception et stratégie sur mesure",
      description: "Votre stratégie sur le Web est déterminante de votre succès. Déterminez simplement votre objectif et nous ferons le reste !",
      img: imgFormation,
      lien: "/Design-site-web-thurins"
    },
    {},
    {}
  )}</div></div>  <div class="testimonial svelte-7ym7w8" data-svelte-h="svelte-1rt77ty"><h1 class="svelte-7ym7w8">Amazing Gralypho !</h1> <h2 class="svelte-7ym7w8">&quot;Je n&#39;aurais jamais pensé en apprendre autant sur toutes les fonctionnalités <br>que peut
			contenir un site Web !! <br>L&#39;expertise de l&#39;agence Gralypho nous a permis d&#39;augmenter de
			53% nos ventes en ligne ! &quot;</h2> <h4 class="svelte-7ym7w8">&quot;Éloïse Humbert - CTO Rodiggia&quot;</h4> <img class="img svelte-7ym7w8"${add_attribute("src", Profil, 0)} alt=""></div>  <div class="wrapper-Csection svelte-7ym7w8">${validate_component(Csection, "Csection").$$render($$result, {}, {}, {})}</div>  <div class="wrapper-SectionB svelte-7ym7w8"><h1 class="svelte-7ym7w8" data-svelte-h="svelte-11hrhx">Vos questions</h1> ${each(accordeonTab, (tab) => {
    return `${validate_component(CardsSectionB, "CardsSectionB").$$render($$result, { title: tab.title, p: tab.p }, {}, {})}`;
  })}</div>    <div class="wrapper-form svelte-7ym7w8">${validate_component(Form, "Form").$$render($$result, {}, {}, {})}</div> </section>`;
});
export {
  Page as default
};
