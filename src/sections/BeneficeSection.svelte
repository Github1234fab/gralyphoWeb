<script>
	import { onMount } from 'svelte';
</script>

<section class="section-benefices">
	<h1 class="benefice-h1">Avantages</h1>
	<h2 class="benefice-h2">Utiliser tout tout le potentiel de votre outil Digital.</h2>
	<div class="container-benefices">
		<!-- +++++++++++++ -->
		<div class="wrapper-blocks">
			<h1>
				<span class="title-yellow">Automatisez</span> <br />
				votre outil digital. <i class="fa-solid fa-hourglass icon-difference"></i>
			</h1>
			<p>
				Votre site E-commerce ou votre Application travaille pour vous 24h/24 et 7j/7. Une
				hyper-présence sur le net qui vous permet d'économisez du temps pour vous consacrer à
				d'autres tâches.
			</p>
			<button class="button">En savoir +</button>
		</div>
		<!-- +++++++++++++ -->
		<div class="wrapper-blocks">
			<h1>
				<span class="title-yellow">Économisez</span> <br />
				Du temps et de l'argent. <i class="fa-solid fa-chart-line icon-difference"></i>
			</h1>

			<p>
				Améliorez votre productivité grâce au potentiel de votre outil digital. Votre application ou
				votre site inetrnet peut accomplir de mutilples tâches automatisées et ainsi augmenter
				considérablement votre productivité.
			</p>
			<button class="button">En savoir +</button>
		</div>

		<!-- +++++++++++++ -->
		<div class="wrapper-blocks">
			<h1>
				<span class="title-yellow">Augmentez</span><br />
				Votre potentiel client. <i class="fa-solid fa-sack-dollar icon-difference"></i>
			</h1>
			<p>
				Augmentez vos revenus grâce à une visibilité acquise grâce à notre expertise SEO. + de
				visibilité + de prospects + plus de clients = plus d'argent!
			</p>
			<button class="button">En savoir +</button>
		</div>
	</div>
</section>

<style>
	.section-benefices {
		display: flex;
		height: auto;
		gap: 0px;
		background-color: var(--bgHero);
		align-items: center;
		justify-content: center;
		flex-direction: column;
		background-color: var(--greyBg);
	}
	.container-benefices {
		margin-top: 100px;
		display: flex;
		flex-direction: row;
		height: fit-content;
		align-items: center;
		justify-content: auto;
		margin-left: 50px;
		margin-right: 50px;
		gap: 10px;
		flex-wrap: wrap;
	}
	.container-benefices > * {
		flex: 1 1 25%;
	}
	.wrapper-blocks {
		display: flex;
		flex-direction: column;
		align-items: left;
		justify-content: left;
		width: 100%;
		min-height: 360px;
		box-shadow: 0px 0px 10px rgba(127, 124, 124, 0.464);
		padding: 20px;
		margin-bottom: 100px;
		background-color: rgba(255, 255, 255, 0.912);
	}

	.benefice-h1 {
		font-family: Heebo;
		text-transform: uppercase;
		font-size: var(--m);
		color: var(--jauneB);
		font-weight: 600;
		margin-bottom: 0px;
		letter-spacing: -0.04em;
		margin-top: 50px;
		margin-left: -50px;
	}
	.benefice-h2 {
		margin-top: 30px;
		font-family: epilogue;
		font-size: var(--l);
		color: var(--primary);
		font-weight: 600;
		margin-bottom: 0px;
		letter-spacing: -0.04em;
		margin-left: 10px;
	}
	.wrapper-blocks h1 {
		color: var(--primary);
		font-size: var(--m);
		font-weight: 500;
		font-family: poppins;
		text-align: center;
	}
	.title-yellow {
		color: var(--primary);
		font-size: var(--l);
		font-weight: 900;
		font-family: Heebo;
		text-transform: uppercase;
		text-align: center;
	}
	.wrapper-blocks p {
		font-size: var(--m);
		font-weight: 400;
		color: rgb(210, 210, 210);
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
		font-size: 1.2em;
		-webkit-background-image: linear-gradient(to left, var(--orange) 40%, var(--blue));
		background-image: linear-gradient(to left, var(--orange) 40%, var(--blue));
		-webkit-background-clip: text;
		background-clip: text;
	}
	.button {
		background-color: var(--CTAHero);
		color: white;
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

	@media screen and (max-width: 1205px) {
		.container-benefices {
			flex-direction: column;
			align-items: center;
			justify-content: center;
			margin-left: 0px;
			margin-right: 0px;
			gap: 20px;
		}
		.wrapper-blocks {
			width: 80%;
			min-height: 300px;
			margin-left: 0px;
			margin-right: 0px;
			margin-bottom: 0;
		}
	}
</style>
