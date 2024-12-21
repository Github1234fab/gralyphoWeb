import { c as create_ssr_component, d as add_attribute, e as escape, v as validate_component, f as each } from "../../chunks/ssr.js";
import "../../chunks/Gralypho.js";
/* empty css                                                  */
/* empty css                                                       */
import "typewriter-effect/dist/core.js";
import { H as Header } from "../../chunks/Mouse.svelte_svelte_type_style_lang.js";
import { B as ButtonCTA } from "../../chunks/ButtonCTA.js";
/* empty css                                                         */
import { F as Form } from "../../chunks/Form.js";
const css$8 = {
  code: ".card-services.svelte-y8n3ph.svelte-y8n3ph{opacity:0;display:flex;align-items:center;justify-content:center;background-color:transparent;padding:40px;min-height:400px;border-top:1px solid var(--whiteGrey);border-bottom:none;border-right:none;border-left:none}.wrapper-text-service.svelte-y8n3ph.svelte-y8n3ph{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:30px}.card-services.svelte-y8n3ph h2.svelte-y8n3ph{font-family:var(--Geologica);font-weight:600;color:var(--whiteGrey);font-size:1.4rem;text-align:center;letter-spacing:-0.4px}.p.svelte-y8n3ph.svelte-y8n3ph{font-family:var(--Poppins);font-weight:300;font-size:var(--m);color:var(--whiteGrey);text-align:center;line-height:30px;min-height:150px}.icon.svelte-y8n3ph.svelte-y8n3ph{width:50px;height:50px}.lien.svelte-y8n3ph.svelte-y8n3ph{font-family:'red hat display';border:3px solid white;min-width:130px;font-weight:500;color:var(--whiteGrey);z-index:44;padding:13px 20px;border-radius:10px;margin-top:10px}.lien.svelte-y8n3ph.svelte-y8n3ph:hover{animation:svelte-y8n3ph-bounce 0.4s ease-in-out}@keyframes svelte-y8n3ph-bounce{0%{transform:scale(1) translateY(-2px)}25%{transform:scale(1) translateY(3px)}50%{transform:scale(1) translateY(-1px)}75%{transform:scale(1) translateY(2px)}100%{transform:scale(1) translateY(0)}}@media screen and (max-width: 1440px){.card-services.svelte-y8n3ph.svelte-y8n3ph{min-height:370px}.p.svelte-y8n3ph.svelte-y8n3ph{font-family:Heebo;font-weight:00;font-size:var(--m);color:var(--whiteGrey);text-align:center;line-height:30px;min-height:100px;max-width:200px}}",
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
  $$result.css.add(css$8);
  return `<button class="card-services svelte-y8n3ph"><div class="wrapper-text-service svelte-y8n3ph"><div class="wrapper-icon"><img class="icon svelte-y8n3ph"${add_attribute("src", icon, 0)} alt=""></div> <h2 class="svelte-y8n3ph">${escape(title)}</h2> <p class="p svelte-y8n3ph">${escape(p)}</p> <a${add_attribute("href", lien, 0)} class="lien svelte-y8n3ph">En savoir +</a></div> </button>`;
});
const IconWifi = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20640%20512'%20fill='rgb(59,%20228,%2036)'%3e%3c!--!Font%20Awesome%20Free%206.6.0%20by%20@fontawesome%20-%20https://fontawesome.com%20License%20-%20https://fontawesome.com/license/free%20Copyright%202024%20Fonticons,%20Inc.--%3e%3cpath%20d='M54.2%20202.9C123.2%20136.7%20216.8%2096%20320%2096s196.8%2040.7%20265.8%20106.9c12.8%2012.2%2033%2011.8%2045.2-.9s11.8-33-.9-45.2C549.7%2079.5%20440.4%2032%20320%2032S90.3%2079.5%209.8%20156.7C-2.9%20169-3.3%20189.2%208.9%20202s32.5%2013.2%2045.2%20.9zM320%20256c56.8%200%20108.6%2021.1%20148.2%2056c13.3%2011.7%2033.5%2010.4%2045.2-2.8s10.4-33.5-2.8-45.2C459.8%20219.2%20393%20192%20320%20192s-139.8%2027.2-190.5%2072c-13.3%2011.7-14.5%2031.9-2.8%2045.2s31.9%2014.5%2045.2%202.8c39.5-34.9%2091.3-56%20148.2-56zm64%20160a64%2064%200%201%200%20-128%200%2064%2064%200%201%200%20128%200z'/%3e%3c/svg%3e";
const iconApplication = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20384%20512'%20fill='rgb(59,%20228,%2036)'%3e%3c!--!Font%20Awesome%20Free%206.6.0%20by%20@fontawesome%20-%20https://fontawesome.com%20License%20-%20https://fontawesome.com/license/free%20Copyright%202024%20Fonticons,%20Inc.--%3e%3cpath%20d='M16%2064C16%2028.7%2044.7%200%2080%200L304%200c35.3%200%2064%2028.7%2064%2064l0%20384c0%2035.3-28.7%2064-64%2064L80%20512c-35.3%200-64-28.7-64-64L16%2064zM144%20448c0%208.8%207.2%2016%2016%2016l64%200c8.8%200%2016-7.2%2016-16s-7.2-16-16-16l-64%200c-8.8%200-16%207.2-16%2016zM304%2064L80%2064l0%20320%20224%200%200-320z'/%3e%3c/svg%3e";
const iconPalette = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20512%20512'%20fill='rgb(59,%20228,%2036)'%3e%3c!--!Font%20Awesome%20Free%206.6.0%20by%20@fontawesome%20-%20https://fontawesome.com%20License%20-%20https://fontawesome.com/license/free%20Copyright%202024%20Fonticons,%20Inc.--%3e%3cpath%20d='M512%20256c0%20.9%200%201.8%200%202.7c-.4%2036.5-33.6%2061.3-70.1%2061.3L344%20320c-26.5%200-48%2021.5-48%2048c0%203.4%20.4%206.7%201%209.9c2.1%2010.2%206.5%2020%2010.8%2029.9c6.1%2013.8%2012.1%2027.5%2012.1%2042c0%2031.8-21.6%2060.7-53.4%2062c-3.5%20.1-7%20.2-10.6%20.2C114.6%20512%200%20397.4%200%20256S114.6%200%20256%200S512%20114.6%20512%20256zM128%20288a32%2032%200%201%200%20-64%200%2032%2032%200%201%200%2064%200zm0-96a32%2032%200%201%200%200-64%2032%2032%200%201%200%200%2064zM288%2096a32%2032%200%201%200%20-64%200%2032%2032%200%201%200%2064%200zm96%2096a32%2032%200%201%200%200-64%2032%2032%200%201%200%200%2064z'/%3e%3c/svg%3e";
const iconSatelit = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20512%20512'%20fill='rgb(59,%20228,%2036)'%3e%3c!--!Font%20Awesome%20Free%206.6.0%20by%20@fontawesome%20-%20https://fontawesome.com%20License%20-%20https://fontawesome.com/license/free%20Copyright%202024%20Fonticons,%20Inc.--%3e%3cpath%20d='M192%2032c0-17.7%2014.3-32%2032-32C383.1%200%20512%20128.9%20512%20288c0%2017.7-14.3%2032-32%2032s-32-14.3-32-32C448%20164.3%20347.7%2064%20224%2064c-17.7%200-32-14.3-32-32zM60.6%20220.6L164.7%20324.7l28.4-28.4c-.7-2.6-1.1-5.4-1.1-8.3c0-17.7%2014.3-32%2032-32s32%2014.3%2032%2032s-14.3%2032-32%2032c-2.9%200-5.6-.4-8.3-1.1l-28.4%2028.4L291.4%20451.4c14.5%2014.5%2011.8%2038.8-7.3%2046.3C260.5%20506.9%20234.9%20512%20208%20512C93.1%20512%200%20418.9%200%20304c0-26.9%205.1-52.5%2014.4-76.1c7.5-19%2031.8-21.8%2046.3-7.3zM224%2096c106%200%20192%2086%20192%20192c0%2017.7-14.3%2032-32%2032s-32-14.3-32-32c0-70.7-57.3-128-128-128c-17.7%200-32-14.3-32-32s14.3-32%2032-32z'/%3e%3c/svg%3e";
const IconFB = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20512%20512'%20fill='rgb(59,%20228,%2036)'%3e%3c!--!Font%20Awesome%20Free%206.6.0%20by%20@fontawesome%20-%20https://fontawesome.com%20License%20-%20https://fontawesome.com/license/free%20Copyright%202024%20Fonticons,%20Inc.--%3e%3cpath%20d='M512%20256C512%20114.6%20397.4%200%20256%200S0%20114.6%200%20256C0%20376%2082.7%20476.8%20194.2%20504.5V334.2H141.4V256h52.8V222.3c0-87.1%2039.4-127.5%20125-127.5c16.2%200%2044.2%203.2%2055.7%206.4V172c-6-.6-16.5-1-29.6-1c-42%200-58.2%2015.9-58.2%2057.2V256h83.6l-14.4%2078.2H287V510.1C413.8%20494.8%20512%20386.9%20512%20256h0z'/%3e%3c/svg%3e";
const IconStrategy = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20512%20512'%20fill='rgb(59,%20228,%2036)'%3e%3c!--!Font%20Awesome%20Free%206.6.0%20by%20@fontawesome%20-%20https://fontawesome.com%20License%20-%20https://fontawesome.com/license/free%20Copyright%202024%20Fonticons,%20Inc.--%3e%3cpath%20d='M448%20256A192%20192%200%201%200%2064%20256a192%20192%200%201%200%20384%200zM0%20256a256%20256%200%201%201%20512%200A256%20256%200%201%201%200%20256zm256%2080a80%2080%200%201%200%200-160%2080%2080%200%201%200%200%20160zm0-224a144%20144%200%201%201%200%20288%20144%20144%200%201%201%200-288zM224%20256a32%2032%200%201%201%2064%200%2032%2032%200%201%201%20-64%200z'/%3e%3c/svg%3e";
const AutoText = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div id="typewriter"></div>`;
});
const css$7 = {
  code: ".E-section.svelte-1ibvpj8.svelte-1ibvpj8{display:grid;grid-template-columns:repeat(12, 1fr);grid-template-rows:auto;margin-bottom:0px;height:auto;font-size:16px;background-color:var(--primary);overflow:hidden}.card-services{flex:1 1 25%;min-height:400px}.wrapper-text.svelte-1ibvpj8.svelte-1ibvpj8{grid-column:2/ 12;grid-row:3;display:flex;flex-direction:column;border-radius:20px;margin-top:-20px}.autoText.svelte-1ibvpj8.svelte-1ibvpj8{color:var(--green);font-weight:500;font-size:1.2rem;font-family:var(--Dosis);justify-self:center;align-self:center;text-align:center;margin-top:30px;z-index:10}.E-section.svelte-1ibvpj8 h2.svelte-1ibvpj8{font-family:var(--Geologica);font-size:var(--l);color:var(--whiteGrey);font-weight:900;letter-spacing:-1px;margin-left:0px;text-align:center;line-height:25px;margin-top:100px;min-width:100%}.E-section.svelte-1ibvpj8 h3.svelte-1ibvpj8{font-family:var(--Poppins);font-size:var(--m);color:var(--whiteGrey);font-weight:300;letter-spacing:-0.04em;margin-left:0px;text-align:justify;text-justify:inter-word;line-height:30px;max-width:90%;margin:50px auto}.E-section.svelte-1ibvpj8 h3 span.svelte-1ibvpj8{font-weight:600;color:var(--whiteGrey)}.wrapper-cards-services.svelte-1ibvpj8.svelte-1ibvpj8{grid-column:2/12;grid-row:4;display:flex;flex-wrap:wrap;align-items:center;justify-content:center;gap:35px;margin-bottom:150px;margin-top:80px}@keyframes svelte-1ibvpj8-bounce{0%{transform:scale(1) translateY(-2px)}25%{transform:scale(1) translateY(3px)}50%{transform:scale(1) translateY(-1px)}75%{transform:scale(1) translateY(2px)}100%{transform:scale(1) translateY(0)}}@media screen and (min-width: 1400px) and (max-width: 2500px){}@media screen and (min-width: 1200px) and (max-width: 1400px){}@media screen and (min-width: 992px) and (max-width: 1200px){}@media screen and (min-width: 768px) and (max-width: 992px){.card-services{flex:1 1 35%}}@media screen and (min-width: 576px) and (max-width: 767px){.card-services{flex:1 1 35%}}@media screen and (min-width: 300px) and (max-width: 575px){.card-services{flex:1 1 50%}}",
  map: null
};
const ESection = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const servicesTab = [
    {
      title: "Sites Web",
      lien: "/creation-site-web-lyon",
      icon: IconWifi,
      p: "Nous créons les sites Web qui vous ressemblent et répondent à vos besoins !"
    },
    {
      title: "Applications",
      lien: "/creation-application-web-lyon",
      icon: iconApplication,
      p: "Obtenez une application web qui va optimiser votre business"
    },
    {
      title: "Design",
      lien: "/creation-logos-publicite-communication-thurins-web",
      icon: iconPalette,
      p: "Design Web, UX/UI, Logos & supports de communications'."
    },
    {
      title: "Stratégie SEO/SEA",
      lien: "/Referencement-seo-sea-thurins-web",
      icon: iconSatelit,
      p: "Référencement naturel ou gratuit, selon vos objectifs et vos besoins.."
    },
    {
      title: "Réseaux Sociaux",
      lien: "/Medias-sociaux-thurins-web",
      icon: IconFB,
      p: "Nous gérons vos réseaux pour vous!"
    },
    {
      title: "Stratégie Digitale",
      lien: "/strategie-communication-web",
      icon: IconStrategy,
      p: "Avoir un site Web c'est bien et avec une stratégie, c'est encore mieux."
    }
  ];
  $$result.css.add(css$7);
  return `<section class="E-section svelte-1ibvpj8"> <div class="wrapper-text svelte-1ibvpj8"><h2 class="svelte-1ibvpj8" data-svelte-h="svelte-18idvse">Nos services</h2> <div class="autoText svelte-1ibvpj8">${validate_component(AutoText, "AutoText").$$render($$result, {}, {}, {})}</div> <h3 class="svelte-1ibvpj8" data-svelte-h="svelte-1240wc7">Nous répondons à vos besoins avec des produits digitaux <span class="svelte-1ibvpj8">adaptés à votre business</span>, au plus près de votre
			identité et de vos exigences. <br>Nous vous accompagnons
			<span class="svelte-1ibvpj8">sur toutes les étapes de votre projet.</span>
			, de la conception à la livraison.</h3></div> <div class="wrapper-cards-services svelte-1ibvpj8">${each(servicesTab, (service) => {
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
const Photo = "/_app/immutable/assets/Pfolio__img-m.DdxsvJ_j.png";
const css$6 = {
  code: ".slider.svelte-y57zbc.svelte-y57zbc{width:85%;border-radius:5px;overflow:hidden;margin:60px auto;position:relative}.slides.svelte-y57zbc.svelte-y57zbc{display:flex;transition:fade 0.5s ease-in-out}@keyframes svelte-y57zbc-fade{0%{opacity:0}100%{opacity:1}}.slide.svelte-y57zbc.svelte-y57zbc{flex:0 0 100%;box-sizing:border-box}.img.svelte-y57zbc.svelte-y57zbc{width:100%;height:auto;display:block}.navigation.svelte-y57zbc.svelte-y57zbc{position:absolute;top:50%;width:100%;display:flex;justify-content:space-between;transform:translateY(-50%);z-index:1}button.svelte-y57zbc.svelte-y57zbc{background-color:transparent;border:none;color:white;padding:10px;cursor:pointer;transition:background-color 0.3s;width:50px;font-size:2rem;font-weight:bolder}button.svelte-y57zbc.svelte-y57zbc:hover{background-color:transparent;color:var(--cta)}button.svelte-y57zbc.svelte-y57zbc:hover{background-color:transparent}.slide.svelte-y57zbc a.svelte-y57zbc{font-family:var(--Epilogue);font-weight:300;padding:20px;letter-spacing:-0.01em;font-size:1rem;text-decoration:none;color:var(--whiteGrey);background-color:var(--cta);display:flex;max-width:10%;align-items:center;justify-content:center}.slide.svelte-y57zbc a.svelte-y57zbc:hover{background-color:var(--green);color:var(--primary);transition:0.5s ease-in-out}@media screen and (max-width: 768px){.slide.svelte-y57zbc a.svelte-y57zbc{max-width:25%}.slider.svelte-y57zbc.svelte-y57zbc{width:100%;border-radius:5px;height:450px;overflow:hidden;margin:90px auto;position:relative}.img.svelte-y57zbc.svelte-y57zbc{width:100%;height:auto;display:block}}@media screen and (max-width: 550px){.slide.svelte-y57zbc a.svelte-y57zbc{max-width:25%}.slider.svelte-y57zbc.svelte-y57zbc{min-width:100%;border-radius:5px;height:400px;overflow:hidden;margin:50px auto;position:relative}.img.svelte-y57zbc.svelte-y57zbc{width:100%;height:100%;display:block}}",
  map: null
};
const Slider = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let currentIndex = 0;
  const slides = [
    // {
    // 	title: 'Site web - Rocket Agency',
    // 	image: Rocket,
    // 	lien: 'https://fabienmarceau.com/RocketAgencyProject%20copie/index.html'
    // },
    // {
    // 	title: 'Site web - Le lion Taxi',
    // 	image: LionTaxi,
    // 	lien: 'https://taxi-lyon-aeroport-rhone.com'
    // },
    // { title: 'Site web - Booki', image: Booki, lien: 'https://fabienmarceau.com/Booki/index.html' },
    {
      title: "Landing Page-Photographie",
      image: Photo,
      lien: "https://fabienmarceau.com/gralyphoPhotography/index.html"
    }
  ];
  $$result.css.add(css$6);
  return `<div class="slider svelte-y57zbc"><div class="navigation svelte-y57zbc"><button class="svelte-y57zbc" data-svelte-h="svelte-1k8bv01">&lt;</button> <button class="svelte-y57zbc" data-svelte-h="svelte-gu44dm">&gt;</button></div> <div class="slides svelte-y57zbc" style="${"transform: translateX(-" + escape(currentIndex * 100, true) + "%);"}">${each(slides, (slide) => {
    return `<div class="slide svelte-y57zbc"><a${add_attribute("href", slide.lien, 0)} target="_blank" class="svelte-y57zbc">Visitez</a>  <img class="img svelte-y57zbc"${add_attribute("src", slide.image, 0)}${add_attribute("alt", slide.title, 0)}> </div>`;
  })}</div> </div>`;
});
const css$5 = {
  code: ".G-section.svelte-1btuup0.svelte-1btuup0{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:20px;height:auto;width:100%;font-size:16px;background-color:var(--whiteGrey);background-image:linear-gradient(158deg, rgba(84, 84, 84, 0.03) 0%, rgba(84, 84, 84, 0.03) 20%,rgba(219, 219, 219, 0.03) 20%, rgba(219, 219, 219, 0.03) 40%,rgba(54, 54, 54, 0.03) 40%, rgba(54, 54, 54, 0.03) 60%,rgba(99, 99, 99, 0.03) 60%, rgba(99, 99, 99, 0.03) 80%,rgba(92, 92, 92, 0.03) 80%, rgba(92, 92, 92, 0.03) 100%),linear-gradient(45deg, rgba(221, 221, 221, 0.02) 0%, rgba(221, 221, 221, 0.02) 14.286%,rgba(8, 8, 8, 0.02) 14.286%, rgba(8, 8, 8, 0.02) 28.572%,rgba(52, 52, 52, 0.02) 28.572%, rgba(52, 52, 52, 0.02) 42.858%,rgba(234, 234, 234, 0.02) 42.858%, rgba(234, 234, 234, 0.02) 57.144%,rgba(81, 81, 81, 0.02) 57.144%, rgba(81, 81, 81, 0.02) 71.42999999999999%,rgba(239, 239, 239, 0.02) 71.43%, rgba(239, 239, 239, 0.02) 85.71600000000001%,rgba(187, 187, 187, 0.02) 85.716%, rgba(187, 187, 187, 0.02) 100.002%),linear-gradient(109deg, rgba(33, 33, 33, 0.03) 0%, rgba(33, 33, 33, 0.03) 12.5%,rgba(147, 147, 147, 0.03) 12.5%, rgba(147, 147, 147, 0.03) 25%,rgba(131, 131, 131, 0.03) 25%, rgba(131, 131, 131, 0.03) 37.5%,rgba(151, 151, 151, 0.03) 37.5%, rgba(151, 151, 151, 0.03) 50%,rgba(211, 211, 211, 0.03) 50%, rgba(211, 211, 211, 0.03) 62.5%,rgba(39, 39, 39, 0.03) 62.5%, rgba(39, 39, 39, 0.03) 75%,rgba(55, 55, 55, 0.03) 75%, rgba(55, 55, 55, 0.03) 87.5%,rgba(82, 82, 82, 0.03) 87.5%, rgba(82, 82, 82, 0.03) 100%),linear-gradient(348deg, rgba(42, 42, 42, 0.02) 0%, rgba(42, 42, 42, 0.02) 20%,rgba(8, 8, 8, 0.02) 20%, rgba(8, 8, 8, 0.02) 40%,rgba(242, 242, 242, 0.02) 40%, rgba(242, 242, 242, 0.02) 60%,rgba(42, 42, 42, 0.02) 60%, rgba(42, 42, 42, 0.02) 80%,rgba(80, 80, 80, 0.02) 80%, rgba(80, 80, 80, 0.02) 100%),linear-gradient(120deg, rgba(106, 106, 106, 0.03) 0%, rgba(106, 106, 106, 0.03) 14.286%,rgba(67, 67, 67, 0.03) 14.286%, rgba(67, 67, 67, 0.03) 28.572%,rgba(134, 134, 134, 0.03) 28.572%, rgba(134, 134, 134, 0.03) 42.858%,rgba(19, 19, 19, 0.03) 42.858%, rgba(19, 19, 19, 0.03) 57.144%,rgba(101, 101, 101, 0.03) 57.144%, rgba(101, 101, 101, 0.03) 71.42999999999999%,rgba(205, 205, 205, 0.03) 71.43%, rgba(205, 205, 205, 0.03) 85.71600000000001%,rgba(53, 53, 53, 0.03) 85.716%, rgba(53, 53, 53, 0.03) 100.002%),linear-gradient(45deg, rgba(214, 214, 214, 0.03) 0%, rgba(214, 214, 214, 0.03) 16.667%,rgba(255, 255, 255, 0.03) 16.667%, rgba(255, 255, 255, 0.03) 33.334%,rgba(250, 250, 250, 0.03) 33.334%, rgba(250, 250, 250, 0.03) 50.001000000000005%,rgba(231, 231, 231, 0.03) 50.001%, rgba(231, 231, 231, 0.03) 66.668%,rgba(241, 241, 241, 0.03) 66.668%, rgba(241, 241, 241, 0.03) 83.33500000000001%,rgba(31, 31, 31, 0.03) 83.335%, rgba(31, 31, 31, 0.03) 100.002%),linear-gradient(59deg, rgba(224, 224, 224, 0.03) 0%, rgba(224, 224, 224, 0.03) 12.5%,rgba(97, 97, 97, 0.03) 12.5%, rgba(97, 97, 97, 0.03) 25%,rgba(143, 143, 143, 0.03) 25%, rgba(143, 143, 143, 0.03) 37.5%,rgba(110, 110, 110, 0.03) 37.5%, rgba(110, 110, 110, 0.03) 50%,rgba(34, 34, 34, 0.03) 50%, rgba(34, 34, 34, 0.03) 62.5%,rgba(155, 155, 155, 0.03) 62.5%, rgba(155, 155, 155, 0.03) 75%,rgba(249, 249, 249, 0.03) 75%, rgba(249, 249, 249, 0.03) 87.5%,rgba(179, 179, 179, 0.03) 87.5%, rgba(179, 179, 179, 0.03) 100%),linear-gradient(241deg, rgba(58, 58, 58, 0.02) 0%, rgba(58, 58, 58, 0.02) 25%,rgba(124, 124, 124, 0.02) 25%, rgba(124, 124, 124, 0.02) 50%,rgba(254, 254, 254, 0.02) 50%, rgba(254, 254, 254, 0.02) 75%,rgba(52, 52, 52, 0.02) 75%, rgba(52, 52, 52, 0.02) 100%),linear-gradient(90deg, #ffffff,#ffffff);padding:20px}.wrapper-text.svelte-1btuup0.svelte-1btuup0{grid-column:2/12;grid-row:1;display:flex;flex-direction:column;gap:10px;margin-top:0px}.G-section.svelte-1btuup0 h1.svelte-1btuup0{font-family:var(--Geologica);text-transform:uppercase;font-size:var(--s);color:var(--primary);font-weight:600;margin-bottom:40px;letter-spacing:-0.04em;margin-top:40px;text-align:center}.G-section.svelte-1btuup0 h2.svelte-1btuup0{font-family:var(--Geologica);font-size:var(--l);color:var(--primary);font-weight:900;letter-spacing:-1px;text-align:center;min-width:80%}.G-section.svelte-1btuup0 h2 span.svelte-1btuup0{font-weight:500;font-size:1.5rem}.wrapper-portfolio{flex:1 1 10%}",
  map: null
};
const GSection = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$5);
  return `<section class="G-section svelte-1btuup0"><div class="wrapper-text svelte-1btuup0" data-svelte-h="svelte-1a8muna"><h1 class="svelte-1btuup0">Nos <span class="svelte-1btuup0">réalisations</span></h1> <h2 class="svelte-1btuup0">Découvrez notre portfolio ! <br></h2></div> ${validate_component(Slider, "Slider").$$render($$result, {}, {}, {})} </section>`;
});
const css$4 = {
  code: ".H-section.svelte-1bm8bzl{display:flex;min-height:700px;font-size:16px;background-image:url('/fusee.jpg');background-repeat:no-repeat;background-position:center;background-size:cover;z-index:0;position:relative}.wrapper-text.svelte-1bm8bzl{position:absolute;min-width:25%;top:60%;left:80%;transform:translate(-50%, -50%);max-height:auto;border:1px solid whitesmoke;display:flex;align-items:center;justify-content:center;flex-direction:column;border-radius:20px;z-index:9;background-color:rgba(255, 255, 255, 0.068);backdrop-filter:blur(20px)}.subtitle.svelte-1bm8bzl{color:var(--whiteGrey);font-size:2rem;text-align:center;font-family:var(--Geologica);font-weight:100;letter-spacing:-2px;margin-top:20px;padding:20px 10px;line-height:50px}.wrapper-contact.svelte-1bm8bzl{display:flex;flex-direction:column;gap:0px;margin-top:20px;margin-bottom:20px;align-items:baseline;justify-content:flex-start;z-index:10}@keyframes svelte-1bm8bzl-bounce{0%{transform:scale(1) translateY(-2px)}25%{transform:scale(1) translateY(3px)}50%{transform:scale(1) translateY(-1px)}75%{transform:scale(1) translateY(2px)}100%{transform:scale(1) translateY(0)}}@media screen and (max-width: 1156px){.wrapper-text.svelte-1bm8bzl{min-width:40%;top:56%;left:75%;border:1px solid white;max-height:300px;z-index:99}.H-section.svelte-1bm8bzl::after{position:absolute;content:'';top:50%;left:50%;transform:translate(-50%, -50%);height:100%;width:100%;z-index:5}.subtitle.svelte-1bm8bzl{color:var(--whiteGrey);font-size:1.5rem;text-align:center;font-family:var(--Geologica);font-weight:200;letter-spacing:-0.5px;margin-top:0px;line-height:32px}.wrapper-contact.svelte-1bm8bzl{margin-top:20px}}@media screen and (max-width: 768px){.wrapper-text.svelte-1bm8bzl{min-width:60%;top:80%;left:50%;border:1px solid white;max-height:300px;z-index:99}.H-section.svelte-1bm8bzl::after{position:absolute;content:'';top:50%;left:50%;transform:translate(-50%, -50%);height:100%;width:100%;z-index:5}.subtitle.svelte-1bm8bzl{color:var(--whiteGrey);font-size:1.5rem;text-align:center;font-family:var(--Geologica);font-weight:200;letter-spacing:-0.5px;margin-top:0px}.wrapper-contact.svelte-1bm8bzl{margin-top:20px}}@media screen and (max-width: 500px){.wrapper-text.svelte-1bm8bzl{min-width:80%;top:80%;left:50%;border:1px solid white;max-height:300px;z-index:99}}",
  map: null
};
const HSection = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$4);
  return `${validate_component(Header, "Header").$$render($$result, {}, {}, {})} <section class="H-section svelte-1bm8bzl"><div class="test"></div> <div class="wrapper-text svelte-1bm8bzl"><h2 class="subtitle svelte-1bm8bzl" data-svelte-h="svelte-1ibafdm">Un lancement réussi,<br>ça fait toujours du bruit !
			</h2> <div class="wrapper-contact svelte-1bm8bzl">${validate_component(ButtonCTA, "ButtonCta").$$render($$result, {}, {}, {})}</div></div> </section>`;
});
const video = "/_app/immutable/assets/videocodecomp.DZHER-iY.mp4";
const css$3 = {
  code: ".difference.svelte-o1vsf8.svelte-o1vsf8{display:flex;flex-direction:column;align-items:center;justify-content:center;min-height:auto;font-size:16px;background-color:var(--whiteGrey);z-index:0;position:relative;padding:20px;background-image:radial-gradient(circle at center center, transparent,rgb(255,255,255)),linear-gradient(309deg, rgba(90, 90, 90,0.05) 0%, rgba(90, 90, 90,0.05) 50%,rgba(206, 206, 206,0.05) 50%, rgba(206, 206, 206,0.05) 100%),linear-gradient(39deg, rgba(13, 13, 13,0.05) 0%, rgba(13, 13, 13,0.05) 50%,rgba(189, 189, 189,0.05) 50%, rgba(189, 189, 189,0.05) 100%),linear-gradient(144deg, rgba(249, 249, 249,0.05) 0%, rgba(249, 249, 249,0.05) 50%,rgba(111, 111, 111,0.05) 50%, rgba(111, 111, 111,0.05) 100%),linear-gradient(166deg, rgba(231, 231, 231,0.05) 0%, rgba(231, 231, 231,0.05) 50%,rgba(220, 220, 220,0.05) 50%, rgba(220, 220, 220,0.05) 100%),linear-gradient(212deg, rgba(80, 80, 80,0.05) 0%, rgba(80, 80, 80,0.05) 50%,rgba(243, 243, 243,0.05) 50%, rgba(243, 243, 243,0.05) 100%),radial-gradient(circle at center center, hsl(107,19%,100%),hsl(107,19%,100%))}.video.svelte-o1vsf8.svelte-o1vsf8{width:100%;height:100%;margin-top:30px}.difference.svelte-o1vsf8 h1.svelte-o1vsf8{font-family:Geologica;text-transform:uppercase;font-size:var(--s);color:var(--secondary);font-weight:600;letter-spacing:-0.04em;margin-top:50px;margin-bottom:20px;text-align:center}.difference.svelte-o1vsf8 h2.svelte-o1vsf8{font-family:var(--Geologica);font-size:var(--l);color:var(--primary);font-weight:900;margin-bottom:10px;letter-spacing:-1px;text-align:center;line-height:40px;margin-top:20px}.difference.svelte-o1vsf8 h2 span.svelte-o1vsf8{color:var(--green);font-weight:bolder;font-size:3rem;font-family:var(--Architects);rotate:-5deg}.wrapper-difference__title.svelte-o1vsf8.svelte-o1vsf8{display:flex;flex-direction:column;align-items:center;justify-content:center;width:100%;text-align:center}.wrapper-text-difference.svelte-o1vsf8.svelte-o1vsf8{width:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:40px}.paragraph.svelte-o1vsf8.svelte-o1vsf8{font-family:var(--Poppins);font-size:var(--lm);color:var(--primary);font-weight:700;letter-spacing:-0.02em;text-align:center;align-self:center;margin-top:40px}.answer.svelte-o1vsf8.svelte-o1vsf8{font-family:'Dosis';font-size:1.6rem;color:var(--primary);font-weight:200;letter-spacing:-0.02em;text-align:center;align-self:center;margin-top:40px}.difference.svelte-o1vsf8 p.svelte-o1vsf8{font-family:var(--Poppins);column-count:1;font-size:var(--m);color:var(--primary);font-weight:300;line-height:1.5em;width:100%;padding:0px;text-align:center}.difference.svelte-o1vsf8 p span.svelte-o1vsf8{font-family:epilogue;color:var(--primary);column-count:1;font-size:var(--m);font-weight:300;line-height:1.5em;width:100%;padding:0px;text-align:left}.marginBottom.svelte-o1vsf8.svelte-o1vsf8{margin-bottom:50px}@keyframes svelte-o1vsf8-bounce{0%{transform:scale(1) translateY(-2px)}25%{transform:scale(1) translateY(3px)}50%{transform:scale(1) translateY(-1px)}75%{transform:scale(1) translateY(2px)}100%{transform:scale(1) translateY(0)}}@media screen and (max-width: 768px){.video.svelte-o1vsf8.svelte-o1vsf8{width:150%;margin-top:30px}}",
  map: null
};
const Difference = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$3);
  return `<section class="difference svelte-o1vsf8" data-svelte-h="svelte-u8ix6i"><h1 class="svelte-o1vsf8"><span class="svelte-o1vsf8">Gralypho</span></h1> <h2 class="svelte-o1vsf8">Le <span class="svelte-o1vsf8">Web</span>, <br> c&#39;est notre métier.</h2>  <video class="video svelte-o1vsf8" autoplay muted loop><source${add_attribute("src", video, 0)} type="video/mp4">
		Votre navigateur ne supporte pas l&#39;élément vidéo.</video> <div class="wrapper-text-difference svelte-o1vsf8"><div class="wrapper-difference__title svelte-o1vsf8"><h3 class="paragraph svelte-o1vsf8">Qui sommes nous ?</h3> <h3 class="answer svelte-o1vsf8">Des passionnés, formés au code informatique et au développement Web.</h3> <br> <p class="svelte-o1vsf8">Gralypho est une agence digitale, spécialisé dans la
				<span class="svelte-o1vsf8">conception de site Web</span>
				et dans la
				<span class="svelte-o1vsf8">création d&#39;application </span>sur mesure. Notre expertise dans le domaine du Web est
				profonde et solide. Nous sommes implantés dans les monts du Lyonnais, à Vaugneray et Thurins
				et connecté au monde entier !</p></div> <br> <h3 class="paragraph svelte-o1vsf8">Quelles sont nos compétences ?</h3> <h3 class="answer svelte-o1vsf8">Seo, Sea, Ux/UI, code côté serveur, code côté client, création de contenu, design, community
			management ...</h3> <br> <p class="svelte-o1vsf8">Nous sommes formés aux métiers du Web et au code informatique. C&#39;est à dire que nous disposons
			des connaissances nécessaires en
			<span class="svelte-o1vsf8">design UX/UI, en référencement SEAO et SEA, en norme W3C, en création de contenu textuel et
				visuel.
			</span>Cela signifie aussi que nous sommes en capacité de gérer le côté serveur et le côté
			client. En d&#39;autres terme nous savons tout ce qui se passe sous el capot d&#39;une application ou
			d&#39;un site internet !</p> <br> <h3 class="paragraph svelte-o1vsf8">Pourquoi nous faire confiance ?</h3> <h3 class="answer svelte-o1vsf8">Parce que nous savons ce qui se passe sous le capot !</h3> <br> <p class="marginBottom svelte-o1vsf8">Faire confiance à <span class="svelte-o1vsf8">l&#39;agence Gralypho</span>, c&#39;est faire le choix de la qualité, de la
			sécurité, de la performance, de la sérénité et de la pérennité. <br>Nous sommes ici pour
			vous accompagner dans la <span class="svelte-o1vsf8">réalisation </span>de votre projet, de sa conception à sa mise
			en ligne.
			<br>Nous sommes là pour vous conseiller, pour vous guider et pour vous former. <br>Nous
			sommes là pour vous aider à atteindre vos
			<span class="svelte-o1vsf8">objectifs</span> et à les dépasser en vous proposant et en concevant des fonctionnalités,
			des outils, des solutions qui vous permettront de vous démarquer de la concurrence, à coup sûr.</p></div> </section>`;
});
const css$2 = {
  code: ".container.svelte-6kruku.svelte-6kruku{min-height:auto;display:flex;flex-direction:column;background-color:var(--primary)}.bloc.svelte-6kruku.svelte-6kruku{flex-direction:column;display:flex;align-items:center;justify-content:center;padding:50px;z-index:0;gap:70px;margin-top:30px;margin-bottom:30px}.bloc.svelte-6kruku.svelte-6kruku::after{content:'';position:absolute;top:0;left:0;z-index:2}.wrapper.svelte-6kruku.svelte-6kruku{display:flex;align-items:center;justify-content:center;margin-bottom:30px;min-width:50%;margin:0 auto;position:relative}.disc2.svelte-6kruku.svelte-6kruku::before{display:flex;align-items:center;justify-content:center;min-height:200px;min-width:200px;border-radius:50%;background-color:var(--secondary);z-index:20;z-index:4;content:'\\f042';position:absolute;left:-50px;top:-10px;font-size:5rem;color:white;font-family:'Font Awesome 5 Free'}.disc2.svelte-6kruku.svelte-6kruku{display:flex;align-items:center;justify-content:center;font-family:var(--Radio);color:var(--whiteGrey);font-weight:600;font-size:1.2rem;background-color:var(--cta);min-height:230px;min-width:230px;border-radius:50%;opacity:0.5;z-index:10;position:relative;margin-left:70px}.title.svelte-6kruku.svelte-6kruku{font-family:var(--Geologica);font-weight:900;padding:20px;text-align:center;color:white;font-size:var(--l)}.title.svelte-6kruku span.svelte-6kruku{color:var(--green)}.bloc.svelte-6kruku p.svelte-6kruku{display:flex;flex-direction:column;align-items:center;justify-content:center;font-family:'Red Hat Display';margin-top:30px;text-align:center;text-align:center;color:white;max-width:70%;line-height:25px;font-size:1.2rem}.lien-bouton.svelte-6kruku.svelte-6kruku{border:1px solid white;border-radius:8px;padding:10px 20px;font-family:'Red Hat Display';color:white;font-weight:600;margin-top:50px;font-size:1rem;box-shadow:0px 0px 25px rgba(0, 0, 0, 0.34)}.lien-bouton.svelte-6kruku.svelte-6kruku:hover{animation:svelte-6kruku-bounce 0.4s ease-in-out}@keyframes svelte-6kruku-bounce{0%{transform:scale(1) translateY(-2px)}25%{transform:scale(1) translateY(3px)}50%{transform:scale(1) translateY(-1px)}75%{transform:scale(1) translateY(2px)}100%{transform:scale(1) translateY(0)}}@media(max-width: 768px){.wrapper.svelte-6kruku.svelte-6kruku{width:100%}.bloc.svelte-6kruku p.svelte-6kruku{max-width:100%;line-height:30px}}",
  map: null
};
const BannerOne = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$2);
  return `<div class="container svelte-6kruku" data-svelte-h="svelte-1kdufal"><div class="bloc svelte-6kruku"><h1 class="title svelte-6kruku">Un outil digital, c&#39;est comme un robot <br>qui travaille pour vous <span class="svelte-6kruku">24/7 </span>!</h1> <div class="wrapper svelte-6kruku"><div class="disc2 svelte-6kruku"></div></div> <p class="svelte-6kruku">Votre site E-commerce ou votre Application est présente sur le Web 24h/24 et 7j/7. <br>Cette
			hyper-présence sur le net peut vous permettre de générer des revenus supplémentaires, <br>de
			fidéliser davantage de clients et d&#39;effectuer des tâches à votre place.</p> <a href="/Digital-infos" class="lien-bouton svelte-6kruku">En savoir +</a></div> </div>`;
});
const css$1 = {
  code: ".container.svelte-o4uyio.svelte-o4uyio{min-height:auto;display:flex;flex-direction:column}.bloc.svelte-o4uyio.svelte-o4uyio{min-height:90vh;flex-direction:column;display:flex;align-items:center;justify-content:center;padding:50px;background-image:url('../Assets/png-gralypho/coiffeur.jpg');background-size:cover;background-position:center;background-repeat:no-repeat;z-index:0;position:relative}.sub-bloc.svelte-o4uyio.svelte-o4uyio{min-height:90vh;min-width:100vw;flex-direction:column;display:flex;align-items:center;justify-content:center;z-index:3}.bloc.svelte-o4uyio.svelte-o4uyio::after{content:'';position:absolute;top:0;left:0;width:100%;height:100%;background:linear-gradient(\n			to top,\n			rgba(239, 164, 164, 0.469),\n			rgba(0, 0, 0, 0.696) 50%,\n			rgba(230, 175, 175, 0.49)\n		);z-index:2}.imgC.svelte-o4uyio.svelte-o4uyio{background-image:url('../Assets/png-gralypho/coiffeur.jpg');background-repeat:no-repeat;background-size:cover;background-position:center}.title.svelte-o4uyio.svelte-o4uyio{font-family:var(--Geologica);font-weight:900;padding:20px;text-align:center;color:white}.icon-difference.svelte-o4uyio.svelte-o4uyio{font-size:3rem;color:white;max-width:30%;border-radius:10px;margin-bottom:20px}.bloc.svelte-o4uyio p.svelte-o4uyio{display:flex;flex-direction:column;align-items:center;justify-content:center;font-family:'Red Hat Display';text-align:center;text-align:center;color:white;min-width:50%;line-height:25px}.lien-bouton.svelte-o4uyio.svelte-o4uyio{border:1px solid white;border-radius:8px;padding:10px 20px;font-family:'Red Hat Display';color:white;font-weight:600;margin-top:50px;font-size:1rem;box-shadow:0px 0px 25px rgba(0, 0, 0, 0.34)}.lien-bouton.svelte-o4uyio.svelte-o4uyio:hover{animation:svelte-o4uyio-bounce 0.4s ease-in-out}@keyframes svelte-o4uyio-bounce{0%{transform:scale(1) translateY(-2px)}25%{transform:scale(1) translateY(3px)}50%{transform:scale(1) translateY(-1px)}75%{transform:scale(1) translateY(2px)}100%{transform:scale(1) translateY(0)}}@media screen and (max-width: 768px){.sub-bloc.svelte-o4uyio.svelte-o4uyio{margin-top:170px}.imgC.svelte-o4uyio.svelte-o4uyio{background-repeat:no-repeat;background-size:cover;background-position:40% center}p.svelte-o4uyio.svelte-o4uyio{max-width:70%}}",
  map: null
};
const BannerThree = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<div class="container svelte-o4uyio" data-svelte-h="svelte-121o4hr"><div class="bloc imgC svelte-o4uyio"><div class="sub-bloc svelte-o4uyio"><h1 class="title svelte-o4uyio">Augmentez votre potentiel de client.</h1> <p class="svelte-o4uyio"><i class="fa-solid fa-sack-dollar icon-difference svelte-o4uyio"></i>
				Augmentez vos revenus grâce à une visibilité accrue, grâce à notre expertise SEO. <br> C&#39;est
				le moyen d&#39;obtenir plus de visibilité , plus de prospects, plus de clients et plus d&#39;argent!</p> <a href="/Referencement-seo-sea-thurins-web" class="lien-bouton svelte-o4uyio">En savoir +</a></div></div> </div>`;
});
const css = {
  code: "main.svelte-1ax9x2j{overflow:hidden}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<main class="svelte-1ax9x2j"> ${validate_component(HSection, "HSection").$$render($$result, {}, {}, {})} <section id="sectionE">${validate_component(ESection, "ESection").$$render($$result, {}, {}, {})}</section> ${validate_component(Difference, "Difference").$$render($$result, {}, {}, {})}  ${validate_component(BannerOne, "BannerOne").$$render($$result, {}, {}, {})} ${validate_component(GSection, "GSection").$$render($$result, {}, {}, {})} ${validate_component(BannerThree, "BannerThree").$$render($$result, {}, {}, {})}  ${validate_component(Form, "Form").$$render($$result, {}, {}, {})} </main>`;
});
export {
  Page as default
};
