

<script>
  import '../routes/styles.css'; 
  import { spring } from 'svelte/motion';
  import { onMount } from 'svelte';

  let mouseCoords;

  const onMouseMove = (event) => {
    if (mouseCoords) {
      mouseCoords.set({ x: event.clientX, y: event.clientY });
    }
  };

  onMount(() => {
    mouseCoords = spring({ x: window.innerWidth / 2, y: window.innerHeight / 2 });

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('resize', () => {
      if (mouseCoords) {
        mouseCoords.set({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
      }
    });

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
    };
  });
</script>

<svelte:window on:mousemove={onMouseMove} />

<div class="container">
  <div class="cursor" style:--x={`${$mouseCoords?.x || 0}px`} style:--y={`${$mouseCoords?.y || 0}px`} />
</div>

<style>
  :global(body) {
    width: 100vw;
    height: 100vh;
  }

  :global(*),
  :global(body) {
    padding: 0;
    margin: 0;
  }

  .container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 99999;
    pointer-events: none;
  }

  .cursor {
    z-index: 100000;
    cursor: none;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(83, 100, 194, 0.275);
    border: solid 1px white;
    /* backdrop-filter: brightness(1.2); */
    width: 25px;
    height: 25px;
    border-radius: 50%;
    /* box-shadow: 0px 0px 15px 2px rgba(76, 76, 76, 0.5); */
    transform: translate(-50%, -50%) translate(var(--x, 0px), var(--y, 0px));
  }
    /* .cursor {
    z-index: 100000;
    cursor: none;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(255, 255, 255, 0.151);
    border: solid 1px white;
    backdrop-filter: brightness(1.2);
    width: 55px;
    height: 55px;
    border-radius: 50%;
    box-shadow: 0px 0px 15px 2px rgba(76, 76, 76, 0.5);
    transform: translate(-50%, -50%) translate(var(--x, 0px), var(--y, 0px));
  } */


  @media only screen and (max-width: 1024px) {
    .cursor {
      display: block;
    }
  }

  @media only screen and (max-width: 768px) {
    .cursor {
      display: none;
    }
  }
</style>
