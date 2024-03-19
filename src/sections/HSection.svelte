<script>
  import { onMount } from "svelte";
  import Header from "../sections/Header.svelte";
  import { fade } from "svelte/transition";
  // import line from "../Assets/png-gralypho/circle-13.svg";
  // import arrow from "../Assets/png-gralypho/arrow-34.svg";

  let textIndex = 0;
  let textTab = [" de Site Internet", "d'Application Web"];

  onMount(() => {
    setInterval(() => {
      textIndex = (textIndex + 1) % textTab.length;
    }, 1200);
  });
</script>

<Header />
<section class="H-section">
  <div class="wrapper-text">
    <h1>Imaginer <br /> Développer <br />Créer</h1>

    <h3>Conception <span>{textTab[textIndex]}</span></h3>
    <h2>
      Nous créeons des sites Web et des Applications sur mesure pour les professionnels <br>souhaitant obtenir des résultats
      tangibles en terme <span> d'efficacité, de gain de temps</span> <br>et d'augmentation du taux de
      <span> conversion de clients</span>.<br />
    </h2>
    <div class="wrapper-contact">
      <a class="contact" href="/#footer">Nous contacter</a>
      <a class="contact2" href="/#footer">Devis gratuit</a>
    </div>
  </div>
  <!-- <div class="wrapper-visuel">
        <Engrenage />
      </div> -->
</section>

<style>
  .H-section {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: auto;
    height: auto;
    font-size: 16px;
    opacity: 1;
    /* background-color: white; */
    background-color: rgb(20, 47, 66);
  }
  .H-section::before {
    content: "";
    position: absolute;
    top: 100px;
    right: 0;
    bottom: 0;
    left: 400px;
    background-image: url("../Assets/png-gralypho/cerveau.png");
    background-repeat: no-repeat;
    transform: rotate(0deg);
    background-position: top 30% right;
     background-size: 50% ;
    z-index: 0;
    opacity: 0.5;
  }

  .wrapper-text {
    grid-column: 1 / 8;
    grid-row: 1/3;
    display: flex;
    flex-direction: column;
    border-radius: 20px;
    margin-left: 20px;
    z-index: 2;
  }

  .H-section h1 {
    text-align: left;
    font-family: Heebo;
    font-weight: 900;
    /* font-size: var(--xlhero); */
    /* font-size: var(--xl); */
    /* color: white; */
    font-size: clamp(4em, 12.5vw, 10em);
    /* color:  #ffd700; */
    color: #ffcc00;
    text-transform: capitalize;
    letter-spacing: clamp(-5px, 14.5vw, -0.03em);
    margin-top: 50px;
    margin-left: 0px;
    line-height: clamp(60px, 10.5vw, 170px);
  }

  .H-section h3 {
    font-family: poppins;
    font-weight: 500;
    font-size: var(--l);
    letter-spacing: -1px;
    color: var(--greyBg);
    transition: 1s ease-in-out;
    margin-left: 5px;
    margin-top: 20px;
  }
  .H-section h3 span {
    color: var(--rouge);
  }
  .H-section h2 {
    font-family: poppins;
    font-weight: 300;
    font-size: var(--m);
    color: var(--greyBg);
    text-align: left;
    line-height: 30px;
    margin-top: 20px;
    margin-left: 10px;
  }
  .H-section h2 span {
    font-weight: 600;
    color: var(--greyBg);
  }
  .contact {
    text-decoration: none;
    color: var(--primary);
    background-color: var(--CTAHero);
    font-family: kanit;
    font-weight: 400;
    margin-top: 0px;
    margin-left: 0px;
    width: 160px;
    border-radius: 6px;
    text-align: center;
    padding: 10px;
    box-shadow: 0px 0px 10px 2px rgba(76, 76, 76, 0.35);
  }
  .contact2 {
    text-decoration: none;
    color: var(--primary);
    background-color: var(--CTAHero2);
    font-family: kanit;
    font-weight: 400;
    margin-top: 10px;
    margin-left: 10px;
    width: 160px;
    border-radius: 6px;
    text-align: center;
    padding: 10px;
    box-shadow: 0px 0px 10px 2px rgba(76, 76, 76, 0.35);
  }
  .contact:hover {
    animation: bounce 0.4s ease-in-out;
  }
  .contact2:hover {
    animation: bounce 0.4s ease-in-out;
  }
  .wrapper-contact {
    display: flex;
    flex-direction: column;
    gap: 0px;
    margin-top: 20px;
    align-items: baseline;
    justify-content: flex-start;
    margin-bottom: 100px;
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
 



 @media screen and (max-width: 768px){
  .wrapper-text {
    grid-column: 1 / 12;
    grid-row: 1/3;
    display: flex;
    flex-direction: column;
    border-radius: 20px;
    margin-left: 20px;
    z-index: 2;
  }
  .H-section::before {
    content: "";
    position: absolute;
    top: -60px;
    right: 0;
    bottom: 0;
    left:0px;
    background-image: url("../Assets/png-gralypho/cerveau.png");
    background-repeat: no-repeat;
    transform: rotate(0deg);
    background-position: center;
     background-size: 70% ;
    /* background-size: clamp(80%, 15vw, 200%); */
    z-index: 0;
    opacity: 0.2;
  }
}
</style>
