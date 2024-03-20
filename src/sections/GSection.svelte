<script>
  import Dev from "../Assets/png-gralypho/dev.png";
  import Carousel from "../Components/CarousselCards.svelte";
  import skate from "../Assets/png-gralypho/skateboard.png";
  import { onMount } from "svelte";
  import { bounceIn } from "svelte/easing";
  import Ville from "../Assets/png-gralypho/05.png";
  import Visuel from "../Assets/png-gralypho/05.png";
  import VisuelB from "../Assets/png-gralypho/21.png";
  import VisuelC from "../Assets/png-gralypho/36.png";
  import PortfolioCards from "../Components/PortfolioCards.svelte";
  import animationSite from "../Assets/png-gralypho/animationSite.png";
    import horloge from "../Assets/png-gralypho/horloge.png";
      import meteo from "../Assets/png-gralypho/meteo.png";
            import morpion from "../Assets/png-gralypho/morpion.png";
                        import photographie from "../Assets/png-gralypho/photographie.png";
                         import booki from "../Assets/png-gralypho/booki.png";
                         import flag from "../Assets/png-gralypho/flag.png";
                          import resa from "../Assets/png-gralypho/resa.png";

let portfolioTab =[
{
  title: "SiteWeb",
  text:"Décrouvrez un site animé au scroll",
  img: animationSite,
},
{
  title: "Application météorologie",
  text:"Requête API pour afficher la météo",
  img: horloge,
},
{
  title: "Portfolio Photographe",
  text:"Parallaxe et animations CSS",
  img: meteo,
},
{
  title: "Horloge",
  text:"Web Design neumorphisme",
  img: morpion,
},
{
  title: "Web Pédagogique",
  text:"Jeu de drapeaux",
  img: photographie,
},
{
  title: "Jeux morpion",
  text:"Application de jeu",
  img: booki,
},
{
  title: "Site Web",
  text:"Réservation de chambre",
  img: flag,
},
{
  title: "Site Web",
  text:"Réservation de table",
  img: resa,
}
]



</script>

<section class="G-section">

    <div class="wrapper-text">
      <h1>Découvrez nos <span>réalisations </span></h1>
      <h2>
        Découvrez ici des projets témoins utilisant chacun une technique particulière. <br />Découvrez vite le potentiel
        des animations, des applications, des requêtes API, des jeux, des composants. (...) !
      </h2>
  </div>
  <div class="wrapper-portfolio">
    {#each portfolioTab as item}
    <PortfolioCards titre={item.title} texte={item.text} img={item.img} />
  {/each}
  </div>

</section>

<style>
  .G-section {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: auto;
    height: auto;
    width: 100%;
    font-size: 16px;
    background-color: var(--greyBg);
  }
  .wrapper-text {
    grid-column: 2/12;
    grid-row: 1;
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-top: 50px;
  }
    	.G-section h1 {
		font-family: Heebo;
		text-transform: uppercase;
		font-size: var(--m);
		color: var(--jauneB);
		font-weight: 600;
		letter-spacing: -0.04em;
		margin-top: 80px;
		margin-left: -50px;
    text-align: center;
	}
	.G-section h2 {
		font-family: epilogue;
		font-size: var(--l);
		color: var(--primary);
		font-weight: 600;
		margin-bottom: 0px;
		letter-spacing: -0.04em;
		margin-left: 10px;
    text-align: center;
	}



   
  .wrapper-portfolio{
    grid-column: 2/12;
    grid-row: 2;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin-top: 100px;
  }
    :global(.card-portfolio){
   flex: 1 1 20%;
  }

  @media screen and (max-width: 768px) {
    .G-section h1 {
      text-align: left;
      font-family: epilogue;
      font-weight: 900;
      font-size: var(--xl);
      color: var(--primary);
      letter-spacing: -1px;
      line-height: 40px;
    }
      .wrapper-text {
    grid-column: 2/12;
    grid-row: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 10px;
  }

  }
</style>
