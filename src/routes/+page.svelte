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
	import Header from "../sections/Header.svelte";
	import MyServices from '../Components/MyServices.svelte';
	import Propositions from '../Components/Propositions.svelte';
	import CTA from "../Components/CTA-section.svelte";
</script>

<main in:fade={{ duration: 2000 }}>
	<Header />
	<!-- <Mouse /> -->
	
	<!-- <HSection /> -->
	<Hero />
	<MyServices/>
	<Propositions/>
	<CTA />


	<!-- <Difference /> -->



	<!-- <BannerOne /> -->
	<GSection />
	<!-- <BannerThree /> -->
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
