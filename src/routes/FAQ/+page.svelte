<script>
	import Header from '../../sections/Header.svelte';
	import CardsSectionB from '../../Components/CardsSectionB.svelte';
	import { fade } from 'svelte/transition';

	let site = [
		{
			title: 'Créer un site internet pour développer son activité est-il encore pertinent en 2025 ?',
			p: `Oui, absolument ! Mais il faut prendre en compte les évolutions technologiques et les nouvelles tendances. Les intentions de recherche ont explosé sur les réseaux sociaux. Aujourd’hui, les utilisateurs recherchent souvent un produit sur Instagram, LinkedIn ou TikTok avant même de consulter les moteurs de recherche traditionnels. Cependant, ces réseaux redirigent systématiquement vers un site internet vitrine ou marchand pour concrétiser l'action (achat, devis, signature). L'un ne va pas sans l'autre : le site internet reste le socle incontournable de votre crédibilité digitale. <a href="/creation-site-internet">Découvrez nos solutions de création de site web.</a>`
		},
		{
			title: 'Quels sont les outils pour créer un site internet aujourd\'hui ?',
			p: `Le marché propose de nombreuses options (WordPress, Webflow, Shopify ou du code sur-mesure en SvelteKit/React). Chez Gralypho, nous n'imposons aucun outil : nous choisissons la technologie la plus adaptée à vos ambitions techniques, à vos exigences de vitesse et à votre budget de maintenance. Notre expertise vous évite les pièges techniques et vous fait gagner un temps précieux. <a href="/creation-site-internet">En savoir plus sur nos technologies.</a>`
		},
		{
			title: "Comment créer un site internet gratuitement avec l'IA ?",
			p: `L'intelligence artificielle permet de générer des structures de code ou des maquettes à une vitesse fulgurante. Cependant, concevoir un site internet performant ne s'improvise pas : l'IA ne gère pas la stratégie SEO locale, la finesse du design UX, la sécurité des serveurs, ni la maintenance en conditions opérationnelles. Pour obtenir un site visible et qui génère réellement des clients, l'accompagnement par des ingénieurs et designers du web reste indispensable.`
		},
		{
			title: 'Je veux créer un site pour ma PME. Quelles sont les étapes ?',
			p: `Notre méthodologie est simple et transparente : <br><strong>1. Définition des objectifs :</strong> analyse fine de vos cibles et de vos concurrents. <br><strong>2. Conception UX/UI :</strong> maquettage et design graphique sur-mesure. <br><strong>3. Développement :</strong> codage propre, ultra-rapide et optimisé pour le <a href="/referencement-seo-sea">SEO</a>. <br><strong>4. Recettage & Lancement :</strong> tests multi-navigateurs et mise en ligne sécurisée. <br><strong>5. Suivi & Maintenance :</strong> mises à jour régulières pour pérenniser votre investissement.`
		},
		{
			title: 'Quel est le budget pour la création d’un site internet ?',
			p: `Chez Gralypho, nos tarifs sont étudiés au plus juste pour offrir un excellent retour sur investissement : <br>• <strong>Landing Page (conversion) :</strong> à partir de 799 € TTC. <br>• <strong>Site Vitrine Pro (5 pages) :</strong> à partir de 1399 € TTC (livré sous 3 jours). <br>• <strong>E-Commerce & Médias :</strong> à partir de 3999 € TTC. <br>• <strong>Site Custom d'élite ou CMS Headless :</strong> sur devis en fonction de la complexité. <br>Chaque projet inclut un design personnalisé et des optimisations de vitesse. <a href="/#section-form">Demandez un devis personnalisé.</a>`
		},
		{
			title: "Qu'est-ce qu'une landing page ?",
			p: `<a href="/creation-site-internet">Une landing page</a> est une page web unique conçue dans un seul but : convertir vos visiteurs en prospects qualifiés ou en acheteurs. Dépouillée de tout menu de navigation distrayant, elle concentre l'attention sur un message fort et un formulaire d'action. C'est l'outil indispensable pour maximiser le retour de vos campagnes de publicité Google Ads ou Meta Ads.`
		}
	];

	let application = [
		{
			title: 'Pourquoi investir dans une application mobile ou web ?',
			p: `Une application mobile ou web est un levier exceptionnel pour fidéliser vos clients et moderniser vos processus. Elle permet de : <br>• Maintenir un contact direct via les <strong>notifications push</strong>. <br>• Offrir une expérience utilisateur (UX) ultra-rapide et immersive. <br>• Exploiter les capteurs du téléphone (GPS, caméra, biométrie). <br>• Installer votre marque directement sur l'écran d'accueil de vos clients. <a href="/creation-application">Découvrez notre offre d'applications.</a>`
		},
		{
			title: "Qu'est-ce qu'une application PWA ?",
			p: `Une <a href="/creation-application">Progressive Web App (PWA)</a> est une technologie hybride combinant les forces d'un site web et d'une application mobile. Elle s'installe en 1 clic sur n'importe quel smartphone directement depuis le navigateur, sans passer par l'App Store ou Google Play Store (donc sans frais de commission). Elle fonctionne hors-ligne, envoie des pushs, et s'avère 3x plus rapide à développer qu'une app traditionnelle.`
		},
		{
			title: "Quel est le coût d'une application web ou mobile ?",
			p: `Le développement d'une application dépend de sa complexité et de son architecture. Chez Gralypho : <br>• <strong>Progressive Web App (PWA) :</strong> à partir de 6999 € TTC. <br>• <strong>Application Native iOS & Android :</strong> à partir de 9999 € TTC. <br>Chaque application fait l'objet d'un cahier des charges rigoureux pour vous garantir une sécurité matérielle maximale. <a href="/creation-application">En savoir plus sur nos offres.</a>`
		},
		{
			title: "Quel est le délai de conception et de livraison d'une application ?",
			p: `La conception d'une application est un processus hautement technique. Comptez en moyenne <strong>2 à 3 semaines</strong> pour une PWA agile, et de <strong>1 à 3 mois</strong> pour une application native complexe intégrant du stockage local crypté et une synchronisation de serveurs en temps réel.`
		}
	];

	let seo = [
		{
			title: 'Comment optimiser le référencement naturel (SEO) de mon site ?',
			p: `Le référencement repose sur 3 piliers essentiels : <br><strong>1. La technique :</strong> un code propre, un site ultra-rapide (SvelteKit) et parfaitement responsive. <br><strong>2. Le contenu :</strong> des textes riches, répondant précisément aux questions des internautes. <br><strong>3. La popularité :</strong> des liens externes (backlinks) provenant de sites faisant autorité. <a href="/referencement-seo-sea">Découvrez notre expertise SEO.</a>`
		},
		{
			title: "L'optimisation SEO est-elle incluse dans la création de mon site ?",
			p: `Oui ! Tous les sites conçus par Gralypho intègrent une **optimisation SEO technique d'élite** de base (code léger, balises HTML structurées, vitesse maximale, sitemap). Pour des stratégies hautement concurrentielles ou du référencement local intensif, nous proposons des forfaits d'audit et de suivi sémantique sur-mesure.`
		},
		{
			title: 'Combien de temps faut-il pour atteindre la première page de Google ?',
			p: `Le SEO est une stratégie de moyen à long terme. Google doit analyser, classer et valider la pertinence de vos pages. En général, les premiers résultats concrets apparaissent entre **1 et 3 mois** pour des requêtes locales, et de **3 à 6 mois** pour des marchés nationaux très compétitifs. Le référencement payant (SEA) permet quant à lui d'être visible instantanément.`
		}
	];

	let reseaux = [
		{
			title: 'Comment structurer ma création de contenu sur les réseaux sociaux ?',
			p: `La clé sur les réseaux sociaux est la **régularité** et la **valeur ajoutée**. Nous définissons une charte éditoriale unique pour votre marque, concevons des visuels haut de gamme, rédigeons des accroches persuasives et planifions la diffusion aux heures optimales pour maximiser la visibilité organique. <a href="/gestion-media-sociaux">Découvrez nos services social media.</a>`
		},
		{
			title: "Quel est le rôle d'un Community Manager ?",
			p: `Un Community Manager anime et fédère votre communauté. Il gère l'image de marque de votre entreprise, interagit avec vos abonnés, répond aux messages privés, modère les commentaires et conçoit des visuels/Reels percutants pour asseoir votre autorité digitale.`
		}
	];

	let communication = [
		{
			title: 'Quel est le tarif pour la création d\'un logo professionnel ?',
			p: `Le logo est la pierre angulaire de votre communication. Nos prestations de conception de logo sur-mesure commencent généralement à partir de **300 €**, comprenant des recherches graphiques poussées, des propositions d'univers coloriels et la livraison de fichiers vectoriels haute définition utilisables sur tous vos supports physiques et numériques. <a href="/creation-design-logos">Découvrez nos designs.</a>`
		},
		{
			title: "Qu'est-ce qu'une charte graphique et une identité visuelle ?",
			p: `L'identité visuelle regroupe l'ensemble des éléments graphiques de votre marque (logo, couleurs, typographies). La **charte graphique** est le document de référence qui définit précisément comment utiliser ces éléments sur tous vos supports (site internet, réseaux sociaux, cartes de visites, plaquettes) pour vous garantir une cohérence visuelle parfaite.`
		}
	];

	let digitale = [
		{
			title: 'Pourquoi est-il crucial de définir une stratégie digitale ?',
			p: `Concevoir des supports web sans stratégie digitale équivaut à bâtir un magasin au milieu d'un désert. Une étude de stratégie digitale permet de définir avec précision vos cibles, vos canaux de communication prioritaires, vos indicateurs clés de performance (KPI) et d'ajuster votre budget pour maximiser votre retour sur investissement. <a href="/etude-strategie-digitale">Découvrez notre offre de conseil stratégique.</a>`
		}
	];

	let tarif = [
		{
			title: "Les tarifs et les délais présentés dans le devis peuvent-ils varier ?",
			p: `Chez Gralypho, la transparence est totale. Le prix et le calendrier fixés dans notre devis initial sont **fermes et définitifs**. Les seuls ajustements de tarifs ou de délais envisageables sont ceux résultant d'une demande explicite de votre part d'ajouter des fonctionnalités majeures en cours de développement.`
		}
	];
