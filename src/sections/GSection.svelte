<script>
	import Slider from '../Components/Slider.svelte';
	import { fade } from 'svelte/transition';
</script>

<section class="G-section" in:fade={{ duration: 1000 }}>
	<!-- Halos de lueur cosmique -->
	<div class="glow-orb orb-1"></div>
	<div class="glow-orb orb-2"></div>

	<!-- En-tête de la section -->
	<div class="wrapper-text">
		<h1>Nos <span class="highlight-text">Réalisations</span></h1>
		<p class="subtitle">Découvrez un aperçu des plateformes web, applications de pointe et identités graphiques conçues sur-mesure pour nos clients.</p>
	</div>

	<!-- Slider de prestige -->
	<div class="slider-wrapper">
		<Slider />
	</div>
</section>

<style>
	.G-section {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		width: 100%;
		background-color: var(--primary);
		position: relative;
		overflow: hidden;
		padding: 6rem 2rem 4rem 2rem;
		gap: 3rem;
	}

	/* Lueurs cosmiques d'arrière-plan */
	.glow-orb {
		position: absolute;
		border-radius: 50%;
		filter: blur(120px);
		opacity: 0.08;
		pointer-events: none;
		z-index: 1;
	}
	.orb-1 {
		width: 400px;
		height: 400px;
		background: var(--cta, #1481ba);
		top: 10%;
		right: -150px;
	}
	.orb-2 {
		width: 400px;
		height: 400px;
		background: var(--green, #D6A319);
		bottom: 10%;
		left: -150px;
	}

	.wrapper-text {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		text-align: center;
		gap: 1rem;
		max-width: 800px;
		z-index: 3;
	}

	.G-section h1 {
		font-family: var(--Geologica), sans-serif;
		font-size: clamp(2.2rem, 5vw, 3.2rem);
		color: #ffffff;
		font-weight: 900;
		margin: 0;
		letter-spacing: -0.03em;
		line-height: 1.15;
	}

	.highlight-text {
		background: linear-gradient(135deg, var(--green, #D6A319) 0%, #ffffff 100%);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}

	.subtitle {
		font-family: var(--Red), sans-serif;
		font-size: clamp(1rem, 2vw, 1.15rem);
		font-weight: 300;
		color: rgba(255, 255, 255, 0.75);
		line-height: 1.6;
		margin: 0;
	}

	.slider-wrapper {
		width: 100%;
		max-width: 1200px;
		z-index: 3;
	}

	@media screen and (max-width: 768px) {
		.G-section {
			padding: 4rem 1.25rem;
			gap: 2rem;
		}
	}
</style>
