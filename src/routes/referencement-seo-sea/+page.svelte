<script>
	import { fade } from 'svelte/transition';
	import Header from '../../sections/Header.svelte';
	import Form from '../../Components/Form.svelte';
	import Mouse from '../../Components/Mouse.svelte';
	import FaqLink from '../../Components/FaqLink.svelte';
	import Links from '../../Components/LinkSiteApplication.svelte';
</script>

<svelte:head>
	<title>Expertise SEO & Stratégie Google à Lyon | Audit SEO Gratuit | Gralypho</title>
	<meta name="description" content="Agence SEO à Lyon et dans l'Ouest Lyonnais. Boostez votre trafic organique, générez des leads qualifiés et dominez la première page de Google." />
	<meta property="og:title" content="Expertise Référencement SEO & SEA à Lyon | Gralypho" />
	<meta property="og:description" content="Développez votre visibilité locale et nationale. Audit technique complet, rédaction sémantique optimisée et netlinking éthique." />
	<meta property="og:url" content="https://gralypho.com/referencement-seo-sea" />
	<meta property="og:type" content="website" />
	<meta property="og:image" content="/logoGralypho2.jpeg" />
	<link rel="canonical" href="https://gralypho.com/referencement-seo-sea" />
</svelte:head>

<Mouse />
<Header />

