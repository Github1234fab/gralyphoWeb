<script>
  import { onMount } from "svelte";
  import TestimonyCards from "../Components/TestimonyCards.svelte";
  import profilOne from "../Assets/Profils-gralypho/Frame (2).png";
  import profilTwo from "../Assets/Profils-gralypho/Frame (5).png";
  import profilThree from "../Assets/Profils-gralypho/Frame (12).png";
  import profilFour from "../Assets/Profils-gralypho/Ellipse 125.png";
  import profilFive from "../Assets/Profils-gralypho/Ellipse 131.png";
  import profilSix from "../Assets/Profils-gralypho/Ellipse 220.png";

  // onMount(() => {
  //   gsap.to(".J-section", {
  //     opacity: 1,
  //     ease: "expoScale",
  //     scrollTrigger: {
  //       trigger: ".J-section",
  //       start: "top 800px",
  //       end: "-200px",
  //       scrub: 4,
  //     },
  //   });
  // });

  let dataCard = [
    {
      img: profilTwo,
      alt: "Photo d'identité de client, femme",
      title: "Mademoiselle G.",
      job: "Marjolaine - Directrice de la communicaiton",
      p: "Délai respecté, composants fonctionnels avec une très bonne intégration. Nous recommandons Gralypho! ",
    },
    {
      img: profilFive,
      alt: "Photo d'identité de client, homme",
      title: "ElectriKcity",
      job: "Damien - Électricien indépendant",
      p: "L'ajout de fonctionnalité comme la prise de RV et les paiements en ligne m'ont grandement faciliter la tâche.",
    },
    {
      img: profilThree,
      alt: "Photo d'identité de client, femme",
      title: "Green NRJ",
      job: "Asha Ramanujan - Project Manager",
      p: "Hi Gralypho! It was great working with you. Our specifications were complicated, but you met the challenge. ",
    },
    {
      img: profilFour,
      alt: "Photo d'identité de client, homme",
      title: "Sepocat",
      job: "Christophe Muun - Styliste",
      p: "Enfin un professionnel ! Merci pour notre application, elle est parfaite! ",
    },
    {
      img: profilSix,
      alt: "Photo d'identité de client, homme",
      title: "Le Marminot",
      job: "Hugo Hervé - Restaurateur",
      p: "Merci pour toutes les idées  novatrices apportées à notre site internet.",
    },
    {
      img: profilOne,
      alt: "Photo d'identité de client, femme",
      title: "Inès Marjot",
      job: "Photographe",
      p: "Plus de clients, moins de temps perdu, plus d'argent.... it's perfect Gralypho!!",
    },
  ];
</script>

<section class="J-section">
  <div class="wrapper-text">
    <h1>Nos <span>clients</span> sont satisfaits.</h1>
    <h2>Collaborations, Missions, Partenariats.</h2>
  </div>
  <div class="gallery">
    <div class="wrapper-contain">
      {#each dataCard as card}
        <TestimonyCards title={card.title} job={card.job} p={card.p} img={card.img} alt={card.alt} />
      {/each}
    </div>
  </div>
</section>

<style>
  .J-section {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: auto;
    height: auto;
    font-size: 16px;
    margin-top: 0px;
    background-color: white;
  }
  .gallery {
    overflow-x: auto;
    grid-column: 1/13;
    grid-row: 2;
    margin-left: 100px;
        margin-bottom: 100px;
  }
  .wrapper-contain {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    border-radius: 20px;
    justify-content: start;
    align-items: center;
    margin-bottom: 30px;
    gap: 20px;
  }
  .wrapper-text {
    grid-column: 1/12;
    grid-row: 1;
    display: flex;
    flex-direction: column;
    align-items: baseline;
    justify-content: center;
    margin-top: -10px;
  }
  .J-section h1 {
    font-family: epilogue;
    font-size: var(--xl);
    font-weight: 800;
    color: var(--primay);
    margin-left: 50px;
    margin-top: 100px;
    letter-spacing: -2px;
  }
  .J-section h1 span {
    font-weight: 900;
    color: transparent;
    -webkit-background-image: linear-gradient(to left, var(--orange), var(--blue));
    background-image: linear-gradient(to left, var(--orange), var(--blue));
    -webkit-background-clip: text;
    background-clip: text;
  }
  .J-section h2 {
    margin-top: 0px;
    font-family: epilogue;
    font-weight: 300;
    font-size: var(--m);
    color: grey;
    margin-left: 0px;
  }
  /* .wrapper-testimony {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-wrap: wrap;
    gap: 40px;
    margin-top: 50px;
  } */

  @media screen and (max-width: 768px) {
    .gallery {
      overflow-x: auto;
      grid-column: 1/13;
      grid-row: 2;
      margin-left: 20px;
    }
    .J-section h1 {
      grid-column: 1/12;
      grid-row: 1;
      font-family: epilogue;
      font-weight: 800;
      color: var(--primay);
      margin-left: 50px;
      margin-top: 100px;
    }
  }
</style>
