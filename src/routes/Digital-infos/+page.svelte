<script>
import Header from '../../sections/Header.svelte';
import digital from '../../Assets/png-gralypho/23.png';
  import Mouse from "../../Components/Mouse.svelte";
  import Button from "../../Components/ButtonCTA.svelte";


</script>
<Mouse/>
<Header/>

<section class="digital-infos">
        <div class="container">
      <img src={digital} alt="">
	<div class="wrapper-digital-infos">
	
                <h3>Un site Web, mais pour quoi faire?</h3>
                	<h1>Profitez de votre outil Digital, en découvrant tout ce qu'il peut vous apporter !</h1>
                <p>Un site internet c'est en fait un outil très puissant. Un outil que nous allons paramétrer, que nous allons élaborer pour qu'il puisse faire ce que vous souhaitez: <br> Convertir de nouveaux clients, vendre des produits, proposez un service, analyser des marchés, des tendances, gérer vos stocks, vos clients, etc..  <br><br>Votre site internet ou votre application sera en ligne 24/7. Autrement dit, ce sera une hyper présence dont il faut absolument profiter. C'est du temps économisé . Du temps pendant lequel votre site travaille pour vous, vend pour vous, attire de nouveaux clients pour vous, prend des rendez-vous pour vous, présente vos produits pour vous, vos services., etc. <br><br>
                Déterminer ce que fera votre outil digital est primordial, essentiel. Tout dépend de la stratégie que nous définirons ensemble, pour que votre outil vous permette d'atteindre <span>votre objectif.</span>  </p>
	</div>
        <div class="wrapper-button">
        <Button/>
        </div>
        </div>
</section>

<style>

.digital-infos {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 0px;
        height: auto; 
}
.container{
        display: flex;
          justify-content: center;
        align-items: center;
        flex-direction: column;
  
}
.container >* {
        flex-basis: 50%;
}
.digital-infos img {
        width: 70%;
        height: auto;
}
.wrapper-digital-infos {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 20px;
        padding: 20px;
        color: var(--textHero);
        margin-top: 30px;
        height: auto;
        width: 90%;
}
.wrapper-digital-infos h1 {
        font-size: 1.8em;
        font-weight: 700;
        text-align: center;
        font-family: var(--Radio);
        letter-spacing: -0.5px;

}
.wrapper-digital-infos h3 {
        font-family: var(--Radio);
        font-size: var(--l);
        font-weight: 700;
        text-align: center;
        color: var(--green);
                margin-top: 15px;

}
.wrapper-digital-infos p {
        font-family: var(--Radio);
        font-size: var(--m);
        font-weight: 400;
        text-align: center;
        padding: 20px;
        line-height: 30px;
}
.wrapper-digital-infos p span {
        font-weight: 700;
}
.wrapper-button {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 30px;
        margin-bottom: 50px;
}

@media screen and (max-width: 768px) {
        .wrapper-digital-infos {
                width: 100%;
        }
}
.digital-infos img {
        width: 100%;
}
</style>
