<script>
	import Header from '../../sections/Header.svelte';
	import Mouse from '../../Components/Mouse.svelte';
</script>

<Header />
<Mouse />
<main>
	<h1 class="title">Création de site internet</h1>
	<div class="wrapper__txt">
		<div class="wrapper-offre">
			<h2>SITE INTERNET CLÉ EN MAIN (RAPIDE & ACCESSIBLE)</h2>
		</div>
		<h3>Idéal pour : Indépendants, PME, Artisans, Associations</h3>
		<h4>🔹 Ce que nous proposons :</h4>
		<ul>
			<li>✅ Un site web professionnel basé sur un template optimisé</li>

			<li>✅ Personnalisation du design (logo, couleurs, images, textes)</li>
			<li>✅ Personnalisation du design (logo, couleurs, images, textes)</li>
			<li>✅ 3 à 5 pages : Accueil, Services, À propos, Contact, Blog (option)</li>
			<li>✅ Intégration d’un formulaire de contact</li>
			<li>✅ Site optimisé pour mobile & SEO de base</li>
			<li>✅ Mise en ligne rapide sur Hostinger (ou autre hébergeur)</li>

			<li>📅 Délai : 3 jours max</li>
			<li>📈 Tarif : 600€ - 1000€ (selon la complexité et les options)</li>
			<li>⚡ Options : Blog, SEO avancé, Référencement local, Maintenance</li>
			<li>💪 Avantage pour le client : Un site rapide, efficace et abordable.</li>
		</ul>
	</div>

	<div class="wrapper__txt">
		<div class="wrapper-offre">
		<h2>📈 OFFRE 2 : SITE INTERNET SUR MESURE (DESIGN UNIQUE & EXPÉRIENCE OPTIMISÉE)</h2>
	</div>
		<h3>Idéal pour : Startups, Entreprises exigeantes, Projets avec un design précis ou des animations avancées</h3>
		<h4>🔹 Ce que nous proposons :</h4>
		<ul>
			<li>✅ Une page pro, optimisée et personnalisée</li>
			<li>✅ Intégration d'un agenda</li>
			<li>✅ Interface UX/UI optimisée pour une meilleure expérience utilisateur</li>
			<li>✅ Page optimisée SEO</li>
			<li>✅ Page légère et ultra-performante</li>
			<li>✅ Intégration d’un formulaire de contact</li>
			<li>✅ Optimisation mobile et responsive sans compromis</li>

			<li>📅 Délai : 2 à 4 semaines</li>
			<li>📈 Tarif : à partir de 2000€ (sur devis selon projet)</li>
			<li>⚡ Options : Intégration avec un CMS, Strapi, ou API backend</li>
			<li>💪 Avantage pour le client : Un site premium et personnalisé qui se distingue.</li>
		</ul>
	</div>

	<div class="wrapper__txt">
		<div class="wrapper-offre">
		<h2>📈 OFFRE 3 : LANDING PAGE (PAGE UNIQUE ET PERCUTANTE)</h2>
	</div>
		<h3>Idéal pour : Café, pub, salle de concert, association, commerçant, indépendant</h3>
		<h4>🔹 Ce que nous proposons :</h4>
		<ul>
			<li>✅ Conception unique et sur-mesure en Svelte ou HTML/CSS/JS</li>
			<li>✅ Personnalisation du design (logo, couleurs, images, textes)</li>
			<li>✅ Interface UX/UI optimisée pour une meilleure expérience utilisateur</li>
			<li>✅ Animations, micro-interactions et effets visuels dynamiques</li>
			<li>✅ Site ultra-performant et SEO friendly</li>
			<li>✅ Optimisation mobile et responsive sans compromis</li>
			<li>✅ Intégration d’un formulaire de contact</li>

			<li>📅 Délai : 1 jour</li>
			<li>📈 Tarif : à partir de 2000€ (sur devis selon projet)</li>
			<li>⚡ Options : Intégration avec un CMS, Strapi, ou API backend</li>
			<li>💪 Avantage pour le client : Un site premium et personnalisé qui se distingue.</li>
		</ul>
	</div>
</main>

<style>
	main {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		gap: 30px;
		font-family: epilogue;

	}

	.title {
		font-size: 3rem;
		color: var(--primary);
		font-weight: 700;
		font-family: var(--Red);
		text-align: center;
		letter-spacing: -1px;
		margin-top: 50px;
	}
	.wrapper__txt {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		width: 50%;
		height: auto;
		margin: 0 auto;
		padding: 30px;
		gap: 40px;
		border-radius: 8px;
		background-image: linear-gradient(var(--cta), var(--primary));
		color: var(--whiteGrey);
		box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.528);
		position: relative;
	}
	.wrapper-offre {
		position: absolute;
		top: 0;
		width: 100%;
		height: 10%;
		padding: 50px;
		background-color: rgb(22, 22, 31);
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 10px 10px 0px 0px;
		border-bottom: 1px solid whitesmoke;
	}
	.wrapper__txt li {
		font-size: 0.8rem;
		font-weight: 300;
		padding: 10px;
	}
</style>
