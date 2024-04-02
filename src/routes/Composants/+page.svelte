<script>
  import { fade, slide } from "svelte/transition";
  // import bg from "../../Assets/png-gralypho/41.png";
  import Header from "../../sections/Header.svelte";
  // import vitrine from "../../Assets/png-gralypho/vitrine.svg";
  import portfolio from "../../Assets/png-gralypho/address-card-regular.svg";
  import commerce from "../../Assets/png-gralypho/shopping.svg";
  import blog from "../../Assets/png-gralypho/blog-solid.svg";
  import corporate from "../../Assets/png-gralypho/user-tie-solid.svg";
  import institution from "../../Assets/png-gralypho/building-columns-solid.svg";
  // import imgHero from "../../Assets/png-gralypho/webExplosion.png";
  import CardsSites from "../../Components/CardsSites.svelte";
  // import FSection from "../../sections/FSection.svelte";
  import Profits from "../../sections/SectionProfitsSite.svelte";
  import Service from "../../Components/Services.svelte";
  import imgDesign from "../../Assets/png-gralypho/30.png";
  import imgSeo from "../../Assets/png-gralypho/05.png";
  import imgWeb from "../../Assets/png-gralypho/36.png";
  import imgFormation from "../../Assets/png-gralypho/Web.png";
  import Banner from "../../Components/Banner.svelte";
  import BeneficeSection from "../../sections/BeneficeSection.svelte";
  import CardsSectionB from "../../Components/CardsSectionB.svelte";
  import vitrineA from "../../Assets/png-gralypho/vitrineB.png";
  import ecommerce from "../../Assets/png-gralypho/ecommerceA.png";
  import Blogger from "../../Assets/png-gralypho/blogA.png";
  import Portfolio from "../../Assets/png-gralypho/portfolio.png";
  import Corporated from "../../Assets/png-gralypho/corporate.png";
  import institutionnel from "../../Assets/png-gralypho/institutionnel.png";
  import Form from "../../Components/Form.svelte";
  import Mouse from "../../Components/Mouse.svelte";
  import cible from "../../Assets/png-gralypho/cible.png";
  // import Csection from "../../sections/Csection.svelte";


</script>

<Header />
<Mouse/>

<!-- ***************HERO*************** -->

<section class="sites-section" in:fade={{ duration: 1000 }}>
  <div class="hero">
    <h1>Étude de stratégie<br /><span>Digitale</span></h1>
  <p>Le marketing digital est un outil puissant pour propulser votre entreprise vers de nouveaux sommets. Chez Gralypho, nous comprenons l'importance cruciale de créer une présence en ligne forte et impactante pour stimuler la croissance de votre entreprise. Découvrez comment le marketing digital peut propulser votre entreprise vers le succès.</p>
        </div>
        
<div class="wrapper-description-marketing">
  <img src={cible} alt="" class="img-marketing">
  <p>
  <span>Visibilité et public cible.<br><br> </span>
   Dans notre ère numérique, le marketing digital est la clé du succès commercial. Chez Gralypho, nous comprenons l'importance cruciale de créer une présence en ligne forte et impactante pour propulser votre entreprise vers de nouveaux sommets. <br><br>
Notre équipe spécialisée en marketing digital est déterminée à maximiser la visibilité de votre marque, attirer un public ciblé et stimuler la croissance de votre entreprise. Du référencement (SEO) pour garantir que votre site soit trouvé par ceux qui recherchent vos produits ou services, aux campagnes publicitaires percutantes sur les médias sociaux, nous concevons des stratégies sur mesure pour répondre à vos objectifs commerciaux. <br><br>

  <span>Rôle des médias Sociaux.<br><br> </span>
Nous exploitons la puissance des médias sociaux pour créer des connexions authentiques avec votre audience, stimuler l'engagement et renforcer la notoriété de votre marque. Nos experts en marketing digital sont également experts dans la gestion de campagnes publicitaires en ligne, optimisant chaque euro dépensé pour assurer un retour sur investissement. <br><br>
  <span>Marketing Digital pour propulser votre entreprise vers le succès.<br><br> </span>
Le marketing digital va au-delà de la simple visibilité en ligne ; c'est un moyen efficace de créer des relations durables avec vos clients. Grâce à notre approche créative et axée sur les résultats, nous sommes prêts à transformer votre présence en ligne en une force motrice qui propulse votre entreprise vers de nouveaux horizons. Découvrez comment le marketing digital peut propulser votre entreprise vers le succès. <br><br>
    </p>
    </div>



  <!-- ***************COLLAPSES*************** -->





  <div class="testimonial">
    <h2>
      Le marketing Digital, pour propulser votre entreprise vers le succès <span>🚀.</span>
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
    background-color: var(--primary);
  }
  .hero h1 {
    text-align: center;
    font-family: Epilogue;
    font-weight: 900;
    font-size: var(--xlhero);
    color: rgb(255, 255, 255);
    margin-top: 0px;
    letter-spacing: -1px;
    padding: 0px;
    line-height: 50px;
    margin-top: 100px;
  }
  .hero h1 span {
    color: var(--rouge);
  }
  .hero p{
    font-family: poppins;
    font-weight: 300;
    font-size: var(--m);
    color: rgb(224, 222, 222);
    text-align: center;
    width: 60%;
    margin-top: 30px;
    margin-bottom: 30px;
  }
  .img-marketing{
    width: 40%;
    height: auto;
    margin-top: 20px;
  }
.wrapper-description-marketing p{
  font-family: poppins;
  font-weight: 300;
  font-size: var(--m);
  color: var(--primary);
  text-align: center;
  width: 60%;
  margin-top: 30px;
  margin-bottom: 30px;
}
.wrapper-description-marketing span{
font-weight: 700;
}
  .wrapper-description-marketing {
    grid-column: 1/13;
    grid-row: 2;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    margin-top: 50px;
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
    height: 100%;
    background-color: var(--rouge);
    padding: 0px;
    gap: 20px;
  }
  .testimonial h2 {
    font-family: "architects daughter";
    font-weight: 700;
    font-size: var(--l);
    color: white;
    text-align: center;
    line-height: 40px;
    letter-spacing: 0px;
    margin-top: 40px;
    margin-bottom: 40px;
    padding: 40px;

  }
  .testimonial h2 span {
  font-size: 1.5em;
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
      font-size: 3.1em;
    }

  }
</style>
