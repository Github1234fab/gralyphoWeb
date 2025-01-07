<script>
	import { onMount } from 'svelte';
	export let title;
	export let lien;
	export let p;
	export let icon;

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
				
				opacity: 1,
				ease: 'ease-in-out',
				scrollTrigger: {
					trigger: el,
					start: 'top 95%',
					scrub: true
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
			<img class="icon" src={icon} alt="" />
		</div>
		<h2>{title}</h2>
		<p class="p">{p}</p>
		<a href={lien} class="lien"> En savoir +</a>
	</div>
</button>

<style>
	.card-services {
		/* transform: translateY(400px) ; */
		opacity: 0;
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: transparent;
		padding: 40px;
		min-height: 400px;
		border-top: 1px solid var(--whiteGrey);
		border-bottom: none;
		border-right: none;
		border-left: none;
	}

	.wrapper-text-service {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 30px;
	}
	.card-services h2 {
		font-family: var(--Geologica);
		font-weight: 600;
		color: var(--whiteGrey);
		font-size: 1.4rem;
		text-align: center;
		letter-spacing: -0.4px;
	}
	.p {
		font-family: var(--Poppins);
		font-weight: 300;
		font-size: var(--m);
		color: var(--whiteGrey);
		text-align: center;
		line-height: 30px;
		min-height: 150px;
	}
	.icon {
		width: 50px;
		height: 50px;
	}
	.lien {
		font-family: 'red hat display';
		border: 3px solid white;
		min-width: 130px;
		font-weight: 500;
		color: var(--whiteGrey);
		z-index: 44;
		padding: 13px 20px;
		border-radius: 10px;
		margin-top: 10px;
	}
	.lien:hover {
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

	@media screen and (max-width: 1440px) {
		.card-services {
			min-height: 370px;
		}
		.p {
			font-family: Heebo;
			font-weight: 00;
			font-size: var(--m);
			color: var(--whiteGrey);
			text-align: center;
			line-height: 30px;
			min-height: 100px;
			max-width: 200px;
		}
	}
</style>
