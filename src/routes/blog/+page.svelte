<script>
	export let data;
	import Header from '../../sections/Header.svelte';
	import Mouse from '../../Components/Mouse.svelte';
	import { fade } from 'svelte/transition';
</script>

<svelte:head>
	<title>Le Blog Gralypho | Actualités, SEO & Ingénierie Web</title>
	<meta name="description" content="Retrouvez tous les articles, conseils et tutoriels de l'agence web Gralypho : référencement SEO, développement mobile, design d'élite et actualités tech." />
	<meta property="og:title" content="Le Blog Tech & Référencement SEO | Gralypho" />
	<meta property="og:description" content="Découvrez nos analyses d'experts pour booster votre visibilité Google et piloter vos projets d'applications web et mobiles." />
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://gralypho.com/blog" />
	<meta property="og:image" content="/logoGralypho2.jpeg" />
	<link rel="canonical" href="https://gralypho.com/blog" />
</svelte:head>

<Header />
<Mouse />

<main class="page-container" in:fade={{ duration: 1000 }}>
	<!-- Halos lumineux en arrière-plan -->
	<div class="glow-orb orb-1"></div>
	<div class="glow-orb orb-2"></div>

	<!-- En-tête du Blog -->
	<div class="blog-hero">
		<h1 class="title">Le Blog <span class="highlight-text">Gralypho</span></h1>
		<p class="subtitle">
			Retrouvez nos analyses d'experts, actualités technologiques, astuces de référencement SEO <br />
			et secrets d'ingénierie web pour propulser votre visibilité en ligne.
		</p>
	</div>

	<!-- Grille des articles -->
	<div class="articles-grid">
		{#if data && data.posts && data.posts.length > 0}
			<ul>
				{#each data.posts as post}
					<li class="article-item">
						<a href={`/blog/${post.slug}`} class="article-link">
							<div class="article-meta">
								<span class="date-badge">{post.date}</span>
							</div>
							
							<h2 class="article-title">{post.title}</h2>
							
							<div class="read-more">
								<span>Lire l'article</span>
								<svg xmlns="http://www.w3.org/2000/svg" class="arrow-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
									<line x1="5" y1="12" x2="19" y2="12"></line>
									<polyline points="12 5 19 12 12 19"></polyline>
								</svg>
							</div>
						</a>
					</li>
				{/each}
			</ul>
		{:else}
			<div class="no-posts-card">
				<p>Aucun article disponible pour le moment. Restez connectés, nos experts rédigent de nouveaux dossiers passionnants ! ✍️</p>
			</div>
		{/if}
	</div>
</main>

<style>
	.page-container {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		padding: 6rem 2rem 6rem 2rem;
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
		opacity: 0.1;
		pointer-events: none;
		z-index: 1;
	}
	.orb-1 {
		width: 500px;
		height: 500px;
		background: var(--cta, #1481ba);
		top: 10%;
		left: -200px;
	}
	.orb-2 {
		width: 600px;
		height: 600px;
		background: var(--green, #D6A319);
		bottom: 10%;
		right: -350px;
	}

	.blog-hero {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		text-align: center;
		margin-bottom: 4rem;
		margin-top: 2rem;
		max-width: 950px;
		z-index: 3;
	}

	.title {
		font-family: var(--Geologica), sans-serif;
		font-size: clamp(2.5rem, 5vw, 4.5rem);
		font-weight: 900;
		color: #ffffff;
		margin: 0 0 1rem 0;
		letter-spacing: -0.03em;
		line-height: 1.15;
	}

	.highlight-text {
		background: linear-gradient(135deg, var(--green, #D6A319) 0%, #ffffff 100%);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}

	.subtitle {
		font-family: var(--Red), sans-serif;
		font-size: clamp(1rem, 2vw, 1.2rem);
		font-weight: 300;
		color: rgba(255, 255, 255, 0.7);
		line-height: 1.7;
		margin: 0;
	}

	.articles-grid {
		width: 100%;
		max-width: 800px;
		z-index: 3;
	}

	ul {
		list-style-type: none;
		padding: 0;
		margin: 0;
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
		width: 100%;
	}

	.article-item {
		background: rgba(255, 255, 255, 0.02);
		border: 1px solid rgba(255, 255, 255, 0.05);
		border-radius: 20px;
		transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
		backdrop-filter: blur(10px);
		-webkit-backdrop-filter: blur(10px);
	}

	.article-item:hover {
		border-color: var(--green, #D6A319);
		background: rgba(255, 255, 255, 0.04);
		transform: translateY(-4px);
		box-shadow: 0 15px 30px rgba(214, 163, 25, 0.08);
	}

	.article-link {
		display: flex;
		flex-direction: column;
		padding: 2.2rem;
		text-decoration: none;
		gap: 1rem;
		width: 100%;
	}

	.article-meta {
		display: flex;
		align-items: center;
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
		font-size: clamp(1.2rem, 2.5vw, 1.5rem);
		font-weight: 800;
		color: #ffffff;
		margin: 0;
		line-height: 1.35;
		transition: color 0.3s ease;
	}

	.article-item:hover .article-title {
		color: var(--green, #D6A319);
	}

	.read-more {
		display: flex;
		align-items: center;
		gap: 8px;
		color: #ffffff;
		font-family: var(--Geologica), sans-serif;
		font-size: 0.85rem;
		font-weight: 700;
		text-transform: uppercase;
		letter-spacing: 0.05em;
		margin-top: 0.5rem;
		opacity: 0.7;
		transition: all 0.3s ease;
	}

	.article-item:hover .read-more {
		opacity: 1;
		color: var(--green, #D6A319);
	}

	.arrow-icon {
		width: 16px;
		height: 16px;
		transition: transform 0.3s ease;
	}

	.article-item:hover .arrow-icon {
		transform: translateX(6px);
	}

	.no-posts-card {
		background: rgba(255, 255, 255, 0.02);
		border: 1px solid rgba(255, 255, 255, 0.05);
		border-radius: 20px;
		padding: 3rem 2rem;
		text-align: center;
	}

	.no-posts-card p {
		font-family: var(--Red), sans-serif;
		font-size: 1rem;
		color: rgba(255, 255, 255, 0.6);
		line-height: 1.7;
		margin: 0;
	}

	@media screen and (max-width: 768px) {
		.page-container {
			padding: 5rem 1.25rem;
		}
		.article-link {
			padding: 1.5rem;
		}
	}
</style>