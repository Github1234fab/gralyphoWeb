<script>
	import Rocket from '../Assets/png-gralypho/rocketAgency.png';
	import Todo from '../Assets/png-gralypho/todolist.png';
	import Morpion from '../Assets/png-gralypho/morpion.png';
	import Meteo from '../Assets/png-gralypho/météo.png';
	import Horloge from '../Assets/png-gralypho/horloge.png';
	import Drapeaux from '../Assets/png-gralypho/flaggame.png';
	import OhMyFood from '../Assets/png-gralypho/ohmyfood.png';
	import Booki from '../Assets/png-gralypho/booki.png';
	import LionTaxi from '../Assets/png-gralypho/leliontaxi.png';
	import Issétys from '../Assets/png-gralypho/issétys.png';
	import photographie from '../Assets/png-gralypho/photographie.png';

	let currentIndex = 0;
	const slides = [
		{
			title: 'Site web - Rocket Agency',
			image: Rocket,
			lien: 'https://fabienmarceau.com/RocketAgencyProject%20copie/index.html'
		},
		{
			title: 'Site web - École de musique Issétys',
			image: Issétys,
			lien: 'https://www.ecole-musique-lyon-issetys.com'
		},
		{
			title: 'Site web - Le lion Taxi',
			image: LionTaxi,
			lien: 'https://taxi-lyon-aeroport-rhone.com'
		},
		{ title: 'Site web - Booki', image: Booki, lien: 'https://fabienmarceau.com/Booki/index.html' },
		{
			title: 'Landing Page-Photographie',
			image: photographie,
			lien: 'https://fabienmarceau.com/gralyphoPhotography/index.html'
		},
		{
			title: 'Site web - Oh my Food',
			image: OhMyFood,
			lien: 'https://fabienmarceau.com/myFood/index.html'
		},
		{
			title: 'Application jeux - Drapeaux',
			image: Drapeaux,
			lien: 'https://fabienmarceau.com/dist/index.html'
		},
		{
			title: 'Application  - Météo',
			image: Meteo,
			lien: 'https://fabienmarceau.com/meteo/index.html'
		},
		{
			title: 'Application - Morpion',
			image: Morpion,
			lien: 'https://fabienmarceau.com/tic-tac-toe/index.html'
		},
		{
			title: 'Composant - Horloge',
			image: Horloge,
			lien: 'https://fabienmarceau.com/horloge/index.html'
		},
		{
			title: 'Application-To Do List',
			image: Todo,
			lien: 'https://main--gralyshoplist.netlify.app/'
		}
	];

	const nextSlide = () => {
		currentIndex = (currentIndex + 1) % slides.length;
	};

	const previousSlide = () => {
		currentIndex = (currentIndex - 1 + slides.length) % slides.length;
	};
</script>

<div class="slider">
	<div class="navigation">
		<button on:click={previousSlide}>&lt;</button>
		<button on:click={nextSlide}>&gt;</button>
	</div>
	<div class="slides" style="transform: translateX(-{currentIndex * 100}%);">
		{#each slides as slide}
			<div class="slide">
				<a href={slide.lien} target="_blank">Visitez</a>
				<!-- <h3 class="title">{slide.title}</h3> -->
				<img class="img" src={slide.image} alt={slide.title} />
			</div>
		{/each}
	</div>
</div>

<style>
	.slider {
		width: 85%;
		border-radius: 5px;
		/* max-width: 800px; */
		overflow: hidden;
		margin: 40px auto;
		position: relative;
		box-shadow: 0px 0px 10px 2px rgba(76, 76, 76, 0.35);
	}

	.slides {
		display: flex;
		transition: fade 0.5s ease-in-out;
	}

	@keyframes fade {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}

	.slide {
		flex: 0 0 100%; /* Chaque diapositive occupe 100% de la largeur du slider */
		box-sizing: border-box;
	}

	.img {
		width: 100%;
		height: auto;
		display: block;
	}

	.navigation {
		position: absolute;
		top: 50%;
		width: 100%;
		display: flex;
		justify-content: space-between;
		transform: translateY(-50%);
		z-index: 1;
	}

	button {
		background-color: transparent;
		border: none;
		color: white;
		padding: 10px;
		cursor: pointer;
		transition: background-color 0.3s;
		width: 100px;
		font-size: 2rem;
		font-weight: bolder;
	}
	button:hover {
		background-color: transparent;
		color: var(--cta);
	}

	button:hover {
		background-color: transparent;
	}

	.slide a {
		font-family: var(--Epilogue);
		font-weight: 300;
		padding: 20px;
		letter-spacing: -0.01em;
		font-size: 1rem;
		text-decoration: none;
		color: var(--whiteGrey);
		background-color: var(--cta);
		display: flex;
		max-width: 10%;
		align-items: center;
		justify-content: center;
	}
	.slide a:hover {
		background-color: var(--green);
		color: var(--primary);
		transition: 0.5s ease-in-out;
	}

	@media screen and (max-width: 768px) {
		.slide a {
			max-width: 25%;
		}
		.slider {
			width: 100%;
			border-radius: 5px;
			margin: 40px;
		}
	}
</style>
