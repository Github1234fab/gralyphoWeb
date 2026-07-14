<script>
  import "./styles.css";
  import Footer from "../sections/Footer.svelte";
  import { afterNavigate } from '$app/navigation';
  import { tick } from 'svelte';

  afterNavigate(async () => {
    await tick();
    // Utilisation d'un court délai pour contrer les effets de transition et ScrollTrigger
    setTimeout(() => {
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    }, 50);
  });
</script>

<main>

  <slot />
  <div id="footer">
    <Footer />
  </div>
</main>

<style>
  main {
    background-color: white;
    overflow: hidden;
    height: auto;
    scroll-behavior: smooth;
  }

</style>
