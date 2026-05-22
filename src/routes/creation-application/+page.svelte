<script>
	import Header from '../../sections/Header.svelte';
	import Mouse from '../../Components/Mouse.svelte';
	import CardTarifs from '../../Components/CardTarifs.svelte';
	import FaqLink from '../../Components/FaqLink.svelte';
	import Form from '../../Components/Form.svelte';
	import Link from '../../Components/LinkSiteApplication.svelte';

	let pwa = [
		{
			name: 'Progressive Web App (PWA)',
			h2: 'Application Web ultra-rapide \n Multiplateforme & légère',
			h3: 'Idéal pour : Entreprises, commerçants, événementiel, services et applications internes',
			h4: ['Délai : 15 jours', 'Accessible sans téléchargement', 'Zéro commission App Store'],
			li: [
				'Accessible instantanément via un simple lien sans passer par les Stores d\'applications',
				'Totalement compatible multi-plateformes (iOS, Android, Tablettes, PC)',
				'Performances extrêmes et chargement instantané grâce à la mise en cache active',
				'Indexable par Google et moteurs de recherche (excellent SEO-friendly)',
				'Mode hors-ligne performant grâce aux technologies de Service Worker',
				'Mises à jour instantanées en arrière-plan sans validation fastidieuse des Stores',
				'Notifications push puissantes pour fidéliser vos utilisateurs'
			],
			tarif: '6999 € TTC'
		}
	];

	let native = [
		{
			name: 'Application Native iOS & Android',
			h2: 'Puissance maximale et performances graphiques absolues',
			h3: 'Idéal pour : Marques de prestige, services géolocalisés avancés, projets complexes, AR/VR',
			h4: ['Délai : 20-30 jours', 'Double déploiement iOS & Android', 'Accès total aux capteurs du mobile'],
			li: [
				'Expérience utilisateur (UX/UI) ultra-fluide et animations d\'élite en 60fps',
				'Accès complet aux fonctions matérielles du smartphone (GPS, Bluetooth, Appareil photo, NFC...)',
				'Monétisation facilitée par le biais d\'abonnements ou d\'achats in-app natifs',
				'Présence officielle sur les Stores (App Store d\'Apple & Google Play Store), gage d\'autorité',
				'Notifications push natives avancées pour des alertes instantanées même écran verrouillé',
				'Sécurité matérielle maximale et stockage de données local crypté'
			],
			tarif: '9999 € TTC'
		}
	];
</script>

<svelte:head>
	<title>Création d'Application Web & Mobile à Lyon | PWA et Native | Gralypho</title>
	<meta name="description" content="Gralypho conçoit des applications mobiles et progressives (PWA) sur-mesure à Lyon et dans l'Ouest Lyonnais. Vitesse extrême, sécurité et design UX d'élite." />
	<meta property="og:title" content="Création d'Application Mobile & Progressive PWA à Lyon | Gralypho" />
	<meta property="og:description" content="Développement d'applications sur-mesure natives et PWA à Lyon. Performance d'exception et intégration complète des fonctionnalités mobiles." />
	<meta property="og:url" content="https://gralypho.com/creation-application" />
	<meta property="og:type" content="website" />
	<meta property="og:image" content="/logoGralypho2.jpeg" />
	<link rel="canonical" href="https://gralypho.com/creation-application" />
</svelte:head>

<Header />
<Mouse />

