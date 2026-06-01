<script>
	import AgencyExpert from '../Assets/agency_creative_expert.png';
	import CTA from '../Components/ButtonCTA.svelte';
	import Firebase from '../Assets/firebase.png';
	import Svelte from '../Assets/Svelte_Logo.svg.png';
	import Wix from '../Assets/wixLogo.png';
	import Strapi from '../Assets/Strapi.monogram.logo.png';
	import Shopify from '../Assets/Shopify.png';
	import ReactNative from '../Assets/logo_reactNative.png';
</script>

<main class="hero-container">
	<!-- Halos lumineux néon en arrière-plan -->
	<div class="glow-orb orb-gold"></div>
	<div class="glow-orb orb-blue"></div>

	<div class="hero-grid">
		<!-- Colonne de gauche : Textes et CTA -->
		<div class="hero-left-col">
			<div class="badge-premium">
				<span class="badge-dot"></span>
				Expertise SvelteKit & React Native certifiée
			</div>

			<h1>
				Concevoir <span class="highlight-text-gold">l'exceptionnel</span>,<br class="desktop-only" />
				maîtriser <span class="highlight-text-blue">la performance</span>
			</h1>
			
			<h2>
				Votre agence web certifiée pour des solutions digitales performantes et ultra-rapides au coeur
				<a href="/agence-web-Lyon-creation-site-internet-seo" class="maillage-geo">de l'Ouest Lyonnais</a> à 30 min de 
				<a href="/agence-web-monts-du-Lyonnais" class="maillage-geo">Lyon</a>.
			</h2>

			<div class="cta-wrapper">
				<CTA />
			</div>
		</div>

		<!-- Colonne de droite : L'Humain et l'Expertise (Option Premium) -->
		<div class="hero-right-col">
			<div class="expert-frame-container">
				<!-- Le halo de lueur arrière -->
				<div class="expert-glow"></div>
				
				<!-- Cadre photo premium avec effet de profondeur -->
				<div class="expert-card">
					<div class="expert-badge">
						<span class="pulse-icon"></span>
						L'humain au cœur de vos projets
					</div>
					<img class="expert-img" src={AgencyExpert} alt="Digital expert designer Gralypho" />
				</div>
			</div>
		</div>
	</div>

	<div class="wrapper__text2">
		<h3>
			Experts en développement web et en applications mobiles, nous concevons des architectures digitales sur-mesure, <strong class="accent-text">en un clin d'oeil</strong>. L'adaptabilité technologique est notre force et nous vous offrons des solutions de prestige au tarif le plus juste.
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
			<a href="https://fr.wordpress.org/" target="_blank" class="tech-card">
				<img class="Wordpress logo" src={ReactNative} alt="WordPress Logo" />
				<span>ReactNative</span>
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
		padding: 10rem 2rem 4rem 2rem;
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

	.hero-grid {
		display: grid;
		grid-template-columns: 1.2fr 0.8fr;
		gap: 4rem;
		align-items: center;
		width: 100%;
		max-width: 1200px;
		margin: 0 auto;
		z-index: 5;
		border: 1px solid rgba(255, 255, 255, 0.08);
		padding: 3.5rem 4.5rem;
		border-radius: 32px;
		background: rgba(255, 255, 255, 0.015);
		backdrop-filter: blur(12px);
		box-shadow: 0 20px 50px rgba(0, 0, 0, 0.2);
		box-sizing: border-box;
	}

	.hero-left-col {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		text-align: left;
		gap: 2rem;
	}

	.hero-right-col {
		display: flex;
		justify-content: center;
		align-items: center;
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

	.hero-left-col h1 {
		font-family: var(--Geologica), sans-serif;
		letter-spacing: -0.03em;
		color: #ffffff;
		font-weight: 900;
		font-size: clamp(2rem, 4.5vw, 3.4rem);
		text-align: left;
		margin: 0;
		line-height: 1.2;
		text-shadow: 0 4px 30px rgba(0, 0, 0, 0.4);
	}

	.desktop-only {
		display: block;
	}

	.highlight-text-gold {
		background: linear-gradient(135deg, #FFE8A3 0%, var(--green, #D6A319) 100%);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
		filter: drop-shadow(0 2px 25px rgba(214, 163, 25, 0.25));
		display: inline-block;
	}

	.highlight-text-blue {
		background: linear-gradient(135deg, #95E1FF 0%, var(--cta, #1481ba) 100%);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
		filter: drop-shadow(0 2px 25px rgba(20, 129, 186, 0.3));
		display: inline-block;
	}

	.hero-left-col h2 {
		font-family: var(--Red), sans-serif;
		font-weight: 400;
		color: rgba(255, 255, 255, 0.85);
		font-size: clamp(1rem, 2vw, 1.25rem);
		text-align: left;
		max-width: 700px;
		line-height: 1.6;
		margin: 0;
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

	/* Cadre Photo Humain & Expertise Premium */
	.expert-frame-container {
		position: relative;
		width: 100%;
		max-width: 440px;
		height: 440px;
		display: flex;
		justify-content: center;
		align-items: center;
		perspective: 1200px;
	}

	.expert-glow {
		position: absolute;
		width: 350px;
		height: 350px;
		background: radial-gradient(circle, rgba(214, 163, 25, 0.25) 0%, rgba(20, 129, 186, 0.2) 60%, transparent 100%);
		filter: blur(50px);
		z-index: 1;
		pointer-events: none;
		animation: pulse-glow 8s infinite ease-in-out;
	}

	.expert-card {
		position: relative;
		width: clamp(280px, 35vw, 380px);
		height: clamp(280px, 35vw, 380px);
		border-radius: 24px;
		background: rgba(255, 255, 255, 0.03);
		border: 1px solid rgba(255, 255, 255, 0.1);
		padding: 8px;
		box-shadow: 0 30px 60px rgba(0, 0, 0, 0.5), 
		            0 0 50px rgba(214, 163, 25, 0.1);
		transform: rotateY(-10deg) rotateX(8deg) rotateZ(-2deg);
		transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.5s ease;
		z-index: 2;
		overflow: hidden;
		box-sizing: border-box;
	}

	.expert-card:hover {
		transform: rotateY(-5deg) rotateX(4deg) rotateZ(-1deg) translateZ(15px);
		box-shadow: 0 45px 80px rgba(0, 0, 0, 0.6), 
		            0 0 60px rgba(20, 129, 186, 0.2);
	}

	.expert-img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		border-radius: 18px;
		display: block;
	}

	.expert-badge {
		position: absolute;
		bottom: 24px;
		left: 50%;
		transform: translateX(-50%);
		background: rgba(13, 18, 31, 0.85);
		border: 1px solid rgba(255, 255, 255, 0.1);
		padding: 8px 16px;
		border-radius: 50px;
		color: #ffffff;
		font-family: var(--Geologica), sans-serif;
		font-size: 0.8rem;
		font-weight: 600;
		white-space: nowrap;
		display: flex;
		align-items: center;
		gap: 8px;
		backdrop-filter: blur(10px);
		box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
		z-index: 3;
	}

	.pulse-icon {
		width: 6px;
		height: 6px;
		background-color: var(--green, #D6A319);
		border-radius: 50%;
		box-shadow: 0 0 8px var(--green, #D6A319);
		display: inline-block;
		animation: pulse-dot 1.8s infinite ease-in-out;
	}

	/* Bloc descriptif sémantique */
	.wrapper__text2 {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		margin-top: 12rem;
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
	@keyframes pulse-glow {
		0% { transform: scale(1); opacity: 0.8; }
		50% { transform: scale(1.1); opacity: 0.95; }
		100% { transform: scale(1); opacity: 0.8; }
	}

	/* Media Queries */
	@media screen and (max-width: 1024px) {
		.hero-grid {
			grid-template-columns: 1fr;
			gap: 3rem;
			text-align: center;
			padding: 2.5rem 1.5rem;
			border-radius: 24px;
		}

		.hero-left-col {
			align-items: center;
			text-align: center;
		}

		.hero-left-col h1 {
			text-align: center;
		}

		.hero-left-col h2 {
			text-align: center;
			margin: 0 auto;
		}

		.desktop-only {
			display: none;
		}

		.expert-frame-container {
			margin: 1rem auto 2rem auto;
			max-width: 400px;
			height: 340px;
		}

		.expert-card {
			width: 280px;
			height: 280px;
			transform: rotateY(-6deg) rotateX(4deg) rotateZ(-1deg);
		}
	}

	@media screen and (max-width: 768px) {
		.hero-container {
			padding-top: 9.5rem;
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
