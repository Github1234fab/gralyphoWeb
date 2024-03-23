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
  // import Csection from "../../sections/Csection.svelte";

  let accordeonTab = [
    {
      title: "Tarifs",
      p: "Nos tarifs démarrent à 500 euros pour un blog, 1000 euros pour une landing page (site page unique), 1500 euros pour un site vitrine, 2000 euros pour un site corporate, 2500 euros pour un site e-commerce, 3000 euros pour un site institutionnel, 3500 euros pour un site sur mesure entièrement codé (garantie sécurité et design innovant et sur mesure).",
    },
    {
      title: "Délai de conception et de mise en ligne",
      p: "Le délai de conception et de mise en ligne dépend du type de site internet que vous souhaitez. En règle général, le délai de conception et de mise en ligne est de 2 semaines pour un blog, 3 semaines pour une landing page, 4 semaines pour un site vitrine, 5 semaines pour un site corporate, 6 semaines pour un site e-commerce, 7 semaines pour un site institutionnel, 8 semaines pour un site sur mesure entièrement codé (garantie sécurité et design innovant et sur mesure).",
    },
    {
      title: "Sites Dynamiques - Possibilités et fonctionnalités",
      p: "Nos clients sont parfois surpris de découvir tout ce qu'un site internet peut contenir comme fonctionnalité et possibilité. En effet, un site internet peut contenir un blog, un portfolio, un formulaire de contact, un chatbot, un espace membre, un espace client, un espace administrateur, un espace de paiement, de réservation, de commande (etc)?.  Mais nous pouvons également collecter des données, les stocker, les consulter, les anaylser et s'en serivir pour orienter votre activité. Nous pouvons également établir des requêtes API. C'est à dire que nous pouvons consulter des données externes contenues dans un autre site, une autre application que la vôtre et les rapatrier dans votre site pour les afficher. Par exemple, nous pouvons établir une requête auprès d'un service météo et afficher toutes les données métérologiques de votre localité en temps réel ou s'en servir pour valider l'ouverture d'une activité d'accrobranche par exemple, etc.",
    },
    {
      title: "Propriété, hébergement, nom de domaine et abonnement",
      p: "Nos clients se posent souvent la question de la propriété de leur site. À qui appartient-il? Il vous appartient, parce que vous allez souscrire auprès d'un hebergeur et bien souvent cet hébergeur sera également la plateforme sur laquelle votre site sera réalisée et sur laquelle votre nom de domaine sera acheté. Cet souscription est à votre nom dès lors, vous êtes propriétaire de votre site. ",
    },
  ];
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

  <div class="wrapper-SectionB">
    <h1>Tarifs, Délais ...</h1>
    {#each accordeonTab as tab}
      <CardsSectionB title={tab.title} p={tab.p} />
    {/each}
  </div>



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
    grid-column: 2/11;
    grid-row: 2;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    margin-top: 50px;
}


  .wrapper-SectionB {
    grid-column: 1/13;
    grid-row: 4;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 0px;
    margin-bottom: 50px;
  }
  .wrapper-SectionB h1 {
    text-align: center;
    font-family: epilogue;
    font-size: var(--xl);
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
    .hero h3 {
      line-height: 30px;
      font-size: 1.2em;
      margin-top: 30px;
      margin-bottom: 50px;
      width: 60%;
    }
  }
  @media screen and (min-width: 768px) and (max-width: 1224px) {
    .hero h1 {
      line-height: 1em;
    }
    .hero h3 {
      line-height: 30px;
      font-size: 1em;
      margin-top: 30px;
      margin-bottom: 50px;
      width: 60%;
    }

  }
  @media screen and (min-width: 300px) and (max-width: 768px) {
    .hero h1 {
      line-height: 50px;
      font-size: 3.1em;
    }

  }
</style>
