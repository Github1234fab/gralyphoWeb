<script>
	import CardServices from '../Components/CardServices.svelte';
	import IconWifi from '../Assets/icon-wifi.svg';
	import iconApplication from '../Assets/icon-application.svg';
	import iconPalette from '../Assets/icon-palette.svg';
	import iconSatelit from '../Assets/icon-satelit.svg';
		import IconFB from '../Assets/icon-fb.svg';
				import IconStrategy from '../Assets/icon-strategy.svg';
	import { bounceIn } from 'svelte/easing';

	const servicesTab = [
		{
			title: 'Sites Web',
			lien: '/Sites',
			icon: IconWifi,
			p: "Nous créons les sites Web qui vous ressemblent et répondent à vos besoins !"
		},
		{
			title: 'Applications',
			lien: '/Applications',
			icon: iconApplication,
			p: 'Obtenez une application web pour effectuer...ce que vous voulez !'
		},
		{
			title: 'Design',
			lien: '/Refonte',
			icon: iconPalette,
			p: "Conception d'UX et d'UI design. C'est à dire parcours utilisateur et fonctionnalités."
		},
		{
			title: 'Stratégie SEO/SEA',
			lien: '/Referencement',
			icon: iconSatelit,
			p: 'Référecnement naturel ou gratuit, selon vos objectifs et vos besoins..'
		},
		{
			title: 'Réseaux Sociaux',
			lien: '/Marketing',
				icon: IconFB,

			p: 'Nous gérons vos réseaux pour vous!'
		},
		{
			title: 'Stratégie Digitale',
			lien: '/Composants',
		icon: IconStrategy,
			p: "Avoir un site Web c'est bien et avec une stratégie, c'est encore mieux."
		}
	];
</script>

<section class="E-section">
	<h1>Notre proposition</h1>

	<div class="wrapper-text">
		<h2>Nos services</h2>
		<h3>
			Nous souhaitons créer le site internet <span>qui vous ressemble</span>, au plus près de votre
			identité et de vos exigences. <br />Nous nous occupons également de la
			<span>création de votre identité graphique</span>
			, de votre logo, de votre design, de la création de vos contenus et de la gestion de vos
			<span>réseaux sociaux. </span><br />
			Nous ne sommes pas dépendant des templates de sites Web, nous créons des
			<span>sites Web sur mesure</span>
			et la seule limite dans le processus de création est votre <span>imagination!</span>
		</h3>
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
		background-color: var(--primary);
		overflow: hidden;
	}

	:global(.card-services) {
		flex: 1 1 25%;
		min-height: 400px;
	}

	.wrapper-text {
		grid-column: 2/ 12;
		grid-row: 3;
		display: flex;
		flex-direction: column;
		border-radius: 20px;
		margin-top: -20px;
	}

	.E-section h1 {
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
	}
	.E-section h2 {
		font-family: var(--Geologica);
		font-size: var(--l);
		color: var(--whiteGrey);
		font-weight: 900;
		letter-spacing: -1px;
		margin-left: 0px;
		text-align: center;
		line-height: 25px;
		margin-top: 20px;
		min-width: 100%;
	}

	.E-section h3 {
		font-family: var(--Poppins);
		font-size: var(--m);
		color: var(--whiteGrey);
		font-weight: 300;
		letter-spacing: -0.04em;
		margin-left: 0px;
		text-align: center;
		line-height: 30px;
		width: 100%;
		margin: 50px auto;
	}
	.E-section h3 span {
		font-weight: 600;
		color: var(--whiteGrey);
	}

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
