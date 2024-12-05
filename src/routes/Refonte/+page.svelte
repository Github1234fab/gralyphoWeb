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
	import imgWeb from '../../Assets/png-gralypho/36.png';
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
	import Mouse from '../../Components/Mouse.svelte';
	import design from '../../Assets/png-gralypho/Design.jpg';
	import communication from '../../Assets/png-gralypho/supportCommunication.png';
	import logoCrea from '../../Assets/png-gralypho/logoBiere.png';
	// import Csection from "../../sections/Csection.svelte";
	import Button from "../../Components/ButtonCTA.svelte";

	let accordeonTab = [
		{
			title: 'Tarifs',
			p: 'Pour la création de logo et la création de page Web et refonte, nous pratiquons un tarif de 100€/heure. Pour les logos nous pouvons ajouter un droit de diffusion. Pour la création de supports de communication, nous bénéficions de tarifs négociers avec nos imprimeurs partenaires.'
		},
		{
			title: 'Délai de conception et de mise en ligne',
			p: 'Pour les logos et support de communication les délais peuvent être de quelques jours à un 15 jours de la création à la livraison. Pour le spages Web les délais peuvent être sensiblement les mêmes.'
		}
	];

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
		<img src={imgHero} alt="" class="imgHero" />
		<h1>Création de <br /><span>Design, Logos et supports de Com'</span></h1>
		<h2>
			L'agence Gralypho crée vos designs Web pour qu'ils soient en parfaite adéquation avec votre
			projet. <br />Le design d'un site ou d'une application, selon plusieurs études menées aupès
			des utilisateurs du Web est essentiel pour plus de 75% des sondés.
		</h2>
<Button/>
	</div>

	<!-- ***************SERVICES*************** -->

	<div class="container-service">
		<h1>Étude et réalisation de design sur mesure</h1>
		<div class="wrapper-service">
			<div class="wrapper-img">
				<h2>Design Page Web</h2>
				<img
					src={design}
					alt="illustration de différents logo pour apiculteur"
					class="img-design"
				/>
			</div>

			<div class="wrapper-img">
				<h2>Création de logos</h2>
				<img
					src={logoCrea}
					alt="illustration de différents logo pour apiculteur"
					class="img-biere"
				/>
			</div>

			<div class="wrapper-img">
				<h2>Création de support de communication</h2>
				<img src={communication} alt="Photos de cartes de visites" class="img-design" />
			</div>
		</div>
	</div>

	<!-- ***************COLLAPSES*************** -->

	<div class="wrapper-SectionB">
		<h1>Tarifs, Délais ...</h1>
		{#each accordeonTab as tab}
			<CardsSectionB title={tab.title} p={tab.p} />
		{/each}
	</div>

	<!-- ***************TESTIMONIAL*************** -->

	<div class="testimonial">
		<h2>
			« Mon but est d’atteindre deux choses : la simplicité et la clarté. <br /> Les bons designs naissent
			de ces deux éléments. » – Lindon Leader
		</h2>
	</div>

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
		background-color: rgb(245, 244, 244);
		height: auto;
		font-size: 16px;
	}
	.hero {
		grid-column: 1/13;
		grid-row: 1;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		height: auto;
	}
	.imgHero {
		max-width: 60%;
		min-width: 60%;
		margin-top: 30px;
	}
	.hero h1 {
		text-align: center;
		font-family: var(--Geologica);
		font-weight: 900;
		font-weight: 900;
		font-size: 2.5rem;
		color: var(--primary);
		margin-top: 0px;
		letter-spacing: -2px;
		padding: 0px;
		line-height: 50px;
		margin-top: 100px;
	}
	.hero h1 span {
		color: var(--green);
	}
	.hero h2 {
		font-family: poppins;
		font-weight: 300;
		font-size: var(--m);
		color: var(--primary);
		text-align: center;
		margin-top: 50px;
		margin-bottom: 100px;
		width: 80%;
	}

	.container-service {
		grid-column: 2/12;
		grid-row: 2;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		margin-top: 0px;
	}
	.container-service h1 {
		text-align: center;
		font-family: 'Red Hat Display';
		font-size: var(--l);
		font-weight: 700;
		color: var(--primary);
		margin-top: 100px;
		letter-spacing: -1px;
	}
	.wrapper-service {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: stretch;
		gap: 20px;
		margin-top: 30px;
	}
	.wrapper-img {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 10px;
		box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.204);
		border-radius: 5px;
		padding: 20px;
		min-width: 35%;
		max-height: 100%;
	}
	.wrapper-img h2 {
		font-family: 'Red Hat Display';
		font-size: var(--m);
		font-weight: 700;
		color: var(--primary);
		margin-top: 0px;
		letter-spacing: -1px;
	}
	.img-design {
		max-width: 100%;
		max-height: 50%;
		margin-top: 50px;
		border-radius: 5px;
	}
	.img-biere {
		max-width: 100%;
		min-height: 60%;
		margin-top: 50px;
		border-radius: 5px;
	}

	.wrapper-SectionB {
		grid-column: 1/13;
		grid-row: 4;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		margin-top: 50px;
		margin-bottom: 50px;
	}
	.wrapper-SectionB h1 {
		text-align: center;
		font-family: 'Red Hat Display';
		font-size: var(--l);
		font-weight: 700;
		color: var(--primary);
		margin-top: 0px;
		letter-spacing: -1px;
		margin-bottom: 50px;
	}
	.wrapper-form {
		grid-column: 1/13;
		grid-row: 7;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		background-color: var(--bgHero);
	}
	.testimonial {
		grid-column: 1/13;
		grid-row: 6;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		margin-top: 0px;
		height: 400px;
		background-image: linear-gradient(var(--primary), var(--secondary));
		padding: 50px;
		gap: 20px;
	}
	.testimonial h2 {
		font-family: 'Poppins';
		font-weight: 400;
		font-size: var(--m);
		color: white;
		text-align: center;
		line-height: 30px;
		letter-spacing: 0px;
		padding: 40px;
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

	@media screen and (min-width: 1224px) and (max-width: 2500px) {
		.hero h1 {
			line-height: 1em;
		}
	}
	@media screen and (min-width: 768px) and (max-width: 1224px) {
		.hero h1 {
			line-height: 1em;
		}
	}
	@media screen and (min-width: 300px) and (max-width: 768px) {
		.hero h1 {
			line-height: 50px;
			font-size: 2.5em;
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
			max-width: 90%;
		}
		.imgHero {
			max-width: 100%;
			min-width: 100%;
			margin-top: 30px;
		}
		.img-design {
			min-width: 100%;
			min-height: 60%;
			margin-top: 50px;
			border-radius: 5px;
		}
		.img-biere {
			max-width: 100%;
			max-height: 60%;
			margin-top: 50px;
			border-radius: 5px;
		}
		.wrapper-img {
			min-width: 100%;
			max-height: 100%;
		}
	}
</style>
