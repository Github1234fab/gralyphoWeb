<script>
	import './styles.css';
	// import Asection from "../sections/Asection.svelte";
	// import SectionTestimony from "../sections/SectionCent.svelte";
	import Csection from '../sections/Csection.svelte';
	import DSection from '../sections/DSection.svelte';
	import ESection from '../sections/ESection.svelte';
	// import FSection from "../sections/FSection.svelte";
	import GSection from '../sections/GSection.svelte';
	import HSection from '../sections/HSection.svelte';
	import JSection from '../sections/JSection.svelte';
	// import SectionValue from "../sections/SectionValue.svelte";
	import { fade, slide } from 'svelte/transition';
	import SectionSocial from '../sections/SectionSocial.svelte';
	import BeneficeSection from '../sections/BeneficeSection.svelte';
	import ActionSection from '../sections/ActionSection.svelte';
	import Difference from '../sections/Difference.svelte';
	import Form from '../Components/Form.svelte';
	import Mouse from '../Components/Mouse.svelte';
</script>

<main in:fade={{ duration: 2000 }}>
	<Mouse />
	<HSection />
	<section id="sectionE">
		<ESection />
	</section>
		<Difference />
	<BeneficeSection /> 
	<JSection />
	<GSection />
	
	<Form />  
</main>

<style>
	main {
		overflow: hidden;
	}
</style>
