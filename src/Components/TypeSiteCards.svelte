<script>
	export let title;
	export let icon;
	// export let p;
	// export let lien;
	export let lien;
	// export let lien2;
	import { onMount } from 'svelte';
	import Cards from './Cards.svelte';

	onMount(() => {
		const catalog = document.querySelectorAll('.card-type-site');
		catalog.forEach((el) => {
			gsap.to(el, {
				y: 0,
				ease: 'power2',
				scrollTrigger: {
					trigger: el,
					start: 'top 90%',
					end: 'top 50%',
					scrub: 2
				}
			});
		});
	});
</script>

<div class="card-type-site">
	<div class="wrapper-text">
		<div class="wrapper-title-icon">
			<img src={icon} alt="icon pour chaque type de sites" class="icon" />
			<a class="title" href={lien}>{title}</a>
			<!-- <a href={lien2} class="title">{title}</a> -->
			<a href={lien} class="link-decouvrir">Découvrir</a>
		</div>
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
		min-height: 20%;
		max-height: 40%;
		min-width: 200px;
		max-width: 40%;
		border-radius: 20px;
		border: 1px solid var(--whiteGrey);
		background-color: transparent;
		box-shadow: 0px 0px 14px rgba(0, 0, 0, 0.659);
	}
	.wrapper-title-icon {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 25px;
		background-color: transparent;
		padding: 10px;
		border-radius: 10%;
		margin-top: 20px;
		
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
		font-family: var(--Geologica);
		font-weight: 600;
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
		font-weight: 100;
		border-radius: 6px;
		text-align: center;
		padding: 10px;
		margin-left: auto;
		margin-right: auto;
		margin-top: 0px;
		margin-bottom: 10px;
		font-size: 0.9rem;
		/* border: 1px solid var(--whiteGrey); */
		background-color: var(--cta);
		box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.273);
	}
	.link-decouvrir:hover {
		animation: bounce 0.4s ease-in-out;
	}
	.icon {
		height: 35px;
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

	@media screen and (max-width: 768px) {
		.link-decouvrir {
			padding: 15px;
			width: auto;
			font-size: 0.8rem;
		}
	}
</style>
