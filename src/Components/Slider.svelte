<script>
	import Photo from '../Assets/portfolio/photo.png';
	import Guitare from '../Assets/cours-guitare.png';
	import myFood from '../Assets/portfolio/myFood.png';

	import Booki from '../Assets/portfolio/booki.png';
	import Morpion from '../Assets/portfolio/morpion.png';
	import Meteo from '../Assets/portfolio/meteo.png';
	import Rocket from '../Assets/portfolio/rocket.png';
	import LionTaxi from '../Assets/portfolio/taxi.png';
	import Todo from '../Assets/portfolio/todo.png';
	import Issétys from '../Assets/portfolio/issetys.png';
	import synthetiser from '../Assets/png-gralypho/application_synthtiser.png';
	import Pendu from '../Assets/png-gralypho/lependu_application.png';
	import Info from '../Assets/png-gralypho/site internet_presse.png';
	import gps from '../Assets/gps2.png';
	import Alcaix from '../Assets/alcaix-coach.png';

	let currentIndex = 0;
	const slides = [
		{
			title: 'Site vitrine',
			image: Alcaix,
			lien: 'https://www.frederiquealcaix.fr/'
		},
		{
			title: 'PWA',
			image: gps,
			lien: 'https://legendary-fairy-b3532c.netlify.app//'
		},
		{
			title: 'Site web - Rocket Agency',
			image: Rocket,
			lien: 'https://fabienmarceau.com/RocketAgencyProject%20copie/index.html'
		},

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
			image: myFood,
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
			title: 'Site vitrine',
			image: Guitare,
			lien: 'https://cours-guitare-domicile-lyon.com/'
		},
		{
			title: 'Application-To Do List',
			image: Todo,
			lien: 'https://main--gralyshoplist.netlify.app/'
		},
		{
			title: 'Application - Pendu',
			image: Pendu,
			lien: 'https://dupen.netlify.app/'
		},
		{
			title: 'Application - Synthtiser',
			image: synthetiser,
			lien: 'https://synthetizer.netlify.app/'
		},
		{
			title: 'Site web - Presse',
			image: Info,
			lien: 'https://fanciful-taiyaki-b32670.netlify.app/'
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
				<img class="img" src={slide.image} alt={slide.title} />
			</div>
		{/each}
	</div>
</div>

<style>
	.slider {
		border: 0px solid white;
		width: 100%;
		height: 600px;
		border-radius: 10px;
		overflow: hidden;
		margin: 40px auto;
		position: relative;
		/* box-shadow: 20px 20px 50px rgba(0, 0, 0, 0.342); */
		margin-bottom: 100px;
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
		height: 600px;
		object-fit: cover;
	}

	.navigation {
		position: absolute;
		top: 50%;
		width: 100%;
		display: flex;
		justify-content: space-between;
		transform: translateY(-50%);
		z-index: 1;
		padding: 50px;
	}

	button {
		background-color: transparent;
		border: none;
		color: rgb(255, 255, 255);
		padding: 10px;
		cursor: pointer;
		transition: 0.3s;
		width: 50px;
		height: 50px;
		font-size: 1rem;
		text-align: center;
		font-weight: bolder;
		background-color: var(--blue);
		border-radius: 50%;
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
	}
	button:hover {
		background-color: var(--blue);
		border: 2px solid white;
		width: 40px;
		height: 40px;
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
		width: 20%;
		align-items: center;
		justify-content: center;
	}
	.slide a:hover {
		background-color: var(--green);
		color: var(--primary);
		transition: 0.5s ease-in-out;
	}

	@media screen and (max-width: 768px) {
		.slider {
			height: 500px;
		}
		.img {
			width: 100%;
			height: 500px;
			object-fit: cover;
		}

		button {
			width: 30px;
			height: 30px;
			font-size: 0.8rem;
		}
	}
</style>
