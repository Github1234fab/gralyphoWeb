<script>
	import Atome from '../Assets/atome.png';
	import Design from '../Assets/designLogo.png';
	import Flex from '../Assets/flexLogo.png';
	import Rocket from '../Assets/rocketLogo.png';
	import Seo from '../Assets/seoLogo.png';
	import Button from '../Components/ButtonCTA.svelte';
</script>

<main class="main">
	<div class="wrapper__paragraph">
		<h2 class="title">Création de sites internet professionnels, applications web et référencement SEO</h2>
		<br />
		<h3 class="title-2">Votre site internet professionnel, livré sous trois jours pour 1399 euros.</h3>
		<p class="subtitle">
			Nous avons conçu une formule pour répondre aux besoins des professionnels. <br /> Nous concevons un site web professionnel, livré sous 3 jours maximum, pour un tarif de 1399 euros ttc. <br /> Votre futur site web contient les 5 pages traditionnelles que contient un site internet, à savoir les pages "Accueil", "À propos", "Services", "Réalisations", et "Contact". <br />
			Nous procédons à l'intégration de votre contenu (texte, image, etc) et optimisons votre site web pour le référencement sur internet (SEO). <br /> Nous déployons pour finir votre site internet sur le Web en réalisant tous les tests nécessaires. <br /> C'est notre produit d'appel et celui qui remporte un grand succès auprès des indépendants, commerçants, TPE et PME. Vous obtenez un site <a href="/creation-site-internet" class="maillage">internet professionnel</a> en 3 jours, pour un prix
			défiant toute concurrence. <br /><br />
			<Button />
		</p>
		<br />
		<h3 class="title-2">Vous souhaitez un site internet qui vous ressemble, originale et unique ?</h3>
		<p class="subtitle">
			Nous vous proposons la création de votre <a href="/creation-application" class="maillage">site internet sur mesure (Custom)</a>, pour renforcer votre identité sur le web et créer une empreinte unique. Vous possédez une marque, vous êtes indépendant, créatif ou artiste ? Pour vous, faire la différence commence par l'originalité ? Alors, optez pour un site entièrement créé sur mesure. Nous vous proposons une liberté totale de création pour un résultat maximal et un visuel impactant. Nous
			sommes développeurs experts et notre capacité à coder nous permet de créer absolument ce que vous souhaitez. Nos tarifs débutent à partir de 5999 euros pour un site internet Custom qui fera la différence, à coup sûr.
			<br /><br />
			<Button />
		</p>
		<br />
		<h3 class="title-2">Landing page et site e-commerce</h3>
		<p class="subtitle">
			Vous souhaitez présenter votre activité, diffuser vos évènements, votre actualité ou vendre vos produits ? <br />
			Nous vous offrons la possibilté de créer votre site web pour vous faire connaître auprès du plus grand nombre. Sous forme de Landing Page (page unique condensée) ou sous forme d'un site e-commerce complet, nous sommes à vos côté pour définir votre stratégie et vous permettre d'accéder à une visibilité maximale sur le web. Nos tarifs pour une landing page débutent à partir de 799€ et 3999€ pour un site e-commerce.
			<br /><br /><Button />
		</p>
		<br />
		<h3 class="title-2">Une application web et mobile, pour vous simplifier la vie et celle de vos clients ?</h3>
		<p class="subtitle">
			Vous le savez, l'application est incontournable, mais ce que vous pensez savoir aussi, c'est qu'elle est chère. Et bien détrompez-vous. Pourquoi ? Parce qu'il existe l'application PWA ! L'application PWA est plus facile à programmer, plus rapide à développer et moins chère à créer. Elle est aussi plus rapide à charger et plus légère qu'une application classique. En effet, l'application PWA est une application web qui se comporte comme une application mobile. Elle est accessible depuis
			n'importe quel appareil (mobile, tablette, ordinateur) et ne nécessite pas de téléchargement. Nos tarifs pour une application PWA débute à partir de 6999 euros. Pour une application native IOS et Android, nos tarifs débutent à partir de 9999€.
			<br /><br /><Button />
		</p>
		<br />
		<h3 class="title-2">
			Vous souhaitez un référencement naturel 100% optimisé? <br />
			Vous souhaitez une parfaite visibilité sur le web pour augmenter votre trafic et vos ventes ?
		</h3>
		<p class="subtitle">
			Bienvenue dans le monde du SEO ! LE SEO (search engine optimization) regroupe aujourd'hui l'ensemble des techniques qui permettent à un site internet de se positionner en première page des moteurs de recherche. le SEO nécessite une grande expertise tant il regorge de technique interdépendantes. Il s'agit en premier lieu d'auditer votre site internet pour en comprendre la structure et la stratégie. Ensuite il s'agit de réaliser un audit technique du site, d'en découvrir les atouts et les
			inconvénients, puis d'améliorer les différents points relevés pour atteindre les objectifs fixés en terme de trafic, de vente et de visibilité. <br /><br />
			<Button />
		</p>
	</div>
	<div class="container">
		<div class="wrapper__cards">
			<div class="wrapper__cards-card">
				<img class="logo" src={Rocket} alt="fusée" />
				<h3 class="subtitle-h3">Performance</h3>
				<h4 class="subtitle-h4">Le meilleur des technologies pour des sites internet et des applications ultra-légères <br /> et ultra-rapides</h4>
			</div>

			<div class="wrapper__cards-card">
				<img class="logo" src={Flex} alt="une personne danse et représente la flexibilté" />
				<h3 class="subtitle-h3">Flexibilité</h3>
				<h4 class="subtitle-h4">Site internet avec ou sans gestion de contenu. <br /> Avec ou sans forfait de maintenance</h4>
			</div>

			<div class="wrapper__cards-card">
				<img class="logo" src={Seo} alt="illustration sur le SEO" />
				<h3 class="subtitle-h3">100% SEO</h3>
				<h4 class="subtitle-h4">Nous sommes experts en stratégie SEO et nous vous aidons à augmentez vos ventes <br /> en augmentant de manière franche le trafic sur votre site.</h4>
			</div>

			<div class="wrapper__cards-card">
				<img class="logo" src={Design} alt="une plume colorée" />
				<h3 class="subtitle-h3">Design et accessibilité</h3>
				<h4 class="subtitle-h4">Nos designs sont soignés, nous adorons l'UX et l'UI et mettons un point d"honneur à respecter les normes W3C.</h4>
			</div>
		</div>
	</div>
	<div class="wrapper__cta">
		<h2 class="call-to-action-txt">En savoir plus sur notre agence Web ?</h2>
		<a class="button" href="/creation-site-application-Lyon">En savoir +</a>
	</div>
