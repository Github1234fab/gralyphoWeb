<script>
	import Photo from '../Assets/Visuels portfolio gralypho/pFolio__img-k.png';
	import Guitare from '../Assets/Visuels portfolio gralypho/pFolio__img-c.png';
	import OhMyFood from '../Assets/Visuels portfolio gralypho/pFolio__mg-d.png';
	import Booki from '../Assets/Visuels portfolio gralypho/pFolio__img-e.png';
	import Morpion from '../Assets/Visuels portfolio gralypho/pFolio__img-f.png';
	import Meteo from '../Assets/Visuels portfolio gralypho/pFolio__img-g.png';
	import Rocket from '../Assets/Visuels portfolio gralypho/pFolio__img-h.png';
	import LionTaxi from '../Assets/Visuels portfolio gralypho/pFolio__img-i.png';
	import Todo from '../Assets/Visuels portfolio gralypho/pFolio__img-j.png';
	import Issétys from '../Assets/Visuels portfolio gralypho/pFolio__img-l.png';

	let currentIndex = 0;
	const slides = [
		{
			title: 'Site web - Rocket Agency',
			image: Rocket,
			lien: 'https://fabienmarceau.com/RocketAgencyProject%20copie/index.html'
		},
		// {
		// 	title: 'Site web - École de musique Issétys',
		// 	image: Issétys,
		// 	lien: 'https://www.ecole-musique-lyon-issetys.com'
		// },
		{
			title: 'Site web - Le lion Taxi',
			image: LionTaxi,
			lien: 'https://taxi-lyon-aeroport-rhone.com'
		},
		{ title: 'Site web - Booki', image: Booki, lien: 'https://fabienmarceau.com/Booki/index.html' },
		{
			title: 'Landing Page-Photographie',
			image: Photo,
			lien: 'https://fabienmarceau.com/gralyphoPhotography/index.html'
		},
		{
			title: 'Site web - Oh my Food',
			image: OhMyFood,
			lien: 'https://fabienmarceau.com/myFood/index.html'
		},
		{
			title: 'Site web - Issétys',
			image: Issétys,
			lien: 'https://www.ecole-musique-lyon-issetys.com/'
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
			image: Guitare,
			lien: 'https://cours-guitare-domicile-lyon.com/'
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
		overflow: hidden;
		margin: 60px auto;
		position: relative;
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
		width: 50px;
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
			height: 450px;
			overflow: hidden;
			margin: 90px auto;
			position: relative;
		
		}

		.img {
			width: 100%;
			height: auto;
			display: block;
		}
	}
	@media screen and (max-width: 550px) {
		.slide a {
			max-width: 25%;
		}
		.slider {
			min-width: 100%;
			border-radius: 5px;
			height: 400px;
			overflow: hidden;
			margin: 50px auto;
			position: relative;
			/* border: 1px solid grey; */
		}

		.img {
			width: 100%;
			height: 100%;
			display: block;
		}
	}
</style>
