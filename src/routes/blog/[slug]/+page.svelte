<script>
	export let data;
	import LinkSiteApplication from '../../../Components/LinkSiteApplication.svelte';
	import FAQ from '../../../Components/FaqLink.svelte';
	import Header from '../../../sections/Header.svelte';
	import Mouse from '../../../Components/Mouse.svelte';
	import { fade } from 'svelte/transition';
	
	const { article } = data;
</script>

<svelte:head>
	{#if article}
		<title>{article.title} | Gralypho Blog</title>
		<meta name="description" content={article.description} />
		<meta property="og:title" content={article.title} />
		<meta property="og:description" content={article.description} />
		<meta property="og:image" content={article.image || '/logoGralypho2.jpeg'} />
		<meta property="og:url" content={`https://gralypho.com/blog/${article.slug}`} />
		<meta property="og:type" content="article" />
		<link rel="canonical" href={`https://gralypho.com/blog/${article.slug}`} />
	{/if}
</svelte:head>

<Header />
<Mouse />

<main class="page-container" in:fade={{ duration: 1000 }}>
	<!-- Halos lumineux en arrière-plan -->
	<div class="glow-orb orb-1"></div>
	<div class="glow-orb orb-2"></div>

	{#if article}
		<article class="article-wrapper">
			<!-- Fil d'ariane & date -->
			<div class="article-header-meta">
				<a href="/blog" class="back-link">
					<svg xmlns="http://www.w3.org/2000/svg" class="back-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
						<line x1="19" y1="12" x2="5" y2="12"></line>
						<polyline points="12 19 5 12 12 5"></polyline>
					</svg>
					Retour au Blog
				</a>
				<span class="date-badge">{article.date}</span>
			</div>

			<!-- Titre H1 de l'article -->
			<h1 class="article-title">{article.title}</h1>

			<!-- Boutons de Partage Stylisés -->
			<div class="share-section">
				<span class="share-label">Partager cet article :</span>
				<div class="share-buttons">
					<a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(`https://gralypho.com/blog/${article.slug}`)}`} target="_blank" rel="noopener noreferrer" class="share-btn" title="Partager sur Facebook">
						<svg class="share-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
							<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
						</svg>
					</a>

					<a href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`https://gralypho.com/blog/${article.slug}`)}`} target="_blank" rel="noopener noreferrer" class="share-btn" title="Partager sur LinkedIn">
						<svg class="share-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
							<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
							<rect x="2" y="9" width="4" height="12"></rect>
							<circle cx="4" cy="4" r="2"></circle>
						</svg>
					</a>

					<a href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(article.title)}&url=${encodeURIComponent(`https://gralypho.com/blog/${article.slug}`)}`} target="_blank" rel="noopener noreferrer" class="share-btn" title="Partager sur X">
						<svg class="share-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
							<path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
						</svg>
					</a>

					<a href={`https://wa.me/?text=${encodeURIComponent(article.title + ' https://gralypho.com/blog/' + article.slug)}`} target="_blank" rel="noopener noreferrer" class="share-btn" title="Partager sur WhatsApp">
						<svg class="share-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
							<path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
						</svg>
					</a>

					<a href={`mailto:?subject=${encodeURIComponent(article.title)}&body=${encodeURIComponent('Je voulais te partager cet article : https://gralypho.com/blog/' + article.slug)}`} class="share-btn" title="Envoyer par email">
						<svg class="share-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
							<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
							<polyline points="22,6 12,13 2,6"></polyline>
						</svg>
					</a>
				</div>
			</div>

			<!-- Image mise en avant -->
			{#if article.image}
				<div class="featured-image-container">
					<img src={article.image} alt={article.title} class="featured-image" />
				</div>
			{/if}

			<!-- Corps de l'article -->
			<div class="article-body">
				{@html article.content}
			</div>
		</article>
	{:else}
		<div class="error-wrapper">
			<p>Article introuvable ou inexistant.</p>
			<a href="/blog" class="btn-back">Retour au Blog</a>
		</div>
	{/if}
</main>

<div class="wrapper-links-nav">
	<LinkSiteApplication />
</div>

<div class="wrapper-faq">
	<FAQ />
</div>

<style>
	.page-container {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		padding: 6rem 2rem 4rem 2rem;
		background-color: var(--primary);
		position: relative;
		overflow: hidden;
		min-height: 100vh;
	}

	/* Halos lumineux en arrière-plan */
	.glow-orb {
		position: absolute;
		border-radius: 50%;
		filter: blur(120px);
		opacity: 0.08;
		pointer-events: none;
		z-index: 1;
	}
	.orb-1 {
		width: 500px;
		height: 500px;
		background: var(--green, #D6A319);
		top: 10%;
		left: -200px;
	}
	.orb-2 {
		width: 600px;
		height: 600px;
		background: var(--cta, #1481ba);
		bottom: 30%;
		right: -350px;
	}

	.article-wrapper {
		width: 100%;
		max-width: 850px;
		background: rgba(255, 255, 255, 0.02);
		border: 1px solid rgba(255, 255, 255, 0.05);
		border-radius: 24px;
		padding: 3.5rem;
		box-shadow: 0 20px 40px rgba(0, 0, 0, 0.25);
		backdrop-filter: blur(10px);
		-webkit-backdrop-filter: blur(10px);
		z-index: 3;
	}

	.article-header-meta {
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin-bottom: 2rem;
		border-bottom: 1px solid rgba(255, 255, 255, 0.05);
		padding-bottom: 1.5rem;
	}

	.back-link {
		display: flex;
		align-items: center;
		gap: 8px;
		color: rgba(255, 255, 255, 0.6);
		font-family: var(--Geologica), sans-serif;
		font-size: 0.85rem;
		font-weight: 700;
		text-transform: uppercase;
		letter-spacing: 0.05em;
		text-decoration: none;
		transition: color 0.3s ease;
	}

	.back-link:hover {
		color: var(--green, #D6A319);
	}

	.back-icon {
		width: 16px;
		height: 16px;
		transition: transform 0.3s ease;
	}

	.back-link:hover .back-icon {
		transform: translateX(-4px);
	}

	.date-badge {
		font-family: var(--Geologica), sans-serif;
		font-size: 0.75rem;
		font-weight: 700;
		color: var(--green, #D6A319);
		background: rgba(214, 163, 25, 0.1);
		border: 1px solid rgba(214, 163, 25, 0.25);
		padding: 4px 12px;
		border-radius: 50px;
		text-transform: uppercase;
		letter-spacing: 0.05em;
	}

	.article-title {
		font-family: var(--Geologica), sans-serif;
		font-size: clamp(2rem, 4vw, 3rem);
		font-weight: 900;
		color: #ffffff;
		margin: 0 0 1.5rem 0;
		line-height: 1.2;
		letter-spacing: -0.02em;
	}

	/* Section Partage */
	.share-section {
		display: flex;
		align-items: center;
		gap: 15px;
		margin-bottom: 2.5rem;
	}

	.share-label {
		font-family: var(--Red), sans-serif;
		font-size: 0.9rem;
		font-weight: 400;
		color: rgba(255, 255, 255, 0.5);
	}

	.share-buttons {
		display: flex;
		gap: 8px;
	}

	.share-btn {
		width: 36px;
		height: 36px;
		border-radius: 50%;
		background: rgba(255, 255, 255, 0.03);
		border: 1px solid rgba(255, 255, 255, 0.05);
		display: flex;
		align-items: center;
		justify-content: center;
		color: rgba(255, 255, 255, 0.6);
		transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
		text-decoration: none;
	}

	.share-btn:hover {
		color: var(--primary);
		background: var(--green, #D6A319);
		border-color: var(--green, #D6A319);
		transform: translateY(-2px);
		box-shadow: 0 4px 12px rgba(214, 163, 25, 0.3);
	}

	.share-icon {
		width: 16px;
		height: 16px;
	}

	/* Image à la une */
	.featured-image-container {
		width: 100%;
		border-radius: 16px;
		overflow: hidden;
		margin-bottom: 3rem;
		border: 1px solid rgba(255, 255, 255, 0.05);
		box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
	}

	.featured-image {
		width: 100%;
		height: auto;
		display: block;
		object-fit: cover;
	}

	/* Corps de l'article */
	.article-body {
		font-family: var(--Red), sans-serif;
		font-size: 1.05rem;
		font-weight: 300;
		line-height: 1.85;
		color: rgba(255, 255, 255, 0.85);
	}

	/* Styles appliqués au HTML dynamique injecté */
	.article-body :global(p) {
		margin-bottom: 1.5rem;
	}

	.article-body :global(h2) {
		font-family: var(--Geologica), sans-serif;
		font-size: 1.6rem;
		font-weight: 800;
		color: #ffffff;
		margin-top: 3rem;
		margin-bottom: 1.25rem;
		letter-spacing: -0.01em;
	}

	.article-body :global(h3) {
		font-family: var(--Geologica), sans-serif;
		font-size: 1.3rem;
		font-weight: 700;
		color: #ffffff;
		margin-top: 2.25rem;
		margin-bottom: 1rem;
	}

	.article-body :global(strong) {
		color: var(--green, #D6A319);
		font-weight: 600;
	}

	.article-body :global(a) {
		color: var(--green, #D6A319);
		text-decoration: underline;
		font-weight: 600;
		transition: color 0.2s ease;
	}

	.article-body :global(a:hover) {
		color: #ffffff;
	}

	.article-body :global(ul), .article-body :global(ol) {
		margin-bottom: 1.5rem;
		padding-left: 1.5rem;
	}

	.article-body :global(li) {
		margin-bottom: 0.5rem;
	}

	.article-body :global(blockquote) {
		border-left: 4px solid var(--green, #D6A319);
		background: rgba(255, 255, 255, 0.02);
		padding: 1.5rem;
		margin: 2rem 0;
		border-radius: 0 12px 12px 0;
		font-style: italic;
		color: rgba(255, 255, 255, 0.9);
	}

	/* Error state */
	.error-wrapper {
		text-align: center;
		padding: 4rem 2rem;
		z-index: 3;
	}

	.error-wrapper p {
		font-family: var(--Red), sans-serif;
		font-size: 1.2rem;
		color: rgba(255, 255, 255, 0.6);
		margin-bottom: 2rem;
	}

	.btn-back {
		display: inline-block;
		padding: 12px 30px;
		background: var(--green, #D6A319);
		color: var(--primary);
		border-radius: 50px;
		text-decoration: none;
		font-family: var(--Geologica), sans-serif;
		font-weight: 700;
		transition: all 0.3s ease;
	}

	.btn-back:hover {
		background: #ffffff;
		transform: translateY(-2px);
	}

	.wrapper-links-nav {
		width: 100%;
		background-color: var(--primary);
		padding: 2rem 0;
	}

	.wrapper-faq {
		width: 100%;
		background-color: var(--primary);
		padding-bottom: 4rem;
	}

	@media screen and (max-width: 768px) {
		.page-container {
			padding: 5rem 1.25rem;
		}
		.article-wrapper {
			padding: 2rem 1.5rem;
		}
		.share-section {
			flex-direction: column;
			align-items: flex-start;
			gap: 10px;
		}
	}
</style>