</script>

<svelte:head>
	<title>FAQ Gralypho | Réponses d'Experts : Sites, Apps & Référencement SEO</title>
	<meta name="description" content="Une question sur la création de site internet, le développement d'applications mobiles, nos tarifs ou le référencement SEO ? Notre FAQ répond à toutes vos questions." />
	<meta property="og:title" content="FAQ d'Experts Web, App & Référencement SEO | Gralypho" />
	<meta property="og:description" content="Toutes les réponses de notre agence web à vos questions de création de sites vitrines, e-commerce, applications mobiles et de stratégie de visibilité." />
	<meta property="og:url" content="https://gralypho.com/FAQ" />
	<meta property="og:type" content="website" />
	<meta property="og:image" content="/logoGralypho2.jpeg" />
	<link rel="canonical" href="https://gralypho.com/FAQ" />
</svelte:head>

<Header />

<main class="page-container" in:fade={{ duration: 1000 }}>
	<!-- Halos lumineux d'arrière-plan -->
	<div class="glow-orb orb-1"></div>
	<div class="glow-orb orb-2"></div>

	<!-- En-tête FAQ -->
	<div class="faq-hero">
		<h1 class="title">Questions <span class="highlight-text">Fréquentes</span></h1>
		<p class="subtitle">
			Nous avons centralisé ici toutes les questions stratégiques de nos clients. <br />
			Trouvez des réponses claires, transparentes et techniques pour piloter sereinement votre projet digital.
		</p>
	</div>

	<!-- Catégorie Site Internet -->
	<div class="wrapper-SectionB" id="site">
		<h2>FAQ : Création de <span class="highlight-text">Site Internet</span></h2>
		<div class="accordion-list">
			{#each site as tab}
				<CardsSectionB title={tab.title} p={tab.p} />
			{/each}
		</div>
	</div>

	<!-- Catégorie Application -->
	<div class="wrapper-SectionB" id="application">
		<h2>FAQ : Développement <span class="highlight-text">d'Applications</span></h2>
		<div class="accordion-list">
			{#each application as tab}
				<CardsSectionB title={tab.title} p={tab.p} />
			{/each}
		</div>
	</div>

	<!-- Catégorie SEO -->
	<div class="wrapper-SectionB" id="seo">
		<h2>FAQ : Référencement & <span class="highlight-text">SEO / SEA</span></h2>
		<div class="accordion-list">
			{#each seo as tab}
				<CardsSectionB title={tab.title} p={tab.p} />
			{/each}
		</div>
	</div>

	<!-- Catégorie Réseaux Sociaux -->
	<div class="wrapper-SectionB" id="reseau">
		<h2>FAQ : Gestion des <span class="highlight-text">Réseaux Sociaux</span></h2>
		<div class="accordion-list">
			{#each reseaux as tab}
				<CardsSectionB title={tab.title} p={tab.p} />
			{/each}
		</div>
	</div>

	<!-- Catégorie Logos -->
	<div class="wrapper-SectionB" id="logo">
		<h2>FAQ : Création de <span class="highlight-text">Logos & Graphisme</span></h2>
		<div class="accordion-list">
			{#each communication as tab}
				<CardsSectionB title={tab.title} p={tab.p} />
			{/each}
		</div>
	</div>

	<!-- Catégorie Stratégie -->
	<div class="wrapper-SectionB" id="strategie">
		<h2>FAQ : Étude de <span class="highlight-text">Stratégie Digitale</span></h2>
		<div class="accordion-list">
			{#each digitale as tab}
				<CardsSectionB title={tab.title} p={tab.p} />
			{/each}
		</div>
	</div>

	<!-- Catégorie Tarifs -->
	<div class="wrapper-SectionB" id="tarif">
		<h2>FAQ : Questions de <span class="highlight-text">Tarifs & Contrats</span></h2>
		<div class="accordion-list">
			{#each tarif as tab}
				<CardsSectionB title={tab.title} p={tab.p} />
			{/each}
		</div>
	</div>
</main>

<style>
	.page-container {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		padding: 6rem 2rem 4rem 2rem;
		background-color: var(--primary);
		position: relative;
		overflow: hidden;
	}

	/* Halos lumineux en arrière-plan */
	.glow-orb {
		position: absolute;
		border-radius: 50%;
		filter: blur(120px);
		opacity: 0.08;
		pointer-events: none;
		z-index: 1;
	}
	.orb-1 {
		width: 500px;
		height: 500px;
		background: var(--green, #D6A319);
		top: 10%;
		left: -200px;
	}
	.orb-2 {
		width: 600px;
		height: 600px;
		background: var(--cta, #1481ba);
		bottom: 30%;
		right: -350px;
	}

	.faq-hero {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		text-align: center;
		margin-bottom: 4rem;
		margin-top: 2rem;
		max-width: 900px;
		z-index: 3;
	}

	.title {
		font-family: var(--Geologica), sans-serif;
		font-size: clamp(2.5rem, 5vw, 4.5rem);
		font-weight: 900;
		color: #ffffff;
		margin: 0 0 1rem 0;
		letter-spacing: -0.03em;
		line-height: 1.15;
	}

	.highlight-text {
		background: linear-gradient(135deg, var(--green, #D6A319) 0%, #ffffff 100%);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}

	.subtitle {
		font-family: var(--Red), sans-serif;
		font-size: clamp(1rem, 2vw, 1.2rem);
		font-weight: 300;
		color: rgba(255, 255, 255, 0.7);
		line-height: 1.7;
		margin: 0;
	}

	.wrapper-SectionB {
		display: flex;
		flex-direction: column;
		width: 100%;
		max-width: 900px;
		margin-bottom: 4rem;
		z-index: 3;
	}

	.wrapper-SectionB h2 {
		font-family: var(--Geologica), sans-serif;
		font-size: clamp(1.4rem, 2.5vw, 1.8rem);
		font-weight: 800;
		color: #ffffff;
		margin: 0 0 2rem 0;
		letter-spacing: -0.02em;
		text-align: center;
	}

	.accordion-list {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		width: 100%;
	}

	@media screen and (max-width: 768px) {
		.page-container {
			padding: 5rem 1.25rem;
		}
		.wrapper-SectionB h2 {
			text-align: left;
		}
	}
</style>
