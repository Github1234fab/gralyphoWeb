<script>
	import Dev from '../Assets/png-gralypho/dev.png';
	import Carousel from '../Components/CarousselCards.svelte';
	import skate from '../Assets/png-gralypho/skateboard.png';
	import { onMount } from 'svelte';
	import { bounceIn } from 'svelte/easing';
	import Ville from '../Assets/png-gralypho/05.png';
	import Visuel from '../Assets/png-gralypho/05.png';
	import VisuelB from '../Assets/png-gralypho/21.png';
	import VisuelC from '../Assets/png-gralypho/36.png';
	import PortfolioCards from '../Components/PortfolioCards.svelte';
	import animationSite from '../Assets/png-gralypho/animationSite.png';
	import horloge from '../Assets/png-gralypho/horloge.png';
	import meteo from '../Assets/png-gralypho/météo.png';
	import morpion from '../Assets/png-gralypho/morpion.png';
	import photographie from '../Assets/png-gralypho/photographie.png';
	import booki from '../Assets/png-gralypho/booki.png';
	import flag from '../Assets/png-gralypho/flag.png';
	import resa from '../Assets/png-gralypho/resa.png';

	let portfolioTab = [
		{
			type: 'Site Web',
			title: 'Rocket Agency',
			text: 'Animé au scroll',
			img: animationSite,
			lien: 'https://fabienmarceau.com/RocketAgencyProject%20copie/index.html'
		},
		{
			type: 'Site Web',
			title: 'Le Lion Taxi',
			text: 'Compagnie de Taxi',
			img: animationSite,
			lien: 'https://taxi-lyon-aeroport-rhone.com'
		},
		{
			type: 'Appli Météo',
			title: 'Météo',
			text: 'Requête API',
			img: meteo,
			lien: 'https://fabienmarceau.com/meteo/index.html'
		},
		{
			type: 'Portfolio',
			title: 'Photographer',
			text: 'Parallaxe',
			img: photographie,
			lien: 'https://fabienmarceau.com/photographer%20V3/index.html'
		},
		{
			type: 'Site Web',
			title: 'Issetys École Musique',
			text: 'Web',
			img: animationSite,
			lien: 'https://www.ecole-musique-lyon-issetys.com'
		},
		{
			type: 'Composant',
			title: 'Clock',
			text: 'Neumorphisme',
			img: horloge,
			lien: 'https://fabienmarceau.com/horloge/index.html'
		},
		{
			type: 'Jeux pédago',
			title: 'FlagsGame',
			text: 'Jeu de drapeaux',
			img: flag,
			lien: 'https://fabienmarceau.com/dist/index.html'
		},
		{
			type: 'Jeux',
			title: 'Morpion',
			text: 'Application de jeu',
			img: morpion,
			lien: 'https://fabienmarceau.com/tic-tac-toe/index.html'
		},
		{
			type: 'Plateforme réservation',
			title: 'Booking',
			text: 'Chambres',
			img: booki,
			lien: 'https://fabienmarceau.com/Booki/index.html'
		},
		{
			type: 'Plateforme réservation',
			text: 'Gastronomie',
			title: 'Site Web',
			img: resa,
			lien: 'https://fabienmarceau.com/myFood/index.html'
		}
	];
</script>

<section class="G-section">
	<div class="wrapper-text">
		<h1>Nos <span>réalisations </span></h1>
		<h2>
			Des Sites Web... <br />mais pas que !
		</h2>
		<h3>
			Découvrez vite tout le potentiel du digital à travers les sites webs animés, les applications,
			les requêtes API, les jeux, les composants (...) !
		</h3>
	</div>
	<div class="wrapper-portfolio">
		{#each portfolioTab as item}
			<PortfolioCards titre={item.title} texte={item.text} lien={item.lien} type={item.type} />
		{/each}
	</div>
</section>

<style>
	.G-section {
		display: grid;
		grid-template-columns: repeat(12, 1fr);
		grid-template-rows: auto;
		height: auto;
		width: 100%;
		font-size: 16px;
		background-color: var(--greyBg);
	}
	.wrapper-text {
		grid-column: 2/12;
		grid-row: 1;
		display: flex;
		flex-direction: column;
		gap: 10px;
		margin-top: 0px;
	}
	.G-section h1 {
		font-family: Heebo;
		text-transform: uppercase;
		font-size: var(--m);
		color: var(--bleuAcier);
		font-weight: 600;
		margin-bottom: 40px;
		letter-spacing: -0.04em;
		margin-top: 40px;
		text-align: center;
	}
	.G-section h2 {
		font-family: 'Red Hat Display';
		font-size: var(--xl);
		color: var(--primary);
		font-weight: 700;
		margin-bottom: 0px;
		letter-spacing: -0.04em;
		text-align: center;
	}
	.G-section h3 {
		font-family: epilogue;
		font-size: var(--m);
		color: var(--primary);
		font-weight: 400;
		margin-bottom: 0px;
		letter-spacing: -0.04em;
		text-align: center;
		width: 70%;
		margin: 0 auto;
		margin-top: 10px;
		line-height: 25px;
	}

	.wrapper-portfolio {
		grid-column: 2/12;
		grid-row: 2;
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
		margin-top: 50px;
		margin-bottom: 100px;
		gap: 15px;
	}
	:global(.card-portfolio) {
		flex: 1 1 50%;
	}

	@media screen and (min-width: 1400px) and (max-width: 2500px) {
		:global(.card-portfolio) {
			flex: 1 1 50%;
		}
	}

	@media screen and (min-width: 1200px) and (max-width: 1400px) {
		:global(.card-portfolio) {
			flex: 1 1 20%;
		}
	}

	@media screen and (min-width: 992px) and (max-width: 1200px) {
		:global(.card-portfolio) {
			flex: 1 1 20%;
		}
	}

	@media screen and (min-width: 768px) and (max-width: 992px) {
		:global(.card-portfolio) {
			flex: 1 1 30%;
		}
	}

	@media screen and (min-width: 576px) and (max-width: 767px) {
		:global(.card-portfolio) {
			flex: 1 1 20%;
		}
	}

	@media screen and (min-width: 300px) and (max-width: 575px) {
		:global(.card-portfolio) {
			flex: 1 1 35%;
		}
	}
</style>
