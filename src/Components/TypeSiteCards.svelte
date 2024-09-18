<script>
	export let title;
	export let icon;
	// export let p;
	// export let lien;
	export let lien;
	export let lien2;
	import { onMount } from 'svelte';
	import Cards from './Cards.svelte';

	onMount(() => {
		const catalog = document.querySelectorAll('.card-type-site');

		catalog.forEach((el) => {
			gsap.to(el, {
				y: 0,
				ease: 'power4',
				scrollTrigger: {
					trigger: el,
					start: 'top 900px',
					end: '-200px',
					scrub: 5
				}
			});
		});
	});
</script>

<div class="card-type-site">
	<div class="wrapper-text">
		<div class="wrapper-title-icon">
			<a href={lien2} class="title">{title}</a>
			<a href={lien}><img src={icon} alt="icon de types de sites" class="icon" /></a>
		</div>
		<!-- <p>
      {p}
    </p> -->
		<a href={lien} class="link-decouvrir">Découvrir</a>
	</div>
</div>

<style>
	.card-type-site {
		transform: translateY(200px);
		display: flex;
		flex-direction: column;
		border-radius: 3px;
		color: var(--whiteGrey);
		justify-content: center;
		align-items: center;
		height: fit-content;
		min-height: 200px;
		min-width: 200px;
		border-radius: 20px;
		background-color: var(--primary);
	}
	.wrapper-title-icon {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 15px;
		background-color: var(--secondary);
		padding: 10px;
		border-radius: 10%;
	}
	.wrapper-text {
		display: flex;
		flex-direction: column;
		gap: 20px;
		align-items: left;
		max-height: 500px;
		padding: 20px;
	}
	.title {
		font-family: poppins;
		font-weight: 300;
		font-size: var(--m);
		border-radius: 8px;
		text-decoration: none;
		color: var(--whiteGrey);
		letter-spacing: -1px;
	}
	.title:hover {
		animation: bounce 0.4s ease-in-out;
	}

	.link-decouvrir {
		text-decoration: none;
		color: var(--whiteGrey);
		font-family: 'radio canada big';
		font-weight: 400;
		border-radius: 6px;
		text-align: center;
		padding: 10px;
		margin-left: auto;
		margin-right: auto;
		margin-top: 30px;
		margin-bottom: 10px;
		font-size: 1rem;
		border: 1px solid var(--whiteGrey);
	}
	.link-decouvrir:hover {
		animation: bounce 0.4s ease-in-out;
	}
	.icon {
		height: 20px;
	
	
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

	@media screen and (max-width: 3000px) {
		.card-type-site {
			max-width: 600px;
			min-height: 200px;
			height: fit-content;
		}
	}

	@media screen and (max-width: 1116px) {
		.card-type-site {
			width: calc(45% - 10px);
			min-height: 200px;
			height: fit-content;
		}
	}

	@media screen and (max-width: 768px) {
		.card-type-site {
			/* width: calc(90% - 20px); */
			height: fit-content;
			min-width: 300px;
		}
		.link-decouvrir {
			padding: 13px;
			width: auto;
			font-size: 1.4em;
		}
	}
</style>
