<script>
	import Header from '../../sections/Header.svelte';
	import Mouse from '../../Components/Mouse.svelte';
	import FaqLink from '../../Components/FaqLink.svelte';
	import Form from '../../Components/Form.svelte';
	import Link from '../../Components/LinkSiteApplication.svelte';
	import collaborationLocale from '../../Assets/collaboration-locale.png';
	import webmaster from '../../Assets/Dev_gralypho.png';
	import gralyphoHeroImg from '../../Assets/livraison_site.png';
	import GSection from '../../sections/GSection.svelte';
	import Button from '../../Components/ButtonCTA.svelte';

	let solutions = [
		{
			title: 'Site One Page',
			subtitle: 'Allez droit au but',
			desc: 'Une page unique, claire et au tarif attractif pour présenter vos services indispensables et inciter immédiatement vos visiteurs à vous contacter dans l\'Ouest Lyonnais. Idéal pour lancer une activité.',
			points: ['Design percutant', 'Formulaire de contact intelligent', 'Budget maîtrisé']
		},
		{
			title: 'Site Vitrine',
			subtitle: 'Affirmez votre crédibilité',
			desc: 'La solution de création de site internet pour artisan, commerçant et TPE à Lyon Ouest. Un site complet sur-mesure pour asseoir votre image de marque et présenter en détail votre savoir-faire.',
			points: ['Design 100% unique', 'Présentation complète de vos services', 'Optimisé pour le référencement local']
		},
		{
			title: 'Boutique & Réservations',
			subtitle: 'Automatisez votre activité',
			desc: 'Le moteur de vente en ligne idéal pour les commerçants et PME qui souhaitent développer leur visibilité et référencement, recevoir des paiements sécurisés ou automatiser leurs rendez-vous locaux.',
			points: ['Paiement sécurisé par CB', 'Console de gestion intuitive', 'Tunnel de commande optimisé']
		}
	];
</script>

