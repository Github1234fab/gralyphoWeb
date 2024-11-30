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

	// let textIndex = 0;
	// let textTab = [' de Site Internet.', "d'Applications."];

	// onMount(() => {
	// 	setInterval(() => {
	// 		textIndex = (textIndex + 1) % textTab.length;
	// 	}, 1200);
	// });
</script>

<Header />

<section class="H-section clip-path">
	<div class="wrapper-text">
		<div class="wrapper-h1">
			<h1 class="title">Gralypho</h1>
			<!-- <h1 class="web">Agence Web</h1> -->
			<h2 class="subtitle">Un business qui décolle, <br />ça ne passe jamais inaperçu.</h2>
			<!-- <img class="line" src={Line} alt="" /> -->
		</div>
		<div class="autoText">
			<AutoText />
		</div>
		<!-- <h2>
			Vous êtes en PME, PMI, en indépendant ? Vous êtes commerçant ou artisan ? <br />Nous vous
			accompagnons sur tous vos projets digitaux. Nous vous offrons l'opportunité
			d'optimiser votre <span>temps</span>, d'attirer de nouveaux
			<span>clients </span>et d'augmenter votre <span>productivité </span>de manière significative.
		</h2> -->

		<div class="wrapper-contact">
			<!-- <a class="contact" href="/#section-form">Contact</a> -->
			<ButtonCta />
		</div>
	</div>
</section>

<style>
	.H-section {
		display: flex;
		min-height: 100vh;
		font-size: 16px;
		opacity: 1;
		background-image: url('/fuseeguyane.png');
		background-repeat: no-repeat;
		background-position: top;
		background-size: cover;
		background-color: red;
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
		/* background-color: rgba(11, 11, 65, 0.436); */
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		border-radius: 20px;
		z-index: 2;
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
	/* .web {
		font-size: 1.3rem;
		position: absolute;
		top: 22%;
		left: 55%;
		color: var(--green);
		font-family: var(--Architects);
		rotate: -5deg;
		text-decoration: underline  ;
	}	 */

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
	}
	/* .H-section h2 {
		font-family: poppins;
		font-weight: 300;
		font-size: var(--m);
		color: var(--whiteGrey);
		text-align: center;
		line-height: 30px;
		margin-top: 40px;
		max-width: 60%;
	} */
	/* .H-section h2 span {
		font-weight: 300;
	} */

	.wrapper-contact {
		display: flex;
		flex-direction: column;
		gap: 0px;
		margin-top: 60px;
		align-items: baseline;
		justify-content: flex-start;
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
</style>
