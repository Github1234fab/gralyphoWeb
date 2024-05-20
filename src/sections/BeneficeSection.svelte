<!-- <script>
	import { onMount } from 'svelte';
	import explosion from '../Assets/png-gralypho/webExplosion.png';

	onMount(() => {
		let cardBenefice = document.querySelectorAll('.wrapper-blocks');
		cardBenefice.forEach((card) => {
			gsap.set(card, {
				x: -980,
				opacity: 0.5
			});
			gsap.to(card, {
				x: 0,
				opacity: 1,
				ease: 'ease-in-out',
				scrollTrigger: {
					trigger: card,
					start: 'top 1300px',
					end: '-100px',
					scrub: 2
				}
			});
		});
	});
</script>

<section class="section-benefices">
	<h1 class="benefice-h1">Avantages</h1>
	<h2 class="benefice-h2">Utilisez tout le potentiel de votre outil Digital.</h2>
	<img
		src={explosion}
		alt="Illustration d'une explosion de medias, avec une fusée qui décolle"
		class="img"
	/>
	<div class="container-benefices">
		<!-- +++++++++++++ -->
<!-- <div class="wrapper-blocks">
			<h1>
				<span class="title-yellow">Automatisez</span> <br />
				votre outil digital. <br /><br /><i class="fa-solid fa-hourglass icon-difference"></i>
			</h1>
			<p>
				Votre site E-commerce ou votre Application travaille pour vous 24h/24 et 7j/7. <br />Une
				hyper-présence sur le net qui vous permet d'économisez du temps pour vous consacrer à
				d'autres tâches.
			</p>
			<a href="/Digital-infos" class="lien-bouton"><button class="button">En savoir +</button></a>
		</div> -->
<!-- +++++++++++++ -->
<!-- <div class="wrapper-blocks">
			<h1>
				<span class="title-yellow">Économisez</span> <br />
				Du temps et de l'argent. <br /><br /><i class="fa-solid fa-chart-line icon-difference"></i>
			</h1>

			<p>
				Améliorez votre productivité grâce au potentiel de votre outil digital. Votre application ou
				votre site internet peut accomplir de mutilples tâches automatisées et ainsi augmenter
				considérablement votre productivité.
			</p>
			<a href="/Digital-infos" class="lien-bouton"><button class="button">En savoir +</button></a>
		</div> -->

<!-- +++++++++++++ -->
<!-- <div class="wrapper-blocks">
			<h1>
				<span class="title-yellow">Augmentez</span><br />
				Votre potentiel client. <br /><br /><i class="fa-solid fa-sack-dollar icon-difference"></i>
			</h1>
			<p>
				Augmentez vos revenus grâce à une visibilité accrue, grâce à notre expertise SEO, c'est le
				moyen d'obtenir plus de visibilité , plus de prospects, plus de clients et plus d'argent!
			</p>
			<a href="/Digital-infos" class="lien-bouton"><button class="button">En savoir +</button></a>
		</div>
	</div>
