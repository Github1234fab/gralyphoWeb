<script>
	import CardServices from '../Components/CardServices.svelte';
	const servicesTab = [
		{
			title: 'Developpement de Site Web',
			lien: '/Sites',
			i: 'fa-solid fa-globe',
			p: "Nous créons des sites Web sur mesure et la seule limite, c'est votre imagination!"
		},
		{
			title: "Développement  d'Application Web",
			lien: '/Applications',
			i: 'fa-solid fa-mobile-screen',
			p: 'Obtenez une application web sur mesure pour votre entreprise avec téléchargement automatisé'
		},
		{
			title: 'Design',
			lien: '/Refonte',
			i: 'fa-solid fa-wand-magic-sparkles',
			p: "Pour 75% des utilisateurs du Web, le Design d'un site est primordial. Nous vous proposons des designs modernes et adaptés à votre secteur d'activité."
		},
		{
			title: 'Stratégie SEO/SEA',
			lien: '/Referencement',
			i: 'fa-solid fa-magnifying-glass',
			p: "C'est le nerf de la guerre, le référencement! Nous vous proposons des stratégies de référencement naturel et payant pour vous positionner en première page de Google."
		},
		{
			title: 'Réseaux Sociaux',
			lien: '/Marketing',
			i: 'fa-solid fa-hashtag',
			p: 'Ne vous embêtez plus avec la gestion de vos réseaux sociaux, nous nous en chargeons pour vous!'
		},
		{
			title: 'Stratégie Digitale',
			lien: '/Composants',
			i: 'fa-solid fa-chart-simple',
			p: 'Nous vous proposons des stratégies digitales pour booster votre visibilité sur le Web.'
		}
	];
</script>

<section class="E-section">
	<div class="wrapper-text">
		<h1>Notre proposition</h1>
		<h2>
			Nous proposons une création Web Complète. Nous créeons vos outils digitaux, vos designs, votre
			stratégie sur les réseaux et votre référencement.
		</h2>
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
		font-family: Heebo;
		text-transform: uppercase;
		font-size: var(--m);
		color: var(--jauneB);
		font-weight: 600;
		letter-spacing: -0.04em;
		margin-top: 50px;
		margin-left: 0px;
		margin-bottom: 20px;
		text-align: center;
	}
	.E-section h2 {
		font-family: epilogue;
		font-size: var(--l);
		color: var(--primary);
		font-weight: 600;
		margin-bottom: 0px;
		letter-spacing: -0.04em;
		margin-left: 0px;
		text-align: center;
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
	}
</style>
