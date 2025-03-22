<script>
	import Header from '../../sections/Header.svelte';
	import Mouse from '../../Components/Mouse.svelte';
	import FaqLink from '../../Components/FaqLink.svelte';
	import CardTarifs from '../../Components/CardTarifs.svelte';
	import Images from '../../Components/ImagesBlocks.svelte';
	import Bird from '../../Assets/bird.jpeg';
	import Woman from '../../Assets/gralyphoHeroImg.jpeg';
	import Smartphone from '../../Assets/compteur3.jpeg';


	let landing = [
		{
			name: 'Landing Page',
			h2: 'Une seule page, \n essentielle et percutante',
			h3: 'Idéal pour : Indépendant, créateur, artiste, marque, identité forte',
			h4: ['Délai : 1 jour', 'gestion de contenu'],
			li: [' Un site web professionnel basé sur un template optimisé', ' Personnalisation du design (logo, couleurs, images, textes)', ' 1 page ', ' Intégration d’un formulaire de contact', ' Site optimisé pour mobile & SEO de base', ' Mise en ligne rapide', ' Options : Blog, SEO avancé, Référencement local, Maintenance, pages supplémentaires ...', ' Avantage client : Une page pour centraliser toutes les infos.'],
			tarif: 'Tarif : 799 €'
		}
	];

	let basic = [
		{
			name: 'BASIC',
			h2: 'Vitrine professionnelle',
			h3: 'Idéal pour : Indépendants, TPE, PME, Artisans, Associations',
			h4: ['Délai : 3 jours max', ' Vitrine Pro', '5 pages'],
			li: [' Un site web professionnel basé sur un template optimisé', ' Personnalisation du design (logo, couleurs, images, textes)', ' 3 à 5 pages : Accueil, Services, À propos, Contact, Blog en option', ' Intégration d’un formulaire de contact', ' Site optimisé pour mobile & SEO de base', ' Mise en ligne rapide', ' Options : Blog, SEO avancé, Référencement local, Maintenance, pages supplémentaires ...', ' Avantage client : Un site rapide, efficace et très abordable.'],
			tarif: 'Tarif : 1399 €'
		}
	];

	let pro = [
		{
			name: 'Pro',
			h2: 'Contenu dynamique',
			h3: 'Idéal pour : Institution, Entreprise, E-commerce, Blog, Média',
			h4: ['Délai : 7 jours max', ' Gesion de contenu', ' 5-10 pages'],
			li: [
				' Un site web professionnel basé sur un template optimisé',
				' Personnalisation du design (logo, couleurs, images, textes)',
				' 5 à 10 pages : Accueil, Services, À propos, Contact, Blog en option',
				' Intégration d’un formulaire de contact',
				' Site optimisé pour mobile & SEO de base',
				' Mise en ligne rapide',
				' Tarif : 2999 €',
				' Options : Blog, SEO avancé, Référencement local, Maintenance, pages supplémentaires ...',
				' Avantage client : Un site avec gestion de contenu, idéal pour e-commerce, entreprise, institution.'
			],
			tarif: 'Tarif : 3999 €'
		}
	];

	let custom = [
		{
			name: 'Custom',
			h2: 'Sur mesure, identité forte \n créativité totale',
			h3: 'Idéal pour : Indépendant, créateur, artiste, \n café, évenementiel marque, identité forte',
			h4: ['Délai : 7-15 jours max', ' 5-10 pages'],
			li: [' Un site web sur mesure', ' Haute personnalisation du design (logo, couleurs, images, textes)', ' 5 à 10 pages : Accueil, Services, À propos, Contact, Blog en option', ' Intégration d’un formulaire de contact', ' Site optimisé pour mobile & SEO de base', ' Mise en ligne rapide', ' Options : Blog, SEO avancé, Référencement local, Maintenance, pages supplémentaires ...', ' Avantage client : Un site unique, une identité forte.'],
			tarif: 'Tarif : 5999 €'
		}
	];

	let headless = [
		{
			name: 'Graal',
			h2: 'CMS Headless, pour une autonomie \n totale et sur mesure',
			h3: 'Idéal pour : Indépendant, créateur, artiste, marque, identité forte',
			h4: ['Délai : 15 jours', ' Gesion de contenu', ' 5-10 pages', ' Tarif: 5999 €'],
			li: [
				' Un site web professionnel basé sur un template optimisé ou créé',
				' Personnalisation du design (logo, couleurs, images, textes)',
				' 5 à 10 pages : Accueil, Services, À propos, Contact, Blog en option',
				' Intégration d’un formulaire de contact',
				' Site optimisé pour mobile & SEO de base',
				' Mise en ligne rapide',
				' Options : Blog, SEO avancé, Référencement local, Maintenance, pages supplémentaires ...',
				' Avantage client : Un site internet sur mesure, \n avec une gestion de contenu entièrement personnalisée .'
			],
			tarif: 'Tarif : 7999 €'
		}
	];

	let images = [Bird, Woman, Smartphone];
</script>

<Header />
<Mouse />