<main class="page-container" in:fade={{ duration: 1000 }}>
	<!-- Halos lumineux néon en arrière-plan -->
	<div class="glow-orb orb-1"></div>
	<div class="glow-orb orb-2"></div>

	<!-- Hero Section -->
	<div class="wrapper__hero">
		<h1 class="title">Expertise & <span class="highlight-text">Audit SEO Lyon</span></h1>
		
		<h2 class="subtitle">
			Propulsez votre visibilité sur Google avec Gralypho, agence SEO d'élite à l'Ouest de Lyon.
			<br />
			<span class="sub-lead">Consultants experts basés dans les Monts du Lyonnais, nous bâtissons des stratégies de référencement naturel pérennes pour multiplier votre trafic qualifié et vos conversions de clients.</span>
		</h2>
		
		<div class="badge-trust-seo">
			⚡ PRÉSENCE LOCALE LYONNAISE • EXPERTISE TECHNIQUE • ACCOMPAGNEMENT INDIVIDUEL
		</div>
	</div>

	<!-- Section "Pourquoi investir" -->
	<div class="wrapper__component">
		<div class="glass-pitch-card">
			<h2>Pourquoi investir dans le <span class="highlight-text">SEO</span> pour votre entreprise ?</h2>
			<p>
				Le SEO (*Search Engine Optimization*), ou référencement naturel, englobe l'ensemble des optimisations appliquées à votre site pour le positionner en tête des résultats de Google. Un site internet magnifique est inutile s'il reste invisible. Investir dans le référencement, c'est s'assurer d'un flux continu et gratuit de clients ciblés cherchant activement vos services.
			</p>
			
			<div class="benefits-grid">
				<div class="benefit-item">
					<span class="bullet-gold">✔</span>
					<div>
						<h4>Trafic Qualifié en Continu</h4>
						<p>Vos prospects vous trouvent naturellement au moment exact de leur besoin.</p>
					</div>
				</div>
				<div class="benefit-item">
					<span class="bullet-gold">✔</span>
					<div>
						<h4>Crédibilité & Autorité</h4>
						<p>Être en première page de Google renforce instantanément l'autorité de votre marque.</p>
					</div>
				</div>
				<div class="benefit-item">
					<span class="bullet-gold">✔</span>
					<div>
						<h4>Rentabilité Durable</h4>
						<p>Contrairement à la publicité payante, le trafic SEO perdure sans frais par clic.</p>
					</div>
				</div>
			</div>
		</div>
	</div>

	<!-- Section Méthode SEO -->
	<div class="wrapper__component">
		<h2>Notre méthode SEO stratégique <span class="highlight-text">en 4 étapes</span></h2>
		<p class="section-desc">Chez Gralypho, nous ne laissons rien au hasard. Nous appliquons un protocole rigoureux et technique pour hisser durablement votre site web au sommet.</p>
		
		<div class="method-grid">
			<!-- Étape 1 -->
			<div class="method-card">
				<div class="step-num">01</div>
				<h3>Audit SEO Complet</h3>
				<ul>
					<li>Analyse technique du code & de la vitesse</li>
					<li>Ciblage des mots-clés les plus rentables</li>
					<li>Audit UX & taux de conversion (CRO)</li>
					<li>Analyse des liens entrants (Netlinking)</li>
				</ul>
			</div>

			<!-- Étape 2 -->
			<div class="method-card">
				<div class="step-num">02</div>
				<h3>Optimisation Technique</h3>
				<ul>
					<li>Accélération extrême du temps de chargement</li>
					<li>Optimisation HTML (Balises Title, Meta, Hn)</li>
					<li>Structuration sémantique de l'architecture</li>
					<li>Compatibilité mobile absolue (Responsive)</li>
				</ul>
			</div>

			<!-- Étape 3 -->
			<div class="method-card">
				<div class="step-num">03</div>
				<h3>Enrichissement Sémantique</h3>
				<ul>
					<li>Rédaction de pages de contenus d'élite</li>
					<li>Maillage interne intelligent</li>
					<li>Optimisation du champ lexical LSI</li>
					<li>Création de Landing Pages de conversion</li>
				</ul>
			</div>

			<!-- Étape 4 -->
			<div class="method-card">
				<div class="step-num">04</div>
				<h3>Popularité & Netlinking</h3>
				<ul>
					<li>Acquisition de liens (backlinks) d'autorité</li>
					<li>Optimisation SEO local (Google Maps)</li>
					<li>Maillage régional et annuaires ciblés</li>
					<li>Suivi mensuel des positions Google</li>
				</ul>
			</div>
		</div>
	</div>

	<!-- Budget & Appel à l'action -->
	<div class="wrapper__component">
		<div class="budget-cta-card">
			<h3>Quel budget pour votre référencement ?</h3>
			<p>Le prix d'une stratégie SEO s'ajuste en fonction de votre concurrence, de l'état technique de votre site et de votre ciblage géographique. Nous concevons des devis transparents et adaptés à vos ambitions commerciales.</p>
			
			<div class="actions-wrapper">
				<a class="devis-btn" href="/#section-form">Demander mon Audit SEO Gratuit</a>
				<a class="blog-btn" href="/blog">Découvrir notre Blog SEO</a>
			</div>
		</div>
	</div>

	<!-- FAQ et Liens d'offres -->
	<div class="wrapper__faqLink">
		<FaqLink />
		<Links />
	</div>

	<!-- Formulaire de contact final -->
	<div class="wrapper-form">
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
		top: 15%;
		left: -200px;
	}
	.orb-2 {
		width: 600px;
		height: 600px;
		background: var(--cta, #1481ba);
		bottom: 25%;
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
		padding: 4.5rem 3rem;
		margin-bottom: 4rem;
		gap: 1.5rem;
		z-index: 3;
		backdrop-filter: blur(10px);
		-webkit-backdrop-filter: blur(10px);
		box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
		text-align: center;
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
		font-size: clamp(1.1rem, 2.2vw, 1.4rem);
		font-weight: 400;
		color: rgba(255, 255, 255, 0.85);
		margin: 0;
		line-height: 1.6;
		max-width: 900px;
	}
	
	.sub-lead {
		display: inline-block;
		font-size: 0.95rem;
		font-weight: 300;
		color: rgba(255, 255, 255, 0.65);
		margin-top: 10px;
		line-height: 1.7;
	}

	.badge-trust-seo {
		font-family: var(--Geologica), sans-serif;
		font-size: 0.75rem;
		font-weight: 700;
		color: var(--green, #D6A319);
		background: rgba(214, 163, 25, 0.1);
		border: 1px solid rgba(214, 163, 25, 0.2);
		padding: 8px 18px;
		border-radius: 50px;
		letter-spacing: 0.05em;
		margin-top: 1.5rem;
	}

	/* Sections de contenu */
	.wrapper__component {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		width: 100%;
		max-width: 1200px;
		padding: 3rem 0;
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

	/* Grande carte Pitch */
	.glass-pitch-card {
		background: rgba(255, 255, 255, 0.02);
		border: 1px solid rgba(255, 255, 255, 0.05);
		border-radius: 28px;
		padding: 3.5rem 3rem;
		width: 100%;
		display: flex;
		flex-direction: column;
		gap: 2rem;
		backdrop-filter: blur(10px);
		-webkit-backdrop-filter: blur(10px);
	}
	.glass-pitch-card h2 {
		text-align: left !important;
		margin: 0 !important;
	}
	.glass-pitch-card p {
		font-family: var(--Red), sans-serif;
		font-size: 1.05rem;
		line-height: 1.8;
		color: rgba(255, 255, 255, 0.75);
		margin: 0;
	}

	.benefits-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
		gap: 2rem;
		margin-top: 1rem;
	}
	.benefit-item {
		display: flex;
		gap: 12px;
		align-items: flex-start;
	}
	.bullet-gold {
		color: var(--green, #D6A319);
		font-size: 1.3rem;
		line-height: 1;
	}
	.benefit-item h4 {
		font-family: var(--Geologica), sans-serif;
		font-size: 1.05rem;
		font-weight: 700;
		color: #ffffff;
		margin: 0 0 6px 0;
	}
	.benefit-item p {
		font-family: var(--Red), sans-serif;
		font-size: 0.85rem;
		line-height: 1.6;
		color: rgba(255, 255, 255, 0.55);
		margin: 0;
	}

	/* Grille des étapes */
	.method-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
		gap: 2rem;
		width: 100%;
	}
	.method-card {
		background: rgba(255, 255, 255, 0.02);
		border: 1px solid rgba(255, 255, 255, 0.05);
		border-radius: 24px;
		padding: 2.5rem 2rem;
		position: relative;
		transition: all 0.3s ease;
	}
	.method-card:hover {
		border-color: var(--green, #D6A319);
		background: rgba(255, 255, 255, 0.04);
		transform: translateY(-5px);
	}
	.step-num {
		font-family: var(--Geologica), sans-serif;
		font-size: 3rem;
		font-weight: 900;
		color: rgba(214, 163, 25, 0.15);
		line-height: 1;
		margin-bottom: 1rem;
	}
	.method-card h3 {
		font-family: var(--Geologica), sans-serif;
		font-size: 1.15rem;
		font-weight: 700;
		color: #ffffff;
		margin: 0 0 1.25rem 0;
	}
	.method-card ul {
		list-style: none;
		padding: 0;
		margin: 0;
		display: flex;
		flex-direction: column;
		gap: 10px;
	}
	.method-card li {
		font-family: var(--Red), sans-serif;
		font-size: 0.85rem;
		color: rgba(255, 255, 255, 0.7);
		line-height: 1.5;
		position: relative;
		padding-left: 15px;
	}
	.method-card li::before {
		content: '▪';
		color: var(--green, #D6A319);
		position: absolute;
		left: 0;
		top: 0;
	}

	/* Carte Devis & Budget */
	.budget-cta-card {
		background: radial-gradient(circle at 10% 0%, rgba(20, 129, 186, 0.05) 0%, rgba(255, 255, 255, 0.01) 100%);
		border: 1px solid rgba(255, 255, 255, 0.05);
		border-radius: 28px;
		padding: 3.5rem 3rem;
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
		gap: 1.5rem;
	}
	.budget-cta-card h3 {
		font-family: var(--Geologica), sans-serif;
		font-size: 1.5rem;
		font-weight: 800;
		color: #ffffff;
		margin: 0;
	}
	.budget-cta-card p {
		font-family: var(--Red), sans-serif;
		font-size: 1rem;
		line-height: 1.7;
		color: rgba(255, 255, 255, 0.7);
		max-width: 700px;
		margin: 0;
	}

	.actions-wrapper {
		display: flex;
		flex-wrap: wrap;
		gap: 1.5rem;
		justify-content: center;
		width: 100%;
		margin-top: 1rem;
	}

	.devis-btn {
		background-color: var(--green, #D6A319);
		color: var(--primary);
		font-family: var(--Geologica), sans-serif;
		font-size: 0.9rem;
		font-weight: 700;
		border-radius: 50px;
		text-align: center;
		padding: 14px 32px;
		box-shadow: 0 10px 20px rgba(214, 163, 25, 0.15);
		text-transform: uppercase;
		letter-spacing: 0.05em;
		transition: all 0.3s ease;
		text-decoration: none;
	}
	.devis-btn:hover {
		background-color: #ffffff;
		color: var(--primary);
		transform: translateY(-2px);
		box-shadow: 0 15px 30px rgba(255, 255, 255, 0.2);
	}

	.blog-btn {
		border: 2px solid rgba(255, 255, 255, 0.15);
		color: #ffffff;
		font-family: var(--Geologica), sans-serif;
		font-size: 0.9rem;
		font-weight: 700;
		border-radius: 50px;
		text-align: center;
		padding: 14px 32px;
		text-transform: uppercase;
		letter-spacing: 0.05em;
		transition: all 0.3s ease;
		text-decoration: none;
	}
	.blog-btn:hover {
		background-color: #ffffff;
		color: var(--primary);
		transform: translateY(-2px);
		box-shadow: 0 10px 20px rgba(255, 255, 255, 0.15);
	}

	.wrapper__faqLink {
		width: 100%;
		max-width: 800px;
		margin-top: 4rem;
	}
	.wrapper-form {
		width: 100%;
		z-index: 3;
	}

	@media screen and (max-width: 867px) {
		.page-container {
			padding: 5rem 1.25rem;
		}
		.wrapper__hero {
			padding: 2rem 1.5rem;
		}
		.subtitle {
			text-align: left;
		}
		.glass-pitch-card {
			padding: 2rem 1.5rem;
		}
		.glass-pitch-card p {
			text-align: left;
		}
		.budget-cta-card {
			padding: 2rem 1.5rem;
			text-align: left;
			align-items: flex-start;
		}
		.devis-btn, .blog-btn {
			width: 100%;
			text-align: center;
		}
	}
</style>
