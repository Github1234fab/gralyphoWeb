<script>
  export let title;
  export let p;
</script>

<div class="wrapper-social">
  <h2 class="title">{title}</h2>
  <p class="paragraph">{p}</p>
</div>

<style>
  .wrapper-social {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 20px;

  }
  .title {
    font-size: var(--l);
    font-weight: 600;
    color: var(--primary);
    margin-top: 10px;
    margin-bottom: 10px;
    font-family: epilogue;
  }
  .paragraph {
    font-size: var(--m);
    font-weight: 300;
    color: var(--bg);
    margin-top: 20px;
    margin-bottom: 10px;
    font-family: epilogue;
    margin-bottom: 50px;
    width: 100%;
  }


</style>
