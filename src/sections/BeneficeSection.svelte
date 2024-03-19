<script>
  import { onMount } from "svelte";
</script>

<section class="section-benefices">
  <div class="container-benefices">
    <!-- +++++++++++++ -->
    <div class="wrapper-blocks">
      <h1>
        <span class="title-yellow">Automatisez</span> <br />
        votre outil digital. <i class="fa-solid fa-hourglass icon-difference"></i>
      </h1>
      <p>
        Votre site E-commerce ou votre Application travaille pour vous 24h/24 et 7j/7. Une hyper-présence sur le net qui
        vous permet d'économisez du temps pour vous consacrer à d'autres tâches.
      </p>
    </div>
    <!-- +++++++++++++ -->
    <div class="wrapper-blocks">
      <h1>
        <span class="title-yellow">Économisez</span> <br />
        Du temps et de l'argent. <i class="fa-solid fa-chart-line icon-difference"></i>
      </h1>

      <p>
        Améliorez votre productivité grâce au potentiel de votre outil digital. Votre application ou votre site inetrnet
        peut accomplir de mutilples tâches automatisées et ainsi augmenter considérablement votre productivité.
      </p>
    </div>

    <!-- +++++++++++++ -->
    <div class="wrapper-blocks">
      <h1>
        <span class="title-yellow">Augmentez</span><br />
        Votre potentiel client. <i class="fa-solid fa-sack-dollar icon-difference"></i>
      </h1>
      <p>
        Augmentez vos revenus grâce à une visibilité acquise grâce à notre expertise SEO. + de visibilité + de prospects
        + plus de clients = plus d'argent!
      </p>
    </div>
  </div>
</section>

<style>
  .section-benefices {
    display: flex;
    height: auto;
    gap: 0px;
    background-color:  white;
    align-items: center;
    justify-content: center;
    /* background: radial-gradient(ellipse at center, rgb(4, 20, 73) 10%, var(--primary)); */
  }
  .container-benefices {
    margin-top: 100px;
    display: flex;
    flex-direction: row;
    height: fit-content;
    align-items: center;
    justify-content: auto;
    margin-left: 50px;
    margin-right: 50px;
    gap: 20px;
  }
  .wrapper-blocks {
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: left;
    width: 100%;
    min-height: 340px;
    box-shadow: 0px 0px 10px rgb(127, 124, 124);
    padding: 20px;
    margin-bottom: 100px;
    background-color: rgb(70, 51, 106);
  }
  .title-yellow {
    color: white;
    font-size: clamp(1.5em, 2.5vw, 2.5em);
    font-weight: 900;
    font-family: Heebo;
    letter-spacing: -1px;
    text-transform: uppercase;
  }
  .section-benefices h1 {
    font-size: var(--l);
    font-weight: 600;
    color: rgb(223, 222, 222);
    font-family: poppins;
  }
  .section-benefices p {
    font-size: var(--m);
    font-weight: 400;
    color: rgb(210, 210, 210);
    font-family: poppins;
    text-align: left;
    padding: 20px;
    margin-top: 20px;
    border-radius: 20px;
  }

  .icon-difference {
    font-weight: 600;
    margin-top: 10px;
    margin-left: 10px;
    color: transparent;
    font-size: 1.3em;
    -webkit-background-image: linear-gradient(to left, var(--orange) 40%, var(--blue));
    background-image: linear-gradient(to left, var(--orange) 40%, var(--blue));
    -webkit-background-clip: text;
    background-clip: text;
  }

  @media screen and (max-width: 1205px) {
    .container-benefices {
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin-left: 0px;
      margin-right: 0px;
      gap: 0px;
    }
    .wrapper-blocks {
      width: 70%;
      min-height: 200px;
      margin-left: 0px;
      margin-right: 0px;
    }
  }
</style>
