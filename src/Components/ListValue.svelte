<script>
  // export let icon;
  export let p;
  export let title;
  import { onMount } from "svelte";

  onMount(() => {
    gsap.to(".icon", {
      x: 0,
      rotate: 360,
      ease: "expoScale",
      scrollTrigger: {
        trigger: ".icon",
        start: "top 380px",
        end: "-200px",
        scrub: 3,
      },
    });
  });
</script>

<div class="wrapper-list">
  <h4 class="title">{title}</h4>
  <p class="para">{p}</p>
</div>

<style>
  .wrapper-list {
    display: flex;
    flex-direction:column;
    margin: 20px;
    font-family: epilogue;
    color: var(--bg);
    text-align: left;
  }
 
  @keyframes anim {
    from {
        stroke-dashoffset: 2000px;
    }
    to {
        stroke-dashoffset: 0px;
    }
}
  .para {
    font-size: var(--l);
    font-family: epilogue;
    color: var(--bg);
    font-weight: 300;
    list-style: none;
    padding: 10px;
    text-align: left;
  }
  .title {
    font-weight: 800;
        text-align: left;
  }
  @media screen and (max-width: 768px) {
    .wrapper-list {
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin: 0px;
      text-align: left;
    }

  }
</style>
