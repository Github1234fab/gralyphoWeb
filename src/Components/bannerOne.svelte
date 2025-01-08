<div class="container">
	<div class="bloc">
		<h1 class="title">Un outil digital, c'est comme un robot <br>qui travaille pour vous <span>24/7 </span>!</h1>
		<div class="wrapper">
			<div class="disc2"></div>
		</div>

		<p>
			Votre site E-commerce ou votre Application est présente sur le Web 24h/24 et 7j/7. <br />Cette
			hyper-présence sur le net peut vous permettre de générer des revenus supplémentaires, <br />de
			fidéliser davantage de clients et d'effectuer des tâches à votre place.
		</p>
		<a href="/Digital-infos" class="lien-bouton">En savoir +</a>
	</div>
</div>

<style>
	.container {
		min-height: auto;
		display: flex;
		flex-direction: column;
		/* background: url('../Assets/bgtwo.png'); */
		background: var(--gradient);
		z-index: 0;	
	}
	.bloc {
		/* min-height: 70vh; */
		flex-direction: column;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 50px;
		z-index: 0;
		gap: 70px;
		margin-top: 30px;
		margin-bottom: 30px;
	}

	.bloc::after {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		/* width: 100%;
		height: 100%; */
		/* background: linear-gradient(
			to top,
			rgba(239, 164, 164, 0.469),
			rgba(0, 0, 0, 0.696) 50%,
			rgba(230, 175, 175, 0.49)
		); */
		z-index: 0;
	}
	.wrapper {
		display: flex;
		align-items: center;
		justify-content: center;
		margin-bottom: 30px;
		min-width: 50%;
		margin: 0 auto;
		position: relative;
	}

	.disc2::before {
		display: flex;
		align-items: center;
		justify-content: center;
		min-height: 200px;
		min-width: 200px;
		border-radius: 50%;
		background-color: var(--green);
		z-index: 10;
		content: '\f042';
		position: absolute;
		left: -50px;
		top: -10px;
		font-size: 5rem;
		color: white;
		font-family: 'Font Awesome 5 Free';
	}
	.disc2 {
		display: flex;
		align-items: center;
		justify-content: center;
		font-family: var(--Radio);
		color: var(--whiteGrey);
		font-weight: 600;
		font-size: 1.2rem;
		background-color: var(--primary);
		min-height: 230px;
		min-width: 230px;
		border-radius: 50%;
		opacity: 0.8;
		z-index: 12;
		position: relative;
		margin-left: 70px;
	}
	/* .disc2::after {
		content: '';
		position: absolute;
		background-image: url('../Assets/png-gralypho/automatiser.jpg');
		background-repeat: no-repeat;
		background-size: cover;
		min-height: 200px;
		min-width: 200px;
		border-radius: 50%;
		z-index: 0;
		left: 150px;
	} */

	.title {
		font-family: var(--Geologica);
		font-weight: 900;
		padding: 0px;
		text-align: center;
		color: white;
		font-size: var(--l);
		text-align: center;
	}
	.title span {
		color: var(--green);
	}
	
	.bloc p {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		font-family: var(--Poppins);
		font-size: var(--m);
		color: var(--primary);
		font-weight: 300;
		margin-top: 30px;
		text-align: justify;
		hyphens: auto;
		color: white;
		max-width: 70%;
		line-height:1.5rem;
	
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

	@media (max-width: 768px) {
		.wrapper {
			width: 100%;
		}	
		.bloc p{
			max-width: 100%;
			line-height: 30px;
		}
	}
</style>

