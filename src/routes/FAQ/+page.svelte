<script>
	import Header from '../../sections/Header.svelte';
	import CardsSectionB from '../../Components/CardsSectionB.svelte';
    import { fade, slide } from 'svelte/transition';

	let site = [
		{
			title:
				'Créer un site internet pour développer son activité est-il encore pertinent en 2025 ?',
			p: 'Les choses ont changé, c’est indéniable ! Les intentions de recherche de la part des internautes ont explosé sur les réseaux sociaux ces trois dernières années. Aujourd’hui, les gens recherchent d’abord un produit sur TikTok, Facebook ou Instagram, parfois avant même de consulter le web. Pourquoi ? Parce que les contenus des réseaux sociaux sont rapides (les shorts), efficaces et concis. Prenons un exemple : je cherche un aspirateur-laveur. Je recherche sur TikTok et trouve rapidement une vidéo sur un produit ou un comparatif de plusieurs produits. C’est rapide et efficace. Cette vidéo me fournit des liens vers le fabricant. Je clique et suis dirigé vers le lien du fabricant. J’achète. C’est rapide et direct. Prenons maintenant le cas du web et de ses moteurs de recherche classiques. J’effectue la même recherche. Google me propose des liens sur une page que je dois faire défiler, et je dois cliquer sur chacun de ces liens qui ouvrent la page d’accueil d’un site de fabricant d’aspirateurs-laveurs ou d’un comparatif de prix. Je dois naviguer sur les pages pour trouver la réponse à ma recherche. Parfois, je ne trouve pas l’information tout de suite, et c’est là que les réseaux sociaux peuvent faire la différence. Chez Gralypho, agence web experte dans le domaine du web et de la création de sites internet et d’applications, nous pensons, comme beaucoup de spécialistes du SEO, qu’une présence en ligne à travers un site web est essentielle, tout comme une présence sur les réseaux sociaux. L’un mène à l’autre, et vice versa. C’est une maïeutique essentielle à un développement d’activité sans faille et à un business pérenne.'
		},
		{
			title: 'Avec quels outils créer son site internet en 2025 ?',
			p: 'Nos tarifs démarrent à 500 euros pour un blog, 1000 euros pour une landing page (site page unique), 1500 euros pour un site vitrine, 2000 euros pour un site corporate, 2500 euros pour un site e-commerce, 3000 euros pour un site institutionnel, 3500 euros pour un site sur mesure entièrement codé (garantie sécurité et design innovant et sur mesure).'
		},
		{
			title: "Aujourd'hui je peux créer mon site internet avec l'IA, comment - pourquoi ?",
			p: 'Le délai de conception et de mise en ligne dépend du type de site internet que vous souhaitez. En règle général, le délai de conception et de mise en ligne est de 2 semaines pour un blog, 3 semaines pour une landing page, 4 semaines pour un site vitrine, 5 semaines pour un site corporate, 6 semaines pour un site e-commerce, 7 semaines pour un site institutionnel, 8 semaines pour un site sur mesure entièrement codé (garantie sécurité et design innovant et sur mesure).'
		},
		{
			title: 'Sites Dynamiques - Possibilités et fonctionnalités',
			p: "Nos clients sont parfois surpris de découvir tout ce qu'un site internet peut contenir comme fonctionnalité et possibilité. En effet, un site internet peut contenir un blog, un portfolio, un formulaire de contact, un chatbot, un espace membre, un espace client, un espace administrateur, un espace de paiement, de réservation, de commande (etc).  Mais nous pouvons également collecter des données, les stocker, les consulter, les anaylser et s'en servir pour orienter votre activité. Nous pouvons également établir des requêtes API. C'est à dire que nous pouvons consulter des données externes contenues dans un autre site, une autre application que la vôtre et les rapatrier dans votre site pour les afficher. Par exemple, nous pouvons établir une requête auprès d'un service météo et afficher toutes les données métérologiques de votre localité en temps réel ou s'en servir pour valider l'ouverture d'un parc d'activité d'accrobranche, par exemple. Ou encore, nous pouvons requêter en temps réel les taux de prêt des banques pour une agence immobilière, etc."
		},
		{
			title: 'Propriété, hébergement, nom de domaine et abonnement',
			p: "Nos clients se posent se questionnent souvent quant à la propriété de leur site. À qui appartient-il? Il vous appartient, parce que vous allez souscrire auprès d'un hebergeur et bien souvent cet hébergeur sera également la plateforme sur laquelle votre site sera réalisée et sur laquelle votre nom de domaine sera acheté. Cet souscription est à votre nom dès lors, vous êtes propriétaire de votre site.  Dans le cas ou nos codons votre site internet de A à Z, nous signons un contrat de maintenance et quand vous souhaiterez rompre ce contrat de maintenance, le site vous reviendra en main propre (le dossier contenant l'ensemble du code de votre site)."
		},
		{
			title: "Qu'est-ce que peut m'apporter une agence Web?",
			p: "Nos clients se posent se questionnent souvent quant à la propriété de leur site. À qui appartient-il? Il vous appartient, parce que vous allez souscrire auprès d'un hebergeur et bien souvent cet hébergeur sera également la plateforme sur laquelle votre site sera réalisée et sur laquelle votre nom de domaine sera acheté. Cet souscription est à votre nom dès lors, vous êtes propriétaire de votre site.  Dans le cas ou nos codons votre site internet de A à Z, nous signons un contrat de maintenance et quand vous souhaiterez rompre ce contrat de maintenance, le site vous reviendra en main propre (le dossier contenant l'ensemble du code de votre site)."
		},
		{
			title: 'Comment être premier sur Google?',
			p: "Nos clients se posent se questionnent souvent quant à la propriété de leur site. À qui appartient-il? Il vous appartient, parce que vous allez souscrire auprès d'un hebergeur et bien souvent cet hébergeur sera également la plateforme sur laquelle votre site sera réalisée et sur laquelle votre nom de domaine sera acheté. Cet souscription est à votre nom dès lors, vous êtes propriétaire de votre site.  Dans le cas ou nos codons votre site internet de A à Z, nous signons un contrat de maintenance et quand vous souhaiterez rompre ce contrat de maintenance, le site vous reviendra en main propre (le dossier contenant l'ensemble du code de votre site)."
		}
	];

	let application = [
		{
			title:
				'Créer un site internet pour développer son activité est-il encore pertinent en 2025 ?',
			p: 'Les choses ont changé, c’est indéniable ! Les intentions de recherche de la part des internautes ont explosé sur les réseaux sociaux ces trois dernières années. Aujourd’hui, les gens recherchent d’abord un produit sur TikTok, Facebook ou Instagram, parfois avant même de consulter le web. Pourquoi ? Parce que les contenus des réseaux sociaux sont rapides (les shorts), efficaces et concis. Prenons un exemple : je cherche un aspirateur-laveur. Je recherche sur TikTok et trouve rapidement une vidéo sur un produit ou un comparatif de plusieurs produits. C’est rapide et efficace. Cette vidéo me fournit des liens vers le fabricant. Je clique et suis dirigé vers le lien du fabricant. J’achète. C’est rapide et direct. Prenons maintenant le cas du web et de ses moteurs de recherche classiques. J’effectue la même recherche. Google me propose des liens sur une page que je dois faire défiler, et je dois cliquer sur chacun de ces liens qui ouvrent la page d’accueil d’un site de fabricant d’aspirateurs-laveurs ou d’un comparatif de prix. Je dois naviguer sur les pages pour trouver la réponse à ma recherche. Parfois, je ne trouve pas l’information tout de suite, et c’est là que les réseaux sociaux peuvent faire la différence. Chez Gralypho, agence web experte dans le domaine du web et de la création de sites internet et d’applications, nous pensons, comme beaucoup de spécialistes du SEO, qu’une présence en ligne à travers un site web est essentielle, tout comme une présence sur les réseaux sociaux. L’un mène à l’autre, et vice versa. C’est une maïeutique essentielle à un développement d’activité sans faille et à un business pérenne.'
		},
		{
			title: 'Avec quels outils créer son site internet en 2025 ?',
			p: 'Nos tarifs démarrent à 500 euros pour un blog, 1000 euros pour une landing page (site page unique), 1500 euros pour un site vitrine, 2000 euros pour un site corporate, 2500 euros pour un site e-commerce, 3000 euros pour un site institutionnel, 3500 euros pour un site sur mesure entièrement codé (garantie sécurité et design innovant et sur mesure).'
		},
		{
			title: "Aujourd'hui je peux créer mon site internet avec l'IA, comment - pourquoi ?",
			p: 'Le délai de conception et de mise en ligne dépend du type de site internet que vous souhaitez. En règle général, le délai de conception et de mise en ligne est de 2 semaines pour un blog, 3 semaines pour une landing page, 4 semaines pour un site vitrine, 5 semaines pour un site corporate, 6 semaines pour un site e-commerce, 7 semaines pour un site institutionnel, 8 semaines pour un site sur mesure entièrement codé (garantie sécurité et design innovant et sur mesure).'
		},
		{
			title: 'Sites Dynamiques - Possibilités et fonctionnalités',
			p: "Nos clients sont parfois surpris de découvir tout ce qu'un site internet peut contenir comme fonctionnalité et possibilité. En effet, un site internet peut contenir un blog, un portfolio, un formulaire de contact, un chatbot, un espace membre, un espace client, un espace administrateur, un espace de paiement, de réservation, de commande (etc).  Mais nous pouvons également collecter des données, les stocker, les consulter, les anaylser et s'en servir pour orienter votre activité. Nous pouvons également établir des requêtes API. C'est à dire que nous pouvons consulter des données externes contenues dans un autre site, une autre application que la vôtre et les rapatrier dans votre site pour les afficher. Par exemple, nous pouvons établir une requête auprès d'un service météo et afficher toutes les données métérologiques de votre localité en temps réel ou s'en servir pour valider l'ouverture d'un parc d'activité d'accrobranche, par exemple. Ou encore, nous pouvons requêter en temps réel les taux de prêt des banques pour une agence immobilière, etc."
		},
		{
			title: 'Propriété, hébergement, nom de domaine et abonnement',
			p: "Nos clients se posent se questionnent souvent quant à la propriété de leur site. À qui appartient-il? Il vous appartient, parce que vous allez souscrire auprès d'un hebergeur et bien souvent cet hébergeur sera également la plateforme sur laquelle votre site sera réalisée et sur laquelle votre nom de domaine sera acheté. Cet souscription est à votre nom dès lors, vous êtes propriétaire de votre site.  Dans le cas ou nos codons votre site internet de A à Z, nous signons un contrat de maintenance et quand vous souhaiterez rompre ce contrat de maintenance, le site vous reviendra en main propre (le dossier contenant l'ensemble du code de votre site)."
		},
		{
			title: "Qu'est-ce que peut m'apporter une agence Web?",
			p: "Nos clients se posent se questionnent souvent quant à la propriété de leur site. À qui appartient-il? Il vous appartient, parce que vous allez souscrire auprès d'un hebergeur et bien souvent cet hébergeur sera également la plateforme sur laquelle votre site sera réalisée et sur laquelle votre nom de domaine sera acheté. Cet souscription est à votre nom dès lors, vous êtes propriétaire de votre site.  Dans le cas ou nos codons votre site internet de A à Z, nous signons un contrat de maintenance et quand vous souhaiterez rompre ce contrat de maintenance, le site vous reviendra en main propre (le dossier contenant l'ensemble du code de votre site)."
		},
		{
			title: 'Comment être premier sur Google?',
			p: "Nos clients se posent se questionnent souvent quant à la propriété de leur site. À qui appartient-il? Il vous appartient, parce que vous allez souscrire auprès d'un hebergeur et bien souvent cet hébergeur sera également la plateforme sur laquelle votre site sera réalisée et sur laquelle votre nom de domaine sera acheté. Cet souscription est à votre nom dès lors, vous êtes propriétaire de votre site.  Dans le cas ou nos codons votre site internet de A à Z, nous signons un contrat de maintenance et quand vous souhaiterez rompre ce contrat de maintenance, le site vous reviendra en main propre (le dossier contenant l'ensemble du code de votre site)."
		}
	];


    let seo = [
		{
			title:
				'Créer un site internet pour développer son activité est-il encore pertinent en 2025 ?',
			p: 'Les choses ont changé, c’est indéniable ! Les intentions de recherche de la part des internautes ont explosé sur les réseaux sociaux ces trois dernières années. Aujourd’hui, les gens recherchent d’abord un produit sur TikTok, Facebook ou Instagram, parfois avant même de consulter le web. Pourquoi ? Parce que les contenus des réseaux sociaux sont rapides (les shorts), efficaces et concis. Prenons un exemple : je cherche un aspirateur-laveur. Je recherche sur TikTok et trouve rapidement une vidéo sur un produit ou un comparatif de plusieurs produits. C’est rapide et efficace. Cette vidéo me fournit des liens vers le fabricant. Je clique et suis dirigé vers le lien du fabricant. J’achète. C’est rapide et direct. Prenons maintenant le cas du web et de ses moteurs de recherche classiques. J’effectue la même recherche. Google me propose des liens sur une page que je dois faire défiler, et je dois cliquer sur chacun de ces liens qui ouvrent la page d’accueil d’un site de fabricant d’aspirateurs-laveurs ou d’un comparatif de prix. Je dois naviguer sur les pages pour trouver la réponse à ma recherche. Parfois, je ne trouve pas l’information tout de suite, et c’est là que les réseaux sociaux peuvent faire la différence. Chez Gralypho, agence web experte dans le domaine du web et de la création de sites internet et d’applications, nous pensons, comme beaucoup de spécialistes du SEO, qu’une présence en ligne à travers un site web est essentielle, tout comme une présence sur les réseaux sociaux. L’un mène à l’autre, et vice versa. C’est une maïeutique essentielle à un développement d’activité sans faille et à un business pérenne.'
		},
		{
			title: 'Avec quels outils créer son site internet en 2025 ?',
			p: 'Nos tarifs démarrent à 500 euros pour un blog, 1000 euros pour une landing page (site page unique), 1500 euros pour un site vitrine, 2000 euros pour un site corporate, 2500 euros pour un site e-commerce, 3000 euros pour un site institutionnel, 3500 euros pour un site sur mesure entièrement codé (garantie sécurité et design innovant et sur mesure).'
		},
		{
			title: "Aujourd'hui je peux créer mon site internet avec l'IA, comment - pourquoi ?",
			p: 'Le délai de conception et de mise en ligne dépend du type de site internet que vous souhaitez. En règle général, le délai de conception et de mise en ligne est de 2 semaines pour un blog, 3 semaines pour une landing page, 4 semaines pour un site vitrine, 5 semaines pour un site corporate, 6 semaines pour un site e-commerce, 7 semaines pour un site institutionnel, 8 semaines pour un site sur mesure entièrement codé (garantie sécurité et design innovant et sur mesure).'
		},
		{
			title: 'Sites Dynamiques - Possibilités et fonctionnalités',
			p: "Nos clients sont parfois surpris de découvir tout ce qu'un site internet peut contenir comme fonctionnalité et possibilité. En effet, un site internet peut contenir un blog, un portfolio, un formulaire de contact, un chatbot, un espace membre, un espace client, un espace administrateur, un espace de paiement, de réservation, de commande (etc).  Mais nous pouvons également collecter des données, les stocker, les consulter, les anaylser et s'en servir pour orienter votre activité. Nous pouvons également établir des requêtes API. C'est à dire que nous pouvons consulter des données externes contenues dans un autre site, une autre application que la vôtre et les rapatrier dans votre site pour les afficher. Par exemple, nous pouvons établir une requête auprès d'un service météo et afficher toutes les données métérologiques de votre localité en temps réel ou s'en servir pour valider l'ouverture d'un parc d'activité d'accrobranche, par exemple. Ou encore, nous pouvons requêter en temps réel les taux de prêt des banques pour une agence immobilière, etc."
		},
		{
			title: 'Propriété, hébergement, nom de domaine et abonnement',
			p: "Nos clients se posent se questionnent souvent quant à la propriété de leur site. À qui appartient-il? Il vous appartient, parce que vous allez souscrire auprès d'un hebergeur et bien souvent cet hébergeur sera également la plateforme sur laquelle votre site sera réalisée et sur laquelle votre nom de domaine sera acheté. Cet souscription est à votre nom dès lors, vous êtes propriétaire de votre site.  Dans le cas ou nos codons votre site internet de A à Z, nous signons un contrat de maintenance et quand vous souhaiterez rompre ce contrat de maintenance, le site vous reviendra en main propre (le dossier contenant l'ensemble du code de votre site)."
		},
		{
			title: "Qu'est-ce que peut m'apporter une agence Web?",
			p: "Nos clients se posent se questionnent souvent quant à la propriété de leur site. À qui appartient-il? Il vous appartient, parce que vous allez souscrire auprès d'un hebergeur et bien souvent cet hébergeur sera également la plateforme sur laquelle votre site sera réalisée et sur laquelle votre nom de domaine sera acheté. Cet souscription est à votre nom dès lors, vous êtes propriétaire de votre site.  Dans le cas ou nos codons votre site internet de A à Z, nous signons un contrat de maintenance et quand vous souhaiterez rompre ce contrat de maintenance, le site vous reviendra en main propre (le dossier contenant l'ensemble du code de votre site)."
		},
		{
			title: 'Comment être premier sur Google?',
			p: "Nos clients se posent se questionnent souvent quant à la propriété de leur site. À qui appartient-il? Il vous appartient, parce que vous allez souscrire auprès d'un hebergeur et bien souvent cet hébergeur sera également la plateforme sur laquelle votre site sera réalisée et sur laquelle votre nom de domaine sera acheté. Cet souscription est à votre nom dès lors, vous êtes propriétaire de votre site.  Dans le cas ou nos codons votre site internet de A à Z, nous signons un contrat de maintenance et quand vous souhaiterez rompre ce contrat de maintenance, le site vous reviendra en main propre (le dossier contenant l'ensemble du code de votre site)."
		}
	];

    let reseaux = [
		{
			title:
				'Créer un site internet pour développer son activité est-il encore pertinent en 2025 ?',
			p: 'Les choses ont changé, c’est indéniable ! Les intentions de recherche de la part des internautes ont explosé sur les réseaux sociaux ces trois dernières années. Aujourd’hui, les gens recherchent d’abord un produit sur TikTok, Facebook ou Instagram, parfois avant même de consulter le web. Pourquoi ? Parce que les contenus des réseaux sociaux sont rapides (les shorts), efficaces et concis. Prenons un exemple : je cherche un aspirateur-laveur. Je recherche sur TikTok et trouve rapidement une vidéo sur un produit ou un comparatif de plusieurs produits. C’est rapide et efficace. Cette vidéo me fournit des liens vers le fabricant. Je clique et suis dirigé vers le lien du fabricant. J’achète. C’est rapide et direct. Prenons maintenant le cas du web et de ses moteurs de recherche classiques. J’effectue la même recherche. Google me propose des liens sur une page que je dois faire défiler, et je dois cliquer sur chacun de ces liens qui ouvrent la page d’accueil d’un site de fabricant d’aspirateurs-laveurs ou d’un comparatif de prix. Je dois naviguer sur les pages pour trouver la réponse à ma recherche. Parfois, je ne trouve pas l’information tout de suite, et c’est là que les réseaux sociaux peuvent faire la différence. Chez Gralypho, agence web experte dans le domaine du web et de la création de sites internet et d’applications, nous pensons, comme beaucoup de spécialistes du SEO, qu’une présence en ligne à travers un site web est essentielle, tout comme une présence sur les réseaux sociaux. L’un mène à l’autre, et vice versa. C’est une maïeutique essentielle à un développement d’activité sans faille et à un business pérenne.'
		},
		{
			title: 'Avec quels outils créer son site internet en 2025 ?',
			p: 'Nos tarifs démarrent à 500 euros pour un blog, 1000 euros pour une landing page (site page unique), 1500 euros pour un site vitrine, 2000 euros pour un site corporate, 2500 euros pour un site e-commerce, 3000 euros pour un site institutionnel, 3500 euros pour un site sur mesure entièrement codé (garantie sécurité et design innovant et sur mesure).'
		},
		{
			title: "Aujourd'hui je peux créer mon site internet avec l'IA, comment - pourquoi ?",
			p: 'Le délai de conception et de mise en ligne dépend du type de site internet que vous souhaitez. En règle général, le délai de conception et de mise en ligne est de 2 semaines pour un blog, 3 semaines pour une landing page, 4 semaines pour un site vitrine, 5 semaines pour un site corporate, 6 semaines pour un site e-commerce, 7 semaines pour un site institutionnel, 8 semaines pour un site sur mesure entièrement codé (garantie sécurité et design innovant et sur mesure).'
		},
		{
			title: 'Sites Dynamiques - Possibilités et fonctionnalités',
			p: "Nos clients sont parfois surpris de découvir tout ce qu'un site internet peut contenir comme fonctionnalité et possibilité. En effet, un site internet peut contenir un blog, un portfolio, un formulaire de contact, un chatbot, un espace membre, un espace client, un espace administrateur, un espace de paiement, de réservation, de commande (etc).  Mais nous pouvons également collecter des données, les stocker, les consulter, les anaylser et s'en servir pour orienter votre activité. Nous pouvons également établir des requêtes API. C'est à dire que nous pouvons consulter des données externes contenues dans un autre site, une autre application que la vôtre et les rapatrier dans votre site pour les afficher. Par exemple, nous pouvons établir une requête auprès d'un service météo et afficher toutes les données métérologiques de votre localité en temps réel ou s'en servir pour valider l'ouverture d'un parc d'activité d'accrobranche, par exemple. Ou encore, nous pouvons requêter en temps réel les taux de prêt des banques pour une agence immobilière, etc."
		},
		{
			title: 'Propriété, hébergement, nom de domaine et abonnement',
			p: "Nos clients se posent se questionnent souvent quant à la propriété de leur site. À qui appartient-il? Il vous appartient, parce que vous allez souscrire auprès d'un hebergeur et bien souvent cet hébergeur sera également la plateforme sur laquelle votre site sera réalisée et sur laquelle votre nom de domaine sera acheté. Cet souscription est à votre nom dès lors, vous êtes propriétaire de votre site.  Dans le cas ou nos codons votre site internet de A à Z, nous signons un contrat de maintenance et quand vous souhaiterez rompre ce contrat de maintenance, le site vous reviendra en main propre (le dossier contenant l'ensemble du code de votre site)."
		},
		{
			title: "Qu'est-ce que peut m'apporter une agence Web?",
			p: "Nos clients se posent se questionnent souvent quant à la propriété de leur site. À qui appartient-il? Il vous appartient, parce que vous allez souscrire auprès d'un hebergeur et bien souvent cet hébergeur sera également la plateforme sur laquelle votre site sera réalisée et sur laquelle votre nom de domaine sera acheté. Cet souscription est à votre nom dès lors, vous êtes propriétaire de votre site.  Dans le cas ou nos codons votre site internet de A à Z, nous signons un contrat de maintenance et quand vous souhaiterez rompre ce contrat de maintenance, le site vous reviendra en main propre (le dossier contenant l'ensemble du code de votre site)."
		},
		{
			title: 'Comment être premier sur Google?',
			p: "Nos clients se posent se questionnent souvent quant à la propriété de leur site. À qui appartient-il? Il vous appartient, parce que vous allez souscrire auprès d'un hebergeur et bien souvent cet hébergeur sera également la plateforme sur laquelle votre site sera réalisée et sur laquelle votre nom de domaine sera acheté. Cet souscription est à votre nom dès lors, vous êtes propriétaire de votre site.  Dans le cas ou nos codons votre site internet de A à Z, nous signons un contrat de maintenance et quand vous souhaiterez rompre ce contrat de maintenance, le site vous reviendra en main propre (le dossier contenant l'ensemble du code de votre site)."
		}
	];


    let communication = [
		{
			title:
				'Créer un site internet pour développer son activité est-il encore pertinent en 2025 ?',
			p: 'Les choses ont changé, c’est indéniable ! Les intentions de recherche de la part des internautes ont explosé sur les réseaux sociaux ces trois dernières années. Aujourd’hui, les gens recherchent d’abord un produit sur TikTok, Facebook ou Instagram, parfois avant même de consulter le web. Pourquoi ? Parce que les contenus des réseaux sociaux sont rapides (les shorts), efficaces et concis. Prenons un exemple : je cherche un aspirateur-laveur. Je recherche sur TikTok et trouve rapidement une vidéo sur un produit ou un comparatif de plusieurs produits. C’est rapide et efficace. Cette vidéo me fournit des liens vers le fabricant. Je clique et suis dirigé vers le lien du fabricant. J’achète. C’est rapide et direct. Prenons maintenant le cas du web et de ses moteurs de recherche classiques. J’effectue la même recherche. Google me propose des liens sur une page que je dois faire défiler, et je dois cliquer sur chacun de ces liens qui ouvrent la page d’accueil d’un site de fabricant d’aspirateurs-laveurs ou d’un comparatif de prix. Je dois naviguer sur les pages pour trouver la réponse à ma recherche. Parfois, je ne trouve pas l’information tout de suite, et c’est là que les réseaux sociaux peuvent faire la différence. Chez Gralypho, agence web experte dans le domaine du web et de la création de sites internet et d’applications, nous pensons, comme beaucoup de spécialistes du SEO, qu’une présence en ligne à travers un site web est essentielle, tout comme une présence sur les réseaux sociaux. L’un mène à l’autre, et vice versa. C’est une maïeutique essentielle à un développement d’activité sans faille et à un business pérenne.'
		},
		{
			title: 'Avec quels outils créer son site internet en 2025 ?',
			p: 'Nos tarifs démarrent à 500 euros pour un blog, 1000 euros pour une landing page (site page unique), 1500 euros pour un site vitrine, 2000 euros pour un site corporate, 2500 euros pour un site e-commerce, 3000 euros pour un site institutionnel, 3500 euros pour un site sur mesure entièrement codé (garantie sécurité et design innovant et sur mesure).'
		},
		{
			title: "Aujourd'hui je peux créer mon site internet avec l'IA, comment - pourquoi ?",
			p: 'Le délai de conception et de mise en ligne dépend du type de site internet que vous souhaitez. En règle général, le délai de conception et de mise en ligne est de 2 semaines pour un blog, 3 semaines pour une landing page, 4 semaines pour un site vitrine, 5 semaines pour un site corporate, 6 semaines pour un site e-commerce, 7 semaines pour un site institutionnel, 8 semaines pour un site sur mesure entièrement codé (garantie sécurité et design innovant et sur mesure).'
		},
		{
			title: 'Sites Dynamiques - Possibilités et fonctionnalités',
			p: "Nos clients sont parfois surpris de découvir tout ce qu'un site internet peut contenir comme fonctionnalité et possibilité. En effet, un site internet peut contenir un blog, un portfolio, un formulaire de contact, un chatbot, un espace membre, un espace client, un espace administrateur, un espace de paiement, de réservation, de commande (etc).  Mais nous pouvons également collecter des données, les stocker, les consulter, les anaylser et s'en servir pour orienter votre activité. Nous pouvons également établir des requêtes API. C'est à dire que nous pouvons consulter des données externes contenues dans un autre site, une autre application que la vôtre et les rapatrier dans votre site pour les afficher. Par exemple, nous pouvons établir une requête auprès d'un service météo et afficher toutes les données métérologiques de votre localité en temps réel ou s'en servir pour valider l'ouverture d'un parc d'activité d'accrobranche, par exemple. Ou encore, nous pouvons requêter en temps réel les taux de prêt des banques pour une agence immobilière, etc."
		},
		{
			title: 'Propriété, hébergement, nom de domaine et abonnement',
			p: "Nos clients se posent se questionnent souvent quant à la propriété de leur site. À qui appartient-il? Il vous appartient, parce que vous allez souscrire auprès d'un hebergeur et bien souvent cet hébergeur sera également la plateforme sur laquelle votre site sera réalisée et sur laquelle votre nom de domaine sera acheté. Cet souscription est à votre nom dès lors, vous êtes propriétaire de votre site.  Dans le cas ou nos codons votre site internet de A à Z, nous signons un contrat de maintenance et quand vous souhaiterez rompre ce contrat de maintenance, le site vous reviendra en main propre (le dossier contenant l'ensemble du code de votre site)."
		},
		{
			title: "Qu'est-ce que peut m'apporter une agence Web?",
			p: "Nos clients se posent se questionnent souvent quant à la propriété de leur site. À qui appartient-il? Il vous appartient, parce que vous allez souscrire auprès d'un hebergeur et bien souvent cet hébergeur sera également la plateforme sur laquelle votre site sera réalisée et sur laquelle votre nom de domaine sera acheté. Cet souscription est à votre nom dès lors, vous êtes propriétaire de votre site.  Dans le cas ou nos codons votre site internet de A à Z, nous signons un contrat de maintenance et quand vous souhaiterez rompre ce contrat de maintenance, le site vous reviendra en main propre (le dossier contenant l'ensemble du code de votre site)."
		},
		{
			title: 'Comment être premier sur Google?',
			p: "Nos clients se posent se questionnent souvent quant à la propriété de leur site. À qui appartient-il? Il vous appartient, parce que vous allez souscrire auprès d'un hebergeur et bien souvent cet hébergeur sera également la plateforme sur laquelle votre site sera réalisée et sur laquelle votre nom de domaine sera acheté. Cet souscription est à votre nom dès lors, vous êtes propriétaire de votre site.  Dans le cas ou nos codons votre site internet de A à Z, nous signons un contrat de maintenance et quand vous souhaiterez rompre ce contrat de maintenance, le site vous reviendra en main propre (le dossier contenant l'ensemble du code de votre site)."
		}
	];

    let digitale = [
		{
			title:
				'Créer un site internet pour développer son activité est-il encore pertinent en 2025 ?',
			p: 'Les choses ont changé, c’est indéniable ! Les intentions de recherche de la part des internautes ont explosé sur les réseaux sociaux ces trois dernières années. Aujourd’hui, les gens recherchent d’abord un produit sur TikTok, Facebook ou Instagram, parfois avant même de consulter le web. Pourquoi ? Parce que les contenus des réseaux sociaux sont rapides (les shorts), efficaces et concis. Prenons un exemple : je cherche un aspirateur-laveur. Je recherche sur TikTok et trouve rapidement une vidéo sur un produit ou un comparatif de plusieurs produits. C’est rapide et efficace. Cette vidéo me fournit des liens vers le fabricant. Je clique et suis dirigé vers le lien du fabricant. J’achète. C’est rapide et direct. Prenons maintenant le cas du web et de ses moteurs de recherche classiques. J’effectue la même recherche. Google me propose des liens sur une page que je dois faire défiler, et je dois cliquer sur chacun de ces liens qui ouvrent la page d’accueil d’un site de fabricant d’aspirateurs-laveurs ou d’un comparatif de prix. Je dois naviguer sur les pages pour trouver la réponse à ma recherche. Parfois, je ne trouve pas l’information tout de suite, et c’est là que les réseaux sociaux peuvent faire la différence. Chez Gralypho, agence web experte dans le domaine du web et de la création de sites internet et d’applications, nous pensons, comme beaucoup de spécialistes du SEO, qu’une présence en ligne à travers un site web est essentielle, tout comme une présence sur les réseaux sociaux. L’un mène à l’autre, et vice versa. C’est une maïeutique essentielle à un développement d’activité sans faille et à un business pérenne.'
		},
		{
			title: 'Avec quels outils créer son site internet en 2025 ?',
			p: 'Nos tarifs démarrent à 500 euros pour un blog, 1000 euros pour une landing page (site page unique), 1500 euros pour un site vitrine, 2000 euros pour un site corporate, 2500 euros pour un site e-commerce, 3000 euros pour un site institutionnel, 3500 euros pour un site sur mesure entièrement codé (garantie sécurité et design innovant et sur mesure).'
		},
		{
			title: "Aujourd'hui je peux créer mon site internet avec l'IA, comment - pourquoi ?",
			p: 'Le délai de conception et de mise en ligne dépend du type de site internet que vous souhaitez. En règle général, le délai de conception et de mise en ligne est de 2 semaines pour un blog, 3 semaines pour une landing page, 4 semaines pour un site vitrine, 5 semaines pour un site corporate, 6 semaines pour un site e-commerce, 7 semaines pour un site institutionnel, 8 semaines pour un site sur mesure entièrement codé (garantie sécurité et design innovant et sur mesure).'
		},
		{
			title: 'Sites Dynamiques - Possibilités et fonctionnalités',
			p: "Nos clients sont parfois surpris de découvir tout ce qu'un site internet peut contenir comme fonctionnalité et possibilité. En effet, un site internet peut contenir un blog, un portfolio, un formulaire de contact, un chatbot, un espace membre, un espace client, un espace administrateur, un espace de paiement, de réservation, de commande (etc).  Mais nous pouvons également collecter des données, les stocker, les consulter, les anaylser et s'en servir pour orienter votre activité. Nous pouvons également établir des requêtes API. C'est à dire que nous pouvons consulter des données externes contenues dans un autre site, une autre application que la vôtre et les rapatrier dans votre site pour les afficher. Par exemple, nous pouvons établir une requête auprès d'un service météo et afficher toutes les données métérologiques de votre localité en temps réel ou s'en servir pour valider l'ouverture d'un parc d'activité d'accrobranche, par exemple. Ou encore, nous pouvons requêter en temps réel les taux de prêt des banques pour une agence immobilière, etc."
		},
		{
			title: 'Propriété, hébergement, nom de domaine et abonnement',
			p: "Nos clients se posent se questionnent souvent quant à la propriété de leur site. À qui appartient-il? Il vous appartient, parce que vous allez souscrire auprès d'un hebergeur et bien souvent cet hébergeur sera également la plateforme sur laquelle votre site sera réalisée et sur laquelle votre nom de domaine sera acheté. Cet souscription est à votre nom dès lors, vous êtes propriétaire de votre site.  Dans le cas ou nos codons votre site internet de A à Z, nous signons un contrat de maintenance et quand vous souhaiterez rompre ce contrat de maintenance, le site vous reviendra en main propre (le dossier contenant l'ensemble du code de votre site)."
		},
		{
			title: "Qu'est-ce que peut m'apporter une agence Web?",
			p: "Nos clients se posent se questionnent souvent quant à la propriété de leur site. À qui appartient-il? Il vous appartient, parce que vous allez souscrire auprès d'un hebergeur et bien souvent cet hébergeur sera également la plateforme sur laquelle votre site sera réalisée et sur laquelle votre nom de domaine sera acheté. Cet souscription est à votre nom dès lors, vous êtes propriétaire de votre site.  Dans le cas ou nos codons votre site internet de A à Z, nous signons un contrat de maintenance et quand vous souhaiterez rompre ce contrat de maintenance, le site vous reviendra en main propre (le dossier contenant l'ensemble du code de votre site)."
		},
		{
			title: 'Comment être premier sur Google?',
			p: "Nos clients se posent se questionnent souvent quant à la propriété de leur site. À qui appartient-il? Il vous appartient, parce que vous allez souscrire auprès d'un hebergeur et bien souvent cet hébergeur sera également la plateforme sur laquelle votre site sera réalisée et sur laquelle votre nom de domaine sera acheté. Cet souscription est à votre nom dès lors, vous êtes propriétaire de votre site.  Dans le cas ou nos codons votre site internet de A à Z, nous signons un contrat de maintenance et quand vous souhaiterez rompre ce contrat de maintenance, le site vous reviendra en main propre (le dossier contenant l'ensemble du code de votre site)."
		}
	];


    let tarif = [
		{
			title:
				'Créer un site internet pour développer son activité est-il encore pertinent en 2025 ?',
			p: 'Les choses ont changé, c’est indéniable ! Les intentions de recherche de la part des internautes ont explosé sur les réseaux sociaux ces trois dernières années. Aujourd’hui, les gens recherchent d’abord un produit sur TikTok, Facebook ou Instagram, parfois avant même de consulter le web. Pourquoi ? Parce que les contenus des réseaux sociaux sont rapides (les shorts), efficaces et concis. Prenons un exemple : je cherche un aspirateur-laveur. Je recherche sur TikTok et trouve rapidement une vidéo sur un produit ou un comparatif de plusieurs produits. C’est rapide et efficace. Cette vidéo me fournit des liens vers le fabricant. Je clique et suis dirigé vers le lien du fabricant. J’achète. C’est rapide et direct. Prenons maintenant le cas du web et de ses moteurs de recherche classiques. J’effectue la même recherche. Google me propose des liens sur une page que je dois faire défiler, et je dois cliquer sur chacun de ces liens qui ouvrent la page d’accueil d’un site de fabricant d’aspirateurs-laveurs ou d’un comparatif de prix. Je dois naviguer sur les pages pour trouver la réponse à ma recherche. Parfois, je ne trouve pas l’information tout de suite, et c’est là que les réseaux sociaux peuvent faire la différence. Chez Gralypho, agence web experte dans le domaine du web et de la création de sites internet et d’applications, nous pensons, comme beaucoup de spécialistes du SEO, qu’une présence en ligne à travers un site web est essentielle, tout comme une présence sur les réseaux sociaux. L’un mène à l’autre, et vice versa. C’est une maïeutique essentielle à un développement d’activité sans faille et à un business pérenne.'
		},
		{
			title: 'Avec quels outils créer son site internet en 2025 ?',
			p: 'Nos tarifs démarrent à 500 euros pour un blog, 1000 euros pour une landing page (site page unique), 1500 euros pour un site vitrine, 2000 euros pour un site corporate, 2500 euros pour un site e-commerce, 3000 euros pour un site institutionnel, 3500 euros pour un site sur mesure entièrement codé (garantie sécurité et design innovant et sur mesure).'
		},
		{
			title: "Aujourd'hui je peux créer mon site internet avec l'IA, comment - pourquoi ?",
			p: 'Le délai de conception et de mise en ligne dépend du type de site internet que vous souhaitez. En règle général, le délai de conception et de mise en ligne est de 2 semaines pour un blog, 3 semaines pour une landing page, 4 semaines pour un site vitrine, 5 semaines pour un site corporate, 6 semaines pour un site e-commerce, 7 semaines pour un site institutionnel, 8 semaines pour un site sur mesure entièrement codé (garantie sécurité et design innovant et sur mesure).'
		},
		{
			title: 'Sites Dynamiques - Possibilités et fonctionnalités',
			p: "Nos clients sont parfois surpris de découvir tout ce qu'un site internet peut contenir comme fonctionnalité et possibilité. En effet, un site internet peut contenir un blog, un portfolio, un formulaire de contact, un chatbot, un espace membre, un espace client, un espace administrateur, un espace de paiement, de réservation, de commande (etc).  Mais nous pouvons également collecter des données, les stocker, les consulter, les anaylser et s'en servir pour orienter votre activité. Nous pouvons également établir des requêtes API. C'est à dire que nous pouvons consulter des données externes contenues dans un autre site, une autre application que la vôtre et les rapatrier dans votre site pour les afficher. Par exemple, nous pouvons établir une requête auprès d'un service météo et afficher toutes les données métérologiques de votre localité en temps réel ou s'en servir pour valider l'ouverture d'un parc d'activité d'accrobranche, par exemple. Ou encore, nous pouvons requêter en temps réel les taux de prêt des banques pour une agence immobilière, etc."
		},
		{
			title: 'Propriété, hébergement, nom de domaine et abonnement',
			p: "Nos clients se posent se questionnent souvent quant à la propriété de leur site. À qui appartient-il? Il vous appartient, parce que vous allez souscrire auprès d'un hebergeur et bien souvent cet hébergeur sera également la plateforme sur laquelle votre site sera réalisée et sur laquelle votre nom de domaine sera acheté. Cet souscription est à votre nom dès lors, vous êtes propriétaire de votre site.  Dans le cas ou nos codons votre site internet de A à Z, nous signons un contrat de maintenance et quand vous souhaiterez rompre ce contrat de maintenance, le site vous reviendra en main propre (le dossier contenant l'ensemble du code de votre site)."
		},
		{
			title: "Qu'est-ce que peut m'apporter une agence Web?",
			p: "Nos clients se posent se questionnent souvent quant à la propriété de leur site. À qui appartient-il? Il vous appartient, parce que vous allez souscrire auprès d'un hebergeur et bien souvent cet hébergeur sera également la plateforme sur laquelle votre site sera réalisée et sur laquelle votre nom de domaine sera acheté. Cet souscription est à votre nom dès lors, vous êtes propriétaire de votre site.  Dans le cas ou nos codons votre site internet de A à Z, nous signons un contrat de maintenance et quand vous souhaiterez rompre ce contrat de maintenance, le site vous reviendra en main propre (le dossier contenant l'ensemble du code de votre site)."
		},
		{
			title: 'Comment être premier sur Google?',
			p: "Nos clients se posent se questionnent souvent quant à la propriété de leur site. À qui appartient-il? Il vous appartient, parce que vous allez souscrire auprès d'un hebergeur et bien souvent cet hébergeur sera également la plateforme sur laquelle votre site sera réalisée et sur laquelle votre nom de domaine sera acheté. Cet souscription est à votre nom dès lors, vous êtes propriétaire de votre site.  Dans le cas ou nos codons votre site internet de A à Z, nous signons un contrat de maintenance et quand vous souhaiterez rompre ce contrat de maintenance, le site vous reviendra en main propre (le dossier contenant l'ensemble du code de votre site)."
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
	<h2>FAQ : Vos questions sur la création de <span>site internet </span>.</h2>
	<!-- <h3>
		Découvrez les réponses à toutes vos questions sur la création de site internet sur mesure :
		prix, délais, avantages et bien plus.
	</h3> -->
	{#each site as tab}
		<CardsSectionB title={tab.title} p={tab.p} />
	{/each}
</div>

<div class="wrapper-SectionB">
	<h2>FAQ : Vos questions sur la création <span>d'application</span>.</h2>
	<!-- <h3>
		Découvrez les réponses à toutes vos questions sur la création de site internet sur mesure :
		prix, délais, avantages et bien plus.
	</h3> -->
	{#each application as tab}
		<CardsSectionB title={tab.title} p={tab.p} />
	{/each}
</div>


<div class="wrapper-SectionB">
	<h2>FAQ : Vos questions sur le référencement et l'optimisation <span>SEO</span>.</h2>
	<!-- <h3>
		Découvrez les réponses à toutes vos questions sur la création de site internet sur mesure :
		prix, délais, avantages et bien plus.
	</h3> -->
	{#each seo as tab}
		<CardsSectionB title={tab.title} p={tab.p} />
	{/each}
</div>


<div class="wrapper-SectionB">
	<h2>FAQ : Vos questions sur la gestion de vos <span>réseaux sociaux</span>.</h2>
	<!-- <h3>
		Découvrez les réponses à toutes vos questions sur la création de site internet sur mesure :
		prix, délais, avantages et bien plus.
	</h3> -->
	{#each reseaux as tab}
		<CardsSectionB title={tab.title} p={tab.p} />
	{/each}
</div>


<div class="wrapper-SectionB">
	<h2>FAQ : Vos questions sur la création de <span>logos, designs et supports de communication</span>.</h2>
	<!-- <h3>
		Découvrez les réponses à toutes vos questions sur la création de site internet sur mesure :
		prix, délais, avantages et bien plus.
	</h3> -->
	{#each communication as tab}
		<CardsSectionB title={tab.title} p={tab.p} />
	{/each}
</div>



<div class="wrapper-SectionB">
	<h2>FAQ : Vos questions sur notre service de <span>stratégie digitale</span>.</h2>
	<!-- <h3>
		Découvrez les réponses à toutes vos questions sur la création de site internet sur mesure :
		prix, délais, avantages et bien plus.
	</h3> -->
	{#each digitale as tab}
		<CardsSectionB title={tab.title} p={tab.p} />
	{/each}
</div>


<div class="wrapper-SectionB">
	<h2>FAQ : Vos questions sur les <span>tarifs et contrats</span>.</h2>
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
