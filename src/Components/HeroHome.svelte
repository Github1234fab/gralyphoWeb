<script>
	import Compteur from '../Assets/logoGralypho2.jpeg';
	import CTA from '../Components/ButtonCTA.svelte';
	import Firebase from '../Assets/firebase.png';
	import Svelte from '../Assets/Svelte_Logo.svg.png';
	import Wix from '../Assets/wixLogo.png';
	import Strapi from '../Assets/Strapi.monogram.logo.png';
	import Shopify from '../Assets/Shopify.png';
	import WP from '../Assets/WP.png';
</script>

<main class="hero-container">
	<!-- Halos lumineux néon en arrière-plan -->
	<div class="glow-orb orb-gold"></div>
	<div class="glow-orb orb-blue"></div>

	<div class="wrapper__text">
		<div class="badge-premium">
			<span class="badge-dot"></span>
			Expertise SvelteKit & Firebase certifiée
		</div>

		<h1>Création de Site Internet<br /><span class="highlight-text">& Application Mobile</span> sur-mesure</h1>
		
		<h2>
			Votre agence web certifiée pour des solutions digitales performantes et ultra-rapides au cœur de
			<a href="/agence-web-Lyon-creation-site-internet-seo" class="maillage-geo">Lyon</a> et des
			<a href="/agence-web-monts-du-Lyonnais" class="maillage-geo">Monts du Lyonnais</a>.
		</h2>

		<div class="cta-wrapper">
			<CTA />
		</div>
		
		<div class="compteur-wrapper">
			<div class="pulsing-ring"></div>
			<img class="compteur" src={Compteur} alt="Logo Gralypho - Agence Web de pointe" />
		</div>
	</div>

	<div class="wrapper__text2">
		<h3>
			Développeurs web et d'applications experts, nous concevons des architectures digitales sur-mesure, légères et optimisées pour le <strong class="accent-text">référencement naturel (SEO)</strong>. L'adaptabilité technologique est notre force pour vous offrir des solutions de prestige au tarif le plus juste.
		</h3>
		
		<div class="tech-stack-title">
			<span class="line"></span>
			<span>NOS TECHNOLOGIES DE PRÉDILECTION</span>
			<span class="line"></span>
		</div>

		<div class="wrapper__logos">
			<a href="https://firebase.google.com/" target="_blank" class="tech-card">
				<img class="Firebase logo" src={Firebase} alt="Firebase Logo" />
				<span>Firebase</span>
			</a>
			<a href="https://svelte.dev/" target="_blank" class="tech-card">
				<img class="svelte logo" src={Svelte} alt="Svelte Logo" />
				<span>SvelteKit</span>
			</a>
			<a href="https://strapi.io/" target="_blank" class="tech-card">
				<img class="Strapi logo" src={Strapi} alt="Strapi Logo" />
				<span>Strapi CMS</span>
			</a>
			<a href="https://webflow.com/" target="_blank" class="tech-card">
				<img class="webflow logo" src="https://cdn.prod.website-files.com/5f15081919fdf673994ab5fd/651f24a499bc8356ba844e0c_Webflow-Logo.svg" alt="Webflow Logo" />
				<span>Webflow</span>
			</a>
			<a href="https://www.shopify.com/fr" target="_blank" class="tech-card">
				<img class="Shopify logo" src={Shopify} alt="Shopify Logo" />
				<span>Shopify</span>
			</a>
			<a href="https://fr.wix.com/website/templates" target="_blank" class="tech-card">
				<img class="Wix logo" src={Wix} alt="Wix Logo" />
				<span>Wix Expert</span>
			</a>
			<a href="https://fr.wordpress.org/" target="_blank" class="tech-card">
				<img class="Wordpress logo" src={WP} alt="WordPress Logo" />
				<span>WordPress</span>
			</a>
		</div>
	</div>
</main>

