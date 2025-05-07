import { c as create_ssr_component, v as validate_component, f as each } from "../../../chunks/ssr.js";
import { H as Header } from "../../../chunks/Header.js";
import { M as Mouse } from "../../../chunks/Mouse.js";
import { F as FaqLink } from "../../../chunks/FaqLink.js";
import { I as ImagesBlocks, C as CardTarifs } from "../../../chunks/ImagesBlocks.js";
import { F as Form } from "../../../chunks/Form.js";
import { L as LinkSiteApplication } from "../../../chunks/LinkSiteApplication.js";
const Bird = "/_app/immutable/assets/bird.CxfZn7zt.jpeg";
const Woman = "/_app/immutable/assets/gralyphoHeroImg.BuqUh43O.jpeg";
const Smartphone = "/_app/immutable/assets/compteur3.g_VqYUvP.jpeg";
const css = {
  code: "main.svelte-tlvhk1.svelte-tlvhk1{display:flex;align-items:center;justify-content:center;flex-direction:column;padding:15px;height:auto;background-color:var(--primary)}.title.svelte-tlvhk1.svelte-tlvhk1{font-family:var(--Geologica);font-size:5.5rem;color:var(--whiteGrey);font-weight:700;text-align:center;letter-spacing:-3px;margin-top:50px}.wrapper__offres-tarifs.svelte-tlvhk1.svelte-tlvhk1{display:flex;justify-content:center;align-items:center;flex-wrap:wrap;gap:20px;z-index:2;width:70%;height:auto;margin-top:50px}.wrapper__images.svelte-tlvhk1.svelte-tlvhk1{display:flex;justify-content:center;align-items:center;flex-wrap:wrap;gap:30px;z-index:2;width:70%;height:100%;margin:50px auto}.wrapper__hero.svelte-tlvhk1.svelte-tlvhk1{display:flex;align-items:center;justify-content:center;flex-direction:column;width:100%;height:auto;padding:10px;margin-top:0px;gap:10px;border-radius:8px;color:var(--primary)}.wrapper__hero.svelte-tlvhk1 h2.svelte-tlvhk1{font-family:var(--Red);font-size:1.5rem;letter-spacing:0px;font-weight:900;color:var(--whiteGrey);margin-top:10px;margin-bottom:30px}.wrapper__hero.svelte-tlvhk1 p.svelte-tlvhk1{font-family:var(--Red);font-size:1rem;font-weight:400;line-height:30px;color:var(--whiteGrey);width:70%;text-align:justify}.wrapper__component.svelte-tlvhk1.svelte-tlvhk1{display:flex;align-items:center;justify-content:center;flex-direction:column;width:100%;height:auto;padding:20px;margin-top:50px;border-radius:8px;color:var(--primary)}.wrapper__component-headless.svelte-tlvhk1.svelte-tlvhk1{display:flex;align-items:center;justify-content:center;flex-direction:column;width:70%;height:auto;padding:20px;margin-top:50px;border-radius:8px;color:var(--primary)}.wrapper__component-headless.svelte-tlvhk1 h2.svelte-tlvhk1{font-family:var(--Red);font-size:3rem;letter-spacing:-1px;font-weight:900;color:var(--whiteGrey);margin-top:10px;text-align:center;width:70%}.wrapper__component-headless.svelte-tlvhk1 p.svelte-tlvhk1{font-family:var(--Red);font-size:1rem;font-weight:400;padding:10px;line-height:30px;color:var(--whiteGrey);width:70%;text-align:left}.wrapper__component.svelte-tlvhk1 h2.svelte-tlvhk1{font-family:var(--Red);font-size:3rem;letter-spacing:-1px;font-weight:900;color:var(--whiteGrey);margin-top:10px;text-align:center;width:70%}.wrapper__component.svelte-tlvhk1 p.svelte-tlvhk1{font-family:var(--Red);font-size:1rem;font-weight:400;padding:10px;line-height:30px;color:var(--whiteGrey);width:70%;text-align:left}.wrapper__faqLink.svelte-tlvhk1.svelte-tlvhk1{margin-top:50px}@media screen and (max-width: 867px){main.svelte-tlvhk1.svelte-tlvhk1{padding:10px}.wrapper__hero.svelte-tlvhk1.svelte-tlvhk1{margin-top:0px}.wrapper__hero.svelte-tlvhk1 p.svelte-tlvhk1{text-align:left;width:100%}.wrapper__hero.svelte-tlvhk1 h2.svelte-tlvhk1{text-align:left;padding:5px;width:100%}.title.svelte-tlvhk1.svelte-tlvhk1{font-size:3rem}.wrapper__component.svelte-tlvhk1.svelte-tlvhk1{width:100%;padding:0px}.wrapper__component.svelte-tlvhk1 p.svelte-tlvhk1{text-align:left;width:100%}.wrapper__component.svelte-tlvhk1 h2.svelte-tlvhk1{font-size:2rem;text-align:left;padding:5px;width:100%}.wrapper__offres-tarifs.svelte-tlvhk1.svelte-tlvhk1{width:100%;padding:0px}.wrapper__component-headless.svelte-tlvhk1.svelte-tlvhk1{display:flex;align-items:center;justify-content:center;flex-direction:column;width:100%;height:auto;padding:2px;margin-top:50px;border-radius:8px;color:var(--primary)}.wrapper__component-headless.svelte-tlvhk1 h2.svelte-tlvhk1{width:100%;text-align:left}.wrapper__component-headless.svelte-tlvhk1 p.svelte-tlvhk1{width:100%;text-align:left}}",
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script>\\n\\timport Header from '../../sections/Header.svelte';\\n\\timport Mouse from '../../Components/Mouse.svelte';\\n\\timport FaqLink from '../../Components/FaqLink.svelte';\\n\\timport CardTarifs from '../../Components/CardTarifs.svelte';\\n\\timport Images from '../../Components/ImagesBlocks.svelte';\\n\\timport Bird from '../../Assets/bird.jpeg';\\n\\timport Woman from '../../Assets/gralyphoHeroImg.jpeg';\\n\\timport Smartphone from '../../Assets/compteur3.jpeg';\\n\\timport Form from '../../Components/Form.svelte';\\n\\timport Link from '../../Components/LinkSiteApplication.svelte';\\n\\n\\tlet landing = [\\n\\t\\t{\\n\\t\\t\\tname: 'Landing Page Custom',\\n\\t\\t\\th2: 'Une page \\\\n Essentielle et percutante \\\\n Efficacité',\\n\\t\\t\\th3: 'Idéal pour : Indépendant, créateur, café et restaurants, petite boutique',\\n\\t\\t\\th4: ['Délai : 1 jour', 'gestion de contenu'],\\n\\t\\t\\tli: [' Un site web professionnel basé sur un template optimisé', ' Personnalisation du design (logo, couleurs, images, textes)', ' 1 page ', ' Intégration d’un formulaire de contact', ' Site optimisé pour mobile & SEO de base', ' Mise en ligne rapide', ' Options : Blog, SEO avancé, Référencement local, Maintenance, pages supplémentaires ...', ' Avantage client : Une page pour centraliser toutes les infos.'],\\n\\t\\t\\ttarif: 'Tarif : 799 €'\\n\\t\\t}\\n\\t];\\n\\n\\tlet basic = [\\n\\t\\t{\\n\\t\\t\\tname: 'Best Of !!',\\n\\t\\t\\t h2: 'Vitrine professionnelle \\\\n Optimisé SEO \\\\n Léger et rapide',\\n\\t\\t\\th3: 'Idéal pour : Indépendants, TPE, PME, Artisans, Associations',\\n\\t\\t\\th4: ['Délai : 3 jours max', ' Vitrine Pro', '5 pages'],\\n\\t\\t\\tli: [' Un site web professionnel basé sur un template optimisé', ' Personnalisation du design (logo, couleurs, images, textes)', ' 3 à 5 pages : Accueil, Services, À propos, Contact, Blog en option', ' Intégration d’un formulaire de contact', ' Site optimisé pour mobile & SEO de base', ' Mise en ligne rapide', ' Options : Blog, SEO avancé, Référencement local, Maintenance, pages supplémentaires ...', ' Avantage client : Un site rapide, efficace et très abordable.'],\\n\\t\\t\\ttarif: 'Tarif : 1399 €'\\n\\t\\t}\\n\\t];\\n\\n\\tlet pro = [\\n\\t\\t{\\n\\t\\t\\tname: 'Site e-Commerce & Médias',\\n\\t\\t\\th2: 'Plateforme e-commerce \\\\n Optimisé SEO \\\\n Gestion de contenu facile',\\n\\t\\t\\th3: 'Idéal pour : Institution, Entreprise, commerce, Média',\\n\\t\\t\\th4: ['Délai : 7 jours max', ' Gesion de contenu', ' 5-10 pages'],\\n\\t\\t\\tli: [\\n\\t\\t\\t\\t' Un site web professionnel basé sur un template optimisé',\\n\\t\\t\\t\\t' Personnalisation du design (logo, couleurs, images, textes)',\\n\\t\\t\\t\\t' 5 à 10 pages : Accueil, Services, À propos, Contact, Blog en option',\\n\\t\\t\\t\\t' Intégration d’un formulaire de contact',\\n\\t\\t\\t\\t' Site optimisé pour mobile & SEO de base',\\n\\t\\t\\t\\t' Mise en ligne rapide',\\n\\t\\t\\t\\t' Tarif : 2999 €',\\n\\t\\t\\t\\t' Options : Blog, SEO avancé, Référencement local, Maintenance, pages supplémentaires ...',\\n\\t\\t\\t\\t' Avantage client : Un site avec gestion de contenu, idéal pour e-commerce, entreprise, institution.'\\n\\t\\t\\t],\\n\\t\\t\\ttarif: 'Tarif : 3999 €'\\n\\t\\t}\\n\\t];\\n\\n\\tlet custom = [\\n\\t\\t{\\n\\t\\t\\tname: 'Site Custom',\\n\\t\\t \\th2: 'Site sur mesure \\\\n Design unique et original \\\\n 100% créatif',\\n\\t\\t\\th3: 'Idéal pour : Indépendant, créateur, artiste, café, évenementiel marque',\\n\\t\\t\\th4: ['Délai : 7-15 jours max', ' 5-10 pages'],\\n\\t\\t\\tli: [' Un site web sur mesure', ' Haute personnalisation du design, 100% créatif. UX/UI sur mesure (logo, couleurs, images, textes ...)', ' 5 à 10 pages : Accueil, Services, À propos, Contact, Blog en option', ' Intégration d’un formulaire de contact', ' Site optimisé pour mobile & SEO de base', ' Mise en ligne rapide', ' Options : Blog, SEO avancé, Référencement local, Maintenance, pages supplémentaires ...', ' Avantage client : Un site unique, une identité forte.'],\\n\\t\\t\\ttarif: 'Tarif : 5999 €'\\n\\t\\t}\\n\\t];\\n\\n\\tlet headless = [\\n\\t\\t{\\n\\t\\t\\tname: 'Graal',\\n\\t\\t\\th2: 'CMS Headless \\\\n 100% Autonomie  \\\\n 100% Architecture sur mesure',\\n\\t\\t\\th3: 'Idéal pour : Indépendant, créateur, artiste, marque, identité forte',\\n\\t\\t\\th4: ['Délai : 15 jours', ' Gesion de contenu', ' 5-10 pages', ' Tarif: 5999 €'],\\n\\t\\t\\tli: [\\n\\t\\t\\t\\t' Un site web professionnel basé sur un template optimisé ou créé',\\n\\t\\t\\t\\t' Personnalisation du design (logo, couleurs, images, textes)',\\n\\t\\t\\t\\t' 5 à 10 pages : Accueil, Services, À propos, Contact, Blog en option',\\n\\t\\t\\t\\t' Intégration d’un formulaire de contact',\\n\\t\\t\\t\\t' Site optimisé pour mobile & SEO de base',\\n\\t\\t\\t\\t' Mise en ligne rapide',\\n\\t\\t\\t\\t' Options : Blog, SEO avancé, Référencement local, Maintenance, pages supplémentaires ...',\\n\\t\\t\\t\\t' Avantage client : Un site internet sur mesure, \\\\n avec une gestion de contenu entièrement personnalisée .'\\n\\t\\t\\t],\\n\\t\\t\\ttarif: 'Tarif : 7999 €'\\n\\t\\t}\\n\\t];\\n\\n\\tlet images = [Bird, Woman, Smartphone];\\n<\/script>\\n\\n<Header />\\n<Mouse />\\n\\n<main>\\n\\t<div class=\\"wrapper__images\\">\\n\\t\\t<Images img={images} alt=\\"image\\" />\\n\\t</div>\\n\\t<div class=\\"wrapper__hero\\">\\n\\t\\t<h1 class=\\"title\\">Création de site internet</h1>\\n\\t\\t<h2>Site web clé en main ou sur mesure</h2>\\n\\t\\t<p>\\n\\t\\t\\tUn site internet, c’est bien plus qu’une vitrine : c’est votre image, votre outil, parfois même votre principal canal de communication. Que vous ayez besoin d’un site web simple et rapide, d’un site évolutif avec gestion de contenu ou d’un site internet développé entièrement sur mesure, nous avons la solution adaptée à votre activité. <br /><br /> Nous proposons deux grandes familles de sites :\\n\\t\\t\\t<br />\\n\\t\\t\\t<strong>Sans CMS</strong> : vous n’avez pas besoin de modifier régulièrement le contenu ? Cette solution rapide et abordable est parfaite pour vous.\\n\\t\\t\\t<br />\\n\\n\\t\\t\\t<strong>Avec CMS</strong> : vous souhaitez mettre à jour textes, images ou tarifs vous-même ? Optez pour un site avec interface d’administration.\\n\\n\\t\\t\\t<br />\\n\\t\\t\\t<strong>Avec CMS Headless</strong> pour les projets plus ambitieux, nous proposons aussi une solution digitale ultra-flexible pensée pour faire évoluer votre site (et votre contenu) facilement, même vers une app mobile.\\n\\t\\t</p>\\n\\t</div>\\n\\t<div class=\\"wrapper__component\\" id=\\"sans-cms\\">\\n\\t\\t<h2>Votre site web sans interface de gestion</h2>\\n\\t\\t<p>Ces sites ne disposent pas d’un espace d’administration : ils sont donc parfaits si vous n’avez pas besoin de modifier régulièrement vos contenus. Ils sont légers, rapides à mettre en ligne, et idéaux pour une présentation claire et durable. Toute mise à jour peut se faire via notre service de maintenance.</p>\\n\\t\\t<div class=\\"wrapper__offres-tarifs\\">\\n\\t\\t\\t{#each landing as item}\\n\\t\\t\\t\\t<CardTarifs name={item.name} h2={item.h2} h3={item.h3} h4={item.h4} li={item.li} tarif={item.tarif} />\\n\\t\\t\\t{/each}\\n\\n\\t\\t\\t{#each custom as item}\\n\\t\\t\\t\\t<CardTarifs name={item.name} h2={item.h2} h3={item.h3} h4={item.h4} li={item.li} tarif={item.tarif} />\\n\\t\\t\\t{/each}\\n\\t\\t</div>\\n\\t</div>\\n\\n\\t<div class=\\"wrapper__component\\" id=\\"cms\\">\\n\\t\\t<h2>Votre site web avec interface de gestion (CMS)</h2>\\n\\t\\t<p>\\n\\t\\t\\tVous souhaitez pouvoir modifier vous-même vos contenus : textes, images, tarifs, blog, événements, etc. ? Le site avec CMS est ce qu’il vous faut. Grâce à une interface simple, vous gérez votre site au quotidien. Nous utilisons des plateformes comme <strong>WordPress</strong>, <strong>Webflow</strong> ou <strong>Wix</strong>, selon votre besoin et votre niveau de confort. Vous êtes formé à l’utilisation, ou nous pouvons assurer la gestion pour vous.\\n\\t\\t</p>\\n\\t\\t<div class=\\"wrapper__offres-tarifs\\">\\n\\t\\t\\t{#each basic as item}\\n\\t\\t\\t\\t<CardTarifs name={item.name} h2={item.h2} h3={item.h3} h4={item.h4} li={item.li} tarif={item.tarif} />\\n\\t\\t\\t{/each}\\n\\t\\t\\t{#each pro as item}\\n\\t\\t\\t\\t<CardTarifs name={item.name} h2={item.h2} h3={item.h3} h4={item.h4} li={item.li} tarif={item.tarif} />\\n\\t\\t\\t{/each}\\n\\t\\t</div>\\n\\t</div>\\n\\n\\t<div class=\\"wrapper__component-headless\\">\\n\\t\\t<h2>Votre site web avec CMS Headless</h2>\\n\\t\\t<p>Un site avec CMS Headless, c’est une solution ultra-flexible pour les projets ambitieux. Vous avez un site 100% personnalisé, et un espace d’administration conçu sur mesure. Il est particulièrement adapté si vous prévoyez de décliner votre contenu sur plusieurs supports (site, application mobile, borne interactive...). Le contenu est centralisé, réutilisable, et la maintenance est simplifiée.</p>\\n\\t\\t<div class=\\"wrapper__offres-tarifs\\">\\n\\t\\t\\t{#each headless as item}\\n\\t\\t\\t\\t<CardTarifs name={item.name} h2={item.h2} h3={item.h3} h4={item.h4} li={item.li} tarif={item.tarif} />\\n\\t\\t\\t{/each}\\n\\t\\t</div>\\n\\t</div>\\n\\n\\t<div class=\\"wrapper__faqLink\\">\\n\\t\\t<FaqLink />\\n\\t\\t<Link />\\n\\t</div>\\n\\t<Form />\\n</main>\\n\\n<style>\\n\\tmain {\\n\\t\\tdisplay: flex;\\n\\t\\talign-items: center;\\n\\t\\tjustify-content: center;\\n\\t\\tflex-direction: column;\\n\\t\\tpadding: 15px;\\n\\t\\theight: auto;\\n\\t\\tbackground-color: var(--primary);\\n\\t}\\n\\n\\t.title {\\n\\t\\tfont-family: var(--Geologica);\\n\\t\\tfont-size: 5.5rem;\\n\\t\\tcolor: var(--whiteGrey);\\n\\t\\tfont-weight: 700;\\n\\t\\ttext-align: center;\\n\\t\\tletter-spacing: -3px;\\n\\t\\tmargin-top: 50px;\\n\\t}\\n\\n\\t.wrapper__offres-tarifs {\\n\\t\\tdisplay: flex;\\n\\t\\tjustify-content: center;\\n\\t\\talign-items: center;\\n\\t\\tflex-wrap: wrap;\\n\\t\\tgap: 20px;\\n\\t\\tz-index: 2;\\n\\t\\twidth: 70%;\\n\\t\\theight: auto;\\n\\t\\tmargin-top: 50px;\\n\\t}\\n\\t.wrapper__images {\\n\\t\\tdisplay: flex;\\n\\t\\tjustify-content: center;\\n\\t\\talign-items: center;\\n\\t\\tflex-wrap: wrap;\\n\\t\\tgap: 30px;\\n\\t\\tz-index: 2;\\n\\t\\twidth: 70%;\\n\\t\\theight: 100%;\\n\\t\\tmargin: 50px auto;\\n\\t}\\n\\t.wrapper__hero {\\n\\t\\tdisplay: flex;\\n\\t\\talign-items: center;\\n\\t\\tjustify-content: center;\\n\\t\\tflex-direction: column;\\n\\t\\twidth: 100%;\\n\\t\\theight: auto;\\n\\t\\tpadding: 10px;\\n\\t\\tmargin-top: 0px;\\n\\t\\tgap: 10px;\\n\\t\\tborder-radius: 8px;\\n\\t\\tcolor: var(--primary);\\n\\t}\\n\\n\\t.wrapper__hero h2 {\\n\\t\\tfont-family: var(--Red);\\n\\t\\tfont-size: 1.5rem;\\n\\t\\tletter-spacing: 0px;\\n\\t\\tfont-weight: 900;\\n\\t\\tcolor: var(--whiteGrey);\\n\\t\\tmargin-top: 10px;\\n\\t\\tmargin-bottom: 30px;\\n\\t}\\n\\n\\t.wrapper__hero p {\\n\\t\\tfont-family: var(--Red);\\n\\t\\tfont-size: 1rem;\\n\\t\\tfont-weight: 400;\\n\\t\\tline-height: 30px;\\n\\t\\tcolor: var(--whiteGrey);\\n\\t\\twidth: 70%;\\n\\t\\ttext-align: justify;\\n\\t}\\n\\n\\t.wrapper__component {\\n\\t\\tdisplay: flex;\\n\\t\\talign-items: center;\\n\\t\\tjustify-content: center;\\n\\t\\tflex-direction: column;\\n\\t\\twidth: 100%;\\n\\t\\theight: auto;\\n\\t\\tpadding: 20px;\\n\\t\\tmargin-top: 50px;\\n\\t\\tborder-radius: 8px;\\n\\t\\tcolor: var(--primary);\\n\\t}\\n\\t.wrapper__component-headless {\\n\\t\\tdisplay: flex;\\n\\t\\talign-items: center;\\n\\t\\tjustify-content: center;\\n\\t\\tflex-direction: column;\\n\\t\\twidth: 70%;\\n\\t\\theight: auto;\\n\\t\\tpadding: 20px;\\n\\t\\tmargin-top: 50px;\\n\\t\\tborder-radius: 8px;\\n\\t\\tcolor: var(--primary);\\n\\t}\\n\\t.wrapper__component-headless h2 {\\n\\t\\tfont-family: var(--Red);\\n\\t\\tfont-size: 3rem;\\n\\t\\tletter-spacing: -1px;\\n\\t\\tfont-weight: 900;\\n\\t\\tcolor: var(--whiteGrey);\\n\\t\\tmargin-top: 10px;\\n\\t\\ttext-align: center;\\n\\t\\twidth: 70%;\\n\\t}\\n\\t.wrapper__component-headless p {\\n\\t\\tfont-family: var(--Red);\\n\\t\\tfont-size: 1rem;\\n\\t\\tfont-weight: 400;\\n\\t\\tpadding: 10px;\\n\\t\\tline-height: 30px;\\n\\t\\tcolor: var(--whiteGrey);\\n\\t\\twidth: 70%;\\n\\t\\ttext-align: left;\\n\\t}\\n\\t.wrapper__component h2 {\\n\\t\\tfont-family: var(--Red);\\n\\t\\tfont-size: 3rem;\\n\\t\\tletter-spacing: -1px;\\n\\t\\tfont-weight: 900;\\n\\t\\tcolor: var(--whiteGrey);\\n\\t\\tmargin-top: 10px;\\n\\t\\ttext-align: center;\\n\\t\\twidth: 70%;\\n\\t}\\n\\t.wrapper__component p {\\n\\t\\tfont-family: var(--Red);\\n\\t\\tfont-size: 1rem;\\n\\t\\tfont-weight: 400;\\n\\t\\tpadding: 10px;\\n\\t\\tline-height: 30px;\\n\\t\\tcolor: var(--whiteGrey);\\n\\t\\twidth: 70%;\\n\\t\\ttext-align: left;\\n\\t}\\n\\t.wrapper__faqLink {\\n\\t\\tmargin-top: 50px;\\n\\t}\\n\\n\\t@media screen and (max-width: 867px) {\\n\\t\\tmain {\\n\\t\\t\\tpadding: 10px;\\n\\t\\t}\\n\\t\\t.wrapper__hero {\\n\\t\\t\\tmargin-top: 0px;\\n\\t\\t}\\n\\t\\t.wrapper__hero p {\\n\\t\\t\\ttext-align: left;\\n\\t\\t\\twidth: 100%;\\n\\t\\t}\\n\\n\\t\\t.wrapper__hero h2 {\\n\\t\\t\\ttext-align: left;\\n\\t\\t\\tpadding: 5px;\\n\\t\\t\\twidth: 100%;\\n\\t\\t}\\n\\n\\t\\t.title {\\n\\t\\t\\tfont-size: 3rem;\\n\\t\\t}\\n\\t\\t.wrapper__component {\\n\\t\\t\\twidth: 100%;\\n\\t\\t\\tpadding: 0px;\\n\\t\\t}\\n\\t\\t.wrapper__component p {\\n\\t\\t\\ttext-align: left;\\n\\t\\t\\twidth: 100%;\\n\\t\\t}\\n\\t\\t.wrapper__component h2 {\\n\\t\\t\\tfont-size: 2rem;\\n\\t\\t\\ttext-align: left;\\n\\t\\t\\tpadding: 5px;\\n\\t\\t\\twidth: 100%;\\n\\t\\t}\\n\\t\\t.wrapper__offres-tarifs {\\n\\t\\t\\twidth: 100%;\\n\\t\\t\\tpadding: 0px;\\n\\t\\t}\\n\\t\\t.wrapper__component-headless {\\n\\t\\tdisplay: flex;\\n\\t\\talign-items: center;\\n\\t\\tjustify-content: center;\\n\\t\\tflex-direction: column;\\n\\t\\twidth: 100%;\\n\\t\\theight: auto;\\n\\t\\tpadding: 2px;\\n\\t\\tmargin-top: 50px;\\n\\t\\tborder-radius: 8px;\\n\\t\\tcolor: var(--primary);\\n\\t}\\n\\t.wrapper__component-headless h2 {\\n\\t\\twidth: 100%;\\n\\t\\ttext-align: left;\\n\\t}\\n\\t.wrapper__component-headless p {\\n\\t\\twidth: 100%;\\n\\t\\ttext-align: left;\\n\\t}\\n\\t}\\n\\n</style>\\n"],"names":[],"mappings":"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"}`
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let landing = [
    {
      name: "Landing Page Custom",
      h2: "Une page \n Essentielle et percutante \n Efficacité",
      h3: "Idéal pour : Indépendant, créateur, café et restaurants, petite boutique",
      h4: ["Délai : 1 jour", "gestion de contenu"],
      li: [
        " Un site web professionnel basé sur un template optimisé",
        " Personnalisation du design (logo, couleurs, images, textes)",
        " 1 page ",
        " Intégration d’un formulaire de contact",
        " Site optimisé pour mobile & SEO de base",
        " Mise en ligne rapide",
        " Options : Blog, SEO avancé, Référencement local, Maintenance, pages supplémentaires ...",
        " Avantage client : Une page pour centraliser toutes les infos."
      ],
      tarif: "Tarif : 799 €"
    }
  ];
  let basic = [
    {
      name: "Best Of !!",
      h2: "Vitrine professionnelle \n Optimisé SEO \n Léger et rapide",
      h3: "Idéal pour : Indépendants, TPE, PME, Artisans, Associations",
      h4: ["Délai : 3 jours max", " Vitrine Pro", "5 pages"],
      li: [
        " Un site web professionnel basé sur un template optimisé",
        " Personnalisation du design (logo, couleurs, images, textes)",
        " 3 à 5 pages : Accueil, Services, À propos, Contact, Blog en option",
        " Intégration d’un formulaire de contact",
        " Site optimisé pour mobile & SEO de base",
        " Mise en ligne rapide",
        " Options : Blog, SEO avancé, Référencement local, Maintenance, pages supplémentaires ...",
        " Avantage client : Un site rapide, efficace et très abordable."
      ],
      tarif: "Tarif : 1399 €"
    }
  ];
  let pro = [
    {
      name: "Site e-Commerce & Médias",
      h2: "Plateforme e-commerce \n Optimisé SEO \n Gestion de contenu facile",
      h3: "Idéal pour : Institution, Entreprise, commerce, Média",
      h4: ["Délai : 7 jours max", " Gesion de contenu", " 5-10 pages"],
      li: [
        " Un site web professionnel basé sur un template optimisé",
        " Personnalisation du design (logo, couleurs, images, textes)",
        " 5 à 10 pages : Accueil, Services, À propos, Contact, Blog en option",
        " Intégration d’un formulaire de contact",
        " Site optimisé pour mobile & SEO de base",
        " Mise en ligne rapide",
        " Tarif : 2999 €",
        " Options : Blog, SEO avancé, Référencement local, Maintenance, pages supplémentaires ...",
        " Avantage client : Un site avec gestion de contenu, idéal pour e-commerce, entreprise, institution."
      ],
      tarif: "Tarif : 3999 €"
    }
  ];
  let custom = [
    {
      name: "Site Custom",
      h2: "Site sur mesure \n Design unique et original \n 100% créatif",
      h3: "Idéal pour : Indépendant, créateur, artiste, café, évenementiel marque",
      h4: ["Délai : 7-15 jours max", " 5-10 pages"],
      li: [
        " Un site web sur mesure",
        " Haute personnalisation du design, 100% créatif. UX/UI sur mesure (logo, couleurs, images, textes ...)",
        " 5 à 10 pages : Accueil, Services, À propos, Contact, Blog en option",
        " Intégration d’un formulaire de contact",
        " Site optimisé pour mobile & SEO de base",
        " Mise en ligne rapide",
        " Options : Blog, SEO avancé, Référencement local, Maintenance, pages supplémentaires ...",
        " Avantage client : Un site unique, une identité forte."
      ],
      tarif: "Tarif : 5999 €"
    }
  ];
  let headless = [
    {
      name: "Graal",
      h2: "CMS Headless \n 100% Autonomie  \n 100% Architecture sur mesure",
      h3: "Idéal pour : Indépendant, créateur, artiste, marque, identité forte",
      h4: ["Délai : 15 jours", " Gesion de contenu", " 5-10 pages", " Tarif: 5999 €"],
      li: [
        " Un site web professionnel basé sur un template optimisé ou créé",
        " Personnalisation du design (logo, couleurs, images, textes)",
        " 5 à 10 pages : Accueil, Services, À propos, Contact, Blog en option",
        " Intégration d’un formulaire de contact",
        " Site optimisé pour mobile & SEO de base",
        " Mise en ligne rapide",
        " Options : Blog, SEO avancé, Référencement local, Maintenance, pages supplémentaires ...",
        " Avantage client : Un site internet sur mesure, \n avec une gestion de contenu entièrement personnalisée ."
      ],
      tarif: "Tarif : 7999 €"
    }
  ];
  let images = [Bird, Woman, Smartphone];
  $$result.css.add(css);
  return `${validate_component(Header, "Header").$$render($$result, {}, {}, {})} ${validate_component(Mouse, "Mouse").$$render($$result, {}, {}, {})} <main class="svelte-tlvhk1"><div class="wrapper__images svelte-tlvhk1">${validate_component(ImagesBlocks, "Images").$$render($$result, { img: images, alt: "image" }, {}, {})}</div> <div class="wrapper__hero svelte-tlvhk1" data-svelte-h="svelte-xy4mcx"><h1 class="title svelte-tlvhk1">Création de site internet</h1> <h2 class="svelte-tlvhk1">Site web clé en main ou sur mesure</h2> <p class="svelte-tlvhk1">Un site internet, c’est bien plus qu’une vitrine : c’est votre image, votre outil, parfois même votre principal canal de communication. Que vous ayez besoin d’un site web simple et rapide, d’un site évolutif avec gestion de contenu ou d’un site internet développé entièrement sur mesure, nous avons la solution adaptée à votre activité. <br><br> Nous proposons deux grandes familles de sites :
			<br> <strong>Sans CMS</strong> : vous n’avez pas besoin de modifier régulièrement le contenu ? Cette solution rapide et abordable est parfaite pour vous.
			<br> <strong>Avec CMS</strong> : vous souhaitez mettre à jour textes, images ou tarifs vous-même ? Optez pour un site avec interface d’administration.

			<br> <strong>Avec CMS Headless</strong> pour les projets plus ambitieux, nous proposons aussi une solution digitale ultra-flexible pensée pour faire évoluer votre site (et votre contenu) facilement, même vers une app mobile.</p></div> <div class="wrapper__component svelte-tlvhk1" id="sans-cms"><h2 class="svelte-tlvhk1" data-svelte-h="svelte-ul4ven">Votre site web sans interface de gestion</h2> <p class="svelte-tlvhk1" data-svelte-h="svelte-cbu7ea">Ces sites ne disposent pas d’un espace d’administration : ils sont donc parfaits si vous n’avez pas besoin de modifier régulièrement vos contenus. Ils sont légers, rapides à mettre en ligne, et idéaux pour une présentation claire et durable. Toute mise à jour peut se faire via notre service de maintenance.</p> <div class="wrapper__offres-tarifs svelte-tlvhk1">${each(landing, (item) => {
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
  })} ${each(custom, (item) => {
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
  })}</div></div> <div class="wrapper__component svelte-tlvhk1" id="cms"><h2 class="svelte-tlvhk1" data-svelte-h="svelte-1foyzuv">Votre site web avec interface de gestion (CMS)</h2> <p class="svelte-tlvhk1" data-svelte-h="svelte-10goc11">Vous souhaitez pouvoir modifier vous-même vos contenus : textes, images, tarifs, blog, événements, etc. ? Le site avec CMS est ce qu’il vous faut. Grâce à une interface simple, vous gérez votre site au quotidien. Nous utilisons des plateformes comme <strong>WordPress</strong>, <strong>Webflow</strong> ou <strong>Wix</strong>, selon votre besoin et votre niveau de confort. Vous êtes formé à l’utilisation, ou nous pouvons assurer la gestion pour vous.</p> <div class="wrapper__offres-tarifs svelte-tlvhk1">${each(basic, (item) => {
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
  })} ${each(pro, (item) => {
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
  })}</div></div> <div class="wrapper__component-headless svelte-tlvhk1"><h2 class="svelte-tlvhk1" data-svelte-h="svelte-1k2rtxi">Votre site web avec CMS Headless</h2> <p class="svelte-tlvhk1" data-svelte-h="svelte-14qm454">Un site avec CMS Headless, c’est une solution ultra-flexible pour les projets ambitieux. Vous avez un site 100% personnalisé, et un espace d’administration conçu sur mesure. Il est particulièrement adapté si vous prévoyez de décliner votre contenu sur plusieurs supports (site, application mobile, borne interactive...). Le contenu est centralisé, réutilisable, et la maintenance est simplifiée.</p> <div class="wrapper__offres-tarifs svelte-tlvhk1">${each(headless, (item) => {
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
  })}</div></div> <div class="wrapper__faqLink svelte-tlvhk1">${validate_component(FaqLink, "FaqLink").$$render($$result, {}, {}, {})} ${validate_component(LinkSiteApplication, "Link").$$render($$result, {}, {}, {})}</div> ${validate_component(Form, "Form").$$render($$result, {}, {}, {})} </main>`;
});
export {
  Page as default
};
