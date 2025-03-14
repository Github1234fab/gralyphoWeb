<script>
	import Compteur from '../Assets/logoGralypho2.jpeg';
	import CTA from '../Components/ButtonCTA.svelte';
	import Firebase from '../Assets/firebase.png';
	import Svelte from '../Assets/Svelte_Logo.svg.png';
	import Wix from '../Assets/wixLogo.png';
	import Strapi from '../Assets/Strapi.monogram.logo.png';
	import Shopify from '../Assets/Shopify.png';
	import WP from '../Assets/WP.png';
</script>

<main>
	<div class="wrapper__text">
		<h1>Une agence Web experte, <br>au coeur des monts!</h1>
		<h2>N'ayez pas peur, nos tarifs sont doux ! <br>
			Parce que nous sommes développeurs experts et certifiés, <br> nous savons adaptés nos technologies à votre budget et à vos besoins.</h2>
		<br />
		<CTA />
		<img class="compteur" src={Compteur} alt="Un compteur, futuriste et technologique" />
	</div>
	<div class="wrapper__text2">
		<h3>
			Nous concevons des sites internet et des applications depuis 10 ans. <br> Nous saurons choisir la technologie qui vous correspondra le mieux !

		</h3>
		<div class="wrapper__logos">
			<a href="https://firebase.google.com/" target="_blank"
				>Firebase<img class="Firebase logo" src={Firebase} alt="logo de wordpress" /></a
			>
			<a href="https://svelte.dev/" target="_blank"
				>Svelte<img class="svelte logo" src={Svelte} alt="logo de svelte" /></a
			>
			<a href="https://strapi.io/" target="_blank"
				>Strapi<img class="Strapi logo" src={Strapi} alt="Logo de Strapi" /></a
			>
			<a href="https://webflow.com/" target="_blank"
				>Webflow<img
					class="webflow logo"
					src="https://cdn.prod.website-files.com/5f15081919fdf673994ab5fd/651f24a499bc8356ba844e0c_Webflow-Logo.svg"
					alt="Logo de Webflow"
				/></a
			>
			<a href="https://www.shopify.com/fr" target="_blank"
				>Shopify<img class="Shopify logo" src={Shopify} alt="Logo de Shopify" /></a
			>
			<a href="https://fr.wix.com/website/templates" target="_blank"
				>Wordpress<img class="Wix logo" src={Wix} alt="Logo de Wix" /></a
			>
			<a href="https://fr.wix.com/website/templates" target="_blank"
				>Wix<img class="Wordpress logo" src={WP} alt="Logo de Wix" /></a
			>
		</div>
	</div>
</main>

<style>
	main {
		background: linear-gradient(
			to top,
			var(--whiteGrey) 40%,
			var(--cta) 30%,
			var(--cta) 40%,
			var(--primary) 80%
		);
		height: auto;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		align-items: center;
		padding: 20px;
		gap: 0px;
	}
	.wrapper__logos {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
		gap: 20px;
		margin: 50px 0px;
	}
	.wrapper__text {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 30px;
		height: 100%;
	}

	.wrapper__text h1 {
		font-family: var(--Geologica);
		letter-spacing: -4px;
		color: var(--whiteGrey);
		font-weight: 700;
		font-size: 6rem;
		text-align: center;
		margin-top: 10px;
	}

	.wrapper__text h2 {
		font-family: var(--Red);
		font-weight: 400;
		letter-spacing: 0px;
		color: rgb(231, 231, 231);
		font-size: 1.5rem;
		text-align: center;
	}
	/* .wrapper__text h2 span {
		font-weight: 700;
	} */
	.wrapper__text2 {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		margin-top: 70px;
		gap: 30px;
		height: 100%;
	}
	.wrapper__text2 h3 {
		font-family: var(--Geologica);
		font-weight: 300;
		font-size: 1rem;
		text-align: center;
		line-height: 30px;
		margin-bottom: 0px;
		color: var(--primary);
	}

	.compteur {
		height: 600px;
		width: 600px;
		border-radius: 10px;
		box-shadow: 0px 30px 20px 0px rgba(0, 0, 0, 0.75);
		margin-top: 70px;
	}
	.Firebase,
	.svelte,
	.webflow,
	.Wix,
	.Strapi,
	.Shopify, .Wordpress {
		height: 100px;
		width: 100px;
		box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.294);
		padding: 20px;
		border-radius: 20px;
		margin-bottom: 30px;
	}
	a {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		font-family: var(--Red);
		color: rgba(128, 128, 128, 0.538);
		font-size: 0.7rem;
		gap: 5px;
	}
	.logo {
		border: none;
	}
	.logo:hover {
		rotate: 360deg;
		transition: 0.3s ease-in-out;
	}

	@media screen and (max-width: 768px) {
		main {
			background: linear-gradient(
				to top,
				var(--whiteGrey) 64%,
				var(--cta) 30%,
				var(--cta) 40%,
				var(--primary) 80%
			);
			gap: 0px;
		}
		.wrapper__text {
			gap: 10px;
		}
		.wrapper__text2 {
			margin-top: 70px;
			gap: 10px;
		}
		.wrapper__text h1 {
			font-size: 2.3rem;
			letter-spacing: -1px;
		}
		.wrapper__text h2 {
			font-size: 1rem;
		}
		.wrapper__text2 h3 {
			font-size: 1rem;
		}
		.compteur {
			height: 200px;
			width: 200px;
		}
		.Firebase,
		.svelte,
		.webflow,
		.Wix,
		.Strapi,
		.Shopify, 
		.Wordpress{
			height: 75px;
			width: 75px;
		}
		.wrapper__logos {
			gap: 5px;
		}
		.compteur {
		height: 250px;
		width: 250px;
		border-radius: 10px;
		box-shadow: 0px 30px 20px 0px rgba(0, 0, 0, 0.75);
		margin-top: 30px;
	}
	}
</style>
