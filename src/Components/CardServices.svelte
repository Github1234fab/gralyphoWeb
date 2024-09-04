<script>
	import { onMount } from 'svelte';
	export let title;
	export let lien;
	export let i;
	export let p;

	function redirectToLink() {
		window.location.href = lien;
	}

	let rotation = false;

	function changeToTrue() {
		rotation = true;
	}
	function changeToFalse() {
		rotation = false;
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
					start: 'top 1000px',
					end: '-1000px',
					scrub: 5
				}
			});
		});
	});
</script>

<button
	class="card-services"
	on:click={redirectToLink}
	on:mouseenter={changeToTrue}
	on:mouseleave={changeToFalse}
>
	<div class="wrapper-text-service">
		<div class="wrapper-icon">
			<img src={i} alt="Icon description de service" class="img icon" class:turn={rotation} />
		</div>
		<h2>{title}</h2>
		<p class="p">{p}</p>
		<a href={lien} class="lien"> En savoir +</a>
	</div>
</button>

<style>
	button{
		border: none;
	}
	.card-services {
		transform: translateY(300px);
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: transparent;
		box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.285);
		padding: 20px;
		border-radius: 12px;
		min-height: 500px;
	}
	.wrapper-icon {
		background-color: transparent;
		width: 100px;
		height: 100px;
		display: flex;
		align-items: center;
		justify-content: center;
		margin-top: 10px;
		padding: 20px;
		border-radius: 50%;
		/* border: 1px grey solid; */
		
	}

	.turn {
		transform: rotate(360deg);
	}

	.wrapper-text-service {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 30px;
	}
	.card-services h2 {
		font-family: 'DM Sans';
		font-weight: 700;
		color: white;
		font-size: 1.4rem;
		text-align: center;
		letter-spacing: -0.4px;
	}
	.p {
		font-family: Heebo;
		font-weight: 300;
		font-size: var(--m);
		color: white;
		text-align: center;
		line-height: 30px;
			min-height: 150px;
	}
	.lien {
		font-family: "red hat display";
		border: 1px solid white;
		min-width: 130px;
		font-weight: 500;
		color: white;
		background-color: var(--bleuAcier);
		z-index: 44;
		padding: 10px 20px;
		border-radius: 10px;
		box-shadow: 0px 0px 10px  rgba(45, 45, 45, 0.265);
	}
	.lien:hover {
		animation: bounce 0.4s ease-in-out;
	}
	.icon {
		display: flex;
		align-self: center;
		justify-self: center;
		margin: auto;
		height: 40px;
		width: 40px;
		grid-column: 2;
		grid-row: 1;
		transition: 0.7s ease-in-out;
		color: var(--CTA2);
		z-index: 2;
	}
	.icon:hover {
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

	
</style>
