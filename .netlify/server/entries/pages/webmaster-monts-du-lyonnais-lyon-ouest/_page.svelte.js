import { c as create_ssr_component, v as validate_component, d as add_attribute } from "../../../chunks/ssr.js";
import { F as FaqLink } from "../../../chunks/FaqLink.js";
import { H as Header } from "../../../chunks/Header.js";
import { L as LinkSiteApplication } from "../../../chunks/LinkSiteApplication.js";
/* empty css                                                      */
const picture = "/_app/immutable/assets/webmaster.C5_l_wXP.jpeg";
const css = {
  code: ".container.svelte-1cdw31g.svelte-1cdw31g{height:100%}.wrapper__text.svelte-1cdw31g.svelte-1cdw31g{display:flex;flex-direction:column;justify-content:center;align-items:center;width:80%;margin:0 auto}.title.svelte-1cdw31g.svelte-1cdw31g{font-family:var(--Geologica);font-size:var(--l);color:var(--primary);font-weight:900;margin-bottom:10px;letter-spacing:-1px;text-align:center;line-height:35px;margin-top:50px;padding:25px\n	}.subtitle.svelte-1cdw31g.svelte-1cdw31g{font-family:var(--Geologica);font-size:1.5rem;color:var(--primary);font-weight:500;letter-spacing:-1px;text-align:center;line-height:40px;margin-top:30px;padding:25px}.container.svelte-1cdw31g h2.svelte-1cdw31g{font-family:var(--Geologica);font-size:1.5rem;color:var(--primary);font-weight:500;letter-spacing:-1px;text-align:center}.subtitle__h3.svelte-1cdw31g.svelte-1cdw31g{font-family:var(--Geologica);font-size:var(--m);color:var(--primary);font-weight:700;letter-spacing:-1px;text-align:center;margin-top:50px}.paragraph.svelte-1cdw31g.svelte-1cdw31g{font-family:var(--Poppins);font-size:var(--m);color:var(--primary);font-weight:300;letter-spacing:-0.02em;text-align:center;align-self:center;padding:20px}.wrapper__img.svelte-1cdw31g.svelte-1cdw31g{display:flex;justify-content:center;align-items:center}.img.svelte-1cdw31g.svelte-1cdw31g{height:100%;width:500px;border-radius:20px;margin-top:20px;box-shadow:0px 20px 10px 0px rgba(0, 0, 0, 0.269)}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${validate_component(Header, "Header").$$render($$result, {}, {}, {})} <div class="container svelte-1cdw31g"><h1 class="title svelte-1cdw31g" data-svelte-h="svelte-mg1exc">Webmaster des monts du Lyonnais -  Agence Gralypho Web</h1> <h2 class="svelte-1cdw31g" data-svelte-h="svelte-10u2qet">Lyon-Ouest</h2> <div class="wrapper__img svelte-1cdw31g" data-svelte-h="svelte-jn0dgl"><img${add_attribute("src", picture, 0)} alt="panorama des monts du Lyonnais" class="img svelte-1cdw31g"></div> <div class="wrapper__text svelte-1cdw31g" data-svelte-h="svelte-6446um"><h2 class="subtitle svelte-1cdw31g">Un Webmaster expert du Web pour vos sites internet</h2> <h3 class="subtitle__h3 svelte-1cdw31g">Votre Partenaire Digital pour Attirer Plus de Clients</h3> <p class="paragraph svelte-1cdw31g">Bienvenue sur la page dédiée à notre service de webmastering à Lyon. Vous êtes artisan, indépendant ou une entreprise locale et vous souhaitez développer votre présence en ligne ? Gralypho est l’agence web qui vous accompagne dans la création et la gestion de votre site internet, l’optimisation de votre référencement, ainsi que la mise en place de solutions digitales sur-mesure.</p> <h3 class="subtitle__h3 svelte-1cdw31g">Nos Services : Une Expertise Complète pour Booster Votre Visibilité</h3> <p class="paragraph svelte-1cdw31g">Que vous soyez une petite entreprise ou un artisan, un site internet est désormais un outil indispensable pour gagner en visibilité et attirer de nouveaux clients. Notre équipe de webmasters à Lyon vous aide à créer un site internet moderne, responsive et adapté à vos besoins spécifiques. Nous concevons des sites vitrine, des sites e-commerce, et des solutions sur-mesure en fonction de vos objectifs.</p>  <h2 class="subtitle svelte-1cdw31g">Pourquoi Choisir Gralypho pour Gérer Votre Site Internet à Lyon ?</h2> <p class="paragraph svelte-1cdw31g">Une Agence de Proximité
Nous sommes basés à Lyon, et nous comprenons les enjeux spécifiques des entreprises locales. Notre objectif est de vous offrir des solutions qui vous permettent de vous démarquer dans votre secteur. <br>

Des Solutions Sur-Mesure
Chez Gralypho, chaque entreprise est unique. Nous proposons des services sur-mesure, adaptés à vos besoins, à votre secteur d’activité et à votre budget. <br>

Accompagnement Personnalisé
Nous ne nous contentons pas de créer un site pour vous. Nous vous accompagnons tout au long de la gestion de votre présence en ligne. Vous avez des questions ou des besoins spécifiques ? Nous sommes là pour vous aider à chaque étape. <br>

Des Résultats Concrets
Nous mettons tout en œuvre pour que votre site vous aide réellement à développer votre activité. En travaillant sur l’expérience utilisateur, le référencement et la performance de votre site, nous nous assurons que votre investissement soit rentable et productif.</p></div> ${validate_component(LinkSiteApplication, "Links").$$render($$result, {}, {}, {})} <div class="wrapper__faqLink">${validate_component(FaqLink, "FaqLink").$$render($$result, {}, {}, {})} <a href="/FAQ" data-svelte-h="svelte-ytks2v">FAQ</a></div> </div>`;
});
export {
  Page as default
};
