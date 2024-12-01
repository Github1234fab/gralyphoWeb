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
		<div class="wrapper-h1">
			<h1 class="title">Gralypho</h1>
			<h2 class="subtitle">Un business qui décolle, <br />ça ne passe jamais inaperçu !</h2>
		</div>
		<div class="autoText">
			<AutoText />
		</div>

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
		background-color: red;
		background-repeat: no-repeat;
		background-position: top;
		background-size: cover;
		z-index: 0;
		position: relative;
	}

	.wrapper-text {
		position: absolute;
		top: 50%;
		left: 80%;
		transform: translate(-50%, -50%);
		width: 30%;
		max-height: auto;
		padding: 20px;
		border: 1px solid whitesmoke;
		/* background: linear-gradient(rgba(161, 161, 231, 0.436), rgba(2, 2, 59, 0.436)); */
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		border-radius: 20px;
		z-index: 9;
	}

	.title {
		color: var(--whiteGrey);
		font-size: 4rem;
		text-align: center;
		font-family: var(--Geologica);
		font-weight: 900;
		text-transform: capitalize;
		letter-spacing: -2px;
		position: relative;
	}

	.subtitle {
		color: var(--whiteGrey);
		font-size: 2rem;
		text-align: center;
		font-family: var(--Geologica);
		font-weight: 100;
		letter-spacing: -2px;
		margin-top: 20px;
	}

	.autoText {
		color: var(--green);
		font-weight: 500;
		font-size: 1.2rem;
		font-family: var(--Dosis);
		justify-self: center;
		align-self: center;
		text-align: center;
		margin-top: 30px;
		z-index: 10;
	}

	.wrapper-contact {
		display: flex;
		flex-direction: column;
		gap: 0px;
		margin-top: 60px;
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

	@media screen and (max-width: 768px) {
		.wrapper-text {
			width: 70%;
			top: 70%;
			left: 50%;
			background: linear-gradient(rgba(145, 145, 216, 0.436), rgba(2, 2, 32, 0.436)); 
			border: none;
		}
		.title {
		color: var(--whiteGrey);
		font-size: 3rem;
		text-align: center;
		font-family: var(--Geologica);
		font-weight: 900;
		text-transform: capitalize;
		letter-spacing: -2px;
		position: relative;
	}

	.subtitle {
		color: var(--whiteGrey);
		font-size: 1.2rem;
		text-align: center;
		font-family: var(--Geologica);
		font-weight: 300;
		letter-spacing: -0.5px;
		margin-top: 20px;
	}

	}
</style>
