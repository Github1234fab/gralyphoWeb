import { c as create_ssr_component, d as add_attribute, e as escape, v as validate_component, f as each } from "../../chunks/ssr.js";
/* empty css                  */
/* empty css                                                       */
import "typewriter-effect/dist/core.js";
/* empty css                                                         */
/* empty css                                                    */
/* empty css                                                   */
import { F as Form } from "../../chunks/Form.js";
/* empty css                                               */
import { B as ButtonCTA } from "../../chunks/ButtonCTA.js";
import { H as Header } from "../../chunks/Header.js";
import { L as LinkSiteApplication } from "../../chunks/LinkSiteApplication.js";
import { F as FaqLink } from "../../chunks/FaqLink.js";
const css$9 = {
  code: ".card-services.svelte-5nj73u.svelte-5nj73u{opacity:1;display:flex;align-items:center;justify-content:center;background-color:transparent;padding:20px;min-height:350px;max-width:35%;min-width:35%;border-radius:8px;border:1px solid grey;transform:translateX(200px)}.wrapper-text-service.svelte-5nj73u.svelte-5nj73u{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:30px}.card-services.svelte-5nj73u h2.svelte-5nj73u{font-family:var(--Geologica);font-weight:600;color:var(--whiteGrey);font-size:1.4rem;text-align:center;letter-spacing:-0.4px}.p.svelte-5nj73u.svelte-5nj73u{font-family:var(--Poppins);font-weight:400;font-size:var(--m);color:var(--whiteGrey);text-align:center;line-height:30px}.icon.svelte-5nj73u.svelte-5nj73u{rotate:0;width:50px;height:50px;transform:scale(0)}.lien.svelte-5nj73u.svelte-5nj73u{font-family:'red hat display';border:3px solid white;min-width:130px;font-weight:500;color:var(--whiteGrey);z-index:44;padding:13px 20px;border-radius:10px;margin-top:0px}.lien.svelte-5nj73u.svelte-5nj73u:hover{animation:svelte-5nj73u-bounce 0.4s ease-in-out}@keyframes svelte-5nj73u-bounce{0%{transform:scale(1) translateY(-2px)}25%{transform:scale(1) translateY(3px)}50%{transform:scale(1) translateY(-1px)}75%{transform:scale(1) translateY(2px)}100%{transform:scale(1) translateY(0)}}@media screen and (max-width: 768px){.card-services.svelte-5nj73u.svelte-5nj73u{gap:10px;max-width:90%;min-width:90%;margin:0 auto}}@media screen and (max-width: 400px){.card-services.svelte-5nj73u.svelte-5nj73u{gap:10px;max-width:100%;min-width:100%;margin:0 auto}}",
  map: null
};
const CardServices = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title } = $$props;
  let { lien } = $$props;
  let { p } = $$props;
  let { icon } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.lien === void 0 && $$bindings.lien && lien !== void 0)
    $$bindings.lien(lien);
  if ($$props.p === void 0 && $$bindings.p && p !== void 0)
    $$bindings.p(p);
  if ($$props.icon === void 0 && $$bindings.icon && icon !== void 0)
    $$bindings.icon(icon);
  $$result.css.add(css$9);
  return `<button class="card-services svelte-5nj73u"><div class="wrapper-text-service svelte-5nj73u"><div class="wrapper-icon"><img class="icon svelte-5nj73u"${add_attribute("src", icon, 0)} alt=""></div> <h2 class="svelte-5nj73u">${escape(title)}</h2> <p class="p svelte-5nj73u">${escape(p)}</p> <a${add_attribute("href", lien, 0)} class="lien svelte-5nj73u">En savoir +</a></div> </button>`;
});
const iconPalette = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20512%20512'%20fill='%23f1c40f'%3e%3c!--!Font%20Awesome%20Free%206.6.0%20by%20@fontawesome%20-%20https://fontawesome.com%20License%20-%20https://fontawesome.com/license/free%20Copyright%202024%20Fonticons,%20Inc.--%3e%3cpath%20d='M512%20256c0%20.9%200%201.8%200%202.7c-.4%2036.5-33.6%2061.3-70.1%2061.3L344%20320c-26.5%200-48%2021.5-48%2048c0%203.4%20.4%206.7%201%209.9c2.1%2010.2%206.5%2020%2010.8%2029.9c6.1%2013.8%2012.1%2027.5%2012.1%2042c0%2031.8-21.6%2060.7-53.4%2062c-3.5%20.1-7%20.2-10.6%20.2C114.6%20512%200%20397.4%200%20256S114.6%200%20256%200S512%20114.6%20512%20256zM128%20288a32%2032%200%201%200%20-64%200%2032%2032%200%201%200%2064%200zm0-96a32%2032%200%201%200%200-64%2032%2032%200%201%200%200%2064zM288%2096a32%2032%200%201%200%20-64%200%2032%2032%200%201%200%2064%200zm96%2096a32%2032%200%201%200%200-64%2032%2032%200%201%200%200%2064z'/%3e%3c/svg%3e";
const iconSatelit = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20512%20512'%20fill='%23f1c40f'%3e%3c!--!Font%20Awesome%20Free%206.6.0%20by%20@fontawesome%20-%20https://fontawesome.com%20License%20-%20https://fontawesome.com/license/free%20Copyright%202024%20Fonticons,%20Inc.--%3e%3cpath%20d='M192%2032c0-17.7%2014.3-32%2032-32C383.1%200%20512%20128.9%20512%20288c0%2017.7-14.3%2032-32%2032s-32-14.3-32-32C448%20164.3%20347.7%2064%20224%2064c-17.7%200-32-14.3-32-32zM60.6%20220.6L164.7%20324.7l28.4-28.4c-.7-2.6-1.1-5.4-1.1-8.3c0-17.7%2014.3-32%2032-32s32%2014.3%2032%2032s-14.3%2032-32%2032c-2.9%200-5.6-.4-8.3-1.1l-28.4%2028.4L291.4%20451.4c14.5%2014.5%2011.8%2038.8-7.3%2046.3C260.5%20506.9%20234.9%20512%20208%20512C93.1%20512%200%20418.9%200%20304c0-26.9%205.1-52.5%2014.4-76.1c7.5-19%2031.8-21.8%2046.3-7.3zM224%2096c106%200%20192%2086%20192%20192c0%2017.7-14.3%2032-32%2032s-32-14.3-32-32c0-70.7-57.3-128-128-128c-17.7%200-32-14.3-32-32s14.3-32%2032-32z'/%3e%3c/svg%3e";
const IconFB = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20512%20512'%20fill='%23f1c40f'%3e%3c!--!Font%20Awesome%20Free%206.6.0%20by%20@fontawesome%20-%20https://fontawesome.com%20License%20-%20https://fontawesome.com/license/free%20Copyright%202024%20Fonticons,%20Inc.--%3e%3cpath%20d='M512%20256C512%20114.6%20397.4%200%20256%200S0%20114.6%200%20256C0%20376%2082.7%20476.8%20194.2%20504.5V334.2H141.4V256h52.8V222.3c0-87.1%2039.4-127.5%20125-127.5c16.2%200%2044.2%203.2%2055.7%206.4V172c-6-.6-16.5-1-29.6-1c-42%200-58.2%2015.9-58.2%2057.2V256h83.6l-14.4%2078.2H287V510.1C413.8%20494.8%20512%20386.9%20512%20256h0z'/%3e%3c/svg%3e";
const IconStrategy = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20512%20512'%20fill='%23f1c40f'%3e%3c!--!Font%20Awesome%20Free%206.6.0%20by%20@fontawesome%20-%20https://fontawesome.com%20License%20-%20https://fontawesome.com/license/free%20Copyright%202024%20Fonticons,%20Inc.--%3e%3cpath%20d='M448%20256A192%20192%200%201%200%2064%20256a192%20192%200%201%200%20384%200zM0%20256a256%20256%200%201%201%20512%200A256%20256%200%201%201%200%20256zm256%2080a80%2080%200%201%200%200-160%2080%2080%200%201%200%200%20160zm0-224a144%20144%200%201%201%200%20288%20144%20144%200%201%201%200-288zM224%20256a32%2032%200%201%201%2064%200%2032%2032%200%201%201%20-64%200z'/%3e%3c/svg%3e";
const AutoText = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div id="typewriter"></div>`;
});
const css$8 = {
  code: ".E-section.svelte-12qok7l.svelte-12qok7l{display:flex;flex-direction:column;background-color:var(--primary);padding:20px}.wrapper-text.svelte-12qok7l.svelte-12qok7l{display:flex;flex-direction:column;border-radius:20px}.autoText.svelte-12qok7l.svelte-12qok7l{color:var(--green);font-weight:900;font-size:1.5rem;font-family:var(--Dosis);justify-self:center;align-self:center;text-align:center;margin-top:30px;z-index:10}.E-section.svelte-12qok7l h2.svelte-12qok7l{font-family:var(--Geologica);font-size:var(--l);color:var(--whiteGrey);font-weight:900;letter-spacing:-1px;margin-left:0px;text-align:center;line-height:45px;min-width:100%}.wrapper-cards-services.svelte-12qok7l.svelte-12qok7l{margin-top:100px;display:flex;flex-wrap:wrap;align-items:center;justify-content:center;gap:35px;margin-bottom:50px}@keyframes svelte-12qok7l-bounce{0%{transform:scale(1) translateY(-2px)}25%{transform:scale(1) translateY(3px)}50%{transform:scale(1) translateY(-1px)}75%{transform:scale(1) translateY(2px)}100%{transform:scale(1) translateY(0)}}@media screen and (max-width: 768px){.wrapper-cards-services.svelte-12qok7l.svelte-12qok7l{gap:20px;width:100%}}",
  map: null
};
const ESection = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const servicesTab = [
    // {
    // 	title: 'Site Web',
    // 	lien: '/creation-site-internet',
    // 	icon: IconWifi,
    // 	p: 'Un site web unique et sur mesure, créé et développé pour optimiser le développement et la croissance de votre entreprise.'
    // },
    // {
    // 	title: 'Application',
    // 	lien: '/creation-application',
    // 	icon: iconApplication,
    // 	p: "Une application web sur mesure pour vous permettre au quoitidien de gérer, de calculer, d'optimiser, de générer, d'automatiser, etc."
    // },
    {
      title: "Communication",
      lien: "/creation-design-logos",
      icon: iconPalette,
      p: "Création de logos et de supports de communication."
    },
    {
      title: "Audit SEO",
      lien: "/referencement-seo-sea",
      icon: iconSatelit,
      p: "Application des différentes techniques de référencements naturels."
    },
    {
      title: "Réseaux Sociaux",
      lien: "/gestion-media-sociaux",
      icon: IconFB,
      p: "Gestion de vos réseaux sociaux, plublications et rédactions."
    },
    {
      title: "Stratégie Digitale",
      lien: "/etude-strategie-digitale",
      icon: IconStrategy,
      p: "Étude de stratégie digitale sur mesure. Benchmarking - Seo - Marketing"
    }
  ];
  $$result.css.add(css$8);
  return `<section class="E-section svelte-12qok7l"> <div class="wrapper-text svelte-12qok7l"><h2 class="svelte-12qok7l" data-svelte-h="svelte-1gcj5w0">Nos services additionnels, pour le succès de votre entreprise.</h2> <div class="autoText svelte-12qok7l">${validate_component(AutoText, "AutoText").$$render($$result, {}, {}, {})}</div></div> <div class="wrapper-cards-services svelte-12qok7l">${each(servicesTab, (service) => {
    return `${validate_component(CardServices, "CardServices").$$render(
      $$result,
      {
        title: service.title,
        lien: service.lien,
        i: service.i,
        p: service.p,
        icon: service.icon
      },
      {},
      {}
    )}`;
  })}</div> </section>`;
});
const Photo = "/_app/immutable/assets/photo.DdxsvJ_j.png";
const Guitare = "/_app/immutable/assets/guitare.BIaGV4Iy.png";
const myFood = "/_app/immutable/assets/myFood.Dfz-zw16.png";
const Booki = "/_app/immutable/assets/booki.CYnHUYE3.png";
const Morpion = "/_app/immutable/assets/morpion.D-u7IUq8.png";
const Meteo = "/_app/immutable/assets/meteo.BXzgHjU9.png";
const Rocket$1 = "/_app/immutable/assets/rocket.CzMnIfoA.png";
const LionTaxi = "/_app/immutable/assets/taxi.R6i9xiKM.png";
const Todo = "/_app/immutable/assets/todo.Drcj0MY9.png";
const Issétys = "/_app/immutable/assets/issetys.CdShgxGI.png";
const synthetiser = "/_app/immutable/assets/application_synthtiser.DA2wKAJq.png";
const Pendu = "/_app/immutable/assets/lependu_application.DeQzCI2z.png";
const Info = "/_app/immutable/assets/site internet_presse.BN1JG-4C.png";
const gps = "/_app/immutable/assets/gps2.BcQjWTn_.png";
const css$7 = {
  code: ".slider.svelte-pzpap4.svelte-pzpap4{border:0px solid white;width:55%;border-radius:10px;overflow:hidden;margin:40px auto;position:relative;box-shadow:20px 20px 50px rgba(0, 0, 0, 0.342);margin-bottom:100px}.slides.svelte-pzpap4.svelte-pzpap4{display:flex;transition:fade 0.5s ease-in-out}@keyframes svelte-pzpap4-fade{0%{opacity:0}100%{opacity:1}}.slide.svelte-pzpap4.svelte-pzpap4{flex:0 0 100%;box-sizing:border-box}.img.svelte-pzpap4.svelte-pzpap4{width:100%;height:auto;display:block}.navigation.svelte-pzpap4.svelte-pzpap4{position:absolute;top:50%;width:100%;display:flex;justify-content:space-between;transform:translateY(-50%);z-index:1;padding:10px}button.svelte-pzpap4.svelte-pzpap4{background-color:transparent;border:none;color:rgb(255, 255, 255);padding:10px;cursor:pointer;transition:background-color 0.3s;width:50px;height:50px;font-size:1rem;text-align:center;font-weight:bolder;background-color:var(--cta);border-radius:50%;box-shadow:0 0 10px rgba(0, 0, 0, 0.5)}button.svelte-pzpap4.svelte-pzpap4:hover{background-color:transparent;color:var(--cta)}button.svelte-pzpap4.svelte-pzpap4:hover{background-color:transparent}.slide.svelte-pzpap4 a.svelte-pzpap4{font-family:var(--Epilogue);font-weight:300;padding:20px;letter-spacing:-0.01em;font-size:1rem;text-decoration:none;color:var(--whiteGrey);background-color:var(--cta);display:flex;max-width:10%;align-items:center;justify-content:center}.slide.svelte-pzpap4 a.svelte-pzpap4:hover{background-color:var(--green);color:var(--primary);transition:0.5s ease-in-out}@media screen and (max-width: 768px){.slide.svelte-pzpap4 a.svelte-pzpap4{max-width:25%}.slider.svelte-pzpap4.svelte-pzpap4{width:100%;border-radius:5px;height:450px;overflow:hidden;margin:0px auto;position:relative}.img.svelte-pzpap4.svelte-pzpap4{width:100%;height:auto;display:block}}@media screen and (max-width: 550px){.slide.svelte-pzpap4 a.svelte-pzpap4{max-width:25%}.slider.svelte-pzpap4.svelte-pzpap4{min-width:100%;border-radius:5px;height:300px;overflow:hidden;margin:60px auto;position:relative}.img.svelte-pzpap4.svelte-pzpap4{width:100%;height:100%;display:block}}",
  map: null
};
const Slider = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let currentIndex = 0;
  const slides = [
    {
      title: "PWA",
      image: gps,
      lien: "https://legendary-fairy-b3532c.netlify.app//"
    },
    {
      title: "Site web - Rocket Agency",
      image: Rocket$1,
      lien: "https://fabienmarceau.com/RocketAgencyProject%20copie/index.html"
    },
    {
      title: "Site web - Le lion Taxi",
      image: LionTaxi,
      lien: "https://taxi-lyon-aeroport-rhone.com"
    },
    {
      title: "Site web - Booki",
      image: Booki,
      lien: "https://fabienmarceau.com/Booki/index.html"
    },
    {
      title: "Landing Page-Photographie",
      image: Photo,
      lien: "https://fabienmarceau.com/gralyphoPhotography/index.html"
    },
    {
      title: "Site web - Oh my Food",
      image: myFood,
      lien: "https://fabienmarceau.com/myFood/index.html"
    },
    {
      title: "Site web - Issétys",
      image: Issétys,
      lien: "https://www.ecole-musique-lyon-issetys.com/"
    },
    {
      title: "Application  - Météo",
      image: Meteo,
      lien: "https://fabienmarceau.com/meteo/index.html"
    },
    {
      title: "Application - Morpion",
      image: Morpion,
      lien: "https://fabienmarceau.com/tic-tac-toe/index.html"
    },
    {
      title: "Composant - Horloge",
      image: Guitare,
      lien: "https://cours-guitare-domicile-lyon.com/"
    },
    {
      title: "Application-To Do List",
      image: Todo,
      lien: "https://main--gralyshoplist.netlify.app/"
    },
    {
      title: "Application - Pendu",
      image: Pendu,
      lien: "https://dupen.netlify.app/"
    },
    {
      title: "Application - Synthtiser",
      image: synthetiser,
      lien: "https://synthetizer.netlify.app/"
    },
    {
      title: "Site web - Presse",
      image: Info,
      lien: "https://fanciful-taiyaki-b32670.netlify.app/"
    }
  ];
  $$result.css.add(css$7);
  return `<div class="slider svelte-pzpap4"><div class="navigation svelte-pzpap4"><button class="svelte-pzpap4" data-svelte-h="svelte-1k8bv01">&lt;</button> <button class="svelte-pzpap4" data-svelte-h="svelte-gu44dm">&gt;</button></div> <div class="slides svelte-pzpap4" style="${"transform: translateX(-" + escape(currentIndex * 100, true) + "%);"}">${each(slides, (slide) => {
    return `<div class="slide svelte-pzpap4"><a${add_attribute("href", slide.lien, 0)} target="_blank" class="svelte-pzpap4">Visitez</a> <img class="img svelte-pzpap4"${add_attribute("src", slide.image, 0)}${add_attribute("alt", slide.title, 0)}> </div>`;
  })}</div> </div>`;
});
const css$6 = {
  code: ".G-section.svelte-bkeufr.svelte-bkeufr{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:20px;height:100%;width:100%;font-size:16px;background-color:var(--whiteGrey);padding:0px}.wrapper-text.svelte-bkeufr.svelte-bkeufr{grid-column:2/12;grid-row:1;display:flex;flex-direction:column;gap:10px;margin-top:0px}.G-section.svelte-bkeufr h1.svelte-bkeufr{font-family:var(--Red);font-size:2rem;color:var(--primay);font-weight:800;margin-bottom:0px;letter-spacing:-0.04em;margin-top:40px;text-align:center}.wrapper-portfolio{flex:1 1 10%}@media screen and (max-width: 768px){.G-section.svelte-bkeufr.svelte-bkeufr{height:fit-content}.G-section.svelte-bkeufr h1.svelte-bkeufr{font-size:2rem}}",
  map: null
};
const GSection = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$6);
  return `<section class="G-section svelte-bkeufr"><div class="wrapper-text svelte-bkeufr" data-svelte-h="svelte-1dhw3oy"><h1 class="svelte-bkeufr">Nos réalisations<br></h1></div> ${validate_component(Slider, "Slider").$$render($$result, {}, {}, {})} </section>`;
});
const Compteur = "/_app/immutable/assets/logoGralypho2.D3k0lvnL.jpeg";
const Firebase = "/_app/immutable/assets/firebase.BeCsZvgh.png";
const Svelte = "/_app/immutable/assets/Svelte_Logo.svg.DSpNFKX2.png";
const Wix = "/_app/immutable/assets/wixLogo.Bp6hRyce.png";
const Strapi = "/_app/immutable/assets/Strapi.monogram.logo.DFZ6XCQH.png";
const Shopify = "/_app/immutable/assets/Shopify.CsQgmk2f.png";
const WP = "/_app/immutable/assets/WP.BuNV_5YP.png";
const css$5 = {
  code: "main.svelte-1c121m.svelte-1c121m{background:linear-gradient(to top, var(--whiteGrey) 48%, var(--primary) 48%);height:auto;display:flex;flex-direction:column;justify-content:space-around;align-items:center;padding:20px;gap:0px}.wrapper__logos.svelte-1c121m.svelte-1c121m{display:flex;flex-wrap:wrap;justify-content:center;align-items:center;gap:20px;margin:40px 0px}.wrapper__text.svelte-1c121m.svelte-1c121m{display:flex;flex-direction:column;justify-content:center;align-items:center;gap:30px;height:100%}.wrapper__text.svelte-1c121m h1.svelte-1c121m{font-family:var(--Geologica);letter-spacing:-4px;color:var(--whiteGrey);font-weight:700;font-size:4.5rem;text-align:center;margin-top:40px}.wrapper__text.svelte-1c121m h2.svelte-1c121m{font-family:var(--Red);font-weight:400;letter-spacing:0px;color:rgb(231, 231, 231);font-size:1.2rem;text-align:center;margin-top:30px}.maillage.svelte-1c121m.svelte-1c121m{color:var(--whiteGrey);text-decoration:none;font-size:1.2rem;font-weight:600;letter-spacing:0px}.wrapper__text2.svelte-1c121m.svelte-1c121m{display:flex;flex-direction:column;justify-content:center;align-items:center;margin-top:70px;gap:30px;height:100%;padding:20px;border-radius:20px;margin-bottom:40px}.wrapper__text2.svelte-1c121m h3.svelte-1c121m{font-family:var(--Geologica);font-weight:300;font-size:1rem;text-align:center;line-height:30px;margin-bottom:0px}.compteur.svelte-1c121m.svelte-1c121m{height:400px;width:400px;border-radius:10px;box-shadow:0px 30px 20px 0px rgba(0, 0, 0, 0.50);margin-top:70px}.Firebase.svelte-1c121m.svelte-1c121m,.svelte.svelte-1c121m.svelte-1c121m,.webflow.svelte-1c121m.svelte-1c121m,.Wix.svelte-1c121m.svelte-1c121m,.Strapi.svelte-1c121m.svelte-1c121m,.Shopify.svelte-1c121m.svelte-1c121m,.Wordpress.svelte-1c121m.svelte-1c121m{height:80px;width:80px;box-shadow:0px 0px 10px 0px rgba(0, 0, 0, 0.294);padding:10px;border-radius:20px;margin-bottom:30px}.logo.svelte-1c121m.svelte-1c121m{border:none;display:flex;justify-content:center;align-items:center;flex-direction:column;font-family:var(--Red);color:rgba(128, 128, 128, 0.538)}.wrapper__logos.svelte-1c121m a.svelte-1c121m{color:var(--whiteGrey);text-align:center;font-family:var(--Red);font-size:0.7rem}.logo.svelte-1c121m.svelte-1c121m:hover{rotate:360deg;transition:0.3s ease-in-out}@media screen and (max-width: 1083px){main.svelte-1c121m.svelte-1c121m{background:linear-gradient(to top, var(--whiteGrey) 45%, var(--primary) 45%)}}@media screen and (max-width: 768px){main.svelte-1c121m.svelte-1c121m{background:linear-gradient(to top, var(--whiteGrey) 55%, var(--primary) 55%);gap:0px}.wrapper__text.svelte-1c121m.svelte-1c121m{gap:10px}.wrapper__text2.svelte-1c121m.svelte-1c121m{margin-top:70px;gap:10px}.wrapper__text.svelte-1c121m h1.svelte-1c121m{font-size:2.3rem;letter-spacing:-1px}.wrapper__text.svelte-1c121m h2.svelte-1c121m{font-size:1rem}.maillage.svelte-1c121m.svelte-1c121m{font-size:1rem}.wrapper__text2.svelte-1c121m h3.svelte-1c121m{font-size:1rem}.Firebase.svelte-1c121m.svelte-1c121m,.svelte.svelte-1c121m.svelte-1c121m,.webflow.svelte-1c121m.svelte-1c121m,.Wix.svelte-1c121m.svelte-1c121m,.Strapi.svelte-1c121m.svelte-1c121m,.Shopify.svelte-1c121m.svelte-1c121m,.Wordpress.svelte-1c121m.svelte-1c121m{height:55px;width:55px;padding:10px}.wrapper__logos.svelte-1c121m.svelte-1c121m{gap:5px;margin:20px 0px}.compteur.svelte-1c121m.svelte-1c121m{height:200px;width:200px;border-radius:10px;box-shadow:0px 30px 20px 0px rgba(0, 0, 0, 0.50);margin-top:30px}}@media screen and (max-width: 687px){main.svelte-1c121m.svelte-1c121m{background:linear-gradient(to top, var(--whiteGrey) 58%, var(--primary) 58%);gap:0px}}@media screen and (max-width: 400px){main.svelte-1c121m.svelte-1c121m{background:linear-gradient(to top, var(--whiteGrey) 57%, var(--primary) 57%);gap:0px}}",
  map: null
};
const HeroHome = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$5);
  return `<main class="svelte-1c121m"><div class="wrapper__text svelte-1c121m"><h1 class="svelte-1c121m" data-svelte-h="svelte-1sszmlh">Votre agence Web experte, <br>au coeur des Monts du Lyonnais!</h1> <h2 class="svelte-1c121m" data-svelte-h="svelte-d4nkuf">En tant qu&#39;<strong>agence web spécialisée</strong> dans la 
	<a href="/creation-site-internet" class="maillage svelte-1c121m">création de sites internet</a> et d&#39;
	<a href="/creation-application" class="maillage svelte-1c121m">applications</a>, <br> <strong>Gralypho</strong> propose également des services experts en 
	<a href="/referencement-seo-sea" class="maillage svelte-1c121m">stratégie SEO</a>.</h2> <br> ${validate_component(ButtonCTA, "CTA").$$render($$result, {}, {}, {})} <img class="compteur svelte-1c121m"${add_attribute("src", Compteur, 0)} alt="Un compteur, futuriste et technologique"></div> <div class="wrapper__text2 svelte-1c121m" data-svelte-h="svelte-2n5dlq"><h3 class="svelte-1c121m">Parce que nous sommes des <strong>développeurs web</strong> experts et certifiés, nous choisissons pour vous la meilleure technologie <br> pour créer votre <strong>site internet</strong>, votre <strong>application</strong> ou toute autre solution digitale sur-mesure.
			<br>	L&#39;adaptabilité est notre vraie force, elle nous permet de vous offrir des solutions performantes, au meilleur prix.</h3> <div class="wrapper__logos svelte-1c121m"><a href="https://firebase.google.com/" target="_blank" class="svelte-1c121m">Firebase<img class="Firebase logo svelte-1c121m"${add_attribute("src", Firebase, 0)} alt="logo de wordpress"></a> <a href="https://svelte.dev/" target="_blank" class="svelte-1c121m">Svelte<img class="svelte logo svelte-1c121m"${add_attribute("src", Svelte, 0)} alt="logo de svelte"></a> <a href="https://strapi.io/" target="_blank" class="svelte-1c121m">Strapi<img class="Strapi logo svelte-1c121m"${add_attribute("src", Strapi, 0)} alt="Logo de Strapi"></a> <a href="https://webflow.com/" target="_blank" class="svelte-1c121m">Webflow<img class="webflow logo svelte-1c121m" src="https://cdn.prod.website-files.com/5f15081919fdf673994ab5fd/651f24a499bc8356ba844e0c_Webflow-Logo.svg" alt="Logo de Webflow"></a> <a href="https://www.shopify.com/fr" target="_blank" class="svelte-1c121m">Shopify<img class="Shopify logo svelte-1c121m"${add_attribute("src", Shopify, 0)} alt="Logo de Shopify"></a> <a href="https://fr.wix.com/website/templates" target="_blank" class="svelte-1c121m">Wix<img class="Wix logo svelte-1c121m"${add_attribute("src", Wix, 0)} alt="Logo de Wix"></a> <a href="https://fr.wix.com/website/templates" target="_blank" class="svelte-1c121m">Wordpress<img class="Wordpress logo svelte-1c121m"${add_attribute("src", WP, 0)} alt="Logo de wordpress"></a></div></div> </main>`;
});
const Design = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAAAXNSR0IArs4c6QAABJJJREFUeF7tnGuW2yAMhT0L8JraWVk7K+vMmryAtsrBOYwDSAKcC871r5zYILifJB7BeVt4QRV4g1qn8YUAwE5AAAQAVgBsnhFAAGAFwOYZAQQAVgBsnhFAAGAFwOYZAQQAVgBsnhFAAGAFwOYZAQQAVgBsnhFAAGAFwOYZAQQAVsBhftu2n8uy/ApF5PPnsixf67r+dlTz7VFGgFG5bdv+/BdcRM9dHzUgCEABELxexLdcbggEUJDVKf5ekwsCAWQAVIrvhkAACQCN4rsgEMABQCfxzRAIIALQWXwThO4Atm37G+bH0oCv0IrPdV1lzjzsdZL4KoSzAJSE/pCbNXPms+hViH+b6RjWBnGT31NO2BVATUfQMGraHDuPB8K6rg96owHcQxQBolX8vfEOCJKK3+Ow6A1A9kT2vZKajOFaxNQYiESTbQXrCleKFdtmhDA8ALWjLaKfJb4nEo5paLQIUGcNrQB6pZ1jO7ZtM0X/LACkf8lZQwsAtPipNNY1AkSc0En5uG/d/lC2cXOaPuTLycVPptfuAHIiBTACxQOkSxQM4PnZse1pAGIw1nwpK+rjtM0bBYOIn+0HBIBj1tAEYHTxRQc0AG0uXg1gBvFnACB7Rm4nmUX8SwKYSfwRAGgnDVwpaDbxYQCi8zWlYx6ubYkZxT8dwGFRJvP/eIFmmVGaNudmFb8bgEjo+NSYReDiM5YBeGbxmwAkjuk1C36oQPX+2cWvAuDI3y1A1MH3CuK7ADxJeGnTy4hvBuDYu2nxetOs5yqevwulrjKfJL4cWZGcXzy6cjXx1Qgw/s5Z6/Um0aONO23f6NgOdRCXAk4HU9OjV4xsBDgbVrK7e7Uc0rp91jz9WNkVPb+Ygio6fBs8w0m4KpFzBCvaMoXnawBMPzCHSlypxBOiVxc/OwaE852aViZP0yp5Vc/PRoAx91P8Ws86lHsYhA0zH4rfSfxkCkICeIWcf2SXigA531+6uhwVSRkwwI+LmSLRmFL3ervP87VgcQOwbBFrRgsDrwZ/L3oJ8WtT0CkR4Ew/ahtG9/zSLKjr77TWaHAKJtVmITjrenraiTWpmQUVO28V/PicU7S9+AMEZz1Q8XMpyLrppaYBDwznABxXfW/HbOInAciXxpWwPGoaDC0gHDZT1clrP/E/mWgm4Z6fHQMCAG0cSHXw9vZjuFyvpToHYE1c7f4w4mcjwBkFWofVVOVMHZq90v2hxNcAeHZEs522rBueBGA48YsAQhQ0QzACqEl5nkgYUnwVQA8IRgDWFbBH9Hg8+vZubk0lZ5VRf5QPEGSG4Zll3NurATh5AB7W84uzoBztkKvltvllbAOA5jSXae/w4ptSkAJDfeEOBGAK8ZsAxGCiNyDl6/gUtCpE4wIs5R+qzbPyeU29pjGgpmJrmc4AphK/WwRYxU491wBgP2+0///Q0H8IldNohAiwDMKXEDsFAQ4gsdb4dpLOe4quJRoRZYcAgOj4KDYJAEyCAAgArADYPCOAAMAKgM0zAggArADYPCOAAMAKgM0zAggArADYPCOAAMAKgM0zAggArADY/D9oFth/ME3lKgAAAABJRU5ErkJggg==";
const Flex = "data:image/png;base64,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";
const Rocket = "data:image/png;base64,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";
const Seo = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAAAXNSR0IArs4c6QAABNBJREFUeF7tnWty3CAQhO0D6EyJT+b4ZHHOpAMkxgUOxUpLT88wIO/4j6tWAkR/8wKt8fNT/ExV4Hnq6DH4UwCYbAQBIABMVmDy8OEBAWCyApOHDw94dAD7vv/MGqTfPxo9yrX08Xu+9qfcs23br8n6qYef4gFZ9NdKeM1EEpgE5X3btgJJ059rWzcAlei1VY+Y7NuVPMMFwL7vKVQUix8h+lGflwAxFMAk4VsYS4MYAsAx3Ei86WXFHGEOYBGrPwOznDeYAlhc/AJlKQhmAPZ9//1RCmoqnFRCvtWmW0JGtVZIl8sYmqS+DAQTAKT4pWZPYlD1ewaTgDAw0rrhRZJERtyrBkCGHfOESD7HdAgqAMSkh7v+is90z3NoAMKJfsZ3NtRIXZ8og4cbxtkcKAB5ginpIj/T3FxoJOZhERGHBfAX6Txb/dQdSwGEKYYiBiCY0DS3bo1j5WdmACDWT4u/7/vd/rdtEz9zAoKWymz/YES4uU00GdCSVK48CoAAAm08DAQpAMT6VclsMIC0aEOKB9UcJCBgAKD1q61nJIDsBci7CZUXjwLQtX6L+DkaQIbgMhcEBOQBYN2vtn5EHCPIiBe4hCEUQPeBLYTxAgAmZJcwhALobTWbWH8AOAlavbj88bWQG3fttTnzGLYdEm/re8CwOjwMdT0AqX6OxGSFZNtJASDedmRYzDiq3VAAwGH4YYVk2zHCAKtjs9BK74Z+cwC94mJ4IkZCUC8BH8ZJ1pI92wF5IAC0rmuZvK8CgNqd9LRkJKGeFAq9vaElPODbAmDBMQlfk4QDgKXiTV+RhDvb01ZbLBoPiCooPOC/Ao9YBX1nD+gtxC6xEj4s1S5Shl4CQK9WflphM44B3mvj8b0mpArqAlhhO7onZmskwCr40LCs83EXAPv2SCpImZhXO2CTcfgqOM35kQH0XswPT8ASAOIw5GXJjOcA1p+6Hf42DAaA7Jmke+o4uziAnvW7xH8pgN56IPXn4raaRAhav9s8oByQPQAJQ26uy0BAKp/Wk5lxJG1gABlCb+GSbnOpHiSTrPLEcl4sAoDmghUhgKHHLfYXo2AAIF6wVD5AxZ+Rw8QAwIVZAeyWzM5C0srii6qgeoJoMsttpkEAvvfzNa3RL17ODITyAEFCLuPGn6meEKABEBBc8oIg5LSSuKx820FVAIT5oB7bPCwphK+fyx2CGoACwqdHaA7bMz78r4BwhWACgAxHrTeWo2o+T06pjzU4OK4mHW+pORqnt45zg2AGwAhCTxjP6y4QTAFcAELyLonnDIdgDiBDQDfuvCz6qwwWrmHS8w2FMARAUdWoMtFCuqm4VoIwFMBkEHcrrFUguABwBCFaca8AwRVABSLliHJauiQpHoUj1eF/syFMAdCqmHNF+bgcYX90dH25x/S09JkQlgCgzbIW7WdBCAAVvRkQAkDjPt4QAsBB/PKEEABOEogXhABwJ4N7QAgAnRJqNIQAANSwIyEEAAAAucML7aIGABDAKAgBQACAgND9nmwAEAIQQOiKn/oKAAQAAAIkfgAgxW+21dujkGHxA4ASwIEniMQPAAYAKgivzH9lihxgBIHtJgCwyhm1CwBGQrLdBABWOaN2AcBISLabAMAqZ9QuABgJyXYTAFjljNr9A+KNm47wkyecAAAAAElFTkSuQmCC";
const css$4 = {
  code: ".main.svelte-d42gfl{display:flex;flex-direction:column;justify-content:center;align-items:center;padding:30px;gap:40px;height:auto;background-image:url('../Assets/bird.jpeg');background-attachment:fixed;background-size:cover;background-position:center;background-repeat:no-repeat;z-index:0;position:relative}.main.svelte-d42gfl::after{content:'';position:absolute;top:0;left:0;width:100%;height:100%;background-image:linear-gradient(to bottom, var(--primary) 50%, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.01), rgba(0, 0, 0, 0));z-index:1}.container.svelte-d42gfl{display:flex;justify-content:center;align-items:center;height:auto;z-index:2}.wrapper__cards.svelte-d42gfl{display:flex;justify-content:center;align-items:center;flex-wrap:wrap;gap:50px;padding:20px;border-radius:20px;width:100%;height:auto}.wrapper__cards-card.svelte-d42gfl{display:flex;flex-direction:column;align-items:center;justify-content:space-around;gap:10px;width:20%;min-height:400px;border-radius:20px;padding:30px;background-color:rgba(2, 5, 52, 0.289);backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px)}.wrapper__cta.svelte-d42gfl{margin-top:50px;display:flex;flex-direction:column;gap:30px;background-color:var(--primary);padding:60px;border-radius:20px;box-shadow:30px 20px 10px 2px rgba(76, 76, 76, 0.35)}.wrapper__paragraph.svelte-d42gfl{display:flex;flex-direction:column;justify-content:center;align-items:center;gap:20px;height:auto;width:100%;padding:0px 20px}.title.svelte-d42gfl{font-size:2rem;font-weight:bold;color:var(--whiteGrey);margin-top:40px;font-family:var(--Red);padding:0px;text-align:center;z-index:2;width:80%}.title-2.svelte-d42gfl{font-size:1.4rem;font-weight:600;color:var(--whiteGrey);margin-top:0px;font-family:var(--Red);padding:0px;text-align:justify;z-index:2;width:80%}.subtitle.svelte-d42gfl{font-size:1rem;font-weight:400;line-height:2rem;color:var(--whiteGrey);margin-top:0px;font-family:var(--Red);padding:0px;text-align:justify;z-index:2;width:80%}.subtitle-h3.svelte-d42gfl{font-size:1.5rem;font-weight:900;color:var(--whiteGrey);text-align:center;font-family:var(--Geologica);padding:0px;display:flex;flex-direction:column;align-items:center;justify-content:center}.subtitle-h4.svelte-d42gfl{font-size:1rem;font-weight:100;color:var(--whiteGrey);text-align:center;font-family:var(--Geologica);padding:0px;display:flex;flex-direction:column;align-items:center;justify-content:center}.maillage.svelte-d42gfl{color:var(--green);text-decoration:none;font-size:1rem;font-weight:600;letter-spacing:0px}.call-to-action-txt.svelte-d42gfl{font-size:1.5rem;font-weight:700;color:var(--whiteGrey);text-align:center;font-family:var(--Red);padding:0px;display:flex;flex-direction:column;align-items:center;justify-content:center}.logo.svelte-d42gfl{width:50px;height:50px}.button.svelte-d42gfl{align-self:center;background-color:var(--green);color:var(--primary);padding:10px 20px;border-radius:10px;text-decoration:none;font-family:var(--Red);font-weight:700;max-width:150px;text-align:center}.button.svelte-d42gfl:hover{background-color:var(--primary);border:1px solid grey;color:var(--whiteGrey);transition:0.4s ease-in-out}@media screen and (max-width: 1264px){.wrapper__cards-card.svelte-d42gfl{display:flex;flex-direction:column;align-items:center;justify-content:space-around;gap:10px;min-width:70%;min-height:auto;border-radius:20px;padding:30px;background-color:rgba(2, 5, 52, 0.289);backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px)}}@media screen and (max-width: 768px){.wrapper__cta.svelte-d42gfl{margin-bottom:100px}.main.svelte-d42gfl{display:flex;flex-direction:column;justify-content:center;align-items:center;padding:10px;gap:40px;height:auto;background-image:url('../Assets/bird.jpeg');background-attachment:fixed;background-size:cover;background-position:center;background-repeat:no-repeat;z-index:0;position:relative}.main.svelte-d42gfl::after{content:'';position:absolute;top:0;left:0;width:100%;height:100%;background-image:linear-gradient(to bottom, var(--primary) 70%, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.01), rgba(0, 0, 0, 0));z-index:1}.title.svelte-d42gfl{width:100%;text-align:left}.title-2.svelte-d42gfl{width:100%;text-align:left}.subtitle.svelte-d42gfl{width:100%;text-align:left}.wrapper__cards-card.svelte-d42gfl{display:flex;flex-direction:column;align-items:center;justify-content:space-around;gap:10px;width:100%;min-height:auto;border-radius:20px;padding:30px;background-color:rgba(2, 5, 52, 0.289);backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px)}}",
  map: null
};
const MyServices = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$4);
  return `<main class="main svelte-d42gfl"><div class="wrapper__paragraph svelte-d42gfl"><h2 class="title svelte-d42gfl" data-svelte-h="svelte-cq09wa">Création de sites internet professionnels, applications web et référencement SEO</h2> <br> <h3 class="title-2 svelte-d42gfl" data-svelte-h="svelte-1n0oajz">Votre site internet professionnel, livré sous trois jours pour 1399 euros.</h3> <p class="subtitle svelte-d42gfl">Nous avons conçu une formule pour répondre aux besoins des professionnels. <br> Nous concevons un site web professionnel, livré sous 3 jours maximum, pour un tarif de 1399 euros ttc. <br> Votre futur site web contient les 5 pages traditionnelles que contient un site internet, à savoir les pages &quot;Accueil&quot;, &quot;À propos&quot;, &quot;Services&quot;, &quot;Réalisations&quot;, et &quot;Contact&quot;. <br>
			Nous procédons à l&#39;intégration de votre contenu (texte, image, etc) et optimisons votre site web pour le référencement sur internet (SEO). <br> Nous déployons pour finir votre site internet sur le Web en réalisant tous les tests nécessaires. <br> C&#39;est notre produit d&#39;appel et celui qui remporte un grand succès auprès des indépendants, commerçants, TPE et PME. Vous obtenez un site <a href="/creation-site-internet" class="maillage svelte-d42gfl" data-svelte-h="svelte-1n8mi8h">internet professionnel</a> en 3 jours, pour un prix
			défiant toute concurrence. <br><br> ${validate_component(ButtonCTA, "Button").$$render($$result, {}, {}, {})}</p> <br> <h3 class="title-2 svelte-d42gfl" data-svelte-h="svelte-1jzkmfp">Vous souhaitez un site internet qui vous ressemble, originale et unique ?</h3> <p class="subtitle svelte-d42gfl">Nous vous proposons la création de votre <a href="/creation-application" class="maillage svelte-d42gfl" data-svelte-h="svelte-cgb5sz">site internet sur mesure (Custom)</a>, pour renforcer votre identité sur le web et créer une empreinte unique. Vous possédez une marque, vous êtes indépendant, créatif ou artiste ? Pour vous, faire la différence commence par l&#39;originalité ? Alors, optez pour un site entièrement créé sur mesure. Nous vous proposons une liberté totale de création pour un résultat maximal et un visuel impactant. Nous
			sommes développeurs experts et notre capacité à coder nous permet de créer absolument ce que vous souhaitez. Nos tarifs débutent à partir de 5999 euros pour un site internet Custom qui fera la différence, à coup sûr.
			<br><br> ${validate_component(ButtonCTA, "Button").$$render($$result, {}, {}, {})}</p> <br> <h3 class="title-2 svelte-d42gfl" data-svelte-h="svelte-xei8hl">Landing page et site e-commerce</h3> <p class="subtitle svelte-d42gfl">Vous souhaitez présenter votre activité, diffuser vos évènements, votre actualité ou vendre vos produits ? <br>
			Nous vous offrons la possibilté de créer votre site web pour vous faire connaître auprès du plus grand nombre. Sous forme de Landing Page (page unique condensée) ou sous forme d&#39;un site e-commerce complet, nous sommes à vos côté pour définir votre stratégie et vous permettre d&#39;accéder à une visibilité maximale sur le web. Nos tarifs pour une landing page débutent à partir de 799€ et 3999€ pour un site e-commerce.
			<br><br>${validate_component(ButtonCTA, "Button").$$render($$result, {}, {}, {})}</p> <br> <h3 class="title-2 svelte-d42gfl" data-svelte-h="svelte-am7fod">Une application web et mobile, pour vous simplifier la vie et celle de vos clients ?</h3> <p class="subtitle svelte-d42gfl">Vous le savez, l&#39;application est incontournable, mais ce que vous pensez savoir aussi, c&#39;est qu&#39;elle est chère. Et bien détrompez-vous. Pourquoi ? Parce qu&#39;il existe l&#39;application PWA ! L&#39;application PWA est plus facile à programmer, plus rapide à développer et moins chère à créer. Elle est aussi plus rapide à charger et plus légère qu&#39;une application classique. En effet, l&#39;application PWA est une application web qui se comporte comme une application mobile. Elle est accessible depuis
			n&#39;importe quel appareil (mobile, tablette, ordinateur) et ne nécessite pas de téléchargement. Nos tarifs pour une application PWA débute à partir de 6999 euros. Pour une application native IOS et Android, nos tarifs débutent à partir de 9999€.
			<br><br>${validate_component(ButtonCTA, "Button").$$render($$result, {}, {}, {})}</p> <br> <h3 class="title-2 svelte-d42gfl" data-svelte-h="svelte-1wojx0i">Vous souhaitez un référencement naturel 100% optimisé? <br>
			Vous souhaitez une parfaite visibilité sur le web pour augmenter votre trafic et vos ventes ?</h3> <p class="subtitle svelte-d42gfl">Bienvenue dans le monde du SEO ! LE SEO (search engine optimization) regroupe aujourd&#39;hui l&#39;ensemble des techniques qui permettent à un site internet de se positionner en première page des moteurs de recherche. le SEO nécessite une grande expertise tant il regorge de technique interdépendantes. Il s&#39;agit en premier lieu d&#39;auditer votre site internet pour en comprendre la structure et la stratégie. Ensuite il s&#39;agit de réaliser un audit technique du site, d&#39;en découvrir les atouts et les
			inconvénients, puis d&#39;améliorer les différents points relevés pour atteindre les objectifs fixés en terme de trafic, de vente et de visibilité. <br><br> ${validate_component(ButtonCTA, "Button").$$render($$result, {}, {}, {})}</p></div> <div class="container svelte-d42gfl" data-svelte-h="svelte-pez28b"><div class="wrapper__cards svelte-d42gfl"><div class="wrapper__cards-card svelte-d42gfl"><img class="logo svelte-d42gfl"${add_attribute("src", Rocket, 0)} alt="fusée"> <h3 class="subtitle-h3 svelte-d42gfl">Performance</h3> <h4 class="subtitle-h4 svelte-d42gfl">Le meilleur des technologies pour des sites internet et des applications ultra-légères <br> et ultra-rapides</h4></div> <div class="wrapper__cards-card svelte-d42gfl"><img class="logo svelte-d42gfl"${add_attribute("src", Flex, 0)} alt="une personne danse et représente la flexibilté"> <h3 class="subtitle-h3 svelte-d42gfl">Flexibilité</h3> <h4 class="subtitle-h4 svelte-d42gfl">Site internet avec ou sans gestion de contenu. <br> Avec ou sans forfait de maintenance</h4></div> <div class="wrapper__cards-card svelte-d42gfl"><img class="logo svelte-d42gfl"${add_attribute("src", Seo, 0)} alt="illustration sur le SEO"> <h3 class="subtitle-h3 svelte-d42gfl">100% SEO</h3> <h4 class="subtitle-h4 svelte-d42gfl">Nous sommes experts en stratégie SEO et nous vous aidons à augmentez vos ventes <br> en augmentant de manière franche le trafic sur votre site.</h4></div> <div class="wrapper__cards-card svelte-d42gfl"><img class="logo svelte-d42gfl"${add_attribute("src", Design, 0)} alt="une plume colorée"> <h3 class="subtitle-h3 svelte-d42gfl">Design et accessibilité</h3> <h4 class="subtitle-h4 svelte-d42gfl">Nos designs sont soignés, nous adorons l&#39;UX et l&#39;UI et mettons un point d&quot;honneur à respecter les normes W3C.</h4></div></div></div> <div class="wrapper__cta svelte-d42gfl" data-svelte-h="svelte-1ux39lo"><h2 class="call-to-action-txt svelte-d42gfl">En savoir plus sur notre agence Web ?</h2> <a class="button svelte-d42gfl" href="/creation-site-application-Lyon">En savoir +</a></div> </main>`;
});
const css$3 = {
  code: ".card.svelte-5mnvg3.svelte-5mnvg3{display:flex;flex-direction:column;align-items:center;justify-content:center;flex:1 1 calc(10%);height:650px;font-family:epilogue;border-radius:10px;z-index:0;position:relative;overflow:hidden;border:1px solid rgb(83, 83, 83)}.card.svelte-5mnvg3.svelte-5mnvg3:hover{border:2px solid var(--whiteGrey)}.layer.svelte-5mnvg3.svelte-5mnvg3{position:absolute;font-family:var(--Red);font-weight:900;text-transform:lowercase;top:45px;left:50%;height:100px;transform:translate(-50%, -50%);width:100%;padding:15px 20px;color:var(--whiteGrey);font-size:1.5rem;background-color:rgb(66, 3, 3);display:flex;align-items:center;justify-content:center;text-align:center;z-index:1}.wrapper-text.svelte-5mnvg3.svelte-5mnvg3{display:flex;flex-direction:column;align-items:center;justify-content:baseline;padding:20px;gap:0px;margin-top:120px;margin-bottom:30px;z-index:2;height:100%;flex-grow:1}.wrapper-text.svelte-5mnvg3 h2.svelte-5mnvg3{font-size:2rem;color:var(--whiteGrey);font-weight:700;font-family:epilogue;letter-spacing:-1px;line-height:40px;white-space:pre-line;text-align:center}.wrapper-text.svelte-5mnvg3 h3.svelte-5mnvg3{margin-top:10px;font-size:1.2rem;color:var(--whiteGrey);font-weight:100;font-family:epilogue;letter-spacing:-1px;line-height:33px;white-space:pre-line;text-align:center}.wrapper-text.svelte-5mnvg3 li.svelte-5mnvg3{font-family:poppins;font-size:var(--m);color:var(--whiteGrey);font-weight:200;text-align:left;border:none;border-radius:20px;z-index:2;margin-left:20px;list-style-type:square}.wrapper__li.svelte-5mnvg3.svelte-5mnvg3{margin-top:50px}a.svelte-5mnvg3.svelte-5mnvg3{background-color:var(--green);color:var(--primary);font-family:'Red Hat Display';font-size:1rem;font-weight:700;border-radius:10px;text-align:center;margin-top:auto;padding:15px 20px;box-shadow:0px 0px 10px 2px rgba(76, 76, 76, 0.35);z-index:999;margin-bottom:50px}a.svelte-5mnvg3.svelte-5mnvg3:hover{background-color:var(--primary);color:var(--green);border:1px solid grey;transition:0.4s ease-in-out}@media screen and (max-width: 1357px){.card.svelte-5mnvg3.svelte-5mnvg3{flex:1 1 calc(45%);height:550px}}@media screen and (max-width: 768px){.card.svelte-5mnvg3.svelte-5mnvg3{flex:1 1 100%}.wrapper-text.svelte-5mnvg3 h2.svelte-5mnvg3{font-size:1.5rem}}",
  map: null
};
const Propositions_cards = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { type } = $$props;
  let { description } = $$props;
  let { lien } = $$props;
  let { layerTxt } = $$props;
  let { subtitle } = $$props;
  if ($$props.type === void 0 && $$bindings.type && type !== void 0)
    $$bindings.type(type);
  if ($$props.description === void 0 && $$bindings.description && description !== void 0)
    $$bindings.description(description);
  if ($$props.lien === void 0 && $$bindings.lien && lien !== void 0)
    $$bindings.lien(lien);
  if ($$props.layerTxt === void 0 && $$bindings.layerTxt && layerTxt !== void 0)
    $$bindings.layerTxt(layerTxt);
  if ($$props.subtitle === void 0 && $$bindings.subtitle && subtitle !== void 0)
    $$bindings.subtitle(subtitle);
  $$result.css.add(css$3);
  return `<div class="card svelte-5mnvg3"><div class="layer svelte-5mnvg3">${escape(layerTxt)}</div>  <div class="wrapper-text svelte-5mnvg3"><h2 class="svelte-5mnvg3">${escape(type)}</h2> <h3 class="svelte-5mnvg3">${escape(subtitle)}</h3> <div class="wrapper__li svelte-5mnvg3"><ul>${each(description, (item) => {
    return `<li class="svelte-5mnvg3">${escape(item)}</li>`;
  })}</ul></div></div> <a${add_attribute("href", lien, 0)} class="svelte-5mnvg3">En savoir +</a> </div>`;
});
const css$2 = {
  code: "main.svelte-rwetzy{background-color:var(--primary);z-index:0;padding:90px}.wrapper__cards.svelte-rwetzy{display:flex;justify-content:center;align-items:center;flex-wrap:wrap;gap:20px;z-index:2;width:100%;margin:50px auto}.title.svelte-rwetzy{font-size:3rem;color:var(--whiteGrey);font-weight:700;font-family:var(--Red);text-align:center;letter-spacing:-1px;z-index:3;margin-top:50px}@media screen and (max-width: 1100px){main.svelte-rwetzy{padding:30px;height:auto}.title.svelte-rwetzy{font-size:2.2rem}}@media screen and (max-width: 883px){.wrapper__cards.svelte-rwetzy{display:flex;justify-content:center;align-items:center;flex-wrap:wrap;gap:30px;z-index:2;width:90%;margin:50px auto}main.svelte-rwetzy{padding:20px;height:auto}.title.svelte-rwetzy{font-size:2.2rem}}",
  map: null
};
const Propositions = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const tab = [
    {
      type: "Site Custom \n Site sur-mesure \n 100% créatif",
      subtitle: "Site internet Statique",
      description: [
        "Sans BDD",
        "Sans gestion de contenu",
        "Contrat de maintenance pour modification"
      ],
      lien: "/creation-site-internet/#sans-cms",
      layerTxt: "Site web sans Gestion de contenu",
      price: "Livré \n en 3 jours"
    },
    {
      type: "Landing Page \n Site Vitrine \n Site E-Commerce",
      subtitle: "site internet Dynamique",
      description: ["BDD", "Avec gestion de contenu", "Contrat de maintenance ou autonomie"],
      lien: "/creation-site-internet/#cms",
      layerTxt: "Site web avec gestion de contenu",
      price: " Livré en \n 15 jours"
    },
    {
      type: "PWA ou Native",
      subtitle: "Légèreté et performance",
      description: [
        "Application sur mesure",
        "PWA légère à prix doux",
        "Native, robuste et rapide"
      ],
      lien: "/creation-application",
      layerTxt: "Applications",
      price: " Livré \n en 1 mois"
    },
    {
      type: "Visibilité sur Google - SEO",
      subtitle: "+ de trafic, + de visibilité, + plus de vente",
      description: ["Stratégie SEO", "Audit technique", "Optimisation à 100%"],
      lien: "/referencement-seo-sea",
      layerTxt: "SEO",
      price: " Livré \n en 1 mois"
    }
  ];
  $$result.css.add(css$2);
  return `<main class="svelte-rwetzy"><h1 class="title svelte-rwetzy" data-svelte-h="svelte-1yfg0af">Nos solutions de site internet, d&#39;application <br> et de référencement SEO</h1> <div class="wrapper__cards svelte-rwetzy">${each(tab, (infos) => {
    return `${validate_component(Propositions_cards, "PropositionsCards").$$render(
      $$result,
      {
        type: infos.type,
        description: infos.description,
        lien: infos.lien,
        layerTxt: infos.layerTxt,
        subtitle: infos.subtitle
      },
      {},
      {}
    )}`;
  })}</div> </main>`;
});
const css$1 = {
  code: "main.svelte-1uit3yr.svelte-1uit3yr{display:flex;flex-direction:column;justify-content:center;align-items:center;padding:100px}.wrapper.svelte-1uit3yr.svelte-1uit3yr{display:flex;flex-direction:column;background-color:var(--primary);border-radius:20px;padding:100px;gap:20px;box-shadow:0px 0px 20px 10px rgba(5, 5, 5, 0.365)}.title.svelte-1uit3yr.svelte-1uit3yr{font-size:2rem;font-family:var(--Red);color:var(--whiteGrey)}.subtitle.svelte-1uit3yr.svelte-1uit3yr{font-size:1rem;font-weight:400;font-family:var(--Red);color:var(--whiteGrey);line-height:2rem}.subtitle.svelte-1uit3yr span.svelte-1uit3yr{font-weight:700}a.svelte-1uit3yr.svelte-1uit3yr{background-color:var(--cta);color:var(--whiteGrey);font-family:'Red Hat Display';font-size:1rem;font-weight:700;border-radius:8px;text-align:center;padding:15px 20px;box-shadow:0px 10px 10px rgba(62, 62, 62, 0.5);z-index:999;max-width:200px}a.svelte-1uit3yr.svelte-1uit3yr:hover{animation:svelte-1uit3yr-bounce 0.4s ease-in-out}@keyframes svelte-1uit3yr-bounce{0%{transform:scale(1) translateY(-2px)}25%{transform:scale(1) translateY(3px)}50%{transform:scale(1) translateY(-1px)}75%{transform:scale(1) translateY(2px)}100%{transform:scale(1) translateY(0)}}@media screen and (max-width: 768px){main.svelte-1uit3yr.svelte-1uit3yr{padding:10px;height:auto}.wrapper.svelte-1uit3yr.svelte-1uit3yr{display:flex;flex-direction:column;background-color:var(--primary);border-radius:20px;padding:30px;gap:20px;box-shadow:0px 0px 20px 10px rgba(5, 5, 5, 0.365);margin-top:50px}.title.svelte-1uit3yr.svelte-1uit3yr{font-size:1.5rem}.subtitle.svelte-1uit3yr.svelte-1uit3yr{font-size:1rem;line-height:43px}}",
  map: null
};
const CTA_section = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<main class="svelte-1uit3yr"><div class="wrapper svelte-1uit3yr"><h2 class="title svelte-1uit3yr" data-svelte-h="svelte-1brbsyd">Un projet en tête ?</h2> <h3 class="subtitle svelte-1uit3yr" data-svelte-h="svelte-6dnxk5">Vous avez besoin d&#39;un site internet ou d&#39;une application ? Vous souhaitez obtenir des informations claires avant de vous lancer ?
			<br> Lors d&#39;un premier rendez-vous entièrement gratuit, nous pourrons définir ensemble les structures de votre projet.
			<br> Nous pourrons choisir les technologies les plus adaptées à vos besoins et aborder ensemble les questions de design, de référencement et de budget.
			<br><br> <span class="svelte-1uit3yr">Discutons de votre projet !</span></h3> ${validate_component(ButtonCTA, "ButtonCta").$$render($$result, {}, {}, {})} <a href="/#section-form" class="svelte-1uit3yr" data-svelte-h="svelte-1lehdn9">Obtenir un devis</a></div> </main>`;
});
const css = {
  code: "main.svelte-1ax9x2j{overflow:hidden}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<main class="svelte-1ax9x2j">${validate_component(Header, "Header").$$render($$result, {}, {}, {})}   ${validate_component(HeroHome, "Hero").$$render($$result, {}, {}, {})} ${validate_component(MyServices, "MyServices").$$render($$result, {}, {}, {})} ${validate_component(Propositions, "Propositions").$$render($$result, {}, {}, {})} ${validate_component(CTA_section, "CTA").$$render($$result, {}, {}, {})}   ${validate_component(GSection, "GSection").$$render($$result, {}, {}, {})}  <section id="sectionE">${validate_component(ESection, "ESection").$$render($$result, {}, {}, {})}</section> ${validate_component(FaqLink, "Faq").$$render($$result, {}, {}, {})} ${validate_component(LinkSiteApplication, "Links").$$render($$result, {}, {}, {})} ${validate_component(Form, "Form").$$render($$result, {}, {}, {})} </main>`;
});
export {
  Page as default
};
