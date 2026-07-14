<script>
	import PropositionsCards from './Propositions-cards.svelte';
	
	const tab = [
		{
			type: 'Site Web',
			subtitle: 'Votre vitrine sur internet',
			description: ['Design moderne & personnalisé', 'Optimisé pour tous les écrans', 'Vous restez propriétaire à 100%' ],
			lien: '/creation-site-internet',
			layerTxt: 'Découvrir nos sites',
			price: 'Rapide'
		},
		{
			type: 'Application',
			subtitle: 'Votre outil métier sur-mesure',
			description: ['Espace membre & Réservations', 'Simplification de votre gestion', 'Application mobile ou Web' ],
			lien: '/creation-application',
			layerTxt: 'Découvrir nos apps',
			price: 'Sur-mesure'
		},
		{
			type: 'Référencement SEO',
			subtitle: 'Trouvé par vos futurs clients',
			description: ['Fiche Google Maps configurée', 'Mots-clés locaux ciblés', 'Devancez vos concurrents locaux' ],
			lien: '/referencement-seo-sea',
			layerTxt: 'Améliorer mon SEO',
			price: 'Visible'
		}
	];
</script>

<main class="propositions-section">
	<h2 class="title">
		Nos solutions de <span class="highlight-text">site internet</span>, <span class="highlight-text">d'application</span> & de <span class="highlight-text">visibilité locale</span>
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
		background-clip: text;
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
