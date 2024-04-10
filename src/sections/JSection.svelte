<script>
  import { onMount } from "svelte";
  import TestimonyCards from "../Components/TestimonyCards.svelte";
  import profilOne from "../Assets/Profils-gralypho/Frame (2).png";
  import profilTwo from "../Assets/Profils-gralypho/Frame (5).png";
  import profilThree from "../Assets/Profils-gralypho/Frame (12).png";
  import profilFour from "../Assets/Profils-gralypho/Ellipse 125.png";
  import profilFive from "../Assets/Profils-gralypho/Ellipse 131.png";
  import profilSix from "../Assets/Profils-gralypho/Ellipse 220.png";


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
  <div class="wrapper-text-testi">
    <h1>Nos témoignages</h1>
    <h2>Nos clients racontent</h2>
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
    background-color: var(--colorC);

  }
  .gallery {
    overflow-x: auto;
    grid-column: 1/13;
    grid-row: 2;
    margin-left: 100px;
        margin-bottom: 100px;
        margin-top: 30px;
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
  .wrapper-text-testi{
    grid-column: 1/13;
    grid-row: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: -30px;
  }

  .wrapper-text-testi h1{
   		font-family: Heebo;
		text-transform: uppercase;
		font-size: var(--m);
		font-weight: 600;
		letter-spacing: -0.04em;
		margin-top: 100px;
		/* margin-left: 50px; */
    margin-bottom: 20px;
    text-align: center;
    color:  var(--bleuAcier);
  }
  .wrapper-text-testi h2{
  font-family: epilogue;
		font-size: var(--xl);
		color: var(--primary);
		font-weight: 600;
		margin-bottom: 0px;
		letter-spacing: -0.04em;
		/* margin-left: 10px; */
        text-align: center;
  }
 

  @media screen and (max-width: 768px) {
    .gallery {
      overflow-x: auto;
      grid-column: 1/13;
      grid-row: 2;
      margin-left: 20px;
    }
  }
</style>
