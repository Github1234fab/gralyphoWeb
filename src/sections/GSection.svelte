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

  // onMount(() => {
  //   // function handleResize() {
  //     if (window.innerWidth < 576) {
  //       gsap.to(".wrapper-developpeur", {
  //         x: 200,
  //         // ease: power4,
  //         scrollTrigger: {
  //           trigger: ".wrapper-developpeur",
  //           start: "top 920px",
  //           end: "-100px",
  //           scrub: 5,
  //         },
  //       });
  //     }
  //     else if (window.innerWidth < 768) {
  //       gsap.to(".wrapper-developpeur", {
  //         x: 400,
  //         // ease: power4,
  //         scrollTrigger: {
  //           trigger: ".wrapper-developpeur",
  //           start: "top 920px",
  //           end: "-100px",
  //           scrub: 5,
  //         },
  //       });
  //     } else {
  //       gsap.to(".wrapper-developpeur", {
  //         x: 700,
  //         // ease: power4,
  //         scrollTrigger: {
  //           trigger: ".wrapper-developpeur",
  //           start: "top 920px",
  //           end: "-100px",
  //           scrub: 5,
  //         },
  //       });
  //     }
  //   });

  // // Appeler la fonction de gestion de redimensionnement au chargement initial
  // handleResize();

  // // Ajouter un écouteur d'événement pour le redimensionnement de la fenêtre
  // window.addEventListener("resize", handleResize);

  // // Nettoyer l'écouteur d'événement lors de la destruction du composant
  // return () => {
  //   window.removeEventListener("resize", handleResize);
  // };
</script>

<section class="G-section">
    <div class="wrapper-text">
      <h1>Découvrez nos <span>réalisations </span></h1>
      <h2>
        Découvrez ici des projets témoins utilisant chacun une technique particulière. <br />Découvrez vite le potentiel
        des animations, des applications, des requêtes API, des jeux, des composants. (...) !
      </h2>
 
  </div>

  <div class="wrapper-carousel">
    <Carousel />
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
    text-align: left;
    font-family: epilogue;
    font-weight: 900;
    font-size: var(--xl);
    color: var(--primary);
    letter-spacing: -1px;
    line-height: clamp(5px, 40px 60px);
    text-align: left;
  }
  .G-section h1 span {
    font-weight: 900;
    color: transparent;
    -webkit-background-image: linear-gradient(to left, var(--ca), var(--blue));
    background-image: linear-gradient(to left, var(--ca), var(--blue));
    -webkit-background-clip: text;
    background-clip: text;
  }

  .G-section h2 {
    font-family: poppins;
    font-weight: 300;
    font-size: var(--m);
    color: grey;
    text-align: left;
    line-height: 25px;
    letter-spacing: -1px;
    width: 100%;
    text-align: left;
  }
   
  .wrapper-carousel {
    grid-column: 1/12;
    grid-row: 2;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 0px;
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
