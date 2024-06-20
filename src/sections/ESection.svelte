<script>
	import CardServices from '../Components/CardServices.svelte';
	import iconInternet from '../Assets/png-gralypho/iconInternet.png';
	import iconApplication from '../Assets/png-gralypho/iconApplication.png';
	import iconDesign from '../Assets/png-gralypho/iconDesign.png';
	import iconLoupe from '../Assets/png-gralypho/loupe.png';
	import iconFacebook from '../Assets/png-gralypho/iconFacebook.png';
	import iconStrat from '../Assets/png-gralypho/iconStratégie.png';

	const servicesTab = [
		{
			title: 'Developpement de Site Web',
			lien: '/Sites',
			i: iconInternet,
			// i: 'fa-solid fa-globe',
			p: "Nous créons des sites Web sur mesure et la seule limite, c'est votre imagination!"
		},
		{
			title: "Développement  d'Application",
			lien: '/Applications',
			i: iconApplication,
			// i: 'fa-solid fa-mobile-screen',
			p: 'Obtenez une application web sur mesure pour votre entreprise avec téléchargement automatisé'
		},
		{
			title: 'Design',
			lien: '/Refonte',
			i: iconDesign,
			// i: 'fa-solid fa-wand-magic-sparkles',
			p: "Le Design d'un site est primordial. Nous vous proposons des designs modernes et adaptés à votre secteur d'activité."
		},
		{
			title: 'Stratégie SEO/SEA',
			lien: '/Referencement',
			i: iconLoupe,
			// i: 'fa-solid fa-magnifying-glass',
			p: 'Nous vous proposons des stratégies de référencement SEO et SEA pour une place en première page de Google.'
		},
		{
			title: 'Réseaux Sociaux',
			lien: '/Marketing',
			i: iconFacebook,
			// i: 'fa-solid fa-hashtag',
			p: 'Ne vous embêtez plus avec la gestion de vos réseaux sociaux, nous nous en chargeons pour vous!'
		},
		{
			title: 'Stratégie Digitale',
			lien: '/Composants',
			i: iconStrat,
			// i: 'fa-solid fa-chart-simple',
			p: 'Nous vous proposons des stratégies digitales pour booster votre visibilité sur le Web.'
		}
	];
</script>

<section class="E-section">
	<div class="wrapper-text">
		<h1>Notre proposition</h1>
		<h2>Sites sur mesure, applications, refonte, stratégie, Seo, réseaux sociaux.</h2>
		<h3>
			Nous souhaitons créer un site internet <span>qui vous ressemble</span>, au plus près de votre
			identité et de vos exigences. Nous nous occupons également de la
			<span>création de votre identité graphique</span>
			, de votre logo, de votre design, de la création de vos contenus et de la gestion de vos
			<span>réseaux sociaux. </span><br />
			Nous ne sommes pas dépendant des templates de sites Web, nous créons des
			<span>sites Web sur mesure</span>
			et la seule limite, c'est votre <span>imagination!</span>
		</h3>
	</div>

	<div class="wrapper-cards-services">
		{#each servicesTab as service}
			<CardServices title={service.title} lien={service.lien} i={service.i} p={service.p} />
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
		background-color: var(--greyBg);
		overflow: hidden;
	}

	:global(.card-services) {
		flex: 1 1 25%;
		min-height: 400px;
	}
	.wrapper-text {
		grid-column: 2/ 12;
		grid-row: 1;
		display: flex;
		flex-direction: column;
		border-radius: 20px;
	}
	.E-section h1 {
		font-family: 'Heebo';
		text-transform: uppercase;
		font-size: var(--m);
		color: var(--bleuAcier);
		font-weight: 600;
		letter-spacing: -0.04em;
		margin-top: 50px;
		margin-left: 0px;
		margin-bottom: 20px;
		text-align: center;
	}
	.E-section h2 {
		font-family: 'radio canada big';
		font-size: var(--xl);
		color: var(--primary);
		font-weight: 500;
		letter-spacing: -0.04em;
		margin-left: 0px;
		text-align: center;
		line-height: 49px;
		margin-top: 20px;
	}

	.E-section h3 {
		font-family: epilogue;
		font-size: var(--m);
		color: var(--primary);
		font-weight: 400;
		letter-spacing: -0.04em;
		margin-left: 0px;
		text-align: justify;
		line-height: 30px;
		width: 100%;
		margin: 50px auto;
	}
	.E-section h3 span {
		font-weight: 800;
	}


	.wrapper-cards-services {
		grid-column: 2/12;
		grid-row: 2;
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		justify-content: center;
		gap: 15px;
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
		.E-section h2 {
			line-height: 39px;
		}
	}
</style>
