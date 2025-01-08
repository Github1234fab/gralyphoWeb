<div class="container">
	<div class="bloc imgC">
		<div class="sub-bloc">
			<h1 class="title">Augmentez votre potentiel de client.</h1>

			<p>
				<i class="fa-solid fa-sack-dollar icon-difference"></i>
				Augmentez vos revenus grâce à une visibilité accrue, grâce à notre expertise SEO. <br /> C'est
				le moyen d'obtenir plus de visibilité , plus de prospects, plus de clients et plus d'argent!
			</p>
			<a href="/Referencement-seo-sea-thurins-web" class="lien-bouton">En savoir +</a>
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
		min-height: 90vh;
		flex-direction: column;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 50px;
		background-image: url('../Assets/png-gralypho/coiffeur.jpg');
		background-size: cover;
		background-position: center;
		background-repeat: no-repeat;
		
		/* box-shadow: 0px -10px 20px 2px rgba(0, 0, 0, 0.411); */
		z-index: 0;
	position: relative;	
	}

	.sub-bloc {
		min-height: 90vh;
		min-width: 100vw;
		flex-direction: column;
		display: flex;
		align-items: center;
		justify-content: center;
		z-index: 3;
		gap: 50px;
	}
	.bloc::after {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, 0.548);
		z-index: 2;
	}

	.imgC {
		background-image: url('../Assets/png-gralypho/coiffeur.jpg');
		background-repeat: no-repeat;
		background-size: cover;
		background-position: center;
	}

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
	.bloc p {
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
		.sub-bloc {
			margin-top: 170px;
		}

		.imgC {
			background-repeat: no-repeat;
			background-size: cover;
			background-position: 40% center;
		}
		p{
			max-width: 70%;
		}
	}
</style>