<main class="page-container">
	<!-- Halos lumineux décoratifs d'arrière-plan -->
	<div class="glow-orb orb-1"></div>
	<div class="glow-orb orb-2"></div>

	<!-- Hero section introductive -->
	<div class="wrapper__hero">
		<h1 class="title">Création d'<span class="highlight-text">Application Mobile</span></h1>
		<h2 class="subtitle">PWA légère ou Application Native puissante ?</h2>
		
		<p class="intro-pitch">
			Propulsez votre service directement sur les écrans de vos clients. Selon la nature de votre projet et votre budget, nous concevons des applications Web Progressives (PWA) agiles, installables directement via navigateur sans passer par les Stores, ou des applications mobiles Natives robustes (iOS/Android) tirant parti de toute la puissance des téléphones.
		</p>

		<div class="comparison-grid">
			<div class="comp-card">
				<h3>📱 Progressive Web App (PWA)</h3>
				<p>Rapide et économique. C’est un site web optimisé qui se comporte comme une application mobile. Elle s'installe sur le téléphone en 1 clic sans passer par l'App Store, fonctionne hors-ligne et envoie des notifications push.</p>
			</div>
			<div class="comp-card">
				<h3>💎 Application Native</h3>
				<p>Puissante et sans limites. Développée sur-mesure pour iOS et Android, elle utilise 100% des capacités physiques du téléphone (GPS, Bluetooth, biométrie). Publiée sur l'App Store et Google Play, elle incarne la crédibilité maximale.</p>
			</div>
		</div>
	</div>

	<!-- Section PWA -->
	<div class="wrapper__component">
		<h2>Notre offre d'applications <span class="highlight-text">PWA</span></h2>
		
		<p class="section-desc">
			La Progressive Web App est la solution idéale pour lancer un produit rapidement sur le marché avec des coûts de développement réduits. Accessible par URL, elle s'adapte à tous les écrans (mobile, tablette, desktop) et élimine les barrières de téléchargement.
		</p>
		
		<div class="wrapper__offres-tarifs">
			{#each pwa as item}
				<CardTarifs name={item.name} h2={item.h2} h3={item.h3} h4={item.h4} li={item.li} tarif={item.tarif} />
			{/each}
		</div>
	</div>

	<!-- Section Native -->
	<div class="wrapper__component">
		<h2>Notre offre d'applications <span class="highlight-text">Natives iOS & Android</span></h2>
		
		<p class="section-desc">
			Pour une expérience utilisateur sans le moindre compromis, une vitesse d'exécution absolue et une intégration matérielle complète. C'est le choix privilégié des marques haut de gamme et des applications nécessitant de lourds calculs.
		</p>
		
		<div class="wrapper__offres-tarifs">
			{#each native as item}
				<CardTarifs name={item.name} h2={item.h2} h3={item.h3} h4={item.h4} li={item.li} tarif={item.tarif} />
			{/each}
		</div>
	</div>

	<!-- FAQ et Liens d'offres -->
	<div class="wrapper__faqLink">
		<FaqLink />
		<Link />
	</div>

	<!-- Formulaire de contact final -->
	<Form />
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
		top: 10%;
		left: -200px;
	}
	.orb-2 {
		width: 600px;
		height: 600px;
		background: var(--green, #D6A319);
		bottom: 30%;
		right: -350px;
	}

	.wrapper__hero {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		width: 100%;
		max-width: 1100px;
		background: rgba(255, 255, 255, 0.02);
		border: 1px solid rgba(255, 255, 255, 0.05);
		border-radius: 28px;
		padding: 4rem 3rem;
		margin-bottom: 4rem;
		gap: 1.5rem;
		z-index: 3;
		backdrop-filter: blur(10px);
		-webkit-backdrop-filter: blur(10px);
		box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
	}

	.title {
		font-family: var(--Geologica), sans-serif;
		font-size: clamp(2.2rem, 5vw, 4.2rem);
		color: #ffffff;
		font-weight: 900;
		text-align: center;
		letter-spacing: -0.03em;
		margin: 0;
		line-height: 1.15;
	}

	.highlight-text {
		background: linear-gradient(135deg, var(--green, #D6A319) 0%, #ffffff 100%);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}

	.subtitle {
		font-family: var(--Red), sans-serif;
		font-size: clamp(1.1rem, 2.2vw, 1.5rem);
		font-weight: 400;
		color: rgba(255, 255, 255, 0.85);
		margin: 0 0 1rem 0;
		text-align: center;
	}

	.intro-pitch {
		font-family: var(--Red), sans-serif;
		font-size: 1.05rem;
		font-weight: 300;
		line-height: 1.8;
		color: rgba(255, 255, 255, 0.75);
		text-align: center;
		max-width: 850px;
		margin: 0;
	}

	.comparison-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		gap: 2rem;
		width: 100%;
		margin-top: 2.5rem;
	}

	.comp-card {
		background: rgba(255, 255, 255, 0.02);
		border: 1px solid rgba(255, 255, 255, 0.05);
		padding: 2.2rem;
		border-radius: 20px;
		transition: all 0.3s ease;
	}
	.comp-card:hover {
		border-color: rgba(255, 255, 255, 0.15);
		background: rgba(255, 255, 255, 0.04);
	}
	.comp-card h3 {
		font-family: var(--Geologica), sans-serif;
		font-size: 1.15rem;
		font-weight: 700;
		color: #ffffff;
		margin: 0 0 12px 0;
	}
	.comp-card p {
		font-family: var(--Red), sans-serif;
		font-size: 0.9rem;
		line-height: 1.6;
		color: rgba(255, 255, 255, 0.65);
		margin: 0;
		text-align: left;
	}

	/* Sections de services */
	.wrapper__component {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		width: 100%;
		max-width: 1200px;
		padding: 3rem 0;
		margin-top: 2rem;
		z-index: 3;
	}

	.wrapper__component h2 {
		font-family: var(--Geologica), sans-serif;
		font-size: clamp(1.6rem, 3vw, 2.2rem);
		font-weight: 800;
		color: #ffffff;
		text-align: center;
		margin: 0 0 1rem 0;
		letter-spacing: -0.01em;
	}

	.section-desc {
		font-family: var(--Red), sans-serif;
		font-size: 1rem;
		font-weight: 300;
		line-height: 1.7;
		color: rgba(255, 255, 255, 0.65);
		max-width: 800px;
		text-align: center;
		margin: 0 0 3rem 0;
	}

	.wrapper__offres-tarifs {
		display: flex;
		justify-content: center;
		align-items: stretch;
		flex-wrap: wrap;
		gap: 2.5rem;
		width: 100%;
		margin-top: 0;
	}

	.wrapper__faqLink {
		margin-top: 5rem;
		z-index: 3;
		width: 100%;
		max-width: 800px;
	}

	@media screen and (max-width: 867px) {
		.page-container {
			padding: 5rem 1.25rem;
		}
		.wrapper__hero {
			padding: 2rem 1.5rem;
		}
		.intro-pitch {
			text-align: left;
		}
		.wrapper__component {
			padding: 2rem 0;
			margin-top: 1rem;
		}
		.wrapper__component h2 {
			text-align: left;
			width: 100%;
		}
		.section-desc {
			text-align: left;
			width: 100%;
		}
	}
</style>
