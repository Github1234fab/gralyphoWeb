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

	<!-- <SectionSocial/>  -->

	<!-- <ActionSection />
  <DSection /> -->

	<!-- <Csection /> -->

	<GSection />
	<JSection />
	<Form />

<form name="contact-gralypho" method="POST" netlify-honeypot="bot-field" data-netlify="true">
  <input type="hidden" name="form-name" value="contact-gralypho" />
  <label for="name">Name</label>
  <input name="name" id="name" required placeholder="Name" type="text" />
  <label for="email">Email</label>
  <input name="email" id="email" required placeholder="Email" type="email" />
  <label for="message">Message</label>
  <input name="message" id="message" required placeholder="Message" type="text" />
  <input type="submit" value="Submit" />
</form>






</main>

<style>
	main {
		overflow: hidden;
	}
</style>
