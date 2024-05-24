<script>
  import "./styles.css";
  import Footer from "../sections/Footer.svelte";
  import Particules from "../Components/Particules.svelte";
</script>

<main>
  <Particules />
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
