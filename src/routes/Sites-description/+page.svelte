<script>
import Header from '../../sections/Header.svelte';
import description from '../../Assets/png-gralypho/ConceptionSites.png';
  import Mouse from "../../Components/Mouse.svelte";


</script>
<Mouse/>
<Header/>
<section class="description-site">
	<div class="container">
	<img src={description} alt="" class="description-img" />
	<div class="wrapper-site-description">
		<h1>Site Vitrine</h1>
		<p>
			Créer un site internet vitrine permet de présenter la société, ses produits et ses services.
			Il permet de fournir des informations aux clients potentiels et de les diriger vers les canaux
			de vente.
		</p>
		<h1>Site E-commerce</h1>
		<p>
			Un site e-commerce est une plateforme en ligne permettant la vente de biens ou de services. Il
			inclut généralement des fonctionnalités telles que des paniers d'achat, des passerelles de
			paiement sécurisées et des systèmes de gestion des stocks. Réaliser un site internet
			E-commerce permet à une entreprise de vendre des produits, des contenus ou des services en
			ligne, en restant ouverte 24h/24 et 7/7.
		</p>
		<h1>Site Blog</h1>
		<p>
			Le blog d’entreprise est un site éditorial animé par un ou plusieurs auteurs qui publient des
			articles et des contenus sur des sujets spécifiques B2C ou B2B.
		</p>
		<h1>Portfolio</h1>
		<p>
			Le portfolio est une plateforme internet professionnelle qui permet aux créatifs,
			photographes, designers, indépendants (...) de présenter leurs travaux et leurs réalisations.
		</p>
		<h1>Site Corporate</h1>
		<p>
			Les grandes entreprises, institutions ou organisations ont besoin de présenter leurs
			activités. Un site web corporate apporte les réponses nécessaires de ce point de vue.
		</p>
		<h1>Site institutionnel</h1>
		<p>
			Le site institutionnel est destiné à promouvoir l’image d’une organisation telle que les
			établissements d’enseignement, les associations et les organismes à but non lucratif.
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
.container{
        display: flex;
          justify-content: center;
        align-items: center;
        flex-direction: column;
  
}
.container >* {
        flex-basis: 50%;
}
.description-img {
        width: 40%;
	height: auto;

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
        width: 50%;
}
</style>






