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
		<img src={seo} alt="" class="imgHero" />
		<h1>Stratégie <span>SEO</span></h1>
		<h2>Qu'est-ce que ça veut dire <span>"SEO"</span> ?</h2>
		<p>Le Search Engine Optimization (SEO), ou optimisation pour les moteurs de recherche, est l'ensemble des pratiques visant à améliorer la visibilité et le classement d'un site web dans les résultats des moteurs de recherche (comme Google, Bing ou Yahoo). L'objectif est d'attirer un trafic organique (non payant) de qualité vers un site internet.</p>
		<h2>Comment faire du référencement <span>"SEO"</span> ?</h2>
		<p>
			Le SEO repose sur <a href="https://semji.com/fr/guide/techniques-seo-le-guide-complet/">plusieurs piliers</a>: la technique, le contenu et la popularité. Il s'agit d'optimiser la structure d'un site internet, le contenu de ses pages et de gagner des liens de qualité pour améliorer la visibilité du site sur les moteurs de recherche.
		</p>
		<h2>Comment trouver une bonne agence <span>"SEO"</span> à Lyon ?</h2>
		<p>
			De nombreuses agences SEO à Lyon offre de très bons servcies SEO. Chez Gralypho, agence Web basée à Lyon et dans l'ouest Lyonnais, nous accordons une importance névraglique au SEO. C'est le nerf de la guerre, c'est crucial pour tous les propriétaires de site internet. Le SEO est passionnant et aujourd'hui nous possedons de nombreux outils qui nous permettent de réaliser des analyses fines sur la position de chaque site internet dans la SERP. Nous proposons des audits SEO complets, des
			stratégies SEO sur mesure et des suivis réguliers pour garantir un bon positionnement sur les moteurs de recherche.
		</p>
		<h2>Quel est le budget pour un audit <span>"SEO"</span></h2>
		<p>Le budget pour un audit SEO varie en fonction de la taille du site internet, de la concurrence, du secteur d'activité et des objectifs fixés à court ou long terme.</p>
		<Button />
	</div>

	<!-- ***************SERVICES*************** -->

	<!-- <div class="wrapper-SectionB">
		<h2>
			Optez pour un référencement gagnant. <br />Touchez votre ❤️ de cible <br />pour être visible.
		</h2>
		{#each accordeonTab as tab}
			<CardsSectionB title={tab.title} p={tab.p} />
		{/each}
	</div> -->

	<!-- ***************SEO/SEA*************** -->

	<!-- <div class="wrapper-Fsection">
    <FSection />
  </div> -->

	<!-- ***************TESTIMONIAL*************** -->

	<div class="testimonial">
		<h1>Stratégie SEO, <br /> les chiffres .</h1>
		<h2>
			Le SEO génère plus de 1 000% de trafic par rapport aux stratégies sur les réseaux sociaux organiques .<br /><br />
			92,96% du trafic global provient de Google Search, Google Images et Google Maps. <br /><br />
			53,3% de tout le trafic de site provient de la recherche organique. <br /><br />
			68% des expériences en ligne commencent par un moteur de recherche. <br /><br />
		</h2>
	
		<div class="wrapper__faqLink">
			<FaqLink />
		</div>
	</div>

	

	<!-- ***************CONTACT*************** -->

	<div class="wrapper-form">
		<Form />
	</div>
</section>

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
		margin-top: 70px;
	}
	.hero h1 span {
		color: var(--green);
	}
	.hero h2 {
		font-family: poppins;
		font-weight: 600;
		font-size: var(--m);
		color: var(--primary);
		text-align: center;
		margin-top: 50px;
		width: 75%;
		margin-bottom: 0px;
	}
	.hero h2 span {
		font-weight: 700;
	}
	.hero p {
		font-family: var(--Poppins);
		font-size: var(--m);
		color: var(--primary);
		font-weight: 300;
		text-align: center;
		align-self: center;
		padding: 20px;
		margin-bottom: 50px;
		width: 90%;
	}
	a {
		text-decoration: underline;
	}

	.imgHero {
		max-width: 30%;
		min-width: 30%;
		margin-top: 30px;
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
	.testimonial {
		grid-column: 1/13;
		grid-row: 5;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		margin-top: 100px;
		min-height: 700px;
		background: var(--gradient);
		padding: 30px;
		gap: 60px;
	}
	.testimonial h1 {
		font-family: 'Poppins';
		font-weight: 700;
		font-size: var(--l);
		color: var(--whiteGrey);
		text-align: center;
		line-height: 40px;
		letter-spacing: 0px;
		margin-bottom: 30px;
		margin-top: 30px;
	}
	.testimonial h2 {
		font-family: 'Poppins';
		font-weight: 300;
		font-size: var(--m);
		color: var(--whiteGrey);
		text-align: center;
		line-height: 40px;
		letter-spacing: 0px;
		margin-top: -30px;
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
			line-height: 50px;
			font-size: 2.5em;
		}
		.imgHero {
			max-width: 60%;
			min-width: 60%;
			margin-top: 30px;
		}
	}
</style>
