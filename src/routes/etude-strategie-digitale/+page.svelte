<script>
	import { fade } from 'svelte/transition';
	import Header from '../../sections/Header.svelte';
	import Form from '../../Components/Form.svelte';
	import Mouse from '../../Components/Mouse.svelte';
	import Button from '../../Components/ButtonCTA.svelte';
	import FaqLink from '../../Components/FaqLink.svelte';
	import Links from '../../Components/LinkSiteApplication.svelte';
</script>

<Mouse />
<Header />

<main class="page-container" in:fade={{ duration: 1000 }}>
	<!-- Halos lumineux d'arrière-plan -->
	<div class="glow-orb orb-1"></div>
	<div class="glow-orb orb-2"></div>

	<!-- Section Hero -->
	<div class="wrapper__hero">
		<h1 class="title">Étude de Stratégie <span class="highlight-text">Digitale</span></h1>
		
		<h2 class="subtitle">
			Propulsez votre marque vers de nouveaux sommets grâce à une architecture marketing d'exception.
			<br />
			<span class="sub-lead">À l'ère du tout-numérique, la visibilité ne suffit plus : il faut captiver, engager et convertir. Chez Gralypho, nous analysons votre marché, décryptons le comportement de vos cibles et concevons des plans d'action sur-mesure pour stimuler durablement votre croissance.</span>
		</h2>
		
		<div class="cta-hero">
			<Button />
		</div>
	</div>

	<!-- Les 3 Piliers de la Stratégie Digitale -->
	<div class="container-service">
		<h2>Les 3 piliers de votre <span class="highlight-text">Réussite en Ligne</span></h2>
		<p class="section-desc">Nous convertissons votre présence web en une force motrice qui propulse votre entreprise vers de nouveaux horizons.</p>
		
		<div class="wrapper-service">
			<!-- Pilier 1 -->
			<div class="pillar-card">
				<div class="pillar-header">
					<span class="pillar-num">01</span>
					<h3>Visibilité & Public Cible</h3>
				</div>
				<p>Notre équipe spécialisée détermine les canaux d'acquisition les plus rentables pour votre business. Nous marions le référencement naturel (SEO) longue portée et des campagnes publicitaires chirurgicales pour capter immédiatement vos futurs clients qualifiés.</p>
			</div>

			<!-- Pilier 2 -->
			<div class="pillar-card">
				<div class="pillar-header">
					<span class="pillar-num">02</span>
					<h3>Engagement & Médias Sociaux</h3>
				</div>
				<p>Nous exploitons la puissance des réseaux sociaux pour tisser des relations authentiques avec votre audience. En concevant des contenus créatifs et engageants, nous transformons de simples visiteurs en ambassadeurs passionnés de votre marque.</p>
			</div>

			<!-- Pilier 3 -->
			<div class="pillar-card">
				<div class="pillar-header">
					<span class="pillar-num">03</span>
					<h3>Conversion & Croissance</h3>
				</div>
				<p>Le marketing digital va au-delà du clic. Nous optimisons l'expérience utilisateur (UX) de vos supports pour éliminer les frictions d'achat, maximiser vos taux de conversion et asseoir une croissance commerciale saine, pérenne et mesurable.</p>
			</div>
		</div>
	</div>

	<!-- Liens d'offres -->
	<div class="wrapper-links-nav">
		<Links />
	</div>

	<!-- Bandeau de Transition -->
	<div class="testimonial-banner">
		<div class="quote-symbol">“</div>
		<blockquote>
			Le marketing digital ne consiste pas à vendre des produits, mais à concevoir des solutions pérennes pour propulser votre entreprise vers le succès.
		</blockquote>
		<cite>— Expertise Gralypho</cite>
	</div>

	<!-- FAQ et Contact -->
	<div class="wrapper__faqLink">
		<FaqLink />
	</div>

	<div class="wrapper-form">
		<Form />
	</div>
