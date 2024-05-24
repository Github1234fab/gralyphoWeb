<script>
	import { onMount } from 'svelte';
	import Header from '../sections/Header.svelte';
	import { fade } from 'svelte/transition';
	import SVG from '../Assets/png-gralypho/svgHero.svg';
	import animationHero from '../Assets/png-gralypho/animationHero.mp4';
	import heroAnime from '../Assets/png-gralypho/heroAnimated.gif';
	// import Particules from '../Components/Particules.svelte';

	let textIndex = 0;
	let textTab = [' de Site Internet.', "d'Applications."];

	onMount(() => {
		setInterval(() => {
			textIndex = (textIndex + 1) % textTab.length;
		}, 1200);
	});
</script>
<!-- <Particules/> -->
<Header />
<section class="H-section">
	
	<img src={heroAnime} alt="Gif animé" class="img" />
	<div class="wrapper-text">
		<div class="wrapper-h1">
			<h1 class="imaginer">Imaginer.</h1>
			<h1 class="developper">Développer.</h1>
			<h1 class="creer">Créer.</h1>
		</div>

		<h3>Conception <span>{textTab[textIndex]}</span></h3>
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
	}
	.img {
		grid-column: 9/ 12;
		grid-row: 1;
		height: 400px;
		width: auto;
		margin-top: 100px;
	}
	.wrapper-text {
		grid-column: 1 / 8;
		grid-row: 1/3;
		display: flex;
		flex-direction: column;
		border-radius: 20px;
		margin-left: 50px;
		z-index: 2;
	}

	.wrapper-h1 {
		margin-top: 80px;
	}
	.H-section h1 {
		text-align: left;
		font-family: 'radio canada big';
		font-weight: 900;
		font-size: clamp(4em, 12.5vw, 10em);
		text-transform: capitalize;
		letter-spacing: clamp(-5px, 14.5vw, -0.03em);
		margin-left: -20px;
		line-height: clamp(60px, 10.5vw, 150px);
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

	.H-section h3 {
		font-family: poppins;
		font-weight: 500;
		font-size: 1em;
		letter-spacing: -1px;
		color: var(--greyBg);
		transition: 1s ease-in-out;
		margin-left: -5px;
		margin-top: 40px;
		text-align: left;
	}
	.H-section h3 span {
		color: rgb(191, 191, 191);
		font-weight: 700;
		font-size: 1.2rem;
	}
	.H-section h2 {
		font-family: poppins;
		font-weight: 300;
		font-size: var(--m);
		color: var(--greyBg);
		text-align: left;
		line-height: 30px;
		margin-top: 40px;
		margin-left: -10px;
	}
	.H-section h2 span {
		font-weight: 600;
		color: var(--greyBg);
	}
	.contact {
		text-decoration: none;
		color:  var(--primary);
		background-color: var(--CTA-jaune);
		font-family: 'Heebo';
		font-size: var(--m);
		font-weight: bolder;
		margin-top: 20px;
		margin-left: 0px;
		min-width: 200px;
		border-radius: 5px;
		text-align: center;
		padding: 20px;
		box-shadow: 0px 0px 10px 2px rgba(76, 76, 76, 0.35);
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
		.img {
			grid-column: 9/12;
			grid-row: 1;
			margin: auto;
			height: 350px;
			margin-top: 100px;
			/* display: none; */
		}
		.wrapper-text {
			grid-column: 1 / 7;
			grid-row: 1;
			display: flex;
			flex-direction: column;
			align-items: flex-start;
			justify-content: flex-start;
			border-radius: 20px;
			margin-left: 0px;
			margin-top: 20px;
			margin-left: 30px;
			z-index: 2;
		}
	}

	@media screen and (max-width: 1024px) {
		.img {
			grid-column: 3/12;
			grid-row: 1;
			margin: auto;
			height: 320px;
			margin-top: -20px;
			/* display: none; */
		}
		.wrapper-text {
			grid-column: 1 / 12;
			grid-row: 2;
			display: flex;
			flex-direction: column;
			align-items: flex-start;
			justify-content: flex-start;
			border-radius: 20px;
			margin-left: 0px;
			margin-top: -20px;
			margin-left: 30px;
			z-index: 2;
		}
	}

	@media screen and (max-width: 767px) {
		.img {
			grid-column: 3/12;
			grid-row: 1;
			margin: auto;
			height: 300px;
			margin-top: -20px;
			margin-left: -20px;
			/* display: none; */
		}

		.wrapper-text {
			grid-column: 1 / 12;
			grid-row: 2;
			display: flex;
			flex-direction: column;
			align-items: flex-start;
			justify-content: flex-start;
			border-radius: 20px;
			margin-left: 0px;
			margin-top: -80px;
			margin-left: 30px;
			z-index: 2;
		}
	}
</style>
