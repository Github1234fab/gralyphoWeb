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
	import Service from '../../Components/Services.svelte';
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
	import redaction from '../../Assets/png-gralypho/writing.png';
	import contenuMedia from '../../Assets/png-gralypho/contenuMedia.png';
	import publiciteMedia from '../../Assets/png-gralypho/publiciteMedia.png';
	import socialMedia from '../../Assets/png-gralypho/socialMedia.png';
	import Button from '../../Components/ButtonCTA.svelte';
	import FaqLink from '../../Components/FaqLink.svelte';

	// import Csection from "../../sections/Csection.svelte";
	import Mouse from '../../Components/Mouse.svelte';

	// let accordeonTab = [
	// 	{
	// 		title: 'Tarifs',
	// 		p: 'Nos forfaits de gestion des médias sociaux démarrent autour de 500 euros. Plus la mission est complexe plus le tarif grimpe, mais nous avons des solutions sous forme de  forfait, très intéressantes et très compétitives.'
	// 	},
	// 	{
	// 		title: 'Contenu des missions de gestion des médias sociaux',
	// 		p: 'Le contenu des missions de gestion des médias sociaux portent essentiellement sur la conception des posts et des campagnes publicitaires pour votre marque ou votre business. Nous gérons la rédaction des annonces, leur contenu, leur fréquence et leur diffusion.'
	// 	}
	// ];
</script>

<Mouse />
<Header />

<!-- ***************HERO*************** -->

<section class="sites-section" in:fade={{ duration: 1000 }}>
	<div class="hero">
		<img src={socialMedia} alt="" class="imgHero" />
		<h1>Gestion des <br /><span>Médias Sociaux</span></h1>
		<h2>
			L'agence Gralypho s'occupe de la gestion de vos réseaux sociaux. <br />
			Mises à jour régulières, création de contenu vidéo et photo, gestion des interactions, etc. <br /> Nous nous occupons
			de tout pour vous permettre d'atteindre votre public cible et de développer votre business.
		</h2>
		<Button />
	</div>

	<!-- ***************SERVICES*************** -->

	<div class="container-service">
		<h1>Nos services de médias sociaux</h1>
		<div class="wrapper-service">
			<Service
				text="Les différents types de contenus à poster."
				description="Nous nous chargeons de la conception de votre contenu à poster sur les réseaux sociaux. Les titres, le contenu textuel, les slogans, le choix des mots clefs... "
				img={redaction}
				lien="/community-management"
			/>
			<Service
				text="Service professionnel de création de contenu visuel."
				img={contenuMedia}
				description="Notre service de création de vidéo et photographie professionnelle vous permettra de vous démarquer sur les réseaux sociaux. Nous vous aidons à créer des contenus visuels de haute qualité."
				lien="/community-management"
			/>
			<Service
				text="Les campagnes publicitaires ADS."
				description="Nous sommes là pour vous aider à établir vos stratégies publicitaires et vos campagnes. Quand ?  Comment ? Pourquoi ? sont les questions auxquelles nous apporterons une réponse pertinente et sans faille pour vous permettre d'atteindre vos objectifs."
				img={publiciteMedia}
					lien="/community-management"
			/>
			<!-- <Service
				text="Formation et coaching"
				description="Et pourquoi pas se former aux médias sociaux afin de devenir autonome et d'organiser vos campagnes et votre contenu vous-même? Nous pouvons vous former à travers des ateliers en ligne ou en présentiel adaptés à vos besoins et à votre business."
				img={socialMedia}
				lien="/community-management"
			/> -->
		</div>
	</div>



	<div class="testimonial">
		<h2>
			J’aime les médias sociaux car ils existent à l’intersection de l’humanité et de la technologie
			– @jeremywaite
		</h2>
	</div>

	<!-- ***************CONTACT*************** -->

	<div class="wrapper__faqLink">
		<FaqLink/>
		<a href="/FAQ/#reseau">FAQ</a>
	</div>


	<div class="wrapper-form">
		<Form />
	</div>
</section>

<style>
	.sites-section {
		display: flex;
		flex-direction: column;
		background-color: rgb(245, 244, 244);
		height: auto;
		font-size: 16px;
	}
	.imgHero {
		max-width: 30%;
		min-width: 30%;
		margin-top: 30px;
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
		font-weight: 900;
		font-size: 2rem;
		color: var(--primary);
		margin-top: 0px;
		letter-spacing: -1px;
		padding: 0px;
		line-height: 50px;
		margin-top: 70px;
		padding: 15px;
	}
	.hero h1 span {
		color: var(--green);
	}
	.hero h2 {
		font-family: poppins;
		font-weight: 300;
		font-size: var(--m);
		color: var(--primary);
		text-align: center;
		margin-top: 50px;
		margin-bottom: 50px;
		width: 80%;
	}

	.container-service {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		margin-top: 0px;
		padding: 20px;

	
	}
	.container-service h1 {
		text-align: center;
		font-family: 'Red Hat Display';
		font-size: var(--l);
		font-weight: 700;
		color: var(--primary);
		margin-top: 50px;
		margin-bottom: 100px;
		letter-spacing: -1px;
		padding: 10px;
	}
	.wrapper-service {
		display: flex;
		justify-content: center;
		gap: 10px;
		margin-top: 20px;
	height: auto;
	/* flex-wrap: wrap; */
	}

	.wrapper__faqLink{
		grid-column: 1/13;
		grid-row: 6;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	.wrapper__faqLink a{
		font-family: 'Red Hat Display';
		font-size: var(--m);
		font-weight: 700;
		color: var(--whiteGrey);
		background-color: var(--cta);
		padding: 20px 30px;
		text-decoration: none;
		box-shadow: 0px 20px 10px 0px rgba(0, 0, 0, 0.269);
		margin-bottom: 100px;
		border-radius: 5px;
		margin-top: 0px;
	}

	.wrapper-form {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		background-color: var(--bgHero);
	}
	.testimonial {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		margin-top: 0px;
		height: 500px;
		background: var(--gradient);
		padding: 50px;
		gap: 20px;
		border-bottom: 1px solid rgb(79, 78, 78);
	}
	.testimonial h2 {
		font-family: 'Poppins';
		font-weight: 400;
		font-size: var(--m);
		color: white;
		text-align: center;
		line-height: 40px;
		letter-spacing: 0px;
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
	@media screen and (min-width: 300px) and (max-width: 1022px) {
		.hero h1 {
			line-height: 50px;
			font-size: 2.5em;
		}
		.imgHero {
			max-width: 40%;
			min-width: 40%;
			margin-top: 30px;
		}
		.wrapper-service {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			gap: 10px;
			margin-top: 20px;
	
		
		}
	}
</style>