</main>

<style>
	.main {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 30px;
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
		background-image: linear-gradient(to bottom, var(--primary) 50%, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.01), rgba(0, 0, 0, 0));
		z-index: 1;
	}

	.container {
		display: flex;
		justify-content: center;
		align-items: center;
		height: auto;
		z-index: 2;
	}

	.wrapper__cards {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-wrap: wrap;
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
		width: 20%;
		min-height: 400px;
		border-radius: 20px;
		padding: 30px;
		background-color: rgba(2, 5, 52, 0.289);
		backdrop-filter: blur(10px);
		-webkit-backdrop-filter: blur(10px);
	}
	.wrapper__cta {
		margin-top: 50px;
		display: flex;
		flex-direction: column;
		gap: 30px;
		background-color: var(--primary);
		padding: 60px;
		border-radius: 20px;
		box-shadow: 30px 20px 10px 2px rgba(76, 76, 76, 0.35);
	}
	.wrapper__paragraph {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 20px;
		height: auto;
		width: 100%;
		padding: 0px 20px;
	}

	.title {
		font-size: 2rem;
		font-weight: bolder;
		color: var(--whiteGrey);
		margin-top: 40px;
		font-family: var(--Red);
		padding: 0px;
		text-align: center;
		z-index: 2;
		width: 80%;
	}

	.title-2 {
		font-size: 1.4rem;
		font-weight: 500;
		color: var(--whiteGrey);
		margin-top: 0px;
		font-family: var(--Red);
		padding: 0px;
		text-align: justify;
		z-index: 2;
		width: 80%;
	}

	.subtitle {
		font-size: 1rem;
		font-weight: 400;
		line-height: 2rem;
		color: var(--whiteGrey);
		margin-top: 0px;
		font-family: var(--Red);
		padding: 0px;
		text-align: justify;
		z-index: 2;
		width: 80%;
	}

	.subtitle-h3 {
		font-size: 1.5rem;
		font-weight: 900;
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
	.maillage {
		color: var(--green);
		text-decoration: none;
		font-size: 1rem;
		font-weight: 600;
		letter-spacing: 0px;
	}

	.call-to-action-txt {
		font-size: 1.5rem;
		font-weight: 700;
		color: var(--whiteGrey);
		text-align: center;
		font-family: var(--Red);
		padding: 0px;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		width: 50px;
		height: 50px;
		/* border-radius: 50%; */
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
		max-width: 150px;
		text-align: center;
	}
	.button:hover {
		background-color: var(--primary);
		border: 1px solid grey;
		color: var(--whiteGrey);
		transition: 0.4s ease-in-out;
	}

	@media screen and (max-width: 1264px) {
		.wrapper__cards-card {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: space-around;
			gap: 10px;
			min-width: 70%;
			min-height: auto;
			border-radius: 20px;
			padding: 30px;
			background-color: rgba(2, 5, 52, 0.289);
			backdrop-filter: blur(10px);
			-webkit-backdrop-filter: blur(10px);
		}
	}
	@media screen and (max-width: 768px) {
		.main {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 10px;
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
		background-image: linear-gradient(to bottom, var(--primary) 70%, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.01), rgba(0, 0, 0, 0));
		z-index: 1;
	}

		.title {
			width: 100%;
			text-align: center;
		}

		.title-2 {
			width: 100%;
			text-align: center;
		}
		.subtitle {
			width: 100%;
			text-align: center;
		}
		.wrapper__cards-card {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: space-around;
			gap: 10px;
			width: 100%;
			min-height: auto;
			border-radius: 20px;
			padding: 30px;
			background-color: rgba(2, 5, 52, 0.289);
			backdrop-filter: blur(10px);
			-webkit-backdrop-filter: blur(10px);
		}
	}
</style>
