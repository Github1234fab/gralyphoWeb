<!-- src/routes/agence-web-monts-du-Lyonnais/+page.svelte -->
<script>
	import LandingSeo from '../../Components/LandingSeo.svelte';
	import picture from '../../Assets/montsDuLyonnais.jpeg';

	const title = "Agence Web des Monts du Lyonnais";
	const location = "Monts du Lyonnais";
	const ogUrl = "https://gralypho.com/agence-web-monts-du-Lyonnais";
	const metaDescription = "Gralypho est une agence Web locale implantée au cœur des Monts du Lyonnais. Spécialiste de la création de sites internet sur-mesure et d'applications web.";

	const intro = "Gralypho est une agence web indépendante implantée au cœur des Monts du Lyonnais. Nous concevons des sites internet rapides, élégants et parfaitement optimisés pour le référencement, adaptés aux besoins des artisans, commerçants, associations et PME de notre territoire.";

	const services = [
		{
			icon: "🎨",
			title: "Sites Web sur Mesure",
			desc: "Chaque site est pensé pour votre activité : design unique, responsive design fluide pour mobile et tablette, et autonomie complète de mise à jour pour gérer vos textes et images.",
			link: "/creation-site-internet"
		},
		{
			icon: "⚙️",
			title: "Conception d'Applications Web",
			desc: "Pour les besoins métiers spécifiques : espaces membres, outils internes, plateformes de réservation ou formulaires complexes. Nous développons des solutions légères et évolutives.",
			link: "/creation-application"
		},
		{
			icon: "🔍",
			title: "Expertise SEO Locale",
			desc: "Nous concevons votre site pour Google dès le premier jour : rapidité de chargement, balises sémantiques optimisées et structure technique impeccable pour devancer vos concurrents locaux.",
			link: "/referencement-seo-sea"
		}
	];

	const cities = [
		"Saint-Martin-en-Haut", "Mornant", "Yzeron", "Thurins", "Vaugneray", "Brignais", "Craponne", "Saint-Symphorien-sur-Coise"
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
