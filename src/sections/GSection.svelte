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
	import Slider from '../Components/Slider.svelte';
	import synthetiser from '../Assets/png-gralypho/application_synthtiser.png';
	import Pendu from '../Assets/png-gralypho/lependu_application.png';
	import Info from  '../Assets/png-gralypho/site internet_presse.png';

	// let portfolioTab = [
	// 	{
	// 		type: 'Application',
	// 		title: 'Tables',
	// 		text: 'Application',
	// 		img: animationSite,
	// 		lien: 'https://fabienmarceau.com/theTables/index.html'
	// 	},
	// 	{
	// 		type: 'Application',
	// 		title: 'Shooping List Appli',
	// 		text: 'Application',
	// 		img: animationSite,
	// 		lien: 'https://main--gralyshoplist.netlify.app/'
	// 	},
	// 	{
	// 		type: 'Site Web',
	// 		title: 'Rocket Agency',
	// 		text: 'Animé au scroll',
	// 		img: animationSite,
	// 		lien: 'https://fabienmarceau.com/RocketAgencyProject%20copie/index.html'
	// 	},
	// 	{
	// 		type: 'Site Web',
	// 		title: 'Le Lion Taxi',
	// 		text: 'Taxi',
	// 		img: animationSite,
	// 		lien: 'https://taxi-lyon-aeroport-rhone.com'
	// 	},
	// 	{
	// 		type: 'Appli Météo',
	// 		title: 'Météo',
	// 		text: 'Requête API',
	// 		img: meteo,
	// 		lien: 'https://fabienmarceau.com/meteo/index.html'
	// 	},
	// 	{
	// 		type: 'Portfolio',
	// 		title: 'Photographer',
	// 		text: 'Parallaxe',
	// 		img: photographie,
	// 		lien: 'https://fabienmarceau.com/gralyphoPhotography/index.html'
	// 	},
	// 	{
	// 		type: 'Site Web',
	// 		title: 'Issetys École Musique',
	// 		text: 'Web',
	// 		img: animationSite,
	// 		lien: 'https://www.ecole-musique-lyon-issetys.com'
	// 	},
	// 	{
	// 		type: 'Composant',
	// 		title: 'Clock',
	// 		text: 'Neumorphisme',
	// 		img: horloge,
	// 		lien: 'https://fabienmarceau.com/horloge/index.html'
	// 	},
	// 	{
	// 		type: 'Jeux pédago',
	// 		title: 'FlagsGame',
	// 		text: 'Jeu de drapeaux',
	// 		img: flag,
	// 		lien: 'https://fabienmarceau.com/dist/index.html'
	// 	},
	// 	{
	// 		type: 'Jeux',
	// 		title: 'Morpion',
	// 		text: 'Application de jeu',
	// 		img: morpion,
	// 		lien: 'https://fabienmarceau.com/tic-tac-toe/index.html'
	// 	},
	// 	{
	// 		type: 'Plateforme réservation',
	// 		title: 'Booking',
	// 		text: 'Chambres',
	// 		img: booki,
	// 		lien: 'https://fabienmarceau.com/Booki/index.html'
	// 	},
	// 	{
	// 		type: 'Plateforme réservation',
	// 		text: 'Gastronomie',
	// 		title: 'Resto',
	// 		img: resa,
	// 		lien: 'https://fabienmarceau.com/myFood/index.html'
	// 	},
	// 	{
	// 		type: 'Site web/application',
	// 		text: 'Presse',
	// 		title: "Info detox",
	// 		img: Info,
	// 		lien: 'https://fanciful-taiyaki-b32670.netlify.app/'
	// 	},
	// 	{
	// 		type: 'Application',
	// 		text: 'Musique',
	// 		title: 'Synthétiseur',
	// 		img: synthetiser,
	// 		lien: 'https://synthetizer.netlify.app/'
	// 	},
	// 	{
	// 		type: 'Application jeux',
	// 		text: 'Le pendu',
	// 		title: 'Jeux',
	// 		img: Pendu,
	// 		lien: 'https://dupen.netlify.app/'
	// 	},

	// ];
</script>

<section class="G-section">
	<div class="wrapper-text">
		<h1>
			Nos réalisations<br />
		</h1>
	</div>

	<Slider />
</section>

<style>
	.G-section {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 20px;
		height: 100%;
		width: 100%;
		font-size: 16px;
		background-color: var(--whiteGrey);
		padding: 0px;
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
		font-family: var(--Red);
		font-size: 2rem;
		color: var(--primay);
		font-weight: 800;
		margin-bottom: 0px;
		letter-spacing: -0.04em;
		margin-top: 40px;
		text-align: center;
	}
	
	:global(.wrapper-portfolio) {
		flex: 1 1 10%;
	}

	@media screen and (max-width: 768px){
		.G-section{
			height: fit-content;
		}
			.G-section h1{
			font-size: 2rem;
		}
	}
</style>
