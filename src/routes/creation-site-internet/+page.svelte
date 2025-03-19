<script>
	import Header from '../../sections/Header.svelte';
	import Mouse from '../../Components/Mouse.svelte';
	import Button from '../../Components/ButtonCTA.svelte';
	import { fade, slide } from 'svelte/transition';
	import IMG from '../../Assets/gralyphoHeroImg.jpeg';
	import IMG2	 from '../../Assets/Site-internet-rapide.jpeg';
</script>

<Header />
<Mouse />
<main>
	<img src={IMG} alt="">
	<h1 class="title">Notre offre de création de site internet</h1>
	<div class="wrapper__hero">
		<h2>Bien choisir son modèle de site internet est fondamental.</h2>
		<p>
			Votre site internet reflète votre activité, il est l'identité de votre marque, de votre business, de votre entreprise. Votre site internet vous représente d'une part et doit également vous permettre d'effectuer des tâches, si tel est votre besoin, comme la modification de contenu dynamique. Le contenu dynamique est géré par un CMS. C'est lui qui vous permet d'interagir avec votre site web pour modifier des images, du texte, tenir à jour un blog, modifier des tarifs, ajouter un produit,
			etc.
		</p>
		<br /><br />
		<h2>Sans CMS, avec CMS ou CMS Headless.</h2>
		<h3>Sans CMS</h3>
		<p>Un site sans CMS ne vous permet pas de modifier le contenu de votre site directement, car vous ne disposez pas d'espace d'administration pour le faire. Il vous faudra alors souscrire à un contrat de maintenance que vous nous proposons pour toute modification sur votre site internet. Mais de nombreux site vitrine ne requierent pas de modification de contenu, ou que très rarement, par exemple une fois par an ou lors d'une refonte du site, environ tous les 10 ou 5 ans.</p>

		<h3>Avec CMS</h3>
		<p>
			Le CMS vous permet de modifier votre contenu, on parle alors de contenu dynamique. Vous avez accès à un espace d'administration, lequel après un petit temps de prise en main, vous permet de modifier vos images, votre texte, vos tarifs, vos informations, vos dates et même la disposition des éléments. Nous utilisons 3 plateformes avec CMS. <span>Wordpress, Wix et Webflow.</span> Ces trois plateformes nous permettent de créer votre site avec un CMS natif. Nous vous formons sur l'administration
			du site ou nous vous proposons un forfait de maintenance mensuel, si vous préférez que nous nous occupions de toutes les modifications
		</p>
		<h3>Avec CMS Headless</h3>
		<p>
			Un CMS Headless c'est un CMS sur mesure. Cela sous entend un site internet entièrement développé et personnalisé, jusquà son CMS. Celui-ci devient paramétrable et nous permet de gérer ce que l'on veut, comme on le veut. Un CMS Hedalless est particulièrement justifié quand un client souhaite un site et plus tard une application mobile, par exemple. Un CMS Headless nous permet d'utiliser le même contenu sur le site et l'application sans devoir le dupliquer. Le contenu est facile à gérer et
			peut être adapté à chaque support. La maintenance est facile et souple et permet de gagner un temps considérable !
		</p>
	</div>
	<img src={IMG2} alt="">
	<div class="wrapper__txt">
		<p class="offre">BASIC</p>
		<h2>Efficacité et professionalisme</h2>
		<h3>Idéal pour : Indépendants, TPE, PME, Artisans</h3>
		<div class="wrapper__offre">
			<h2>Gestion du contenu <br /> Site livré en 3 jours <br />Vitrine pro <br /> 1399 €</h2>
			<!-- <p class="avantage">Votre site, livré clefs en main, en trois jours max</p> -->
		</div>

		<ul>
			<li>Un site web professionnel basé sur un template optimisé</li>
			<li>Personnalisation du design (logo, couleurs, images, textes)</li>
			<li>3 à 5 pages : Accueil, Services, À propos, Contact, Blog en (option)</li>
			<li>Intégration d’un formulaire de contact</li>
			<li>Site optimisé pour mobile & SEO de base</li>
			<li>Mise en ligne rapide</li>
			<br />
			<li>Délai : 3 jours max</li>
			<li>Tarif : 1399 €</li>
			<li>Options : Blog, SEO avancé, Référencement local, Maintenance, pages supplémentaires ...</li>
			<li>Avantage client : Un site rapide, efficace et très abordable.</li>
		</ul>
		<Button />
	</div>

	<div class="wrapper__txt">
		<p class="offre">Business</p>
		<h2>Gestion de contenu</h2>
		<h3>Idéal pour : Indépendants, TPE, PME, Artisans</h3>
		<div class="wrapper__offre">
			<h2>Gestion du contenu <br /> Site livré en 3 jours <br />Vitrine pro <br /> 1399 €</h2>
			<!-- <p class="avantage">Votre site, livré clefs en main, en trois jours max</p> -->
		</div>

		<ul>
			<li>Un site web professionnel basé sur un template optimisé</li>
			<li>Personnalisation du design (logo, couleurs, images, textes)</li>
			<li>3 à 5 pages : Accueil, Services, À propos, Contact, Blog en (option)</li>
			<li>Intégration d’un formulaire de contact</li>
			<li>Site optimisé pour mobile & SEO de base</li>
			<li>Mise en ligne rapide</li>
			<br />
			<li>Délai : 3 jours max</li>
			<li>Tarif : 1399 €</li>
			<li>Options : Blog, SEO avancé, Référencement local, Maintenance, pages supplémentaires ...</li>
			<li>Avantage client : Un site rapide, efficace et très abordable.</li>
		</ul>
		<Button />
	</div>




	<div class="wrapper__txt">
		<p class="offre">CUSTOM</p>
		<h2>Site internet, en créativité totale !</h2>
		<h3>Idéal pour : Créateur, marque, Identité forte</h3>

		<div class="wrapper__offre">
			<h2>Gestion du contenu <br /> Site livré en 3 jours <br />Vitrine pro <br /> 1399 €</h2>
			<!-- <p class="avantage">Votre site, livré clefs en main, en trois jours max</p> -->
		</div>

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
		<Button />
	</div>

	<div class="wrapper__txt">
		<p class="offre">SINGLE PAGE</p>
		<h2>Une page percutante</h2>
		<h3>Idéal pour : Évenementiel, café, pub, concert, association</h3>
		<div class="wrapper__offre">
			<h2>Gestion du contenu <br /> Site livré en 3 jours <br />Vitrine pro <br /> 1399 €</h2>
			<!-- <p class="avantage">Votre site, livré clefs en main, en trois jours max</p> -->
		</div>

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
		<Button />
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
		font-family: var(--Geologica);
		font-size: 3rem;
		color: var(--whiteGrey);
		font-weight: 700;
		text-align: center;
		letter-spacing: 0px;
		margin-top: 50px;
	}
	.wrapper__hero {
		display: flex;
		align-items: baseline;
		justify-content: baseline;
		flex-direction: column;
		width: 90%;
		height: auto;
		margin: 0 auto;
		padding: 30px;
		gap: 30px;
		border-radius: 8px;
		background-color: var(--whiteGrey);
		color: var(--primary);
		box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.528);
	}
	.wrapper__hero h2 {
		font-family: var(--Red);
		font-size: 2rem;
		letter-spacing: -1px;
		font-weight: 900;
		color: var(--primary);
		margin-top: 10px;
	}
	.wrapper__hero h3 {
		font-size: 1.5rem;
		letter-spacing: -1px;
		font-weight: 300;
		color: var(--primary);
	}
	.wrapper__hero p {
		font-family: var(--Red);
		font-size: 1rem;
		font-weight: 400;
		padding: 10px;
		line-height: 30px;
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
		gap: 40px;
		border-radius: 8px;
		/* background-color: #1f1e1e; */
		color: var(--whiteGrey);
		box-shadow: 0px 0px 5px 1px var(--blue);
	}
	
	.wrapper__offre {
		gap: 10px;
		width: 50%;
		height: auto;
		height: 10%;
		padding: 20px;
		background-color: rgb(19, 18, 19);
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		border-radius: 10px 10px 0px 0px;
		box-shadow: 0px 0px 5px 1px var(--blue);
	}
	.wrapper__txt li {
		font-size: 1rem;
		font-weight: 300;
		padding: 10px;
		line-height: 30px;
	}
	.wrapper__txt h2 {
		font-family: var(--Red);
		font-size: 3.5rem;
		letter-spacing: -1px;
		font-weight: 900;
		color: var(--whiteGrey);
		margin-top: 10px;
	}
	.wrapper__txt h3 {
		font-size: 1rem;
		letter-spacing: 0px;
		font-weight: 100;
		color: var(--whiteGrey);
	}
	.wrapper__txt ul {
		margin-top: 20px;
	}

	.wrapper__offre h2 {
		font-size: 1.5rem;
		font-weight: 300;
		color: var(--whiteGrey);
		text-align: center;
		letter-spacing: 0;
	}

	.offre {
		font-family: var(--Red);
		font-size: 1.2rem;
		font-weight: 800;
		background-color: var(--blue);
		color: var(--whiteGrey);
		padding: 20px;
		margin-top: 0px;
		border-radius: 5px;
		width: 100px;
		display: flex;
		align-items: center;
		justify-content: center;
		text-align: center;
	}

</style>
