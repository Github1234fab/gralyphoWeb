<script>
	import Header from '../../sections/Header.svelte';
	import CardsSectionB from '../../Components/CardsSectionB.svelte';
	import { fade, slide } from 'svelte/transition';

	let site = [
		{
			title:
				'Créer un site internet pour développer son activité est-il encore pertinent en 2025 ?',
			p: "Oui, absolument! Mais il faut prendre en compte les évolutions technologiques et les nouvelles tendances. Les intentions de recherche de la part des internautes ont explosé sur les réseaux sociaux ces trois dernières années. Aujourd’hui, les gens et les jeunes en général, recherchent d’abord un produit sur TikTok, Facebook ou Instagram, parfois avant même de consulter le web. Pourquoi ? Parce que les contenus des réseaux sociaux sont rapides (les shorts, les storys), efficaces et concis. Mais ils redirigent ensuite vers des sites marchands ou des sites vitrines, essentielles à la concrétisation de l'action que vous recherchez (vente de produit, développement de clientèle, contact, etc). L'un ne va pas sans l'autre et donc, les sites internets sont plus que jamais essentiels ! "
		},
		{
			title: 'Quels sont les outils pour créer un site internet en 2025 ?',
			p: "Aujourd'hui les IA sont incorporées à wordpress, wix, webflow et aux éditeur de code des développeurs. D'autres plateformes émergent chaque jour et proposent des solutions de création de site internet en ligne. Nous disposons donc de plusieurs solutions pour créer un site web. Les tarifs d'une solution à l'autre varient. Mais gardez en tête que le web est un métier et que l'expertise d'une agence web peut vous faire gagner du temps et de l'argent. La création d'un site internet est un projet important dont les répercussions doivent se mesurer sur plusieurs années et être pérennes."
		},
		{
			title: "Comment créer un site internet gratuitement avec l'IA?",
			p: "Aujourd'hui, grâce aux prompts, l'IA peut coder un site internet pour nous. Elle a réponse à tout et peut nous permettre de créer un site web sur mesure sans problème. Mais un site seul n'amène pas grand chose. Il faut le référencer, le promouvoir, le faire vivre, le mettre à jour, le sécuriser, le maintenir, le déployer, etc. C'est pourquoi, il est important de bien réfléchir à la création de son site internet en amont et de se faire accompagner par des professionnels du WEB"
		},
		{
			title:
				'Je veux obtenir un site internet pour ma TPE ou PME. Par où commencer et quelles sont les étapes à suivre? ',
			p: "Définir vos Objectifs : Nous commençons par comprendre vos objectifs spécifiques, que ce soit pour générer des leads, vendre des produits en ligne, ou améliorer votre notoriété. Conception sur Mesure : Nos experts concevront un site internet professionnel et responsive, adapté à votre marque et à vos besoins spécifiques. Contenu de Qualité : Nous créons du contenu informatif et optimisé pour le SEO, incluant des pages essentielles comme 'À propos', 'Services', et 'Contact'. Optimisation SEO: Nous utilisons des mots-clés pertinents et optimisons les balises de titre et les méta-descriptions pour améliorer la visibilité de votre site sur les moteurs de recherche. Fonctionnalités Essentielles : Nous intégrons des fonctionnalités comme des formulaires de contact, des systèmes de réservation, ou des boutiques en ligne selon vos besoins. Test et Lancement : Avant de lancer votre site, nous le testons sur tous les appareils et navigateurs pour garantir une expérience utilisateur optimale. Promotion et Maintenance : Nous vous aidons à promouvoir votre site via les réseaux sociaux et d'autres canaux, et assurons une maintenance régulière pour le garder à jour et performant. Faites confiance à Gralypho pour créer un site internet qui non seulement attire de nouveaux clients, mais renforce également votre présence en ligne. Contactez-nous dès aujourd'hui pour démarrer votre projet !"
		},
		{
			title: 'Quel est le budget pour la création d’un site internet?',
			p: "Le budget pour la création d’un site internet peut varier en fonction de plusieurs facteurs, tels que la complexité du projet, les fonctionnalités souhaitées, et le niveau de personnalisation. Chez Gralypho, nous proposons des solutions adaptées à tous les besoins et tous les budgets. Site Vitrine: Pour un site vitrine simple présentant votre entreprise et vos services, le budget peut commencer à partir de 1000 euros. Ce type de site est idéal pour les petites entreprises ou les professionnels indépendants. Site E-commerce : Si vous souhaitez vendre des produits en ligne, un site e-commerce sera nécessaire. Le budget pour ce type de site commence généralement à partir de 2000 euros, en fonction du nombre de produits et des fonctionnalités spécifiques requises. Site Sur Mesure : Pour un site entièrement personnalisé avec des fonctionnalités avancées, le budget peut varier entre 1500 et 3500 euros. Ce type de site est recommandé pour les entreprises ayant des besoins spécifiques et nécessitant une solution sur mesure. Les Facteurs Influant sur le Budget : Design : Un design personnalisé et professionnel peut augmenter le coût. Fonctionnalités : L'ajout de fonctionnalités spécifiques comme des formulaires de contact, des systèmes de réservation, ou des intégrations avec des outils tiers. Contenu : La création de contenu de qualité, incluant du texte, des images, et des vidéos. SEO : L'optimisation pour les moteurs de recherche pour améliorer la visibilité de votre site. Maintenance : Les coûts de maintenance et de mise à jour régulière du site."
		},
		{
			title: "Qu'est-ce que peut m'apporter une agence digitale ?",
			p: "Faire appel à une agence digitale comme [Nom de votre agence] peut apporter de nombreux avantages à votre entreprise. Voici ce que nous pouvons vous offrir : Expertise et Savoir-Faire : Nos experts possèdent les compétences et l'expérience nécessaires pour développer des stratégies digitales efficaces, adaptées à vos besoins spécifiques. Création de Site Web : Nous concevons des sites internet professionnels, responsives, et optimisés pour le SEO, afin de renforcer votre présence en ligne et attirer plus de clients.Stratégie de Marketing Digital : Nous élaborons des stratégies de marketing digital sur mesure, incluant le référencement naturel (SEO), les campagnes publicitaires (SEA), et le marketing sur les réseaux sociaux, pour augmenter votre visibilité et votre notoriété. Gestion des Réseaux Sociaux : Nous prenons en charge la gestion de vos comptes sur les réseaux sociaux, en créant du contenu engageant et en interagissant avec votre communauté pour renforcer votre image de marque. Création de Contenu : Nous produisons du contenu de qualité (articles de blog, vidéos, infographies) pour attirer et fidéliser votre audience. Analyse et Reporting : Nous suivons les performances de vos campagnes digitales et vous fournissons des rapports détaillés, afin d'ajuster les stratégies en temps réel et d'optimiser les résultats. Support et Maintenance : Nous assurons un support technique et une maintenance régulière de votre site web et de vos outils digitaux, pour garantir leur bon fonctionnement et leur sécurité.En collaborant avec [Nom de votre agence], vous bénéficiez d'un partenaire fiable et compétent, dédié à la réussite de votre projet digital. Contactez-nous dès aujourd'hui pour discuter de vos besoins et découvrir comment nous pouvons vous aider à atteindre vos objectifs."
		},
		{
			title: "Qu'est-ce que une landing page",
			p: "Une landing page, ou page d'atterrissage, est une page web autonome conçue spécifiquement pour convertir les visiteurs en leads ou en clients. Contrairement aux autres pages de votre site, une landing page a un objectif unique et clair, tel que la capture d'informations de contact, la promotion d'un produit ou service spécifique, ou l'inscription à une newsletter. Caractéristiques d'une Landing Page Efficace :Objectif Unique : Chaque landing page doit avoir un seul objectif bien défini, comme inciter les visiteurs à remplir un formulaire, télécharger un e-book, ou acheter un produit.Appel à l'Action (CTA) Clair : Un CTA fort et visible est essentiel pour guider les visiteurs vers l'action souhaitée. Par exemple, 'Inscrivez-vous maintenant', 'Téléchargez gratuitement', ou 'Achetez dès aujourd'hui'.Design Simple et Attractif : Un design épuré et attrayant permet de maintenir l'attention des visiteurs sur l'objectif principal. Évitez les distractions inutiles. Contenu Pertinent et Concis : Le contenu doit être direct et convaincant, mettant en avant les bénéfices de l'offre et répondant aux besoins des visiteurs. Formulaire Optimisé : Si la landing page inclut un formulaire, assurez-vous qu'il est court et facile à remplir. Demandez uniquement les informations nécessaires. Témoignages et Preuves Sociales : Inclure des témoignages clients, des études de cas, ou des logos de clients connus peut renforcer la crédibilité et encourager les visiteurs à agir. Optimisation pour le SEO et les Mobiles : Assurez-vous que votre landing page est optimisée pour les moteurs de recherche et qu'elle s'affiche correctement sur tous les appareils, y compris les mobiles. Avantages d'une Landing Page :Augmentation des Conversions : En se concentrant sur un objectif unique, les landing pages sont plus efficaces pour convertir les visiteurs en leads ou en clients. Collecte de Données : Elles permettent de recueillir des informations précieuses sur vos visiteurs, ce qui peut être utilisé pour des campagnes de marketing futures. Mesure des Performances : Les landing pages facilitent le suivi des performances de vos campagnes marketing, vous permettant d'ajuster vos stratégies en fonction des résultats. Chez Gralypho, nous créons des landing pages sur mesure, optimisées pour maximiser vos conversions et atteindre vos objectifs marketing. Contactez-nous dès aujourd'hui pour en savoir plus sur nos services de création de landing pages"
		}
	];

	let application = [
		{
			title: 'Pourquoi investir dans une application ?',
			p: "Investir dans une application offre de nombreux avantages pour votre entreprise. Voici pourquoi c'est une décision stratégique : 1. Amélioration de l'Engagement des Clients Les notifications push et une connexion directe augmentent l'engagement et la fidélité des clients. 2. Augmentation des Ventes: Une expérience d'achat fluide et des fonctionnalités comme le paiement en un clic peuvent stimuler les ventes. 3. Renforcement de la Marque : Une application de qualité renforce l'image de marque et montre que vous êtes à la pointe de la technologie. 4. Collecte de Données Précieuses : Les applications mobiles permettent de collecter des données sur le comportement des utilisateurs, améliorant ainsi vos stratégies marketing. 5. Avantage Concurrentiel : Avoir une application mobile peut vous démarquer de vos concurrents et offrir une valeur ajoutée à vos clients. 6. Accessibilité et DisponibilitéLes : vos clients peuvent accéder à vos produits et services à tout moment et en tout lieu, améliorant ainsi la satisfaction et la rétention. Chez [Nom de votre agence], nous offrons des solutions de développement d'applications sur mesure pour répondre à vos besoins spécifiques. "
		},
		{
			title: "qu'est-ce qu'une application PWA ?",
			p: "Une Progressive Web App (PWA) est une application web qui combine les meilleures fonctionnalités des applications web et mobiles. Les PWA offrent une expérience utilisateur fluide et rapide, tout en étant accessibles directement depuis un navigateur web. Elles sont accessibles via une URL et fonctionnent sur tous les appareils et navigateurs, offrant des temps de chargement rapides et une performance optimale, même en cas de connexion réseau faible. Les PWA offrent une expérience utilisateur similaire à celle des applications natives, avec des interfaces intuitives et des interactions fluides. Elles peuvent être ajoutées à l'écran d'accueil des appareils mobiles, ce qui facilite leur accès. Grâce aux service workers, les PWA peuvent fonctionner hors ligne ou en mode basse connexion, permettant aux utilisateurs d'accéder à certaines fonctionnalités même sans connexion internet. Les PWA peuvent envoyer des notifications push, ce qui permet de maintenir l'engagement des utilisateurs et de les informer des mises à jour et des offres spéciales. Elles sont servies via HTTPS, garantissant ainsi une connexion sécurisée et protégeant les données des utilisateurs. Contrairement aux applications natives, les PWA se mettent à jour automatiquement en arrière-plan, sans nécessiter d'intervention de l'utilisateur. Le développement d'une PWA est souvent moins coûteux et plus rapide que celui d'une application native, car une seule base de code peut être utilisée pour toutes les plateformes. "
		},
		{
			title: "Quel est le coût d'une application web?",
			p: "Le coût d'une application web peut varier en fonction de plusieurs facteurs, notamment la complexité du projet, les fonctionnalités souhaitées, le niveau de personnalisation et le temps de développement nécessaire. Chez Gralypho, nous proposons des solutions adaptées à différents budgets et besoins. Le coût peut commencer à partir de 5 000 euros pour une application très simple. Pour une application web plus complexe avec des fonctionnalités avancées comme un système de gestion de contenu, des intégrations avec des services tiers, ou des fonctionnalités e-commerce, le coût peut varier entre 10 000 et 50 000 euros. Les applications web sur mesure, entièrement personnalisées et incluant des développements spécifiques, peuvent coûter plus de 50 000 euros. Il est important de noter que le coût inclut non seulement le développement initial, mais aussi les tests, la mise en ligne, et parfois la maintenance et les mises à jour futures. "
		},
		{
			title: "Quel est le délai de conception et de livraison d'une application",
			p: "une application est plus complexe à créer et met par conséquent plus de temps. Il faut compter au minimum 8 semaines à 6 mois maximum pour le développement d'une application sur mesure. Par exemple, une application qui fournit en temps réel des données météo complètes pour une station de ski nécéssitera environ un mois de développement. Pour une application plus complexe analysant votre marché par exemple, il faudra compter 6 mois de développement. "
		},
		{
			title: 'Mon application est-elle optimisée pour Android et ios?',
			p: "Chez Gralypho, nous nous assurons que votre application est optimisée pour Android et iOS en utilisant les technologies les plus adaptées à vos besoins. Vous avez plusieurs options pour garantir une compatibilité maximale avec ces deux plateformes. Premièrement, nous pouvons développer des applications natives spécifiques pour Android et iOS en utilisant des langages de programmation comme Java ou Kotlin pour Android, et Swift ou Objective-C pour iOS. Cette approche permet d'exploiter pleinement les fonctionnalités de chaque plateforme et d'offrir une performance optimale. Deuxièmement, nous pouvons utiliser Dart avec le framework Flutter pour créer une application unique qui fonctionne à la fois sur Android et iOS. Flutter permet de partager une grande partie du code entre les deux plateformes, réduisant ainsi les coûts et le temps de développement tout en offrant une expérience utilisateur fluide. Enfin, nous pouvons également développer une Progressive Web App (PWA) qui fonctionne sur tous les appareils via un navigateur web. Les PWA offrent une expérience similaire à celle des applications natives, avec des fonctionnalités comme le mode hors ligne et les notifications push, tout en étant plus rapides et moins coûteuses à développer. Quelle que soit l'option choisie, nous veillons à ce que votre application soit parfaitement optimisée pour Android et iOS, offrant ainsi une expérience utilisateur exceptionnelle. Contactez-nous dès aujourd'hui pour discuter de la meilleure solution pour votre projet."
		}
	];

	let seo = [
		{
			title:
				'Comment optimiser mon référencement?',
		},
		{
			title: "Est-ce que l'optimisation SEO est comprise dans mon tarif?",
		},
		{
			title: "Est-il possible de Ranker en première page?",
		},
		{
			title: 'Combien de temps faut-il à un site internet pour être premier sur Google?',
		},
		{
			title: 'Comment être sûr que mon site de vente en ligne est bien référencé?',
		},
	
	];

	let reseaux = [
		{
			title:
				'Comment créer du contenu pour les réseaux sociaux ?',
		},
		{
			title: "Qu'est-ce qu'une agence de community management?",
		},
		{
			title: "Comment créer une page Facebook Entreprise?",
		},
		{
			title: 'Linkedin Entreprise',
		},
		
	];

	let communication = [
		{
			title:
				"Vous avez besoin d'un Logo professionnel ?",
		},
		{
			title: 'Quel est le tarif pour une création de logo sur mesure ?',
		},
		{
			title: "Quel est le coût pour une création d'identité graphique?",
		},
		{
			title: "Qu'est-ce qu'une charte graphique et identité visuelle",
		},
		
	];

	let digitale = [
		{
			title:
				'Combien coûte un audit en stratégie digitale ?',
			p: 'Les choses ont changé, c’est indéniable ! Les intentions de recherche de la part des internautes ont explosé sur les réseaux sociaux ces trois dernières années. Aujourd’hui, les gens recherchent d’abord un produit sur TikTok, Facebook ou Instagram, parfois avant même de consulter le web. Pourquoi ? Parce que les contenus des réseaux sociaux sont rapides (les shorts), efficaces et concis. Prenons un exemple : je cherche un aspirateur-laveur. Je recherche sur TikTok et trouve rapidement une vidéo sur un produit ou un comparatif de plusieurs produits. C’est rapide et efficace. Cette vidéo me fournit des liens vers le fabricant. Je clique et suis dirigé vers le lien du fabricant. J’achète. C’est rapide et direct. Prenons maintenant le cas du web et de ses moteurs de recherche classiques. J’effectue la même recherche. Google me propose des liens sur une page que je dois faire défiler, et je dois cliquer sur chacun de ces liens qui ouvrent la page d’accueil d’un site de fabricant d’aspirateurs-laveurs ou d’un comparatif de prix. Je dois naviguer sur les pages pour trouver la réponse à ma recherche. Parfois, je ne trouve pas l’information tout de suite, et c’est là que les réseaux sociaux peuvent faire la différence. Chez Gralypho, agence web experte dans le domaine du web et de la création de sites internet et d’applications, nous pensons, comme beaucoup de spécialistes du SEO, qu’une présence en ligne à travers un site web est essentielle, tout comme une présence sur les réseaux sociaux. L’un mène à l’autre, et vice versa. C’est une maïeutique essentielle à un développement d’activité sans faille et à un business pérenne.'
		},
		{
			title: 'Pourquoi faut-il définir une stratégie de marketing?',
			p: 'Nos tarifs démarrent à 500 euros pour un blog, 1000 euros pour une landing page (site page unique), 1500 euros pour un site vitrine, 2000 euros pour un site corporate, 2500 euros pour un site e-commerce, 3000 euros pour un site institutionnel, 3500 euros pour un site sur mesure entièrement codé (garantie sécurité et design innovant et sur mesure).'
		},
		{
			title: "Qu'est-ce que le content marketing ?",
			p: 'Le délai de conception et de mise en ligne dépend du type de site internet que vous souhaitez. En règle général, le délai de conception et de mise en ligne est de 2 semaines pour un blog, 3 semaines pour une landing page, 4 semaines pour un site vitrine, 5 semaines pour un site corporate, 6 semaines pour un site e-commerce, 7 semaines pour un site institutionnel, 8 semaines pour un site sur mesure entièrement codé (garantie sécurité et design innovant et sur mesure).'
		},
		{
			title: "Qu'est-ce que le brenckmarking ?",
			p: "Nos clients sont parfois surpris de découvir tout ce qu'un site internet peut contenir comme fonctionnalité et possibilité. En effet, un site internet peut contenir un blog, un portfolio, un formulaire de contact, un chatbot, un espace membre, un espace client, un espace administrateur, un espace de paiement, de réservation, de commande (etc).  Mais nous pouvons également collecter des données, les stocker, les consulter, les anaylser et s'en servir pour orienter votre activité. Nous pouvons également établir des requêtes API. C'est à dire que nous pouvons consulter des données externes contenues dans un autre site, une autre application que la vôtre et les rapatrier dans votre site pour les afficher. Par exemple, nous pouvons établir une requête auprès d'un service météo et afficher toutes les données métérologiques de votre localité en temps réel ou s'en servir pour valider l'ouverture d'un parc d'activité d'accrobranche, par exemple. Ou encore, nous pouvons requêter en temps réel les taux de prêt des banques pour une agence immobilière, etc."
		},
	];

	let tarif = [
		{
			title:
				"Est-ce que je peux négocier les tarifs pour la création de site ou d'application ?",
		},
		{ 
			title: "Comment me protéger si mon site n'est pas référencé sur Google (SERP) ?",
		},
		{
			title: "Est-ce que les délais peuvent changer par rapport à ce qui m'a été présenté ?",
		},
	
	];
