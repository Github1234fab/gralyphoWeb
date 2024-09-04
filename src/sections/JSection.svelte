<script>
	import { onMount } from 'svelte';
	import TestimonyCards from '../Components/TestimonyCards.svelte';
	import profilOne from '../Assets/Profils-gralypho/Frame (2).png';
	import profilTwo from '../Assets/Profils-gralypho/Frame (5).png';
	import profilThree from '../Assets/Profils-gralypho/Frame (12).png';
	import profilFour from '../Assets/Profils-gralypho/Ellipse 125.png';
	import profilFive from '../Assets/Profils-gralypho/Ellipse 131.png';
	import profilSix from '../Assets/Profils-gralypho/Ellipse 220.png';

	let dataCard = [
		{
			img: profilTwo,
			alt: "Photo d'identité de client, femme",
			title: 'Mademoiselle G.',
			job: 'Marjolaine - Directrice de la communicaiton',
			p: 'Délai respecté, composants fonctionnels avec une très bonne intégration. Nous recommandons Gralypho! '
		},
		{
			img: profilFive,
			alt: "Photo d'identité de client, homme",
			title: 'ElectriKcity',
			job: 'Damien - Électricien indépendant',
			p: "L'ajout de fonctionnalité comme la prise de RV et les paiements en ligne m'ont grandement faciliter la tâche."
		},
		{
			img: profilThree,
			alt: "Photo d'identité de client, femme",
			title: 'Green NRJ',
			job: 'Asha Ramanujan - Project Manager',
			p: 'Hi Gralypho! It was great working with you. Our specifications were complicated, but you met the challenge. '
		},
		{
			img: profilFour,
			alt: "Photo d'identité de client, homme",
			title: 'Sepocat',
			job: 'Christophe Muun - Styliste',
			p: 'Enfin un professionnel ! Merci pour notre application, elle est parfaite! '
		},
		{
			img: profilSix,
			alt: "Photo d'identité de client, homme",
			title: 'Le Marminot',
			job: 'Hugo Hervé - Restaurateur',
			p: 'Merci pour toutes les idées  novatrices apportées à notre site internet.'
		},
		{
			img: profilOne,
			alt: "Photo d'identité de client, femme",
			title: 'Inès Marjot',
			job: 'Photographe',
			p: "Plus de clients, moins de temps perdu, plus d'argent.... it's perfect Gralypho!!"
		}
	];
</script>

<section class="J-section">
	<div class="gallery">
		<div class="wrapper-contain">
			{#each dataCard as card}
				<TestimonyCards
					title={card.title}
					job={card.job}
					p={card.p}
					img={card.img}
					alt={card.alt}
				/>
			{/each}
		</div>
	</div>
</section>

<style>
	.J-section {
		display: grid;
		grid-template-columns: repeat(12, 1fr);
		grid-template-rows: auto;
		min-height: auto;
		font-size: 16px;
		margin-top: 0px;
		z-index: 0;
		background-color: rgb(243, 242, 242);
		background-image: url('../Assets/png-gralypho/bgFive.png');
	}
	.gallery {
		overflow-x: auto;
		grid-column: 1/13;
		grid-row: 2;
		margin-left: 100px;
		margin-bottom: 100px;
		margin-top: 30px;
	}

	.wrapper-contain {
		display: flex;
		flex-direction: row;
		flex-wrap: nowrap;
		border-radius: 20px;
		justify-content: start;
		align-items: center;
		margin-bottom: 30px;
		gap: 20px;
	}

	@media screen and (max-width: 768px) {
		.gallery {
			overflow-x: auto;
			grid-column: 1/13;
			grid-row: 2;
			margin-left: 20px;
		}
	}
</style>
