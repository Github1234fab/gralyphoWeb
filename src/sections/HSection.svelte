<script>
	import { onMount } from 'svelte';
	import Header from '../sections/Header.svelte';
	import { fade } from 'svelte/transition';
	import SVG from '../Assets/png-gralypho/svgHero.svg';
	import animationHero from '../Assets/png-gralypho/animationHero.mp4';
	import heroAnime from '../Assets/png-gralypho/heroAnimated.gif';
	import AutoText from '../Components/AutoText.svelte';

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
			<h1 class="imaginer">Imaginer.</h1>
			<h1 class="developper">Développer.</h1>
			<h1 class="creer">Créer.</h1>
			<div class="particules"></div>
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
			<a class="contact" href="/#section-form">Contactez-nous</a>
		</div>
	</div>
</section>


<style>

	.H-section {
		display: grid;
		grid-template-columns: repeat(12, 1fr);
		grid-template-rows: auto;
		height: auto;
		font-size: 16px;
		opacity: 1;
		background-color: rgb(26, 44, 57);
		z-index: 5;	 
		/* clip-path: polygon(50% 0%, 63% 0, 100% 0, 100% 100%, 68% 100%, 33% 95%, 0 100%, 0 0, 18% 0);   */
	}

	.wrapper-text {
		grid-column: 2 / 12;
		grid-row: 1/3;
		display: flex;
		justify-self: center;
		align-self: center;
		flex-direction: column;
		border-radius: 20px;
		margin: auto;
		z-index: 2;
	}

	.wrapper-h1 {
		margin-top: 100px;
		margin-bottom: 30px;
	}
	.H-section h1 {
		text-align: center;
		font-family: 'radio canada big';
		font-weight: 300;
		font-size: 9rem;
		text-transform: capitalize;
		letter-spacing: -10px;
		line-height: 110px;
	}
	.imaginer {
		color: #04a1f57a;
	}
	.developper {
		color: #04a1f5b7;
		margin-top: -10px;
	}
	.creer {
		color: #04a1f5;
		margin-top: -10px;
	}

	.autoText {
		color: yellow;
		font-weight: 300;
		font-size: 1.2rem;
		font-family: 'Red Hat Display';
		justify-self: center;
		align-self: center;
	}
	.H-section h2 {
		font-family: poppins;
		font-weight: 300;
		font-size: var(--m);
		color: var(--greyBg);
		text-align: center;
		line-height: 30px;
		margin-top: 40px;
		max-width: 50%;
		justify-self: center;
		align-self: center;
	}
	.H-section h2 span {
		font-weight: 600;
		/* color: var(--CTA); */
	}
	.contact {
		text-decoration: none;
		color: white;
		background-color: var(--CTA-jaune);
		font-family: 'Red Hat Display';
		font-size: 1rem;
		font-weight: bolder;
		margin-top: 20px;
		margin-left: 0px;
		min-width: 200px;
		border-radius: 5px;
		text-align: center;
		padding: 15px 5px;
		box-shadow: 0px 0px 10px 2px rgba(76, 76, 76, 0.35);
		justify-self: center;
		align-self: center;
	}

	.contact:hover {
		animation: bounce 0.4s ease-in-out;
	}

	.wrapper-contact {
		display: flex;
		flex-direction: column;
		gap: 0px;
		margin-top: 60px;
		align-items: baseline;
		justify-content: flex-start;
		margin-bottom: 200px;
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
			justify-content: center;
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
		.H-section h1 {
			text-align: center;
			font-family: 'radio canada big';
			font-weight: 300;
			font-size: 4rem;
			text-transform: capitalize;
			letter-spacing: -5px;
			line-height: 60px;
		}
			.H-section h2 {
		font-family: poppins;
		font-weight: 300;
		font-size: 1rem;
		color: var(--greyBg);
		text-align: justify;
		line-height: 30px;
		margin-top: 40px;
		max-width: 80%;
		justify-self: center;
		align-self: center;
	}
	}
</style>
