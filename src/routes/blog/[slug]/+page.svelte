<script>
	export let data;
	const { article } = data;
    import Header from "../../../sections/Header.svelte";
</script>

<svelte:head>
	<title>{article.title}</title>
	<meta name="description" content={article.description} />
	<meta property="og:title" content={article.title} />
	<meta property="og:description" content={article.description} />
	<meta property="og:image" content={article.image} />
	<meta property="og:url" content={`https://gralypho.com//blog/${article.slug}`} />
	<meta property="og:type" content="article" />
</svelte:head>

<Header />
{#if article}
	<article class="article-content">
		<h1>{article.title}</h1>
		<p><em>{article.date}</em></p>
		{#if article.image}
			<img src={article.image} alt="Illustration pour {article.title}" class="featured-image" />
		{/if}
		<div>{@html article.content}</div>
	</article>
{:else}
	<p>Article introuvable.</p>
{/if}

<style>
	article {
		font-family: var(--Red);
		max-width: 800px;
		margin: 0 auto;
		padding: 20px;
		background-color: #f9f9f9;
		border-radius: 8px;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
		height: 100%;
	}
	article h1 {
		font-size: 2rem;
		margin-bottom: 10px;
	}
	article p  {
		font-size: 1rem;
		color: #555;
	}
	article div {
		font-size: 1rem;
		line-height: 1.6;
		color: #334;
	}
	article em {
		font-style: italic;
		color: #888;
	}
	img {
		max-width: 100%;
		height: auto;
		border-radius: 1rem;
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
		margin: 1rem 0;
	}
</style>
