<script>

// import Background from "../Assets/gralyphoHeroImg.jpeg"

	import PropositionsCards from './Propositions-cards.svelte';
	const tab = [
		{
			type: 'Site vitrine',
			description: 'Mettez en avant votre activité avec un site ultra-rapide et efficace. ',
			img: 'Rocket',
			alt: 'fusée',
			lien: '/creation-site-internet'
		},
		{
			type: 'Site avec CMS',
			description:
				'Gérez votre contenu facilement avec notre solution CMS clef en main ou CMS Headless',
			img: 'Flex',
			alt: 'une personne danse et représente la flexibilté',
			lien: '/site-internet-CMS'
		},
		{
			type: 'Application PWA',
			description: 'Des solutions concrètes pour répondre aux besoins de votre entreprise.',
			img: 'Seo',
			alt: 'illustration sur le SEO',
			lien: '/creation-application'
		}
	];
</script>

<main>
	<!-- <img src={Background} alt=""> -->
	<h1 class="title">Nos solutions de site internet et d'applications</h1>

	<div class="wrapper__cards">
		{#each tab as infos}
			<PropositionsCards type={infos.type} description={infos.description} lien={infos.lien} />
		{/each}
	</div>
</main>

<style>
	main {
		padding: 50px;
		background-image: url("../Assets/bird.jpeg");
		background-attachment: fixed;
		background-size: cover;
		background-position: center;
		background-repeat: no-repeat;
		position: relative;
		
	}
	.wrapper__cards {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 20px;
		flex-wrap: wrap;
	}
	.title {
		font-size: 2rem;
		color: var(--primary);
		font-weight: 700;
		font-family: var(--Red);
		text-align: center;
		letter-spacing: -1px;
	}
	/* img{
		position: fixed;
  top: 0;
  left: 0;
  width: 100px;
  height: auto;
	} */
</style>
