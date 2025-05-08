<script>
    export let data;
    import Header from "../../sections/Header.svelte";
  </script>
  <Header/>

  <svelte:head>
  <title>Blog | Gralypho</title>
  <meta name="description" content="Retrouvez tous les articles de notre blog : conseils, actualités et analyses." />
  <meta property="og:title" content="Blog | Gralypho" />
  <meta property="og:description" content="Retrouvez tous les articles de notre blog : conseils, actualités et analyses." />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://gralypho/blog" />
</svelte:head>


  <main>
  <h1>Blog</h1>
  
  <ul>
    {#each data.posts as post}
      <li>
        <a href={`/blog/${post.slug}`}>
          <h2>{post.title}</h2>
          <p>{post.date}</p>
        </a>
      </li>
    {/each}
  </ul>
</main>

<style>
main{
    font-family: var(--Red);
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    background-color: #f9f9f9;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    height: 100vh;
}
main h1{
    font-size: 1.5rem;
    margin-bottom: 10px;
}
main h2{
    font-size: 1.2rem;
    margin-bottom: 5px;
}

ul{
    list-style-type: none;
    padding: 20px;
}
li{
    margin-bottom: 20px;
    padding: 10px;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

</style>