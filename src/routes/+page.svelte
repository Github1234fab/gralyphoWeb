<script>
	import './styles.css';
	// import Asection from "../sections/Asection.svelte";
	// import SectionTestimony from "../sections/SectionCent.svelte";
	import Csection from '../sections/Csection.svelte';
	import DSection from '../sections/DSection.svelte';
	import ESection from '../sections/ESection.svelte';
	// import FSection from "../sections/FSection.svelte";
	import GSection from '../sections/GSection.svelte';
	// import HSection from '../sections/HSection.svelte';
	import JSection from '../sections/JSection.svelte';
	// import SectionValue from "../sections/SectionValue.svelte";
	import { fade, slide } from 'svelte/transition';
	import SectionSocial from '../sections/SectionSocial.svelte';
	import BeneficeSection from '../sections/BeneficeSection.svelte';
	import ActionSection from '../sections/ActionSection.svelte';
	import Difference from '../sections/Difference.svelte';
	import Form from '../Components/Form.svelte';
	import Mouse from '../Components/Mouse.svelte';
	import BannerOne from '../Components/bannerOne.svelte';
	import BannerTwo from '../Components/bannerTwo.svelte';
	import BannerThree from '../Components/bannerThree.svelte';
	import Hero from '../Components/HeroHome.svelte';
	import Header from '../sections/Header.svelte';
	import MyServices from '../Components/MyServices.svelte';
	import Propositions from '../Components/Propositions.svelte';
	import CTA from '../Components/CTA-section.svelte';
</script>

<svelte:head>
	<title>Création de Site Internet & Application Mobile | Gralypho Lyon</title>
	<meta name="description" content="Besoin d'un site internet professionnel ou d'une application sur-mesure ? Gralypho, agence web à Lyon, conçoit votre solution digitale sous 3 jours ! Devis gratuit." />
	<meta name="keywords" content="création de site internet lyon, agence web lyon, création application mobile lyon, référencement seo lyon, développeur sveltekit lyon" />
	<meta name="author" content="Gralypho" />
	<meta name="robots" content="index, follow" />
	<meta property="og:title" content="Création de Site Internet & Application Mobile | Gralypho Lyon" />
	<meta property="og:description" content="Besoin d'un site internet professionnel ou d'une application sur-mesure ? Gralypho conçoit votre solution digitale sous 3 jours ! Devis gratuit." />
	<meta property="og:image" content="/logoGralypho2.jpeg" />
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://gralypho.com/" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="Création de Site Internet & Application Mobile | Gralypho Lyon" />
	<meta name="twitter:description" content="Besoin d'un site internet professionnel ou d'une application sur-mesure ? Gralypho conçoit votre solution digitale sous 3 jours ! Devis gratuit." />
	<meta name="twitter:image" content="/logoGralypho2.jpeg" />
	<link rel="canonical" href="https://gralypho.com/" />

	<!-- Données structurées JSON-LD pour booster le référencement local -->
	<script type="application/ld+json">
		{
			"@context": "https://schema.org",
			"@type": "WebAgency",
			"name": "Gralypho",
			"url": "https://gralypho.com/",
			"logo": "https://gralypho.com/logoGralypho2.jpeg",
			"description": "Agence web experte en création de sites internet professionnels, applications mobiles et stratégie SEO à Lyon et dans les Monts du Lyonnais.",
			"address": {
				"@type": "PostalAddress",
				"addressLocality": "Lyon",
				"addressRegion": "Auvergne-Rhône-Alpes",
				"addressCountry": "FR"
			},
			"areaServed": [
				{ "@type": "AdministrativeArea", "name": "Lyon" },
				{ "@type": "AdministrativeArea", "name": "Monts du Lyonnais" },
				{ "@type": "AdministrativeArea", "name": "Ouest Lyonnais" }
			],
			"priceRange": "$$"
		}
	</script>
</svelte:head>

<main in:fade={{ duration: 2000 }}>
	<Header />
	<Hero />
	<MyServices />
		<JSection />
	<CTA />
	
	
	<Propositions />
	

	<GSection />
	<section id="sectionE">
		<ESection />
	</section>
	
	<Form />
</main>

<style>
	main {
		overflow: hidden;
	}
</style>
