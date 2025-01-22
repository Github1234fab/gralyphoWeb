<script>
	import { fade, slide } from 'svelte/transition';
	// import bg from "../../Assets/png-gralypho/41.png";
	import Header from '../../sections/Header.svelte';
	// import vitrine from "../../Assets/png-gralypho/vitrine.svg";
	import portfolio from '../../Assets/png-gralypho/address-card-regular.svg';
	import commerce from '../../Assets/png-gralypho/shopping.svg';
	import blog from '../../Assets/png-gralypho/blog-solid.svg';
	import corporate from '../../Assets/png-gralypho/user-tie-solid.svg';
	import institution from '../../Assets/png-gralypho/building-columns-solid.svg';
	import imgHero from '../../Assets/png-gralypho/webExplosion.png';
	import CardsSites from '../../Components/CardsSites.svelte';
	// import FSection from "../../sections/FSection.svelte";
	import Profits from '../../sections/SectionProfitsSite.svelte';
	import Service from '../../Components/Services.svelte';
	import imgDesign from '../../Assets/png-gralypho/30.png';
	import imgSeo from '../../Assets/png-gralypho/05.png';
	import imgWeb from '../../Assets/png-gralypho/cible.png';
	import imgFormation from '../../Assets/png-gralypho/Web.png';
	import Banner from '../../Components/Banner.svelte';
	import BeneficeSection from '../../sections/BeneficeSection.svelte';
	import CardsSectionB from '../../Components/CardsSectionB.svelte';
	import vitrineA from '../../Assets/png-gralypho/vitrineB.png';
	import ecommerce from '../../Assets/png-gralypho/ecommerceA.png';
	import Blogger from '../../Assets/png-gralypho/blogA.png';
	import Portfolio from '../../Assets/png-gralypho/portfolio.png';
	import Corporated from '../../Assets/png-gralypho/corporate.png';
	import institutionnel from '../../Assets/png-gralypho/institutionnel.png';
	import Form from '../../Components/Form.svelte';
	import Csection from '../../sections/Csection.svelte';
	import Mouse from '../../Components/Mouse.svelte';
	import Profil from '../../Assets/Profils-gralypho/Ellipse 54.png';
	import siteWeb from '../../Assets/png-gralypho/heroSiteWeb.png';
	import Button from "../../Components/ButtonCTA.svelte";
	import HomePage from '../../Components/HomePage.svelte';
	import FaqLink from '../../Components/FaqLink.svelte';

	// let accordeonTab = [
	// 	{
	// 		title: 'Créer un site internet pour développer son activité est-il encore pertinent en 2025 ?',
	// 		p:"Les choses ont changé, c’est indéniable ! Les intentions de recherche de la part des internautes ont explosé sur les réseaux sociaux ces trois dernières années. Aujourd’hui, les gens recherchent d’abord un produit sur TikTok, Facebook ou Instagram, parfois avant même de consulter le web. Pourquoi ? Parce que les contenus des réseaux sociaux sont rapides (les shorts), efficaces et concis. Prenons un exemple : je cherche un aspirateur-laveur. Je recherche sur TikTok et trouve rapidement une vidéo sur un produit ou un comparatif de plusieurs produits. C’est rapide et efficace. Cette vidéo me fournit des liens vers le fabricant. Je clique et suis dirigé vers le lien du fabricant. J’achète. C’est rapide et direct. Prenons maintenant le cas du web et de ses moteurs de recherche classiques. J’effectue la même recherche. Google me propose des liens sur une page que je dois faire défiler, et je dois cliquer sur chacun de ces liens qui ouvrent la page d’accueil d’un site de fabricant d’aspirateurs-laveurs ou d’un comparatif de prix. Je dois naviguer sur les pages pour trouver la réponse à ma recherche. Parfois, je ne trouve pas l’information tout de suite, et c’est là que les réseaux sociaux peuvent faire la différence. Chez Gralypho, agence web experte dans le domaine du web et de la création de sites internet et d’applications, nous pensons, comme beaucoup de spécialistes du SEO, qu’une présence en ligne à travers un site web est essentielle, tout comme une présence sur les réseaux sociaux. L’un mène à l’autre, et vice versa. C’est une maïeutique essentielle à un développement d’activité sans faille et à un business pérenne."	
	// },
	// 	{
	// 		title: 'Avec quels outils créer son site internet en 2025 ?',
	// 		p: 'Nos tarifs démarrent à 500 euros pour un blog, 1000 euros pour une landing page (site page unique), 1500 euros pour un site vitrine, 2000 euros pour un site corporate, 2500 euros pour un site e-commerce, 3000 euros pour un site institutionnel, 3500 euros pour un site sur mesure entièrement codé (garantie sécurité et design innovant et sur mesure).'
	// 	},
	// 	{
	// 		title: "Aujourd'hui je peux créer mon site internet avec l'IA, comment - pourquoi ?",
	// 		p: 'Le délai de conception et de mise en ligne dépend du type de site internet que vous souhaitez. En règle général, le délai de conception et de mise en ligne est de 2 semaines pour un blog, 3 semaines pour une landing page, 4 semaines pour un site vitrine, 5 semaines pour un site corporate, 6 semaines pour un site e-commerce, 7 semaines pour un site institutionnel, 8 semaines pour un site sur mesure entièrement codé (garantie sécurité et design innovant et sur mesure).'
	// 	},
	// 	{
	// 		title: 'Sites Dynamiques - Possibilités et fonctionnalités',
	// 		p: "Nos clients sont parfois surpris de découvir tout ce qu'un site internet peut contenir comme fonctionnalité et possibilité. En effet, un site internet peut contenir un blog, un portfolio, un formulaire de contact, un chatbot, un espace membre, un espace client, un espace administrateur, un espace de paiement, de réservation, de commande (etc).  Mais nous pouvons également collecter des données, les stocker, les consulter, les anaylser et s'en servir pour orienter votre activité. Nous pouvons également établir des requêtes API. C'est à dire que nous pouvons consulter des données externes contenues dans un autre site, une autre application que la vôtre et les rapatrier dans votre site pour les afficher. Par exemple, nous pouvons établir une requête auprès d'un service météo et afficher toutes les données métérologiques de votre localité en temps réel ou s'en servir pour valider l'ouverture d'un parc d'activité d'accrobranche, par exemple. Ou encore, nous pouvons requêter en temps réel les taux de prêt des banques pour une agence immobilière, etc."
	// 	},
	// 	{
	// 		title: 'Propriété, hébergement, nom de domaine et abonnement',
	// 		p: "Nos clients se posent se questionnent souvent quant à la propriété de leur site. À qui appartient-il? Il vous appartient, parce que vous allez souscrire auprès d'un hebergeur et bien souvent cet hébergeur sera également la plateforme sur laquelle votre site sera réalisée et sur laquelle votre nom de domaine sera acheté. Cet souscription est à votre nom dès lors, vous êtes propriétaire de votre site.  Dans le cas ou nos codons votre site internet de A à Z, nous signons un contrat de maintenance et quand vous souhaiterez rompre ce contrat de maintenance, le site vous reviendra en main propre (le dossier contenant l'ensemble du code de votre site)."
	// 	},
	// 	{
	// 		title: "Qu'est-ce que peut m'apporter une agence Web?",
	// 		p: "Nos clients se posent se questionnent souvent quant à la propriété de leur site. À qui appartient-il? Il vous appartient, parce que vous allez souscrire auprès d'un hebergeur et bien souvent cet hébergeur sera également la plateforme sur laquelle votre site sera réalisée et sur laquelle votre nom de domaine sera acheté. Cet souscription est à votre nom dès lors, vous êtes propriétaire de votre site.  Dans le cas ou nos codons votre site internet de A à Z, nous signons un contrat de maintenance et quand vous souhaiterez rompre ce contrat de maintenance, le site vous reviendra en main propre (le dossier contenant l'ensemble du code de votre site)."
	// 	},
	// 	{
	// 		title: "Comment être premier sur Google?",
	// 		p: "Nos clients se posent se questionnent souvent quant à la propriété de leur site. À qui appartient-il? Il vous appartient, parce que vous allez souscrire auprès d'un hebergeur et bien souvent cet hébergeur sera également la plateforme sur laquelle votre site sera réalisée et sur laquelle votre nom de domaine sera acheté. Cet souscription est à votre nom dès lors, vous êtes propriétaire de votre site.  Dans le cas ou nos codons votre site internet de A à Z, nous signons un contrat de maintenance et quand vous souhaiterez rompre ce contrat de maintenance, le site vous reviendra en main propre (le dossier contenant l'ensemble du code de votre site)."
	// 	}
	// ];

	let sitesTab = [
		{
			type: 'Site Vitrine',
			description:
				'Le site Vitrine a pour objectif de présenter votre entreprise, vos services, vos produits, vos valeurs, votre équipe, vos actualités,  etc. Mis à part un formulaire de contact, ce type de site ne propose pas de fonctionnalités avancées. Il est idéal pour les petites entreprises, les artisans, les professions libérales, les associations, les artistes, etc.',
			delai:
				'Délai de lancement: En règle général, le délai de création et lancement est compris entre 2 et 4 semaines, selon la complexité du projet',
			tarif: 'Tarif: À partir de 1500 euros.',
			img: vitrineA
		},
		{
			type: 'Site E-Commerce',
			description:
				"Le E-commerce vous permet de vendre vos produits 24/7. C'est une hyper présence en ligne nécessitant un travail soigneux aussi bien dans la gestion du front-end, comme sur la partie back-end et notamment sur la sécurité au niveau de la gestion des stocks et des paiements.",
			delai:
				'Délai de lancement: En règle général, le délai de lancement est au minimum de 4 semaines, ce délai peut se rallonger selon la complexité du projet',
			tarif: 'Tarif: À partir de 2500 euros.',
			img: ecommerce
		},
		{
			type: 'Blog',
			description:
				"Un Blog vous permet de créer et de poster des articles et d'ouvrir ces posts à des retours de commentaires de vos utilisateurs. Idéal pour obtenir des prospects et les convertir. Idéal pour les entreprises qui souhaitent partager leur expertise, leur actualité, leur veille, etc.",
			delai:
				'Délai de lancement: En règle général, le délai de lancement est de 2 semaines. Le blog peut également être ajouté à un autre type de site.',
			tarif: 'Tarif:  À partir de 500 euros pour un simple Blog',
			img: Blogger
		},
		{
			type: 'Portfolio',
			description:
				'Un Portfolio est idéal pour les artistes, les photographes, les graphistes, les designers, les architectes, les créateurs, les illustrateurs, les musiciens, les écrivains, etc. Il permet de présenter vos réalisations, vos créations, vos projets, vos oeuvres, etc.',
			delai:
				'Délai de lancement: En règle général, le délai de lancement débute autour de 4 semaines, ce délai peut se rallonger selon la complexité du projet',
			tarif: 'Tarif: À partir de 1500 euros.',
			img: Portfolio
		},
		{
			type: 'Site Corporate',
			description:
				'Un site Corporate vous permet de présenter votre entreprise, vos services, vos produits, vos valeurs, votre équipe, vos actualités, etc. Il est idéal pour les entreprises, les PME, les TPE, les grandes entreprises, les multinationales, etc.',
			delai:
				'Délai de lancement: En règle général, le délai de lancement débute autour de 4 semaines, ce délai peut se rallonger selon la complexite du projet',
			tarif: 'Tarif: À partir de 2000 euros.',
			img: Corporated
		},
		{
			type: 'Site Institutionnel',
			description:
				'Un site institutionnel vous permet de présenter votre institution, vos services, vos produits, vos valeurs, votre équipe, vos actualités, etc. Il est idéal pour les institutions, les écoles, les universités, les collectivités, les mairies, les associations, les ONG, etc.',
			delai:
				'Délai de lancement: En règle général, le délai de lancement débute autour de 4 semaines, ce délai peut se rallong',
			tarif: 'Tarif: À partir de 2000 euros.',
			img: institutionnel
		}
	];