</main>

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
		top: 15%;
		left: -200px;
	}
	.orb-2 {
		width: 600px;
		height: 600px;
		background: var(--green, #D6A319);
		bottom: 25%;
		right: -350px;
	}

	.wrapper__hero {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		width: 100%;
		max-width: 1100px;
		background: rgba(255, 255, 255, 0.02);
		border: 1px solid rgba(255, 255, 255, 0.05);
		border-radius: 28px;
		padding: 4.5rem 3rem;
		margin-bottom: 4rem;
		gap: 1.5rem;
		z-index: 3;
		backdrop-filter: blur(10px);
		-webkit-backdrop-filter: blur(10px);
		box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
		text-align: center;
	}

	.title {
		font-family: var(--Geologica), sans-serif;
		font-size: clamp(2.2rem, 5vw, 4.2rem);
		color: #ffffff;
		font-weight: 900;
		text-align: center;
		letter-spacing: -0.03em;
		margin: 0;
		line-height: 1.15;
	}

	.highlight-text {
		background: linear-gradient(135deg, var(--green, #D6A319) 0%, #ffffff 100%);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}

	.subtitle {
		font-family: var(--Red), sans-serif;
		font-size: clamp(1.1rem, 2.2vw, 1.4rem);
		font-weight: 400;
		color: rgba(255, 255, 255, 0.85);
		margin: 0;
		line-height: 1.6;
		max-width: 900px;
	}
	
	.sub-lead {
		display: inline-block;
		font-size: 0.95rem;
		font-weight: 300;
		color: rgba(255, 255, 255, 0.65);
		margin-top: 10px;
		line-height: 1.7;
	}

	.cta-hero {
		margin-top: 1rem;
	}

	/* Les 3 piliers */
	.container-service {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 100%;
		max-width: 1200px;
		padding: 3rem 0;
		z-index: 3;
	}

	.container-service h2 {
		font-family: var(--Geologica), sans-serif;
		font-size: clamp(1.6rem, 3vw, 2.2rem);
		font-weight: 800;
		color: #ffffff;
		text-align: center;
		margin: 0 0 1rem 0;
		letter-spacing: -0.01em;
	}

	.section-desc {
		font-family: var(--Red), sans-serif;
		font-size: 1rem;
		font-weight: 300;
		line-height: 1.7;
		color: rgba(255, 255, 255, 0.65);
		max-width: 800px;
		text-align: center;
		margin: 0 0 3.5rem 0;
	}

	.wrapper-service {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
		gap: 2.5rem;
		width: 100%;
	}

	.pillar-card {
		background: rgba(255, 255, 255, 0.02);
		border: 1px solid rgba(255, 255, 255, 0.05);
		border-radius: 24px;
		padding: 2.5rem 2rem;
		display: flex;
		flex-direction: column;
		gap: 1.25rem;
		transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
		box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
	}

	.pillar-card:hover {
		border-color: var(--green, #D6A319);
		transform: translateY(-8px);
		box-shadow: 0 20px 45px rgba(214, 163, 25, 0.12);
		background: rgba(255, 255, 255, 0.04);
	}

	.pillar-header {
		display: flex;
		align-items: center;
		gap: 12px;
	}

	.pillar-num {
		font-family: var(--Geologica), sans-serif;
		font-size: 1.5rem;
		font-weight: 900;
		color: var(--green, #D6A319);
		background: rgba(214, 163, 25, 0.1);
		border: 1px solid rgba(214, 163, 25, 0.25);
		width: 44px;
		height: 44px;
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.pillar-card h3 {
		font-family: var(--Geologica), sans-serif;
		font-size: 1.15rem;
		font-weight: 700;
		color: #ffffff;
		margin: 0;
	}

	.pillar-card p {
		font-family: var(--Red), sans-serif;
		font-size: 0.9rem;
		font-weight: 300;
		color: rgba(255, 255, 255, 0.7);
		line-height: 1.7;
		margin: 0;
	}

	.wrapper-links-nav {
		width: 100%;
		z-index: 3;
		margin-top: 2rem;
	}

	/* Citation Témoignage */
	.testimonial-banner {
		background: rgba(255, 255, 255, 0.02);
		border-left: 4px solid var(--green, #D6A319);
		border-right: 1px solid rgba(255, 255, 255, 0.05);
		border-top: 1px solid rgba(255, 255, 255, 0.05);
		border-bottom: 1px solid rgba(255, 255, 255, 0.05);
		border-radius: 20px;
		padding: 3.5rem 3rem;
		width: 100%;
		max-width: 800px;
		margin: 4rem auto;
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
		z-index: 3;
		box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
	}
	
	.quote-symbol {
		font-family: var(--Geologica), sans-serif;
		font-size: 4rem;
		color: var(--green, #D6A319);
		line-height: 1;
		height: 30px;
		opacity: 0.4;
		margin-bottom: 0.5rem;
	}

	.testimonial-banner blockquote {
		font-family: var(--Red), sans-serif;
		font-size: 1.2rem;
		font-weight: 300;
		color: #ffffff;
		line-height: 1.7;
		margin: 0;
		font-style: italic;
	}

	.testimonial-banner cite {
		font-family: var(--Geologica), sans-serif;
		font-size: 0.85rem;
		font-weight: 700;
		color: rgba(255, 255, 255, 0.5);
		margin-top: 1.25rem;
		letter-spacing: 0.05em;
		text-transform: uppercase;
		font-style: normal;
	}

	.wrapper__faqLink {
		width: 100%;
		max-width: 800px;
		z-index: 3;
	}

	@media screen and (max-width: 867px) {
		.page-container {
			padding: 5rem 1.25rem;
		}
		.wrapper__hero {
			padding: 2rem 1.5rem;
		}
		.subtitle {
			text-align: left;
		}
		.container-service h2 {
			text-align: left;
			width: 100%;
		}
		.section-desc {
			text-align: left;
			width: 100%;
		}
		.testimonial-banner {
			padding: 2rem 1.5rem;
			text-align: left;
			align-items: flex-start;
		}
		.testimonial-banner blockquote {
			text-align: left;
		}
	}
</style>
