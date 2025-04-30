<script>
	import Header from '../../sections/Header.svelte';
	import Mouse from '../../Components/Mouse.svelte';
	import FaqLink from '../../Components/FaqLink.svelte';
	import CardTarifs from '../../Components/CardTarifs.svelte';
	import Images from '../../Components/ImagesBlocks.svelte';
	import Bird from '../../Assets/bird.jpeg';
	import Woman from '../../Assets/gralyphoHeroImg.jpeg';
	import Smartphone from '../../Assets/compteur3.jpeg';
	import Form from '../../Components/Form.svelte';
	import Link from '../../Components/LinkSiteApplication.svelte';

	let landing = [
		{
			name: 'Landing Page Custom',
			h2: 'Une page \n Essentielle et percutante \n Efficacité',
			h3: 'Idéal pour : Indépendant, créateur, café et restaurants, petite boutique',
			h4: ['Délai : 1 jour', 'gestion de contenu'],
			li: [' Un site web professionnel basé sur un template optimisé', ' Personnalisation du design (logo, couleurs, images, textes)', ' 1 page ', ' Intégration d’un formulaire de contact', ' Site optimisé pour mobile & SEO de base', ' Mise en ligne rapide', ' Options : Blog, SEO avancé, Référencement local, Maintenance, pages supplémentaires ...', ' Avantage client : Une page pour centraliser toutes les infos.'],
			tarif: 'Tarif : 799 €'
		}
	];

	let basic = [
		{
			name: 'Best Of !!',
			 h2: 'Vitrine professionnelle \n Optimisé SEO \n Léger et rapide',
			h3: 'Idéal pour : Indépendants, TPE, PME, Artisans, Associations',
			h4: ['Délai : 3 jours max', ' Vitrine Pro', '5 pages'],
			li: [' Un site web professionnel basé sur un template optimisé', ' Personnalisation du design (logo, couleurs, images, textes)', ' 3 à 5 pages : Accueil, Services, À propos, Contact, Blog en option', ' Intégration d’un formulaire de contact', ' Site optimisé pour mobile & SEO de base', ' Mise en ligne rapide', ' Options : Blog, SEO avancé, Référencement local, Maintenance, pages supplémentaires ...', ' Avantage client : Un site rapide, efficace et très abordable.'],
			tarif: 'Tarif : 1399 €'
		}
	];

	let pro = [
		{
			name: 'Site e-Commerce & Médias',
			h2: 'Plateforme e-commerce \n Optimisé SEO \n Gestion de contenu facile',
			h3: 'Idéal pour : Institution, Entreprise, commerce, Média',
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
			name: 'Site Custom',
		 	h2: 'Site sur mesure \n Design unique et original \n 100% créatif',
			h3: 'Idéal pour : Indépendant, créateur, artiste, café, évenementiel marque',
			h4: ['Délai : 7-15 jours max', ' 5-10 pages'],
			li: [' Un site web sur mesure', ' Haute personnalisation du design, 100% créatif. UX/UI sur mesure (logo, couleurs, images, textes ...)', ' 5 à 10 pages : Accueil, Services, À propos, Contact, Blog en option', ' Intégration d’un formulaire de contact', ' Site optimisé pour mobile & SEO de base', ' Mise en ligne rapide', ' Options : Blog, SEO avancé, Référencement local, Maintenance, pages supplémentaires ...', ' Avantage client : Un site unique, une identité forte.'],
			tarif: 'Tarif : 5999 €'
		}
	];

	let headless = [
		{
			name: 'Graal',
			h2: 'CMS Headless \n 100% Autonomie  \n 100% Architecture sur mesure',
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
		<h1 class="title">Création de site internet</h1>
		<h2>Site web clé en main ou sur mesure</h2>
		<p>
			Un site internet, c’est bien plus qu’une vitrine : c’est votre image, votre outil, parfois même votre principal canal de communication. Que vous ayez besoin d’un site web simple et rapide, d’un site évolutif avec gestion de contenu ou d’un site internet développé entièrement sur mesure, nous avons la solution adaptée à votre activité. <br /><br /> Nous proposons deux grandes familles de sites :
			<br />
			<strong>Sans CMS</strong> : vous n’avez pas besoin de modifier régulièrement le contenu ? Cette solution rapide et abordable est parfaite pour vous.
			<br />

			<strong>Avec CMS</strong> : vous souhaitez mettre à jour textes, images ou tarifs vous-même ? Optez pour un site avec interface d’administration.

			<br />
			<strong>Avec CMS Headless</strong> pour les projets plus ambitieux, nous proposons aussi une solution digitale ultra-flexible pensée pour faire évoluer votre site (et votre contenu) facilement, même vers une app mobile.
		</p>
	</div>
	<div class="wrapper__component" id="sans-cms">
		<h2>Votre site web sans interface de gestion</h2>
		<p>Ces sites ne disposent pas d’un espace d’administration : ils sont donc parfaits si vous n’avez pas besoin de modifier régulièrement vos contenus. Ils sont légers, rapides à mettre en ligne, et idéaux pour une présentation claire et durable. Toute mise à jour peut se faire via notre service de maintenance.</p>
		<div class="wrapper__offres-tarifs">
			{#each landing as item}
				<CardTarifs name={item.name} h2={item.h2} h3={item.h3} h4={item.h4} li={item.li} tarif={item.tarif} />
			{/each}

			{#each custom as item}
				<CardTarifs name={item.name} h2={item.h2} h3={item.h3} h4={item.h4} li={item.li} tarif={item.tarif} />
			{/each}
		</div>
	</div>

	<div class="wrapper__component" id="cms">
		<h2>Votre site web avec interface de gestion (CMS)</h2>
		<p>
			Vous souhaitez pouvoir modifier vous-même vos contenus : textes, images, tarifs, blog, événements, etc. ? Le site avec CMS est ce qu’il vous faut. Grâce à une interface simple, vous gérez votre site au quotidien. Nous utilisons des plateformes comme <strong>WordPress</strong>, <strong>Webflow</strong> ou <strong>Wix</strong>, selon votre besoin et votre niveau de confort. Vous êtes formé à l’utilisation, ou nous pouvons assurer la gestion pour vous.
		</p>
		<div class="wrapper__offres-tarifs">
			{#each basic as item}
				<CardTarifs name={item.name} h2={item.h2} h3={item.h3} h4={item.h4} li={item.li} tarif={item.tarif} />
			{/each}
			{#each pro as item}
				<CardTarifs name={item.name} h2={item.h2} h3={item.h3} h4={item.h4} li={item.li} tarif={item.tarif} />
			{/each}
		</div>
	</div>

	<div class="wrapper__component">
		<h2>Votre site web avec CMS Headless</h2>
		<p>Un site avec CMS Headless, c’est une solution ultra-flexible pour les projets ambitieux. Vous avez un site 100% personnalisé, et un espace d’administration conçu sur mesure. Il est particulièrement adapté si vous prévoyez de décliner votre contenu sur plusieurs supports (site, application mobile, borne interactive...). Le contenu est centralisé, réutilisable, et la maintenance est simplifiée.</p>
		<div class="wrapper__offres-tarifs">
			{#each headless as item}
				<CardTarifs name={item.name} h2={item.h2} h3={item.h3} h4={item.h4} li={item.li} tarif={item.tarif} />
			{/each}
		</div>
	</div>

	<div class="wrapper__faqLink">
		<FaqLink />
		<Link />
	</div>
	<Form />
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
		text-align: center;
		letter-spacing: -3px;
		margin-top: 50px;
	}

	.wrapper__offres-tarifs {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-wrap: wrap;
		gap: 20px;
		z-index: 2;
		width: 70%;
		height: auto;
		margin-top: 50px;
	}
	.wrapper__images {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-wrap: wrap;
		gap: 30px;
		z-index: 2;
		width: 70%;
		height: 100%;
		margin: 50px auto;
	}
	.wrapper__hero {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		width: 100%;
		height: auto;
		padding: 10px;
		margin-top: 0px;
		gap: 10px;
		border-radius: 8px;
		color: var(--primary);
	}

	.wrapper__hero h2 {
		font-family: var(--Red);
		font-size: 1.5rem;
		letter-spacing: 0px;
		font-weight: 900;
		color: var(--whiteGrey);
		margin-top: 10px;
		margin-bottom: 30px;
	}

	.wrapper__hero p {
		font-family: var(--Red);
		font-size: 1rem;
		font-weight: 400;
		line-height: 30px;
		color: var(--whiteGrey);
		width: 70%;
		text-align: justify;
	}

	.wrapper__component {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		width: 100%;
		height: auto;
		padding: 20px;
		margin-top: 50px;
		border-radius: 8px;
		color: var(--primary);
	}
	.wrapper__component h2 {
		font-family: var(--Red);
		font-size: 3rem;
		letter-spacing: -1px;
		font-weight: 900;
		color: var(--whiteGrey);
		margin-top: 10px;
		text-align: center;
		width: 70%;
	}
	.wrapper__component p {
		font-family: var(--Red);
		font-size: 1rem;
		font-weight: 400;
		padding: 10px;
		line-height: 30px;
		color: var(--whiteGrey);
		width: 70%;
		text-align: left;
	}
	.wrapper__faqLink {
		margin-top: 50px;
	}

	@media screen and (max-width: 867px) {
		main {
			padding: 10px;
		}
		.wrapper__hero {
			margin-top: 0px;
		}
		.wrapper__hero p {
			text-align: left;
			width: 100%;
		}

		.wrapper__hero h2 {
			text-align: left;
			padding: 5px;
			width: 100%;
		}

		.title {
			font-size: 3rem;
		}
		.wrapper__component {
			width: 100%;
			padding: 0px;
		}
		.wrapper__component p {
			text-align: left;
			width: 100%;
		}
		.wrapper__component h2 {
			font-size: 2rem;
			text-align: left;
			padding: 5px;
			width: 100%;
		}
		.wrapper__offres-tarifs {
			width: 100%;
			padding: 0px;
		}
	}

</style>
