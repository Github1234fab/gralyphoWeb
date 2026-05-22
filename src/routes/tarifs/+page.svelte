<script>
	import TarifsCards from '../../Components/Tarifs-Cards.svelte';
	import Mouse from '../../Components/Mouse.svelte';
	import Header from '../../sections/Header.svelte';
	import { fade } from 'svelte/transition';
	import Form from '../../Components/Form.svelte';

	let tabTarifs = [
		{
			titleH1: 'Site Web',
			titleH2: 'Création de site Internet',
			tarifEuro: '799€',
			subTarifEuro: 'À partir de ',
			rubriques: [
				'Landing Page (page unique)',
				'Développement Front-End',
				'Filtre de vitesse d\'élite',
				'Référencement SEO technique',
				'Design Responsive premium',
				'Déploiement sur serveur'
			]
		},
		{
			titleH1: 'Applications',
			titleH2: "Création d'applications Web",
			tarifEuro: '5499€',
			subTarifEuro: 'À partir de ',
			rubriques: [
				'Design UI / UX sur-mesure',
				'Architecture UML & Base de données',
				'Développement Front-End agile',
				'Développement Back-End sécurisé',
				'Déploiement sur serveurs Cloud',
				'Finition et support technique'
			]
		},
		{
			titleH1: 'Référencement',
			titleH2: 'SEO / SEA Pro',
			tarifEuro: '699€',
			subTarifEuro: 'À partir de ',
			rubriques: [
				'Audit de concurrence complet',
				'Recherche approfondie de mots-clés',
				'Optimisation sémantique & technique',
				'Stratégie de maillage & Backlinks',
				'Rapports de performance mensuels'
			]
		},
		{
			titleH1: 'Médias ',
			titleH2: 'Community Manager',
			tarifEuro: '599€',
			subTarifEuro: 'À partir de ',
			rubriques: [
				"Plan d'action social media",
				'Création de calendriers éditoriaux',
				'Rédaction de posts & Reels pro',
				'Animation active de la communauté',
				'Optimisation du taux d\'engagement'
			]
		},
		{
			titleH1: 'Design',
			titleH2: "Identité de Marque & Refonte",
			tarifEuro: '899€',
			subTarifEuro: 'À partir de ',
			rubriques: [
				"Identité graphique sur-mesure",
				'Conception de logo vectoriel',
				'Refonte esthétique de site existant',
				'Fourniture de charte graphique complète'
			]
		},
		{
			titleH1: 'Stratégie',
			titleH2: 'Conseil & Audit Digital',
			tarifEuro: '999€',
			subTarifEuro: 'À partir de ',
			rubriques: [
				'Audit de site internet existant',
				'Analyse fine de votre marché',
				'Définition d\'une stratégie marketing',
				'Plan d\'action d\'acquisition ciblé',
				'Analyse poussée des performances'
			]
		}
	];
</script>

<svelte:head>
	<title>Nos Tarifs d'Agence Web, Mobile & SEO à Lyon | Gralypho</title>
	<meta name="description" content="Découvrez les tarifs clairs et transparents de l'agence web Gralypho : création de site internet vitrine, e-commerce, application PWA et référencement SEO." />
	<meta property="og:title" content="Tarifs Création Web & SEO d'Élite | Gralypho" />
	<meta property="og:description" content="Des offres sur-mesure adaptées à vos objectifs de croissance et à votre budget. Site vitrine à partir de 799€." />
	<meta property="og:url" content="https://gralypho.com/tarifs" />
	<link rel="canonical" href="https://gralypho.com/tarifs" />
</svelte:head>

<Header />
<Mouse />

<main class="page-container" in:fade={{ duration: 1000 }}>
	<!-- Halos lumineux d'arrière-plan -->
	<div class="glow-orb orb-1"></div>
	<div class="glow-orb orb-2"></div>

	<!-- En-tête Tarifs -->
	<div class="tarifs-hero">
		<h1 class="title">Nos <span class="highlight-text">Tarifs</span></h1>
		<p class="subtitle">
			L'agence Gralypho applique une tarification transparente, juste et sur-mesure. <br />
			Chaque offre est calibrée selon l'ingénierie et la complexité technique nécessaires pour dépasser vos objectifs.
		</p>
	</div>

	<!-- Grille des Offres -->
	<div class="tarifs-grid">
		{#each tabTarifs as tarif, index (tarif)}
			<TarifsCards
				{index}
				titleH1={tarif.titleH1}
				titleH2={tarif.titleH2}
				tarifEuro={tarif.tarifEuro}
				subTarifEuro={tarif.subTarifEuro}
				rubriques={tarif.rubriques}
			/>
		{/each}
	</div>

	<!-- Formulaire de Devis -->
	<div id="form" class="wrapper-form">
		<Form />
	</div>
</main>

<style>
	.page-container {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		padding: 6rem 2rem 4rem 2rem;
		background-color: var(--primary);
		position: relative;
		overflow: hidden;
		min-height: 100vh;
	}

	/* Halos lumineux en arrière-plan */
	.glow-orb {
		position: absolute;
		border-radius: 50%;
		filter: blur(120px);
		opacity: 0.1;
		pointer-events: none;
		z-index: 1;
	}
	.orb-1 {
		width: 500px;
		height: 500px;
		background: var(--cta, #1481ba);
		top: 15%;
		left: -200px;
	}
	.orb-2 {
		width: 600px;
		height: 600px;
		background: var(--green, #D6A319);
		bottom: 25%;
		right: -350px;
	}

	.tarifs-hero {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		text-align: center;
		margin-bottom: 4rem;
		margin-top: 2rem;
		max-width: 900px;
		z-index: 3;
	}

	.title {
		font-family: var(--Geologica), sans-serif;
		font-size: clamp(2.5rem, 5vw, 4.5rem);
		font-weight: 900;
		color: #ffffff;
		margin: 0 0 1rem 0;
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
		font-size: clamp(1rem, 2vw, 1.2rem);
		font-weight: 300;
		color: rgba(255, 255, 255, 0.7);
		line-height: 1.7;
		margin: 0;
	}

	.tarifs-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
		gap: 2.5rem;
		width: 100%;
		max-width: 1200px;
		margin-bottom: 4rem;
		z-index: 3;
		justify-items: center;
	}

	.wrapper-form {
		width: 100%;
		z-index: 3;
	}

	@media screen and (max-width: 768px) {
		.page-container {
			padding: 5rem 1.25rem;
		}
	}
</style>
