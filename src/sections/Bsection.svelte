<script>
  import { onMount } from "svelte";

  onMount(() => {
    gsap.to(".B-section", {
      opacity: 1,
      ease: "expoScale",
      scrollTrigger: {
        trigger: ".B-section",
        start: "top 480px",
        end: "-200px",
        scrub: 1,
      },
    });
  });
</script>

<section class="B-section">
  <h1>L'agence Digitale Gralypho, l'exigence comme défaut.</h1>
  <div class="wrapper-cards">
    <div class="cards-experience">
      <div class="icon linear-gradient">100%</div>
      <h1>Référencement optimisé</h1>
      <h2>
        Grâce à notre expertise en SEO et SEA, optimisez votre stratégie pour un référencement sur la première page des
        moteurs de recherche
      </h2>
      <a class="button" href="/#sectionE">Découvrir</a>
    </div>
    <div class="cards-experience">
      <div class="icon linear-gradient">100%</div>
      <h1>Design sur mesure</h1>
      <h2>Démarquez vous de vos concurents. Faîtes la différence grâce une identité visuelle qui vous raconte.</h2>
      <a class="button" href="/#sectionE">Découvrir</a>
    </div>
    <div class="cards-experience">
      <div class="icon linear-gradient">100%</div>
      <h1>Sites Évolutifs</h1>
      <h2>
        Optez pour des solutions qui vous permettrons de faire évoluer votre site internet et votre application, au fur
        et à mseure de l'évolution de votre business.
      </h2>
      <a class="button" href="/#sectionE">Découvrir</a>
    </div>
  </div>
</section>

<style>
  .B-section {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: auto;
    height: auto;
    font-size: 16px;
    background-color: var(--colorC);
    opacity: 0.2;
  }
    .B-section h1 {
    grid-column: 2/12;
    grid-row: 1;
    font-size: 2.4em;
    font-weight: 800;
    text-align: left;
    color: var(--colorC);
    margin-top: 50px;
  }
  .wrapper-cards {
    grid-column: 2/12;
    display: flex;
    justify-content: center;
    gap: 25px;
    height: auto;
    margin-top: 50px;
  }
  .cards-experience {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    position: relative;
    background-color: var(--colorO);
    height: auto;
    width: 100%;
    border-radius: 3px;
    margin-top: 20px;
    z-index: 0;
    box-shadow: 3px 3px 15px rgb(1, 6, 27);
    background: linear-gradient(to top, var(--bg), var(--gradient));
  }
  .icon {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    height: 50px;
    width: 50px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 34px;
    color: transparent;
    -webkit-background-image: inear-gradient(to left, var(--colorD), var(--colorI));
    background-image: linear-gradient(to left, var(--colorD), var(--colorI));
    -webkit-background-clip: text;
    background-clip: text;
    font-weight: 600;
    margin-top: 40px;
    border: solid 2px linear-gradient(to left, var(--colorD), var(--colorI));
  }
  .linear-gradient {
    border-style: solid;
    border-width: 5px;
    border-image: linear-gradient(45deg, rgb(143, 55, 0), rgb(66, 228, 250)) 1;
  }

  .cards-experience h1 {
    word-wrap: break-word;
    z-index: 1;
    font-family: kanit;
    font-weight: 500;
    font-size: 1.3em;
    color: white;
    padding: 3px;
    margin-top: 160px;
  }
  .cards-experience h2 {
    margin-top: 0px;
    z-index: 1;
    position: relative;
    font-family: epilogue;
    font-weight: 300;
    line-height: 30px;
    word-wrap: break-word;
    text-align: left;
    font-size: 1em;
    color: var(--colorC);
    padding: 30px;
  }
  .button {
    padding: 13px;
    border-radius: 8px;
    width: auto;
    height: auto;
    color: white;
    text-decoration: none;
    margin-bottom: 50px;
    margin-top: 20px;
    font-weight: 400;
    font-family: kanit;
    font-size: 1em;
    transition: 0.4s ease-in-out;
    background: linear-gradient(to left, var(--colorJ), var(--colorI));
  }
  .button:hover {
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
    .wrapper-cards {
      display: flex;
      flex-direction: column;
    }
    .cards-experience h2 {
      font-size: 0.9em;
    }
  }
</style>
