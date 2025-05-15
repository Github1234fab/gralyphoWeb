<script>
	import { fade, slide } from 'svelte/transition';
	// import bg from "../../Assets/png-gralypho/41.png";
	import Header from '../../sections/Header.svelte';
	// import vitrine from "../../Assets/png-gralypho/vitrine.svg";
	import portfolio from '../../Assets/png-gralypho/address-card-regular.svg';
	import commerce from '../../Assets/png-gralypho/shopping.svg';
	import blog from '../../Assets/png-gralypho/blog-solid.svg';
	import corporate from '../../Assets/png-gralypho/user-tie-solid.svg';
	import institution from '../../Assets/png-gralypho/building-columns-solid.svg';
	import imgHero from '../../Assets/png-gralypho/webExplosion.png';
	import CardsSites from '../../Components/CardsSites.svelte';
	// import FSection from "../../sections/FSection.svelte";
	import Profits from '../../sections/SectionProfitsSite.svelte';
	// import Service from "../../Components/Services.svelte";
	import imgDesign from '../../Assets/png-gralypho/30.png';
	import imgSeo from '../../Assets/png-gralypho/05.png';
	import imgWeb from '../../Assets/png-gralypho/36.png';
	import imgFormation from '../../Assets/png-gralypho/Web.png';
	import Banner from '../../Components/Banner.svelte';
	import BeneficeSection from '../../sections/BeneficeSection.svelte';
	import CardsSectionB from '../../Components/CardsSectionB.svelte';
	import vitrineA from '../../Assets/png-gralypho/vitrineB.png';
	import ecommerce from '../../Assets/png-gralypho/ecommerceA.png';
	import Blogger from '../../Assets/png-gralypho/blogA.png';
	import Portfolio from '../../Assets/png-gralypho/portfolio.png';
	import Corporated from '../../Assets/png-gralypho/corporate.png';
	import institutionnel from '../../Assets/png-gralypho/institutionnel.png';
	import Form from '../../Components/Form.svelte';
	import Mouse from '../../Components/Mouse.svelte';
	// import Csection from "../../sections/Csection.svelte";
	import seo from '../../Assets/png-gralypho/seo3.png';
	import Button from '../../Components/ButtonCTA.svelte';
	import FaqLink from '../../Components/FaqLink.svelte';
	import Links from '../../Components/LinkSiteApplication.svelte';
	import SEO from '../../Assets/agence SEO ouest lyonnais.jpeg';
	import Bird from '../../Assets/bird.jpeg';
</script>

<svelte:head>
	<title>Référencement SEO & SEA à Lyon - Ouest | Expertise SEO | Gralypho</title>
	<meta name="description" content="Améliorez votre visibilité sur Google grâce à nos stratégies SEO : Générer plus de leads, convertissez plus de prospects, obtenez plus de clients." />

	<!-- Open Graph -->
	<meta property="og:title" content="Référencement SEO & SEA à Lyon - Ouest | Gralypho" />
	<meta property="og:description" content="Améliorez votre visibilité sur Google grâce à nos stratégies SEO : Générer plus de leads, convertissez plus de prospects, obtenez plus de clients.." />
	<meta property="og:url" content="https://gralypho.com/referencement-seo-sea" />
	<meta property="og:type" content="website" />
	<meta property="og:image" content="https://cdn5.balboacapital.com/uploads/2022/07/12155339/what-is-seo-blog.jpg" />
	<!-- À remplacer par une image pertinente -->

	<!-- Twitter Card -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="Référencement SEO & SEA à Lyon | Gralypho" />
	<meta name="twitter:description" content="Boostez votre trafic et vos conversions avec le SEO et SEA local à Lyon. Audit, stratégie, contenu, campagnes Google Ads." />
	<meta name="twitter:image" content="https://cdn5.balboacapital.com/uploads/2022/07/12155339/what-is-seo-blog.jpg" />

	<!-- SEO technique -->
	<link rel="canonical" href="https://gralypho.com/referencement-seo-sea" />
	<meta name="robots" content="index, follow" />
</svelte:head>

<Mouse />
<Header />

<!-- ***************HERO*************** -->

