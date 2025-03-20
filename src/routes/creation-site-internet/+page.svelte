<script>
	import Header from '../../sections/Header.svelte';
	import Mouse from '../../Components/Mouse.svelte';
	import FaqLink from '../../Components/FaqLink.svelte';
	import CardTarifs from '../../Components/CardTarifs.svelte';

	let landing = [{
		name: "Single Page",
		h2: "Une seule page, \n essentielle et percutante",
		h3: "Idéal pour : Indépendant, créateur, artiste, marque, identité forte",
		h4: [
			"Délai : 7 jours max",
			" Gesion de contenu",
			" 5-10 pages",
			" Tarif: 2999 €"
		],
		li: [
			" Un site web professionnel basé sur un template optimisé",
			" Personnalisation du design (logo, couleurs, images, textes)",
			" 3 à 5 pages : Accueil, Services, À propos, Contact, Blog en option",
			" Intégration d’un formulaire de contact",
			" Site optimisé pour mobile & SEO de base",
			" Mise en ligne rapide",
			" Tarif : 1399 €",
			" Options : Blog, SEO avancé, Référencement local, Maintenance, pages supplémentaires ...",
			" Avantage client : Un site rapide, efficace et très abordable."
		]
	}];

	let basic = [{
		name: "BASIC",
		h2: "Vitrine professionnelle",
		h3: "Idéal pour : Indépendants, TPE, PME, Artisans, Associations",
		h4: [
			"Délai : 3 jours max",
			" Vitrine Pro",
				"5 pages",
			" Tarif: 1499 €",
		
		],
		li: [
			" Un site web professionnel basé sur un template optimisé",
			" Personnalisation du design (logo, couleurs, images, textes)",
			" 3 à 5 pages : Accueil, Services, À propos, Contact, Blog en option",
			" Intégration d’un formulaire de contact",
			" Site optimisé pour mobile & SEO de base",
			" Mise en ligne rapide",
			" Tarif : 1399 €",
			" Options : Blog, SEO avancé, Référencement local, Maintenance, pages supplémentaires ...",
			" Avantage client : Un site rapide, efficace et très abordable."
		]
	}];

	let pro = [{
		name: "Pro",
		h2: "Contenu dynamique",
		h3: "Idéal pour : Institution, Entreprise, E-commerce, Blog, Média",
		h4: [
			"Délai : 7 jours max",
			" Gesion de contenu",
			" 5-10 pages",
			" Tarif: 1999 €"
		],
		li: [
			" Un site web professionnel basé sur un template optimisé",
			" Personnalisation du design (logo, couleurs, images, textes)",
			" 3 à 5 pages : Accueil, Services, À propos, Contact, Blog en option",
			" Intégration d’un formulaire de contact",
			" Site optimisé pour mobile & SEO de base",
			" Mise en ligne rapide",
			" Tarif : 1399 €",
			" Options : Blog, SEO avancé, Référencement local, Maintenance, pages supplémentaires ...",
			" Avantage client : Un site rapide, efficace et très abordable."
		]
	}];

	let custom = [{
		name: "Custom",
		h2: "Unique, créativité totale",
		h3: "Idéal pour : Indépendant, créateur, artiste, marque, identité forte",
		h4: [
			"Délai : 7 jours max",
			" Gesion de contenu",
			" 5-10 pages",
			" Tarif: 2999 €"
		],
		li: [
			" Un site web professionnel basé sur un template optimisé",
			" Personnalisation du design (logo, couleurs, images, textes)",
			" 3 à 5 pages : Accueil, Services, À propos, Contact, Blog en option",
			" Intégration d’un formulaire de contact",
			" Site optimisé pour mobile & SEO de base",
			" Mise en ligne rapide",
			" Tarif : 1399 €",
			" Options : Blog, SEO avancé, Référencement local, Maintenance, pages supplémentaires ...",
			" Avantage client : Un site rapide, efficace et très abordable."
		]
	}];

	let headless = [{
		name: "Graal",
		h2: "Une seule page, essentielle et percutante",
		h3: "Idéal pour : Indépendant, créateur, artiste, marque, identité forte",
		h4: [
			"Délai : 7 jours max",
			" Gesion de contenu",
			" 5-10 pages",
			" Tarif: 2999 €"
		],
		li: [
			" Un site web professionnel basé sur un template optimisé",
			" Personnalisation du design (logo, couleurs, images, textes)",
			" 3 à 5 pages : Accueil, Services, À propos, Contact, Blog en option",
			" Intégration d’un formulaire de contact",
			" Site optimisé pour mobile & SEO de base",
			" Mise en ligne rapide",
			" Tarif : 1399 €",
			" Options : Blog, SEO avancé, Référencement local, Maintenance, pages supplémentaires ...",
			" Avantage client : Un site rapide, efficace et très abordable."
		]
	}];

	
