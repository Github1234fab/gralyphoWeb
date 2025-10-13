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
	<title>Gralypho - Agence Web experte au coeur des monts du Lyonnais</title>
	<meta name="description" content="Conception de site Web, conception d'application NATIVE ou PWA, expertise SEO, SEA, GEO." />
	<meta name="keywords" content="Conception de site Web, Conception d'application, stratégie SEO, SEA, GEO" />
	<meta name="author" content="Gralypho" />
	<meta name="robots" content="index, follow" />
	<meta property="og:title" content="Agence Web de l'Ouest Lyonnais" />
	<meta property="og:description" content="Conception de site Web, conception d'application NATIVE ou PWA, expertise SEO, SEA, GEO." />
	<meta property="og:image" content="/logoGralypho2.jpeg" />
	<meta property="og:type" content="https://gralypho.com/" />
	<meta property="og:url" content="https://gralypho.com/" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="Gralypho - Agence Web experte au coeur des monts du Lyonnais" />
	<meta name="twitter:description" content="Conception de site Web, conception d'application NATIVE ou PWA, expertise SEO, SEA, GEO." />
	<meta name="twitter:image" content="/logoGralypho2.jpeg" />
	<link rel="canonical" href="https://gralypho.com/" />
</svelte:head>

<main in:fade={{ duration: 2000 }}>
	<Header />
	<Hero />
	<MyServices />
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
