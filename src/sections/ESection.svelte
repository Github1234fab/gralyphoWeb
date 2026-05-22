<script>
	import CardServices from '../Components/CardServices.svelte';
	import iconPalette from '../Assets/icon-palette.svg';
	import iconSatelit from '../Assets/icon-satelit.svg';
	import IconFB from '../Assets/icon-fb.svg';
	import IconStrategy from '../Assets/icon-strategy.svg';
	import AutoText from '../Components/AutoText.svelte';

	const servicesTab = [
		{
			title: 'Communication & Identité',
			lien: '/creation-design-logos',
			icon: iconPalette,
			p: 'Création de chartes graphiques d\'élite, logos d\'impact et supports marketing cohérents.'
		},
		{
			title: 'Audit & Netlinking SEO',
			lien: '/referencement-seo-sea',
			icon: iconSatelit,
			p: 'Application experte des techniques sémantiques et techniques de référencement naturel.'
		},
		{
			title: 'Gestion Réseaux Sociaux',
			lien: '/gestion-media-sociaux',
			icon: IconFB,
			p: 'Community Management complet, création de contenus engageants et stratégie éditoriale.'
		},
		{
			title: 'Stratégie Digitale',
			lien: '/etude-strategie-digitale',
			icon: IconStrategy,
			p: 'Benchmarking concurrentiel poussé, études UX/UI, marketing d\'acquisition sur-mesure.'
		}
	];
</script>

<section class="E-section">
	<div class="wrapper-text">
		<h2>Nos services additionnels pour le succès de votre entreprise</h2>
		<div class="autoText"><AutoText /></div>
	</div>

	<div class="wrapper-cards-services">
		{#each servicesTab as service}
			<CardServices 
				title={service.title} 
				lien={service.lien} 
				p={service.p} 
				icon={service.icon} 
			/>
		{/each}
	</div>
</section>

<style>
	.E-section {
		display: flex;
		flex-direction: column;
		background: radial-gradient(circle at 50% 0%, #151e36 0%, var(--primary) 65%);
		padding: 6rem 2rem;
		align-items: center;
		z-index: 2;
		position: relative;
	}

	.wrapper-text {
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
		width: 100%;
		max-width: 900px;
		margin-bottom: 4rem;
	}

	.E-section h2 {
		font-family: var(--Geologica), sans-serif;
		font-size: clamp(1.8rem, 3.5vw, 2.5rem);
		color: #ffffff;
		font-weight: 900;
		letter-spacing: -0.02em;
		text-align: center;
		line-height: 1.3;
		margin: 0;
	}

	.autoText {
		color: var(--green, #D6A319);
		font-weight: 700;
		font-size: 1.25rem;
		font-family: var(--Geologica), sans-serif;
		margin-top: 1.5rem;
		letter-spacing: 0.05em;
		text-transform: uppercase;
	}

	.wrapper-cards-services {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		justify-content: center;
		gap: 2.5rem;
		width: 100%;
		max-width: 1200px;
	}

	@media screen and (max-width: 768px) {
		.E-section {
			padding: 4rem 1.25rem;
		}
		.wrapper-cards-services {
			gap: 1.5rem;
		}
	}
</style>
