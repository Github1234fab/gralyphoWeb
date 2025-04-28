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
		<h2>Nos services additionnels, pour le succès de votre entreprise.</h2>
		<div class="autoText"><AutoText /></div>
	</div>

	<div class="wrapper-cards-services">
		{#each servicesTab as service}
			<CardServices title={service.title} lien={service.lien} i={service.i} p={service.p} icon={service.icon} />
		{/each}
	</div>
</section>

<style>
	.E-section {
		display: flex;
		flex-direction: column;
		background-color: var(--primary);
		padding: 20px;
	}

	.wrapper-text {
		display: flex;
		flex-direction: column;
		border-radius: 20px;
	}
	.autoText {
		color: var(--green);
		font-weight: 900;
		font-size: 1.5rem;
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
		min-width: 100%;
	}

	.wrapper-cards-services {
		margin-top: 100px;
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		justify-content: center;
		gap: 35px;
		margin-bottom: 50px;
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
		.wrapper-cards-services {
			gap: 20px;
			width: 100%;
		}
	}
</style>
