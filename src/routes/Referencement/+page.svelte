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

	let accordeonTab = [
		{
			title: 'Tarifs',
			p: "Nous proposons des stratégies courtes, le plus souvent en répondant à une problémétiques sur des sites existant. Nous proposons également des stratégies longues sous forme d'abonnement  afin d'atteindre un objectif fixé à l'avance. Nos tarfis sur les stratégie SEO et SEA débutent à partir de 500 euros et ne dépassent guère 2000 euros. "
		},
		{
			title: 'Stratégie SEO',
			p: "Le SEO, pour Search Engine Optimization, constitue un ensemble de techniques et de bonnes pratiques (W3C), permettant à un site web d'être convenablement référencé sur les moteurs de recherche. La quête est d'obtenir une place privilégiée en première page des navigateurs selon la recherche utilisée par les internautes. Les normes du W3C peuvent pénaliser le site inernet en terme de référencement si elles ne sont pas respectées et les moteurs sont de plus en plus exigeants. Un référencement optimal consiste en un mix entre le respect des normes du W3C,  la syntaxe utlisée sur le site, l'usage des bons mots clefs et d'autres techniques permettant de placer un site internet dans les conditions optimales du référencement naturel"
		},
		{
			title: 'Stratégie SEA',
			p: " Le référencement payant, le SEA, il requiert de très bonnes connaissances en matière d'outil de promotion marketing. Il s'agit de campagne de publicité qui peuvent être diffusés sur des sites partenaires, sur les réseaux ou en haut de page des moteurs de recherche, ou les deux. Ces outils d'apparence assez simples sont en réalité très complexes. Chaque mot clef est payant, une stratégie est donc nécessaire en amont. La qualité de la rédaction de l'annonce doit être pertinente et s'adresser facilement et directement au coeur de cible. Les annonces peuvent être automatisées et se déclencher à des périodes déterminées."
		}
	];
</script>

<Mouse />
<Header />

<!-- ***************HERO*************** -->

<section class="sites-section" in:fade={{ duration: 1000 }}>
	<div class="hero">
		<!-- <img src={imgHero} alt="" class="imgHero" /> -->
		<h1>Visibilité:<br /><span>SEO/SEA</span></h1>
		<h3>
			Nous sommes experts en straégie SEO et SEA. C'est pour vous la garantie unique d'atteindre vos
			futurs clients et d'obtenir une visibilité optimale sur les moteurs de recherche. Nous vous
			accompagnons dans la mise en place de votre stratégie de référencement naturel (SEO) et votre
			stratégie de référencement payant. (SEA).
		</h3>
	</div>

	<!-- ***************SERVICES*************** -->

	<div class="wrapper-SectionB">
		<h1>Nos tarifs et nos stratégies</h1>
		<h2>
			Optez pour un référencement gagnant. <br />Touchez votre ❤️ de cible <br />en étant visible.
		</h2>
		{#each accordeonTab as tab}
			<CardsSectionB title={tab.title} p={tab.p} />
		{/each}
	</div>

	<!-- ***************SEO/SEA*************** -->

	<!-- <div class="wrapper-Fsection">
    <FSection />
  </div> -->

	<!-- ***************TESTIMONIAL*************** -->

	<div class="testimonial">
		<h2>
			. Le SEO génère plus de 1 000% de trafic par rapport aux stratégies sur les réseaux sociaux
			organiques .<br />
			. 92,96% du trafic global provient de Google Search, Google Images et Google Maps. <br />
			. 53,3% de tout le trafic de site provient de la recherche organique. <br />
			. 68% des expériences en ligne commencent par un moteur de recherche. <br />
		</h2>
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
		background-color: var(--primary);
	}
	.hero h1 {
		word-break: break-all;
		text-align: center;
		font-family: Epilogue;
		font-weight: 900;
		font-size: var(--xlhero);
		color: rgb(255, 255, 255);
		margin-top: 0px;
		letter-spacing: -1px;
		padding: 20px;
		line-height: 50px;
		margin-top: 100px;
	}
	.hero h1 span {
		color: violet;
	}
	.hero h3 {
		font-family: poppins;
		font-weight: 300;
		font-size: var(--m);
		color: rgb(224, 222, 222);
		text-align: center;
	}
	.wrapper-SectionB {
		grid-column: 1/13;
		grid-row: 4;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		margin-top: 0px;
		margin-bottom: 50px;
	}
	.wrapper-SectionB h1 {
		font-family: Heebo;
		text-transform: uppercase;
		font-size: var(--m);
		color: var(--jauneB);
		font-weight: 600;
		letter-spacing: -0.04em;
		margin-top: 50px;
		margin-left: 0px;
		margin-bottom: 20px;
		text-align: center;
	}
	.wrapper-SectionB h2 {
		font-family: 'Red Hat Display';
		font-size: var(--xl);
		color: var(--primary);
		font-weight: 700;
		margin-bottom: 0px;
		letter-spacing: -0.04em;
		margin-left: 0px;
		text-align: center;
		margin-bottom: 50px;
	}

	.wrapper-form {
		grid-column: 1/13;
		grid-row: 7;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		margin-top: 50px;
		background-color: var(--bgHero);
	}
	.testimonial {
		grid-column: 1/13;
		grid-row: 6;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		margin-top: 0px;
		height: 130%;
		background-color: rgb(83, 10, 83);
		padding: 50px;
		gap: 20px;
	}
	.testimonial h2 {
		font-family: 'architects daughter';
		font-weight: 700;
		font-size: var(--l);
		color: white;
		text-align: left;
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
		.hero h3 {
			line-height: 30px;
			font-size: 1.2em;
			margin-top: 30px;
			margin-bottom: 50px;
			width: 60%;
		}
	}
	@media screen and (min-width: 768px) and (max-width: 1224px) {
		.hero h1 {
			line-height: 1em;
		}
		.hero h3 {
			line-height: 30px;
			font-size: 1em;
			margin-top: 30px;
			margin-bottom: 50px;
			width: 60%;
		}
	}
	@media screen and (min-width: 300px) and (max-width: 768px) {
		.hero h1 {
			line-height: 50px;
			font-size: 3.1em;
		}
		.hero h3 {
			line-height: 30px;
			font-size: 1em;
			margin-top: 30px;
			margin-bottom: 50px;
			width: 60%;
		}
	}
</style>
