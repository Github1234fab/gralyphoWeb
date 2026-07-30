<!-- src/routes/agence-web-region-Lyonnaise/+page.svelte -->
<script>
	import LandingSeo from '../../Components/LandingSeo.svelte';

	const title = "Agence Web de la Région Lyonnaise";
	const location = "Région Lyonnaise";
	const ogUrl = "https://gralypho.com/agence-web-region-Lyonnaise";
	const metaDescription = "Gralypho est votre agence web de proximité en région Lyonnaise. Création de site internet vitrine et e-commerce, applications web et référencement SEO.";

	const intro = "Gralypho est une agence web dynamique et engagée au service des entreprises, commerces et créateurs de la région Lyonnaise. Nous concevons des sites vitrines, boutiques e-commerce et applications sur-mesure combinant haute performance technique et design captivant.";

	const services = [
		{
			icon: "💻",
			title: "Création de Sites Internet",
			desc: "Sites vitrines interactifs sous Svelte pour une vitesse de chargement imbattable, ou CMS clés en main (Wix, WordPress, Shopify) adaptés à votre rythme de gestion.",
			link: "/creation-site-internet"
		},
		{
			icon: "📈",
			title: "Stratégie SEO Régionale",
			desc: "Optimisez votre référencement naturel pour attirer des clients qualifiés dans toutes les grandes villes de la région. Balisage, vitesse mobile et sémantique inclus.",
			link: "/referencement-seo-sea"
		},
		{
			icon: "⚙️",
			title: "Développement d'Applications",
			desc: "Outils métiers sur-mesure, plateformes de réservation ou bases de données complexes. Nous développons des applications Web légères et sécurisées.",
			link: "/creation-application"
		}
	];

	const cities = [
		"Lyon", "Villefranche-sur-Saône", "Saint-Étienne", "Givors", "Bourg-en-Bresse", "Valence", "Roanne", "Vienne"
	];

	const picture = "https://fr.maps-lyon.com/img/1200/lyon-carte-de-la-r%C3%A9gion.jpg";
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
