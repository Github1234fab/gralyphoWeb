<script>
  import ListValue from "../Components/ListValue.svelte";
  import { onMount } from "svelte";
  import rocket from "../Assets/png-gralypho/shuttle-space-solid.svg";
  import light from "../Assets/png-gralypho/lightbulb-solid.svg";
  import lock from "../Assets/png-gralypho/lock-solid.svg";
  import heart from "../Assets/png-gralypho/heart-solid.svg";
  import globe from "../Assets/png-gralypho/globe-solid.svg";
  import hand from "../Assets/png-gralypho/handshake-regular.svg";

  onMount(() => {
    gsap.to(".section-value", {
      opacity: 1,
      ease: "expoScale",
      scrollTrigger: {
        trigger: ".section-value",
        start: "top 600px",
        end: "-200px",
        scrub: 1,
      },
    });
  });

  let values = [
    {
      icon: rocket,
      title: "Innovation Guidée par la Stratégie",
      p: "Nous apportons une approche stratégique à chaque aspect de votre présence digitale, de la conception web à la stratégie marketing, en vous aidant à atteindre vos objectifs commerciaux. Nous vous aidons à définir votre stratégie digitale et à la mettre en œuvre pour obtenir des résultats tangibles.",
    },
    {
      icon: light,
      title: "Solutions Personnalisées ",
      p: "Chaque entreprise est unique. Nous développons des solutions digitales sur mesure qui s'adaptent à vos besoins spécifiques, vous permettant de vous démarquer dans un monde en constante évolution. Design, Ux, Ui, contenu textuels (...), rien n'est laissé au hasard pour que vous puissiez réussir sur le Web.",
    },
    {
      icon: globe,
      title:"Expension Digitale",
      p: "Explorez de nouveaux horizons grâce à notre expertise en expansion digitale. Que vous soyez une start-up ambitieuse ou une entreprise établie, nous vous aidons à conquérir des marchés en ligne et à maximiser votre impact.",
    },
    {
      icon: hand,
      title: "Partenariat axé sur la collaboration ",
      p: " Nous croyons en la co-création. En travaillant en étroite collaboration avec votre équipe, nous faisons de votre vision une réalité, offrant une expérience transparente et collaborative à chaque étape du processus.",
    },
    {
      icon: lock,
      title: "Sécurité et Fiabilité ",
      p: "La sécurité de vos données et la fiabilité de vos systèmes sont notre priorité. Nous adoptons les normes les plus strictes pour assurer la protection de votre entreprise dans l'univers digital.",
    },
  ];
</script>

<section class="section-value">
  <h1>Réinventez aujourd'hui pour exceller, demain.</h1>
  <div class="wrapper-list">
    {#each values as value}
      <ListValue icon={value.icon} p={value.p} title={value.title} />
    {/each}
  </div>
</section>

<style>
  .section-value {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: auto;
    height: auto;
    font-size: 16px;
    z-index: 1;
    padding: 30px;
    gap: 0px;
    opacity: 0.2;
    background-image: url(../Assets/png-gralypho/waves4.svg);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }
  .section-value h1 {
    grid-column: 1/12;
    font-family: epilogue;
    font-weight: 900;
     font-size: var(--xl);
    color: var(--primary);
    text-align: left;
    padding: 20px;
  }

  .wrapper-list {
    grid-column: 1/12;
    flex-direction: column;
    width: 100%;
    margin-top: 30px;
    margin-bottom: 50px;
    justify-content: center;
    align-items: center;
  }
  @media screen and (max-width: 768px) {
   
    .wrapper-list {
      display: flex;
      flex-direction: column;
      margin: 20px;
      width: 100%;
      margin-bottom: 50px;
    }
  }
</style>
