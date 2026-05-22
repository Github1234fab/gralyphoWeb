<script>
	import ButtonCta from './ButtonCTA.svelte';
</script>

<main class="cta-banner-section">
	<div class="wrapper">
		<!-- Halo décoratif interne -->
		<div class="inner-glow"></div>
		
		<h2 class="title">Un projet de site ou d'application en tête ?</h2>
		
		<h3 class="subtitle">
			Vous avez besoin d'un site internet performant ou d'une application mobile sur-mesure ? Vous souhaitez obtenir des informations stratégiques avant de vous lancer ?
			<br />
			Lors d'un premier échange <strong>100% gratuit et sans engagement</strong>, nous étudions votre projet, définissons sa structure idéale et choisissons les technologies de pointe adaptées à votre budget et à vos objectifs SEO.
		</h3>
		
		<p class="final-pitch">
			Discutons ensemble et propulsons votre visibilité !
		</p>

		<div class="actions-wrapper">
			<ButtonCta />
			<a href="/#section-form" class="quote-btn">Obtenir un devis gratuit</a>
		</div>
	</div>
</main>

<style>
	.cta-banner-section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 6rem 2rem;
		background: radial-gradient(circle at 50% 100%, #151e36 0%, var(--primary) 60%);
		position: relative;
		overflow: hidden;
	}

	.wrapper {
		position: relative;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		text-align: center;
		background: rgba(255, 255, 255, 0.02);
		border: 1px solid rgba(255, 255, 255, 0.05);
		border-radius: 28px;
		padding: 4.5rem 3rem;
		gap: 2rem;
		width: 100%;
		max-width: 1000px;
		box-shadow: 0 30px 60px rgba(0, 0, 0, 0.3);
		backdrop-filter: blur(15px);
		-webkit-backdrop-filter: blur(15px);
	}

	.inner-glow {
		position: absolute;
		top: -50%;
		left: -50%;
		width: 200%;
		height: 200%;
		background: radial-gradient(circle at center, rgba(214, 163, 25, 0.05) 0%, transparent 50%);
		pointer-events: none;
		z-index: 1;
	}

	.title {
		font-size: clamp(1.8rem, 3.5vw, 2.6rem);
		font-family: var(--Geologica), sans-serif;
		font-weight: 900;
		color: #ffffff;
		margin: 0;
		line-height: 1.25;
		letter-spacing: -0.02em;
		z-index: 2;
	}

	.subtitle {
		font-size: clamp(0.95rem, 1.8vw, 1.15rem);
		font-weight: 300;
		font-family: var(--Red), sans-serif;
		color: rgba(255, 255, 255, 0.75);
		line-height: 1.8;
		max-width: 800px;
		margin: 0;
		z-index: 2;
	}
	
	.subtitle strong {
		color: var(--green, #D6A319);
	}

	.final-pitch {
		font-family: var(--Geologica), sans-serif;
		font-size: 1.2rem;
		font-weight: 700;
		color: #ffffff;
		margin: 0;
		z-index: 2;
	}

	.actions-wrapper {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		justify-content: center;
		gap: 1.5rem;
		margin-top: 1rem;
		z-index: 2;
		width: 100%;
	}

	.quote-btn {
		background-color: transparent;
		border: 2px solid #ffffff;
		color: #ffffff;
		font-family: var(--Geologica), sans-serif;
		font-size: 0.95rem;
		font-weight: 700;
		border-radius: 50px;
		text-align: center;
		padding: 14px 32px;
		transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
		display: inline-flex;
		align-items: center;
		justify-content: center;
	}
	
	.quote-btn:hover {
		background-color: #ffffff;
		color: var(--primary);
		transform: translateY(-2px);
		box-shadow: 0 10px 25px rgba(255, 255, 255, 0.15);
	}

	@media screen and (max-width: 768px) {
		.cta-banner-section {
			padding: 4rem 1.25rem;
		}
		.wrapper {
			padding: 2.5rem 1.5rem;
			gap: 1.5rem;
		}
		.quote-btn {
			width: 100%;
			padding: 12px 24px;
		}
	}
</style>
