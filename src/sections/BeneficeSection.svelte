

<div class="container">
	<div class="bloc imgA">
		<div class="sub-bloc">
			<h1 class="title">Automatisez votre outil digital.</h1>
			<i class="fa-solid fa-chart-line icon-difference"></i>
			<p>
				Votre site E-commerce ou votre Application travaille pour vous 24h/24 et 7j/7. <br />Une
				hyper-présence sur le net qui vous permet d'économisez du temps pour vous consacrer à
				d'autres tâches.
			</p>
			<a href="/Digital-infos" class="lien-bouton">En savoir +</a>
		</div>
	</div>
</div>

<div class="bloc imgB">
	<div class="sub-bloc">
		<h1 class="title">Économisez du temps et de l'argent.</h1>
		<i class=" fa-solid fa-hourglass icon-difference"></i>

		<p>
			Améliorez votre productivité grâce au potentiel de votre outil digital. Votre application ou
			votre site internet peut accomplir de mutilples tâches automatisées et ainsi augmenter
			considérablement votre productivité.
		</p>
		<a href="/Digital-infos" class="lien-bouton">En savoir +</a>
	</div>
</div>

<div class="bloc imgC">
	<div class="sub-bloc">
		<h1 class="title">Augmentez votre potentiel de client.</h1>
		<i class="fa-solid fa-sack-dollar icon-difference"></i>
		<p>
			Augmentez vos revenus grâce à une visibilité accrue, grâce à notre expertise SEO, c'est le
			moyen d'obtenir plus de visibilité , plus de prospects, plus de clients et plus d'argent!
		</p>
		<a href="/Digital-infos" class="lien-bouton">En savoir +</a>
	</div>
</div>

<style>
	.container {
		min-height: auto;
		display: flex;
		flex-direction: column;
	}

	.bloc {
		min-height: 70vh;
		flex-direction: column;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 50px;
		background-color: rgb(21, 21, 46);
		box-shadow: 0px -10px 20px 2px rgba(0, 0, 0, 0.411);
	}
	.sub-bloc {
		min-height: 70vh;
		flex-direction: column;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 50px;
		background-color: rgba(38, 38, 42, 0.553);
		box-shadow: 0px -10px 20px 2px rgba(0, 0, 0, 0.411);
	}
	.imgA {
		background-image: url('../Assets/png-gralypho/automatiser.jpg');
		background-repeat: no-repeat;
		background-size: cover;
	}
	.imgB {
		background-image: url('../Assets/png-gralypho/hamac.jpg');
		background-repeat: no-repeat;
		background-size: cover;
		background-position: bottom;
	}
	.imgC {
		background-image: url('../Assets/png-gralypho/client.jpg');
		background-repeat: no-repeat;
		background-size: cover;
		background-position: bottom;
	}

	.title {
		font-family: 'radio canada big';
		padding: 20px;
		text-align: center;
		color: white;
	}
	.icon-difference {
		font-size: 3rem;
		color: white;
		margin-top: 20px;
		/* border: solid white 1px; */
		padding: 30px;
		border-radius: 10px;
		box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.34);
	}
	.bloc p {
		font-family: 'Red Hat Display';
		margin-top: 30px;
		text-align: center;
		padding: 40px;
		text-align: center;
		color: white;
		max-width: 50%;
		line-height: 25px;
		background-color: rgba(128, 128, 128, 0.73);

	}
	.lien-bouton {
		background-color: var(--bleuAcier);
		border: 1px solid white;
		border-radius: 8px;
		padding: 10px 20px;
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

	/* @media screen and (max-width: 900px) {
		.bloc p {
			padding: 30px;
			color: white;
			max-width: 100%;
		}

	
	} */
</style>
