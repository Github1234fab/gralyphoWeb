<script>
  export let text;
  export let img;
  export let description;
  export let lien;
</script>

<div class="card-services">
  <div class="wrapper-text">
    <div class="text-services">{text}</div>
    <p class="description-services">{description}</p>
  </div>
<img class="img-services"src={img} alt="">
<a href={lien}><button class="button-service">En savoir +</button></a>
</div>

<style>
  .card-services {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    max-width: 600px;
    min-height: 700px;
    /* box-shadow: 0px 0px 10px 2px rgba(76, 76, 76, 0.35); */
    background-color: white;
    overflow: hidden;
    padding: 20px;
  }
  .wrapper-text {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 20px;
  }
  .text-services {
    font-family: epilogue;
    font-weight: 700;
    color: var(--primary);
    font-size: var(--l);
    text-align: left;
    letter-spacing: -0.050em;
  }
  .description-services{
    font-family: poppins;
    font-weight: 400;
    color: grey;
    font-size: var(--m);
    text-align: left;
    letter-spacing: -0.00em;
    margin-top: 20px;
  }
  .img-services {
width: auto;
height: 200px;
  }
  .button-service{
   min-width: 150px;
    height: 50px;
    background-color: var(--CTA2);
    border: none;
    color: white;
    font-family: epilogue;
    font-weight: 700;
    font-size: var(--m);
    cursor: pointer;
    box-shadow: 0px 0px 10px  rgba(76, 76, 76, 0.35);
  
  }
  .button-service:hover{
    animation: bounce 0.4s ease-in-out;
  }
  @keyframes bounce {
    0% {
      transform: scale(1) translateY(-2px);
    }
    25% {
      transform: scale(1.1) translateY(-2px);
    }
    50% {
      transform: scale(1) translateY(-2px);
    }
    75% {
      transform: scale(1.1) translateY(-2px);
    }
    100% {
      transform: scale(1) translateY(-2px);
    }
  }

  @media screen and (max-width: 1633px) {
    .card-services {
      max-width: 500px;
      max-height: 500px;
    }
  }
</style>
