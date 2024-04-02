<script>
	import Header from '../../sections/Header.svelte';
	import description from '../../Assets/png-gralypho/ConceptionSites.png';
	import Mouse from '../../Components/Mouse.svelte';
</script>

<Mouse />
<Header />
<section class="description-site">
	<div class="container">
		<img src={description} alt="" class="description-img" />
		<div class="wrapper-site-description">
			<h1>Site Vitrine</h1>
			<p>
				Créer un site vitrine, cela permet de présenter la société, ses produits et ses services. <br
				/><br />
				Il permet de fournir des informations aux clients potentiels et de les diriger vers les canaux
				de vente. C'est une formidable opportunité pour présenter une activité, une marque, un produit,
				un service (...). <br /><br />Le site vitrine peut se rélaiser rapidement car il ne contient
				généralement pas beaucoup de fonctionnalités ni de dynamique car là n'est pas son but. Son
				but est de montrer, d'expliquer, de sensibiliser, de créer un besoin, d'obtenir d'avantage
				de clients, de convertir des prospects (...). <br /><br />De nombreux sites vitrines
				contiennent seulement un formulaire de contact et nombreux sont ceux dont seul les contacts
				mail, téléphonique et les liens vers les réseaux sociaux figurent. En revanche le contenu du
				site exige un design soigné, élaboré et la navigation, l'UX et l'UI sont déterminants.
			</p>
			<h1>Site E-commerce</h1>
			<p>
				Un site e-commerce est une plateforme en ligne permettant la vente de biens ou de services.
				Il inclut généralement des fonctionnalités telles que des paniers d'achat, des passerelles
				de paiement sécurisées et des systèmes de gestion des stocks. <br /><br />Réaliser un site
				internet E-commerce permet à une entreprise de vendre des produits, des contenus ou des
				services en ligne, en restant ouverte 24h/24 et 7/7. <br /><br />C'est l'outil digital par
				excellence, celui qui travaille pour vous, à votre place pednant que vous êtes occupé
				ailleurs. La conception d'un site de E-commerce nécessite une grande expertise en gestion
				des flux, en stockage des datas et une parfaite connaissance des paramètres de
				cyber-sécurité.
			</p>
			<h1>Site Blog</h1>
			<p>
				Le blog d’entreprise est un site éditorial animé par un ou plusieurs auteurs qui publient
				des articles et des contenus sur des sujets spécifiques B2C ou B2B. <br /><br />C'est
				souvent un conseil que l'on donne pour attirer de nouveaux clients: entretenir un blog. Vous
				aller poster des articles à propos de sujets qui vous concernent et ces articles attireront
				des client potentiels vers votre blog. <br />C'est une pratique assez courante qui peut
				s'avérer être très efficace.
			</p>
			<h1>Portfolio</h1>
			<p>
				Le portfolio est une plateforme internet professionnelle qui permet aux créatifs,
				photographes, designers, indépendants (...) de présenter leurs travaux et leurs
				réalisations. <br /><br />Quoi de mieux qu'un site sur mesure pour présenter son travail et
				ses créations. Le Portfolio exige un design sur mesure, très soigné et le plus souvent
				orginal et innovant.
			</p>
			<h1>Site Corporate</h1>
			<p>
				Les entreprises privées ou publique, les cabinets, les indépendants ont besoin de présenter
				leurs activités et leur service. <br />Un site web corporate apporte les réponses
				nécessaires de ce point de vue. <br /><br />Un cabinet d'avocats, une entreprise de BTP, une
				agence immobilière (...). Utiliser un site corporate pour présenter ses services ou ses
				missions reste la bonne idée. <br />C'est l'occasion pour l'internaute de découvrir de
				l'intérieur tous les services qu'une société peut proposer, les missions réalisées.
				<br />C'est une manière de pénétrer dans l'entreprise et d'en comprendre le fonctionnement.
			</p>
			<h1>Site institutionnel</h1>
			<p>
				Le site institutionnel est destiné à promouvoir l’image d’une organisation telle que les
				établissements d’enseignement, les associations, les organismes à but non lucratif, les
				mairies, les facultés, les organsimes gouvernementaux (...). <br /><br />Ces institutions
				ont besoin d'un site internet à travers lequel l'usager pourra accéder à de nombreux de
				services en ligne pour effectuer un des démarches et accéder à une information ciblée et
				hierarchisée. <br />Ce type de site demande une parfaite conception UX/UI et une expertise
				avancée en navigation et organisation des données.
			</p>
		</div>
	</div>
</section>

<style>
	.description-site {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 0px;
		height: auto;
	}
	.container {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	}
	.container > * {
		flex-basis: 50%;
	}

	.wrapper-site-description {
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: flex-start;
		gap: 20px;
		padding: 20px;
		color: var(--textHero);
		margin-top: 30px;
		height: auto;
		width: 90%;
	}
	.wrapper-site-description h1 {
		font-size: 1.8em;
		font-weight: 700;
		text-align: center;
		font-family: epilogue;
		letter-spacing: -0.5px;
	}

	.wrapper-site-description p {
		font-family: epilogue;
		font-size: var(--m);
		font-weight: 400;
		text-align: left;
		padding: 0px;
		margin-bottom: 50px;
	}
	/* .wrapper-digital-infos p span {
        font-weight: 700;
} */

	@media screen and (max-width: 768px) {
		.wrapper-site-description {
			width: 100%;
		}
	}
	.description-img {
		width: 300px;
		margin-top: 50px;
	}
</style>
