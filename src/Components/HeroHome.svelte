<script>
	import AgencyExpert from '../Assets/agency_creative_expert.png';
	import CTA from '../Components/ButtonCTA.svelte';
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
				<span>Votre partenaire web de proximité<br class="mobile-only" /> - Ouest Lyonnais</span>
			</div>

			<h1>
				Votre site internet <span class="highlight-text-gold">sans prise de tête</span>,<br class="desktop-only" />
				conçu pour <span class="highlight-text-blue">trouver vos clients</span>
			</h1>

			<h2>Nous créons des sites vitrines rapides, des boutiques locales et configurons votre visibilité sur Google Maps. Conçu spécialement pour les artisans, commerçants et indépendants de l'Ouest Lyonnais. Pas d'abonnement obligatoire : vous restez 100% propriétaire de votre site.</h2>

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
						Votre partenaire de confiance en direct
					</div>
					<img class="expert-img" src={AgencyExpert} alt="Digital expert designer Gralypho" />
				</div>
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
		background: var(--green, #d6a319);
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
		background-color: var(--green, #d6a319);
		border-radius: 50%;
		display: inline-block;
		box-shadow: 0 0 10px var(--green, #d6a319);
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

	.mobile-only {
		display: none;
	}

	.highlight-text-gold {
		background: linear-gradient(135deg, #ffe8a3 0%, var(--green, #d6a319) 100%);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
		filter: drop-shadow(0 2px 25px rgba(214, 163, 25, 0.25));
		display: inline;
	}

	.highlight-text-blue {
		background: linear-gradient(135deg, #95e1ff 0%, var(--cta, #1481ba) 100%);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
		filter: drop-shadow(0 2px 25px rgba(20, 129, 186, 0.3));
		display: inline;
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


	.cta-wrapper {
		margin-top: 0.5rem;
	}

	/* Cadre Photo Humain & Expertise Premium */
	.expert-frame-container {
		position: relative;
		width: 100%;
		max-width: 480px;
		height: 480px;
		display: flex;
		justify-content: center;
		align-items: center;
		perspective: 1200px;
	}

	.expert-glow {
		position: absolute;
		width: 380px;
		height: 380px;
		background: radial-gradient(circle, rgba(214, 163, 25, 0.25) 0%, rgba(20, 129, 186, 0.2) 60%, transparent 100%);
		filter: blur(50px);
		z-index: 1;
		pointer-events: none;
		animation: pulse-glow 8s infinite ease-in-out;
	}

	.expert-card {
		position: relative;
		width: clamp(220px, 40vw, 420px);
		height: clamp(220px, 40vw, 420px);
		border-radius: 24px;
		background: rgba(255, 255, 255, 0.03);
		border: 1px solid rgba(255, 255, 255, 0.1);
		padding: 8px;
		box-shadow:
			0 30px 60px rgba(0, 0, 0, 0.5),
			0 0 50px rgba(214, 163, 25, 0.1);
		transform: rotateY(-10deg) rotateX(8deg) rotateZ(-2deg);
		transition:
			transform 0.5s cubic-bezier(0.4, 0, 0.2, 1),
			box-shadow 0.5s ease;
		z-index: 2;
		overflow: hidden;
		box-sizing: border-box;
	}

	.expert-card:hover {
		transform: rotateY(-5deg) rotateX(4deg) rotateZ(-1deg) translateZ(15px);
		box-shadow:
			0 45px 80px rgba(0, 0, 0, 0.6),
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
		background-color: var(--green, #d6a319);
		border-radius: 50%;
		box-shadow: 0 0 8px var(--green, #d6a319);
		display: inline-block;
		animation: pulse-dot 1.8s infinite ease-in-out;
	}
	/* Animations */
	@keyframes pulse-dot {
		0% {
			transform: scale(0.9);
			box-shadow: 0 0 0 0 rgba(214, 163, 25, 0.7);
		}
		70% {
			transform: scale(1.1);
			box-shadow: 0 0 0 8px rgba(214, 163, 25, 0);
		}
		100% {
			transform: scale(0.9);
			box-shadow: 0 0 0 0 rgba(214, 163, 25, 0);
		}
	}
	@keyframes pulse-glow {
		0% {
			transform: scale(1);
			opacity: 0.8;
		}
		50% {
			transform: scale(1.1);
			opacity: 0.95;
		}
		100% {
			transform: scale(1);
			opacity: 0.8;
		}
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
			max-width: 440px;
			height: 380px;
		}

		.expert-card {
			width: clamp(180px, 55vw, 320px);
			height: clamp(180px, 55vw, 320px);
			transform: rotateY(-6deg) rotateX(4deg) rotateZ(-1deg);
		}
	}

	@media screen and (max-width: 768px) {
		.hero-container {
			padding: 9.5rem 1rem 3rem 1rem;
		}
		.hero-grid {
			padding: 2rem 1rem;
		}
		.hero-left-col h1 {
			font-size: clamp(1.5rem, 6vw, 2.2rem);
			text-align: center;
		}
		.badge-premium {
			font-size: 0.72rem;
			padding: 8px 14px;
			text-align: center;
			justify-content: center;
			max-width: 100%;
			white-space: normal;
			line-height: 1.4;
			border-radius: 16px;
		}
		.mobile-only {
			display: inline-block;
		}
		.expert-glow {
			width: 220px;
			height: 220px;
		}
	}

	@media screen and (max-width: 320px) {
		.badge-premium {
			font-size: 0.65rem;
			padding: 6px 10px;
		}
		.hero-left-col {
			display: flex;
			align-items: center;
			justify-content: center;
			min-width: 0;
			width: 100%;
			padding: 0.5rem 0;
		}
		.expert-frame-container {
			max-width: 100%;
			height: 310px;
			margin: 0.5rem auto 1.5rem auto;
		}
		.expert-card {
			width: 250px;
			height: 250px;
		}
	}
</style>
