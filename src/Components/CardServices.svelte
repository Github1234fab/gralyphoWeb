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
	
	<div class="wrapper-text-service">
		<i class="{i} icon"></i>
		<h2>{title}</h2>
		<p class="p">{p}</p>
	</div>
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
		background-color: white;
		box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.187);
		padding: 20px;
		border: none;
		border-radius: 30px;
		min-height: 600px;
	}
	.wrapper-text-service {
		grid-column: 1/12;
		grid-row: 2;
		display: flex;
		flex-direction: column;
		align-items: left;
		justify-content: left;
		margin-top: 20px;
	}
	.card-services h2 {
		font-family: Heebo;
		grid-column: 1/12;
		grid-row: 2;
		font-weight: 700;
		color: var(--primary);
		font-size: var(--l);
		text-align: left;
		margin-top: 30px;
	}
	.p {
		grid-column: 1/12;
		grid-row: 3;
		font-family: poppins;
		font-weight: 400;
		font-size: var(--m);
		color: var(--primary);
		text-align: left;
		line-height: 30px;
		margin-top: 10px;
	}
	.lien {
		grid-column: 11;
		grid-row: 4;
		margin-top: 30px;
		font-weight: 700;
	}
	.icon {
		display: flex;
		align-items: center;
		justify-content: center;
		border: 1px solid var(--jauneB);
		height: 50px;
		width: 50px;
		border-radius: 50%;
		/* padding: 20px; */
		grid-column: 2;
		grid-row: 1;
		margin-top: 10px;
		transition: 0.7s ease-in-out;
		color: var(--jauneB);
		font-size: 2em;
		z-index: 2;
		text-shadow: 0px 0px 3px rgba(0, 0, 0, 0.18);
	}
	.icon:hover {
		animation: bounce 0.4s ease-in-out;
	}

	@media screen and (min-width: 1400px) and (max-width: 3000px) {
			.card-services {
			min-height: 400px;
		}
	}
	
	

	@media screen and (min-width: 1200px) and (max-width: 1400px) {
			.card-services {
			min-height: 450px;
		}
	}

	@media screen and (min-width: 992px) and (max-width: 1200px) {
			.card-services {
			min-height: 500px;
		}
	}

	@media screen and (min-width: 768px) and (max-width: 992px) {
			.card-services {
			min-height: 430px;
		}
	}
	

	@media screen and (min-width: 576px) and (max-width: 767px) {
			.card-services {
			min-height: 450px;
		}
	}
	
	@media screen and (min-width: 300px) and (max-width: 576px) {
		.card-services {
			min-height: 250px;
		}
	}
</style>