</script>

<Header />

<main in:fade={{ duration: 1000 }}>
	<h1 class="title">FAQ</h1>
	<!-- <p class="paragraph">
	Nous avons centralisé sur une seule et même page toutes les informations susceptibles de vous
	intéresser,<br /> afin que vous puissiez naviguer simplement en trouvant rapidement les réponses à
	toutes vos questions. <br />
</p> -->
	<div class="wrapper-SectionB">
		<h2 id="site">FAQ : Vos questions sur la création de <span>site internet </span>.</h2>
		<!-- <h3>
		Découvrez les réponses à toutes vos questions sur la création de site internet sur mesure :
		prix, délais, avantages et bien plus.
	</h3> -->
		{#each site as tab}
			<CardsSectionB title={tab.title} p={tab.p} />
		{/each}
	</div>

	<div class="wrapper-SectionB">
		<h2 id="application">FAQ : Vos questions sur la création <span>d'application</span>.</h2>
		<!-- <h3>
		Découvrez les réponses à toutes vos questions sur la création de site internet sur mesure :
		prix, délais, avantages et bien plus.
	</h3> -->
		{#each application as tab}
			<CardsSectionB title={tab.title} p={tab.p} />
		{/each}
	</div>

	<div class="wrapper-SectionB">
		<h2 id="seo">FAQ : Vos questions sur le référencement et l'optimisation <span>SEO</span>.</h2>
		<!-- <h3>
		Découvrez les réponses à toutes vos questions sur la création de site internet sur mesure :
		prix, délais, avantages et bien plus.
	</h3> -->
		{#each seo as tab}
			<CardsSectionB title={tab.title} p={tab.p} />
		{/each}
	</div>

	<div class="wrapper-SectionB">
		<h2 id="reseau">FAQ : Vos questions sur la gestion de vos <span>réseaux sociaux</span>.</h2>
		<!-- <h3>
		Découvrez les réponses à toutes vos questions sur la création de site internet sur mesure :
		prix, délais, avantages et bien plus.
	</h3> -->
		{#each reseaux as tab}
			<CardsSectionB title={tab.title} p={tab.p} />
		{/each}
	</div>

	<div class="wrapper-SectionB">
		<h2 id="logo">
			FAQ : Vos questions sur la création de <span>logos, designs et supports de communication</span
			>.
		</h2>
		<!-- <h3>
		Découvrez les réponses à toutes vos questions sur la création de site internet sur mesure :
		prix, délais, avantages et bien plus.
	</h3> -->
		{#each communication as tab}
			<CardsSectionB title={tab.title} p={tab.p} />
		{/each}
	</div>

	<div class="wrapper-SectionB">
		<h2 id="strategie">
			FAQ : Vos questions sur notre service de <span>stratégie digitale</span>.
		</h2>
		<!-- <h3>
		Découvrez les réponses à toutes vos questions sur la création de site internet sur mesure :
		prix, délais, avantages et bien plus.
	</h3> -->
		{#each digitale as tab}
			<CardsSectionB title={tab.title} p={tab.p} />
		{/each}
	</div>

	<div class="wrapper-SectionB">
		<h2 id="tarif">FAQ : Vos questions sur les <span>tarifs et contrats</span>.</h2>
		<!-- <h3>
		Découvrez les réponses à toutes vos questions sur la création de site internet sur mesure :
		prix, délais, avantages et bien plus.
	</h3> -->
		{#each tarif as tab}
			<CardsSectionB title={tab.title} p={tab.p} />
		{/each}
	</div>
</main>

<style>
	.wrapper-SectionB {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		margin-top: 50px;
		margin-bottom: 200px;
	}

	.title {
		text-align: center;
		font-family: 'Red Hat Display';
		font-size: var(--xl);
		font-weight: 700;
		color: var(--primary);
		margin-top: 50px;
		letter-spacing: -1px;
		margin-bottom: 50px;
		line-height: 50px;
		padding: 10px;
	}

	/* .paragraph {
		text-align: center;
		font-family: 'Red Hat Display';
		font-size: 1.5rem;
		font-weight: 600;
		color: var(--primary);
		margin-top: 50px;
		letter-spacing: 0px;
		margin-bottom: 50px;
	} */
	.wrapper-SectionB h2 {
		text-align: center;
		font-family: 'Red Hat Display';
		font-size: var(--l);
		font-weight: 600;
		color: var(--primary);
		margin-top: 0px;
		letter-spacing: -1px;
		margin-bottom: 50px;
		padding: 15px;
	}
	/* .wrapper-SectionB h3 {
		text-align: center;
		font-family: 'Red Hat Display';
		font-size: var(--m);
		font-weight: 400;
		color: var(--primary);
		margin-top: 0px;
		letter-spacing: 0px;
		margin-bottom: 50px;
	} */
	.wrapper-SectionB span {
		font-weight: bolder;
		color: var(--green);
	}
</style>
