<script>
	import { onMount } from 'svelte';
	import Header from '../sections/Header.svelte';
	import { fade } from 'svelte/transition';
	import SVG from '../Assets/png-gralypho/svgHero.svg';
	import animationHero from '../Assets/png-gralypho/animationHero.mp4';
	import heroAnime from '../Assets/png-gralypho/heroAnimated.gif';
	import AutoText from '../Components/AutoText.svelte';
	import ButtonCta from '../Components/ButtonCTA.svelte';
	import Line from "../Assets/line.svg";

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
			<h1 class="imaginer"><span>G</span>ralypho</h1>
			<img class = "line" src={Line} alt="">
			<!-- <h1 class="developper">Développer</h1>
			<h1 class="creer">Créer</h1> -->
		</div>
		<div class="autoText">
			<AutoText />
		</div>
		<h2>
			Nous nous engageons à améliorer la <span>communication </span> et la <span>visibilité</span>
			de votre entreprise. <br />Grâce à des solutions digitales sur <span>mesure</span>, nous vous
			offrons l'opportunité d'optimiser votre <span>temps</span>, d'attirer de nouveaux
			<span>clients </span>et d'augmenter votre <span>productivité </span>de manière significative.
		</h2>

		<div class="wrapper-contact">
			<!-- <a class="contact" href="/#section-form">Contact</a> -->
			<ButtonCta />
		</div>
	</div>
</section>

<style>
	.H-section {
		display: grid;
		grid-template-columns: repeat(12, 1fr), ;
		grid-template-rows: auto;
		height: auto;
		font-size: 16px;
		opacity: 1;
		background: url('../Assets/bgtwo.png');
		background-color: var(--primary);
		z-index: 5;	

	}

	.wrapper-text {
		grid-column: 2 / 12;
		grid-row: 1/3;
		display: flex;
		justify-self: center;
		align-self: center;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		border-radius: 20px;
		margin: auto;
		z-index: 2;
	}

	.wrapper-h1 {
		margin-top: 100px;

	}
	.line{
		width: 100%;
		margin-top: -60px;
	}
	.H-section h1 {
		text-align: center;
		font-family: var(--Geologica);
		font-weight: 900;
		text-transform: capitalize;
		letter-spacing: -2px;
		line-height: 40px;
	}
	.imaginer {
		color: var(--whiteGrey);
			font-size: 3rem;
	}
	


	.autoText {
		color: var(--quatrieme);
		font-weight: 400;
		font-size: 1.2rem;
		font-family: var(--Dosis);
		justify-self: center;
		align-self: center;
		text-align: center;
	}
	.H-section h2 {
		font-family: poppins;
		font-weight: 300;
		font-size: var(--m);
		color: var(--whiteGrey);
		text-align: center;
		line-height: 30px;
		margin-top: 40px;
		max-width: 60%;
		/* justify-self: center;
		align-self: center; */
	}
	.H-section h2 span {
		font-weight: 300;
		/* color: var(--CTA); */
	}
	/* .contact {
		text-decoration: none;
		color: rgb(255, 255, 255);
		border: 1px solid rgb(192, 194, 248);
		background-color: var(--bleuAcier);
		font-family: 'Red Hat Display';
		font-size: 1rem;
		font-weight: 500;
		margin-top: 20px;
		margin-left: 0px;
		max-width: 260px;
		border-radius: 10px;
		text-align: center;
		padding: 15px 20px;
		box-shadow: 0px 0px 10px 2px rgba(76, 76, 76, 0.35);
		justify-self: center;
		align-self: center;
	} */

	/* .contact:hover {
		animation: bounce 0.4s ease-in-out;
	} */

	.wrapper-contact {
		display: flex;
		flex-direction: column;
		gap: 0px;
		margin-top: 60px;
		align-items: baseline;
		justify-content: flex-start;
		margin-bottom: 100px;
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

	@media screen and (max-width: 1440px) {
		.wrapper-text {
			grid-column: 2 / 12;
			grid-row: 1/3;
			display: flex;
			flex-direction: column;
			justify-self: center;
			align-self: center;
			border-radius: 20px;
			margin: auto;
			align-items: center;
			justify-content: left;
			z-index: 2;
		}
	}

	@media screen and (max-width: 1024px) {
		.wrapper-text {
			grid-column: 2 / 12;
			grid-row: 1/3;
			display: flex;
			flex-direction: column;
			justify-self: center;
			align-self: center;
			border-radius: 20px;
			margin: auto;
			z-index: 2;
		}
	}

	@media screen and (max-width: 767px) {
		/* .wrapper-text {
			grid-column: 2 / 12;
			grid-row: 1/3;
			display: flex;
			flex-direction: column;
			justify-self: center;
			align-self: center;
			border-radius: 20px;
			margin: auto;
			z-index: 2;
		} */
		/* .H-section h1 {
			text-align: center;
		font-family: var(--Kanit);
		font-weight: 900;
		text-transform: capitalize;
		letter-spacing: 0px;
		line-height: 40px; */
		/* } */
		/* .H-section h2 {
			font-family: poppins;
			font-weight: 200;
			font-size: 1rem;
			color: var(--greyBg);
			text-align: center;
			line-height: 30px;
			margin-top: 40px;
			max-width: 90%;
			justify-self: center;
			align-self: center;
		} */
	}
</style>
