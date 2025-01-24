<script>
	import Header from '../../sections/Header.svelte';
	import digital from '../../Assets/png-gralypho/23.png';
	import Mouse from '../../Components/Mouse.svelte';
	import Button from '../../Components/ButtonCTA.svelte';
</script>

<Mouse />
<Header />

<section class="digital-infos">
	<div class="img"></div>
	<div class="wrapper-digital-infos">
		<h1>Découvrez la toute-puissance de votre futur site internet!</h1>
		<h2>L'intégration d'outils et de fonctionnalité, <br>c'est ça la clef !</h2>
		<p>
		Votre site internet peut embarquer des outils très puissants, comme un système de paiement en ligne, un chatbot, 
		une plateforme d'e-mail marketing, un système de réservation, un service de météo, des taux de change, des données en temps réel, etc. 
		Vous pouvez également collecter des données utilisateurs via différentes techniques.

		<h2>Notre agence Web à Lyon, experte <br> en branchements API !</h2>
		<h3>Qu'est-ce qu'une API ?</h3>
		<p>Une API (Application Programming Interface) est une interface qui permet à deux applications, logiciels ou systèmes de communiquer entre eux.  Imaginez une API comme un serveur dans un restaurant. 
			Le client (vous) consulte le menu (fonctionnalités ou données disponibles), passe une commande (demande à l'API), et le serveur (l'API) transmet cette commande au cuisinier (le système ou la base de données). Une fois que le plat est prêt (les données ou la réponse), le serveur vous l'apporte. <br><br></p>
			<h3>Un choix pléthorique, des idées de business et de site internet !</h3>
			<p>Des API, il y en a plein ! La plupart des applications, des services, des logiciels proposent des API pour accéder à leurs données ou à leurs fonctionnalités. <br><br>
			Vous souhaitez récupérer des données auprès de la NASA pour les proposer aux utilisateurs de votre site internet ? C'est possible grâce à l'API de la NASA. 
			<br> Vous souhaitez proposer aux utilisateurs de votre site, des recettes de cuisine ? C'est possible grâce à l'API de Marmiton. <br> Vous commencencez à comprendre la puissance ?! 
			<br> Allez encore deux exemples, vous souhaitez proposer à vos utilisateurs de consulter la météo mondiale en saisissant une ville? C'est possible grâce à plusieurs API . <br>
			 Et puis ensuite vos utilisateurs bookent un vol pour la même destination ? C'est possible grâce aux API des compagnie aériennes et compagnies de booking. <br>
		</p>

		<h3>Pensez automatisation !</h3>
			<p>Avouez, vous l'entendez partout ce mot non ?! Même avant l'IA nous en parlions souvent, mais maintenant avec l'IA c'est génial. Sachez que ChatGPT dispose d'une API. Si vous avez lu le paragraphe précédent, vous savez maintenant ce qu'est une API. Et voilà une liste de ce que vous pouvez faire avec ! :</p>
			
	<p>
			<li>Intégrer un chatbot sur votre site internet ou application pour répondre aux questions fréquentes, résoudre des problèmes ou guider les utilisateurs.