</script>

<Mouse />
<Header />

<!-- ***************HERO*************** -->

<section class="sites-section" in:fade={{ duration: 1000 }}>
	<div class="hero">
		<img src={siteWeb} alt=" site web illustrés sur des écrans" class="img-hero" />
		<div class="wrapper-text-hero">
			<h1>Création de <br /><span>Site Web</span></h1>
			<h2 class="subtitle">
				La création de site internet professionnel et sur mesure requiert une excellente expertise. 
				<br> Dans le domaine du Web, la création du design (UI) représente seulement la face cachée de l'iceberg. <br>La partie immergée : le code, la sécurité, le référencement (SEO), l'expérience utilisateur (UX-design), la stratégie digitale, le marketing (...) est absolument fondamentale.

				<br><br>L'agence Web Gralypho, implantée dans la région Lyonnaise vous accommpagne sur toutes les phases de création de votre site internet avec des étapes claires et des tarifs maîtrisés.
			</h2>
		</div>
	</div>

	<!-- ***************SERVICES*************** -->

	<div class="container-service">
		<h1>Notre expertise pour un site web unique et performant</h1>
		<div class="wrapper-service">
			<Service
				text="Design UX/UI"
				description="Nous concevons vos sites internet de A à Z. Nous élaborons votre design UX/UI sur mesure pour garantir à vos utilisateurs une expérience unique."
				img={imgDesign}
				lien="/Design-site-web"
			/>
			<Service
				text="Rédaction Web"
				img={imgSeo}
				description="Nous nous chargeons de rédiger pour vous l'ensemble du contenu textuel de votre site internet. Titre, paragraphe, slogan, CTA, bannière, section ..."
				lien="/Design-site-web"
			/>
		</div>
		<div class="wrapper-service">
			<Service
				text="Audit SEO"
				description="Nous sommes experts en stratégie SEO. C'est pour vous la garantie d'être convenablement référencé sur les moteurs de recherche, d'être visible pour toucher vos cibles."
				lien="/referencement-seo-sea"
				img={imgWeb}
			/>
			<Service
				text="Stratégie Digitale"
				description="Votre stratégie sur le Web est déterminante de votre succès. Déterminez simplement votre objectif et nous ferons le reste !"
				img={imgFormation}
				lien="/etude-strategie-digitale"
			/>
		</div>
	</div>

	<div class="wrapper__homepage">
