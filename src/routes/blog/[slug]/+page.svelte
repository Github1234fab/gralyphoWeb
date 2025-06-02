<script>
	export let data;
	import LinkSiteApplication from '../../../Components/LinkSiteApplication.svelte';
	import FAQ from '../../../Components/FaqLink.svelte';
	const { article } = data;
	import Header from '../../../sections/Header.svelte';
	// import LI from '../../../assets/réseaux/LI.png';
	// import WA from '../../../assets/réseaux/WA.png';
	// import FB from '../../../assets/réseaux/FB.png';
	// import TW from '../../../assets/réseaux/TW.png';
	// import mail from '../../../assets/réseaux/mail.png';
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
		<section class="share-buttons">
			<a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(`https://gralypho.com/blog/${article.slug}`)}`} target="_blank" rel="noopener noreferrer">
				<img class="icons" src="/FB.png" alt="icone facebook" />
			</a>

			<a href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`https://gralypho.com/blog/${article.slug}`)}`} target="_blank" rel="noopener noreferrer">
				<img class="icons" src="/LI.png" alt="icone Linkedin" />
			</a>

		 <a href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(article.title)}&url=${encodeURIComponent(`https://gralypho.com/blog/${article.slug}`)}`} target="_blank" rel="noopener noreferrer">
				<img class="icons" src="/TW.png" alt="icone Twitter" />
			</a>

			<a href={`https://wa.me/?text=${encodeURIComponent(article.title + ' https://gralypho.com/blog/' + article.slug)}`} target="_blank" rel="noopener noreferrer">
				<img class="icons" src='/WA.png' alt="icone whatsapp" />
			</a>

			<a href={`mailto:?subject=${encodeURIComponent(article.title)}&body=${encodeURIComponent('Je voulais te partager cet article : https://gralypho.com/blog/' + article.slug)}`} target="_blank" rel="noopener noreferrer"> <img class="icons" src='/mail.png' alt="icone mail" /></a> 
		</section>
		{#if article.image}
			<img src={article.image} alt="Illustration pour {article.title}" class="featured-image" />
		{/if}
		<div>{@html article.content}</div>
	</article>
{:else}
	<p>Article introuvable.</p>
{/if}

<LinkSiteApplication/>
<FAQ/>

<style>
	.share-buttons {
		display: flex;
		flex-direction: row;
		align-items: flex-start;
		justify-content: flex-start;
		gap: 10px;
		margin-top: 5px;
	}
	.icons {
		width: 30px;
		height: 30px;
		border-radius: 0px;
		transition: 0.3s ease-in-out;
	}
	.icons:hover {
		transform: scale(1.1);
		transition: transform 0.2s;
	}
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
		letter-spacing: -1px;
	}
	article p {
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
