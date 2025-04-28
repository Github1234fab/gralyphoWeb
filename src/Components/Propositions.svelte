<script>
	// import Background from "../Assets/gralyphoHeroImg.jpeg"

	import PropositionsCards from './Propositions-cards.svelte';
	const tab = [
		{
			type: 'Site Custom  \n et Landing page',
			subtitle: 'Site internet Statique',
			description: ['Sans BDD', 'Sans gestion de contenu', 'Contrat de maintenance pour modification' ],
			lien: '/creation-site-internet/#sans-cms',
			layerTxt: 'Site web sans CMS',
			price: 'Livré \n en 3 jours'
		},
		{
			type: 'Site Vitrine \n et site E-Commerce',
			subtitle: 'site internet Dynamique',
			description: ['BDD', 'Avec gestion de contenu', 'Contrat de maintenance ou autonomie', ],
			lien: '/creation-site-internet/#cms',
			layerTxt: 'Site web avec CMS',
			price: ' Livré en \n 15 jours'
		},
		{
			type: 'PWA ou Native',
			subtitle: 'Légèreté et performance',
			description: ['Application sur mesure', "PWA légère à prix doux", "Native, robuste et rapide" ],
			lien: '/creation-application',
			layerTxt: 'Applications',
			price: ' Livré \n en 1 mois'
		},
		{
			type: 'Référencement internet - SEO',
			subtitle: '+ de trafic, + de visibilité, + plus de vente',
			description: ['Stratégie SEO', "Audit technique", "Optimisation à 100%" ],
			lien: '/referencement-seo-sea',
			layerTxt: 'SEO',
			price: ' Livré \n en 1 mois'
		}
	
	];
</script>

<main>
	<h1 class="title">Nos solutions de site internet, d'application <br> et de référencement SEO</h1>
	<div class="wrapper__cards">
		{#each tab as infos}
			<PropositionsCards type={infos.type} description={infos.description} lien={infos.lien} layerTxt={infos.layerTxt} subtitle={infos.subtitle} />
		{/each}
	</div>
</main>

<style>
	main {
		background-color: var(--primary);
		z-index: 0;
		padding: 90px;
	}
	.wrapper__cards {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-wrap: wrap;
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

	@media screen and (max-width: 1100px) {
		
		main {
			padding: 30px;
			height: auto;
		}

		.title {
			font-size: 2.2rem;
		}
	}
	@media screen and (max-width: 883px) {
		.wrapper__cards {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-wrap: wrap;
		gap: 30px;
		z-index: 2;
		width: 90%;
		margin: 50px auto;
	}
		main {
			padding: 20px;
			height: auto;
		}

		.title {
			font-size: 2.2rem;
		}
	}
</style>
