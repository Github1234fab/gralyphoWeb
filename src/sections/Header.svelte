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
	<div class="wrapper-logo-burger">
		<a href="/" class="logo"><Logo /></a>

		<!-- <Engrenage/> -->
		<!-- <h1 class="title">Création de site Web & Application</h1> -->
		<button class="burger-menu" aria-label="Menu" on:click={display}>
			<i class="fa-solid fa-bars burger" class:visible={toggle}></i>
		</button>
	</div>

	{#if toggle}
		<span class="span" transition:slide={{ duration: 1900 }}>
			<div in:fade={{ duration: 600 }} out:fade={{ duration: 600 }} class="wrapper-links">
				<a class="link-contact" href="/creation-site-web-lyon">Création de Sites Web</a>
				<a class="link-contact" href="/creation-application-web-lyon">Création d'Applications Web</a>
				<a class="link-contact" href="/Referencement-seo-sea-thurins-web">Référencement - SEO -SEA</a>
				<a class="link-contact" href="/Medias-sociaux-thurins-web">Medias Sociaux</a>
				<a class="link-contact" href="/creation-logos-publicite-communication-thurins-web">Design, Logos et pub</a>
				<a class="link-contact" href="/strategie-communication-web">Communication</a>
				<a class="link-contact" href="/Tarifs-creation-site-web-lyon">Tarifs</a>
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
		z-index: 2;
	
	}

	.navigation h1 span {
		color: rgb(236, 228, 228);
		font-weight: 900;
	}
	.wrapper-logo-burger {
		grid-column: 1/13;
		grid-row: 1;
		display: flex;
		flex-direction: row;
		width: 100%;
		align-items: center;
		justify-content: space-between;
		z-index: 3;
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
	}

	/* .title {
		font-family: var(--Red);
		font-size: 0.8em;
		font-weight: 500;
		color:  var(--whiteGrey);
		margin-top: 0 auto;
		text-align: center;
	} */
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
		z-index: 4;
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
		z-index:4;
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
	}
</style>
