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

	// import Csection from "../../sections/Csection.svelte";
	import Mouse from '../../Components/Mouse.svelte';

	let accordeonTab = [
		{
			title: 'Tarifs',
			p: 'Nos forfaits de gestion des médias sociaux démarrent autour de 500 euros. Plus la mission est complexe plus le tarif grimpe, mais nous avons des solutions sous forme de  forfait, très intéressantes et très compétitives.'
		},
		{
			title: 'Contenu des missions de gestion des médias sociaux',
			p: 'Le contenu des missions de gestion des médias sociaux portent essentiellement sur la conception des posts et des campagnes publicitaires pour votre marque ou votre business. Nous gérons la rédaction des annonces, leur contenu, leur fréquence et leur diffusion.'
		},
	]
	


</script>

<Mouse />
<Header />

<!-- ***************HERO*************** -->

<section class="sites-section" in:fade={{ duration: 1000 }}>
	<div class="hero">
		<!-- <img src={imgHero} alt="" class="imgHero" /> -->
		<h1>Gestion des <br /><span>Médias Sociaux</span></h1>
		<h3>
			L'agence Gralypho s'occupe de la gestion de vos réseaux sociaux. <br />
			Mises à jour régulières, création de contenu, gestion des interactions, etc. <br /> Nous nous occupons
			de tout pour vous permettre de vous concentrer sur votre activité.
		</h3>
	</div>

	<!-- ***************SERVICES*************** -->

	<div class="container-service">
		<h1>Nos services de médias sociaux</h1>
		<div class="wrapper-service">
			<Service
				text="Rédaction"
				description="Nous nous chargeons de la conception de vos annonces. Leurs titres, leur contenu textuel, leurs slogans, leurs mots clefs. Derrière cette forme d'écriture se cache une vraie stratégie marketing. "
				img={redaction}
				lien="/Media-infos"
			/>
			<Service
				text="Création des contenus images et vidéos"
				img={contenuMedia}
				description="Nous pouvons créer vos vidéos et vos images. Nous sommes formés à la conception d'image professionnelle. Que ce soit en photographie  et vidéo de produits, de portraits , de photos corporate, de groupe ou d'environnement (...), notre expertise fera la différence sur vos contenus et vos publications sortirons du lot, à coup sûr."
				lien="/Media-infos"
			/>
		</div>
		<div class="wrapper-service">
			<Service
				text="Campagnes publicitaires"
				description="Nous sommes là pour vous aider à établir vos stratégies publicitaires et vos campagnes. Quand ?  Comment ? Pourquoi ? sont les questions auxquelles nous apporterons une réponse pertinente et sans faille pour vous permettre d'atteindre vos objectifs."
				img={publiciteMedia}
				lien="/Media-infos"
			/>
			<Service
				text="Formation et coaching"
				description="Et pourquoi pas se former aux médias sociaux afin de devenir autonome et d'organiser vos campagnes et votre contenu vous-même? Nous pouvons vous former à travers des ateliers en ligne ou en présentiel adaptés à vos besoins et à votre business."
				img={socialMedia}
				lien="/Media-infos"
			/>
		</div>
	</div>

	<!-- ***************SITES TYPES*************** -->
	<!-- 
  <div class="wrapper-Csection">
    <Csection />
  </div> -->
	<!-- 
  <div class="section-slider">
    <h1>Conception de site Web</h1>
    <h3>Découvrez les différents types de sites internet que nous concevons.</h3>
    <div class="container-slider">
      <div class="wrapper-slider">
        {#each sitesTab as site}
          <CardsSites
            type={site.type}
            description={site.description}
            delai={site.delai}
            tarif={site.tarif}
            img={site.img}
          />
        {/each}
      </div>
    </div>
  </div> -->

	<!-- ***************COLLAPSES*************** -->

	<div class="wrapper-SectionB">
		<h1>Les avantages de la gestion de médias sociaux</h1>
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
			J’aime les médias sociaux car ils existent à l’intersection de l’humanité et de la technologie
			– @jeremywaite
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
		text-align: center;
		font-family: Epilogue;
		font-weight: 900;
		font-size: var(--xlhero);
		color: rgb(255, 255, 255);
		margin-top: 0px;
		letter-spacing: -1px;
		padding: 0px;
		line-height: 50px;
		margin-top: 100px;
	}
	.hero h1 span {
		color: var(--vert);
	}
	.hero h3 {
		font-family: poppins;
		font-weight: 300;
		font-size: var(--m);
		color: rgb(224, 222, 222);
		text-align: center;
	}

	.container-service {
		grid-column: 2/12;
		grid-row: 2;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		margin-top: 0px;
	}
	.container-service h1 {
		text-align: center;
		font-family: epilogue;
		font-size: var(--xl);
		font-weight: 700;
		color: var(--primary);
		margin-top: 100px;
		letter-spacing: -1px;
	}
	.wrapper-service {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		gap: 10px;
		margin-top: 30px;
		margin-bottom: 50px;
	}
	/* .container-slider {
    overflow-x: auto;
    margin-left: 100px;
    border-right: 3px double var(--primary);
    width: 100vw;
    background-color: white;
  }
  .section-slider {
    grid-column: 1/13;
    grid-row: 3;
    margin-top: 50px;
    margin-left: 0px;
    background-color: white;
  }
  .wrapper-slider {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    border-radius: 20px;
    justify-content: start;
    align-items: center;
    margin-bottom: 30px;
    gap: 20px;
  }

  .section-slider h1 {
    text-align: left;
    font-family: epilogue;
    font-size: var(--xl);
    font-weight: 700;
    color: var(--primary);
    margin-top: 100px;
    letter-spacing: -3px;
    margin-left: 70px;
    width: 80%;
  }
  .section-slider h3 {
    margin-left: 70px;
    text-align: left;
    font-family: poppins;
    font-weight: 300;
    font-size: var(--m);
    color: grey;
    margin-top: 20px;
    margin-bottom: 50px;
  } */

	.wrapper-SectionB {
		grid-column: 1/13;
		grid-row: 4;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		margin-top: 0px;
		background-color: white;
	}
	.wrapper-SectionB h1 {
		text-align: center;
		font-family: epilogue;
		font-size: var(--xl);
		font-weight: 700;
		color: var(--primary);
		margin-top: 0px;
		letter-spacing: -1px;
		margin-top: 50px;
		margin-bottom: 50px;
	}

	.wrapper-form {
		grid-column: 1/13;
		grid-row: 7;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
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
		height: 100%;
		background-color: var(--colorF);
		padding: 50px;
		gap: 20px;
		border-bottom: 1px solid rgb(79, 78, 78);
	}
	.testimonial h2 {
		font-family: 'architects daughter';
		font-weight: 700;
		font-size: var(--l);
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

		.wrapper-service {
			grid-column: 1/13;
			grid-row: 2;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			margin-top: 50px;
			gap: 10px;
		}
	}
</style>
