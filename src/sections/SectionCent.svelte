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
  <h1 class="title">L'agence Digitale Gralypho, l'exigence, par défaut.</h1>
  <div class="wrapper-cards">
    <div class="cards-experience">
      <div class="icon linear-gradient">100%</div>
      <div class="wrapper-text">
        <h1>Référencement optimisé</h1>
        <h2>
          Grâce à notre expertise en SEO et SEA, optimisez votre stratégie pour accéder à un référencement en première
          page des moteurs de recherche Google, Safari, Firefox, Opéra, Qwant, DuckDuckGo, Ecosia, Lilo,
          Ekoru, ...
        </h2>
        <!-- <a class="button" href="/#sectionE">Découvrir</a> -->
      </div>
    </div>
    <div class="cards-experience">
      <div class="icon linear-gradient">100%</div>
      <div class="wrapper-text">
        <h1>Design sur mesure</h1>
        <h2>
          Faire la différence grâce une identité visuelle qui vous raconte est essentiel sur le Web. Dans notre jargon,
          nous appelons cela l'UX et l'UI. Une bonne Ux, une bonne UI c'est la garantie d'obtenir un outil digital qui
          statisfera à 100% vos utilisateurs.
        </h2>
      </div>
    </div>
    <div class="cards-experience">
      <div class="icon linear-gradient">100%</div>
      <div class="wrapper-text">
        <h1>Sites Évolutifs</h1>
        <h2>
          Nos solutions digitales sont évolutives. Elles vous permettent de faire évoluer votre site internet et votre
          application, au fur et à mesure de l'évolution de votre business, et il faut y penser ! 
        </h2>
      </div>
    </div>
  </div>
</section>

<style>
  .B-section {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: auto;
    height: auto;
    margin-top: 30px;
    margin-bottom: 50px;
    font-size: 16px;
    background-color: var(--colorC);
    background-image: url(../Assets/png-gralypho/waves4.svg);
    background-position: center;
    background-size: 100%;
    background-repeat: no-repeat;
    opacity: 0.2;
  }
  .wrapper-text {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 20px;
    width: 100%;
    height: 100%;
    margin-left: 340px;
  }
  .wrapper-text h1 {
    word-wrap: break-word;
    z-index: 1;
    font-family: kanit;
    font-weight: 700;
    font-size: var(--xl);
    color:  var(--primary);
  }
  .wrapper-text h2 {
    z-index: 1;
    font-family: epilogue;
    font-weight: 300;
    line-height: 30px;
    word-wrap: break-word;
    text-align: left;
    font-size: 1em;
    color: var(--bg);
  }
  .title {
    grid-column: 2/12;
    grid-row: 1;
    font-size: 2.8em;
    font-weight: 900;
    text-align: left;
    color: var(--primary);
    margin-top: 50px;
    /* margin-left: 30px; */
  }
  .wrapper-cards {
    grid-column: 1/12;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 35px;
    height: auto;
    margin-top: 50px;
    margin-bottom: 100px;
  }
  .cards-experience {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    position: relative;
    width: 100%;
    border-radius: 3px;
    margin-top: 20px;
    z-index: 0;
    /* box-shadow: 3px 3px 15px rgb(1, 6, 27); */
    /* background: linear-gradient(to top, var(--bg), var(--gradient)); */
  }
  .icon {
    position: absolute;
    left: 160px;
    top: 5px;
    height: 130px;
    width: 130px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 34px;
    color: transparent;
    font-size: 1.7em;
    font-weight: 900;
    -webkit-background-image: inear-gradient(to left, var(--colorD), var(--colorI));
    background-image: linear-gradient(to left, var(--colorD), var(--colorI));
    -webkit-background-clip: text;
    background-clip: text;
    border: solid 2px linear-gradient(to left, var(--colorD), var(--colorI));
  }
  .linear-gradient {
    border-style: solid;
    border-width: 10px;
    border-image: linear-gradient(45deg, rgb(143, 55, 0), rgb(66, 228, 250)) 1;
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
