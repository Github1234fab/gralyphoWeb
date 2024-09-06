<div class="container">
	<div class="bloc imgA">
		<div class="sub-bloc">
			<h1 class="title">Automatisez votre outil digital.</h1>

			<p>
				<i class="fa-solid fa-chart-line icon-difference"></i>
				Votre site E-commerce ou votre Application travaille pour vous 24h/24 et 7j/7. <br />Une
				hyper-présence sur le net qui vous permet d'économisez du temps pour vous consacrer à
				d'autres tâches.
			</p>
			<a href="/Digital-infos" class="lien-bouton">En savoir +</a>
		</div>
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
		/* box-shadow: 0px -10px 20px 2px rgba(0, 0, 0, 0.411); */
	}
	.sub-bloc {
		min-height: 50vh;
		flex-direction: column;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 50px;
		background-color: rgba(38, 38, 42, 0.696);
		box-shadow: 0px -10px 20px 2px rgba(0, 0, 0, 0.411);
	}
	.imgA {
		background-image: url('../Assets/png-gralypho/automatiser.jpg');
		background-repeat: no-repeat;
		background-size: cover;
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
		max-width: 30%;
		padding: 30px;
		border-radius: 10px;
		/* box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.34); */
		margin-bottom: 20px;
	}
	.bloc p {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		font-family: 'Red Hat Display';
		/* margin-top: 30px; */
		text-align: center;
		padding: 40px;
		text-align: center;
		color: white;
		min-width: 50%;
		line-height: 25px;
		/* background-color: rgba(42, 40, 40, 0.73); */
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
</style>
