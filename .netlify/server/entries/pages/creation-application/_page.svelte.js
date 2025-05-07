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
  map: null
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