<style>
	.hero-container {
		background: radial-gradient(circle at 50% 0%, #151e36 0%, var(--primary) 70%);
		min-height: 100vh;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 6rem 2rem 4rem 2rem;
		position: relative;
		overflow: hidden;
	}

	/* Halos lumineux néon en arrière-plan */
	.glow-orb {
		position: absolute;
		border-radius: 50%;
		filter: blur(100px);
		opacity: 0.15;
		z-index: 1;
		pointer-events: none;
	}
	.orb-gold {
		width: 400px;
		height: 400px;
		background: var(--green, #D6A319);
		top: -100px;
		left: 10%;
	}
	.orb-blue {
		width: 500px;
		height: 500px;
		background: var(--cta, #1481ba);
		bottom: 10%;
		right: 5%;
	}

	.wrapper__text {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 2.5rem;
		width: 100%;
		max-width: 1100px;
		z-index: 5;
		text-align: center;
	}

	/* Badge Premium Animé */
	.badge-premium {
		display: inline-flex;
		align-items: center;
		gap: 10px;
		background: rgba(255, 255, 255, 0.05);
		border: 1px solid rgba(255, 255, 255, 0.1);
		padding: 8px 18px;
		border-radius: 50px;
		color: #ffffff;
		font-family: var(--Geologica), sans-serif;
		font-size: 0.85rem;
		font-weight: 600;
		letter-spacing: 0.05em;
		text-transform: uppercase;
		backdrop-filter: blur(5px);
		box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
	}
	.badge-dot {
		width: 8px;
		height: 8px;
		background-color: var(--green, #D6A319);
		border-radius: 50%;
		display: inline-block;
		box-shadow: 0 0 10px var(--green, #D6A319);
		animation: pulse-dot 1.8s infinite ease-in-out;
	}

	.wrapper__text h1 {
		font-family: var(--Geologica), sans-serif;
		letter-spacing: -0.03em;
		color: #ffffff;
		font-weight: 900;
		font-size: clamp(2.5rem, 5.5vw, 4.5rem);
		text-align: center;
		margin: 0;
		line-height: 1.15;
	}

	.highlight-text {
		background: linear-gradient(135deg, var(--green, #D6A319) 0%, #ffffff 100%);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}

	.wrapper__text h2 {
		font-family: var(--Red), sans-serif;
		font-weight: 400;
		color: rgba(255, 255, 255, 0.85);
		font-size: clamp(1rem, 2vw, 1.35rem);
		text-align: center;
		max-width: 800px;
		line-height: 1.6;
		margin: 0 auto;
	}

	.maillage-geo {
		color: var(--green, #D6A319);
		text-decoration: none;
		font-weight: 700;
		border-bottom: 1px dashed var(--green, #D6A319);
		transition: all 0.3s ease;
	}
	.maillage-geo:hover {
		color: #ffffff;
		border-bottom-color: #ffffff;
	}

	.cta-wrapper {
		margin-top: 0.5rem;
	}

	/* Logo interactif futuriste en lévitation */
	.compteur-wrapper {
		position: relative;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		margin-top: 2rem;
		animation: float-logo 6s infinite ease-in-out;
	}
	.compteur {
		height: clamp(180px, 30vw, 320px);
		width: clamp(180px, 30vw, 320px);
		border-radius: 50%;
		border: 4px solid rgba(255, 255, 255, 0.05);
		box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5), 
		            0 0 40px rgba(214, 163, 25, 0.15);
		object-fit: cover;
		z-index: 2;
	}
	.pulsing-ring {
		position: absolute;
		width: 108%;
		height: 108%;
		border-radius: 50%;
		border: 1px solid rgba(214, 163, 25, 0.2);
		z-index: 1;
		animation: pulse-ring 4s infinite linear;
	}

	/* Bloc descriptif sémantique */
	.wrapper__text2 {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		margin-top: 5rem;
		gap: 2.5rem;
		width: 100%;
		max-width: 1000px;
		z-index: 5;
		padding: 2.5rem;
		background: rgba(255, 255, 255, 0.02);
		border: 1px solid rgba(255, 255, 255, 0.05);
		border-radius: 24px;
		backdrop-filter: blur(15px);
		-webkit-backdrop-filter: blur(15px);
		box-shadow: 0 30px 60px rgba(0, 0, 0, 0.3);
	}
	.wrapper__text2 h3 {
		font-family: var(--Geologica), sans-serif;
		font-weight: 300;
		font-size: clamp(0.95rem, 1.8vw, 1.15rem);
		text-align: center;
		line-height: 1.8;
		color: rgba(255, 255, 255, 0.9);
		margin: 0;
	}
	.accent-text {
		color: var(--green, #D6A319);
		font-weight: 600;
	}

	.tech-stack-title {
		display: flex;
		align-items: center;
		gap: 15px;
		width: 100%;
		color: rgba(255, 255, 255, 0.4);
		font-family: var(--Geologica), sans-serif;
		font-size: 0.75rem;
		font-weight: 700;
		letter-spacing: 0.15em;
	}
	.tech-stack-title .line {
		flex: 1;
		height: 1px;
		background: rgba(255, 255, 255, 0.1);
	}

	/* Grille de technologies sous forme de cartes d'élite */
	.wrapper__logos {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
		gap: 1.5rem;
		width: 100%;
	}
	.tech-card {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 12px;
		background: rgba(255, 255, 255, 0.03);
		border: 1px solid rgba(255, 255, 255, 0.06);
		padding: 1.25rem;
		border-radius: 16px;
		width: 110px;
		transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
		color: rgba(255, 255, 255, 0.6);
		font-family: var(--Red), sans-serif;
		font-size: 0.8rem;
		font-weight: 600;
	}
	.tech-card:hover {
		background: rgba(255, 255, 255, 0.08);
		border-color: var(--green, #D6A319);
		transform: translateY(-5px);
		color: #ffffff;
		box-shadow: 0 10px 25px rgba(214, 163, 25, 0.15);
	}
	.tech-card:hover .logo {
		transform: scale(1.1) rotate(5deg);
	}

	.tech-card .logo {
		height: 48px;
		width: 48px;
		object-fit: contain;
		filter: drop-shadow(0 4px 10px rgba(0, 0, 0, 0.3));
		transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
	}

	/* Animations */
	@keyframes pulse-dot {
		0% { transform: scale(0.9); box-shadow: 0 0 0 0 rgba(214, 163, 25, 0.7); }
		70% { transform: scale(1.1); box-shadow: 0 0 0 8px rgba(214, 163, 25, 0); }
		100% { transform: scale(0.9); box-shadow: 0 0 0 0 rgba(214, 163, 25, 0); }
	}
	@keyframes float-logo {
		0% { transform: translateY(0px); }
		50% { transform: translateY(-12px); }
		100% { transform: translateY(0px); }
	}
	@keyframes pulse-ring {
		0% { transform: rotate(0deg) scale(0.98); opacity: 0.5; }
		50% { transform: rotate(180deg) scale(1.02); opacity: 0.8; }
		100% { transform: rotate(360deg) scale(0.98); opacity: 0.5; }
	}

	/* Media Queries */
	@media screen and (max-width: 768px) {
		.hero-container {
			padding-top: 5rem;
		}
		.wrapper__text {
			gap: 1.5rem;
		}
		.wrapper__text2 {
			margin-top: 3.5rem;
			padding: 1.5rem;
			gap: 1.5rem;
		}
		.tech-card {
			width: 95px;
			padding: 1rem 0.5rem;
			gap: 8px;
			font-size: 0.75rem;
		}
		.tech-card .logo {
			height: 38px;
			width: 38px;
		}
	}
</style>