<main>
	<div class="wrapper__images">
		<Images img={images} alt="image" />
	</div>
	<div class="wrapper__hero">
		<h1 class="title">Sites internet</h1>
		<h2>Bien choisir son modèle de site internet est fondamental.</h2>
		<p>
			Votre site internet reflète votre activité, il est l'identité de votre marque, de votre business, de votre entreprise. Votre site internet vous représente d'une part et doit également vous permettre d'effectuer des tâches, si tel est votre besoin, comme la modification de contenu dynamique. Le contenu dynamique est géré par un CMS. C'est lui qui vous permet d'interagir avec votre site web pour modifier des images, du texte, tenir à jour un blog, modifier des tarifs, ajouter un produit,
			etc.
		</p>
	</div>
	<div class="wrapper__component">
		<h2>Notre offre sans CMS</h2>
		<p>Un site sans CMS ne vous permet pas de modifier le contenu de votre site directement, car vous ne disposez pas d'espace d'administration pour le faire. Il vous faudra alors souscrire à un contrat de maintenance que vous nous proposons pour toute modification sur votre site internet. Mais de nombreux site vitrine ne requierent pas de modification de contenu, ou que très rarement, par exemple une fois par an ou lors d'une refonte du site, environ tous les 10 ou 5 ans.</p>
		{#each landing as item}
			<CardTarifs name={item.name} h2={item.h2} h3={item.h3} h4={item.h4} li={item.li} tarif={item.tarif} />
		{/each}

		{#each custom as item}
			<CardTarifs name={item.name} h2={item.h2} h3={item.h3} h4={item.h4} li={item.li} tarif={item.tarif} />
		{/each}
	</div>

		<div class="wrapper__component">
			<h2>Notre offre avec CMS</h2>

			<p>
				Le CMS vous permet de modifier votre contenu, on parle alors de contenu dynamique. Vous avez accès à un espace d'administration, lequel après un petit temps de prise en main, vous permet de modifier vos images, votre texte, vos tarifs, vos informations, vos dates et même la disposition des éléments. Nous utilisons 3 plateformes avec CMS. <span>Wordpress, Wix et Webflow.</span> Ces trois plateformes nous permettent de créer votre site avec un CMS natif. Nous vous formons sur l'administration
				du site ou nous vous proposons un forfait de maintenance mensuel, si vous préférez que nous nous occupions de toutes les modifications
			</p>
			{#each basic as item}
				<CardTarifs name={item.name} h2={item.h2} h3={item.h3} h4={item.h4} li={item.li} tarif={item.tarif} />
			{/each}
			{#each pro as item}
				<CardTarifs name={item.name} h2={item.h2} h3={item.h3} h4={item.h4} li={item.li} tarif={item.tarif} />
			{/each}
		</div>

		<div class="wrapper__component">
			<h2>Notre offre avec CMS Headless</h2>

			<p>
				Un CMS Headless c'est un CMS sur mesure. Cela sous entend un site internet entièrement développé et personnalisé, jusquà son CMS. Celui-ci devient paramétrable et nous permet de gérer ce que l'on veut, comme on le veut. Un CMS Hedalless est particulièrement justifié quand un client souhaite un site et plus tard une application mobile, par exemple. Un CMS Headless nous permet d'utiliser le même contenu sur le site et l'application sans devoir le dupliquer. Le contenu est facile à gérer et
				peut être adapté à chaque support. La maintenance est facile et souple et permet de gagner un temps considérable !
			</p>
			{#each headless as item}
				<CardTarifs name={item.name} h2={item.h2} h3={item.h3} h4={item.h4} li={item.li} tarif={item.tarif} />
			{/each}
		</div>

		<div class="wrapper__faqLink">
			<FaqLink />
		</div>

</main>

<style>
	main {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		padding: 15px;
		height: auto;
		background-color: var(--primary);
	}

	.title {
		font-family: var(--Geologica);
		font-size: 5.5rem;
		color: var(--whiteGrey);
		font-weight: 700;
		text-align: left;
		letter-spacing: -2px;
		margin-top: 50px;
	}
	.wrapper__hero {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		width: 100%;
		height: auto;
		padding: 10px;
		margin-top: 50px;
		gap: 40px;
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

	.wrapper__hero p {
		font-family: var(--Red);
		font-size: 1rem;
		font-weight: 400;
		padding: 10px;
		line-height: 30px;
		color: var(--whiteGrey);
		width: 60%;
		text-align: justify;
	}
	.wrapper__component {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		width: 100%;
		height: auto;
		padding: 10px;
		margin-top: 60px;
		gap: 40px;
		border-radius: 8px;
		color: var(--primary);
		box-shadow: inset 0px 0px 10px 1px rgba(0, 0, 0, 0.528);
	}
	.wrapper__component h2 {
		font-family: var(--Red);
		font-size: 3rem;
		letter-spacing: -1px;
		font-weight: 900;
		color: var(--whiteGrey);
		margin-top: 10px;
	}
	.wrapper__component p {
		font-family: var(--Red);
		font-size: 1rem;
		font-weight: 400;
		padding: 10px;
		line-height: 30px;
		color: var(--whiteGrey);
		width: 60%;
		text-align: justify;
	}
	.wrapper__faqLink{
		margin-top: 50px;
	}

	@media screen and (max-width: 768px) {
		.wrapper__hero {
			margin-top: 200px;
		}
		.title {
			font-size: 3rem;
		}
	}
	@media screen and (max-width: 375px) {
		.wrapper__hero {
			margin-top: 120px;
		}
		.wrapper__hero p {
			width: 100%;
		}
		.wrapper__component p {
		
		width: 100%;

	}

	}
</style>
