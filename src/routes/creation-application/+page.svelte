<script>
	import Header from '../../sections/Header.svelte';
	import Mouse from '../../Components/Mouse.svelte';
</script>

<Header />
<Mouse />
<main>
	<h1 class="title">Notre offre de création de site internet</h1>

	<div class="wrapper__txt">
		<div class="wrapper-offre">
			<p class="offre">BASIC</p>
			<h2>Site internet Rapide, efficace, Pro</h2>
			<p class="avantage">Votre site, livré clefs en main, en trois jours max</p>
		</div>
		<h3>Idéal pour : Indépendants, TPE, PME, Artisans, Associations</h3>
		<ul>
			<li>✅ Un site web professionnel basé sur un template optimisé</li>
			<li>✅ Personnalisation du design (logo, couleurs, images, textes)</li>
			<li>✅ 3 à 5 pages : Accueil, Services, À propos, Contact, Blog en (option)</li>
			<li>✅ Intégration d’un formulaire de contact</li>
			<li>✅ Site optimisé pour mobile & SEO de base</li>
			<li>✅ Mise en ligne rapide</li>
			<br />
			<li>📅 Délai : 3 jours max</li>
			<li>📈 Tarif : 1399 €</li>
			<li>⚡ Options : Blog, SEO avancé, Référencement local, Maintenance, pages supplémentaires ...</li>
			<li>💪 Avantage client : Un site rapide, efficace et très abordable.</li>
		</ul>
	</div>

	<div class="wrapper__txt">
		<div class="wrapper-offre">
			<p>CUSTOM</p>
			<h2>Site internet, en créativité totale !</h2>
			<p class="avantage">Une identité forte pour une marque puissante</p>
		</div>

		<h3>Idéal pour : Indépendants, TPE, PME, Artisans, Associations</h3>
		<ul>
			<li>✅ Conception unique et sur-mesure en Svelte ou HTML/CSS/JS</li>
			<li>✅ Projets avec un design précis ou des animations avancées</li>
			<li>✅ Personnalisation du design (logo, couleurs, images, textes)</li>
			<li>✅ Interface UX/UI optimisée pour une meilleure expérience utilisateur</li>
			<li>✅ Animations, micro-interactions et effets visuels dynamiques</li>
			<li>✅ Site ultra-performant et SEO friendly</li>
			<li>✅ Optimisation mobile et responsive sans compromis</li>
			<li>✅ Intégration d’un formulaire de contact</li>
			<br />
			<li>📅 Délai : 2 à 4 semaines</li>
			<li>📈 Tarif : à partir de 2000€ (sur devis selon projet)</li>
			<li>⚡ Options : Intégration avec un CMS, Strapi, ou API backend</li>
			<li>💪 Avantage pour le client : Un site premium et personnalisé qui se distingue.</li>
		</ul>
	</div>

	<div class="wrapper__txt">
		<div class="wrapper-offre">
			<p>SINGLE PAGE</p>
			<h2>Une page percutante et unique</h2>
			<p class="avantage">Un budget léger, une livraison en 1 jour</p>
		</div>
		<h3>Café, pub, salle de concert, association, commerçant ...</h3>
	
		<ul>
			<li>✅ Intégration d'un agenda</li>
			<li>✅ Interface UX/UI optimisée pour une meilleure expérience utilisateur</li>
			<li>✅ Page optimisée SEO</li>
			<li>✅ Page légère et ultra-performante</li>
			<li>✅ Intégration d’un formulaire de contact</li>
			<li>✅ Optimisation mobile et responsive sans compromis</li>
			<br />
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
		gap: 60px;
		padding: 20px;
		height: auto;
		background-color: var(--primary);
		font-family: epilogue;
	}

	.title {
		font-family: var(--DM);
		font-size: 3rem;
		color: var(--whiteGrey);
		font-weight: 700;
		text-align: center;
		letter-spacing: -1px;
		margin-top: 50px;
	}
	.wrapper__txt {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		width: 90%;
		height: auto;
		margin: 0 auto;
		padding: 30px;
		gap: 30px;
		border-radius: 8px;
		background-color: #1f1e1e;
		color: var(--whiteGrey);
		box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.528);
		position: relative;
	}
	.wrapper__txt h2 {
		font-size: 3.5rem;
		letter-spacing: -1px;
		font-weight: 700;
		color: var(--whiteGrey);
		margin-top: 10px;
	}
	.wrapper__txt h3 {
		font-size: 2.5rem;
		letter-spacing: -1px;
		font-weight: 100;
		color: var(--whiteGrey);
	}
	.wrapper-offre {
		gap: 20px;
		width: 100%;
		height: 10%;
		padding: 50px;
		background-color: rgb(19, 18, 19);
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		border-radius: 10px 10px 0px 0px;
		border: 1px solid rgb(118, 115, 115);
	}
	.wrapper__txt li {
		font-size: 1rem;
		font-weight: 300;
		padding: 10px;
	}
	.offre {
		font-size: 1.2rem;
		font-weight: 500;
		background-color: var(--blue);
		color: var(--whiteGrey);
		padding: 20px;
		border-radius: 5px;
		width: 100px;
		display: flex;
		align-items: center;
		justify-content: center;
		text-align: center;
	}
	.avantage {
		font-family: var(--Poppins);
		font-size: 1.2rem;
		font-weight: 300;
		background-color: rgb(78, 4, 4);
		color: var(--whiteGrey);
		padding: 20px;
		border-radius: 5px;
		width: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		text-align: center;
		box-shadow: inset 0px 0px 10px 4px rgba(0, 0, 0, 0.528);
		margin-top: 20px;
	}
</style>
