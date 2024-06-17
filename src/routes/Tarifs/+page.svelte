<script>
	import TarifsCards from '../../Components/Tarifs-Cards.svelte';
	import Mouse from '../../Components/Mouse.svelte';
	import Header from '../../sections/Header.svelte';
	import { fade, slide } from 'svelte/transition';
    import Form from '../../Components/Form.svelte';

	let tabTarifs = [
		{
			titleH1: 'Site Web',
			titleH2: 'Création de site Internet',
			tarifEuro: '790€',
			subTarifEuro: 'À partir de ',
			rubriques: [
				'Landing Page (page unique)',
				'Développement Front-End',
				'Formulaire de contact',
				'Référencement SEO',
				'Design Responsive',
				'Déploiement sur serveur',
			]
		},
		{
			titleH1: 'Applications',
			titleH2: "Création d'applications Web",
			tarifEuro: '5590€',
			subTarifEuro: 'À partir de ',
			rubriques: [
				'Création du Design',
				'Diagramme de classe UML',
				'Diagramme de séquence',
				'Développement Front-End',
				'Développement Back-End',
				'Déploiement sur serveur',
				'Maintenance'
			]
		},
		{
			titleH1: 'Référencement',
			titleH2: 'SEO/SEA',
			tarifEuro: '699€',
			subTarifEuro: 'À partir de ',
			rubriques: [
				'Création du Design',
				'Développement Front-End',
				'Développement Back-End',
				'Référencement',
				'Maintenance'
			]
		},
		{
			titleH1: 'Médias Sociaux',
			titleH2: 'Community Manager',
			tarifEuro: '599€',
			subTarifEuro: 'À partir de ',
			rubriques: [
				'Création du Design',
				'Développement Front-End',
				'Développement Back-End',
				'Référencement',
				'Maintenance'
			]
		},
		{
			titleH1: 'Design',
			titleH2: "Création d'identité et refonte",
			tarifEuro: '890€',
			subTarifEuro: 'À partir de ',
			rubriques: [
				'Création du Design',
				'Développement Front-End',
				'Développement Back-End',
				'Référencement',
				'Maintenance'
			]
		},
		{
			titleH1: 'Stratégie Digitale',
			titleH2: "Conseils Marketing",
			tarifEuro: '990€',
			subTarifEuro: 'À partir de ',
			rubriques: [
				'Création du Design',
				'Développement Front-End',
				'Développement Back-End',
				'Référencement',
				'Maintenance'
			]
		}
	];
</script>

<Header />
<Mouse />

<section class="tarifs" in:fade={{ duration: 1000 }}>
	{#each tabTarifs as tarif, index (tarif)}
		<TarifsCards
			{index}
			titleH1={tarif.titleH1}
			titleH2={tarif.titleH2}
			tarifEuro={tarif.tarifEuro}
			subTarifEuro={tarif.subTarifEuro}
			rubriques={tarif.rubriques}
		/>
	{/each}
    <div id="form">
    <Form/>
    </div>
</section>

<style>
	.tarifs {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
		gap: 30px;
		height: 100%;
	}
    #form{
        width: 100vw;
    }
</style>
