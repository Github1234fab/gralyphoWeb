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
			Découvrez notre portfolio ! <br />
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
		/* background-image: linear-gradient(158deg, rgba(84, 84, 84, 0.03) 0%, rgba(84, 84, 84, 0.03) 20%,rgba(219, 219, 219, 0.03) 20%, rgba(219, 219, 219, 0.03) 40%,rgba(54, 54, 54, 0.03) 40%, rgba(54, 54, 54, 0.03) 60%,rgba(99, 99, 99, 0.03) 60%, rgba(99, 99, 99, 0.03) 80%,rgba(92, 92, 92, 0.03) 80%, rgba(92, 92, 92, 0.03) 100%),linear-gradient(45deg, rgba(221, 221, 221, 0.02) 0%, rgba(221, 221, 221, 0.02) 14.286%,rgba(8, 8, 8, 0.02) 14.286%, rgba(8, 8, 8, 0.02) 28.572%,rgba(52, 52, 52, 0.02) 28.572%, rgba(52, 52, 52, 0.02) 42.858%,rgba(234, 234, 234, 0.02) 42.858%, rgba(234, 234, 234, 0.02) 57.144%,rgba(81, 81, 81, 0.02) 57.144%, rgba(81, 81, 81, 0.02) 71.42999999999999%,rgba(239, 239, 239, 0.02) 71.43%, rgba(239, 239, 239, 0.02) 85.71600000000001%,rgba(187, 187, 187, 0.02) 85.716%, rgba(187, 187, 187, 0.02) 100.002%),linear-gradient(109deg, rgba(33, 33, 33, 0.03) 0%, rgba(33, 33, 33, 0.03) 12.5%,rgba(147, 147, 147, 0.03) 12.5%, rgba(147, 147, 147, 0.03) 25%,rgba(131, 131, 131, 0.03) 25%, rgba(131, 131, 131, 0.03) 37.5%,rgba(151, 151, 151, 0.03) 37.5%, rgba(151, 151, 151, 0.03) 50%,rgba(211, 211, 211, 0.03) 50%, rgba(211, 211, 211, 0.03) 62.5%,rgba(39, 39, 39, 0.03) 62.5%, rgba(39, 39, 39, 0.03) 75%,rgba(55, 55, 55, 0.03) 75%, rgba(55, 55, 55, 0.03) 87.5%,rgba(82, 82, 82, 0.03) 87.5%, rgba(82, 82, 82, 0.03) 100%),linear-gradient(348deg, rgba(42, 42, 42, 0.02) 0%, rgba(42, 42, 42, 0.02) 20%,rgba(8, 8, 8, 0.02) 20%, rgba(8, 8, 8, 0.02) 40%,rgba(242, 242, 242, 0.02) 40%, rgba(242, 242, 242, 0.02) 60%,rgba(42, 42, 42, 0.02) 60%, rgba(42, 42, 42, 0.02) 80%,rgba(80, 80, 80, 0.02) 80%, rgba(80, 80, 80, 0.02) 100%),linear-gradient(120deg, rgba(106, 106, 106, 0.03) 0%, rgba(106, 106, 106, 0.03) 14.286%,rgba(67, 67, 67, 0.03) 14.286%, rgba(67, 67, 67, 0.03) 28.572%,rgba(134, 134, 134, 0.03) 28.572%, rgba(134, 134, 134, 0.03) 42.858%,rgba(19, 19, 19, 0.03) 42.858%, rgba(19, 19, 19, 0.03) 57.144%,rgba(101, 101, 101, 0.03) 57.144%, rgba(101, 101, 101, 0.03) 71.42999999999999%,rgba(205, 205, 205, 0.03) 71.43%, rgba(205, 205, 205, 0.03) 85.71600000000001%,rgba(53, 53, 53, 0.03) 85.716%, rgba(53, 53, 53, 0.03) 100.002%),linear-gradient(45deg, rgba(214, 214, 214, 0.03) 0%, rgba(214, 214, 214, 0.03) 16.667%,rgba(255, 255, 255, 0.03) 16.667%, rgba(255, 255, 255, 0.03) 33.334%,rgba(250, 250, 250, 0.03) 33.334%, rgba(250, 250, 250, 0.03) 50.001000000000005%,rgba(231, 231, 231, 0.03) 50.001%, rgba(231, 231, 231, 0.03) 66.668%,rgba(241, 241, 241, 0.03) 66.668%, rgba(241, 241, 241, 0.03) 83.33500000000001%,rgba(31, 31, 31, 0.03) 83.335%, rgba(31, 31, 31, 0.03) 100.002%),linear-gradient(59deg, rgba(224, 224, 224, 0.03) 0%, rgba(224, 224, 224, 0.03) 12.5%,rgba(97, 97, 97, 0.03) 12.5%, rgba(97, 97, 97, 0.03) 25%,rgba(143, 143, 143, 0.03) 25%, rgba(143, 143, 143, 0.03) 37.5%,rgba(110, 110, 110, 0.03) 37.5%, rgba(110, 110, 110, 0.03) 50%,rgba(34, 34, 34, 0.03) 50%, rgba(34, 34, 34, 0.03) 62.5%,rgba(155, 155, 155, 0.03) 62.5%, rgba(155, 155, 155, 0.03) 75%,rgba(249, 249, 249, 0.03) 75%, rgba(249, 249, 249, 0.03) 87.5%,rgba(179, 179, 179, 0.03) 87.5%, rgba(179, 179, 179, 0.03) 100%),linear-gradient(241deg, rgba(58, 58, 58, 0.02) 0%, rgba(58, 58, 58, 0.02) 25%,rgba(124, 124, 124, 0.02) 25%, rgba(124, 124, 124, 0.02) 50%,rgba(254, 254, 254, 0.02) 50%, rgba(254, 254, 254, 0.02) 75%,rgba(52, 52, 52, 0.02) 75%, rgba(52, 52, 52, 0.02) 100%),linear-gradient(90deg, #ffffff,#ffffff); */
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
		font-size: var(--l);
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
			font-size: 1.4rem;
		}
	}
</style>
