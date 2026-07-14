<script>
	import Atome from '../Assets/atome.png';
	import Design from '../Assets/designLogo.png';
	import Flex from '../Assets/flexLogo.png';
	import Rocket from '../Assets/rocketLogo.png';
	import Seo from '../Assets/seoLogo.png';
	import Button from '../Components/ButtonCTA.svelte';
	import MethodSection from './MethodSection.svelte';
	import servicesSeo from '../Assets/seo.png';
	import servicesDesign from '../Assets/design.png';
	import servicesConversion from '../Assets/conversion.png';
</script>

<main class="services-section">
	<!-- Halos lumineux néon en arrière-plan -->
	<div class="glow-orb orb-blue"></div>

	<div class="wrapper__paragraph">
		<h2 class="title">Création de Sites Internet Professionnels & Solutions de Visibilité Locale</h2>
		
		<div class="services-grid">
			<div class="glow-orb orb-red"></div>
			<!-- SEO / Visibilité -->
			<div class="service-box">
				<div class="image-container">
					<img src={servicesSeo} alt="Être visible sur Google et référencement SEO" class="service-image" />
				</div>
				<h3 class="title-2">Être trouvé par vos futurs clients</h3>
				<p class="subtitle">
					Vous avez besoin que vos clients vous trouvent facilement sur Google lorsqu'ils cherchent vos services. Nous optimisons votre présence locale (Google Maps) et votre référencement naturel (SEO) pour vous placer devant vos concurrents.
				</p>
				<div class="cta-card">
					<Button />
				</div>
			</div>

			<!-- Design / Image de marque -->
			<div class="service-box">
				<div class="image-container">
					<img src={servicesDesign} alt="Design sur-mesure et identité de marque" class="service-image" />
				</div>
				<h3 class="title-2">Inspirer confiance immédiatement</h3>
				<p class="subtitle">
					Votre site est votre vitrine digitale. Vous avez besoin d'un design professionnel et moderne qui rassure vos visiteurs, reflète parfaitement la qualité de votre travail et les convainc de vous contacter.
				</p>
				<div class="cta-card">
					<Button />
				</div>
			</div>

			<!-- Conversion / Ventes -->
			<div class="service-box">
				<div class="image-container">
					<img src={servicesConversion} alt="Optimisation des conversions et ventes" class="service-image" />
				</div>
				<h3 class="title-2">Transformer vos visiteurs en clients</h3>
				<p class="subtitle">
					Avoir des visiteurs ne suffit pas. Vous avez besoin d'un site pensé pour l'action : parcours fluides, boutons d'appel stratégiques et formulaires simples pour multiplier vos contacts, réservations et ventes.
				</p>
				<div class="cta-card">
					<Button />
				</div>
			</div>
		</div>

		<MethodSection />
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

	/* Halos lumineux néon en arrière-plan */
	.glow-orb {
		position: absolute;
		border-radius: 50%;
		filter: blur(120px);
		opacity: 0.12;
		z-index: 1;
		pointer-events: none;
	}
	.orb-red {
		width: 800px;
		height: 450px;
		background: #ff3366; /* Rouge néon / Cerise moderne */
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		z-index: 1;
		opacity: 0.15; /* Réduit un peu car le rouge ressort très fort */
	}
	.orb-blue {
		width: 550px;
		height: 550px;
		background: var(--cta, #1481ba);
		bottom: 20%;
		right: -200px;
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
		position: relative;
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
	.title-2 {
		font-size: clamp(1.5rem, 1vw, 2rem);
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
		position: relative;
	}

	.image-container {
		width: 100%;
		height: 200px;
		overflow: hidden;
		border-radius: 12px;
		border: 1px solid rgba(255, 255, 255, 0.08);
		background: rgba(255, 255, 255, 0.02);
		display: flex;
		align-items: center;
		justify-content: center;
		margin-bottom: 1.25rem;
	}

	.service-image {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.service-box:hover .service-image {
		transform: scale(1.6);
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
		z-index: 2;
	}
	.service-box:hover {
		background: rgba(255, 255, 255, 0.04);
		border-color: rgba(255, 255, 255, 0.15);
		transform: translateY(-5px);
		box-shadow: 0 20px 40px rgba(0, 0, 0, 0.25);
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
