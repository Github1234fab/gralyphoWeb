<script>
	export let titleH1;
	export let titleH2;
	export let tarifEuro;
	export let subTarifEuro;
	export let rubriques;
	export let index;
</script>

<div class="card-tarif">
	<div class="title-banner title-banner-bg-color{(index % 6) + 1}">
		<h1>{titleH1}</h1>
		<h2>{titleH2}</h2>
	</div>
	<div class="center-card">
		<div class="wrapper-tarif-euro">
			<h3 class="subtarif-euro">{subTarifEuro}</h3>
			<h2 class="tarif-euro">{tarifEuro}</h2>
		</div>
		<div class="rubriques">
			<ul>
				{#each rubriques as rubrique (rubrique)}
					<li class="li-rubrique">{rubrique}</li>
				{/each}
			</ul>
		</div>
	</div>
	<a href="#form" class="contact-tarif">Je veux en savoir plus</a>
</div>

<style>
	.card-tarif {
		display: flex;
		flex-direction: column;
		align-items: center;
		min-height: 800px;
		min-width: 350px;
		border-radius: 15px;
		box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.182);
		margin-top: 20px;
		margin-bottom: 20px;
		flex-basis: 30%;
	}
	.title-banner {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		margin-bottom: 20px;
		background-color: rgb(226, 160, 37);
		gap: 0px;
		padding: 30px;
		background-color: rgb(226, 160, 37);
		width: 100%;
	}
	.title-banner h1 {
		font-size: 3rem;
		color: rgb(255, 255, 255);
		font-family: 'Radio Canada Big';
	}
	.title-banner h2 {
		font-family: 'Radio Canada Big';
		font-weight: 100;
		font-size: 1.2rem;
		color: rgb(255, 255, 255);
	}

	.center-card {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
		min-height: 400px;
	}
	.wrapper-tarif-euro {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		margin-bottom: 20px;
		margin-top: 20px;
	}

	.tarif-euro {
		font-family: 'Radio Canada Big';
		font-size: 3rem;
		color: var(--primary);
	}
	.subtarif-euro {
		font-family: 'Heebo';
		font-size: 1.5rem;
		color: var(--primary);
		font-weight: 100;
	}
	.rubriques {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		margin-bottom: 50px;
		min-height: 300px;
	}
	.li-rubrique {
		color: var(--primary);
		font-family: 'Heebo';
		list-style-type: none;
		position: relative;
		margin-bottom: 10px;
		font-weight: 300;
	}
	.li-rubrique::before {
		content: '➡️';
		position: absolute;
		left: -30px;
		top: -3px;
	}
	.contact-tarif {
		font-family: 'Radio Canada Big';
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: rgb(226, 160, 37);
		color: rgb(248, 244, 244);
		border-radius: 5px;
		padding: 20px 20px;
		text-decoration: none;
		font-size: 1.2rem;
		margin-bottom: 20px;
		font-weight: 700;
	}
	.contact-tarif:hover {
		background-color: rgb(0, 0, 0);
		color: rgb(255, 255, 255);
	}
	.title-banner-bg-color1 {
		background-color: #c55656; /* Remplacez par la couleur que vous voulez */
	}

	.title-banner-bg-color2 {
		background-color: #127012; /* Remplacez par la couleur que vous voulez */
	}

	.title-banner-bg-color3 {
		background-color: #4040bb; /* Remplacez par la couleur que vous voulez */
	}
	.title-banner-bg-color4 {
		background-color: #e84b70; /* Remplacez par la couleur que vous voulez */
	}
	.title-banner-bg-color5 {
		background-color: #3c1e63; /* Remplacez par la couleur que vous voulez */
	}
	.title-banner-bg-color6 {
		background-color: #4a1a40; /* Remplacez par la couleur que vous voulez */
	}
	@media screen and (max-width: 1365px) {
		.title-banner h1 {
		font-size: 2em;
		}
	}
	@media (max-width: 768px) {
		.card-tarif {
				min-height: 800px;
				min-width: 320px;
		}
		.title-banner h1 {
			font-size: 2.5rem;
			color: rgb(255, 255, 255);
			font-family: 'Radio Canada Big';
		}
	}
</style>
