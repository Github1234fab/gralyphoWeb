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

<button class="card-services" on:click={redirectToLink} on:mouseenter={changeToTrue} on:mouseleave={changeToFalse} >
	<div class="wrapper-text-service">
		<!-- <i class="{i} icon"></i> -->
		<img src={i} alt="" class="img icon" class:turn={rotation} />
		<h2>{title}</h2>
		<p class="p">{p}</p>
	</div>
	<a href={lien} class="lien"> En savoir +</a>
</button>

<style>
	/* .img {
		max-width: 80px;
		max-height: 80px;
	} */

	.turn{
		transform: rotate(360deg);
	}
	.card-services {
		transform: translateY(300px);
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		background-color:  transparent;
		box-shadow: 0px 0px 25px 2px rgba(0, 0, 0, 0.152);
		padding: 20px;
		border: 5px solid rgb(238, 238, 238);
		border-radius: 30px;
		min-height: 600px;
		max-width: 400px;
	
	}
	/* .card-services:hover .icon {
		transform: rotateY(360deg);
	} */
	.wrapper-text-service {
		grid-column: 1/12;
		grid-row: 2;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 0px;
		margin-top: 0px;
	}
	.card-services h2 {
		font-family: "radio canada big";
		grid-column: 1/12;
		grid-row: 2;
		font-weight: 700;
		color: var(--primary);
		font-size: var(--lm);
		text-align: center;
		margin-top: 40px;
		margin-left: 10px;
	}
	.p {
		grid-column: 1/12;
		grid-row: 3;
		font-family: Heebo;
		font-weight: 300;
		font-size: var(--m);
		color: var(--primary);
		text-align: justify;
		line-height: 30px;
		margin-top: 30px;
		margin-bottom: 40px;
		margin-left: 10px;
	}
	.lien {
		grid-column: 11/12;
		grid-row: 4;
		min-width: 130px;
		margin-top: 30px;
		margin-bottom: 50px;
		font-weight: 700;
		color: white;
		background-color: var(--CTA-jaune);
		z-index: 44;
		border: 2px solid white;
		padding: 25px;
		border-radius: 10px;
		box-shadow: 0px 0px 10px 2px rgba(45, 45, 45, 0.265);
	}
	.lien:hover {
		animation: bounce 0.4s ease-in-out;
	}
	.icon {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 60px;
		width: 60px;
		grid-column: 2;
		grid-row: 1;
		margin-top: 10px;
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

	@media screen and (min-width: 1400px) and (max-width: 3000px) {
		.card-services {
			min-height: 380px;
		}
	}

	@media screen and (min-width: 1200px) and (max-width: 1400px) {
		.card-services {
			min-height: 450px;
		}
	}

	@media screen and (min-width: 992px) and (max-width: 1200px) {
		.card-services {
			min-height: 420px;

		}
	}

	@media screen and (max-width: 1024px) {
		.card-services {
			min-height: 360px;
		}
		.lien {
			margin-top: -40px;
		}
	}

	@media screen and (min-width: 576px) and (max-width: 767px) {
		.card-services {
			min-height: 450px;
		}
		.lien {
			margin-top: 0px;
				
		}
	}

	@media screen and (min-width: 300px) and (max-width: 576px) {
		.card-services {
			min-height: 250px;
		
		}
		.lien{
			margin-top: 20px;
		}
	}
</style>