<section class="sites-section" in:fade={{ duration: 1000 }}>
	<div class="hero">
		<img src={SEO} alt="Optimisation SEO par Gralypho, agence web à Lyon" class="imgHero" />

		<h1>Boostez votre visibilité en ligne avec Gralypho <br />Agence SEO à l'ouest de Lyon :</h1>

		<h2>Pourquoi investir dans le SEO pour votre site web ?</h2>
		<img class="img" src="https://www.wikilink.io/wk_thm/uploads/2021/11/referencement-naturel-investissement.jpg" alt="une fusée qui décolle pour le SEO" />
		<p>
			Le SEO (Search Engine Optimization), ou référencement naturel, regroupe un ensemble de techniques permettant d'améliorer de manière notoire la visibilité d'un site internet sur les moteurs de recherche et son position dans la SERP (positionnement dans les résultats de recherche).
			<br />Un SEO conçu efficacement créer un trafic organique vers votre site et le fait remonter dans le classement de la SERP. Le but est d'optimiser différents paramètres afin d'augmenter les clics et d'obtenir des conversions
		</p>

		<ul>
			<li>Augmentez votre visibilité et obtenez plus de trafic</li>
			<li>Générez plus de leads qualifiés</li>
			<li>Obtenez un plus grand taux de conversion</li>
			<li>Stabilisez votre visibilité</li>
		</ul>

		<h2>Notre méthode SEO chez Gralypho</h2>
		<img class="img" src="https://i0.wp.com/www.micro-center.fr/wp-content/uploads/2023/03/comment-optimiser-son-seo-1.png?fit=1024%2C675&ssl=1" alt="graphique d'organisation SEO" />
		<p>En tant qu'<strong>agence SEO basée dans l'ouest Lyonnais</strong>, Gralypho suit une approche stratégique en quatre étapes :</p>

		<h3>1. Audit SEO complet</h3>
		<ul>
			<li>Analyse technique de votre site web</li>
			<li>Étude des mots-clés stratégiques</li>
			<li>Évaluation de l'expérience utilisateur (UX)</li>
			<li>Audit de votre popularité et de votre netlinking</li>
		</ul>

		<h3>2. Optimisation technique</h3>
		<ul>
			<li>Amélioration des performances (vitesse, sécurité, responsive design)</li>
			<li>Optimisation des balises HTML (title, meta description, Hn)</li>
			<li>Optimisation du maillage interne et de la structure des URLs</li>
		</ul>

		<h3>3. Création et enrichissement du contenu</h3>
		<ul>
			<li>Rédaction de contenus optimisés SEO</li>
			<li>Optimisation sémantique (LSI, mots-clés secondaires)</li>
			<li>Création de landing pages ciblées</li>
		</ul>

		<h3>4. Développement de la popularité</h3>
		<ul>
			<li>Acquisition de backlinks de qualité</li>
			<li>Amélioration de la notoriété locale (SEO local)</li>
			<li>Stratégies de netlinking éthique</li>
		</ul>

		<h2>Pourquoi choisir Gralypho comme votre agence SEO à Lyon Ouest ?</h2>
		<img class="img" src={Bird} alt="agence Web Gralypho" />

		<div class="wrapper-ul">
			<ul>
				<li>Approche personnalisée pour chaque projet</li>
				<li>Suivi mensuel détaillé et rapport de positionnement</li>
				<li>Expertise en SEO local et national</li>
				<li>Engagement sur la transparence et les résultats</li>
			</ul>
		</div>

		<h2>Quel est le budget pour un audit SEO ?</h2>
		<p>Le tarif d'un audit SEO dépend de la complexité de votre site internet, de votre marché et de vos ambitions de positionnement. Chez <strong>Gralypho</strong>, nous adaptons nos prestations à votre projet, avec des devis clairs et sans surprise.</p>

		<a class="devis" href="/#section-form">Demander un audit SEO gratuit</a>

		<div class="faq">
			<h2>FAQ sur le SEO</h2>
			<h4>Qu'est-ce qu'un audit SEO ?</h4>
			<p>Un audit SEO est une analyse complète de votre site web pour identifier les facteurs bloquants pour votre référencement naturel. Il sert de base pour construire une stratégie SEO efficace.</p>

			<h4>Combien de temps faut-il pour voir des résultats SEO ?</h4>
			<p>Le SEO est une stratégie de moyen à long terme. Les premiers résultats sont visibles généralement entre 3 à 6 mois selon la concurrence et la qualité des optimisations réalisées.</p>

			<h4>Pourquoi travailler avec une agence SEO locale à Lyon ?</h4>
			<p>Une agence locale connaît parfaitement votre marché et peut développer des stratégies de référencement local précises, en optimisant par exemple votre présence sur Google My Business et les annuaires régionaux.</p>

			<h4>Est-ce que Gralypho propose aussi des stratégies SEA (Google Ads) ?</h4>
			<p>Oui, en complément du SEO, nous proposons également la mise en place de campagnes SEA (référencement payant) pour booster rapidement votre visibilité.</p>
		</div>
		<a class="link-blog" href="/blog">Lire nos article sur le SEO</a>
	</div>
