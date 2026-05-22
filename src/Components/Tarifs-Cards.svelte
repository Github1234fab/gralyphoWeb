<script>
	export let titleH1;
	export let titleH2;
	export let tarifEuro;
	export let subTarifEuro;
	export let rubriques;
	export let index;
</script>

<div class="card-tarif">
	<!-- Bannière de titre dorée satinée -->
	<div class="title-banner">
		<span class="category-tag">Offre {(index % 6) + 1}</span>
		<h1>{titleH1}</h1>
		<h2>{titleH2}</h2>
	</div>
	
	<div class="center-card">
		<!-- Tarif géant -->
		<div class="wrapper-tarif-euro">
			<span class="subtarif-euro">{subTarifEuro}</span>
			<span class="tarif-euro">{tarifEuro}</span>
		</div>
		
		<!-- Liste de rubriques avec puces dorées -->
		<div class="rubriques">
			<ul>
				{#each rubriques as rubrique (rubrique)}
					<li class="li-rubrique">{rubrique}</li>
				{/each}
			</ul>
		</div>
	</div>
	
	<a href="#form" class="contact-tarif">Je veux en savoir +</a>
</div>

<style>
	.card-tarif {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-between;
		min-height: 680px;
		width: 100%;
		max-width: 320px;
		background: rgba(255, 255, 255, 0.02);
		border: 1px solid rgba(255, 255, 255, 0.05);
		border-radius: 24px;
		padding: 2rem 1.5rem;
		box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
		backdrop-filter: blur(10px);
		-webkit-backdrop-filter: blur(10px);
		transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
		margin-bottom: 2rem;
	}

	.card-tarif:hover {
		border-color: var(--green, #D6A319);
		transform: translateY(-8px);
		box-shadow: 0 20px 45px rgba(214, 163, 25, 0.12);
		background: rgba(255, 255, 255, 0.04);
	}

	.title-banner {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		background: linear-gradient(135deg, rgba(214, 163, 25, 0.1) 0%, rgba(255, 255, 255, 0.02) 100%);
		border: 1px solid rgba(214, 163, 25, 0.2);
		border-radius: 16px;
		width: 100%;
		padding: 1.5rem 1rem;
		text-align: center;
		gap: 0.25rem;
	}

	.category-tag {
		font-family: var(--Geologica), sans-serif;
		font-size: 0.65rem;
		font-weight: 700;
		color: var(--green, #D6A319);
		text-transform: uppercase;
		letter-spacing: 0.08em;
	}

	.title-banner h1 {
		font-size: 1.5rem;
		color: #ffffff;
		font-family: var(--Geologica), sans-serif;
		font-weight: 800;
		margin: 0;
		letter-spacing: -0.01em;
	}

	.title-banner h2 {
		font-family: var(--Red), sans-serif;
		font-weight: 300;
		font-size: 0.85rem;
		color: rgba(255, 255, 255, 0.7);
		margin: 0;
	}

	.center-card {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 100%;
		margin-top: 1.5rem;
	}

	.wrapper-tarif-euro {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		margin-bottom: 1.5rem;
	}

	.tarif-euro {
		font-family: var(--Geologica), sans-serif;
		font-size: 2.8rem;
		font-weight: 900;
		color: #ffffff;
		line-height: 1;
		letter-spacing: -0.02em;
	}

	.subtarif-euro {
		font-family: var(--Red), sans-serif;
		font-size: 0.85rem;
		color: rgba(255, 255, 255, 0.5);
		font-weight: 400;
		text-transform: uppercase;
		letter-spacing: 0.05em;
		margin-bottom: 0.25rem;
	}

	.rubriques {
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		width: 100%;
		min-height: 180px;
		margin-bottom: 1.5rem;
	}

	.rubriques ul {
		list-style: none;
		padding: 0 0 0 1.5rem;
		margin: 0;
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
	}

	.li-rubrique {
		color: rgba(255, 255, 255, 0.8);
		font-family: var(--Red), sans-serif;
		font-size: 0.9rem;
		font-weight: 300;
		position: relative;
		line-height: 1.4;
	}

	.li-rubrique::before {
		content: '✓';
		color: var(--green, #D6A319);
		font-weight: bold;
		position: absolute;
		left: -22px;
		top: 0;
	}

	.contact-tarif {
		width: 100%;
		height: 48px;
		background-color: var(--green, #D6A319);
		border: none;
		border-radius: 50px;
		color: var(--primary);
		font-family: var(--Geologica), sans-serif;
		font-weight: 700;
		font-size: 0.8rem;
		text-transform: uppercase;
		letter-spacing: 0.05em;
		display: flex;
		justify-content: center;
		align-items: center;
		text-decoration: none;
		box-shadow: 0 4px 15px rgba(214, 163, 25, 0.2);
		transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
	}

	.contact-tarif:hover {
		background-color: #ffffff;
		color: var(--primary);
		box-shadow: 0 8px 20px rgba(255, 255, 255, 0.25);
		transform: translateY(-2px);
	}

	@media (max-width: 768px) {
		.card-tarif {
			max-width: 100%;
			min-height: auto;
			padding: 1.5rem;
		}
	}
</style>
