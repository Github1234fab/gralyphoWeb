<script>
	import { onMount } from 'svelte';
	import Header from '../sections/Header.svelte';
	import { fade } from 'svelte/transition';
	import SVG from '../Assets/png-gralypho/svgHero.svg';
	import animationHero from '../Assets/png-gralypho/animationHero.mp4';
	import heroAnime from '../Assets/png-gralypho/heroAnimated.gif';
	import AutoText from '../Components/AutoText.svelte';
	import ButtonCta from '../Components/ButtonCTA.svelte';
	import Line from '../Assets/line.svg';
</script>

<Header />

<section class="H-section">
	<div class="test"></div>
	<div class="wrapper-text">
		<h2 class="subtitle">
			Votre succès,<br>c'est notre misson.
			 	<!-- Un business qui décolle <br>attire toujours l'attention.  -->

		</h2>
		<div class="wrapper-contact">
			<ButtonCta />
		</div>
	</div>
</section>

<style>
	.H-section {
		display: flex;
		min-height: 700px;
		font-size: 16px;
		background-image: url('/fusee.jpg');
		background-repeat: no-repeat;
		background-position: center;
		background-size: cover;
		z-index: 0;
		position: relative;
	}

	.wrapper-text {
		position: absolute;
		top: 60%;
		left: 80%;
		transform: translate(-50%, -50%);
		max-height: auto;
		border: 1px solid whitesmoke;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		border-radius: 20px;
		z-index: 9;
		background-color: rgba(255, 255, 255, 0.068);
		backdrop-filter: blur(10px);
	}

	.subtitle {
		color: var(--whiteGrey);
		font-size: 2rem;
		text-align: center;
		font-family: var(--Geologica);
		font-weight: 100;
		letter-spacing: -2px;
		margin-top: 20px;
		padding: 20px 10px;
		line-height: 50px;
	}

	.wrapper-contact {
		display: flex;
		flex-direction: column;
		gap: 0px;
		margin-top: 20px;
		margin-bottom: 20px;
		align-items: baseline;
		justify-content: flex-start;
		z-index: 10;
	}

	@keyframes bounce {
		0% {
			transform: scale(1) translateY(-2px);
		}
		25% {
			transform: scale(1) translateY(3px);
		}
		50% {
			transform: scale(1) translateY(-1px);
		}
		75% {
			transform: scale(1) translateY(2px);
		}
		100% {
			transform: scale(1) translateY(0);
		}
	}

	@media screen and (max-width: 1156px) {
		.wrapper-text {
			min-width: 30%;
			top: 56%;
			left: 75%;
			border: 1px solid white;
			max-height: 300px;
			z-index: 99;
		}
		.H-section::after {
			position: absolute;
			content: '';
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			height: 100%;
			width: 100%;
			z-index: 5;
		}

		.subtitle {
			color: var(--whiteGrey);
			font-size: 1.5rem;
			text-align: center;
			font-family: var(--Geologica);
			font-weight: 200;
			letter-spacing: -0.5px;
			margin-top: 0px;
				line-height: 32px;
		}
		.wrapper-contact {
			margin-top: 20px;
		}
		/* .autoText {
			margin-top: 0px;
		} */
	}
	@media screen and (max-width: 768px) {
		.wrapper-text {
			min-width: 48%;
			top: 53%;
			left: 73%;
			border: 1px solid white;
			max-height: 300px;
			z-index: 99;
		}
		.H-section::after {
			position: absolute;
			content: '';
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			height: 100%;
			width: 100%;
			z-index: 5;
		}

		.subtitle {
			color: var(--whiteGrey);
			font-size: 1.5rem;
			text-align: center;
			font-family: var(--Geologica);
			font-weight: 200;
			letter-spacing: -0.5px;
			margin-top: 0px;
		}
		.wrapper-contact {
			margin-top: 20px;
		}
	}


</style>
