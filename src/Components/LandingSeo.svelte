<!-- src/Components/LandingSeo.svelte -->
<script>
	import Header from '../sections/Header.svelte';
	import Form from './Form.svelte';
	import Button from './Cta-component.svelte';
	import Links from './LinkSiteApplication.svelte';
	import FaqLink from './FaqLink.svelte';

	// Props
	export let title = '';
	export let location = '';
	export let picture = '';
	export let intro = '';
	export let services = [];
	export let cities = [];
	export let ogUrl = '';
	export let metaDescription = '';
	export let profilePhoto = '';
</script>

<svelte:head>
	<title>{title} | Gralypho</title>
	<meta name="description" content={metaDescription || intro.substring(0, 150)} />
	{#if ogUrl}
		<link rel="canonical" href={ogUrl} />
	{/if}
</svelte:head>

<Header />

<div class="landing-seo-container">
	<!-- Hero Section -->
	<section class="hero-split">
		<div class="hero-content">
			<div class="hero-text-block">
				{#if location}
					<span class="location-badge">📍 {location}</span>
				{/if}
				<h1 class="main-title">{title}</h1>
				<p class="intro-paragraph">{intro}</p>
				<div class="hero-cta-btn">
					<Button text="Nous contacter" link="#section-form" />
				</div>
			</div>
			
			<div class="hero-visual-block">
				{#if picture}
					<div class="glass-image-wrapper">
						<img src={picture} alt={title} class="hero-img" />
					</div>
				{/if}
			</div>
		</div>
	</section>

	<!-- Services Grid Section -->
	{#if services && services.length > 0}
		<section class="services-section">
			<div class="section-header">
				<h2 class="section-title">Nos Solutions Digitales Sur-Mesure</h2>
				<p class="section-subtitle">Un accompagnement local d'excellence pour booster votre activité</p>
			</div>
			
			<div class="services-grid">
				{#each services as service}
					<div class="service-glass-card">
						<div class="service-icon">{service.icon || '💻'}</div>
						<h3 class="service-title">{service.title}</h3>
						<p class="service-desc">{service.desc}</p>
						{#if service.link}
							<div class="card-btn-wrapper">
								<Button text="Découvrir" link={service.link} />
							</div>
						{/if}
					</div>
				{/each}
			</div>
		</section>
	{/if}

	<!-- Local Proximity Section -->
	{#if cities && cities.length > 0}
		<section class="proximity-section">
			<div class="proximity-card">
				<h3 class="proximity-title">Votre Agence Web de Proximité</h3>
				<p class="proximity-desc">Nous intervenons et nous déplaçons volontiers pour vous rencontrer directement dans votre commune :</p>
				<div class="cities-tags">
					{#each cities as city}
						<span class="city-pill">📍 {city}</span>
					{/each}
				</div>
			</div>
		</section>
	{/if}

	<!-- Personal trust profile section -->
	<section class="trust-profile-section">
		<div class="profile-card-glass">
			<div class="profile-layout">
				<div class="profile-avatar-box">
					{#if profilePhoto}
						<img src={profilePhoto} alt="Fabien Marceau" class="profile-photo" />
					{:else}
						<div class="avatar-initials-fallback">FM</div>
					{/if}
					<span class="online-indicator-dot"></span>
				</div>
				<div class="profile-info-box">
					<span class="profile-badge">Votre interlocuteur unique</span>
					<h3>Fabien Marceau</h3>
					<p class="profile-role">Développeur Expert & Fondateur de Gralypho</p>
					<p class="profile-bio">
						"Basé localement dans la région lyonnaise, je conçois et optimise personnellement votre outil digital. Mon but est simple : faire en sorte que votre site internet devienne un véritable levier de croissance, bien référencé et conçu pour convertir vos visiteurs en clients."
					</p>
					<div class="profile-actions">
						<a href="#section-form" class="primary-btn-call">
							📞 Réserver mon appel diagnostic de 15 min (Gratuit)
						</a>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- Integrated Contact Form Section -->
	<div class="integrated-form-section">
		<Form />
	</div>

	<!-- Bottom Links & FAQs -->
	<div class="bottom-links-section">
		<Links />
		<div class="faq-link-block">
			<FaqLink />
			<a href="/FAQ" class="faq-btn">Accéder à la FAQ complète</a>
		</div>
	</div>
</div>

<style>
	.landing-seo-container {
		background: radial-gradient(circle at 50% 0%, #151e36 0%, var(--primary) 70%);
		min-height: 100vh;
		padding-top: 6rem;
		padding-bottom: 4rem;
		box-sizing: border-box;
		color: #ffffff;
		overflow-x: hidden;
	}

	/* Hero Section */
	.hero-split {
		padding: 4rem 2rem 2rem 2rem;
		max-width: 1200px;
		margin: 0 auto;
	}

	.hero-content {
		display: grid;
		grid-template-columns: 1.1fr 0.9fr;
		gap: 3rem;
		align-items: center;
	}

	.hero-text-block {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		text-align: left;
	}

	.location-badge {
		font-family: var(--Geologica);
		font-size: 0.85rem;
		font-weight: 700;
		text-transform: uppercase;
		color: var(--green, #d6a319);
		background: rgba(214, 163, 25, 0.1);
		border: 1px solid rgba(214, 163, 25, 0.2);
		padding: 0.35rem 0.85rem;
		border-radius: 50px;
		margin-bottom: 1.5rem;
		letter-spacing: 0.05em;
	}

	.main-title {
		font-family: var(--Geologica);
		font-size: clamp(2.2rem, 5vw, 3.8rem);
		font-weight: 900;
		color: #ffffff;
		line-height: 1.15;
		margin-bottom: 1.5rem;
		letter-spacing: -1.5px;
		background: linear-gradient(135deg, #ffffff 60%, rgba(255, 255, 255, 0.7));
		background-clip: text;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}

	.intro-paragraph {
		font-family: var(--Poppins);
		font-size: clamp(1rem, 2vw, 1.15rem);
		color: rgba(255, 255, 255, 0.8);
		font-weight: 300;
		line-height: 1.7;
		margin-bottom: 2rem;
	}

	.hero-cta-btn {
		margin-top: 0.5rem;
	}

	.hero-visual-block {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.glass-image-wrapper {
		position: relative;
		padding: 0.75rem;
		background: rgba(255, 255, 255, 0.03);
		border: 1px solid rgba(255, 255, 255, 0.08);
		border-radius: 28px;
		backdrop-filter: blur(12px);
		box-shadow: 0 40px 80px rgba(0, 0, 0, 0.4);
		transition: transform 0.4s ease, box-shadow 0.4s ease;
	}

	.glass-image-wrapper:hover {
		transform: translateY(-8px);
		box-shadow: 0 50px 90px rgba(20, 129, 186, 0.25);
		border-color: rgba(20, 129, 186, 0.3);
	}

	.hero-img {
		width: 100%;
		height: auto;
		max-width: 450px;
		object-fit: cover;
		border-radius: 20px;
		display: block;
	}

	/* Services Section */
	.services-section {
		max-width: 1200px;
		margin: 6rem auto 4rem auto;
		padding: 0 2rem;
	}

	.section-header {
		text-align: center;
		margin-bottom: 3.5rem;
	}

	.section-title {
		font-family: var(--Geologica);
		font-size: clamp(1.8rem, 4vw, 2.5rem);
		font-weight: 800;
		margin-bottom: 0.75rem;
		letter-spacing: -1px;
	}

	.section-subtitle {
		font-family: var(--Poppins);
		font-size: 1rem;
		color: rgba(255, 255, 255, 0.6);
		font-weight: 300;
	}

	.services-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
		gap: 2rem;
	}

	.service-glass-card {
		background: rgba(255, 255, 255, 0.02);
		border: 1px solid rgba(255, 255, 255, 0.05);
		border-radius: 24px;
		padding: 2.5rem;
		backdrop-filter: blur(16px);
		box-shadow: 0 20px 45px rgba(0, 0, 0, 0.2);
		transition: all 0.3s ease;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		text-align: left;
	}

	.service-glass-card:hover {
		transform: translateY(-6px);
		background: rgba(255, 255, 255, 0.04);
		border-color: rgba(20, 129, 186, 0.2);
		box-shadow: 0 30px 60px rgba(0, 0, 0, 0.3);
	}

	.service-icon {
		font-size: 2.5rem;
		margin-bottom: 1.5rem;
		background: rgba(255, 255, 255, 0.05);
		width: 60px;
		height: 60px;
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 16px;
		border: 1px solid rgba(255, 255, 255, 0.08);
	}

	.service-title {
		font-family: var(--Geologica);
		font-size: 1.35rem;
		font-weight: 700;
		margin-bottom: 0.85rem;
		color: #ffffff;
		letter-spacing: -0.5px;
	}

	.service-desc {
		font-family: var(--Poppins);
		font-size: 0.95rem;
		color: rgba(255, 255, 255, 0.7);
		line-height: 1.6;
		font-weight: 300;
		margin-bottom: 2rem;
		flex-grow: 1;
	}

	.card-btn-wrapper {
		width: 100%;
		display: flex;
		justify-content: flex-start;
	}

	/* Proximity Section */
	.proximity-section {
		max-width: 1200px;
		margin: 4rem auto;
		padding: 0 2rem;
	}

	.proximity-card {
		background: linear-gradient(135deg, rgba(255, 255, 255, 0.02) 0%, rgba(20, 129, 186, 0.03) 100%);
		border: 1px solid rgba(255, 255, 255, 0.05);
		border-radius: 28px;
		padding: 3rem;
		text-align: center;
		backdrop-filter: blur(12px);
	}

	.proximity-title {
		font-family: var(--Geologica);
		font-size: 1.6rem;
		font-weight: 700;
		margin-bottom: 0.75rem;
		color: #ffffff;
	}

	.proximity-desc {
		font-family: var(--Poppins);
		font-size: 0.95rem;
		color: rgba(255, 255, 255, 0.6);
		margin-bottom: 2rem;
		font-weight: 300;
	}

	.cities-tags {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		gap: 0.75rem;
	}

	.city-pill {
		font-family: var(--Poppins);
		font-size: 0.85rem;
		font-weight: 500;
		color: rgba(255, 255, 255, 0.85);
		background: rgba(255, 255, 255, 0.04);
		border: 1px solid rgba(255, 255, 255, 0.08);
		padding: 0.45rem 1rem;
		border-radius: 50px;
		transition: all 0.2s ease;
		cursor: default;
	}

	.city-pill:hover {
		background: rgba(20, 129, 186, 0.15);
		border-color: rgba(20, 129, 186, 0.3);
		color: #ffffff;
		transform: scale(1.05);
	}

	/* Form Section */
	.integrated-form-section {
		margin-top: 4rem;
	}

	/* Bottom Links & FAQ */
	.bottom-links-section {
		max-width: 1200px;
		margin: 4rem auto 0 auto;
		padding: 0 2rem;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 3rem;
	}

	.faq-link-block {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1.5rem;
	}

	.faq-btn {
		font-family: var(--Red);
		font-size: 0.9rem;
		color: rgba(255, 255, 255, 0.5);
		text-decoration: underline;
		transition: color 0.2s ease;
	}

	.faq-btn:hover {
		color: var(--green, #d6a319);
	}

	/* Responsive Rules */
	@media (max-width: 992px) {
		.hero-content {
			grid-template-columns: 1fr;
			gap: 3rem;
			text-align: center;
		}

		.hero-text-block {
			align-items: center;
			text-align: center;
		}

		.glass-image-wrapper {
			max-width: 400px;
		}
	}

	@media (max-width: 576px) {
		.landing-seo-container {
			padding-top: 5rem;
		}
		
		.hero-split {
			padding: 2rem 1.5rem;
		}

		.proximity-card {
			padding: 2rem 1.5rem;
		}

		.services-section {
			margin-top: 4rem;
			padding: 0 1.5rem;
		}

		.service-glass-card {
			padding: 2rem 1.5rem;
		}
	}

	/* Trust Profile Section */
	.trust-profile-section {
		max-width: 900px;
		margin: 4rem auto;
		padding: 0 2rem;
		box-sizing: border-box;
	}

	.profile-card-glass {
		background: rgba(255, 255, 255, 0.02);
		border: 1px solid rgba(255, 255, 255, 0.05);
		border-radius: 28px;
		padding: 3rem;
		backdrop-filter: blur(16px);
		box-shadow: 0 30px 60px rgba(0, 0, 0, 0.3);
	}

	.profile-layout {
		display: grid;
		grid-template-columns: 150px 1fr;
		gap: 3rem;
		align-items: center;
	}

	.profile-avatar-box {
		position: relative;
		width: 150px;
		height: 150px;
	}

	.profile-photo {
		width: 100%;
		height: 100%;
		object-fit: cover;
		border-radius: 50%;
		border: 3px solid rgba(20, 129, 186, 0.3);
		box-shadow: 0 10px 25px rgba(0,0,0,0.2);
	}

	.avatar-initials-fallback {
		width: 100%;
		height: 100%;
		border-radius: 50%;
		background: linear-gradient(135deg, var(--cta) 0%, var(--green, #d6a319) 100%);
		display: flex;
		align-items: center;
		justify-content: center;
		font-family: var(--Geologica);
		font-size: 2.8rem;
		font-weight: 900;
		color: #ffffff;
		border: 3px solid rgba(255, 255, 255, 0.1);
		box-shadow: 0 10px 25px rgba(20, 129, 186, 0.2);
	}

	.online-indicator-dot {
		position: absolute;
		bottom: 8px;
		right: 8px;
		width: 16px;
		height: 16px;
		background-color: #22c55e;
		border: 3px solid #0d121f;
		border-radius: 50%;
		box-shadow: 0 0 12px #22c55e;
		animation: pulse-green 2.5s infinite;
	}

	@keyframes pulse-green {
		0% {
			box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.7);
		}
		70% {
			box-shadow: 0 0 0 8px rgba(34, 197, 94, 0);
		}
		100% {
			box-shadow: 0 0 0 0 rgba(34, 197, 94, 0);
		}
	}

	.profile-badge {
		font-family: var(--Geologica);
		font-size: 0.75rem;
		font-weight: 700;
		text-transform: uppercase;
		color: var(--green, #d6a319);
		letter-spacing: 0.05em;
		display: inline-block;
		margin-bottom: 0.5rem;
	}

	.profile-info-box h3 {
		font-family: var(--Geologica);
		font-size: 1.8rem;
		font-weight: 800;
		margin: 0 0 0.25rem 0;
		color: #ffffff;
		letter-spacing: -0.5px;
	}

	.profile-role {
		font-family: var(--Poppins);
		font-size: 0.95rem;
		color: rgba(255, 255, 255, 0.65);
		margin: 0 0 1.25rem 0;
		font-weight: 400;
	}

	.profile-bio {
		font-family: var(--Poppins);
		font-size: 0.95rem;
		color: rgba(255, 255, 255, 0.8);
		line-height: 1.6;
		font-weight: 300;
		margin-bottom: 1.5rem;
		text-align: left;
	}

	.primary-btn-call {
		display: inline-block;
		text-decoration: none;
		background: var(--green, #d6a319);
		color: #ffffff;
		font-family: var(--Red);
		font-size: 0.95rem;
		font-weight: 700;
		padding: 0.8rem 1.6rem;
		border-radius: 50px;
		box-shadow: 0 10px 20px rgba(214, 163, 25, 0.2);
		transition: transform 0.2s ease, box-shadow 0.2s ease;
	}

	.primary-btn-call:hover {
		transform: translateY(-2px);
		box-shadow: 0 12px 25px rgba(214, 163, 25, 0.35);
		background-color: #e5af20;
	}

	@media (max-width: 768px) {
		.profile-layout {
			grid-template-columns: 1fr;
			gap: 2rem;
			text-align: center;
			justify-items: center;
		}
		
		.profile-bio {
			text-align: center;
		}

		.profile-info-box {
			display: flex;
			flex-direction: column;
			align-items: center;
		}
	}
</style>