</section> -->
<!-- 
<style>
	.img {
		width: auto;
		max-height: 300px;
		border-radius: 20px;
		margin-top: 50px;
	}
	.section-benefices {
		display: flex;
		height: auto;
		gap: 0px;
		background-color: var(--bgHero);
		align-items: left;
		justify-content: left;
		flex-direction: column;
		background-color: var(--bgHero);
		/* background-color: var(--greyBg); */
	}
	.container-benefices {
		margin-top: 50px;
		display: flex;
		flex-direction: row;
		height: fit-content;
		align-items: center;
		justify-content: auto;
		margin-bottom: 80px;
		margin-left: 50px;
		margin-right: 50px;
		gap: 15px;
		flex-wrap: wrap;
		perspective: 1500px;
	}
	.container-benefices > * {
		flex: 1 1 25%;
	}
	.wrapper-blocks {
		margin-top: 50px;
		border-radius: 34px 30px 0px 0px;
		display: flex;
		flex-direction: column;
		align-items: left;
		justify-content: left;
		width: 100%;
		min-height: 360px;
		box-shadow: inset 0px 0px 10px 1px var(--bleuAcier);
		padding: 30px;
		margin-bottom: 100px;
	}

	@keyframes turnAround {
		0% {
			transform: rotateY(0deg) rotateX(0deg) translateZ(0);
		}
		25% {
			transform: rotateY(6deg) rotateX(-6deg) translateZ(2px);
		}
		50% {
			transform: rotateY(0deg) rotateX(0deg) translateZ(0);
		}

		75% {
			transform: rotateY(-6deg) rotateX(6deg) translateZ(2px);
		}
		100% {
			transform: rotateY(0deg) rotateX(0deg) translateZ(0);
		}
	}

	.benefice-h1 {
		font-family: Heebo;
		text-transform: uppercase;
		font-size: var(--m);
		color: var(--bleuAcier);
		font-weight: 600;
		margin-bottom: 0px;
		letter-spacing: -0.04em;
		margin-top: 50px;
		text-align: left;
		margin-bottom: 20px;
		margin-left: 100px;
	}
	.benefice-h2 {
		font-family: 'Red Hat Display';
		font-size: var(--xl);
		color: var(--colorC);
		font-weight: 700;
		margin-bottom: 0px;
		letter-spacing: -0.04em;
		text-align: left;
		width: 70%;
		margin-left: 100px;
	}
	.wrapper-blocks h1 {
		color: var(--greyBg);
		font-size: var(--m);
		font-weight: 200;
		font-family: 'Red Hat Display';
		text-align: center;
		margin-top: 20px;
	}
	.title-yellow {
		color: var(--greyBg);
		font-size: var(--l);
		font-weight: 900;
		font-family: 'Red Hat Display';
		text-transform: capitalize;
		text-align: center;
	}
	.wrapper-blocks p {
		font-size: var(--m);
		font-weight: 400;
		color: var(--greyBg);
		font-family: poppins;
		text-align: left;
		padding: 20px;
		margin-top: 20px;
		border-radius: 20px;
	}
	.icon-difference {
		font-weight: 600;
		margin-top: 10px;
		margin-left: 10px;
		color: transparent;
		font-size: 3em;
		-webkit-background-image: linear-gradient(to left, var(--orange) 40%, var(--blue));
		background-image: linear-gradient(to left, var(--orange) 40%, var(--blue));
		-webkit-background-clip: text;
		background-clip: text;
	}
	.lien-bouton {
		text-decoration: none;
		text-align: center;
	}
	.button {
		background-color: var(--CTAHero);
		color: var(--primary);
		font-size: var(--m);
		font-weight: 600;
		font-family: Heebo;
		padding: 10px;
		border-radius: 10px;
		margin-top: 20px;
		cursor: pointer;
		border: none;
		width: 50%;
		margin: 0 auto;
	}
	.button:hover {
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

	@media screen and (max-width: 1205px) {
		.container-benefices {
			/* flex-direction: column; */
			align-items: center;
			justify-content: center;
			margin-left: 0px;
			margin-right: 0px;
			gap: 15px;
			padding: 10px;
		}
		.wrapper-blocks {
			min-height: 500px;
			max-width: 270px;
			margin-left: 0px;
			margin-right: 0px;
			margin-bottom: 0;
		}
		.button {
			margin-top: 30px;
		}
	}
	@media screen and (max-width: 768px) {
		.container-benefices {
			flex-direction: column;
			align-items: center;
			justify-content: center;
			margin-left: 0px;
			margin-right: 0px;
			gap: 0px;
		}
		.img {
			min-width: auto;
			max-height: 200px;
			border-radius: 20px;
			margin-top: 50px;
		}
		.wrapper-blocks {
			min-height: 400px;
			min-width: 300px;
			margin-left: 0px;
			margin-right: 0px;
			margin-bottom: 0;
		}
	}
</style> -->

<div class="container">
	<div class="section imageA"></div>
	<div class="bloc">
		<h1 class="title">Automatisez votre outil digital.</h1>
		<i class="fa-solid fa-hourglass icon-difference"></i>
		<p>
			Votre site E-commerce ou votre Application travaille pour vous 24h/24 et 7j/7. <br />Une
			hyper-présence sur le net qui vous permet d'économisez du temps pour vous consacrer à d'autres
			tâches.
		</p>
		<a href="/Digital-infos" class="lien-bouton">En savoir +</a>
	</div>
</div>

<div class="section imageB"></div>
<div class="bloc">
	<h1 class="title">Économisez du temps et de l'argent.</h1>
	<i class="fa-solid fa-chart-line icon-difference"></i>

	<p>
		Améliorez votre productivité grâce au potentiel de votre outil digital. Votre application ou
		votre site internet peut accomplir de mutilples tâches automatisées et ainsi augmenter
		considérablement votre productivité.
	</p>
	<a href="/Digital-infos" class="lien-bouton">En savoir +</a>
</div>

<div class="section imageC"></div>
<div class="bloc">
	<h1 class="title">Augmentez Votre potentiel client.</h1>
	<i class="fa-solid fa-sack-dollar icon-difference"></i>
	<p>
		Augmentez vos revenus grâce à une visibilité accrue, grâce à notre expertise SEO, c'est le moyen
		d'obtenir plus de visibilité , plus de prospects, plus de clients et plus d'argent!
	</p>
	<a href="/Digital-infos" class="lien-bouton">En savoir +</a>
</div>

<style>
	.container {
		height: 100%;
		display: flex;
		flex-direction: column;
	}

	.section {
		height: 100vh;
		
	}
	.imageA{
background-image: url(../Assets/png-gralypho/1.png);
		background-attachment: fixed;
		background-repeat: no-repeat;
		background-size: cover;
	}
		.imageB{
background-image: url(../Assets/png-gralypho/40.png);
		background-attachment: fixed;
		background-repeat: no-repeat;
		background-size: cover;
	}
		.imageC{
background-image: url(../Assets/png-gralypho/18.png);
		background-attachment: fixed;
		background-repeat: no-repeat;
		background-size: cover;
	}
	.bloc {
		min-height: 900px;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		/* padding: 200px; */
		background-image: linear-gradient(45deg, navy, pink);
		box-shadow: 0px 0px 25px  rgba(0, 0, 0, 0.34);

	}
	.title {
		font-family: heebo;
		padding: 20px;
		text-align: center;
	
	}
	.icon-difference {
		font-size: 3rem;
		color: blue;
		margin-top: 20px;
		border: solid white 1px;
		padding: 20px;
		box-shadow: 0px 0px 25px  rgba(0, 0, 0, 0.34);
	}
	.bloc p {
		font-family: heebo;
		margin-top: 30px;
		text-align: center;
		padding: 20px;
		text-align: center;
	}
	.lien-bouton {
		background-color: var(--CTA);
		border-radius: 8px;
		padding: 20px 14px;
		font-family: heebo;
		color: black;
		font-weight: 500;
		margin-top: 50PX;
		box-shadow: 0px 0px 25px  rgba(0, 0, 0, 0.34);
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
</style>