<HomePage />
</div>

	<!-- ***************TESTIMONIAL*************** -->

	<div class="testimonial">
		<h1>Amazing <br>Gralypho !</h1>
		<h2>
			"Merci à toute l'équipe de Gralypho. Une superbe collaboration pour un produit très efficace! "
		</h2>
		<h4>"Éloïse Nguyen - CTO Rodiggia"</h4>
		<img class="img" src={Profil} alt="" />
	</div>

	<!-- ***************SITES TYPES*************** -->

	<div class="wrapper-Csection">
		<Csection />
	</div>

	<div class="wrapper__faqLink">
	<FaqLink/>
	<a href="/FAQ/#site">FAQ</a>
</div>

	<!-- ***************COLLAPSES*************** -->

	<!-- <div class="wrapper-SectionB">
		<h2> FAQ : Vos questions sur la création de site internet sur mesure</h2>
		<h3>Découvrez les réponses à toutes vos questions sur la création de site internet sur mesure : prix, délais, avantages et bien plus.</h3>
		{#each accordeonTab as tab}
			<CardsSectionB title={tab.title} p={tab.p} />
		{/each}
	</div> -->

	<!-- ***************SEO/SEA*************** -->

	<!-- <div class="wrapper-Fsection">
    <FSection />
  </div> -->

	<!-- ***************CONTACT*************** -->

	<div class="wrapper-form">
		<Form />
	</div>
</section>

<style>
	.sites-section {
		display: grid;
		grid-template-columns: repeat(12, 1fr);
		grid-template-rows: auto;
		background-color: var(--whiteGrey);
		height: auto;
		font-size: 16px;
	}
	.testimonial h1 {
		text-align: center;
		font-family: var(--Geologica);
		font-weight: 400;
		font-size: 2rem;
		color: var(--whiteGrey);
		margin-top: 0px;
		letter-spacing: -2px;
		padding: 0px;
		line-height: 50px;
		margin-top: 70px;
	}
	.hero {
		grid-column: 1/13;
		grid-row: 1;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-around;
		height: auto;
		position: relative;
		z-index: 0;
	}
	.wrapper-text-hero {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
	.wrapper__homepage{
		grid-column: 1/13;
		grid-row: 3;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	.wrapper__faqLink{
		grid-column: 1/13;
		grid-row: 8;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	.wrapper__faqLink a{
		font-family: 'Red Hat Display';
		font-size: var(--m);
		font-weight: 700;
		color: var(--whiteGrey);
		background-color: var(--cta);
		padding: 20px 30px;
		text-decoration: none;
		box-shadow: 0px 20px 10px 0px rgba(0, 0, 0, 0.269);
		margin-bottom: 100px;
		margin-top: 0px;
		border-radius: 5px;
		
	}

	.img-hero {
		max-width: 30%;
		min-width: 30%;
		margin-top: 30px;
	}
	.hero h1 {
		text-align: center;
		font-family: var(--Geologica);
		font-weight: 900;
		font-size: 2.5rem;
		color: var(--primary);
		margin-top: 0px;
		letter-spacing: -2px;
		padding: 0px;
		line-height: 50px;
		margin-top: 70px;
		width: 50%;
	}
	.hero h1 span {
		color: var(--green);
	}
	.subtitle {
		font-family: poppins;
		font-weight: 300;
		font-size: var(--m);
		color: var(--primary);
		text-align: center;
		width: 50%;
		margin-top: 50px;
		margin-bottom: 100px;
		max-width: 70%;
	}
	.wrapper-Csection {
		grid-column: 1/13;
		grid-row: 2;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	.container-service {
		grid-column: 2/12;
		grid-row: 4;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
		margin-top: 30px;
	}
	.container-service h1 {
		text-align: center;
		font-family: 'Red Hat Display';
		font-size: var(--l);
		font-weight: 700;
		color: var(--primary);
		margin-top: 50px;
		margin-bottom: 50px;
		letter-spacing: -1px;
	}
	.wrapper-service {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
		gap: 10px;
		margin-top: 30px;
		margin-bottom: 50px;
	}
	.img {
		width: 100px;
		height: 100px;
		border-radius: 50%;
	}

	/* .wrapper-SectionB {
		grid-column: 1/13;
		grid-row: 6;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		margin-top: 150px;
		margin-bottom: 50px;
	}
	.wrapper-SectionB h2 {
		text-align: center;
		font-family: 'Red Hat Display';
		font-size: var(--l);
		font-weight: 700;
		color: var(--primary);
		margin-top: 0px;
		letter-spacing: -1px;
		margin-bottom: 50px;
	}
	.wrapper-SectionB h3 {
		text-align: center;
		font-family: 'Red Hat Display';
		font-size: var(--m);
		font-weight: 400;
		color: var(--primary);
		margin-top: 0px;
		letter-spacing: 0px;
		margin-bottom: 50px;
	} */

	.wrapper-form {
		grid-column: 1/13;
		grid-row: 9;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		background-color: var(--bgHero);
	}
	.testimonial {
		grid-column: 1/13;
		grid-row: 5;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		margin-top: 100px;
		height: 600px;
		background: var(--gradient);
		gap: 20px;
		padding: 30px;
	}
	.testimonial h2 {
		font-family: 'Poppins';
		font-weight: 300;
		font-size: var(--m);
		color: var(--whiteGrey);
		text-align: center;
		line-height: 25px;
		letter-spacing: 0px;
	}
	.testimonial h4 {
		font-family: poppins;
		font-weight: 600;
		font-size: var(--m);
		color: white;
		text-align: center;
		line-height: 40px;
		letter-spacing: -1px;
	}
	@keyframes bounce {
		0% {
			transform: scale(1) translateY(-2px);
		}
		25% {
			transform: scale(1) translateY(3px);
		}
		50% {
			transform: scale(1) translateY(-1px);
		}
		75% {
			transform: scale(1) translateY(2px);
		}
		100% {
			transform: scale(1) translateY(0);
		}
	}

	@media screen and (max-width: 2500px) {
		.hero h1 {
			line-height: 1em;
		}

		@media screen  and (max-width: 1224px) {
			.hero h1 {
				line-height: 1em;
			}
		}
		@media screen and (max-width: 768px) {
			.hero h1 {
				line-height: 50px;
				font-size: var(--l);
			}
			.wrapper-service {
				grid-column: 1/13;
				grid-row: 2;
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				margin-top: 50px;
				gap: 10px;
			}
			.img-hero {
				max-width: 70%;
				min-width: 70%;
				margin-top: 30px;
			}
			.wrapper__faqLink{
				height: 700px
			}
			.subtitle{
				width: 100%;
				padding: 0px;
			}
		}
	}
</style>
