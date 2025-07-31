<script>
	import FaqLink from '../../Components/FaqLink.svelte';
	import Header from '../../sections/Header.svelte';
	import Links from '../../Components/LinkSiteApplication.svelte';
	import Button from '../../Components/Cta-component.svelte';
</script>

<Header />
<div class="container">
	<h1 class="title">Agence Web de Lyon Ouest</h1>
	<div class="wrapper__img">
		<img class="img" src="https://www.aflyon.org/wp-content/uploads/2023/06/bandeau-lyon-vue-fourviere.jpg" alt="Lyon" />
	</div>
	<div class="wrapper__text">
		<h2 class="subtitle">Gralypho, l'agence Web à 15 km de Lyon !</h2>
		<h3 class="subtitle__h3">Une agence Web experte qui sait se mobiliser pour ses clients</h3>
		<p class="paragraph">
			Gralypho propose à ses clients 3 services:
			<span>
				<br /> 1 - Création de site internet
			</span>
			<span>
				<br /> 2 - Création d'applications Web
			</span>
			<span>
				<br /> 3 - Référencement naturel (SEO)
			</span>
			<br /><br />Nous souhaitons au-delà de nos compétences de développeurs, vous apporter une expertise et un accompagnement dans la création de votre site internet, de votre application Web ou dans votre stratégie de référencement naturel. Parce qu'un site Web et une application sont des outils fabuleux,<br /> il faut savoir les utiliser pour les faire fructifier.
		</p>
		<h3 class="subtitle__h3">Notre service de création de site Internet</h3>
		<p class="paragraph">Nous concevons vos sites internet de demain. Nous sommes développeurs Web formés au code informatique. C'est notre coeur de métier, mais surtout nous savons comment optimiser votre outil. <br>
		Oui, votre futur site web est outil digital puissant qui vous permettra de capter vos leads, de convertir vos prospects en client et de faire tout ce que vous voulez pour réussir dans votre business. 
		<br>Et nous nous sommes là pour ça, pour vous aider à optimiser un outil digital 100% gagnant.</p>
		<Button text="Découvrir" link="/creation-site-internet" />


		<h3 class="subtitle__h3">Notre service de création d'applicaion</h3>
		<p class="paragraph">Nous concevons des applications natives ou PWA, selon vos besoins stratégiques. Nous travaillons en SQL ou noSQL, avec Firebase ou Strapi. Nous développons en react Native ou en PWA avec Svelte. Nous sommes là, nous savons faire et avons hâte de construire votre futur application !!</p>
		<Button text="Découvrir" link="/creation-application" />

		<h3 class="subtitle__h3">Le SEO, le nerf de la guerre féroce du WEB !!</h3>
		<p class="paragraph">Nous sommes experts SEO, donc en référencement naturel. Lisez nos articles de <a href="/blog">blog</a> et découvrez toute la puissance du SEO et ce qu'elle vous apportera. <br>
		Vous visez le top 3, mais c'est la devise de tous. ALors préparer vous car ensemble, on va se relever les bretelles et vous faire décoller pour le Top des moteurs de recherche !!</p>
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
	}
	.subtitle {
		font-family: var(--Geologica);
		font-size: 2rem;
		color: var(--primary);
		font-weight: 700;
		letter-spacing: -1px;
		text-align: center;
		line-height: 40px;
		margin-top: 20px;
		padding: 25px;
	}
	.subtitle__h3 {
		font-family: var(--Geologica);
		font-size: var(--m);
		color: var(--primary);
		font-weight: 500;
		letter-spacing: -1px;
		text-align: center;
		margin-top: 30px;
		font-size: 1.5rem;
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
	.paragraph span {
		font-weight: 500;
	}

	.wrapper__img {
		margin-top: 50px;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.img {
		width: 60%;
		margin: 0 auto;
		border-radius: 1rem;
	}

	@media screen and (max-width: 768px) {
		.img {
			height: 200px;
			margin-top: 20px;
		}
		.wrapper__text {
			width: 90%;
			height: 100%;
		}
	}
</style>
