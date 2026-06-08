<script>
	import Atome from '../Assets/atome.png';
	import Design from '../Assets/designLogo.png';
	import Flex from '../Assets/flexLogo.png';
	import Rocket from '../Assets/rocketLogo.png';
	import Seo from '../Assets/seoLogo.png';
	import Button from '../Components/ButtonCTA.svelte';
	import MethodSection from './MethodSection.svelte';
</script>

<main class="services-section">
	<div class="wrapper__paragraph">
		<h2 class="title">Création de Sites Internet Professionnels & Solutions de Visibilité Locale</h2>
		
		<div class="services-grid">
			<!-- Formule Express (Pack Artisan & Local) -->
			<div class="service-box featured-box">
				<div class="badge-service accent-badge">⚡ Pack Artisan & Commerce Local</div>
				<h3 class="title-2">Votre Site Vitrine + Fiche Google Maps clé en main</h3>
				<div class="price-tag">1399 € <span class="tax-info">TTC</span></div>
				<p class="subtitle">
					L'offre idéale et transparente pour les artisans, commerçants et indépendants. Nous concevons votre site internet professionnel complet de 5 pages (Accueil, Présentation, Services, Galerie de réalisations, Formulaire de contact). Nous créons et configurons également votre fiche Google Business Profile (Google Maps) pour que les clients de votre secteur vous trouvent immédiatement sur leur téléphone. Livraison en 3 jours, sans aucun abonnement obligatoire.
				</p>
				<div class="cta-card">
					<Button />
				</div>
			</div>

			<!-- Site Custom -->
			<div class="service-box">
				<div class="badge-service">💎 Création sur-mesure & Design unique</div>
				<h3 class="title-2">Site Internet sur-mesure pour PME & Marques</h3>
				<div class="price-tag"><span class="from-text">dès</span> 3999 € <span class="tax-info">TTC</span></div>
				<p class="subtitle">
					Vous souhaitez vous démarquer avec une identité visuelle forte et unique qui marque les esprits ? Nous concevons votre site web entièrement sur-mesure, adapté à votre charte graphique. Nous développons un code ultra-optimisé pour assurer un chargement instantané sur tous les téléphones et ordinateurs, garantissant une expérience de visite fluide et un meilleur positionnement sur Google.
				</p>
				<div class="cta-card">
					<Button />
				</div>
			</div>

			<!-- Landing Page & E-Commerce -->
			<div class="service-box">
				<div class="badge-service">🛒 Vente en Ligne & E-Commerce</div>
				<h3 class="title-2">Boutiques en Ligne & Pages de Vente</h3>
				<div class="price-tag"><span class="from-text">dès</span> 1999 € <span class="tax-info">TTC</span></div>
				<p class="subtitle">
					Lancez votre activité de commerce ou de vente à emporter locale. Nous créons des tunnels de commande ultra-fluides et sécurisés pour maximiser vos ventes en ligne. Vous conservez une autonomie complète pour gérer vos produits, vos prix et vos stocks en quelques clics grâce à des outils d'administration simples à prendre en main.
				</p>
				<div class="cta-card">
					<Button />
				</div>
			</div>

			<!-- Applications Web & Mobiles -->
			<div class="service-box">
				<div class="badge-service">📱 Applications Métiers & Portails</div>
				<h3 class="title-2">Applications Web & Outils sur-mesure</h3>
				<div class="price-tag"><span class="from-text">dès</span> 4999 € <span class="tax-info">TTC</span></div>
				<p class="subtitle">
					Besoin d'un outil de réservation en ligne pour vos clients, d'un espace membre, ou d'une application interne pour simplifier votre facturation et votre gestion quotidienne ? Nous développons des applications web sur-mesure, légères et intuitives, accessibles depuis n'importe quel navigateur mobile ou d'ordinateur pour automatiser vos tâches.
				</p>
				<div class="cta-card">
					<Button />
				</div>
			</div>
		</div>

		<MethodSection />

		<div class="services-grid">
			<!-- SEO Expertise -->
			<div class="service-box full-width-box">
				<div class="badge-service SEO-badge">📈 Référencement & Domination Google</div>
				<h3 class="title-2">Soyez visible là où vos clients cherchent vos services</h3>
				<p class="subtitle">
					Le plus beau des sites ne sert à rien s'il n'apparaît pas sur Google quand on cherche votre spécialité. Nous réalisons un audit de votre marché local, ciblons les vraies requêtes que tapent vos clients (ex: "électricien Tassin", "ostéopathe Craponne") et optimisons le contenu et les liens de votre site pour vous positionner durablement dans les premiers résultats et multiplier les appels de prospects.
				</p>
				<div class="cta-card">
					<Button />
				</div>
			</div>
		</div>
	</div>

	<div class="container">
		<h2 class="section-subtitle">Pourquoi choisir Gralypho pour votre projet digital ?</h2>
		<div class="wrapper__cards">
			<div class="wrapper__cards-card">
				<img class="logo-benefit" src={Rocket} alt="Icône de fusée pour la vitesse" />
				<h3 class="subtitle-h3">Performance</h3>
				<h4 class="subtitle-h4">Le meilleur des technologies modernes pour des sites internet et des applications ultra-légères, fluides et ultra-rapides.</h4>
			</div>

			<div class="wrapper__cards-card">
				<img class="logo-benefit" src={Flex} alt="Icône pour la flexibilité" />
				<h3 class="subtitle-h3">Flexibilité</h3>
				<h4 class="subtitle-h4">Site internet avec ou sans système de gestion de contenu (CMS), avec ou sans forfait de maintenance mensuel. Vous restez maître.</h4>
			</div>

			<div class="wrapper__cards-card">
				<img class="logo-benefit" src={Seo} alt="Icône SEO" />
				<h3 class="subtitle-h3">100% SEO</h3>
				<h4 class="subtitle-h4">Nous codons en respectant scrupuleusement les exigences des moteurs de recherche pour asseoir durablement vos requêtes.</h4>
			</div>

			<div class="wrapper__cards-card">
				<img class="logo-benefit" src={Design} alt="Icône plume design" />
				<h3 class="subtitle-h3">Design & Accessibilité</h3>
				<h4 class="subtitle-h4">Des parcours utilisateurs soignés (UX/UI d'élite) respectant les normes W3C pour une accessibilité sur tous les supports.</h4>
			</div>
		</div>
	</div>

	<div class="wrapper__cta">
		<h2 class="call-to-action-txt">Prêt à donner vie à votre projet de site ou d'application ?</h2>
		<a class="button" href="/creation-site-application-Lyon">Demander mon Devis Gratuit</a>
	</div>
</main>

<style>
	.services-section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 5rem 2rem;
		gap: 5rem;
		height: auto;
		background-color: var(--primary);
		z-index: 2;
		position: relative;
		overflow: hidden;
	}

	.wrapper__paragraph {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 3rem;
		width: 100%;
		max-width: 1200px;
		z-index: 5;
	}

	.title {
		font-size: clamp(1.8rem, 3vw, 2.5rem);
		font-weight: 900;
		color: #ffffff;
		font-family: var(--Geologica), sans-serif;
		text-align: center;
		margin: 0;
		letter-spacing: -0.02em;
		width: 100%;
		max-width: 800px;
	}

	.section-subtitle {
		font-size: clamp(1.5rem, 2.5vw, 2rem);
		font-weight: 800;
		color: #ffffff;
		font-family: var(--Geologica), sans-serif;
		text-align: center;
		margin-bottom: 3rem;
		letter-spacing: -0.01em;
		width: 100%;
	}

	/* Grille des offres de services */
	.services-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(min(100%, 320px), 1fr));
		gap: 2rem;
		width: 100%;
	}

	.service-box {
		background: rgba(255, 255, 255, 0.02);
		border: 1px solid rgba(255, 255, 255, 0.05);
		border-radius: 20px;
		padding: 2.5rem;
		display: flex;
		flex-direction: column;
		gap: 1.25rem;
		transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
		position: relative;
		box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
	}
	.service-box:hover {
		background: rgba(255, 255, 255, 0.04);
		border-color: rgba(255, 255, 255, 0.15);
		transform: translateY(-5px);
		box-shadow: 0 20px 40px rgba(0, 0, 0, 0.25);
	}

	/* Box custom mise en avant */
	.featured-box {
		border: 1px solid rgba(214, 163, 25, 0.25);
		background: radial-gradient(circle at 50% 0%, rgba(214, 163, 25, 0.05) 0%, rgba(255, 255, 255, 0.01) 100%);
	}
	.featured-box:hover {
		border-color: var(--green, #D6A319);
		box-shadow: 0 20px 40px rgba(214, 163, 25, 0.15);
	}

	.full-width-box {
		grid-column: 1 / -1;
		background: radial-gradient(circle at 10% 0%, rgba(20, 129, 186, 0.08) 0%, rgba(255, 255, 255, 0.01) 100%);
		border: 1px solid rgba(20, 129, 186, 0.2);
	}
	.full-width-box:hover {
		border-color: var(--cta, #1481ba);
		box-shadow: 0 20px 40px rgba(20, 129, 186, 0.15);
	}

	.badge-service {
		align-self: flex-start;
		background: rgba(255, 255, 255, 0.05);
		border: 1px solid rgba(255, 255, 255, 0.1);
		color: rgba(255, 255, 255, 0.7);
		font-family: var(--Geologica), sans-serif;
		font-size: 0.7rem;
		font-weight: 700;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		padding: 6px 14px;
		border-radius: 50px;
	}
	.accent-badge {
		background: rgba(214, 163, 25, 0.1);
		border-color: rgba(214, 163, 25, 0.3);
		color: var(--green, #D6A319);
	}
	.SEO-badge {
		background: rgba(20, 129, 186, 0.1);
		border-color: rgba(20, 129, 186, 0.3);
		color: var(--CTA, #4ba4ee);
	}

	.title-2 {
		font-size: 1.35rem;
		font-weight: 700;
		color: #ffffff;
		font-family: var(--Geologica), sans-serif;
		margin: 0;
	}

	.price-tag {
		font-size: 1.8rem;
		font-weight: 900;
		color: #ffffff;
		font-family: var(--Geologica), sans-serif;
	}
	.from-text {
		font-size: 0.95rem;
		font-weight: 500;
		color: rgba(255, 255, 255, 0.5);
		text-transform: uppercase;
		letter-spacing: 0.05em;
		margin-right: 5px;
	}
	.tax-info {
		font-size: 0.8rem;
		font-weight: 600;
		color: rgba(255, 255, 255, 0.4);
		margin-left: 5px;
	}

	.subtitle {
		font-size: 0.95rem;
		font-weight: 400;
		line-height: 1.7;
		color: rgba(255, 255, 255, 0.7);
		font-family: var(--Red), sans-serif;
		margin: 0;
		text-align: left;
	}

	.cta-card {
		margin-top: auto;
		padding-top: 1rem;
	}

	/* Section des 4 Atouts Gralypho */
	.container {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 100%;
		max-width: 1200px;
		z-index: 5;
	}

	.wrapper__cards {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
		gap: 2rem;
		width: 100%;
	}

	.wrapper__cards-card {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: flex-start;
		gap: 1.25rem;
		background: rgba(255, 255, 255, 0.02);
		border: 1px solid rgba(255, 255, 255, 0.05);
		border-radius: 24px;
		padding: 2.5rem 2rem;
		min-height: 320px;
		backdrop-filter: blur(10px);
		-webkit-backdrop-filter: blur(10px);
		transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
		box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
	}
	.wrapper__cards-card:hover {
		background: rgba(255, 255, 255, 0.04);
		border-color: var(--green, #D6A319);
		transform: translateY(-8px);
		box-shadow: 0 20px 40px rgba(214, 163, 25, 0.1);
	}
	.wrapper__cards-card:hover .logo-benefit {
		transform: scale(1.1) rotate(3deg);
	}

	.logo-benefit {
		width: 60px;
		height: 60px;
		object-fit: contain;
		filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.2));
		transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
	}

	.subtitle-h3 {
		font-size: 1.25rem;
		font-weight: 800;
		color: #ffffff;
		text-align: center;
		font-family: var(--Geologica), sans-serif;
		margin: 0;
	}
	
	.subtitle-h4 {
		font-size: 0.9rem;
		font-weight: 300;
		line-height: 1.6;
		color: rgba(255, 255, 255, 0.6);
		text-align: center;
		font-family: var(--Red), sans-serif;
		margin: 0;
	}

	/* CTA de Fin de Section */
	.wrapper__cta {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 2rem;
		background: radial-gradient(circle at center, #1b2642 0%, var(--primary) 100%);
		border: 1px solid rgba(255, 255, 255, 0.05);
		padding: 4rem 3rem;
		border-radius: 28px;
		box-shadow: 0 30px 60px rgba(0, 0, 0, 0.4);
		width: 100%;
		max-width: 900px;
		z-index: 5;
		text-align: center;
	}

	.call-to-action-txt {
		font-size: clamp(1.3rem, 2vw, 1.8rem);
		font-weight: 800;
		color: #ffffff;
		text-align: center;
		font-family: var(--Geologica), sans-serif;
		margin: 0;
		line-height: 1.35;
	}

	.button {
		display: inline-flex;
		align-items: center;
		background-color: var(--green, #D6A319);
		color: var(--primary);
		padding: 14px 36px;
		border-radius: 50px;
		text-decoration: none;
		font-family: var(--Geologica), sans-serif;
		font-weight: 700;
		font-size: 0.95rem;
		transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
		box-shadow: 0 10px 20px rgba(214, 163, 25, 0.2);
	}
	.button:hover {
		transform: translateY(-2px);
		box-shadow: 0 15px 30px rgba(214, 163, 25, 0.4);
		background-color: #ffffff;
		color: var(--primary);
	}

	/* Responsive */
	@media screen and (max-width: 768px) {
		.services-section {
			padding: 4rem 1.25rem;
			gap: 3.5rem;
		}
		.wrapper__paragraph {
			gap: 2rem;
		}
		.services-grid {
			grid-template-columns: 1fr;
		}
		.service-box {
			padding: 1.75rem;
			gap: 1rem;
		}
		.wrapper__cards-card {
			padding: 2rem 1.5rem;
			min-height: auto;
		}
		.wrapper__cta {
			padding: 2.5rem 1.5rem;
		}
	}
</style>