Personnaliser les réponses selon le contexte ou les besoins spécifiques de votre entreprise.
Exemple :
Un site e-commerce qui aide les clients à retrouver des commandes, poser des questions sur les produits ou résoudre des problèmes techniques.</li> <br>
<li> Génération de Contenu :
Rédiger des descriptions de produits, articles de blog, newsletters ou publications pour les réseaux sociaux.
Générer du contenu optimisé pour le SEO.
Exemple :
Un outil qui génère automatiquement des descriptions pour un site e-commerce à partir des caractéristiques des produits.
</li><br>
<li>Traduction et Résumé Automatique :
Traduire du texte dans plusieurs langues.
Résumer des documents, articles ou conversations en quelques lignes.
Exemple :
Une plateforme de collaboration qui résume automatiquement les comptes rendus des réunions.</li><br>
<li>
Automatisation des Emails :
Générer des réponses automatiques aux emails ou rédiger des emails à partir d’un résumé ou de points-clés.
Analyser le ton des emails reçus pour proposer une réponse adaptée.
Exemple :
Un assistant de gestion qui rédige des emails pour fixer des rendez-vous ou répondre aux demandes courantes.</li><br>
<li>
Analyse et Classification de Données :
Analyser des commentaires ou avis clients pour identifier les tendances ou problèmes récurrents.
Classifier les données textuelles, comme des tickets de support ou des retours utilisateurs, en catégories spécifiques.
Exemple :
Une entreprise SaaS qui utilise l'API pour prioriser automatiquement les tickets d'assistance en fonction de leur urgence. </li><br>
<li>
Formation et Assistance Éducative :
Répondre à des questions complexes ou fournir des explications sur des sujets techniques.
Générer des exercices ou des quiz pour des apprenants.
Exemple :
Une plateforme d'apprentissage qui offre des explications instantanées sur des sujets comme les mathématiques ou la programmation.</li><br>
<li>
Création d'Interfaces de Dialogue Avancées :
Ajouter une interface conversationnelle sur des appareils IoT (comme des assistants vocaux ou des systèmes domotiques).
Créer des applications de productivité qui comprennent les commandes en langage naturel.
Exemple :
Un assistant vocal pour la gestion de la maison intelligente qui répond aux commandes comme "baisse la lumière" ou "quel est l'agenda de demain ?".</li><br>
<li>
Automatisation des Tests et du Développement :
Générer du code ou des tests unitaires à partir de spécifications.
Répondre aux questions sur des erreurs ou proposer des solutions de développement.
Exemple :
Une extension de l’IDE qui aide les développeurs à résoudre des bugs ou à générer du code répétitif.</li><br>
<li>
Applications Créatives :
Générer des poèmes, des scénarios ou des idées créatives pour un projet artistique.
Exemple :
Une application de génération d’histoires interactives ou de création de personnages pour un jeu.</li><br>
<li>
Outils Personnels ou d'Entreprise:
Aider les employés avec un assistant interne pour répondre à leurs questions sur les politiques d'entreprise, trouver des documents, ou automatiser des tâches répétitives.
Exemple :
Un assistant RH qui aide les collaborateurs à comprendre les avantages sociaux ou à poser leurs congés.</li><br></p>

	
		<div class="wrapper-button">
			<Button />
		</div>
	</div>
</section>

<style>
	.digital-infos {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 0px;
		height: auto;
		background: var(--gradient);
	}

	.wrapper-digital-infos {
		height: 100%;
		width: 70%;
		flex-direction: column;
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 20px;
		opacity: 1;
		padding: 30px;
	}
	.wrapper-digital-infos h1 {
		font-family: var(--Geologica);
		font-size: var(--l);
		color: var(--whiteGrey);
		font-weight: 900;
		margin-bottom: 100px;
		margin-top: 50px;
		letter-spacing: -1px;
		text-align: center;
		line-height: 50px;
		width: 100%;
	}
	.wrapper-digital-infos h2 {
		font-family: var(--Geologica);
		font-size: var(--lm);
		color: var(--whiteGrey);
		font-weight: 600;
		margin-bottom: 10px;
		letter-spacing: 0px;
		text-align: left;
		line-height: 36px;
		width: 100%;
	}
	.wrapper-digital-infos h3 {
		font-family: var(--Geologica);
		font-size: var(--m);
		color: var(--whiteGrey);
		font-weight: 600;
		letter-spacing: 0px;
		text-align: left;
		line-height: 36px;
		width: 100%;
	}

	.wrapper-digital-infos p {
		font-family: var(--Poppins);
		font-size: var(--m);
		color: var(--whiteGrey);
		font-weight: 400;
		letter-spacing: -0.02em;
		text-align: justify;
		hyphens: auto;
		align-self: center;
		margin-bottom: 50px;
		
	}
	
	.wrapper-button {
		display: flex;
		justify-content: center;
		align-items: center;
		margin-top: 30px;
		margin-bottom: 50px;
	}

	@media screen and (max-width: 768px) {
		.digital-infos {
			height: auto;
			flex-direction: column;
		}
		.wrapper-digital-infos {
		height: 100%;
		width: 90%;
		flex-direction: column;
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 20px;
		opacity: 1;
		padding: 30px;
	}
	.wrapper-digital-infos h3 {
		font-family: var(--Geologica);
		font-size: var(--m);
		color: var(--whiteGrey);
		font-weight: 900;
		letter-spacing: 0px;
		text-align: left;
		line-height: 25px;
		width: 100%;
	}
	.wrapper-digital-infos h2 {
		font-family: var(--Geologica);
		font-size: var(--lm);
		color: var(--whiteGrey);
		font-weight: 700;
		letter-spacing: 0px;
		text-align: left;
		line-height: 25px;
		width: 100%;
	}
	}
</style>
