<script>
	import { onMount } from 'svelte';
	import TestimonyCards from '../Components/TestimonyCards.svelte';
	import profilOne from '../Assets/Profils-gralypho/Frame (2).png';
	import profilTwo from '../Assets/Profils-gralypho/Frame (5).png';
	import profilThree from '../Assets/Profils-gralypho/Frame (12).png';
	import profilFour from '../Assets/Profils-gralypho/Ellipse 125.png';
	import profilFive from '../Assets/Profils-gralypho/Ellipse 131.png';
	import profilSix from '../Assets/Profils-gralypho/Ellipse 220.png';

	let dataCard = [
		{
			img: profilFive,
			alt: "Photo de Damien, Électricien à Messimy",
			title: 'Damien L.',
			job: 'Électricien à Messimy (69)',
			p: "Gralypho a créé mon site et configuré ma fiche Google Maps. Aujourd'hui, je reçois 3 à 4 appels de nouveaux clients locaux par semaine directement grâce à Google. L'investissement a été rentabilisé en un mois !"
		},
		{
			img: profilTwo,
			alt: "Photo de Sophie, Ostéopathe à Craponne",
			title: 'Sophie R.',
			job: 'Ostéopathe à Craponne (69)',
			p: "Grâce au système de prise de rendez-vous simple installé par l'agence, mon agenda de consultations se remplit tout seul. Les patients de Craponne et Francheville me trouvent en premier sur Google."
		},
		{
			img: profilSix,
			alt: "Photo de Hugo, restaurateur à Tassin",
			title: 'Hugo H.',
			job: 'Restaurateur à Tassin-la-Demi-Lune (69)',
			p: "Notre site de vente à emporter fonctionne à merveille. Zéro commission par rapport aux plateformes classiques, nos clients adorent la rapidité de commande. Une vraie agence de proximité très réactive."
		},
		{
			img: profilOne,
			alt: "Photo d'Inès, photographe à Vaugneray",
			title: 'Inès M.',
			job: 'Photographe à Vaugneray (69)',
			p: "Très satisfaite de mon site vitrine. Gralypho a su traduire mon univers visuel sans jargon technique. Un accompagnement en or et des explications claires à chaque étape."
		}
	];
</script>

<section class="J-section">
	<div class="wrapper-text">
		<h2>Ils nous font <span class="highlight-text">confiance</span></h2>
		<p class="subtitle">Découvrez comment nous aidons concrètement les artisans et commerçants de notre région.</p>
	</div>

	<div class="gallery">
		<div class="wrapper-contain">
			{#each dataCard as card}
				<TestimonyCards
					title={card.title}
					job={card.job}
					p={card.p}
					img={card.img}
					alt={card.alt}
				/>
			{/each}
		</div>
	</div>
</section>

<style>
	.J-section {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		width: 100%;
		background-color: var(--primary);
		position: relative;
		overflow: hidden;
		padding: 6rem 2rem 4rem 2rem;
		gap: 3rem;
	}

	.wrapper-text {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		text-align: center;
		gap: 1rem;
		max-width: 800px;
		z-index: 3;
	}

	.J-section h2 {
		font-family: var(--Geologica), sans-serif;
		font-size: clamp(2.2rem, 5vw, 3.2rem);
		color: #ffffff;
		font-weight: 900;
		margin: 0;
		letter-spacing: -0.03em;
		line-height: 1.15;
	}

	.highlight-text {
		background: linear-gradient(135deg, var(--green, #D6A319) 0%, #ffffff 100%);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}

	.subtitle {
		font-family: var(--Red), sans-serif;
		font-size: clamp(1rem, 2vw, 1.15rem);
		font-weight: 300;
		color: rgba(255, 255, 255, 0.75);
		line-height: 1.6;
		margin: 0;
	}

	.gallery {
		overflow-x: auto;
		width: 100%;
		max-width: 1200px;
		z-index: 3;
		padding-bottom: 20px;
	}

	.wrapper-contain {
		display: flex;
		flex-direction: row;
		flex-wrap: nowrap;
		border-radius: 20px;
		justify-content: start;
		align-items: center;
		gap: 30px;
		overflow-x: auto; /* Permet le défilement horizontal */
		scrollbar-width: none;
	}

	.wrapper-contain::-webkit-scrollbar {
		display: none;
	}

	@media screen and (max-width: 768px) {
		.J-section {
			padding: 4rem 1.25rem;
			gap: 2rem;
		}
	}
</style>
