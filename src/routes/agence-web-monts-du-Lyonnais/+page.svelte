<script>
	import FaqLink from '../../Components/FaqLink.svelte';
	import Header from '../../sections/Header.svelte';
	import picture from '../../Assets/montsDuLyonnais.jpeg';
	import Links from '../../Components/LinkSiteApplication.svelte';
	import Button from '../../Components/Cta-component.svelte';
</script>


<svelte:head>
    <title>Gralypho - Agence Web des Monts du Lyonnais | Création site sur mesure & SEO</title>
    <meta name="description" content="Gralypho est une agence Web indépendante au cœur des Monts du Lyonnais, spécialisée dans la création de sites internet sur mesure, développement d'applications web, et expertise SEO locale." />
    <meta name="keywords" content="Agence web Monts du Lyonnais, création site internet, application web, SEO local, référencement naturel, agence digitale régionale" />
    <meta name="author" content="Gralypho" />
    <meta name="robots" content="index, follow" />
    <meta property="og:title" content="Gralypho - Agence Web des Monts du Lyonnais" />
    <meta property="og:description" content="Entreprise locale proposant des sites sur mesure, applications web performantes, et référencement SEO pour les entreprises des Monts du Lyonnais." />
    <meta property="og:image" content="{picture}" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://gralypho.com/agence-web-monts-du-Lyonnais" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="Gralypho - Agence Web des Monts du Lyonnais" />
    <meta name="twitter:description" content="Sites internet personnalisés, applications web sur mesure et référencement SEO local dans les Monts du Lyonnais." />
    <meta name="twitter:image" content="{picture}" />
    <link rel="canonical" href="https://gralypho.com/agence-web-monts-du-Lyonnais" />
</svelte:head>

<Header />



<div class="container">
	<h1 class="title">Agence Web des Monts du Lyonnais</h1>
	<div class="wrapper__img">
		<img src={picture} alt="panorama des monts du Lyonnais" class="img" />
	</div>
	<div class="wrapper__text">
		<h2 class="subtitle">Gralypho, l'agence Web nationale, régionale, mais aussi hyper-locale !!</h2>

		<h3 class="subtitle__h3">Allier efficacité et cadre privilégié</h3>
		<p class="paragraph">Gralypho est une agence web indépendante, implantée au cœur des Monts du Lyonnais. Mais ce qui nous distingue, ce n’est pas seulement notre ancrage local : C’est notre capacité à concevoir des sites internet rapides, efficaces et parfaitement référencés, pour les entreprises, associations et indépendants du territoire.</p>

		<h3 class="subtitle__h3">Création de sites web sur mesure</h3>
		<p class="paragraph">Nous ne travaillons pas avec des modèles préfabriqués. Chaque site est pensé sur-mesure, en fonction de vos objectifs, de vos contenus, et de vos utilisateurs. Design personnalisé Responsive (adapté mobile/tablette) Autonomie de mise à jour Hébergement et nom de domaine compris si besoin Un site web, ce n’est pas un simple “plus” : C’est souvent le premier contact entre vous et vos futurs clients. Faisons en sorte qu’il soit clair, engageant et rassurant.</p>
		<Button text="Découvrir" link="/creation-site-internet" />

		<h3 class="subtitle__h3">Conception d’applications web</h3>
		<p class="paragraph">Vous avez un besoin plus spécifique qu’un simple site vitrine ? Gralypho conçoit aussi des applications web sur-mesure : outils internes, espaces membres, plateformes de réservation, formulaires complexes… Nous développons des solutions légères, performantes et évolutives.</p>
		<Button text="Découvrir" link="/creation-application" />
		
		<h3 class="subtitle__h3">Une vraie expertise SEO (référencement naturel)</h3>
		<p class="paragraph">Avoir un beau site, c’est bien. Mais s’il n’est pas visible sur Google, il ne sert à rien. Chez Gralypho, nous intégrons le SEO dès la conception : Structure optimisée Balises et contenu bien hiérarchisés Performances techniques (vitesse, accessibilité) Accompagnement rédactionnel Suivi de positionnement Notre objectif : vous positionner devant vos concurrents locaux sur les recherches qui comptent vraiment.</p>
		<Button text="Découvrir" link="/referencement-seo-sea" />
		
		<h3 class="subtitle__h3">Une agence de proximité, dans les Monts du Lyonnais</h3>
		<p class="paragraph">Nous travaillons à distance, mais nous croyons à la force du lien local. Que vous soyez situé à Saint-Martin-en-Haut, Mornant, Yzeron, Thurins, Vaugneray, Brignais ou dans l’Ouest Lyonnais, nous pouvons : venir vous rencontrer vous proposer un accompagnement clair, humain et progressif vous aider à prendre en main votre présence web</p>
		<Button text="Contactez-nous" link="/#section-form" />
	</div>
	<Links />
	<div class="wrapper__faqLink">
		<FaqLink />
		<a href="/FAQ">FAQ</a>
	</div>
</div>

<style>
	.container {
		background: radial-gradient(circle at 50% 0%, #151e36 0%, var(--primary) 70%);
		min-height: 100vh;
		padding-top: 8rem;
		padding-bottom: 4rem;
		box-sizing: border-box;
	}
	.wrapper__text {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 90%;
		max-width: 800px;
		margin: 3rem auto;
		padding: 2.5rem;
		background: rgba(255, 255, 255, 0.02);
		border: 1px solid rgba(255, 255, 255, 0.05);
		border-radius: 24px;
		backdrop-filter: blur(12px);
		-webkit-backdrop-filter: blur(12px);
		box-shadow: 0 30px 60px rgba(0, 0, 0, 0.3);
		box-sizing: border-box;
	}
	.title {
		font-family: var(--Geologica);
		font-size: clamp(1.8rem, 4vw, 2.8rem);
		color: #ffffff;
		font-weight: 900;
		margin-bottom: 10px;
		letter-spacing: -1px;
		text-align: center;
		line-height: 1.2;
		margin-top: 20px;
		padding: 25px;
	}
	.subtitle {
		font-family: var(--Geologica);
		font-size: clamp(1.2rem, 3vw, 1.8rem);
		color: #ffffff;
		font-weight: 700;
		letter-spacing: -1px;
		text-align: center;
		line-height: 1.4;
		margin-top: 20px;
		padding: 15px;
	}
	.subtitle__h3 {
		font-family: var(--Geologica);
		font-size: clamp(1.05rem, 2vw, 1.35rem);
		color: var(--green, #d6a319);
		font-weight: 600;
		letter-spacing: -0.01em;
		text-align: center;
		margin-top: 35px;
	}

	.paragraph {
		font-family: var(--Poppins);
		font-size: 0.95rem;
		color: rgba(255, 255, 255, 0.8);
		font-weight: 300;
		letter-spacing: -0.01em;
		text-align: center;
		align-self: center;
		line-height: 1.6;
		padding: 15px 0;
	}

	.wrapper__img {
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.img {
		height: auto;
		width: 100%;
		max-width: 500px;
		border-radius: 20px;
		margin-top: 20px;
		border: 1px solid rgba(255, 255, 255, 0.1);
		box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.5);
	}
</style>
