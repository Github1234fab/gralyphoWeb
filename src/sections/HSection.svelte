<script>
	import { onMount } from 'svelte';
	import Header from '../sections/Header.svelte';
	import { fade } from 'svelte/transition';
	import SVG from '../Assets/png-gralypho/svgHero.svg';
	import animationHero from '../Assets/png-gralypho/animationHero.mp4';
	// import line from "../Assets/png-gralypho/circle-13.svg";
	// import arrow from "../Assets/png-gralypho/arrow-34.svg";

	let textIndex = 0;
	let textTab = [' de Site Internet', "d'Application Web"];

	onMount(() => {
		setInterval(() => {
			textIndex = (textIndex + 1) % textTab.length;
		}, 1200);
	});
</script>

<Header />
<section class="H-section">
	<div class="wrapper-text">
		<h1>Imaginer <br /> Développer <br />Créer</h1>

		<h3>Conception <span>{textTab[textIndex]}</span></h3>
		<h2>
			Nous créeons des sites Web et des Applications sur mesure pour les professionnels <br
			/>souhaitant obtenir des résultats tangibles en terme
			<span> d'efficacité, de gain de temps</span> <br />et d'augmentation du taux de
			<span> conversion de clients</span>.<br />
		</h2>

		<div class="wrapper-contact">
			<a class="contact" href="/#footer">Nous contacter</a>
			<a class="contact2" href="/#footer">Devis gratuit</a>
		</div>
	</div>

	<img src={SVG} alt="" class="img" />
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
		grid-column: 8 / 13;
		grid-row: 1;
		/* height: 200px;
		width: 200px; */
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

	.H-section h1 {
		text-align: left;
		font-family: Heebo;
		font-weight: 900;
		font-size: clamp(4em, 12.5vw, 9em);
		color: #de9d12;
		text-transform: capitalize;
		letter-spacing: clamp(-5px, 14.5vw, -0.03em);
		margin-top: 50px;
		margin-left: 0px;
		line-height: clamp(60px, 10.5vw, 150px);
	}

	.H-section h3 {
		font-family: poppins;
		font-weight: 500;
		font-size: 1em;
		letter-spacing: -1px;
		color: var(--greyBg);
		transition: 1s ease-in-out;
		margin-left: 0px;
		margin-top: 20px;
		text-align: left;
	}
	.H-section h3 span {
		color: var(--rouge);
	}
	.H-section h2 {
		font-family: poppins;
		font-weight: 300;
		font-size: var(--m);
		color: var(--greyBg);
		text-align: left;
		line-height: 30px;
		margin-top: 20px;
		margin-left: 0px;
	}
	.H-section h2 span {
		font-weight: 600;
		color: var(--greyBg);
	}
	.contact {
		text-decoration: none;
		color: var(--primary);
		background-color: var(--CTAHero);
		font-family: kanit;
		font-weight: 400;
		margin-top: 0px;
		margin-left: 0px;
		width: 160px;
		border-radius: 6px;
		text-align: center;
		padding: 10px;
		box-shadow: 0px 0px 10px 2px rgba(76, 76, 76, 0.35);
	}
	.contact2 {
		text-decoration: none;
		color: var(--primary);
		background-color: var(--CTAHero2);
		font-family: kanit;
		font-weight: 400;
		margin-top: 10px;
		margin-left: 10px;
		width: 160px;
		border-radius: 6px;
		text-align: center;
		padding: 10px;
		box-shadow: 0px 0px 10px 2px rgba(76, 76, 76, 0.35);
	}
	.contact:hover {
		animation: bounce 0.4s ease-in-out;
	}
	.contact2:hover {
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

	@media screen and (max-width: 768px) {
		.img {
			grid-column: 1 / 13;
			grid-row: 1;
			margin-top: -40px;
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
</style>
