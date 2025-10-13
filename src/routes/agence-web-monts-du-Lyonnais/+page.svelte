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
		height: 100%;
	}
	.wrapper__text {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 80%;
		margin: 0 auto;
	}
	.title {
		font-family: var(--Geologica);
		font-size: var(--l);
		color: var(--primary);
		font-weight: 900;
		margin-bottom: 10px;
		letter-spacing: -1px;
		text-align: center;
		line-height: 35px;
		margin-top: 50px;
		padding: 25px;
	}
	.subtitle {
		font-family: var(--Geologica);
		font-size: 1.5rem;
		color: var(--primary);
		font-weight: 700;
		letter-spacing: -1px;
		text-align: center;
		line-height: 40px;
		margin-top: 30px;
		padding: 25px;
	}
	.subtitle__h3 {
		font-family: var(--Geologica);
		font-size: 1.3rem;
		color: var(--primary);
		font-weight: 500;
		letter-spacing: -1px;
		text-align: center;
		margin-top: 50px;
	}

	.paragraph {
		font-family: var(--Poppins);
		font-size: var(--m);
		color: var(--primary);
		font-weight: 300;
		letter-spacing: -0.02em;
		text-align: center;
		align-self: center;
		padding: 20px;
	}

	.wrapper__img {
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.img {
		height: 100%;
		width: 500px;
		border-radius: 20px;
		margin-top: 20px;
		box-shadow: 0px 20px 10px 0px rgba(0, 0, 0, 0.269);
	}
</style>
