<!-- src/routes/webmaster-ouest-lyonnais/+page.svelte -->
<script>
	import LandingSeo from '../../Components/LandingSeo.svelte';
	import picture from '../../Assets/webmaster.jpeg';

	const title = "Webmaster Ouest Lyonnais";
	const location = "Ouest Lyonnais";
	const ogUrl = "https://gralypho.com/webmaster-ouest-lyonnais";
	const metaDescription = "Webmaster expert dans l'Ouest Lyonnais. Agence Gralypho : création de sites internet, référencement naturel local (SEO) et maintenance de sites web.";

	const intro = "Gralypho est votre partenaire de confiance dans l'Ouest Lyonnais pour la création, la refonte, la maintenance et le référencement de votre site internet professionnel. Que vous soyez artisan, PME ou commerçant, nous concevons des outils numériques performants qui vous rapprochent de vos clients locaux.";

	const services = [
		{
			icon: "🖥️",
			title: "Création Site Vitrine & E-commerce",
			desc: "Des solutions rapides en 3 à 8 jours (Wix, WordPress, Shopify) ou du sur-mesure complet en Svelte et Strapi pour une liberté graphique et technique totale.",
			link: "/creation-site-internet"
		},
		{
			icon: "🚀",
			title: "Visibilité & SEO Local",
			desc: "Positionnez votre entreprise devant vos concurrents directs dans l'Ouest Lyonnais grâce à un contenu optimisé et des performances mobiles exemplaires.",
			link: "/referencement-seo-sea"
		},
		{
			icon: "🔧",
			title: "Maintenance & Évolutions",
			desc: "Votre site reste rapide, sécurisé et à jour. Nous gérons la technique pour que vous puissiez vous concentrer à 100% sur votre métier.",
			link: "/site-internet-CMS"
		}
	];

	const cities = [
		"Craponne", "Tassin-la-Demi-Lune", "Francheville", "Brindas", "Chaponost", "Sainte-Foy-lès-Lyon", "Vaugneray", "Thurins", "Saint-Genis-Laval"
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