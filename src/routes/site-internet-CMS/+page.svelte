<script>
	import Header from "../../sections/Header.svelte";
	import CMS from '../../Assets/CMS.jpeg';
	import ButtonCta from '../../Components/ButtonCTA.svelte';
</script>

<Header />

<main>
	<img class="image" src={CMS} alt="" />
	<h1 class="title">Pourquoi un CMS Headless <br /> <span>pour votre site web ?</span></h1>

	<h2 class="subtitle">
		Vous cherchez une solution moderne pour gérer votre site web sans compromis sur la performance ?
	</h2>
	<h3 class="subtitle-h3">
		Avec un CMS headless, vous bénéficiez de la puissance d’un back-office intuitif pour gérer vos
		contenus, tout en offrant un site ultra-rapide, sécurisé et évolutif.
	</h3>

	<h2 class="subtitle">Qu’est-ce qu’un CMS headless ?</h2>

	<h3 class="subtitle-h3">
		Un CMS headless fonctionne différemment d’un CMS classique comme WordPress ou Wix. Au lieu de
		lier directement l’administration du contenu au front-end, il sépare ces deux aspects :
		<br /> Le CMS (comme Strapi) permet de gérer facilement vos contenus. Le front-end (développé avec
		Svelte) récupère ces contenus via une API pour les afficher de manière optimisée.
	</h3>

	<h2 class="subtitle">Pourquoi opter pour un CMS headless ?</h2>
	<h3 class="subtitle-h3">
		✅ Performance maximale : Votre site est ultra-rapide grâce à un front-end optimisé, sans les
		lourdeurs d’un CMS traditionnel.
		<br /> ✅ Flexibilité totale : Personnalisation complète du design et des fonctionnalités, sans
		être limité par un thème ou des plugins.
		<br /> ✅ Sécurité renforcée : Moins d’exposition aux attaques et aux failles liées aux CMS
		classiques.
		<br /> ✅ Évolutivité : Votre site peut grandir avec vos besoins, sans être bridé par un système
		figé.
		<br /> ✅ Facilité de gestion : Vous modifiez vos contenus via une interface simple, sans
		toucher au code.</h3>

		<h2 class="subtitle">Concrètement, comment ça fonctionne</h2>
		<h3 class="subtitle-h3">
			1️⃣ Création du design sur-mesure : Un site rapide, moderne et adapté à votre identité.
			<br />2️⃣ Mise en place du CMS headless : Une interface simple pour gérer vos contenus (textes,
			images, articles…)
			<br />3️⃣ Connexion API : Votre site récupère dynamiquement les informations sans compromis sur
			la vitesse.
			<br />4️⃣ Déploiement et maintenance : Vous gardez le contrôle sur votre contenu, sans
			contraintes techniques.
        </h3>

			<h2 class="subtitle">Un CMS headless est-il fait pour vous ?</h2>
			<h3 class="subtitle-h3">
				Si vous souhaitez un site ultra-rapide et optimisé pour le SEO, facile à gérer sans toucher
				au code, sécurisé et évolutif
				<br />Alors, le CMS headless est la solution idéale pour vous !
			</h3>
			<h2 class="subtitle">Envie d’un site performant et moderne ? <br>Parlons-en !</h2>
			<ButtonCta />
	
</main>

<style>
	main {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 50px;
		padding: 30px;
        height: 100%;
		background: linear-gradient(
			to top,
			var(--whiteGrey) 80%,
			var(--cta) 30%,
			var(--cta) 40%,
			var(--primary) 80%
		);
	}
	.image {
		max-width: 40%;
		min-width: 40%;
		z-index: 2;
		border-radius: 20px;
		box-shadow: 0px 20px 10px 0px rgba(0, 0, 0, 0.269);
	}
	.title {
		font-family: var(--Geologica);
		letter-spacing: -1px;
		color: var(--primary);
		font-weight: 700;
		font-size: 2rem;
		text-align: center;
		margin-top: 30px;
        
	}
	.title span {
		color: var(--cta);
	}

	.subtitle {
		font-family: var(--Red);
		font-weight: 700;
		color: var(--primary);
		font-size: 1.5rem;
		text-align: center;
        width: 100%
	}
	.subtitle-h3 {
		font-family: var(--Red);
		font-weight: 400;
		font-size: 1rem;
	}
	

    @media screen and (max-width: 768px) {
        main {
		background: linear-gradient(
			to top,
			var(--whiteGrey) 94%,
			var(--cta) 30%,
			var(--cta) 40%,
			var(--primary) 80%
		);
	}
        .image {
            max-width: 100%;
            min-width: 100%;
        }
        .title {
            width: 100%
        }
        .subtitle{
            width: 100%
        }
    }
</style>