</section>

<div class="wrapper__faqLink">
	<FaqLink />
</div>

<div class="wrapper__link">
	<Links />
</div>

<!-- ***************CONTACT*************** -->

<div class="wrapper-form">
	<Form />
</div>

<style>
	.sites-section {
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: rgb(245, 244, 244);
		height: auto;
		font-size: 16px;
	}
	.hero {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		height: auto;
	}
	.hero h1 {
		text-align: center;
		font-family: var(--Geologica);
		font-weight: 800;
		font-size: 2.5rem;
		color: var(--primary);
		margin-top: 0px;
		letter-spacing: -2px;
		padding: 10px;
		line-height: 53px;
		margin-top: 40px;
	}
	ul {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	.wrapper-ul {
		margin-top: 40px;
	}

	li {
		font-family: var(--Poppins);
		font-size: .9rem;
		color: white;
		font-weight: 500;
		width: 100%;
		text-align: center;
		background: linear-gradient(to top, var(--cta), rgb(165, 161, 215));
		padding: 20px;
		border-radius: 30px;
		margin: 10px;
		list-style-type: none;
	}
	.hero h2 {
		font-family: poppins;
		font-weight: 700;
		font-size: 1.5rem;
		color: var(--primary);
		text-align: center;
		margin-top: 30px;
		width: 95%;
		margin-top: 100px;
	}
	.hero h3 {
		font-family: poppins;
		font-weight: 600;
		font-size: var(--m);
		color: var(--primary);
		border-radius: 30px 6px 60px 34px;
		border: 1px solid var(--primary);
		text-align: center;
		margin-top: 50px;
		margin-bottom: 20px;
		padding: 30px;
	}
	.hero h4 {
		font-family: poppins;
		font-weight: 600;
		font-size: var(--m);
		color: var(--primary);
		text-align: center;
		padding: 20px;
	}

	.hero p {
		font-family: var(--Poppins);
		font-size: var(--m);
		color: var(--primary);
		font-weight: 400;
		text-align: center;
		align-self: center;
		padding: 20px;
		width: 70%;
	}

	.imgHero {
		max-width: 30%;
		min-width: 30%;
		margin-top: 30px;
		border-radius: 20px;
	}
	.img {
		max-width: 30%;
		min-width: 30%;
		margin-top: 30px;
		border-radius: 20px;
	}
	.wrapper-form {
		grid-column: 1/13;
		grid-row: 7;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		/* margin-top: 50px; */
		background-color: var(--bgHero);
	}
	.faq {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		margin-top: 100px;
		background-color: white;
	}
	.link-blog {
		background-color: var(--green);
		color: white;
		font-family: 'Red Hat Display';
		font-size: 1rem;
		font-weight: 700;
		border-radius: 8px;
		text-align: center;
		padding: 20px 20px;
		box-shadow: 0px 20px 20px rgba(62, 62, 62, 0.319);
		z-index: 999;
		margin: 50px;
	}
	.devis {
		background-color: var(--green);
		color: white;
		font-family: 'Red Hat Display';
		font-size: 1rem;
		font-weight: 700;
		border-radius: 8px;
		text-align: center;
		padding: 20px 20px;
		box-shadow: 0px 20px 20px rgba(62, 62, 62, 0.319);
		z-index: 999;
		max-width: 300px;
		margin-top: 30px;
	}
	a:hover {
		animation: bounce 0.4s ease-in-out;
	}

	@keyframes bounce {
		0% {
			transform: scale(1) translateY(-2px);
		}
		25% {
			transform: scale(1) translateY(3px);
		}
		50% {
			transform: scale(1) translateY(-1px);
		}
		75% {
			transform: scale(1) translateY(2px);
		}
		100% {
			transform: scale(1) translateY(0);
		}
	}

	@media screen and (min-width: 1224px) and (max-width: 2500px) {
		.hero h1 {
			line-height: 1em;
		}
	}
	@media screen and (min-width: 768px) and (max-width: 1224px) {
		.hero h1 {
			line-height: 1em;
		}
	}
	@media screen and (min-width: 300px) and (max-width: 768px) {
		.hero h1 {
			line-height: 35px;
			font-size: 2em;
		}
		.imgHero {
			max-width: 90%;
			min-width: 90%;
			margin-top: 30px;
		}
		.hero p {
			width: 100%;
		}
		.img {
			max-width: 90%;
			min-width: 90%;
			margin-top: 30px;
		}
		.hero li {
			width: 90%;
		}
		.hero h3 {
			width: 90%;
		}
		.hero h2 {
		line-height: 30px;
		}
	}
</style>
