<script>
	// import Robot from "../Assets/png-gralypho/Saly-39.png";
	import { onMount } from 'svelte';
	// import triangle from "../Assets/png-gralypho/nnneon (6).svg";
	import TypeSiteCards from '../Components/TypeSiteCards.svelte';
	import vitrine from '../Assets/png-gralypho/vitrine.svg';
	import portfolio from '../Assets/png-gralypho/address-card-regular.svg';
	import commerce from '../Assets/png-gralypho/shopping.svg';
	import blog from '../Assets/png-gralypho/blog-solid.svg';
	import corporate from '../Assets/png-gralypho/user-tie-solid.svg';
	import institution from '../Assets/png-gralypho/building-columns-solid.svg';
	import Cards from '../Components/Cards.svelte';

	let SiteCards = [
		{
			title: 'Site vitrine',
			icon: vitrine,
			// p: "Créer un site internet vitrine permet de présenter la société, ses produits et ses services. Il permet de fournir des informations aux clients potentiels et de les diriger vers les canaux de vente ...",
			lien: '/types-site-web/#vitrine'
			// lien2: "/Sites",
		},
		{
			title: 'Site E-commerce',
			icon: commerce,
			// p: "Réaliser un site internet E-commerce permet à une entreprise de vendre des produits, des contenus ou des services en ligne, en restant ouverte 24h/24 et 7/7.",
			lien: '/types-site-web/#e-commerce'
		},
		{
			title: 'Blog',
			icon: blog,
			// p: "Le blog d’entreprise est un site éditorial animé par un ou plusieurs auteurs qui publient des articles et des contenus sur des sujets spécifiques B2C ou B2B. ",
			lien: '/types-site-web/#blog'
		},
		{
			title: 'Portfolio',
			icon: portfolio,
			// p: "Le portfolio est une plateforme internet professionnelle qui permet aux créatifs, photographes, designers, indépendants (...) de présenter leurs travaux et leurs réalisations. ",
			lien: '/types-site-web/#portfolio'
		},
		{
			title: 'Site Corporate',
			icon: corporate,
			// p: "Les grandes entreprises, institutions ou organisations ont besoin de présenter leurs activités. Un site web corporate apporte les réponses nécessaires de ce point de vue.",
			lien: '/types-site-web/#corporate'
		},
		{
			title: 'Site Institutionnel',
			icon: institution,
			// p: "Le site institutionnel est destiné à promouvoir l’image d’une organisation telle que les établissements d’enseignement, les associations et les organismes à but non lucratif. ",
			lien: '/types-site-web/#institutionnel'
		}
	];
</script>

<section class="C-section">
	<h2>Les différents types de site internet</h2>

	<div class="wrapper-cards">
		{#each SiteCards as Cards}
			<TypeSiteCards title={Cards.title} icon={Cards.icon} p={Cards.p} lien={Cards.lien} />
		{/each}
	</div>
</section>

<style>
	.C-section {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		font-size: 1rem;
		margin-top: 0px;
		overflow: hidden;
	}

	.C-section h2 {
		font-family: var(--Red);
		font-weight: 700;
		font-size: 2rem;
		color: var(--whiteGrey);
		text-align: center;
		line-height: 35px;
		margin-top: 20px;
		margin-bottom: 50px;

	}

	.wrapper-cards {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		justify-content: center;
		gap: 20px;
		max-width: 100%;
	}

	@media screen and (max-width: 768px) {
		.C-section {
			font-size: 1rem;
		}
	}
</style>
