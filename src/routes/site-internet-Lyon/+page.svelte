<!-- src/routes/site-internet-Lyon/+page.svelte -->
<script>
	import LandingSeo from '../../Components/LandingSeo.svelte';
	import picture from '../../Assets/png-gralypho/23.png';

	const title = "Création de Site Internet & API à Lyon";
	const location = "Lyon";
	const ogUrl = "https://gralypho.com/site-internet-Lyon";
	const metaDescription = "Agence Web à Lyon experte en création de site internet sur-mesure, intégration d'API, branchements et automatisation de chatbots avec l'IA de ChatGPT.";

	const intro = "Votre site internet professionnel est un outil stratégique puissant. Notre agence web basée à Lyon intègre des connexions API sur-mesure et des fonctionnalités d'intelligence artificielle avancées pour automatiser vos tâches et transformer vos pages en un véritable levier de croissance.";

	const services = [
		{
			icon: "🔌",
			title: "Branchements & Intégration d'API",
			desc: "Nous connectons vos applications et bases de données préférées (CRM, Stripe, météo, outils tiers) pour synchroniser vos informations en temps réel et automatiser vos flux de vente.",
			link: "/creation-site-internet"
		},
		{
			icon: "🤖",
			title: "Intégration d'IA & Chatbots",
			desc: "Exploitez la puissance de l'API de ChatGPT pour intégrer des agents conversationnels intelligents capables d'aider vos utilisateurs, répondre à leurs questions 24/7 et générer du contenu.",
			link: "/creation-application"
		},
		{
			icon: "⚡",
			title: "Automatisation de Processus",
			desc: "Fini les tâches répétitives. Nous automatisons vos envois d'e-mails de relance, la gestion des créneaux de rendez-vous et la classification automatique de vos tickets de support client.",
			link: "/referencement-seo-sea"
		}
	];

	const cities = [
		"Lyon", "Villeurbanne", "Caluire-et-Cuire", "Vénissieux", "Bron", "Saint-Priest", "Écully", "Tassin-la-Demi-Lune", "Chassieu"
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
