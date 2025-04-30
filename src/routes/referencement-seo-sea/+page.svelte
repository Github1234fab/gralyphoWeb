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

	// let accordeonTab = [
	// 	{
	// 		title: 'Tarifs',
	// 		p: "Nous proposons des stratégies courtes, le plus souvent en répondant à une problémétiques sur des sites existant. Nous proposons également des stratégies longues sous forme d'abonnement  afin d'atteindre un objectif fixé à l'avance. Nos tarfis sur les stratégie SEO et SEA débutent à partir de 500 euros et ne dépassent guère 2000 euros. "
	// 	},
	// 	{
	// 		title: 'Stratégie SEO',
	// 		p: "Le SEO, pour Search Engine Optimization, constitue un ensemble de techniques et de bonnes pratiques (W3C), permettant à un site web d'être convenablement référencé sur les moteurs de recherche. La quête est d'obtenir une place privilégiée en première page des navigateurs selon la recherche utilisée par les internautes. Les normes du W3C peuvent pénaliser le site inernet en terme de référencement si elles ne sont pas respectées et les moteurs sont de plus en plus exigeants. Un référencement optimal consiste en un mix entre le respect des normes du W3C,  la syntaxe utlisée sur le site, l'usage des bons mots clefs et d'autres techniques permettant de placer un site internet dans les conditions optimales du référencement naturel"
	// 	},
	// 	{
	// 		title: 'Stratégie SEA',
	// 		p: " Le référencement payant, le SEA, il requiert de très bonnes connaissances en matière d'outil de promotion marketing. Il s'agit de campagne de publicité qui peuvent être diffusés sur des sites partenaires, sur les réseaux ou en haut de page des moteurs de recherche, ou les deux. Ces outils d'apparence assez simples sont en réalité très complexes. Chaque mot clef est payant, une stratégie est donc nécessaire en amont. La qualité de la rédaction de l'annonce doit être pertinente et s'adresser facilement et directement au coeur de cible. Les annonces peuvent être automatisées et se déclencher à des périodes déterminées."
	// 	}
	// ];
</script>

<Mouse />
<Header />

<!-- ***************HERO*************** -->

<section class="sites-section" in:fade={{ duration: 1000 }}>
	<div class="hero">
		<img src={SEO} alt="Optimisation SEO par Gralypho, agence web à Lyon" class="imgHero" />

		<h1> Boostez votre visibilité en ligne avec Gralypho <br>Agence SEO à l'ouest de Lyon :</h1>

		<h2>Pourquoi investir dans le SEO pour votre site web ?</h2>
		<p>Le SEO (Search Engine Optimization), ou référencement naturel, regroupe un ensemble de techniques permettant d'améliorer de manière notoire la visibilité d'un site internet sur les moteurs de recherche et son position dans la SERP (positionnement dans les résultats de recherche). 
			<br>Un SEO conçu efficacement créer un trafic organique vers votre site et le fait remonter dans le classement de la SERP. Le but est d'optimiser différents paramètres afin d'augmenter les clics et d'obtenir des conversions</p>

		<ul>
			<li>Augmentez votre visibilité et obtenez plus de trafic</li>
			<li>Générez plus de leads qualifiés</li>
			<li>Obtenez un plus grand taux de conversion</li>
			<li>Stabilisez votre visibilité</li>
		</ul>

		<h2>Notre méthode SEO chez Gralypho</h2>
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
		<ul>
			<li>Approche personnalisée pour chaque projet</li>
			<li>Suivi mensuel détaillé et rapport de positionnement</li>
			<li>Expertise en SEO local et national</li>
			<li>Engagement sur la transparence et les résultats</li>
		</ul>

		<h2>Quel est le budget pour un audit SEO ?</h2>
		<p>Le tarif d'un audit SEO dépend de la complexité de votre site internet, de votre marché et de vos ambitions de positionnement. Chez <strong>Gralypho</strong>, nous adaptons nos prestations à votre projet, avec des devis clairs et sans surprise.</p>

	<a href="/#section-form">Demander un audit SEO gratuit</a>

	

		<div class="faq">
			<h2>FAQ sur le SEO</h2>
			<h3>Qu'est-ce qu'un audit SEO ?</h3>
			<p>Un audit SEO est une analyse complète de votre site web pour identifier les facteurs bloquants pour votre référencement naturel. Il sert de base pour construire une stratégie SEO efficace.</p>

			<h3>Combien de temps faut-il pour voir des résultats SEO ?</h3>
			<p>Le SEO est une stratégie de moyen à long terme. Les premiers résultats sont visibles généralement entre 3 à 6 mois selon la concurrence et la qualité des optimisations réalisées.</p>

			<h3>Pourquoi travailler avec une agence SEO locale à Lyon ?</h3>
			<p>Une agence locale connaît parfaitement votre marché et peut développer des stratégies de référencement local précises, en optimisant par exemple votre présence sur Google My Business et les annuaires régionaux.</p>

			<h3>Est-ce que Gralypho propose aussi des stratégies SEA (Google Ads) ?</h3>
			<p>Oui, en complément du SEO, nous proposons également la mise en place de campagnes SEA (référencement payant) pour booster rapidement votre visibilité.</p>
		</div>
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
		display: grid;
		grid-template-columns: repeat(12, 1fr);
		grid-template-rows: auto;
		background-color: rgb(245, 244, 244);
		height: auto;
		font-size: 16px;
	}
	.hero {
		grid-column: 1/13;
		grid-row: 1;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		height: auto;
		/* background: url('../../Assets/bgTwo.png'), var(--primary); */
	}
	.hero h1 {
		text-align: center;
		font-family: var(--Geologica);
		font-weight: 900;
		font-size: 2.5rem;
		color: var(--primary);
		margin-top: 0px;
		letter-spacing: -2px;
		padding: 10px;
		line-height: 50px;
		margin-top: 40px;
	}
	ul{
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;

	}
	li{
		font-family: var(--Poppins);
		font-size: 0.8rem;
		color: var(--primary);
		font-weight: 300;
		width: 70%;
		text-align: center;
	}
	.hero h2 {
		font-family: poppins;
		font-weight: 600;
		font-size: 1.5rem;
		color: var(--primary);
		text-align: center;
		margin-top: 30px;
		width: 75%;
		margin-bottom: 10px;
	}
	.hero h3 {
		font-family: poppins;
		font-weight: 600;
		font-size: var(--m);
		color: var(--primary);
		text-align: center;
		margin-top: 50px;
		width: 75%;
		margin-bottom: 20px;
	}
	.hero p {
		font-family: var(--Poppins);
		font-size: var(--m);
		color: var(--primary);
		font-weight: 400;
		text-align: center;
		align-self: center;
		padding: 20px;
		width: 50%;
	}
	

	.imgHero {
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
.faq{
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin-top: 100px;
	background-color: white;
	
}
a {
		background-color: var(--green);
		color:  var(--primary);
		font-family: 'Red Hat Display';
		font-size: 1rem;
		font-weight: 700;
		border-radius: 8px;
		text-align: center;
		padding: 10px 20px;
		box-shadow: 0px 10px 10px rgba(62, 62, 62, 0.5);
		z-index: 999;
		max-width: 300px;
		margin-top: 30px;
 
	}
        a:hover{
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
			line-height: 40px;
			font-size: 2em;
		}
		.imgHero {
			max-width: 90%;
			min-width: 90%;
			margin-top: 30px;
		}
		.hero p {
		
		width: 90%;
	}
		
		
	}
</style>
