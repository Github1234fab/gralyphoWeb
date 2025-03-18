<script>
	// import Background from "../Assets/gralyphoHeroImg.jpeg"

	import PropositionsCards from './Propositions-cards.svelte';
	const tab = [
		{
			type: 'Rapide. Efficace. Pro',
			subtitle: 'Votre site web livré en 3 jours',
			description: ['Site professionnel', 'Intégration formulaire de contact', 'Optimisation SEO', 'Livraison sous 3 jours', '6 pages', 'Design moderne', "Frais unique d'hébergement : 6 euros/mensuel"],
			lien: '/creation-site-internet',
			layerTxt: 'Basic',
			price: '3 jours'
		},
		{
			type: 'Un site unique',
			subtitle: 'Démarquez vous !',
			description: ['Site entièrement développé sur mesure', 'Design unique', 'Personnalisation unique', 'liberté totale de création', '5 à 10 pages', 'Intégration forumaire de contact', "Frais unique d'hébergement : 6 euros/mensuel"],
			lien: '/site-internet-CMS',
			layerTxt: 'Custom',
			price: '15 jours'
		},
		{
			type: 'Application PWA',
			subtitle: 'Votre application web au meilleur prix',
			description: ['Application sur mesure', 'PWA = Légèreté et prix modéré', 'Utilisation hors ligne', 'Hébergement inclus', 'Répond à 100% de vos besoins spécifiques', "Facilité d'installation", 'Ios/Android/Web'],

			lien: '/creation-application',
			layerTxt: 'Application light',
			price: '1 mois'
		},
		{
			type: 'Application Native',
			subtitle: 'Dédiée IOS et Android',
			description: ['Hébergement inclus', 'Maintenance offerte', 'Personnalisation totale', 'Application native pour Ios et Android', 'Efficacité et rapidité', 'Répond à 100% de vos besoins spécifiques', 'comptabilité totale', 'Performance optimisée'],
			lien: '/creation-application',
			layerTxt: 'Application ++',
			price: '1 mois'
		},
		{
			type: 'Site avec CMS Headless',
			subtitle: 'pour une gestion de contenu optimale',
			description: ['Hébergement inclus', 'Maintenance offerte', 'Personnalisation totale', 'Gestion de contenu optimale', 'Répond à 100% de vos besoins spécifiques', 'comptabilité totale', 'Performance optimisée'],
			lien: '/creation-application',
			layerTxt: 'Graal',
			price: '1 mois'
		},
		{
			type: 'Landing Page percutante ',
			subtitle: 'pour une communication efficace',
			description: ["Frais unique d'hébergement : 6 euros/mensuel", 'optimisation SEO', 'Design moderne et original', 'Intégration formulaire de contact', 'Livraison sous 2 jours'],
			lien: '/creation-application',
			layerTxt: 'One page',
			price: '1 jour'
		}
	];
</script>

<main>
	<h1 class="title">Nos solutions de site internet et d'application</h1>
	<div class="wrapper__cards">
		{#each tab as infos}
			<PropositionsCards type={infos.type} description={infos.description} lien={infos.lien} layerTxt={infos.layerTxt} price={infos.price} subtitle={infos.subtitle} />
		{/each}
	</div>
</main>

<style>
	main {
		background-color: var(--primary);
		z-index: 0;
		padding: 70px;
	}
	.wrapper__cards {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		justify-content: center;
		align-items: center;
		gap: 30px;
		z-index: 2;
		width: 100%;
		margin: 50px auto;
	}
	.title {
		font-size: 3rem;
		color: var(--whiteGrey);
		font-weight: 700;
		font-family: var(--Red);
		text-align: center;
		letter-spacing: -1px;
		z-index: 3;
		margin-top: 50px;
	}

	@media screen and (max-width: 1068px) {
		.wrapper__cards {
			display: grid;
			grid-template-columns: repeat(2, 1fr);
			justify-content: center;
			align-items: center;
			gap: 30px;
			z-index: 2;
			width: 90%;
			margin: 50px auto;
		}
		main {
			padding: 10px;
			height: auto;
		}

		.title {
			font-size: 2.2rem;
		}
	}
	@media screen and (max-width: 568px) {
		main {
			padding: 10px;
			height: auto;
		}

		.wrapper__cards {
			display: flex;
			flex-direction: column;
			gap: 30px;
		}
		.title {
			font-size: 2.2rem;
		}
	}
</style>
