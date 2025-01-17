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
	// onMount(() => {
	// 	gsap.to('.wrapper-cards', {
	// 		y: 0,
	// 		opacity: 1,
	// 		ease: 'power4',
	// 		scrollTrigger: {
	// 			trigger: '.wrapper-cards',
	// 			start: 'top 800px',
	// 			end: '-200px',
	// 			scrub: 5
	// 		}
	// 	});
	// });
</script>

<section class="C-section">
	<!-- <div class="wrapper-text">
		<h1>Le futur de votre business commence par un <span> site Web.</span></h1>
		<h2>
			Il existe couramment <span>6 types de site web</span>.  <br> Quel est celui qui correspond à votre
			<span>activité?</span>
		</h2>
	</div> -->

	<div class="wrapper-cards">
		{#each SiteCards as Cards}
			<TypeSiteCards
				title={Cards.title}
				icon={Cards.icon}
				p={Cards.p}
				lien={Cards.lien}
			/>
		{/each}
	</div>
</section>

<style>
	.C-section {
		display: grid;
		grid-template-columns: repeat(12, 1fr);
		grid-template-rows: auto;
		font-size: 16px;
		background-color: var(--whiteGrey);
		margin-top: 0px;
		overflow: hidden;
	margin-bottom: 200px;
	}
	/* .wrapper-text h1 {
	    font-family: 'Red Hat Display';
		font-size: var(--l);
		font-weight: 800;
		text-align: center;
		color: var(--primary);
		margin-top: 70px;
		letter-spacing: -2px;
	}
	.wrapper-text h1 span {
		font-weight: 900;
		color: transparent;
		-webkit-background-image: linear-gradient(to left, var(--orange), var(--blue));
		background-image: linear-gradient(to left, var(--orange), var(--blue));
		-webkit-background-clip: text;
		background-clip: text;
	}
	.wrapper-text h2 {
		font-family: poppins;
		font-weight: 300;
		font-size: var(--m);
		color: var(--primary);
		text-align: center;
		line-height:  25px;
		margin-top: 20px;
		margin-left: 10px;
	}
	.wrapper-text h2 span {
		font-weight: 500;
		color: var(--primary);
	}
	.wrapper-text {
		grid-column: 2/12;
		grid-row: 1;
	} */
	.wrapper-cards {
		grid-column: 1/13;
		grid-row: 2/3;
		display: flex;
		flex-wrap: wrap;
		margin: 0px auto;
		align-items: center;
		justify-content: center;
		gap: 20px;
		max-width: 70%;
		padding: 20px 10px;
	}

	@media screen and (min-width: 1270px) {
		.wrapper-cards {
			max-width: 50%;
		}
	}

	@media screen and (max-width: 1120px) {
		.C-section {
			font-size: 15px;
		}
	}

	@media screen and (max-width: 768px) {
		.C-section {
			font-size: 12px;
		}
	}
</style>
