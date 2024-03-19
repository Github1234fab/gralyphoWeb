<script>
  import World from "../Assets/png-gralypho/Saly-12.png";
  import Analist from "../Assets/png-gralypho/Saly-44.png";
  import { onMount } from "svelte";
  import six from "../Assets/png-gralypho/six.svg";

</script>


  <div class="wrapper-text">
    <h1>
      Référencement: <strong>SEO</strong> ou <strong>SEA</strong>?! <br /> Profitez de notre expérience en référencement.
    </h1>
    <h2>
      C'est le nerf de la guerre, évidemment !<br />
      C'est le but de tout à chacun, être référencé en première page des moteurs de recherche. Être visible et accessible.
      <br /> <br />Comment réaliser cela? Comment faire pour que nos prospects, nos clients, nos utilisateurs nous
      trouvent, rapidement, facilement? Tout en encore une question de stratégie allant du choix de votre nom de
      domaine, aux mots clefs utilisés pour votre référencement, en passant par la qualité du copywriting et votre
      stratégie à court et long terme. <br /><br />
      Mais, il y a deux techniques principales dans le domaine du référencement. La technique naturelle et la technique payante.
      <br />La technique de référencement naturel, c'est ce que l'on appelle le SEO (Search Engine Optimization) et la
      technique payante, le SEA (search engine advertising). <br /><br />Le référencement naturel requiert de
      l'expérience en rédaction de contenu web (copywriting), mais également de très bonnes connaissances en
      accessibilité et des normes imposées notamment par le W3C. Par accessibilité on entend, accessible à toute
      personne présentant un handicap. Qu'il soit visuel, cognitif, physique ou neurologique. Un texte pas assez
      contrasté, une animation trop intense pouvant provoquer l'épillepsie, une image non décrite pour les non-voyants,
      etc. <br />Les normes imposées par le W3C pèsent maintenant considérablement sur le référencement naturel, car le
      robot Google prend maintenant en compte ces paramètres d'accessibilité du Web. <br /><br />
      Quant au référencement payant, le SEA, il requiert de très bbonnes connaissances en matière d'outil de promotion marketing.
      <br />Il s'agit de campagne de publicité qui peuvent soient être diffusés sur des sites partenaires soient en haut
      de page des moteurs de recherche, ou les deux. <br /><br />Ces outils d'apprence assez simples sont en réalité
      très complexe. Chaque mot clef est payant, une stratégie est donc nécessaire en amont. La qualité de la rédaction
      de l'annonce doit être pertinente et s'adresser facilement et directement au coeur de cible. Les annonces peuvent
      être automatisées et se déclencher à des périodes déterminées.
    </h2>
  </div>


<style>
  .wrapper-text {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    font-size: 16px;
    background-color: white;
    margin: 0 100px;
    height: 100%;
    margin-bottom: 100px;
  }
  .wrapper-text h1 {
    text-align: left;
    grid-row: 2;
    font-family: epilogue;
    font-weight: 700;
    font-size: var(--l);
    color: black;
    margin-top: 50px;
    line-height: 50px;
    letter-spacing: -1px;
  }
  .wrapper-text h2 {
    column-count: 2; /* ou le nombre de colonnes souhaité */
    column-gap: 20px;
    margin-top: 10px;
    font-family: poppins;
    font-weight: 300;
    font-size: var(--m);
    color: grey;
    text-align: left;
    line-height: 30px;
    margin-top: 40px;
  }

  @media screen and (max-width: 768px) {
    .wrapper-text {
      margin: 0 20px;
          margin-bottom: 100px;
    }
    .wrapper-text h1 {
      font-size: var(--xl);
      line-height: 40px;
    }
    .wrapper-text h2 {
      column-count: 1;
      font-size: 1em;
      line-height: 30px;
    }
  }


</style>