</script>

<Header />
<Mouse />
<main>

	<h1 class="title">Sites internet</h1>

	<div class="wrapper__hero">
		<h2>Bien choisir son modèle de site internet est fondamental.</h2>
		<p>
			Votre site internet reflète votre activité, il est l'identité de votre marque, de votre business, de votre entreprise. Votre site internet vous représente d'une part et doit également vous permettre d'effectuer des tâches, si tel est votre besoin, comme la modification de contenu dynamique. Le contenu dynamique est géré par un CMS. C'est lui qui vous permet d'interagir avec votre site web pour modifier des images, du texte, tenir à jour un blog, modifier des tarifs, ajouter un produit,
			etc.
		</p>
		<br /><br />
		<h2>Sans CMS, avec CMS ou CMS Headless.</h2>
		<h3>Sans CMS</h3>
		<p>Un site sans CMS ne vous permet pas de modifier le contenu de votre site directement, car vous ne disposez pas d'espace d'administration pour le faire. Il vous faudra alors souscrire à un contrat de maintenance que vous nous proposons pour toute modification sur votre site internet. Mais de nombreux site vitrine ne requierent pas de modification de contenu, ou que très rarement, par exemple une fois par an ou lors d'une refonte du site, environ tous les 10 ou 5 ans.</p>

		{#each landing as item}
		<CardTarifs name={item.name} h2={item.h2} h3={item.h3} h4={item.h4} li={item.li} />
	{/each}
	{#each custom as item}
	<CardTarifs name={item.name} h2={item.h2} h3={item.h3} h4={item.h4} li={item.li} />
{/each}

		<h3>Avec CMS</h3>
		<p>
			Le CMS vous permet de modifier votre contenu, on parle alors de contenu dynamique. Vous avez accès à un espace d'administration, lequel après un petit temps de prise en main, vous permet de modifier vos images, votre texte, vos tarifs, vos informations, vos dates et même la disposition des éléments. Nous utilisons 3 plateformes avec CMS. <span>Wordpress, Wix et Webflow.</span> Ces trois plateformes nous permettent de créer votre site avec un CMS natif. Nous vous formons sur l'administration
			du site ou nous vous proposons un forfait de maintenance mensuel, si vous préférez que nous nous occupions de toutes les modifications
		</p>
			
	{#each pro as item}
	<CardTarifs name={item.name} h2={item.h2} h3={item.h3} h4={item.h4} li={item.li} />
{/each}
		<h3>Avec CMS Headless</h3>
		<p>
			Un CMS Headless c'est un CMS sur mesure. Cela sous entend un site internet entièrement développé et personnalisé, jusquà son CMS. Celui-ci devient paramétrable et nous permet de gérer ce que l'on veut, comme on le veut. Un CMS Hedalless est particulièrement justifié quand un client souhaite un site et plus tard une application mobile, par exemple. Un CMS Headless nous permet d'utiliser le même contenu sur le site et l'application sans devoir le dupliquer. Le contenu est facile à gérer et
			peut être adapté à chaque support. La maintenance est facile et souple et permet de gagner un temps considérable !
		</p>
		{#each headless as item}
		<CardTarifs name={item.name} h2={item.h2} h3={item.h3} h4={item.h4} li={item.li} />
	{/each}
		<div class="wrapper__faqLink">
			<FaqLink />
			<a href="/FAQ">FAQ</a>
		</div>
	
	
	</div>










	
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
	.wrapper__hero {
		display: flex;
		align-items: center;
		justify-content: center;
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
		font-family: var(--Red);
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
	}

	.wrapper__faqLink a {
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
	}
</style>
