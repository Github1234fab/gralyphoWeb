<script>

// import Background from "../Assets/gralyphoHeroImg.jpeg"

	import PropositionsCards from './Propositions-cards.svelte';
	const tab = [
		{
			type: 'Votre site web livré en 3 jours. Rapide. \n Efficace. \n Pro',
			description: 'Mettez en avant votre activité avec un site ultra-rapide et efficace. ',
			img: 'Rocket',
			alt: 'fusée',
			lien: '/creation-site-internet',
			layerTxt: "Basic"
		},
		{
			type: "Besoin d'un site internet sur mesure,\n démarquez vous !",
			description:
				'Gérez votre contenu facilement avec notre solution CMS clef en main ou CMS Headless',
			img: 'Flex',
			alt: 'une personne danse et représente la flexibilté',
			lien: '/site-internet-CMS',
				layerTxt: "Custom"
		},
		{
			type: 'Application PWA',
			description: 'Des solutions concrètes pour répondre aux besoins de votre entreprise.',
			img: 'Seo',
			alt: 'illustration sur le SEO',
			lien: '/creation-application',
				layerTxt: "Application light"
		},
		{
			type: 'Application Native',
			description: 'Des solutions concrètes pour répondre aux besoins de votre entreprise.',
			img: 'Seo',
			alt: 'illustration sur le SEO',
			lien: '/creation-application',
				layerTxt: "Application ++",
		},
		{
			type: 'CMS Headless, pour une gestion de contenu optimale',
			description: 'Des solutions concrètes pour répondre aux besoins de votre entreprise.',
			img: 'Seo',
			alt: 'illustration sur le SEO',
			lien: '/creation-application',
				layerTxt: "Graal",
		},
		{
			type: 'Landing Page percutante, pour une communication efficace',
			description: 'Des solutions concrètes pour répondre aux besoins de votre entreprise.',
			img: 'Seo',
			alt: 'illustration sur le SEO',
			lien: '/creation-application',
				layerTxt: "One page",
		}
	];
</script>

<main class="main">


	<div class="wrapper__cards">
		<h1 class="title">Nos solutions de site internet et d'applications</h1>
		{#each tab as infos}
			<PropositionsCards type={infos.type} description={infos.description} lien={infos.lien} layerTxt={infos.layerTxt} />
		{/each}
	</div>
</main>

<style>
	.main {
		padding: 50px;
		background-image: white;
		/* background-image: url('../Assets/smartphoneTech.jpeg');
		background-size: cover;
		background-position: bottom;
		background-repeat: no-repeat; */
		z-index: 0;
		position: relative;
		
	}
	/* .main::after{
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-image: linear-gradient(
			to bottom,
			rgba(0, 0, 0, 0.5),
			rgba(0, 0, 0, 0.5)
		);
		z-index: 1;
	} */
	.wrapper__cards {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 50px;
		flex-wrap: wrap;
		margin-top: 50px;
		z-index: 2;
	}
	.title {
		font-size: 3rem;
		color: var(--primary);
		font-weight: 700;
		font-family: var(--Red);
		text-align: center;
		letter-spacing: -1px;
		z-index: 9;
	}

	@media screen and (max-width: 768px) {
		.main {
			padding: 20px;
			height: auto;
		}
		
		.title {
			font-size: 2.2rem;
		}
	}

</style>
