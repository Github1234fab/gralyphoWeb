<script>
	// import Background from "../Assets/gralyphoHeroImg.jpeg"

	import PropositionsCards from './Propositions-cards.svelte';
	const tab = [
		{
			type: 'Rapide. Efficace. Pro',
			subtitle: 'Votre site web livré en 3 jours',
			description: ['Site professionnel', 'Formulaire de contact', 'Optimisation SEO', 'Livraison sous 3 jours', '6 pages', 'Design moderne', 'Hébergement : 10 euros'],
			lien: '/creation-site-internet',
			layerTxt: 'Basic',
			price: 'Livré \n en 3 jours'
		},
		{
			type: 'Un site unique',
			subtitle: 'Démarquez vous !',
			description: ['Site sur mesure', 'Design unique', 'Personnalisation totale', '100% créatif', '5 à 10 pages', 'Forumaire de contact', 'Hébergement : 10 euros'],
			lien: '/site-internet-CMS',
			layerTxt: 'Custom',
			price: ' Livré en \n 15 jours'
		},
		{
			type: 'Application PWA',
			subtitle: 'Votre application web au meilleur prix',
			description: ['Application sur mesure', 'PWA = Légèreté + prix modéré', 'Utilisation hors ligne', 'Hébergement inclus', '100% de vos besoins', "Facilité d'installation", 'Ios/Android/Web'],
			lien: '/creation-application',
			layerTxt: 'Application light',
			price: ' Livré \n en 1 mois'
		},
		{
			type: 'Application Native',
			subtitle: 'Dédiée IOS et Android',
			description: ['Hébergement inclus', 'Personnalisation totale', 'Natif pour Ios et Android', 'Efficacité et rapidité', '100% des besoins spécifiques', 'comptabilité totale', 'Performance optimisée'],
			lien: '/creation-application',
			layerTxt: 'Application ++',
			price: 'Livré \n en 1 mois'
		},
		{
			type: 'Site avec CMS Headless',
			subtitle: 'pour une gestion de contenu optimale',
			description: ['Hébergement inclus', 'Personnalisation totale', 'Gestion de contenu optimale', '100% des besoins spécifiques', 'Comptabilité totale', 'Performance optimisée'],
			lien: '/creation-application',
			layerTxt: 'Graal',
			price: ' Livré \n en 1 mois'
		},
		{
			type: ' Landing Page percutante ',
			subtitle: 'pour une communication efficace',
			description: ['Hébergement : 10 euros', 'Optimisation SEO', 'Design moderne et original', 'Formulaire de contact', 'Livraison sous 2 jours'],
			lien: '/creation-application',
			layerTxt: 'Single page',
			price: 'Livré \n en 1 jour'
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
		width: 80%;
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
