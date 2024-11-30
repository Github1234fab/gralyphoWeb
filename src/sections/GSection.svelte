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

	let portfolioTab = [
		{
			type: 'Application',
			title: 'Tables',
			text: 'Application',
			img: animationSite,
			lien: 'https://fabienmarceau.com/theTables/index.html'
		},
		{
			type: 'Application',
			title: 'Shooping List Appli',
			text: 'Application',
			img: animationSite,
			lien: 'https://main--gralyshoplist.netlify.app/'
		},
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
			text: 'Taxi',
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
			lien: 'https://fabienmarceau.com/gralyphoPhotography/index.html'
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
			title: 'Resto',
			img: resa,
			lien: 'https://fabienmarceau.com/myFood/index.html'
		}
	];
</script>

<section class="G-section">
	<div class="wrapper-text">
		<h1>Nos <span>réalisations </span></h1>
		<h2>
			Découvrez l'étendue de nos compétences ! <br /> <span>Sites Web & Applications</span>
		</h2>
		<!-- <h3>
			Découvrez vite tout le potentiel du digital à travers les sites webs animés, les applications,
			les requêtes API, les jeux, les composants (...) .
		</h3> -->
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
		height: auto;
		width: 100%;
		font-size: 16px;
		background-color: var(--whiteGrey);
		padding: 20px;
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
		font-family: var(--Geologica);
		text-transform: uppercase;
		font-size: var(--s);
		color: var(--primary);
		font-weight: 600;
		margin-bottom: 40px;
		letter-spacing: -0.04em;
		margin-top: 40px;
		text-align: center;
	}
	.G-section h2 {
		font-family: var(--Geologica);
		font-size: var(--l);
		color: var(--primary);
		font-weight: 900;
		letter-spacing: -1px;
		text-align: center;
		min-width: 80%;
	}
	.G-section h2 span {
		font-weight: 500;
		font-size: 1.5rem;
	}
	/* .G-section h3 {
		font-family: poppins;
		font-size: var(--m);
		color: var(--primary);
		font-weight: 300;
		margin-bottom: 0px;
		letter-spacing: -0.01em;
		text-align: center;
		width: 100%;
		margin: 0 auto;
		margin-top: 10px;
		line-height: 25px;
	} */

	/* .wrapper-portfolio {
		grid-column: 2/12;
		grid-row: 2;
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
		margin-top: 100px;
		margin-bottom: 100px;
		gap: 15px;
	} */
	:global(.wrapper-portfolio) {
		flex: 1 1 10%;
	}
</style>
