<div class="container">
	<div class="section imageA"></div>
	<div class="bloc">
		<h1 class="title">Automatisez votre outil digital.</h1>
		<i class="fa-solid fa-chart-line icon-difference"></i>
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
	<i class=" fa-solid fa-hourglass icon-difference"></i>

	<p>
		Améliorez votre productivité grâce au potentiel de votre outil digital. Votre application ou
		votre site internet peut accomplir de mutilples tâches automatisées et ainsi augmenter
		considérablement votre productivité.
	</p>
	<a href="/Digital-infos" class="lien-bouton">En savoir +</a>
</div>

<div class="section imageC"></div>
<div class="bloc">
	<h1 class="title">Augmentez votre potentiel de client.</h1>
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
	.imageA {
		background-image: url(../Assets/png-gralypho/23.png);
		background-attachment: fixed;
		background-repeat: no-repeat;
		background-size: cover;
		background-position: center;
	}
	.imageB {
		background-image: url(../Assets/png-gralypho/36.png);
		background-attachment: fixed;
		background-repeat: no-repeat;
		background-size: cover;
		background-position: center;
	}
	.imageC {
		background-image: url(../Assets/png-gralypho/09.png);
		background-attachment: fixed;
		background-repeat: no-repeat;
		background-size: cover;
		background-position: center;
	}
	.bloc {
		min-height: 900px;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		background-color: var(--bgHero);
		box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.34);
	}
	.title {
		font-family: heebo;
		padding: 20px;
		text-align: center;
		color: white;
	}
	.icon-difference {
		font-size: 3rem;
		color: var(--bleuAcier);
		margin-top: 20px;
		border: solid white 1px;
		padding: 30px;
		border-radius: 10px;
		box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.34);
	}
	.bloc p {
		font-family: heebo;
		margin-top: 30px;
		text-align: center;
		padding: 20px;
		text-align: center;
		color: white;
		max-width: 50%;
	}
	.lien-bouton {
		background-color: var(--CTA-jaune);
		border-radius: 8px;
		padding: 20px 14px;
		font-family: 'Red Hat Display';
		color: white;
		font-weight: 800;
		margin-top: 50px;
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

	@media screen and (max-width: 900px) {
		.bloc p {
			padding: 30px;
			color: white;
			max-width: 100%;
		}
	}
</style>
