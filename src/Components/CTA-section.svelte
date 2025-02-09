<script>
	import ButtonCta from './ButtonCTA.svelte';
</script>

<main>
	<div class="wrapper">
		<h2 class="title">Un projet en tête ?</h2>
		<h3 class="subtitle">
			Vous avez besoin d'un site internet ou d'une application ? Vous souhaitez obtenir des
			informations claires avant de vous lancer ?
			<br /> Lors d'un premier rendez-vous entièrement gratuit, nous pourrons définir ensemble les
			structures de votre projet.
			<br /> Nous pourrons choisir les technologies les plus adaptées à vos besoins et aborder
			ensemble les questions de design, de référencement et de budget.
			<br /><br />
			<span>Discutons de votre projet !</span>
		</h3>
		<ButtonCta />
	</div>
</main>

<style>
	main {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		background-color: var(--primary);
		background-image: var(--gradient);
		padding: 100px;
	}
	.wrapper {
		display: flex;
		flex-direction: column;
		background-color: var(--primary);
		border-radius: 20px;
		padding: 50px;
		gap: 30px;
		box-shadow: 0px 30px 10px rgba(5, 5, 5, 0.365);
	}
	.title {
		font-size: 2rem;
		font-family: var(--Red);
		color: var(--whiteGrey);
	}
	.subtitle {
		font-size: 1rem;
		font-weight: 400;
		font-family: var(--Red);
		color: var(--whiteGrey);
	}
	.subtitle span {
		font-weight: 700;
	}


	@media screen and (max-width: 768px) {
		main {
			padding: 20px;
			height: 900px;
		}
		.wrapper {
			padding: 20px;
			gap: 50px;
			min-width: 100%;
		}
		.title {
			font-size: 1.5rem;
		}
		.subtitle {
			font-size: 1rem;
			line-height: 33px;
		}
		
	}
</style>
