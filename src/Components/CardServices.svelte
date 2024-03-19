<script>
	import { onMount } from 'svelte';
	export let title;
	export let lien;
	export let i;
	export let p;

	function redirectToLink() {
		window.location.href = lien;
	}

	onMount(() => {
		const cards = document.querySelectorAll('.card-services');
		cards.forEach((el) => {
			gsap.to(el, {
				y: 0,
				ease: 'ease-in-out',
				scrub: 5,
				scrollTrigger: {
					trigger: el,
					start: 'top 900px',
					end: '-1000px',
					scrub: 5
				}
			});
		});
	});
</script>

<button class="card-services" on:click={redirectToLink}>
	<i class="{i} icon"></i>
	<h2>{title}</h2>
	<p class="p">{p}</p>
	<a href={lien} class="lien">Lire +</a>
</button>

<style>
	.card-services {
		transform: translateY(300px);
		display: grid;
		grid-template-columns: repeat(12, 1fr);
		grid-row: auto;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		/* background-color: var(--CTA); */
		background-color: white;
		box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.187);
		/* width: 400px; */
		padding: 20px;
		border: none;
		border-radius: 30px;
	}
	.card-services h2 {
		font-family: Heebo;
		grid-column: 1/12;
		grid-row: 2;
		font-family: poppins;
		font-weight: 600;
		color: var(--primary);
		font-size: var(--m);
		/* text-transform: lowercase; */
		text-align: center;
		margin-top: 30px;
	}
	.p {
		grid-column: 1/12;
		grid-row: 3;
		font-family: poppins;
		font-weight: 400;
		font-size: var(--m);
		color: var(--primary);
		text-align: center;
		line-height: 30px;
		margin-top: 30px;
	}
	.lien {
		grid-column: 6/12;
		grid-row: 4;
		margin-top: 30px;
	}
	.icon {
		display: flex;
		align-items: center;
		justify-content: center;
		border: 1px solid var(--jauneB);
		height: 50px;
		width: 50px;
		border-radius: 50%;
		padding: 15px;
		grid-column: 2;
		grid-row: 1;
		margin-top: 10px;
		transition: 0.7s ease-in-out;
		color: var(--jauneB);
		font-size: 2em;
		z-index: 2;
		/* text-shadow: -2px -2px 10px rgba(150, 78, 1, 0.668), 2px 2px 10px rgba(0, 0, 0, 0.5); */
	}
	.icon:hover {
		animation: bounce 0.4s ease-in-out;
	}

	@media screen and (min-width: 1400px) and (max-width: 2500px) {
	}

	@media screen and (min-width: 1200px) and (max-width: 1400px) {
	}

	@media screen and (min-width: 992px) and (max-width: 1200px) {
	}

	@media screen and (min-width: 768px) and (max-width: 992px) {
	}

	@media screen and (min-width: 576px) and (max-width: 767px) {
	}
	@media screen and (min-width: 300px) and (max-width: 576px) {
	}
</style>
