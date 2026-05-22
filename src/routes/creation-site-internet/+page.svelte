<script>
	import Header from '../../sections/Header.svelte';
	import Mouse from '../../Components/Mouse.svelte';
	import FaqLink from '../../Components/FaqLink.svelte';
	import CardTarifs from '../../Components/CardTarifs.svelte';
	import Form from '../../Components/Form.svelte';
	import Link from '../../Components/LinkSiteApplication.svelte';

	let landing = [
		{
			name: 'Landing Page',
			h2: 'Une page web unique \n à fort taux de conversion',
			h3: 'Idéal pour : Lancement de produit, campagne marketing, événementiel, artisans',
			h4: ['Délai : 3-5 jours', 'Page unique condensée', 'Optimisé SEO & Google Ads'],
			li: [
				'Design graphique premium sur-mesure (logo, couleurs, images, textes)',
				'Intégration d’un formulaire de contact intelligent',
				'Intégration des pixels de conversion (Google Analytics, ADS...)',
				'Performances de chargement extrêmes (SvelteKit)',
				'Mise en ligne et nom de domaine inclus',
				'Avantage : Idéal pour transformer immédiatement vos visiteurs en clients qualifiés.'
			],
			tarif: '799 € TTC'
		}
	];

	let basic = [
		{
			name: 'Formule Express - Best Seller',
			h2: 'Vitrine professionnelle \n Livraison en 3 jours max',
			h3: 'Idéal pour : Indépendants, TPE, PME, Artisans, Professions libérales',
			h4: ['Délai : 3 jours max', 'Vitrine Pro 5 pages', 'Optimisé Référencement (SEO)'],
			li: [
				'Les 5 pages traditionnelles : Accueil, Services, À propos, Réalisations, Contact',
				'Design soigné et personnalisé assorti à votre univers',
				'Formulaire de contact & géolocalisation sur carte interactive',
				'Optimisation SEO technique d\'élite sur les moteurs de recherche',
				'Performances mobiles parfaites (Score Google PageSpeed > 95%)',
				'Avantage : Un site rapide, professionnel et livré à la vitesse de l\'éclair pour un prix défiant toute concurrence.'
			],
			tarif: '1399 € TTC'
		}
	];

	let pro = [
		{
			name: 'E-Commerce & Médias',
			h2: 'Boutique en ligne dynamique \n Gestion de contenu facile',
			h3: 'Idéal pour : Commerçants, Créateurs de mode, Médias d\'actualité, TPE/PME',
			h4: ['Délai : 7-15 jours', 'Gestion autonome', 'Boutique complète'],
			li: [
				'Tunnel d\'achat optimisé pour maximiser votre taux de conversion',
				'Système de gestion de contenu CMS ultra-simple pour vos stocks et produits',
				'Paiements sécurisés intégrés (Stripe, PayPal, Apple Pay)',
				'Création de blog / espace d\'actualité dynamique pour votre référencement',
				'Formation d\'une heure pour piloter votre boutique en toute autonomie',
				'Avantage : Une boutique rapide, sécurisée et taillée pour faire décoller votre chiffre d\'affaires.'
			],
			tarif: '3999 € TTC'
		}
	];

	let custom = [
		{
			name: 'Site Custom d\'Élite',
			h2: 'Univers unique sur-mesure \n Créativité absolue sans limites',
			h3: 'Idéal pour : Artistes, marques de prestige, créateurs, identités fortes',
			h4: ['Délai : 15-20 jours', 'Design 100% original', 'Animations d\'avant-garde'],
			li: [
				'Liberté totale de création graphique (zéro template préconçu)',
				'Conception UX/UI sur-mesure pour une expérience immersive d\'exception',
				'Animations fluides de haute technologie au scroll et au survol',
				'Codage manuel propre et ultra-léger garantissant une vitesse de chargement instantanée',
				'Maintenance technique incluse le premier mois',
				'Avantage : Un site d\'art d\'une élégance inégalée pour ancrer votre marque dans le haut de gamme.'
			],
			tarif: '5999 € TTC'
		}
	];

	let headless = [
		{
			name: 'CMS Headless - Le Graal',
			h2: 'Autonomie totale \n Architecture découplée',
			h3: 'Idéal pour : Projets ambitieux, multi-supports, marques en croissance',
			h4: ['Délai : 20-30 jours', 'Autonomie absolue', 'Évolutif Mobile'],
			li: [
				'Séparation complète du design et du contenu pour une flexibilité infinie',
				'Interface d\'administration sur-mesure (Strapi / Sanity)',
				'Contenu réutilisable instantanément vers une future application mobile',
				'Sécurité absolue (site statique impénétrable par les hackers)',
				'Vitesse d\'exécution ultime sur le web',
				'Avantage : Une architecture d\'avenir, sécurisée, évolutive et pensée pour durer.'
			],
			tarif: '7999 € TTC'
		}
	];
