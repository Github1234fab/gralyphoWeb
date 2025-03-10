<script>
	import burger from '../Assets/png-gralypho/burger-menu-right-svgrepo-com.svg';
	import { fade, slide } from 'svelte/transition';
	import Logo from '../Components/Gralypho.svelte';
	import Engrenage from '../Components/Engrenages.svelte';

	let toggle = false;
	function display() {
		toggle = !toggle;
		console.log(4);
	}
</script>

<nav class="navigation">
	<div class="container__header">
		<a href="/" class="logo"><Logo /></a>
		<div class="wrapper-logo-burger">
			<a class="contact form" href="/#section-form">Nous contacter</a>
			<a class="contact" href="tel:+33672901614" type="telephone">06 72 90 16 14</a>

			<button class="burger-menu" aria-label="Menu" on:click={display}>
				<i class="fa-solid fa-bars burger {toggle ? 'visible' : ''}"></i>
			</button>
		</div>
	</div>

	{#if toggle}
		<span class="span" transition:slide={{ duration: 800 }}>
			<div in:fade={{ duration: 600 }} out:fade={{ duration: 600 }} class="wrapper-links">
				<a class="link-contact" href="/creation-site-internet">Sites Web</a>
				<a class="link-contact" href="/creation-application">Applications Web</a>
				<a class="link-contact" href="/referencement-seo-sea">Référencement</a>
				<a class="link-contact" href="/gestion-media-sociaux">Medias Sociaux</a>
				<a class="link-contact" href="/creation-design-logos">Design, Logos et pub</a>
				<a class="link-contact" href="/etude-strategie-digitale">Stratégie digitale</a>
				<a class="link-contact" href="/FAQ">FAQ</a>
				<a class="link-contact" href="/tarifs">Tarifs</a>
			</div>
		</span>
	{/if}
</nav>

<style>
	.navigation {
		grid-template-columns: repeat(12, 1fr);
		grid-template-rows: auto;
		width: 100%;
		display: flex;
		flex-direction: column;
		padding: 10px;
		font-size: 16px;
		background-color: transparent;
		background-color: var(--primary);
		border-bottom: 1px solid rgba(128, 128, 128, 0.278);
		z-index: 2;
	}
	.container__header {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
	}
	.form {
		background-color: var(--cta);
	}
	.navigation h1 span {
		color: rgb(236, 228, 228);
		font-weight: 900;
	}
	.wrapper-logo-burger {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		z-index: 3;
		gap: 10px;
	}
	.contact {
		border: 1px solid var(--whiteGrey);
		padding: 10px 20px;
		border-radius: 20px;
		color: white;
		font-family: var(--Red);
	}
	.contact:hover {
		background-color: var(--whiteGrey);
		color: var(--primary);
	}
	.contact:active {
		background-color: var(--primary);
		color: var(--whiteGrey);
	}
	.logo {
		grid-column: 2;
		grid-row: 1;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		margin-top: 10px;
		margin-bottom: 5px;
		margin-left: 20px;
	}

	.span {
		grid-column: 2/12;
		grid-row: 2;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.wrapper-links {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 26px;
		opacity: 1;
		margin-top: 50px;
		margin-bottom: 40px;
		z-index: 2;
	}

	.link-contact {
		color: var(--whiteGrey);
		font-size: 1em;
		font-weight: 400;
		text-decoration: none;
		transition: 0.4s ease-in-out;
		z-index: 2;
		font-family: 'Red Hat Display';
	}
	a:hover {
		transition: 0.4s ease-in-out;
		color: grey;
	}
	.burger-menu {
		background-color: transparent;
		border: none;
		grid-column: 6;
		grid-row: 1;
		padding: 10px;
		z-index: 4;
		margin-right: 5px;
		z-index: 100;
	}
	.burger-menu:hover {
		animation: bounce 0.4s ease-in-out;
	}
	.burger {
		font-size: 2em;
		border: none;
		color: var(--whiteGrey);
		/* border: 1px solid var(--whiteGrey); */
		border-radius: 50%;
		padding: 14px;
		max-width: 100px;
		max-height: 70px;
		z-index: 4;
	}
	.burger:hover {
		animation: bounce 0.4s ease-in-out;
	}
	@keyframes bounce {
		0% {
			transform: scale(1) translateY(-2px);
		}
		25% {
			transform: scale(1) translateY(3px);
		}
		50% {
			transform: scale(1) translateY(-1px);
		}
		75% {
			transform: scale(1) translateY(2px);
		}
		100% {
			transform: scale(1) translateY(0);
		}
	}

	@media screen and (max-width: 768px) {
		.wrapper-links {
			flex-direction: column;
			justify-content: center;
			align-items: center;
			gap: 10px;
		}

		.navigation {
			font-size: 16px;
		}
		.link-contact {
			font-size: 1.1em;
		}
		.burger-menu {
			z-index: 2;
		}
		.contact{
			display: none;
		}
	}
</style>