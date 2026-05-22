<script>
	import PropositionsCards from './Propositions-cards.svelte';
	
	const tab = [
		{
			type: 'Site Custom \n 100% sur-mesure & créatif',
			subtitle: 'Site internet Statique ultra-rapide',
			description: ['Zéro WordPress lourd', 'Codage à la main', 'Maintenance & Vitesse Extrême' ],
			lien: '/creation-site-internet/#sans-cms',
			layerTxt: 'Site vitrine d\'exception',
			price: 'Livré \n en 3 jours'
		},
		{
			type: 'Boutique E-Commerce \n & Plateforme Dynamique',
			subtitle: 'Site internet avec base de données',
			description: ['Shopify, Strapi, Webflow', 'Gestion de contenu autonome', 'Boutique en ligne évolutive' ],
			lien: '/creation-site-internet/#cms',
			layerTxt: 'Dynamique & E-Commerce',
			price: ' Livré en \n 15 jours'
		},
		{
			type: 'Application Mobile \n PWA ou Native iOS/Android',
			subtitle: 'Légèreté et performance mobile',
			description: ['Application sur-mesure', "PWA installable sans Store", "Natives robustes & rapides" ],
			lien: '/creation-application',
			layerTxt: 'Applications mobiles',
			price: ' Livré \n en 1 mois'
		},
		{
			type: 'Référencement SEO \n & Domination Google',
			subtitle: 'Multipliez votre trafic qualifié',
			description: ['Audit technique complet', "Recherche mots-clés rentables", "Optimisation sémantique 100%" ],
			lien: '/referencement-seo-sea',
			layerTxt: 'Stratégie SEO / Acquisition',
			price: ' Livré \n en 1 mois'
		}
	];
</script>

<main class="propositions-section">
	<h2 class="title">
		Nos solutions de <span class="highlight-text">site internet</span>, <span class="highlight-text">d'application</span> & de <span class="highlight-text">référencement SEO</span>
	</h2>
	
	<div class="wrapper__cards">
		{#each tab as infos}
			<PropositionsCards 
				type={infos.type} 
				description={infos.description} 
				lien={infos.lien} 
				layerTxt={infos.layerTxt} 
				subtitle={infos.subtitle} 
			/>
		{/each}
	</div>
</main>

<style>
	.propositions-section {
		background-color: var(--primary);
		z-index: 2;
		padding: 6rem 2rem;
		display: flex;
		flex-direction: column;
		align-items: center;
		position: relative;
	}

	.title {
		font-size: clamp(1.8rem, 3.5vw, 2.8rem);
		color: #ffffff;
		font-weight: 800;
		font-family: var(--Geologica), sans-serif;
		text-align: center;
		letter-spacing: -0.02em;
		line-height: 1.25;
		margin: 0 0 3rem 0;
		max-width: 900px;
	}

	.highlight-text {
		background: linear-gradient(135deg, var(--green, #D6A319) 0%, #ffffff 100%);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}

	.wrapper__cards {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-wrap: wrap;
		gap: 2rem;
		z-index: 3;
		width: 100%;
		max-width: 1200px;
		margin: 0 auto;
	}

	@media screen and (max-width: 1100px) {
		.propositions-section {
			padding: 4rem 1.5rem;
		}
	}
</style>
