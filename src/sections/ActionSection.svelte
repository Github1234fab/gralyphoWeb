<script>
  import billy from "../Assets/png-gralypho/BillyMagnet.png";
  import billy2 from "../Assets/png-gralypho/BillySpace.png";
  import billy3 from "../Assets/png-gralypho/BillyWinner.png";
  import billy4 from "../Assets/png-gralypho/BillyXcel.png";
  import { onMount } from "svelte";

  onMount(() => {
    gsap.to(".action-section", {
      opacity: 1,
      ease: "expoScale",
      scrollTrigger: {
        trigger: ".action-section",
        start: "top 900px",
        end: "100px",
        scrub: 3,
      },
    });
  });
</script>

<div class="action-section">
  <div class="wrapper-text">
    <h1>Prêt à démarrer <br /> votre <span>projet ?</span></h1>
    <h2>
      Découvrez comment nous pouvons renforcer votre <span>marque</span>, développer votre <span>visibilité,</span>  <br /> et générer des  <span> résultats
      tangibles.</span>
    </h2>
  </div>
  <div class="wrapper-action">
    <div class="card-action">
      <div class="wrapper-img">
        <img src={billy} alt="illustration cartoon personnage business" class="billy" />
      </div>
      <div class="wrapper-text-cards">
        <h3>Captez</h3>
        <p>
          Boostez votre visibilité en ligne et captez l'attention de vos prospects potentiels. Grâce à des stratégies
          numériques efficaces et une présence web percutante, nous mettons en avant votre entreprise là où se trouvent
          vos clients.
        </p>
      </div>
    </div>
    <div class="card-action">
      <div class="wrapper-img">
        <img src={billy4} alt="illustration cartoon personnage business" class="billy" />
      </div>
      <div class="wrapper-text-cards">
        <h3>Optimisez</h3>
        <p>
          Optimisez votre présence en ligne avec des sites web performants et conviviaux. Nous travaillons sur
          l'optimisation de votre site pour garantir une expérience utilisateur exceptionnelle et assurer que vos futurs
          clients trouvent rapidement et facilement les informations dont ils ont besoin.
        </p>
      </div>
    </div>
    <div class="card-action">
      <div class="wrapper-img">
        <img src={billy3} alt="illustration cartoon personnage business" class="billy" />
      </div>
      <div class="wrapper-text-cards">
        <h3>Gagnez</h3>
        <p>
          Gagnez en ventes, en visibilité et en influence grâce à une stratégie de marketing digital bien élaborée.
          Notre approche centrée sur le client vous permet de conquérir de nouveaux marchés, fidéliser votre clientèle
          et augmenter vos résultats en ligne. Ensemble, gagnons le succès digital !
        </p>
      </div>
    </div>
  </div>

  <div class="wrapper-contactez">
    <a href="mailto:gralypho@gmail.com " class="contactez"><i class="fa-regular fa-envelope"></i></a>
    <a href="tel:0672901614" class="contactez"><i class="fa-solid fa-phone-volume"></i></a>
    <a href="tel:0672901614" class="contactez"><i class="fa-solid fa-mug-hot"></i></a>
  </div>
</div>

<style>
  .action-section {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: auto;
    height: auto;
    opacity: 0.2;
  }
  .wrapper-text {
    grid-column: 2/12;
    grid-row: 1;
    display: flex;
    width: 100%;
    flex-direction: column;
    gap: 20px;
    margin-top: 50px;
    margin-left: 20px;
  }
  .wrapper-text h1 {
    font-size: var(--xl);
    font-weight: 700;
    color: white;
    font-family: Epilogue;
    margin-left: 20px;
    letter-spacing: -1px;
    line-height: 53px;
  }
  .wrapper-text h1 span {
    color: transparent;
    -webkit-background-image: linear-gradient(to left, var(--orange), var(--blue));
    background-image: linear-gradient(to left, var(--orange), var(--blue));
    -webkit-background-clip: text;
    background-clip: text;
  }
  .wrapper-text h2 {
    font-size: var(--m);
    font-weight: 300;
    color: white;
    font-family: epilogue;
    margin-left: 20px;
    line-height: 30px;
  }
    .wrapper-text h2 span {
    font-weight: 800;
  }
  .wrapper-action {
    grid-column: 2/12;
    grid-row: 2/3;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    margin-top: 50px;
  }
  .card-action {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    padding: 30px;
    color: white;
    background-color: var(--ca);
    height: 100%;
  }
  .wrapper-text-cards {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    width: 100%;
    height: 350px;
    margin-top: 10px;
  }
  .card-action h3 {
    font-size: var(--xl);
    font-weight: 800;
    color: var(--colorC);
    font-family: epilogue;
  }
  .card-action p {
    font-size: var(--m);
    font-weight: 300;
    color: var(--colorC);
    font-family: epilogue;
    text-align: center;
  }
  .wrapper-img {
    /* padding: 20px; */
    width: 200px;
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;

    /* clip-path: polygon(51% 12%, 64% 0, 100% 36%, 81% 91%, 6% 99%, 14% 71%, 10% 2%); */
  }
  .billy {
    width: 70%;
    height: 70%;
    background-color: rgb(213, 249, 10);
    padding: 20px;
    border-radius: 50%;
    box-shadow: inset 3px 4px 15px var(--primary);
  }
  .wrapper-contactez {
    grid-column: span 12;
    margin-left: 350px;
    margin-right: 350px;
    grid-row: 4;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 40px;
    margin-top: 70px;
  }
  .contactez {
    text-decoration: none;
    color: var(--colorC);
    font-size: var(--l);
    font-family: epilogue;
    transform: rotate(0deg);
    transition: 0.2s ease-in-out;
    border-radius: 8px;
    margin-bottom: 40px;
    border: 1px solid grey;
    padding: 10px;
  }
  .contactez:hover {
    animation: bounce 0.4s ease-in-out;
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

  /* @media screen and (max-width: 1000px) {
    .wrapper-action {
      grid-column: 2/12;
      grid-row: 2/3;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 20px;
      margin-top: 50px;
      margin-left: 10px;
    }
    .card-action {
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .wrapper-text {
      margin-left: 0px;
    }
    .wrapper-text-cards {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 20px;
      width: 100%;
      height: 350px;
      margin-top: 10px;
    }
    .wrapper-contactez {
      margin-left: 0px;
      margin-right: 0px;
      margin-top: 50px;
      margin-bottom: 20px;
    }
  } */
</style>
