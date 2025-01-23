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
			p: "Une landing page, ou page d'atterrissage, est une page web autonome conçue spécifiquement pour convertir les visiteurs en leads ou en clients. Contrairement aux autres pages de votre site, une landing page a un objectif unique et clair, tel que la capture d'informations de contact, la promotion d'un produit ou service spécifique, ou l'inscription à une newsletter. Caractéristiques d'une Landing Page efficace : Objectif Unique : Chaque landing page doit avoir un seul objectif bien défini, comme inciter les visiteurs à remplir un formulaire, télécharger un e-book, ou acheter un produit.Appel à l'Action (CTA) Clair : Un CTA fort et visible est essentiel pour guider les visiteurs vers l'action souhaitée. Par exemple, 'Inscrivez-vous maintenant', 'Téléchargez gratuitement', ou 'Achetez dès aujourd'hui'.Design Simple et Attractif : Un design épuré et attrayant permet de maintenir l'attention des visiteurs sur l'objectif principal. Évitez les distractions inutiles. Contenu Pertinent et Concis : Le contenu doit être direct et convaincant, mettant en avant les bénéfices de l'offre et répondant aux besoins des visiteurs. Formulaire Optimisé : Si la landing page inclut un formulaire, assurez-vous qu'il est court et facile à remplir. Demandez uniquement les informations nécessaires. Témoignages et Preuves Sociales : Inclure des témoignages clients, des études de cas, ou des logos de clients connus peut renforcer la crédibilité et encourager les visiteurs à agir. Optimisation pour le SEO et les Mobiles : Assurez-vous que votre landing page est optimisée pour les moteurs de recherche et qu'elle s'affiche correctement sur tous les appareils, y compris les mobiles. Avantages d'une Landing Page :Augmentation des Conversions : En se concentrant sur un objectif unique, les landing pages sont plus efficaces pour convertir les visiteurs en leads ou en clients. Collecte de Données : Elles permettent de recueillir des informations précieuses sur vos visiteurs, ce qui peut être utilisé pour des campagnes de marketing futures. Mesure des Performances : Les landing pages facilitent le suivi des performances de vos campagnes marketing, vous permettant d'ajuster vos stratégies en fonction des résultats. Chez Gralypho, nous créons des landing pages sur mesure, optimisées pour maximiser vos conversions et atteindre vos objectifs marketing. Contactez-nous dès aujourd'hui pour en savoir plus sur nos services de création de landing pages"
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
			title: 'Comment optimiser mon référencement?',
			p: "Pour optimiser votre référencement, utilisez des mots-clés pertinents, créez du contenu de qualité, structurez vos pages avec des balises (H1, H2, etc.), optimisez la vitesse du site et obtenez des backlinks de qualité. N'oubliez pas d'améliorer l'expérience utilisateur et d'actualiser régulièrement vos contenus. Pour obtenir de meilleurs résultats, faites appelle à notre agence web Gralypho pour un audit SEO complet et des recommandations personnalisées."
		},
		{
			title: "Est-ce que l'optimisation SEO est comprise dans mon tarif?",
			p: "Oui, une optimisation SEO de base, comme le balisage des pages et l'intégration des mots-clés, est incluse. Mais pour SEO avancé, comme la recherche approfondie de mots-clés, les audits techniques, la création de backlinks et la mise en place d'une stratégie SEO profonde, nécessite un service supplémentaire."
		},
		{
			title: 'Est-il possible de Ranker en première page?',
			p: "Oui, mais cela dépend de plusieurs facteurs : la concurrence sur vos mots-clés, la qualité de votre contenu, l'optimisation SEO de votre site, et votre stratégie globale. Atteindre la première page demande souvent du temps et des efforts constants."
		},
		{
			title: 'Combien de temps faut-il à un site internet pour être premier sur Google?',
			p: 'Cela dépend de la concurrence, des mots-clés ciblés et de la qualité de votre stratégie SEO. En général, il faut entre 1 et 6 mois pour obtenir des résultats significatifs, mais atteindre la première position peut prendre plus de temps.'
		},
		{
			title: 'Comment être sûr que mon site de vente en ligne est bien référencé?',
			p: "Vérifiez que vos pages sont indexées par Google, utilisez des outils comme Google Search Console pour suivre vos performances, et assurez-vous d'optimiser les mots-clés, les balises, la vitesse de chargement et le contenu de qualité. Une analyse régulière de votre trafic et de vos positions SEO est également essentielle."
		}
	];

	let reseaux = [
		{
			title: 'Comment créer du contenu pour les réseaux sociaux ?',
			p: "Identifiez votre audience, définissez des objectifs clairs, et créez du contenu visuel et engageant (images, vidéos, infographies). Variez les formats : posts rapides, stories, articles ou lives. Mettez en avant votre expertise, utilisez un ton adapté et planifiez vos publications à l'avance pour rester cohérent."
		},
		{
			title: "Qu'est-ce qu'une agence de community management?",
			p: "Une agence de community management est une entreprise spécialisée dans la gestion et l'animation des communautés en ligne d'une marque sur les réseaux sociaux. Elle s'occupe de créer du contenu, d'interagir avec les abonnés, de gérer les commentaires, et d'optimiser la présence en ligne de ses clients pour améliorer leur visibilité, renforcer leur image de marque et créer de l'engagement avec leur public."
		},
		{
			title:
				"Comment être sûr d'être visible sur les réseaux sociaux et ne pas perdre du temps inutile à créer du contenu?",
			p: 'Pour être sûr d’être visible sur les réseaux sociaux et ne pas perdre de temps, concentrez-vous sur une stratégie claire, publiez du contenu pertinent et engageant, analysez les performances pour ajuster vos actions, et utilisez des outils de gestion pour automatiser la publication et suivre vos résultats.'
		},
		{
			title:
				"Qu'est-ce que Linkedin Entreprise et en quoi il peut être utile de l'utiliser en temps que réseau?",
			p: 'LinkedIn Entreprise est un profil professionnel pour les entreprises sur LinkedIn. Il permet de promouvoir vos services, de partager des actualités, de recruter des talents et de développer des relations B2B. Utilisé efficacement, il booste la visibilité, renforce la crédibilité et génère des opportunités commerciales.'
		}
	];

	let communication = [
		{
			title: "Vous avez besoin d'un Logo professionnel et ne savez comment vous y prendre ?",
			p: "Un logo professionnel reflète l'identité de votre marque. Pour le créer, commencez par définir vos valeurs et votre style. Faites appel à un designer ou utilisez des outils en ligne pour un résultat unique. Un bon logo doit être simple, mémorable et adaptable à différents supports."
		},
		{
			title: 'Quel est le tarif pour une création de logo sur mesure ?',
			p: "Le tarif pour la création d'un logo sur mesure varie en fonction de la complexité, de l'expérience du designer et des prestations incluses. En général, les prix peuvent aller de 300€ à 2000€ et plus. Un logo de qualité prend en compte la recherche, le design personnalisé et les révisions pour répondre à vos attentes."
		},
		{
			title: "Quel est le coût pour une création d'identité graphique?",
			p: "Le coût pour la création d'une identité graphique dépend des éléments inclus (logo, typographie, couleurs, cartes de visite, etc.) et de l'expérience du designer. En général, les prix peuvent varier de 1000€ à 5000€ ou plus, en fonction de la complexité et des services associés. Une identité graphique complète garantit une cohérence visuelle et renforce l'image de votre marque."
		},
		{
			title: "Qu'est-ce qu'une charte graphique et identité visuelle",
			p: "Une charte graphique est un document qui définit les règles d'utilisation des éléments visuels d'une marque (logo, couleurs, typographies, etc.), garantissant ainsi une cohérence visuelle. L'identité visuelle englobe l'ensemble de ces éléments et leur application pour renforcer l'image de la marque auprès du public."
		}
	];

	let digitale = [
		{
			title: 'Combien coûte un audit en stratégie digitale ?',
			p: "Le coût d'un audit en stratégie digitale varie selon la taille et la complexité de votre projet, ainsi que la réputation de l'agence. En général, il peut aller de 500 à 5000 euros, selon les services inclus (analyse SEO, présence sur les réseaux sociaux, expérience utilisateur, etc.)."
		},
		{
			title: 'Pourquoi faut-il définir une stratégie de marketing?',
			p: "Définir une stratégie de marketing permet de structurer et d'orienter vos actions pour atteindre vos objectifs commerciaux. Elle assure une meilleure allocation des ressources, augmente la visibilité de votre marque et favorise la fidélisation de vos clients en répondant précisément à leurs besoins."
		},
		{
			title: "Qu'est-ce que le content marketing ?",
			p: "Le content marketing, ou marketing de contenu, consiste à créer et diffuser des contenus pertinents et de qualité pour attirer, engager et fidéliser un public cible. L'objectif est de fournir des informations utiles qui répondent aux besoins des clients potentiels, tout en renforçant la notoriété de la marque et en générant des conversions."
		},
		{
			title: "Qu'est-ce que le brenckmarking ?",
			p: "Le benchmarking est le processus de comparaison des performances, des stratégies, des produits ou des services d'une entreprise avec ceux de ses concurrents ou d'autres leaders du marché. L'objectif est d'identifier les meilleures pratiques, de comprendre les forces et faiblesses de l'entreprise, et d'adopter des solutions qui peuvent améliorer son efficacité et sa compétitivité."
		}
	];

	let tarif = [
		{
			title: "Est-ce que je peux négocier les tarifs pour la création de site ou d'application ?",
			p: "Oui, il est possible de négocier les tarifs pour la création d'un site ou d'une application. Cependant, cela dépend souvent de plusieurs facteurs. Le scope du projet joue un rôle important : plus le projet est complexe et demande des fonctionnalités spécifiques, moins il y a de marge de manœuvre pour la négociation. Les exigences du client sont aussi un élément clé. Un client qui fournit des spécifications claires et qui sait ce qu'il veut peut avoir une certaine flexibilité sur les prix. Le budget disponible peut également influencer la négociation. Si le client a un budget serré, nous pouvons essayer de trouver un compromis en ajustant certaines fonctionnalités ou en proposant un tarif adapté. Enfin, le timing et la relation client peuvent également avoir un impact. Si la relation avec le client est bonne ou si le projet est urgent, cela peut influencer la négociation."
		},
		{
			title: "Comment me protéger si mon site n'est pas référencé sur Google (SERP) malgré les promesses de l'agence Web ?",
			p:"Si votre site n'est pas référencé sur Google, il est essentiel de vérifier si votre contrat avec le prestataire ou l'agence de création de site comporte des engagements concernant le référencement. Si aucune mention n'a été faite, vous êtes en droit de demander des actions correctives ou de renégocier les termes pour inclure l'optimisation SEO. En l'absence d'accord spécifique, vous pouvez envisager de faire appel à un expert SEO pour améliorer votre positionnement. Assurez-vous également que votre site respecte les bonnes pratiques et les critères de Google pour éviter toute pénalité."
		},
		{
			title: "Est-ce que les délais de livraison peuvent changer par rapport à ce qui m'a été présenté ?",
			p: "Oui, les délais peuvent changer en fonction de divers facteurs, tels que des modifications demandées en cours de projet, des imprévus techniques, ou des contraintes de disponibilité des équipes. Les conditions doivent être claires concernant les modifications ou retards éventuels. Si des changements sont nécessaires, ces derniers doivent être validés d'un commun accord et peuvent affecter le planning initialement présenté."
		}
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
