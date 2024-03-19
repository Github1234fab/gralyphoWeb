<script>
  import background from "../Assets/png-gralypho/Saly-43.png";
  import background2 from "../Assets/png-gralypho/Saly-44.png";
  import background3 from "../Assets/png-gralypho/09.png";
  import background4 from "../Assets/png-gralypho/21.png";
  import background5 from "../Assets/png-gralypho/30.png";
  import dev from "../Assets/png-gralypho/Saly-15.png";
  import world from "../Assets/png-gralypho/Saly-44.png";
  import mediaTree from "../Assets/png-gralypho/applis.png";

  import circle from "../Assets/png-gralypho/circleOne.svg";
  import circleOne from "../Assets/png-gralypho/brutalism/Frame (15).png";
  import circleTwo from "../Assets/png-gralypho/brutalism/Frame (16).png";
  import circleThree from "../Assets/png-gralypho/circlePrismThree.svg";
  import circleFour from "../Assets/png-gralypho/brutalism/Group.png";
  import billy from "../Assets/png-gralypho/Billy 33.png";
  import billy2 from "../Assets/png-gralypho/Billy 52.png";
  import billy3 from "../Assets/png-gralypho/Billy 53.png";
  import billy4 from "../Assets/png-gralypho/Billy 56.png";
  import { onMount } from "svelte";

  onMount(() => {
    gsap.to(".circleOne", {
      rotate: 1440,
      scrollTrigger: {
        trigger: ".circleOne",
        start: "top 700px",
        end: "300px",
        scrub: 3,
        repeat: 3,
      },
    });
  });
  onMount(() => {
    gsap.to(".circleTwo", {
      rotate: 360,
      scrollTrigger: {
        trigger: ".circleTwo",
        start: "top 700px",
        end: "300px",
        scrub: 1,
        repeat: 3,
      },
    });
  });
  onMount(() => {
    gsap.to(".circleThree", {
      rotate: 360,
      scrollTrigger: {
        trigger: ".circleThree",
        start: "top 700px",
        end: "300px",
        scrub: 1,
        repeat: 3,
      },
    });
  });
  onMount(() => {
    gsap.to(".circleFour", {
      rotate: 360,
      scrollTrigger: {
        trigger: ".circleFour",
        start: "top 700px",
        end: "300px",
        scrub: 1,
        repeat: 3,
      },
    });
  });
</script>

<section class="A-section">
  <div class="wrapper-text">
    <h1>Prêt à démarrer <br /> votre <span>projet ?</span></h1>

    <p>
      Découvrez comment nous pouvons renforcer votre marque, <br /> améliorer votre visibilité, <br /> et générer des résultats
      tangibles.
    </p>
  </div>
  <div class="wrapper-action">
    <div class="card-action">
      <div class="wrapper-img">
      <img src={billy4} alt="" class="billy" />
      </div>
      <h3>Captez</h3>
      <p>
        Boostez votre visibilité en ligne et captez l'attention de vos prospects potentiels. Grâce à des stratégies
        numériques efficaces et une présence web percutante, nous mettons en avant votre entreprise là où se trouvent
        vos clients.
      </p>
    </div>
    <div class="card-action">
       <div class="wrapper-img">
      <img src={billy} alt="" class="billy" />
      </div>
      <h3>Optimisez</h3>
      <p>
        Optimisez votre présence en ligne avec des sites web performants et conviviaux. Nous travaillons sur
        l'optimisation de votre site pour garantir une expérience utilisateur exceptionnelle et assurer que vos futurs
        clients trouvent rapidement et facilement les informations dont ils ont besoin.
      </p>
    </div>
    <div class="card-action">
       <div class="wrapper-img">
      <img src={billy3} alt="" class="billy" />
      </div>
      <h3>Gagnez</h3>
      <p>
        Gagnez en ventes, en visibilité et en influence grâce à une stratégie de marketing digital bien élaborée. Notre
        approche centrée sur le client vous permet de conquérir de nouveaux marchés, fidéliser votre clientèle et
        augmenter vos résultats en ligne. Ensemble, gagnons le succès digital !
      </p>
    </div>
  </div>
  <div class="wrapper-link">
    <a href="#contact" class="cta-button">Commencez votre aventure digitale</a>
  </div>
</section>

<style>
  .A-section {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: auto;
    height: auto;
    font-size: 16px;
    z-index: 1;
    background-color: var(--primary);
  }
  .wrapper-text {
    grid-column: 2/12;
    grid-row: 1;
    display: flex;
    flex-direction: column;
    justify-content: left;
    align-items: left;
    gap: 20px;
  }
  .A-section h1 {
    z-index: 1;
    text-align: left;
    font-family: epilogue;
    font-weight: 900;
    font-size: var(--xl);
    color: white;
    margin-top: 50px;

  }
  .A-section h1 span {
    font-weight: 800;
    color: transparent;
    -webkit-background-image: inear-gradient(to left, var(--orange), var(--blue));
    background-image: linear-gradient(to left, var(--orange), var(--blue));
    -webkit-background-clip: text;
    background-clip: text;
  }

  .A-section p {
    z-index: 1;
    font-family: epilogue;
    font-weight: 200;
    text-align: left;
    font-size: var(--l);
    color: var(--colorC);
    margin-top: 0px;
    text-align: left;

  }
  .wrapper-action {
    grid-column: 2/12;
    grid-row: 2/6;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 40px;
    margin-top: 50px;
  }
  .card-action {
    display: flex;
    flex-direction: column;
    justify-content: left;
    align-items: left;
    width: calc(40% - 5px);
    height: 300px;
    gap: 30px;
  }
  .card-action h3 {
    font-family: epilogue;
    font-weight: 600;
    text-align: left;
    font-size: var(--l);
    color: var(--colorC);
    margin-top: 0px;
    width: 100%;
  }
  .card-action p {
    font-family: epilogue;
    font-weight: 200;
    text-align: justify;
    font-size: var(--m);
    color: var(--colorC);
    margin-top: -20px;
  }
  .wrapper-img {
    display: flex;
    justify-content: left;
    align-items: left;
    width: 100%;
    height: 100px;
  }
  .billy {
 height: 100px;
    width:100px;
    margin-left: -20px;
  }
  .wrapper-link {
    grid-column: span 12;
    margin-left: auto;
    margin-right: auto;
    grid-row: 8;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: auto;
    text-align: center;
    border-radius: 4px;
    gap: 10px;
    margin-top: 80px;
    margin-bottom: 50px;
  }
  .cta-button {
    text-decoration: none;
    color: var(--colorC);
    font-family: kanit;
    font-weight: 400;
    background-color: var(--ca);
    padding: 30px;
  }
  .cta-button:hover {
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
  @media screen and (max-width: 768px) {
    
    .wrapper-action{
      flex-direction: column;
    }
    .card-action{
      width: 100%;
      align-items: left;
      justify-content: left;
    }
  }
</style>
