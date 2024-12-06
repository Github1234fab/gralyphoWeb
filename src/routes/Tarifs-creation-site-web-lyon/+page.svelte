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
			tarifEuro: '799€',
			subTarifEuro: 'À partir de ',
			rubriques: [
				'Landing Page (page unique)',
				'Développement Front-End',
				'Sans formulaire de contact',
				'Référencement SEO',
				'Design Responsive',
				'Déploiement sur serveur'
			]
		},
		{
			titleH1: 'Applications',
			titleH2: "Création d'applications Web",
			tarifEuro: '5499€',
			subTarifEuro: 'À partir de ',
			rubriques: [
				'Création du Design',
				'Diagramme de classe UML',
				'Diagramme de séquence',
				'Développement Front-End',
				'Développement Back-End',
				'Déploiement sur serveur'
			]
		},
		{
			titleH1: 'Référencement',
			titleH2: 'SEO/SEA',
			tarifEuro: '699€',
			subTarifEuro: 'À partir de ',
			rubriques: [
				'Analyse de la concurrence',
				'Analyse des mots Clés',
				'Implémentation des mots clés',
				'Optimisation du contenu',
				'Test et rapport de performance'
			]
		},
		{
			titleH1: 'Médias ',
			titleH2: 'Community Manager',
			tarifEuro: '599€',
			subTarifEuro: 'À partir de ',
			rubriques: [
				"Plan d'action",
				'Définition des objectifs',
				'Rédaction des contenus',
				'Organisation des publications'
			]
		},
		{
			titleH1: 'Design',
			titleH2: "Création d'identité et refonte",
			tarifEuro: '899€',
			subTarifEuro: 'À partir de ',
			rubriques: [
				"Création d'identité graphique",
				'Création de logo',
				'Refonte du site web',
				'Référencement'
			]
		},
		{
			titleH1: 'Stratégie',
			titleH2: 'Conseils Marketing',
			tarifEuro: '999€',
			subTarifEuro: 'À partir de ',
			rubriques: [
				'Audit de site web',
				'Audit des besoins',
				'Analyse du marché',
				'Définition de stratégie',
				"mise en place de plan d'action",
				'Analyse des performances'
			]
		}
	];
</script>

<Header />
<Mouse />

<section class="tarifs" in:fade={{ duration: 1000 }}>
	<div class="hero">
		<h1>Nos <br /><span>Tarifs</span></h1>
		<h3>
			L'agence Gralypho pratique des tarifs réfléchis et très adaptatifs. Chaque projet est
			différent et la tarification dépend du besoin technologique qui est employé pour réaliser
			votre projet.
		</h3>
	</div>
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
		<Form />
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
	#form {
		width: 100vw;
	}
	.hero {
		padding: 30px;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		height: auto;
		width: 100%;
	}
	.hero h1 {
		text-align: center;
		font-family: var(--Geologica);
		font-weight: 900;
		font-size: var(--xl);
		color: var(--primary);
		margin-top: 0px;
		letter-spacing: -2px;
		padding: 0px;
		line-height: 50px;
		margin-top: 50px;
	}
	.hero h1 span {
		color: var(--green);
	}
	.hero h3 {
		font-family: poppins;
		font-weight: 300;
		font-size: var(--m);
		color: var(--primary);
		text-align: center;
		width: 50%;
		padding: 30px;
	}

	@media screen and (max-width: 768px) {
		.hero h1 {
			font-size: 2.5rem;
			line-height: 50px;
		}
		.hero h3 {
			width: 110%;
			text-align: center;
			padding: 40px;
		}
	}
</style>
