import { c as create_ssr_component, v as validate_component, f as each } from "../../../chunks/ssr.js";
import { H as Header } from "../../../chunks/Header.js";
import { M as Mouse } from "../../../chunks/Mouse.js";
import { I as ImagesBlocks, C as CardTarifs } from "../../../chunks/ImagesBlocks.js";
import { F as FaqLink } from "../../../chunks/FaqLink.js";
import { F as Form } from "../../../chunks/Form.js";
/* empty css                                                      */
import { L as LinkSiteApplication } from "../../../chunks/LinkSiteApplication.js";
const Bird = "/_app/immutable/assets/bird3.C0ARV5Ll.jpeg";
const Woman = "/_app/immutable/assets/smartphoneTech.D88PJoWQ.jpeg";
const Smartphone = "/_app/immutable/assets/compteur7.YeULzcA1.jpeg";
const css = {
  code: "main.svelte-fl75cd.svelte-fl75cd{display:flex;align-items:center;justify-content:center;flex-direction:column;padding:0px;height:auto;background-color:var(--primary)}.title.svelte-fl75cd.svelte-fl75cd{font-family:var(--Geologica);font-size:5.5rem;color:var(--whiteGrey);font-weight:700;text-align:center;letter-spacing:-2px;margin-top:50px}.wrapper__hero.svelte-fl75cd.svelte-fl75cd{display:flex;align-items:center;justify-content:center;flex-direction:column;width:100%;height:auto;padding:10px;margin-top:50px;gap:40px;border-radius:8px;color:var(--primary)}.wrapper__hero.svelte-fl75cd h2.svelte-fl75cd{font-family:var(--Red);font-size:1.2rem;letter-spacing:-1px;font-weight:900;color:var(--whiteGrey);margin-top:10px;text-align:center}.wrapper__hero.svelte-fl75cd p.svelte-fl75cd{font-family:var(--Red);font-size:1rem;font-weight:400;padding:10px;line-height:30px;color:var(--whiteGrey);width:80%;text-align:justify}.wrapper__component.svelte-fl75cd.svelte-fl75cd{display:flex;align-items:center;justify-content:center;flex-direction:column;width:80%;height:auto;padding:10px;margin-top:60px;gap:40px;border-radius:8px;color:var(--primary)}.wrapper__component.svelte-fl75cd h2.svelte-fl75cd{font-family:var(--Red);font-size:3rem;letter-spacing:-1px;font-weight:900;color:var(--whiteGrey);margin-top:10px}.wrapper__component.svelte-fl75cd p.svelte-fl75cd{width:100%}@media screen and (max-width: 768px){.wrapper__images.svelte-fl75cd.svelte-fl75cd{margin-top:50px;;}.title.svelte-fl75cd.svelte-fl75cd{font-size:3rem}.wrapper__hero.svelte-fl75cd.svelte-fl75cd{margin-top:50px}.wrapper__component.svelte-fl75cd.svelte-fl75cd{width:100%;margin-top:20px;padding:0px}.wrapper__hero.svelte-fl75cd p.svelte-fl75cd{width:100%;text-align:left}}",
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script>\\n\\timport Header from '../../sections/Header.svelte';\\n\\timport Mouse from '../../Components/Mouse.svelte';\\n\\timport CardTarifs from '../../Components/CardTarifs.svelte';\\n\\timport FaqLink from '../../Components/FaqLink.svelte';\\n\\timport Images from '../../Components/ImagesBlocks.svelte';\\n\\timport Bird from '../../Assets/bird3.jpeg';\\n\\timport Woman from '../../Assets/smartphoneTech.jpeg';\\n\\timport Smartphone from '../../Assets/compteur7.jpeg';\\n\\timport Form from '../../Components/Form.svelte';\\n\\timport Button from '../../Components/ButtonCTA.svelte';\\n\\timport Link from '../../Components/LinkSiteApplication.svelte';\\n\\n\\tlet pwa = [\\n\\t\\t{\\n\\t\\t\\tname: 'PWA',\\n\\t\\t\\th2: 'Application Web,\\\\n multiplateforme, \\\\n légère à prix doux',\\n\\t\\t\\th3: 'Idéal pour : Entreprise, indépendant, commerce, évènementiel, Institution',\\n\\t\\t\\th4: ['Délai : 15 jours', 'IOS, Android et Web', ' Notification push'],\\n\\n\\t\\t\\tli: ['Accessible sans téléchargement', 'Compatible multi-plateforme (mobile, tablette, desktop)', 'Performante & rapide avec mise en cache', 'SEO-friendly et indexable par Google', 'Mode hors-ligne grâce au Service Worker', \\"Mises à jour instantanées sans validation d'un store\\", 'Coût de développement réduit (un seul code à maintenir)', 'Notifications push disponibles', 'Sécurisée via HTTPS'],\\n\\t\\t\\ttarif: '6999 €'\\n\\t\\t}\\n\\t];\\n\\n\\tlet native = [\\n\\t\\t{\\n\\t\\t\\tname: 'NATIVE',\\n\\t\\t\\th2: 'Application native, \\\\n IOS et ANDROID, \\\\n puissante et performante',\\n\\t\\t\\th3: 'Idéal pour : Indépendant, créateur, artiste, marque, identité forte',\\n\\t\\t\\th4: ['Délai : 3 semaines', 'Android et Ios', ' Notification push'],\\n\\t\\t\\tli: [\\n\\t\\t\\t\\t'Expérience utilisateur optimisée et fluide',\\n\\t\\t\\t\\t'Accès complet aux fonctionnalités du téléphone (GPS, Bluetooth, NFC, caméra...)',\\n\\t\\t\\t\\t'Meilleures performances pour les apps lourdes (jeux, AR/VR, montage vidéo)',\\n\\t\\t\\t\\t'Notifications push plus puissantes et sans restrictions',\\n\\t\\t\\t\\t'Mode hors-ligne complet avec stockage local avancé',\\n\\t\\t\\t\\t'Présence sur les stores (App Store & Google Play), gage de crédibilité',\\n\\t\\t\\t\\t'Monétisation facilitée via achats in-app et abonnements',\\n\\t\\t\\t\\t'Sécurité renforcée grâce aux validations des stores'\\n\\t\\t\\t],\\n\\t\\t\\ttarif: '9999 €'\\n\\t\\t}\\n\\t];\\n\\n\\tlet images = [Bird, Woman, Smartphone];\\n<\/script>\\n\\n<Header />\\n<Mouse />\\n\\n<main>\\n\\t<div class=\\"wrapper__images\\">\\n\\t\\t<Images img={images} alt=\\"image\\" />\\n\\t</div>\\n\\t<div class=\\"wrapper__hero\\">\\n\\t\\t<h1 class=\\"title\\">Applications</h1>\\n\\t\\t<h2>PWA ou native ?</h2>\\n\\t\\t<p>\\n\\t\\t\\tIl existe deux grands types d'applications, les PWA et les natives. Les premières sont des applications web, accessibles depuis un navigateur, qui s'adaptent à tous les supports. Les secondes sont des applications mobiles, téléchargeables sur les stores, qui offrent une expérience utilisateur optimale, car elles sont dédiées à un seul support. Les PWA sont plus rapides à développer et moins chères, tandis que les applications natives sont plus performantes et plus puissantes. Le choix\\n\\t\\t\\tentre les deux dépend de vos besoins et de votre budget.\\n\\t\\t</p>\\n\\n\\t\\t<div class=\\"wrapper__component\\">\\n\\t\\t\\t<h2>Notre offre d'applications PWA</h2>\\n\\n\\t\\t\\t<p>\\n\\t\\t\\t\\tL'application PWA est plus légère, plus rapide à développer et donc, moins chère. Elle est accessible depuis un navigateur et se télécharge depuis celui-ci sur votre smartphone. Elle s'adapte à tous les supports, c'est sa grande force. Elle est performante et rapide, SEO-friendly et indexable par Google. Elle permet de mettre en cache les données pour un mode hors-ligne et de recevoir des notifications push. Elle est sécurisée via HTTPS et son coût de développement est réduit. Elle est\\n\\t\\t\\t\\tidéale pour les entreprises, les indépendants, les commerces, les évènementiels et les institutions. Une application PWA peut se télécharger depuis microsoft application PWA, car Microsoft a intégré les PWA dans son store.\\n\\t\\t\\t</p>\\n\\t\\t\\t{#each pwa as item}\\n\\t\\t\\t\\t<CardTarifs name={item.name} h2={item.h2} h3={item.h3} h4={item.h4} li={item.li} tarif={item.tarif} />\\n\\t\\t\\t{/each}\\n\\t\\t</div>\\n\\n\\t\\t<div class=\\"wrapper__component\\">\\n\\t\\t\\t<h2>Notre offre d'application Native</h2>\\n\\n\\t\\t\\t<p>\\n\\t\\t\\t\\tL'application native est plus puissante et performante. Elle est dédiée à un seul support, soit IOS, soit Android. Elle offre une expérience utilisateur optimale et fluide. Elle permet un accès complet aux fonctionnalités du téléphone (GPS, Bluetooth, NFC, etc) et offre de meilleures performances pour les applications lourdes (jeux, AR/VR, montage vidéo). Elle permet des notifications push plus puissantes et sans restrictions, un mode hors-ligne complet avec stockage local avancé et une\\n\\t\\t\\t\\tprésence sur les stores (App Store & Google Play), gage de crédibilité. Elle facilite la monétisation via des achats in-app et des abonnements et offre une sécurité renforcée grâce aux validations des stores. Elle est idéale pour les indépendants, les créateurs, les artistes, les marques et les identités fortes.\\n\\t\\t\\t</p>\\n\\t\\t\\t{#each native as item}\\n\\t\\t\\t\\t<CardTarifs name={item.name} h2={item.h2} h3={item.h3} h4={item.h4} li={item.li} tarif={item.tarif} />\\n\\t\\t\\t{/each}\\n\\t\\t</div>\\n\\t\\t<div class=\\"wrapper__faqLink\\">\\n\\t\\t\\t<FaqLink />\\n\\t\\t\\t<Link />\\n\\t\\t</div>\\n\\t\\n\\t\\t\\t<Form />\\n\\t\\n</main>\\n\\n<style>\\n\\tmain {\\n\\t\\tdisplay: flex;\\n\\t\\talign-items: center;\\n\\t\\tjustify-content: center;\\n\\t\\tflex-direction: column;\\n\\t\\tpadding: 0px;\\n\\t\\theight: auto;\\n\\t\\tbackground-color: var(--primary);\\n\\t}\\n\\n\\t.title {\\n\\t\\tfont-family: var(--Geologica);\\n\\t\\tfont-size: 5.5rem;\\n\\t\\tcolor: var(--whiteGrey);\\n\\t\\tfont-weight: 700;\\n\\t\\ttext-align: center;\\n\\t\\tletter-spacing: -2px;\\n\\t\\tmargin-top: 50px;\\n\\t}\\n\\t.wrapper__hero {\\n\\t\\tdisplay: flex;\\n\\t\\talign-items: center;\\n\\t\\tjustify-content: center;\\n\\t\\tflex-direction: column;\\n\\t\\twidth: 100%;\\n\\t\\theight: auto;\\n\\t\\tpadding: 10px;\\n\\t\\tmargin-top: 50px;\\n\\t\\tgap: 40px;\\n\\t\\tborder-radius: 8px;\\n\\t\\tcolor: var(--primary);\\n\\t}\\n\\t.wrapper__hero h2 {\\n\\t\\tfont-family: var(--Red);\\n\\t\\tfont-size: 1.2rem;\\n\\t\\tletter-spacing: -1px;\\n\\t\\tfont-weight: 900;\\n\\t\\tcolor: var(--whiteGrey);\\n\\t\\tmargin-top: 10px;\\n\\t\\ttext-align: center;\\n\\t}\\n\\n\\t.wrapper__hero p {\\n\\t\\tfont-family: var(--Red);\\n\\t\\tfont-size: 1rem;\\n\\t\\tfont-weight: 400;\\n\\t\\tpadding: 10px;\\n\\t\\tline-height: 30px;\\n\\t\\tcolor: var(--whiteGrey);\\n\\t\\twidth: 80%;\\n\\t\\ttext-align: justify;\\n\\t}\\n\\t.wrapper__component {\\n\\t\\tdisplay: flex;\\n\\t\\talign-items: center;\\n\\t\\tjustify-content: center;\\n\\t\\tflex-direction: column;\\n\\t\\twidth: 80%;\\n\\t\\theight: auto;\\n\\t\\tpadding: 10px;\\n\\t\\tmargin-top: 60px;\\n\\t\\tgap: 40px;\\n\\t\\tborder-radius: 8px;\\n\\t\\tcolor: var(--primary);\\n\\t}\\n\\t.wrapper__component h2 {\\n\\t\\tfont-family: var(--Red);\\n\\t\\tfont-size: 3rem;\\n\\t\\tletter-spacing: -1px;\\n\\t\\tfont-weight: 900;\\n\\t\\tcolor: var(--whiteGrey);\\n\\t\\tmargin-top: 10px;\\n\\t}\\n\\t.wrapper__component p {\\n\\t\\twidth: 100%;\\n\\t}\\n\\n\\t@media screen and (max-width: 768px) {\\n\\t\\t.wrapper__images{\\n\\t\\t\\tmargin-top: 50px;;\\n\\t\\t}\\n\\t\\t.title {\\n\\t\\t\\tfont-size: 3rem;\\n\\t\\t}\\n\\t\\t.wrapper__hero {\\n\\t\\t\\tmargin-top: 50px;\\n\\t\\t}\\n\\t\\t.wrapper__component {\\n\\t\\t\\twidth: 100%;\\n\\t\\t\\tmargin-top: 20px;\\n\\t\\t\\tpadding: 0px;\\n\\t\\t}\\n\\t\\t.wrapper__hero p {\\n\\t\\t\\twidth: 100%;\\n\\t\\t\\ttext-align: left;\\n\\t\\t}\\n\\t}\\n\\n</style>\\n"],"names":[],"mappings":"AAgGC,gCAAK,CACJ,OAAO,CAAE,IAAI,CACb,WAAW,CAAE,MAAM,CACnB,eAAe,CAAE,MAAM,CACvB,cAAc,CAAE,MAAM,CACtB,OAAO,CAAE,GAAG,CACZ,MAAM,CAAE,IAAI,CACZ,gBAAgB,CAAE,IAAI,SAAS,CAChC,CAEA,kCAAO,CACN,WAAW,CAAE,IAAI,WAAW,CAAC,CAC7B,SAAS,CAAE,MAAM,CACjB,KAAK,CAAE,IAAI,WAAW,CAAC,CACvB,WAAW,CAAE,GAAG,CAChB,UAAU,CAAE,MAAM,CAClB,cAAc,CAAE,IAAI,CACpB,UAAU,CAAE,IACb,CACA,0CAAe,CACd,OAAO,CAAE,IAAI,CACb,WAAW,CAAE,MAAM,CACnB,eAAe,CAAE,MAAM,CACvB,cAAc,CAAE,MAAM,CACtB,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IAAI,CACZ,OAAO,CAAE,IAAI,CACb,UAAU,CAAE,IAAI,CAChB,GAAG,CAAE,IAAI,CACT,aAAa,CAAE,GAAG,CAClB,KAAK,CAAE,IAAI,SAAS,CACrB,CACA,4BAAc,CAAC,gBAAG,CACjB,WAAW,CAAE,IAAI,KAAK,CAAC,CACvB,SAAS,CAAE,MAAM,CACjB,cAAc,CAAE,IAAI,CACpB,WAAW,CAAE,GAAG,CAChB,KAAK,CAAE,IAAI,WAAW,CAAC,CACvB,UAAU,CAAE,IAAI,CAChB,UAAU,CAAE,MACb,CAEA,4BAAc,CAAC,eAAE,CAChB,WAAW,CAAE,IAAI,KAAK,CAAC,CACvB,SAAS,CAAE,IAAI,CACf,WAAW,CAAE,GAAG,CAChB,OAAO,CAAE,IAAI,CACb,WAAW,CAAE,IAAI,CACjB,KAAK,CAAE,IAAI,WAAW,CAAC,CACvB,KAAK,CAAE,GAAG,CACV,UAAU,CAAE,OACb,CACA,+CAAoB,CACnB,OAAO,CAAE,IAAI,CACb,WAAW,CAAE,MAAM,CACnB,eAAe,CAAE,MAAM,CACvB,cAAc,CAAE,MAAM,CACtB,KAAK,CAAE,GAAG,CACV,MAAM,CAAE,IAAI,CACZ,OAAO,CAAE,IAAI,CACb,UAAU,CAAE,IAAI,CAChB,GAAG,CAAE,IAAI,CACT,aAAa,CAAE,GAAG,CAClB,KAAK,CAAE,IAAI,SAAS,CACrB,CACA,iCAAmB,CAAC,gBAAG,CACtB,WAAW,CAAE,IAAI,KAAK,CAAC,CACvB,SAAS,CAAE,IAAI,CACf,cAAc,CAAE,IAAI,CACpB,WAAW,CAAE,GAAG,CAChB,KAAK,CAAE,IAAI,WAAW,CAAC,CACvB,UAAU,CAAE,IACb,CACA,iCAAmB,CAAC,eAAE,CACrB,KAAK,CAAE,IACR,CAEA,OAAO,MAAM,CAAC,GAAG,CAAC,YAAY,KAAK,CAAE,CACpC,4CAAgB,CACf,UAAU,CAAE,IAAI,CAAC,CAClB,CACA,kCAAO,CACN,SAAS,CAAE,IACZ,CACA,0CAAe,CACd,UAAU,CAAE,IACb,CACA,+CAAoB,CACnB,KAAK,CAAE,IAAI,CACX,UAAU,CAAE,IAAI,CAChB,OAAO,CAAE,GACV,CACA,4BAAc,CAAC,eAAE,CAChB,KAAK,CAAE,IAAI,CACX,UAAU,CAAE,IACb,CACD"}`
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let pwa = [
    {
      name: "PWA",
      h2: "Application Web,\n multiplateforme, \n légère à prix doux",
      h3: "Idéal pour : Entreprise, indépendant, commerce, évènementiel, Institution",
      h4: ["Délai : 15 jours", "IOS, Android et Web", " Notification push"],
      li: [
        "Accessible sans téléchargement",
        "Compatible multi-plateforme (mobile, tablette, desktop)",
        "Performante & rapide avec mise en cache",
        "SEO-friendly et indexable par Google",
        "Mode hors-ligne grâce au Service Worker",
        "Mises à jour instantanées sans validation d'un store",
        "Coût de développement réduit (un seul code à maintenir)",
        "Notifications push disponibles",
        "Sécurisée via HTTPS"
      ],
      tarif: "6999 €"
    }
  ];
  let native = [
    {
      name: "NATIVE",
      h2: "Application native, \n IOS et ANDROID, \n puissante et performante",
      h3: "Idéal pour : Indépendant, créateur, artiste, marque, identité forte",
      h4: ["Délai : 3 semaines", "Android et Ios", " Notification push"],
      li: [
        "Expérience utilisateur optimisée et fluide",
        "Accès complet aux fonctionnalités du téléphone (GPS, Bluetooth, NFC, caméra...)",
        "Meilleures performances pour les apps lourdes (jeux, AR/VR, montage vidéo)",
        "Notifications push plus puissantes et sans restrictions",
        "Mode hors-ligne complet avec stockage local avancé",
        "Présence sur les stores (App Store & Google Play), gage de crédibilité",
        "Monétisation facilitée via achats in-app et abonnements",
        "Sécurité renforcée grâce aux validations des stores"
      ],
      tarif: "9999 €"
    }
  ];
  let images = [Bird, Woman, Smartphone];
  $$result.css.add(css);
  return `${validate_component(Header, "Header").$$render($$result, {}, {}, {})} ${validate_component(Mouse, "Mouse").$$render($$result, {}, {}, {})} <main class="svelte-fl75cd"><div class="wrapper__images svelte-fl75cd">${validate_component(ImagesBlocks, "Images").$$render($$result, { img: images, alt: "image" }, {}, {})}</div> <div class="wrapper__hero svelte-fl75cd"><h1 class="title svelte-fl75cd" data-svelte-h="svelte-7x2jr2">Applications</h1> <h2 class="svelte-fl75cd" data-svelte-h="svelte-10jhsus">PWA ou native ?</h2> <p class="svelte-fl75cd" data-svelte-h="svelte-1kcelck">Il existe deux grands types d&#39;applications, les PWA et les natives. Les premières sont des applications web, accessibles depuis un navigateur, qui s&#39;adaptent à tous les supports. Les secondes sont des applications mobiles, téléchargeables sur les stores, qui offrent une expérience utilisateur optimale, car elles sont dédiées à un seul support. Les PWA sont plus rapides à développer et moins chères, tandis que les applications natives sont plus performantes et plus puissantes. Le choix
			entre les deux dépend de vos besoins et de votre budget.</p> <div class="wrapper__component svelte-fl75cd"><h2 class="svelte-fl75cd" data-svelte-h="svelte-1c8s5ig">Notre offre d&#39;applications PWA</h2> <p class="svelte-fl75cd" data-svelte-h="svelte-1brn9rq">L&#39;application PWA est plus légère, plus rapide à développer et donc, moins chère. Elle est accessible depuis un navigateur et se télécharge depuis celui-ci sur votre smartphone. Elle s&#39;adapte à tous les supports, c&#39;est sa grande force. Elle est performante et rapide, SEO-friendly et indexable par Google. Elle permet de mettre en cache les données pour un mode hors-ligne et de recevoir des notifications push. Elle est sécurisée via HTTPS et son coût de développement est réduit. Elle est
				idéale pour les entreprises, les indépendants, les commerces, les évènementiels et les institutions. Une application PWA peut se télécharger depuis microsoft application PWA, car Microsoft a intégré les PWA dans son store.</p> ${each(pwa, (item) => {
    return `${validate_component(CardTarifs, "CardTarifs").$$render(
      $$result,
      {
        name: item.name,
        h2: item.h2,
        h3: item.h3,
        h4: item.h4,
        li: item.li,
        tarif: item.tarif
      },
      {},
      {}
    )}`;
  })}</div> <div class="wrapper__component svelte-fl75cd"><h2 class="svelte-fl75cd" data-svelte-h="svelte-4jwh1i">Notre offre d&#39;application Native</h2> <p class="svelte-fl75cd" data-svelte-h="svelte-r7ir5k">L&#39;application native est plus puissante et performante. Elle est dédiée à un seul support, soit IOS, soit Android. Elle offre une expérience utilisateur optimale et fluide. Elle permet un accès complet aux fonctionnalités du téléphone (GPS, Bluetooth, NFC, etc) et offre de meilleures performances pour les applications lourdes (jeux, AR/VR, montage vidéo). Elle permet des notifications push plus puissantes et sans restrictions, un mode hors-ligne complet avec stockage local avancé et une
				présence sur les stores (App Store &amp; Google Play), gage de crédibilité. Elle facilite la monétisation via des achats in-app et des abonnements et offre une sécurité renforcée grâce aux validations des stores. Elle est idéale pour les indépendants, les créateurs, les artistes, les marques et les identités fortes.</p> ${each(native, (item) => {
    return `${validate_component(CardTarifs, "CardTarifs").$$render(
      $$result,
      {
        name: item.name,
        h2: item.h2,
        h3: item.h3,
        h4: item.h4,
        li: item.li,
        tarif: item.tarif
      },
      {},
      {}
    )}`;
  })}</div> <div class="wrapper__faqLink">${validate_component(FaqLink, "FaqLink").$$render($$result, {}, {}, {})} ${validate_component(LinkSiteApplication, "Link").$$render($$result, {}, {}, {})}</div> ${validate_component(Form, "Form").$$render($$result, {}, {}, {})}</div></main>`;
});
export {
  Page as default
};
