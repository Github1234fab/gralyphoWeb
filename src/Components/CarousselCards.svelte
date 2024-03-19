<script>
  import Cards from "../Components/Cards.svelte";
  import { onMount } from "svelte";

  let isDown = false;
  let startX;
  let scrollLeft;

  let cardsInfo = [
    {
      key: 1,
      title: "Site internet avec animations diverses",
      link: "https://fabienmarceau.com/RocketAgencyProject%20copie/index.html",
    },
    {
      key: 2,
      title: "Application avec requête API - service de Meteo DATAS",
      link: "https://fabienmarceau.com/meteo/index.html",
    },
    {
      key: 3,
      title: "Site Web avec Composants (Sliders)",
      link: "https://fabienmarceau.com/photographer%20V3/index.html",
    },
    {
      key: 4,
      title: "Site Web de réservation de chambre.",
      link: "https://fabienmarceau.com/Booki/index.html",
    },
    {
      key: 5,
      title: "Applications pédagogique éducative.",
      description: " Application interactive et pédagogique",
      link: "https://fabienmarceau.com/dist/index.html",
    },
    {
      key: 6,
      title: "Site web resevation de restaurant",
      link: "https://fabienmarceau.com/myFood/index.html",
    },
    {
      key: 7,
      title: "Composant web. Horloge",
      link: "https://fabienmarceau.com/horloge/index.html",
    },
    {
      key: 8,
      title: "Application - Jeu",
      link: "https://fabienmarceau.com/tic-tac-toe/index.html",
    },
  ];

  onMount(() => {
    const carousselCards = document.querySelector(".caroussel-cards");

    carousselCards.addEventListener("mousedown", (e) => {
      isDown = true;
      startX = e.pageX - carousselCards.offsetLeft;
      scrollLeft = carousselCards.scrollLeft;
    });

    carousselCards.addEventListener("mouseleave", () => {
      isDown = false;
    });

    carousselCards.addEventListener("mouseup", () => {
      isDown = false;
    });

    carousselCards.addEventListener("mousemove", (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - carousselCards.offsetLeft;
      const walk = (x - startX) * 7; // Ajustez la vitesse de défilement ici
      carousselCards.scrollLeft = scrollLeft - walk;
    });
  });
</script>

<div class="wrapper-caroussel">
  <!-- <h2 class="title-caroussel">Exemple de réalisations</h2> -->
  <div class="caroussel-cards">
    {#each cardsInfo as card}
      <Cards title={card.title} img={card.img} description={card.description} link={card.link} video={card.video} />
    {/each}
  </div>
</div>

<style>
  .wrapper-caroussel {
    width: 100%;
    min-height: 400px;
    overflow: hidden;
    cursor: grab;
    position: relative;
    /* background-color: var(--colorO); */
    grid-column: 1/12;
    grid-row: 5;
    z-index: 5;
    margin-top: 0px;
    border-radius: 10px;
  }
  .wrapper-caroussel ::-webkit-scrollbar {
    background-color: transparent;
  }

  .wrapper-caroussel:active {
    cursor: grabbing;
  }

  .caroussel-cards {
    display: flex;
    overflow-x: auto;
    scroll-behavior: smooth;
    margin-top: 50px;
    gap: 30px;
    padding: 50px;
  }
</style>
