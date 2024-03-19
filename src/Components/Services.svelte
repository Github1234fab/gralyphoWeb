<script>
  export let text;
  export let img;
  export let description;
</script>

<div class="card-services">
  <div class="wrapper-text">
    <div class="text-services">{text}</div>
    <p class="description-services">{description}</p>
  </div>
<img class="img-services"src={img} alt="">
</div>

<style>
  .card-services {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    min-width: 300px;
    max-height: 600px;
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

  @media screen and (max-width: 768px) {
    .card-services {
      width: 220px;
      min-height: 350px;
    }
  }
</style>
