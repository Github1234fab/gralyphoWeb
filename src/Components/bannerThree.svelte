<script>
	import { onMount } from 'svelte';

	onMount(() => {
		// Applique l'animation à chaque élément avec la classe ".icon"

		gsap.to('.sub-bloc', {
			opacity: 1, // La valeur cible de l'échelle
			x: 0,
			ease: 'power1.inOut',
			duration: 3,
			scrollTrigger: {
				trigger: '.sub-bloc',
				start: 'top 80%', // Débute lorsque le haut de l'élément atteint 80% du viewport
				end: 'top 50%', // Termine lorsque le haut de l'élément atteint 50% du viewport
				scrub: 2
			}
		});
	});
</script>

<div class="container">
	<!-- <div class="bloc"></div> -->
	<div class="sub-bloc">
		<h1 class="title">Augmentez votre potentiel de client.</h1>
		<p>
			<i class="fa-solid fa-sack-dollar icon-difference"></i>
			Augmentez vos revenus grâce à une visibilité accrue, grâce à notre expertise SEO. <br /> C'est
			le moyen d'obtenir plus de visibilité , plus de prospects, plus de clients et plus d'argent!
		</p>
		<a href="/referencement-seo-sea" class="lien-bouton">En savoir +</a>
	</div>
</div>

<style>
	.container {
		height: 800px;
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: var(--cta);
	}

	/* .bloc {
		flex: 1;
		height: 100%;
		width: 100%;
		flex-direction: column;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 0px;
		background-image: url('../Assets/png-gralypho/coiffeur.jpg');
		background-size: cover;
		background-position: center;
		background-repeat: no-repeat;

		z-index: 0;
		position: relative;
	} */

	.sub-bloc {
		flex: 1;
		height: 100%;
		width: 100%;
		flex-direction: column;
		display: flex;
		align-items: center;
		justify-content: center;
		z-index: 3;
		gap: 50px;
		background: var(--gradient);
		opacity: 0;
		transform: translateX(400px);
	}
	/* .bloc::after {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, 0.548);
		z-index: 2;
	} */

	.title {
		font-family: var(--Geologica);
		font-weight: 900;
		padding: 20px;
		text-align: center;
		color: white;
	}
	.icon-difference {
		font-size: 3rem;
		color: white;
		max-width: 30%;
		border-radius: 10px;
		/* box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.34); */
		margin-bottom: 20px;
	}
	.sub-bloc p {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		font-family: 'Red Hat Display';
		/* margin-top: 30px; */
		text-align: center;
		text-align: center;
		color: white;
		min-width: 50%;
		line-height: 25px;
		/* background-color: rgba(42, 40, 40, 0.73); */
	}
	.lien-bouton {
		background-color: var(--cta);
		border: 1px solid white;
		border-radius: 8px;
		padding: 15px 20px;
		font-family: 'Red Hat Display';
		color: white;
		font-weight: 600;
		margin-top: 50px;
		font-size: 1rem;
		box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.34);
	}
	.lien-bouton:hover {
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
		.container {
			height: 800px;
			display: flex;
			align-items: center;
			justify-content: center;
			flex-direction: column;
		}
		.sub-bloc p{
			width: 90%;
		}
	}
</style>
