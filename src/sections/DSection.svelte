<script>
  import Check from "../Assets/png-gralypho/Saly-26.png";
  import CardsSectionB from "../Components/CardsSectionB.svelte";
  import { onMount } from "svelte";

  import circle from "../Assets/png-gralypho/circle.svg";

  onMount(() => {
    gsap.to(".gsap1", {
      scale: 1,
      ease: "expoScale",
      scrollTrigger: {
        trigger: ".gsap1",
        start: "top 670px",
        end: "-200px",
        scrub: 1,
      },
    });
    gsap.to(".D-section", {
      opacity: 1,
      ease: "D-section",
      scrollTrigger: {
        trigger: ".D-section",
        start: "top 700px",
        end: "-200px",
        scrub: 1,
      },
    });
  });

  let infosCards = [
    {
      key: 1,
      title: "Innovation Guidée par la Stratégie",
      p: "Nous apportons une approche stratégique à chaque aspect de votre présence digitale, de la conception web à la stratégie marketing, en vous aidant à atteindre vos objectifs commerciaux. Nous vous aidons à définir votre stratégie digitale et à la mettre en œuvre pour obtenir des résultats tangibles.",
      number: "1  ",
    },
    {
      key: 2,
      title: "Solutions Personnalisées ",
      p: "Chaque entreprise est unique. Nous développons des solutions digitales sur mesure qui s'adaptent à vos besoins spécifiques, vous permettant de vous démarquer dans un monde en constante évolution. Design, Ux, Ui, contenu textuels (...), rien n'est laissé au hasard pour que vous puissiez réussir sur le Web.",
      icon: "bi bi-feather",
      number: "2",
    },
    {
      key: 3,
      title: "Expension Digitale",
      p: "Explorez de nouveaux horizons grâce à notre expertise en expansion digitale. Que vous soyez une start-up ambitieuse ou une entreprise établie, nous vous aidons à conquérir des marchés en ligne et à maximiser votre impact.",
      icon: "bi bi-nut-fill",
      number: "3",
    },
    {
      key: 4,
      title: "Partenariat axé sur la collaboration ",
      p: " Nous croyons en la co-création. En travaillant en étroite collaboration avec votre équipe, nous faisons de votre vision une réalité, offrant une expérience transparente et collaborative à chaque étape du processus.",
      icon: "bi bi-hand-thumbs-up",
      number: "4",
    },
    {
      key: 5,
      title: "Sécurité et Fiabilité ",
      p: "La sécurité de vos données et la fiabilité de vos systèmes sont notre priorité. Nous adoptons les normes les plus strictes pour assurer la protection de votre entreprise dans l'univers digital.",
      icon: "bi bi-hand-thumbs-up",
      number: "4",
    },
  ];
</script>

<section class="D-section">
  <div class="wrapper-text">
    <h1>Réinventez <span>Aujourd'hui, </span> <br />Exceller <span>Demain.</span></h1>
    <h2>
      Obtenez le meilleur de votre présence digitale avec <strong> une agence Web </strong>qui vous accompagne dans
      votre croissance.
    </h2>
        </div>
    <div class="wrapper-accordeon">
      {#each infosCards as card}
        <CardsSectionB title={card.title} p={card.p} number={card.number} />
      {/each}

  </div>
</section>

<style>
  .D-section {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: auto;
    height: auto;
    font-size: 16px;
    background-color: white;
    /* background-image: url(../Assets/png-gralypho/waves4.svg ); */
    opacity: 0.2;
  }
  .wrapper-text {
    grid-column: 2/12;
    grid-row: 2;
    display: flex;
    flex-direction: column;
  }
  .D-section h1 {
    grid-column: 2/12;
    text-align: left;
    grid-row: 2;
    font-family: epilogue;
    font-size: var(--xl);
    font-weight: 700;
    color: var(--primary);
    margin-top: 50px;
    padding: 10px;
    line-height: 60px;
    margin-left: 10px;
        letter-spacing: -1px;
  }
  .D-section h1 span {
    font-weight: 900;
    color: transparent;
    -webkit-background-image: linear-gradient(to left, var(--ORANGE), var(--blue));
    background-image: linear-gradient(to left, var(--orange), var(--blue));
    -webkit-background-clip: text;
    background-clip: text;
  }

  .D-section h2 {
    grid-column: 2/12;
    grid-row: 3;
    margin-top: 10px;
    font-family: epilogue;
    font-weight: 400;
    font-size: var(--m);
    color: black;
    text-align: left;
    padding: 10px;
    line-height: 30px;
    margin-left: 10px;
  }
  .wrapper-accordeon {
    grid-column: 1/12;
    grid-row: 4;
    margin-top: 50px;
    margin-bottom: 50px;
    font-size: 1em;
  }
    @media only screen and (min-width: 300px) and (max-width: 576px) {
    .D-section h1{
      line-height: 35px;
    }
  }
</style>
