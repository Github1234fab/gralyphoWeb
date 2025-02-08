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
    // Applique l'animation à chaque élément avec la classe ".icon"
    document.querySelectorAll(".icon").forEach((el) => {
        gsap.to(el, {
            scale: 1, // La valeur cible de l'échelle
             ease: "power1.inOut",
	  duration: 3,
            scrollTrigger: {
                trigger: el,
              start: "top 80%", // Débute lorsque le haut de l'élément atteint 80% du viewport
                end: "top 50%",  // Termine lorsque le haut de l'élément atteint 50% du viewport
                scrub: 2,     
            },
        });
    });
});

onMount(() => {
    // Applique l'animation à chaque élément avec la classe ".icon"
    document.querySelectorAll(".card-services").forEach((el) => {
        gsap.to(el, {
            x: 0, // La valeur cible de l'échelle
          ease: "power1.inOut",
	  duration: 1,
            scrollTrigger: {
                trigger: el,
              start: "top 80%", // Débute lorsque le haut de l'élément atteint 80% du viewport
                end: "top 50%",  // Termine lorsque le haut de l'élément atteint 50% du viewport
                scrub: 1,     
            },
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
		opacity: 1;
		flex: 1;
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: transparent;
		padding: 40px;
		min-height: 500px;
		max-width: 400px;
		border-top: 1px solid var(--whiteGrey);
		border-bottom: none;
		border-right: none;
		border-left: none;
		transform: translateX(200px);
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
		rotate: 0;
		width: 50px;
		height: 50px;
		transform: scale(0);
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
			max-height: 50px;
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
