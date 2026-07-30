<!-- src/routes/agence-web-Lyon-creation-site-internet-seo/+page.svelte -->
<script>
	import LandingSeo from '../../Components/LandingSeo.svelte';

	const title = "Agence Web de Lyon Ouest & Métropole";
	const location = "Lyon Ouest";
	const ogUrl = "https://gralypho.com/agence-web-Lyon-creation-site-internet-seo";
	const metaDescription = "Gralypho est une agence web experte à Lyon Ouest (15 km de Lyon). Spécialiste de la création de sites internet, applications web et stratégies SEO.";

	const intro = "Gralypho est une agence web d'excellence située à 15 km de Lyon. Composée de développeurs et d'experts passionnés, nous concevons des sites web et applications sur-mesure tout en élaborant des stratégies de visibilité SEO puissantes pour booster votre activité.";

	const services = [
		{
			icon: "💻",
			title: "Création de Site Internet",
			desc: "Votre futur site est un outil commercial puissant. Nous le concevons pour capter vos leads, convertir vos prospects en clients et optimiser votre image de marque (Svelte, WordPress, Shopify).",
			link: "/creation-site-internet"
		},
		{
			icon: "📱",
			title: "Création d'Applications Web & PWA",
			desc: "Nous concevons des applications web légères, rapides et évolutives (React Native, Svelte, PWA) adaptées à vos besoins métiers spécifiques avec des bases Firebase ou des CMS headless Strapi.",
			link: "/creation-application"
		},
		{
			icon: "🚀",
			title: "Référencement Naturel (SEO)",
			desc: "Le nerf de la guerre digitale ! Nous optimisons chaque aspect technique et sémantique de vos pages pour vous propulser dans le top des résultats de recherche Google face à vos concurrents.",
			link: "/referencement-seo-sea"
		}
	];

	const cities = [
		"Lyon", "Tassin-la-Demi-Lune", "Craponne", "Limonest", "Écully", "Dardilly", "Francheville", "Saint-Genis-les-Ollières"
	];

	const picture = "https://www.aflyon.org/wp-content/uploads/2023/06/bandeau-lyon-vue-fourviere.jpg";
</script>

<LandingSeo
	{title}
	{location}
	{picture}
	{intro}
	{services}
	{cities}
	{ogUrl}
	{metaDescription}
/>
