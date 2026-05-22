<script>
	import { fade } from 'svelte/transition';
	import Header from '../../sections/Header.svelte';
	import Service from '../../Components/Services.svelte';
	import redaction from '../../Assets/png-gralypho/writing.png';
	import contenuMedia from '../../Assets/png-gralypho/contenuMedia.png';
	import publiciteMedia from '../../Assets/png-gralypho/publiciteMedia.png';
	import Form from '../../Components/Form.svelte';
	import Mouse from '../../Components/Mouse.svelte';
	import Button from '../../Components/ButtonCTA.svelte';
	import FaqLink from '../../Components/FaqLink.svelte';
	import Links from '../../Components/LinkSiteApplication.svelte';
</script>

<Mouse />
<Header />

<main class="page-container" in:fade={{ duration: 1000 }}>
	<!-- Halos lumineux en arrière-plan -->
	<div class="glow-orb orb-1"></div>
	<div class="glow-orb orb-2"></div>

	<!-- Section Hero -->
	<div class="wrapper__hero">
		<h1 class="title">Gestion des <span class="highlight-text">Médias Sociaux</span></h1>
		
		<h2 class="subtitle">
			L'agence Gralypho prend en main l'intégralité de votre présence sociale.
			<br />
			<span class="sub-lead">Mises à jour stratégiques régulières, création de contenus photo et vidéo professionnels, Community Management actif et gestion publicitaire : nous concevons un écosystème sur-mesure pour engager votre audience et propulser vos ventes.</span>
		</h2>
		
		<div class="cta-hero">
			<Button />
		</div>
	</div>

	<!-- Section Services -->
	<div class="container-service">
		<h2>Découvrez nos services de <span class="highlight-text">Community Management</span></h2>
		<p class="section-desc">Des prestations de haute précision pour donner une voix unique et une identité mémorable à votre marque sur tous vos réseaux (Instagram, LinkedIn, Facebook).</p>
		
		<div class="wrapper-service">
			<Service
				text="Stratégie & Rédaction Éditoriale"
				description="Conception complète du calendrier éditorial. Rédaction des posts, slogans, hashtags pertinents et recherche sémantique ciblée pour asseoir votre autorité."
				img={redaction}
				lien="/community-management"
			/>
			<Service
				text="Création de Contenus Visuels d'Élite"
				img={contenuMedia}
				description="Notre service de création vidéo et de photographie professionnelle vous permettra de vous démarquer sur tous les réseaux. Nous concevons des visuels et Reels haute fidélité pour imposer votre univers."
				lien="/community-management"
			/>
			<Service
				text="Campagnes Publicitaires Ads"
				description="Élaboration et pilotage chirurgical de vos campagnes de publicités payantes (Meta Ads, LinkedIn Ads) pour un retour sur investissement (ROI) optimal."
				img={publiciteMedia}
				lien="/community-management"
			/>
		</div>
	</div>

	<!-- Liens d'offres -->
	<div class="wrapper-links-nav">
		<Links />
	</div>

	<!-- Citation Témoignage -->
	<div class="testimonial-banner">
		<div class="quote-symbol">“</div>
		<blockquote>
			J’aime les médias sociaux car ils existent à l’intersection parfaite de l’humanité et de la technologie.
		</blockquote>
		<cite>— Jeremy Waite</cite>
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

	/* Halos de lumière */
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
		bottom: 30%;
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

	/* Conteneur de Services */
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

	.wrapper-links-nav {
		width: 100%;
		z-index: 3;
		margin-top: 2rem;
	}

	/* Bandeau Témoignage */
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

	.wrapper-form {
		width: 100%;
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
