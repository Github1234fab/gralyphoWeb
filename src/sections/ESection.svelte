<script>
	import CardServices from '../Components/CardServices.svelte';
	import IconWifi from '../Assets/icon-wifi.svg';
	import iconApplication from '../Assets/icon-application.svg';
	import iconPalette from '../Assets/icon-palette.svg';
	import iconSatelit from '../Assets/icon-satelit.svg';
	import IconFB from '../Assets/icon-fb.svg';
	import IconStrategy from '../Assets/icon-strategy.svg';
	import AutoText from '../Components/AutoText.svelte';
	import { bounceIn } from 'svelte/easing';

	const servicesTab = [
		// {
		// 	title: 'Site Web',
		// 	lien: '/creation-site-internet',
		// 	icon: IconWifi,
		// 	p: 'Un site web unique et sur mesure, créé et développé pour optimiser le développement et la croissance de votre entreprise.'
		// },
		// {
		// 	title: 'Application',
		// 	lien: '/creation-application',
		// 	icon: iconApplication,
		// 	p: "Une application web sur mesure pour vous permettre au quoitidien de gérer, de calculer, d'optimiser, de générer, d'automatiser, etc."
		// },
		{
			title: 'Communication',
			lien: '/creation-design-logos',
			icon: iconPalette,
			p: 'Création de logos et de supports de communication.'
		},
		{
			title: 'Audit SEO',
			lien: '/referencement-seo-sea',
			icon: iconSatelit,
			p: 'Application des différentes techniques de référencements naturels.'
		},
		{
			title: 'Réseaux Sociaux',
			lien: '/gestion-media-sociaux',
			icon: IconFB,

			p: 'Gestion de vos réseaux sociaux, plublications et rédactions.'
		},
		{
			title: 'Stratégie Digitale',
			lien: '/etude-strategie-digitale',

			icon: IconStrategy,
			p: 'Étude de stratégie digitale sur mesure. Benchmarking - Seo - Marketing'
		}
	];
</script>

<section class="E-section">
	<!-- <h1>Notre proposition</h1> -->

	<div class="wrapper-text">
		<h2>Nos solutions digitales, pour le succès de votre entreprise.</h2>
		<div class="autoText"><AutoText /></div>

	</div>

	<div class="wrapper-cards-services">
		{#each servicesTab as service}
			<CardServices
				title={service.title}
				lien={service.lien}
				i={service.i}
				p={service.p}
				icon={service.icon}
			/>
		{/each}
	</div>
</section>

<style>
	.E-section {
		display: grid;
		grid-template-columns: repeat(12, 1fr);
		grid-template-rows: auto;
		margin-bottom: 0px;
		height: auto;
		font-size: 16px;
		/* background-color: var(--primary); */
		background: var(--gradient);
		overflow: hidden;
	}

	/* :global(.card-services) {
		flex: 1 1 25%;
		min-height: 400px;
	} */

	.wrapper-text {
		grid-column: 2/ 12;
		grid-row: 3;
		display: flex;
		flex-direction: column;
		border-radius: 20px;
		margin-top: -20px;
	}

	/* .E-section h1 {
		grid-column: 2/ 12;
		grid-row: 1;
		font-family: var(--Geologica);
		text-transform: uppercase;
		font-size: var(--s);
		color: var(--whiteGrey);
		font-weight: 600;
		letter-spacing: -0.04em;
		margin-top: 50px;
		margin-left: 0px;
		margin-bottom: 20px;
		text-align: center;
	} */
	.autoText {
		color: var(--green);
		font-weight: 900;
		font-size: 1.2rem;
		font-family: var(--Dosis);
		justify-self: center;
		align-self: center;
		text-align: center;
		margin-top: 30px;
		z-index: 10;
	}

	.E-section h2 {
		font-family: var(--Geologica);
		font-size: var(--l);
		color: var(--whiteGrey);
		font-weight: 900;
		letter-spacing: -1px;
		margin-left: 0px;
		text-align: center;
		line-height: 45px;
		margin-top: 100px;
		min-width: 100%;
	}

	/* .E-section h3 {
		font-family: var(--Poppins);
		font-size: var(--m);
		color: var(--whiteGrey);
		font-weight: 300;
		letter-spacing: -0.04em;
		margin-left: 0px;
		text-align: justify;
		hyphens: auto;
		line-height: 30px;
		max-width: 90%;
		margin: 50px auto;
	}
	.E-section h3 span {
		font-weight: 600;
		color: var(--whiteGrey);
	} */

	.wrapper-cards-services {
		grid-column: 2/12;
		grid-row: 4;
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		justify-content: center;
		gap: 35px;
		margin-bottom: 150px;
		margin-top: 80px;
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

	@media screen and (min-width: 1400px) and (max-width: 2500px) {
	}

	@media screen and (min-width: 1200px) and (max-width: 1400px) {
	}

	@media screen and (min-width: 992px) and (max-width: 1200px) {
	}

	@media screen and (min-width: 768px) and (max-width: 992px) {
		:global(.card-services) {
			flex: 1 1 35%;
		}
	}

	@media screen and (min-width: 576px) and (max-width: 767px) {
		:global(.card-services) {
			flex: 1 1 35%;
		}
	}

	@media screen and (min-width: 300px) and (max-width: 575px) {
		:global(.card-services) {
			flex: 1 1 50%;
		}
		/* .E-section h2 {
			line-height: 39px;
		} */
	}
</style>
