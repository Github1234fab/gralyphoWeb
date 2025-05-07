import { c as create_ssr_component, v as validate_component, d as add_attribute } from "../../../chunks/ssr.js";
import { H as Header } from "../../../chunks/Header.js";
import { B as ButtonCTA } from "../../../chunks/ButtonCTA.js";
import { F as FaqLink } from "../../../chunks/FaqLink.js";
import { L as LinkSiteApplication } from "../../../chunks/LinkSiteApplication.js";
const CMS = "/_app/immutable/assets/CMS.BzMz0enP.jpeg";
const css = {
  code: "main.svelte-1iy0l0r.svelte-1iy0l0r{display:flex;flex-direction:column;justify-content:center;align-items:center;gap:50px;padding:30px;height:100%;background:linear-gradient(\n			to top,\n			var(--whiteGrey) 80%,\n			var(--cta) 30%,\n			var(--cta) 40%,\n			var(--primary) 80%\n		)}.image.svelte-1iy0l0r.svelte-1iy0l0r{max-width:40%;min-width:40%;z-index:2;border-radius:20px;box-shadow:0px 20px 10px 0px rgba(0, 0, 0, 0.269)}.title.svelte-1iy0l0r.svelte-1iy0l0r{font-family:var(--Geologica);letter-spacing:-1px;color:var(--primary);font-weight:700;font-size:2rem;text-align:center;margin-top:30px}.title.svelte-1iy0l0r span.svelte-1iy0l0r{color:var(--cta)}.subtitle.svelte-1iy0l0r.svelte-1iy0l0r{font-family:var(--Red);font-weight:700;color:var(--primary);font-size:1.5rem;text-align:center;width:100%\n	}.subtitle-h3.svelte-1iy0l0r.svelte-1iy0l0r{font-family:var(--Red);font-weight:400;font-size:1rem}@media screen and (max-width: 768px){main.svelte-1iy0l0r.svelte-1iy0l0r{background:linear-gradient(\n			to top,\n			var(--whiteGrey) 94%,\n			var(--cta) 30%,\n			var(--cta) 40%,\n			var(--primary) 80%\n		)}.image.svelte-1iy0l0r.svelte-1iy0l0r{max-width:100%;min-width:100%}.title.svelte-1iy0l0r.svelte-1iy0l0r{width:100%\n        }.subtitle.svelte-1iy0l0r.svelte-1iy0l0r{width:100%\n        }}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${validate_component(Header, "Header").$$render($$result, {}, {}, {})} <main class="svelte-1iy0l0r"><img class="image svelte-1iy0l0r"${add_attribute("src", CMS, 0)} alt=""> <h1 class="title svelte-1iy0l0r" data-svelte-h="svelte-17jq3oe">Pourquoi un CMS Headless <br> <span class="svelte-1iy0l0r">pour votre site web ?</span></h1> <h2 class="subtitle svelte-1iy0l0r" data-svelte-h="svelte-19kodna">Vous cherchez une solution moderne pour gérer votre site web sans compromis sur la performance ?</h2> <h3 class="subtitle-h3 svelte-1iy0l0r" data-svelte-h="svelte-9fdk0x">Avec un CMS headless, vous bénéficiez de la puissance d’un back-office intuitif pour gérer vos
		contenus, tout en offrant un site ultra-rapide, sécurisé et évolutif.</h3> <h2 class="subtitle svelte-1iy0l0r" data-svelte-h="svelte-12vwdni">Qu’est-ce qu’un CMS headless ?</h2> <h3 class="subtitle-h3 svelte-1iy0l0r" data-svelte-h="svelte-ke5mr8">Un CMS headless fonctionne différemment d’un CMS classique comme WordPress ou Wix. Au lieu de
		lier directement l’administration du contenu au front-end, il sépare ces deux aspects :
		<br> Le CMS (comme Strapi) permet de gérer facilement vos contenus. Le front-end (développé avec
		Svelte) récupère ces contenus via une API pour les afficher de manière optimisée.</h3> <h2 class="subtitle svelte-1iy0l0r" data-svelte-h="svelte-tj5rid">Pourquoi opter pour un CMS headless ?</h2> <h3 class="subtitle-h3 svelte-1iy0l0r" data-svelte-h="svelte-wx38il">✅ Performance maximale : Votre site est ultra-rapide grâce à un front-end optimisé, sans les
		lourdeurs d’un CMS traditionnel.
		<br> ✅ Flexibilité totale : Personnalisation complète du design et des fonctionnalités, sans
		être limité par un thème ou des plugins.
		<br> ✅ Sécurité renforcée : Moins d’exposition aux attaques et aux failles liées aux CMS
		classiques.
		<br> ✅ Évolutivité : Votre site peut grandir avec vos besoins, sans être bridé par un système
		figé.
		<br> ✅ Facilité de gestion : Vous modifiez vos contenus via une interface simple, sans
		toucher au code.</h3> <h2 class="subtitle svelte-1iy0l0r" data-svelte-h="svelte-11pul73">Concrètement, comment ça fonctionne</h2> <h3 class="subtitle-h3 svelte-1iy0l0r" data-svelte-h="svelte-1vthxj7">1️⃣ Création du design sur-mesure : Un site rapide, moderne et adapté à votre identité.
			<br>2️⃣ Mise en place du CMS headless : Une interface simple pour gérer vos contenus (textes,
			images, articles…)
			<br>3️⃣ Connexion API : Votre site récupère dynamiquement les informations sans compromis sur
			la vitesse.
			<br>4️⃣ Déploiement et maintenance : Vous gardez le contrôle sur votre contenu, sans
			contraintes techniques.</h3> <h2 class="subtitle svelte-1iy0l0r" data-svelte-h="svelte-1j8tgkm">Un CMS headless est-il fait pour vous ?</h2> <h3 class="subtitle-h3 svelte-1iy0l0r" data-svelte-h="svelte-35k8k6">Si vous souhaitez un site ultra-rapide et optimisé pour le SEO, facile à gérer sans toucher
				au code, sécurisé et évolutif
				<br>Alors, le CMS headless est la solution idéale pour vous !</h3> ${validate_component(FaqLink, "FaqLink").$$render($$result, {}, {}, {})} ${validate_component(LinkSiteApplication, "LinkSiteApplication").$$render($$result, {}, {}, {})} <h2 class="subtitle svelte-1iy0l0r" data-svelte-h="svelte-1hha1h5">Envie d’un site performant et moderne ? <br>Parlons-en !</h2> ${validate_component(ButtonCTA, "ButtonCta").$$render($$result, {}, {}, {})} </main>`;
});
export {
  Page as default
};
