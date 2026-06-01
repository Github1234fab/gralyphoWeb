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
	import Solair from '../Assets/Solair.png';
	import lePoilu from '../Assets/mockup_LePoilu.png';
	import APigment from '../Assets/mockup_AudioP.png';

	let currentIndex = 0;
	const slides = [
		{
			category: 'Site Web vitrine & marchand',
			title: 'Le Poilu',
			image: lePoilu,
			lien: 'https://lepoilu.com/'
		},
		{
			category: 'Site Web vitrine',
			title: 'Audio Pigments',
			image: APigment,
			lien: 'https://www.audipigments.com/'
		},
		{
			category: 'Landing Page',
			title: 'Solair Confort',
			image: Solair,
			lien: 'https://solairconfort-offre.fr/'
		},
		{
			category: 'Site Vitrine Pro',
			title: 'Frédérique Alcaix - Coach',
			image: Alcaix,
			lien: 'https://www.frederiquealcaix.fr/'
		},
		{
			category: 'Application PWA',
			title: 'Géolocalisation & Cartographie',
			image: gps,
			lien: 'https://legendary-fairy-b3532c.netlify.app/'
		},
		{
			category: 'Site Web Animé',
			title: 'Rocket Agency',
			image: Rocket,
			lien: 'https://fabienmarceau.com/RocketAgencyProject%20copie/index.html'
		},
		{
			category: 'Site Web Marchand',
			title: 'Le Lion Taxi',
			image: LionTaxi,
			lien: 'https://taxi-lyon-aeroport-rhone.com'
		},
		{
			category: 'Maquette Intégrée',
			title: 'Booki - Plateforme hébergement',
			image: Booki,
			lien: 'https://fabienmarceau.com/Booki/index.html'
		},
		{
			category: 'Portfolio Photographe',
			title: 'Gralypho Photography',
			image: Photo,
			lien: 'https://fabienmarceau.com/gralyphoPhotography/index.html'
		},
		{
			category: 'Intégration Graphique',
			title: 'Oh My Food - Gastronomie',
			image: myFood,
			lien: 'https://fabienmarceau.com/myFood/index.html'
		},
		{
			category: "Site d'École",
			title: 'Issétys - École de Musique Lyon',
			image: Issétys,
			lien: 'https://www.ecole-musique-lyon-issetys.com/'
		},
		{
			category: 'Application Web',
			title: 'Météo Live & API',
			image: Meteo,
			lien: 'https://fabienmarceau.com/meteo/index.html'
		},
		{
			category: 'Module de Jeu',
			title: 'Morpion / Tic Tac Toe',
			image: Morpion,
			lien: 'https://fabienmarceau.com/tic-tac-toe/index.html'
		},
		{
			category: 'Site Vitrine',
			title: 'Cours de Guitare à Lyon',
			image: Guitare,
			lien: 'https://cours-guitare-domicile-lyon.com/'
		},
		{
			category: 'Application de Productivité',
			title: 'To-Do List Interactive',
			image: Todo,
			lien: 'https://main--gralyshoplist.netlify.app/'
		},
		{
			category: 'Module Ludique',
			title: 'Jeu du Pendu Pédagogique',
			image: Pendu,
			lien: 'https://dupen.netlify.app/'
		},
		{
			category: 'Application Audio',
			title: 'Synthétiseur de musique',
			image: synthetiser,
			lien: 'https://synthetizer.netlify.app/'
		},
		{
			category: 'Plateforme Média',
			title: 'Info Détox - Presse objective',
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
	<!-- Flèches de navigation de luxe en verre dépoli -->
	<button class="nav-btn prev-btn" on:click={previousSlide} aria-label="Précédent">
		<svg viewBox="0 0 24 24" class="arrow-svg" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
			<polyline points="15 18 9 12 15 6"></polyline>
		</svg>
	</button>
	<button class="nav-btn next-btn" on:click={nextSlide} aria-label="Suivant">
		<svg viewBox="0 0 24 24" class="arrow-svg" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
			<polyline points="9 18 15 12 9 6"></polyline>
		</svg>
	</button>

	<!-- Diapo en défilement -->
	<div class="slides" style="transform: translateX(-{currentIndex * 100}%);">
		{#each slides as slide}
			<div class="slide">
				<img class="img" src={slide.image} alt={slide.title} />

				<!-- Carte d'informations en verre dépoli -->
				<div class="slide-info-card">
					<span class="slide-tag">{slide.category}</span>
					<h3 class="slide-title">{slide.title}</h3>
					<a href={slide.lien} target="_blank" rel="noopener noreferrer" class="slide-visit-btn">
						Visiter le site
						<svg xmlns="http://www.w3.org/2000/svg" class="visit-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
							<line x1="5" y1="12" x2="19" y2="12"></line>
							<polyline points="12 5 19 12 12 19"></polyline>
						</svg>
					</a>
				</div>
			</div>
		{/each}
	</div>
</div>

<style>
	.slider {
		width: 100%;
		height: 550px;
		border-radius: 24px;
		overflow: hidden;
		margin: 20px auto 60px auto;
		position: relative;
		border: 1px solid rgba(255, 255, 255, 0.06);
		box-shadow: 0 30px 60px rgba(0, 0, 0, 0.4);
	}

	.slides {
		display: flex;
		height: 100%;
		transition: transform 0.65s cubic-bezier(0.4, 0, 0.2, 1);
	}

	.slide {
		flex: 0 0 100%;
		height: 100%;
		position: relative;
		overflow: hidden;
		box-sizing: border-box;
	}

	.img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		transition: transform 1.2s cubic-bezier(0.4, 0, 0.2, 1);
	}

	.slide:hover .img {
		transform: scale(1.04);
	}

	/* Flèches directionnelles épurées */
	.nav-btn {
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		width: 48px;
		height: 48px;
		border-radius: 50%;
		background: rgba(13, 18, 31, 0.5);
		border: 1px solid rgba(255, 255, 255, 0.1);
		backdrop-filter: blur(8px);
		-webkit-backdrop-filter: blur(8px);
		color: #ffffff;
		cursor: pointer;
		display: flex;
		align-items: center;
		justify-content: center;
		z-index: 10;
		transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
	}

	.nav-btn:hover {
		background: var(--green, #d6a319);
		border-color: var(--green, #d6a319);
		color: var(--primary);
		transform: translateY(-50%) scale(1.08);
		box-shadow: 0 0 20px rgba(214, 163, 25, 0.4);
	}

	.prev-btn {
		left: 24px;
	}

	.next-btn {
		right: 24px;
	}

	.arrow-svg {
		width: 18px;
		height: 18px;
	}

	/* Carte d'information en verre dépoli suspendue */
	.slide-info-card {
		position: absolute;
		bottom: 35px;
		left: 35px;
		background: rgba(13, 18, 31, 0.65);
		border: 1px solid rgba(255, 255, 255, 0.08);
		backdrop-filter: blur(16px);
		-webkit-backdrop-filter: blur(16px);
		padding: 1.75rem;
		border-radius: 20px;
		width: 100%;
		max-width: 360px;
		display: flex;
		flex-direction: column;
		gap: 0.4rem;
		box-shadow: 0 20px 40px rgba(0, 0, 0, 0.35);
		z-index: 5;
		text-align: left;
		transition: all 0.3s ease;
	}

	.slide-tag {
		font-family: var(--Geologica), sans-serif;
		font-size: 0.65rem;
		font-weight: 700;
		color: var(--green, #d6a319);
		text-transform: uppercase;
		letter-spacing: 0.08em;
	}

	.slide-title {
		font-family: var(--Geologica), sans-serif;
		font-size: 1.2rem;
		font-weight: 800;
		color: #ffffff;
		margin: 0 0 0.8rem 0;
		line-height: 1.35;
	}

	.slide-visit-btn {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		gap: 8px;
		background: var(--cta, #1481ba);
		color: #ffffff;
		font-family: var(--Geologica), sans-serif;
		font-weight: 700;
		font-size: 0.75rem;
		text-transform: uppercase;
		letter-spacing: 0.05em;
		text-decoration: none;
		padding: 10px 22px;
		border-radius: 50px;
		box-shadow: 0 4px 12px rgba(20, 129, 186, 0.25);
		transition: all 0.3s ease;
		align-self: flex-start;
	}

	.slide-visit-btn:hover {
		background: #ffffff;
		color: var(--primary);
		box-shadow: 0 6px 18px rgba(255, 255, 255, 0.25);
		transform: translateY(-2px);
	}

	.visit-icon {
		width: 14px;
		height: 14px;
		transition: transform 0.3s ease;
	}

	.slide-visit-btn:hover .visit-icon {
		transform: translateX(4px);
	}

	@media screen and (max-width: 768px) {
		.slider {
			height: 480px;
			border-radius: 16px;
			margin-bottom: 30px;
		}

		.nav-btn {
			width: 38px;
			height: 38px;
		}

		.prev-btn {
			left: 10px;
		}

		.next-btn {
			right: 10px;
		}

		.slide-info-card {
			bottom: 20px;
			left: 20px;
			right: 20px;
			width: auto;
			max-width: none;
			padding: 1.25rem;
		}

		.slide-title {
			font-size: 1rem;
			margin-bottom: 0.5rem;
		}
	}
</style>
