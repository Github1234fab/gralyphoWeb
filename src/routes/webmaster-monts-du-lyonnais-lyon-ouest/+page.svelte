<script>
	import FaqLink from '../../Components/FaqLink.svelte';
	import Header from '../../sections/Header.svelte';
	import picture from '../../Assets/webmaster.jpeg';
	import Links from '../../Components/LinkSiteApplication.svelte';
	import Button from '../../Components/Cta-component.svelte';
</script>

<Header />
<div class="container">
	<h1 class="title">Webmaster des monts du Lyonnais - Agence Gralypho Web</h1>
	<h2>Lyon-Ouest</h2>
	<div class="wrapper__img">
		<img src={picture} alt="panorama des monts du Lyonnais" class="img" />
	</div>
	<div class="wrapper__text">
		<h2 class="subtitle">Un Webmaster expert du Web pour vos sites internet</h2>
		<h3 class="subtitle__h3">Votre partenaire digital pour attirer plus de clients</h3>
		<p class="paragraph">Bienvenue sur la page dédiée à notre service de webmastering à Lyon. Vous êtes artisan, indépendant ou une entreprise locale et vous souhaitez développer votre présence en ligne ? Gralypho est l’agence web qui vous accompagne dans la <strong>création et la gestion de votre site internet</strong>, <strong>l’optimisation de votre référencement</strong>, ainsi que <strong>la mise en place de solutions digitales sur-mesure.</strong></p>
		<Button text="Nous contacter" link="/#footer" />

		<h3 class="subtitle__h3">Création de site internet</h3>
		<p class="paragraph">
			Nous avons plusieurs niveaux de services en création site Web. Nous pouvons créer un site en trois jours de 5 pages avec WordPress. Nous pouvons créer un site Shopify E-commerce en 8 jours. Nous pouvons créer des sites complètement sur mesure en 3 semaines, design et fonctionnalités. .
			<br />Nous maîtrisons plsuieurs technologies, Wix, WP, Webflow, Shopify ... et bien sûr notre framework Favoris Svelte et Strapi comme CMS Headless.
		</p>
		<Button text="Découvrir" link="/creation-site-internet" />

		<h2 class="subtitle">Pourquoi Choisir Gralypho pour la création et la gestion de votre site Internet à Lyon ?</h2>
		<p class="paragraph">
			Notre objectif est de <strong>vous offrir des solutions qui vous permettent de vous démarquer dans votre secteur.</strong> <br />
			Surtout notre profonde expertise du Web nous permet d' <strong>optimiser à 100% votre futur outil digital</strong>, dans ces fontionnalités, dans son référencement et tout au long de son cycle de vie.
			<br>
			<br/> Notre expertise en SEO (référencement naturel) nous permet de vous garantir une visibilité optimale sur les moteurs de recherche. Nous mettons en place des stratégies adaptées à votre secteur d’activité pour vous aider à atteindre vos objectifs commerciaux.
		</p>
		<Button text="Découvrir" link="/referencement-seo-sea" />
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
		font-weight: 500;
		letter-spacing: -1px;
		text-align: center;
		line-height: 1.4;
		margin-top: 30px;
		padding: 25px;
	}
	.container h2 {
		font-family: var(--Geologica);
		font-size: clamp(1.4rem, 3vw, 2.2rem);
		color: #ffffff;
		font-weight: 600;
		letter-spacing: -1px;
		text-align: center;
	}
	.subtitle__h3 {
		font-family: var(--Geologica);
		font-size: clamp(1.05rem, 2vw, 1.35rem);
		color: var(--green, #d6a319);
		font-weight: 500;
		letter-spacing: -1px;
		text-align: center;
		margin-top: 50px;
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
		padding: 20px 0;
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
