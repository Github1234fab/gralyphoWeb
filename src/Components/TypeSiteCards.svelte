<script>
  export let title;
  export let icon;
  // export let p;
  // export let lien;
  export let lien;
  export let lien2;
  import { onMount } from "svelte";
  import Cards from "./Cards.svelte";

  onMount(() => {
    const catalog = document.querySelectorAll(".card-type-site");

    catalog.forEach((el) => {
      gsap.to(el, {
        y: 0,
        ease: "power4",
        scrollTrigger: {
          trigger: el,
          start: "top 900px",
          end: "-200px",
          scrub: 5,
        },
      });
    });
  });
</script>

<div class="card-type-site">
  <div class="wrapper-text">
    <div class="wrapper-title-icon">
      <a href={lien2} class="title">{title}</a>
      <a href={lien}><img src={icon} alt="icon de types de sites" class="icon" /></a>
    </div>
    <!-- <p>
      {p}
    </p> -->
    <a href={lien} class="link-decouvrir">Découvrir</a>
  </div>
</div>

<style>
  .card-type-site {
    transform: translateY(200px);
    display: flex;
    flex-direction: column;
    border-radius: 3px;
    color: white;
    justify-content: center;
    align-items: center;
    width: 40%;
    height: fit-content;
    min-height: 200px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.132);
    /* background-color: white; */
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.132);
background-image: radial-gradient(circle at 67% 83%, rgba(245,245,245, 0.1) 0%, rgba(245,245,245, 0.1) 1%,transparent 1%, transparent 5%,transparent 5%, transparent 100%),radial-gradient(circle at 24% 80%, rgba(245,245,245, 0.1) 0%, rgba(245,245,245, 0.1) 27%,transparent 27%, transparent 63%,transparent 63%, transparent 100%),radial-gradient(circle at 23% 5%, rgba(245,245,245, 0.1) 0%, rgba(245,245,245, 0.1) 26%,transparent 26%, transparent 82%,transparent 82%, transparent 100%),radial-gradient(circle at 21% 11%, rgba(245,245,245, 0.1) 0%, rgba(245,245,245, 0.1) 35%,transparent 35%, transparent 45%,transparent 45%, transparent 100%),radial-gradient(circle at 10% 11%, rgba(245,245,245, 0.1) 0%, rgba(245,245,245, 0.1) 21%,transparent 21%, transparent 81%,transparent 81%, transparent 100%),radial-gradient(circle at 19% 61%, rgba(245,245,245, 0.1) 0%, rgba(245,245,245, 0.1) 20%,transparent 20%, transparent 61%,transparent 61%, transparent 100%),radial-gradient(circle at 13% 77%, rgba(245,245,245, 0.1) 0%, rgba(245,245,245, 0.1) 63%,transparent 63%, transparent 72%,transparent 72%, transparent 100%),radial-gradient(circle at 30% 93%, rgba(245,245,245, 0.1) 0%, rgba(245,245,245, 0.1) 33%,transparent 33%, transparent 82%,transparent 82%, transparent 100%),linear-gradient(90deg, rgb(255,69,0),rgb(255,69,0));
  }
  .wrapper-title-icon {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 15px;
  }
  .wrapper-text {
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: left;
    max-height: 500px;
    padding: 20px;
  }
  .title {
    font-family: poppins;
    font-weight: 600;
    font-size: var(--l);
    border-radius: 8px;
    text-decoration: none;
    color: var(--colorC);
    letter-spacing: -1px;
  }
  .title:hover {
    animation: bounce 0.4s ease-in-out;
  }
  /* .wrapper-text p {
    font-size: var(--m);
    color: var(--primary);
    font-weight: 300;
    text-align: left;
    line-height: 30px;
    padding: 0px;
  } */
  .link-decouvrir {
    text-decoration: none;
    color: white;
    background-color: var(--CTA2);
    font-family: Heebo;
    font-weight: 600;
    width: 160px;
    border-radius: 6px;
    text-align: center;
    padding: 20px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 30px;
    margin-bottom: 10px;
    box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.426) inset;
    font-size: var(--m);
  }
  .link-decouvrir:hover {
    animation: bounce 0.4s ease-in-out;
  }
  .icon {
    height: 30px;
    color: blue;
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

  @media screen and (max-width: 1116px) {
    .card-type-site {
      width: calc(45% - 10px);
      min-height: 200px;
      height: fit-content;
    }
  }

  @media screen and (max-width: 768px) {
    .card-type-site {
      width: calc(90% - 20px);
      height: fit-content;
    }
    .link-decouvrir {
      padding: 13px;
      width: auto;
      font-size: 1.4em;
    }
  }
</style>