<svelte:head>
	<title>Création de Site Internet Ouest Lyonnais & Lyon | Artisan, TPE, PME</title>
	<meta name="description" content="Besoin d'un site web efficace, créatif et au tarif attractif ? Gralypho crée le site internet de votre commerce ou TPE dans l'Ouest Lyonnais et les Monts du Lyonnais." />
	<meta property="og:title" content="Création de Site Internet Ouest Lyonnais & Lyon | Gralypho" />
	<meta property="og:description" content="Découvrez nos solutions de création de site internet pour artisan et TPE dans l'Ouest Lyonnais. Vitesse, design unique et référencement local." />
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
		<div class="hero-split">
			<div class="hero-content">
				<h1 class="title">Création de Site Internet <span class="highlight-text">dans l'Ouest Lyonnais</span></h1>
				<h2 class="subtitle">Obenez votre site web en moins d'une semaine, livré avec votre pack starter pour tous les artisans, commerçants, TPE & PME.</h2>
				
				<p class="intro-pitch">
					Vous cherchez à développer votre activité locale ou à capter de nouveaux clients ? Gralypho conçoit votre site internet sur-mesure avec une stratégie de visibilité et référencement local solide. Grâce à notre expertise technique et l'IA, nous livrons votre outil rapidement, au budget juste et sans compromis sur le design.
				</p>
			</div>
			<div class="hero-visual">
				<div class="visual-frame">
					<img src={gralyphoHeroImg} alt="Création de site internet professionnel par Gralypho dans l'Ouest Lyonnais" class="visual-img" />
				</div>
			</div>
		</div>
		
		<div class="families-grid">
			<div class="family-card">
				<h3>⚡ Livré rapidement</h3>
				<p>Nos outils modernes et l'IA nous permettent de créer votre site 3x plus vite sans compromis sur la qualité.</p>
			</div>
			<div class="family-card">
				<h3>💎 Un design qui claque</h3>
				<p>Une identity graphique sur-mesure pour vous démarquer et inspirer confiance dès la première seconde.</p>
			</div>
			<div class="family-card">
				<h3>📈 Un site qu'on trouve</h3>
				<p>Optimisé dès la création pour le référencement local (Google Maps & SEO) afin d'attirer vos futurs clients.</p>
			</div>
			<div class="family-card">
				<h3>⚙️ Vitesse extrême</h3>
				<p>Des performances de chargement maximales sur mobile. Vos visiteurs n'attendent pas, Google adore.</p>
			</div>
			<div class="family-card">
				<h3>🚀 Conçu pour grandir</h3>
				<p>Évolutif à 100%. Vitrine aujourd'hui, vous pourrez y ajouter des réservations ou une boutique demain.</p>
			</div>
			<div class="family-card">
				<h3>🔒 Propriété totale</h3>
				<p>Zéro abonnement imposé, zero engagement. Vous êtes propriétaire à 100% de votre site et de votre nom.</p>
			</div>
		</div>
	</div>

	<!-- Section Les Solutions -->
	<div class="wrapper__component">
		<h2>Des solutions adaptées à <span class="highlight-text">vos objectifs</span></h2>
		<p class="section-desc">Pas de packs compliqués ou de contraintes techniques. Nous choisissons la structure qui correspond exactement à ce que vous souhaitez accomplir.</p>
		
		<div class="wrapper__offres-tarifs">
			{#each solutions as item}
				<div class="solution-card">
					<h3 class="sol-title">{item.title}</h3>
					<span class="sol-subtitle">{item.subtitle}</span>
					<p class="sol-desc">{item.desc}</p>
					<ul class="sol-points">
						{#each item.points as pt}
							<li><span class="bullet">✓</span> {pt}</li>
						{/each}
					</ul>
					<div class="cta-card">
						<Button />
					</div>
				</div>
			{/each}
		</div>
	</div>

	<!-- Section Notre Méthode Humaine -->
	<div class="wrapper__component-method">
		<div class="method-split">
			<div class="method-visual">
				<div class="visual-frame">
					<img src={webmaster} alt="Notre accompagnement humain et direct pour votre site" class="visual-img" />
				</div>
			</div>
			<div class="method-steps">
				<h2>Votre projet de site web <span class="highlight-text">pour les pros par des pros</span></h2>
				<p class="method-intro">Nous offrons un accompagnement de proximité. Que vous soyez artisan à Craponne, commerçant à Tassin-la-Demi-Lune ou gérant de PME dans l'Ouest Lyonnais, vous collaborez en direct avec un développeur local expert en visibilité et référencement :</p>
				
				<div class="steps-container">
					<div class="step-card">
						<div class="step-num">01</div>
						<div class="step-content">
							<h4>Écoute & Stratégie</h4>
							<p>On analyse votre activité, vos clients cibles et vos objectifs pour définir la meilleure structure.</p>
						</div>
					</div>
					<div class="step-card">
						<div class="step-num">02</div>
						<div class="step-content">
							<h4>Design Unique</h4>
							<p>On crée une maquette sur-mesure pour concevoir un univers visuel marquant qui vous ressemble.</p>
						</div>
					</div>
					<div class="step-card">
						<div class="step-num">03</div>
						<div class="step-content">
							<h4>Développement & SEO</h4>
							<p>On code votre site avec des technologies modernes pour une vitesse maximale et un référencement local solide.</p>
						</div>
					</div>
					<div class="step-card">
						<div class="step-num">04</div>
						<div class="step-content">
							<h4>Lancement & Accompagnement</h4>
							<p>On met votre site en ligne et on vous accompagne pour suivre vos visites, appels et premiers clients.</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>

	<!-- Section Portfolio / Références Slider -->
	<GSection />

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
		gap: 2.5rem;
		z-index: 3;
		backdrop-filter: blur(10px);
		-webkit-backdrop-filter: blur(10px);
		box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
	}

	.hero-split {
		display: grid;
		grid-template-columns: 1.15fr 0.85fr;
		gap: 3rem;
		align-items: center;
		width: 100%;
	}
	.hero-content {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		text-align: left;
		gap: 1.25rem;
	}
	.hero-visual {
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.title {
		font-family: var(--Geologica), sans-serif;
		font-size: clamp(2rem, 4vw, 3.4rem);
		color: #ffffff;
		font-weight: 900;
		text-align: left;
		letter-spacing: -0.03em;
		margin: 0;
		line-height: 1.15;
	}

	.highlight-text {
		background: linear-gradient(135deg, var(--green, #D6A319) 0%, #ffffff 100%);
		-webkit-background-clip: text;
		background-clip: text;
		-webkit-text-fill-color: transparent;
	}

	.subtitle {
		font-family: var(--Red), sans-serif;
		font-size: clamp(1.05rem, 1.8vw, 1.35rem);
		font-weight: 400;
		color: rgba(255, 255, 255, 0.85);
		margin: 0;
		text-align: left;
	}

	.intro-pitch {
		font-family: var(--Red), sans-serif;
		font-size: 1rem;
		font-weight: 300;
		line-height: 1.7;
		color: rgba(255, 255, 255, 0.7);
		text-align: left;
		max-width: 100%;
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
	.wrapper__component {
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

	/* Solutions Cards Style */
	.solution-card {
		flex: 1;
		min-width: 300px;
		max-width: 360px;
		background: rgba(255, 255, 255, 0.02);
		border: 1px solid rgba(255, 255, 255, 0.05);
		border-radius: 24px;
		padding: 2.5rem;
		display: flex;
		flex-direction: column;
		gap: 1.25rem;
		transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
		box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
		backdrop-filter: blur(10px);
	}
	.solution-card:hover {
		background: rgba(255, 255, 255, 0.04);
		border-color: var(--green, #D6A319);
		transform: translateY(-8px);
		box-shadow: 0 20px 45px rgba(214, 163, 25, 0.1);
	}

	.sol-title {
		font-family: var(--Geologica), sans-serif;
		font-size: 1.5rem;
		font-weight: 800;
		color: #ffffff;
		margin: 0;
	}
	.sol-subtitle {
		font-family: var(--Geologica), sans-serif;
		font-size: 0.8rem;
		font-weight: 700;
		text-transform: uppercase;
		letter-spacing: 0.05em;
		color: var(--green, #D6A319);
	}
	.sol-desc {
		font-family: var(--Red), sans-serif;
		font-size: 0.95rem;
		line-height: 1.6;
		color: rgba(255, 255, 255, 0.7);
		margin: 0;
		flex-grow: 1;
	}
	.sol-points {
		list-style: none;
		padding: 0;
		margin: 1rem 0 0 0;
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
	}
	.sol-points li {
		font-family: var(--Red), sans-serif;
		font-size: 0.9rem;
		color: rgba(255, 255, 255, 0.85);
		display: flex;
		align-items: center;
		gap: 10px;
	}
	.bullet {
		color: var(--green, #D6A319);
		font-weight: bold;
	}

	.cta-card {
		margin-top: auto;
		padding-top: 1.5rem;
		width: 100%;
		display: flex;
		justify-content: center;
	}

	/* Method Section Style */
	.wrapper__component-method {
		width: 100%;
		max-width: 1200px;
		padding: 6rem 0;
		z-index: 3;
	}
	.method-split {
		display: grid;
		grid-template-columns: 0.9fr 1.1fr;
		gap: 4rem;
		align-items: center;
	}
	.method-visual {
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.visual-frame {
		width: 100%;
		max-width: 440px;
		aspect-ratio: 1.15;
		overflow: hidden;
		border-radius: 24px;
		border: 1px solid rgba(255, 255, 255, 0.08);
		box-shadow: 0 20px 50px rgba(0, 0, 0, 0.4);
	}
	.visual-img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
	.method-steps {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		text-align: left;
	}
	.method-steps h2 {
		font-family: var(--Geologica), sans-serif;
		font-size: clamp(1.8rem, 3.5vw, 2.5rem);
		font-weight: 900;
		color: #ffffff;
		margin: 0 0 1rem 0;
	}
	.method-intro {
		font-family: var(--Red), sans-serif;
		font-size: 1.05rem;
		line-height: 1.7;
		color: rgba(255, 255, 255, 0.7);
		margin: 0 0 2.5rem 0;
	}
	.steps-container {
		display: flex;
		flex-direction: column;
		gap: 1.75rem;
		width: 100%;
	}
	.step-card {
		display: flex;
		gap: 1.5rem;
		background: rgba(255, 255, 255, 0.015);
		border: 1px solid rgba(255, 255, 255, 0.04);
		padding: 1.5rem;
		border-radius: 16px;
		transition: all 0.3s ease;
	}
	.step-card:hover {
		background: rgba(255, 255, 255, 0.03);
		border-color: rgba(255, 255, 255, 0.1);
	}
	.step-num {
		font-family: var(--Geologica), sans-serif;
		font-size: 1.5rem;
		font-weight: 900;
		color: var(--green, #D6A319);
		line-height: 1;
	}
	.step-content h4 {
		font-family: var(--Geologica), sans-serif;
		font-size: 1.1rem;
		font-weight: 700;
		color: #ffffff;
		margin: 0 0 6px 0;
	}
	.step-content p {
		font-family: var(--Red), sans-serif;
		font-size: 0.9rem;
		line-height: 1.6;
		color: rgba(255, 255, 255, 0.6);
		margin: 0;
	}

	.wrapper__faqLink {
		margin-top: 5rem;
		z-index: 3;
		width: 100%;
		max-width: 800px;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		text-align: center;
	}

	@media screen and (max-width: 992px) {
		.method-split {
			grid-template-columns: 1fr;
			gap: 3rem;
		}
		.visual-frame {
			max-width: 100%;
			aspect-ratio: 16/9;
		}
	}

	@media screen and (max-width: 867px) {
		.page-container {
			padding: 5rem 1.25rem;
		}
		.wrapper__hero {
			padding: 2rem 1.5rem;
		}
		.hero-split {
			grid-template-columns: 1fr;
			gap: 2rem;
		}
		.hero-content {
			align-items: center;
		}
		.title, .subtitle, .intro-pitch {
			text-align: center;
		}
		.intro-pitch {
			text-align: center;
		}
		.wrapper__component {
			padding: 2rem 0;
			margin-top: 2rem;
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
