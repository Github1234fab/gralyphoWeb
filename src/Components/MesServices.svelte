<script>
	import Smartphone from '../Assets/smartphoneTech.jpeg';
	import Atome from '../Assets/atome.png';
	import Design from '../assets/design.png';
	import Flex from '../assets/flex.png';
	import Rocket from '../assets/rocket.png';
	import Seo from '../assets/seo.png';
	import ButtonCta from './ButtonCTA.svelte';
</script>

<main>
	<h2 class="title">Pourquoi choisir nos services ?</h2>
	<h3 class="subtitle-h2">
		Nous concevons des sites internet sur mesure, en utilisant Svelte et Strapi, en CMS Headless.
		<br />Ces technologies modernes vous offrent une rapidité inégalée et vous permettent de vous
		distinguer de votre concurrence.
		<br /> Nous développons des applications PWA en utilisant Firebase, pour le backend, ce qui accèlere
		considérablement le délai de développement.
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
			</div>
			<div class="wrapper__sectionByThree">
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
			<h2 class="title">En savoir plus sur notre agence ?</h2>
			<a class="button" href="/creation-site-application-Lyon">En savoir +</a>
		</div>
	</div>
</main>

<style>
	main {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		background-color: var(--primary);
		padding: 50px;
		gap: 40px;
	}

	.container {
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.wrapper__sectionByThree {
		display: flex;
		gap: 50px;
	}
	.wrapper__cards {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 60px;
		margin-left: 20px;
		padding: 50px;
		border-radius: 20px;
	}
	.wrapper__cards-card {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 10px;
		max-width: 300px;
		border-radius: 20px;
		padding: 40px;
		border: 1px solid grey;
	}

	.title {
		font-size: 2rem;
		font-weight: 600;
		color: var(--whiteGrey);
		margin-top: 20px;
		font-family: var(--Red);
		padding: 0px;
	}
	.subtitle-h2 {
		font-size: 1rem;
		font-weight: 400;
		color: rgb(202, 202, 202);
		margin-top: 20px;
		font-family: var(--Red);
		padding: 0px;
	}
	.subtitle-h3 {
		font-size: 1.5rem;
		font-weight: 700;
		color: var(--cta);
		background: linear-gradient(90deg, rgb(107, 107, 213), rgb(203, 187, 232));
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		text-align: center;
		font-family: var(--Geologica);
		padding: 0px;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		/* text-transform: uppercase; */
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
		background-color: var(--cta);
		color: var(--whiteGrey);
		padding: 10px 20px;
		border-radius: 10px;
		text-decoration: none;
		font-family: var(--Red);
		max-width: 50%;
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
	}
</style>
