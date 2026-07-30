<!-- src/routes/webmaster-monts-du-lyonnais-lyon-ouest/+page.svelte -->
<script>
	import LandingSeo from '../../Components/LandingSeo.svelte';
	import picture from '../../Assets/webmaster.jpeg';

	const title = "Webmaster des Monts du Lyonnais";
	const location = "Lyon-Ouest";
	const ogUrl = "https://gralypho.com/webmaster-monts-du-lyonnais-lyon-ouest";
	const metaDescription = "Gralypho, votre webmaster de proximité dans les Monts du Lyonnais et Lyon-Ouest. Création de site internet sur-mesure et optimisation SEO locale.";

	const intro = "Bienvenue sur la page dédiée à notre service de webmastering à Lyon. Vous êtes artisan, indépendant ou une entreprise locale et vous souhaitez développer votre présence en ligne ? Gralypho est l’agence web qui vous accompagne dans la création et la gestion de votre site internet, l’optimisation de votre référencement, ainsi que la mise en place de solutions digitales sur-mesure.";

	const services = [
		{
			icon: "🌐",
			title: "Création de site internet",
			desc: "Nous concevons des sites vitrines en 3 jours (WordPress/Wix), des e-commerces performants (Shopify) ou des plateformes sur-mesure de haute qualité avec notre framework favori Svelte et Strapi CMS.",
			link: "/creation-site-internet"
		},
		{
			icon: "📈",
			title: "Optimisation SEO & Référencement",
			desc: "Nous intégrons le référencement naturel dès la conception de votre site. Nos stratégies sémantiques et techniques vous aident à vous démarquer et à atteindre les premières places de Google.",
			link: "/referencement-seo-sea"
		},
		{
			icon: "🛠️",
			title: "Maintenance & Webmastering",
			desc: "Bénéficiez d'un suivi régulier pour les mises à jour, la sécurité de vos serveurs, et l'évolution de vos fonctionnalités tout au long de la vie de votre site.",
			link: "/site-internet-CMS"
		}
	];

	const cities = [
		"Thurins", "Mornant", "Saint-Martin-en-Haut", "Yzeron", "Vaugneray", "Brignais", "Craponne", "Messimy", "Soucieu-en-Jarrest"
	];
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
