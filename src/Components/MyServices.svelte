<script>
	import Atome from '../Assets/atome.png';
	import Design from '../Assets/design.png';
	import Flex from '../Assets/flex.png';
	import Rocket from '../Assets/rocket.png';
	import Seo from '../Assets/png-gralypho/seo3.png';
</script>

<main class="main">
	<h2 class="title">Pourquoi choisir nos services ?</h2>
	<h3 class="subtitle-h2">
		Parce que nous apportons des solutions modernes à votre entreprise en répondant à 100% à vos
		besoins.
		<br />Nous concevons des sites internet sur Wordpress pour des sites internet livrés sous 3
		jours en nous appuyant sur notre expertise et celle de l'IA. <br /> Nos tarifs sont très
		élaborés pour que vous puissiez obtenir le meilleur rapidement, à des prix très doux et
		raisonnables.
		<br />Nos technologies modernes vous offrent une rapidité inégalée et vous permettent de vous
		distinguer de votre concurrence.
		<br /> Nous développons également des applications natives et des applications PWA, plus légère
		et moins chères. <br /> Notre audit sur vos besoins spécifiques est 100% gratuit et nous saurons
		à l'issu, vous proposer un outil qui vous apportera entière satisfaction.
		<br /> en matière de gestion, d'organsiation, de communication et d'administration.
	</h3>
	<div class="container">
		<div class="wrapper__cards">
			<div class="wrapper__sectionByThree">
				<div class="wrapper__cards-card">
					<img class="logo" src={Rocket} alt="fusée" />
					<h3 class="subtitle-h3">Performance</h3>
					<h4 class="subtitle-h4">Un code léger pour un chargement ultra-rapide</h4>
				</div>

				<div class="wrapper__cards-card">
					<img class="logo" src={Flex} alt="une personne danse et représente la flexibilté" />
					<h3 class="subtitle-h3">Flexibilité</h3>
					<h4 class="subtitle-h4">Une gestion de contenu simple et efficace via Strapi</h4>
				</div>

				<div class="wrapper__cards-card">
					<img class="logo" src={Seo} alt="illustration sur le SEO" />
					<h3 class="subtitle-h3">SEO audit</h3>
					<h4 class="subtitle-h4">Nous sommes experts en stratégie SEO.</h4>
				</div>

				<div class="wrapper__cards-card">
					<img class="logo" src={Design} alt="une plume colorée" />
					<h3 class="subtitle-h3">Design moderne</h3>
					<h4 class="subtitle-h4">Une expérience utilisateur <br />fluide et intuitive</h4>
				</div>

				<div class="wrapper__cards-card">
					<img class="logo" src={Atome} alt="des atomes" />
					<h3 class="subtitle-h3">Adaptabilité</h3>
					<h4 class="subtitle-h4">Technologies choisies pour vos besoins spécifiques</h4>
				</div>
			</div>
			<div class="wrapper__cta">
				<h2 class="sutitle">En savoir plus sur notre agence ?</h2>
				<a class="button" href="/creation-site-application-Lyon">En savoir +</a>
			</div>
		</div>
	</div>
</main>

<style>
	.main {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 50px;
		gap: 40px;
		height: auto;
		background-image: url('../Assets/bird.jpeg');
		background-attachment: fixed;
		background-size: cover;
		background-position: center;
		background-repeat: no-repeat;
		z-index: 0;
		position: relative;
	}
	.main::after {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-image: linear-gradient(
			to bottom,
			rgba(0, 0, 0, 1),
			rgba(0, 0, 0, 0.5),
			rgba(0, 0, 0, 0.2),
			rgba(0, 0, 0, 0.1),
			rgba(0, 0, 0, 0.05),
			rgba(0, 0, 0, 0.01),
			rgba(0, 0, 0, 0)
		);
		z-index: 1;
	}

	.container {
		display: flex;
		justify-content: center;
		align-items: center;
		height: auto;
		z-index: 2;
	}
	.wrapper__sectionByThree {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		justify-content: center;
		gap: 50px;
		height: auto;
	}
	.wrapper__cards {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 50px;
		padding: 20px;
		border-radius: 20px;
		width: 100%;
		height: auto;
	}
	.wrapper__cards-card {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-around;
		gap: 10px;
		min-width: 500px;
		height: auto;
		border-radius: 20px;
		padding: 30px;
		border: 1px solid rgb(69, 69, 69);
		background-color: var(--primary);
	}
	.wrapper__cta {
		display: flex;
		flex-direction: column;
		gap: 30px;
	}

	.title {
		font-size: 4rem;
		font-weight: 600;
		color: var(--whiteGrey);
		margin-top: 20px;
		font-family: var(--Red);
		padding: 0px;
		text-align: center;
		z-index: 2;
	}

	.sutitle {
		font-size: 3rem;
		font-weight: 600;
		color: var(--whiteGrey);
		margin-top: 20px;
		font-family: var(--Red);
		padding: 0px;
		text-align: center;
		z-index: 2;
	}
	.subtitle-h2 {
		font-size: 1rem;
		font-weight: 500;
		line-height: 35px;
		color: rgb(249, 249, 249);
		margin-top: 20px;
		font-family: var(--Red);
		padding: 0px;
		text-align: center;
		z-index: 2;
	}
	.subtitle-h3 {
		font-size: 1.5rem;
		font-weight: 700;
		color: var(--whiteGrey);
		text-align: center;
		font-family: var(--Geologica);
		padding: 0px;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
	.subtitle-h4 {
		font-size: 1rem;
		font-weight: 100;
		color: var(--whiteGrey);
		text-align: center;
		font-family: var(--Geologica);
		padding: 0px;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		width: 100px;
		height: 100px;
		border-radius: 50%;
		background-color: rgb(43, 43, 93);
	}
	.button {
		align-self: center;
		background-color: var(--green);
		color: var(--primary);
		padding: 10px 20px;
		border-radius: 10px;
		text-decoration: none;
		font-family: var(--Red);
		font-weight: 700;
		max-width: 120px;
		text-align: center;
	}
	.button:hover {
		background-color: var(--primary);
		border: 1px solid grey;
		color: var(--whiteGrey);
		transition: 0.4s ease-in-out;
	}

	@media screen and (max-width: 768px) {
		.wrapper__sectionByThree {
			display: flex;
			flex-direction: column;
			gap: 50px;
		}
		.wrapper__cards-card {
			min-width: 80%;
			height: auto;
		}
	}
</style>
