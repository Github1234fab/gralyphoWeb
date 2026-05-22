<script>
	import { fade, slide } from 'svelte/transition';
	import Logo from '../Components/Gralypho.svelte';

	let toggle = false;

	function toggleMenu() {
		toggle = !toggle;
	}

	import { afterNavigate } from '$app/navigation';
	afterNavigate(() => {
		toggle = false;
	});
</script>

<nav class="navigation">
	<div class="container__header">
		<!-- Logo cliquable de l'agence -->
		<a href="/" class="logo" aria-label="Accueil">
			<Logo />
		</a>

		<!-- Zone boutons de contact et burger -->
		<div class="wrapper-logo-burger">
			<a class="contact phone-btn" href="tel:+33672901614">
				<svg xmlns="http://www.w3.org/2000/svg" class="phone-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
					<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
				</svg>
				06 72 90 16 14
			</a>

			<a class="contact contact-btn" href="/#section-form">Nous contacter</a>

			<!-- Menu Burger de prestige -->
			<button class="burger-menu-btn" class:menu-active={toggle} aria-label="Ouvrir le menu" on:click={toggleMenu}>
				<div class="burger-line line-1"></div>
				<div class="burger-line line-2"></div>
				<div class="burger-line line-3"></div>
			</button>
		</div>
	</div>

	<!-- Menu Déroulant en Verre Dépoli -->
	{#if toggle}
		<div class="dropdown-menu" transition:slide={{ duration: 400 }}>
			<div class="menu-divider"></div>
			<div class="wrapper-links" in:fade={{ delay: 100, duration: 250 }} out:fade={{ duration: 150 }}>
				<a class="link-contact" href="/creation-site-internet">
					<span class="link-number">01.</span> Sites Internet vitrines & e-commerce
				</a>
				<a class="link-contact" href="/creation-application">
					<span class="link-number">02.</span> Applications Web & Mobiles PWA
				</a>
				<a class="link-contact" href="/referencement-seo-sea">
					<span class="link-number">03.</span> Référencement Google SEO / SEA
				</a>
				<a class="link-contact" href="/gestion-media-sociaux">
					<span class="link-number">04.</span> Gestion des Médias Sociaux
				</a>
				<a class="link-contact" href="/creation-design-logos">
					<span class="link-number">05.</span> Design Graphique & Logos
				</a>
				<a class="link-contact" href="/etude-strategie-digitale">
					<span class="link-number">06.</span> Étude de Stratégie Digitale
				</a>
				<a class="link-contact" href="/FAQ">
					<span class="link-number">07.</span> Vos Questions (FAQ)
				</a>
				<a class="link-contact" href="/blog">
					<span class="link-number">08.</span> Actualités & Blog Tech
				</a>
				<a class="link-contact" href="/tarifs">
					<span class="link-number">09.</span> Tarifs & Devis en ligne
				</a>
			</div>
		</div>
	{/if}
</nav>

<style>
	.navigation {
		width: 100%;
		display: flex;
		flex-direction: column;
		background-color: rgba(13, 18, 31, 0.9);
		backdrop-filter: blur(12px);
		-webkit-backdrop-filter: blur(12px);
		border-bottom: 1px solid rgba(255, 255, 255, 0.05);
		z-index: 100;
		position: fixed;
		top: 0;
		left: 0;
	}

	.container__header {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		padding: 15px 2rem;
		max-width: 1300px;
		width: 100%;
		margin: 0 auto;
	}

	.logo {
		display: flex;
		align-items: center;
		justify-content: center;
		text-decoration: none;
		transition: transform 0.3s ease;
	}
	
	.logo:hover {
		transform: scale(1.03);
	}

	.wrapper-logo-burger {
		display: flex;
		flex-direction: row;
		align-items: center;
		gap: 1rem;
	}

	.contact {
		font-family: var(--Geologica), sans-serif;
		font-size: 0.8rem;
		font-weight: 700;
		text-decoration: none;
		text-transform: uppercase;
		letter-spacing: 0.05em;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		height: 40px;
		border-radius: 50px;
		transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
	}

	/* Bouton Téléphone Translucide */
	.phone-btn {
		color: #ffffff;
		border: 1px solid rgba(255, 255, 255, 0.15);
		background: rgba(255, 255, 255, 0.02);
		padding: 0 1.25rem;
		gap: 8px;
	}

	.phone-icon {
		width: 14px;
		height: 14px;
		color: rgba(255, 255, 255, 0.6);
		transition: color 0.3s ease;
	}

	.phone-btn:hover {
		border-color: var(--green, #D6A319);
		color: var(--green, #D6A319);
		background: rgba(214, 163, 25, 0.04);
		box-shadow: 0 4px 15px rgba(214, 163, 25, 0.08);
	}

	.phone-btn:hover .phone-icon {
		color: var(--green, #D6A319);
	}

	/* Bouton Nous contacter Capsule Or */
	.contact-btn {
		background-color: var(--green, #D6A319);
		color: var(--primary);
		padding: 0 1.5rem;
		box-shadow: 0 4px 15px rgba(214, 163, 25, 0.2);
	}

	.contact-btn:hover {
		background-color: #ffffff;
		color: var(--primary);
		box-shadow: 0 6px 20px rgba(255, 255, 255, 0.25);
		transform: translateY(-1px);
	}

	/* Menu Burger Interactif en CSS */
	.burger-menu-btn {
		background: rgba(255, 255, 255, 0.03);
		border: 1px solid rgba(255, 255, 255, 0.06);
		width: 44px;
		height: 44px;
		border-radius: 50%;
		cursor: pointer;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 5px;
		transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
	}

	.burger-menu-btn:hover {
		border-color: var(--green, #D6A319);
		background: rgba(214, 163, 25, 0.08);
		transform: scale(1.05);
	}

	.burger-line {
		width: 18px;
		height: 2px;
		background-color: #ffffff;
		border-radius: 2px;
		transition: all 0.3s ease;
	}

	/* Animation Burger vers une Croix */
	.menu-active .line-1 {
		transform: translateY(7px) rotate(45deg);
		background-color: var(--green, #D6A319);
	}

	.menu-active .line-2 {
		opacity: 0;
	}

	.menu-active .line-3 {
		transform: translateY(-7px) rotate(-45deg);
		background-color: var(--green, #D6A319);
	}

	/* Menu Déroulant */
	.dropdown-menu {
		width: 100%;
		background-color: rgba(13, 18, 31, 0.95);
		backdrop-filter: blur(15px);
		-webkit-backdrop-filter: blur(15px);
		overflow: hidden;
	}

	.menu-divider {
		width: 100%;
		height: 1px;
		background: linear-gradient(90deg, rgba(214, 163, 25, 0) 0%, rgba(214, 163, 25, 0.25) 50%, rgba(214, 163, 25, 0) 100%);
	}

	.wrapper-links {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 1.5rem;
		max-width: 1200px;
		width: 100%;
		margin: 0 auto;
		padding: 3rem 2rem;
	}

	.link-contact {
		font-family: var(--Geologica), sans-serif;
		color: rgba(255, 255, 255, 0.8);
		font-size: 0.95rem;
		font-weight: 500;
		text-decoration: none;
		display: flex;
		align-items: center;
		gap: 10px;
		transition: all 0.25s ease;
		padding: 10px 15px;
		border-radius: 12px;
		background: rgba(255, 255, 255, 0.01);
		border: 1px solid rgba(255, 255, 255, 0.03);
	}

	.link-number {
		color: var(--green, #D6A319);
		font-weight: 700;
		font-size: 0.85rem;
	}

	.link-contact:hover {
		color: #ffffff;
		background: rgba(214, 163, 25, 0.06);
		border-color: rgba(214, 163, 25, 0.2);
		transform: translateY(-2px);
	}

	@media screen and (max-width: 1042px) {
		.wrapper-links {
			grid-template-columns: repeat(2, 1fr);
			gap: 1rem;
			padding: 2rem 1.5rem;
		}
	}

	@media screen and (max-width: 768px) {
		.container__header {
			padding: 12px 1.25rem;
		}

		.phone-btn {
			display: none; /* Masqué sur mobile pour garder la barre ultra-propre */
		}

		.wrapper-links {
			grid-template-columns: 1fr;
			gap: 0.75rem;
			padding: 1.5rem 1.25rem;
		}

		.link-contact {
			font-size: 0.9rem;
			padding: 12px;
		}
	}
</style>