</script>

<svelte:head>
	<title>Création de Site Internet à Lyon | Vitrine & E-Commerce | Gralypho</title>
	<meta name="description" content="Vous cherchez à créer un site internet à Lyon et dans l'Ouest Lyonnais ? Gralypho conçoit des sites vitrines, e-commerce sur-mesure, rapides et optimisés SEO." />
	<meta property="og:title" content="Création de Site Internet à Lyon et Ouest Lyonnais | Gralypho" />
	<meta property="og:description" content="Gralypho crée votre site internet sur-mesure à Lyon : vitrine, e-commerce, ultra-rapide et optimisé pour le référencement local." />
	<meta property="og:url" content="https://gralypho.com/creation-site-internet" />
	<meta property="og:type" content="website" />
	<meta property="og:image" content="/logoGralypho2.jpeg" />
	<link rel="canonical" href="https://gralypho.com/creation-site-internet" />
</svelte:head>

<Header />
<Mouse />

<main class="page-container">
	<!-- Halos lumineux en arrière-plan -->
	<div class="glow-orb orb-1"></div>
	<div class="glow-orb orb-2"></div>

	<!-- Hero Introduction de la page -->
	<div class="wrapper__hero">
		<h1 class="title">Création de <span class="highlight-text">Site Internet</span></h1>
		<h2 class="subtitle">Votre site web professionnel sur-mesure & clé en main</h2>
		
		<p class="intro-pitch">
			Un site internet est bien plus qu’une simple vitrine numérique : c’est le cœur de votre image, votre premier commercial et votre principal canal de croissance. Que vous ayez besoin d’une page de capture épurée, d’un site vitrine évolutif ou d’une plateforme web complexe entièrement codée sur-mesure, nous concevons des solutions d'exception adaptées à votre ambition.
		</p>
		
		<div class="families-grid">
			<div class="family-card">
				<h3>🚀 Sans CMS (Statique)</h3>
				<p>Vous n'avez pas besoin de modifier régulièrement votre contenu ? Cette solution codée à la main est ultra-rapide, sécurisée et extrêmement abordable. Parfaite pour une vitrine durable.</p>
			</div>
			<div class="family-card">
				<h3>✍️ Avec CMS (Dynamique)</h3>
				<p>Vous souhaitez mettre à jour vos textes, images, actualités ou tarifs vous-même ? Nous intégrons des consoles d'administration simples et intuitives (WordPress, Webflow, Wix).</p>
			</div>
			<div class="family-card">
				<h3>💎 CMS Headless (Graal)</h3>
				<p>Pour les projets d'envergure. Votre contenu est découplé de la structure, sécurisé à 100%, et prêt à être décliné vers d'autres supports (comme une application mobile).</p>
			</div>
		</div>
	</div>

	<!-- Section Sans CMS -->
	<div class="wrapper__component" id="sans-cms">
		<h2>Votre site web <span class="highlight-text">sans interface de gestion</span></h2>
		<p class="section-desc">Ces sites ne disposent pas d’espace d’administration : ils sont parfaits si vous n’avez pas besoin de modifier fréquemment votre contenu. Légers, ultra-rapides et hautement sécurisés, ils sont parfaits pour présenter durablement vos services.</p>
		
		<div class="wrapper__offres-tarifs">
			{#each landing as item}
				<CardTarifs name={item.name} h2={item.h2} h3={item.h3} h4={item.h4} li={item.li} tarif={item.tarif} />
			{/each}

			{#each custom as item}
				<CardTarifs name={item.name} h2={item.h2} h3={item.h3} h4={item.h4} li={item.li} tarif={item.tarif} />
			{/each}
		</div>
	</div>

	<!-- Section Avec CMS -->
	<div class="wrapper__component" id="cms">
		<h2>Votre site web <span class="highlight-text">avec interface de gestion (CMS)</span></h2>
		<p class="section-desc">Vous souhaitez garder une autonomie complète sur vos textes, images, produits ou articles de blog ? Nos solutions avec console d'administration WordPress, Webflow ou Wix vous permettent de piloter votre site en toute simplicité. Nous vous formons à son utilisation.</p>
		
		<div class="wrapper__offres-tarifs">
			{#each basic as item}
				<CardTarifs name={item.name} h2={item.h2} h3={item.h3} h4={item.h4} li={item.li} tarif={item.tarif} />
			{/each}
			{#each pro as item}
				<CardTarifs name={item.name} h2={item.h2} h3={item.h3} h4={item.h4} li={item.li} tarif={item.tarif} />
			{/each}
		</div>
	</div>

	<!-- Section CMS Headless -->
	<div class="wrapper__component-headless">
		<h2>Votre site web <span class="highlight-text">avec CMS Headless</span></h2>
		<p class="section-desc">L'architecture d'avenir pour les projets d'envergure. Votre design est 100% personnalisé et vos contenus sont centralisés dans une interface d'administration sur-mesure, prêts à être poussés vers votre site web ou déclinés vers une application mobile native.</p>
		
		<div class="wrapper__offres-tarifs">
			{#each headless as item}
				<CardTarifs name={item.name} h2={item.h2} h3={item.h3} h4={item.h4} li={item.li} tarif={item.tarif} />
			{/each}
		</div>
	</div>

	<!-- Liens de navigation et FAQ -->
	<div class="wrapper__faqLink">
		<FaqLink />
		<Link />
	</div>

	<!-- Formulaire final -->
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
		background: var(--green, #D6A319);
		top: 10%;
		left: -200px;
	}
	.orb-2 {
		width: 600px;
		height: 600px;
		background: var(--cta, #1481ba);
		bottom: 30%;
		right: -350px;
	}

	.wrapper__images {
		width: 100%;
		max-width: 1200px;
		margin-bottom: 3rem;
		z-index: 2;
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
		font-size: clamp(2.5rem, 5.5vw, 4.5rem);
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
		font-size: clamp(1.1rem, 2.2vw, 1.6rem);
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

	/* Grille des 3 familles de sites */
	.families-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
		gap: 2rem;
		width: 100%;
		margin-top: 2.5rem;
	}
	.family-card {
		background: rgba(255, 255, 255, 0.02);
		border: 1px solid rgba(255, 255, 255, 0.05);
		padding: 2rem;
		border-radius: 20px;
		transition: all 0.3s ease;
	}
	.family-card:hover {
		border-color: rgba(255, 255, 255, 0.15);
		background: rgba(255, 255, 255, 0.04);
	}
	.family-card h3 {
		font-family: var(--Geologica), sans-serif;
		font-size: 1.15rem;
		font-weight: 700;
		color: #ffffff;
		margin: 0 0 10px 0;
	}
	.family-card p {
		font-family: var(--Red), sans-serif;
		font-size: 0.9rem;
		line-height: 1.6;
		color: rgba(255, 255, 255, 0.65);
		margin: 0;
		text-align: left;
	}

	/* Sections de Composants d'offres */
	.wrapper__component,
	.wrapper__component-headless {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		width: 100%;
		max-width: 1200px;
		padding: 3rem 0;
		margin-top: 3rem;
		z-index: 3;
	}

	.wrapper__component h2,
	.wrapper__component-headless h2 {
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
		.wrapper__component,
		.wrapper__component-headless {
			padding: 2rem 0;
			margin-top: 2rem;
		}
		.wrapper__component h2,
		.wrapper__component-headless h2 {
			text-align: left;
			width: 100%;
		}
		.section-desc {
			text-align: left;
			width: 100%;
		}
	}
</style>
