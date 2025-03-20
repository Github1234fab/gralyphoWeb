<script>
	import Header from '../../sections/Header.svelte';
	import Mouse from '../../Components/Mouse.svelte';
	import CardTarifs from '../../Components/CardTarifs.svelte';
	import FaqLink from '../../Components/FaqLink.svelte';

	let pwa = [
		{
			name: 'Custom',
			h2: 'Unique, créativité totale',
			h3: 'Idéal pour : Indépendant, créateur, artiste, marque, identité forte',
			h4: ['Délai : 7 jours max', ' Gesion de contenu', ' 5-10 pages'],
			li: [' Un site web professionnel basé sur un template optimisé', ' Personnalisation du design (logo, couleurs, images, textes)', ' 3 à 5 pages : Accueil, Services, À propos, Contact, Blog en option', ' Intégration d’un formulaire de contact', ' Site optimisé pour mobile & SEO de base', ' Mise en ligne rapide', ' Tarif : 1399 €', ' Options : Blog, SEO avancé, Référencement local, Maintenance, pages supplémentaires ...', ' Avantage client : Un site rapide, efficace et très abordable.'],
			tarif: "5999 €"
		}
	];

	let native = [
		{
			name: 'Custom',
			h2: 'Unique, créativité totale',
			h3: 'Idéal pour : Indépendant, créateur, artiste, marque, identité forte',
			h4: ['Délai : 7 jours max', ' Gesion de contenu', ' 5-10 pages', ],
			li: [' Un site web professionnel basé sur un template optimisé', ' Personnalisation du design (logo, couleurs, images, textes)', ' 3 à 5 pages : Accueil, Services, À propos, Contact, Blog en option', ' Intégration d’un formulaire de contact', ' Site optimisé pour mobile & SEO de base', ' Mise en ligne rapide', ' Tarif : 1399 €', ' Options : Blog, SEO avancé, Référencement local, Maintenance, pages supplémentaires ...', ' Avantage client : Un site rapide, efficace et très abordable.']
		}
	];
</script>

<Header />
<Mouse />

<main>
	<h1 class="title">Notre offre de création d'application</h1>
	{#each pwa as item}
		<CardTarifs name={item.name} h2={item.h2} h3={item.h3} h4={item.h4} li={item.li} />
	{/each}
	{#each native as item}
		<CardTarifs name={item.name} h2={item.h2} h3={item.h3} h4={item.h4} li={item.li} />
	{/each}
	<div class="wrapper__faqLink">
		<FaqLink />
		
</main>

<style>
	main {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		gap: 60px;
		padding: 20px;
		height: auto;
		background-color: var(--primary);
		font-family: epilogue;
	}

	.title {
		font-family: var(--Geologica);
		font-size: 2.5rem;
		color: var(--whiteGrey);
		font-weight: 700;
		text-align: center;
		letter-spacing: -2px;
		margin-top: 50px;
	}
	/* .wrapper__hero {
		display: flex;
		align-items: baseline;
		justify-content: baseline;
		flex-direction: column;
		width: 95%;
		height: auto;
		margin: 0 auto;
		padding: 10px;
		gap: 30px;
		border-radius: 8px;

		color: var(--primary);
		box-shadow: inset 0px 0px 10px 1px rgba(0, 0, 0, 0.528);
	}
	.wrapper__hero h2 {
		font-family: var(--Red);
		font-size: 1.2rem;
		letter-spacing: -1px;
		font-weight: 900;
		color: var(--whiteGrey);
		margin-top: 10px;
	}
	.wrapper__hero h3 {
		font-size: 1.5rem;
		letter-spacing: -1px;
		font-weight: 300;
		color: var(--whiteGrey);
	}
	.wrapper__hero p {
		font-family: var(--Red);
		font-size: 1rem;
		font-weight: 400;
		padding: 10px;
		line-height: 30px;
		color: var(--whiteGrey);
	} */

	/* .wrapper__faqLink a {
		font-family: 'Red Hat Display';
		font-size: var(--m);
		font-weight: 700;
		color: var(--whiteGrey);
		background-color: var(--cta);
		padding: 20px 30px;
		text-decoration: none;
		box-shadow: 0px 20px 10px 0px rgba(0, 0, 0, 0.269);
		margin-bottom: 100px;
		border-radius: 5px;
		margin-top: 0px;
	}
	.wrapper__faqLink {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	} */
</style>
