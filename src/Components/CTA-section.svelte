<script>
	import ButtonCta from './ButtonCTA.svelte';
</script>

<main>
	<div class="wrapper">
		<h2 class="title">Un projet en tête ?</h2>
		<h3 class="subtitle">
			Vous avez besoin d'un site internet ou d'une application ? Vous souhaitez obtenir des informations claires avant de vous lancer ?
			<br /> Lors d'un premier rendez-vous entièrement gratuit, nous pourrons définir ensemble les structures de votre projet.
			<br /> Nous pourrons choisir les technologies les plus adaptées à vos besoins et aborder ensemble les questions de design, de référencement et de budget.
			<br /><br />
			<span>Discutons de votre projet !</span>
		</h3>
		<ButtonCta />
		<a href="/#section-form">Obtenir un devis</a>
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
		/* background-image: linear-gradient(120deg, var(--primary) 20%, var(--cta) 50%, var(--primary) 50%, var(--cta) 100%); */
		border-radius: 20px;
		padding: 100px;
		gap: 20px;
		box-shadow: 0px 0px 20px 10px rgba(5, 5, 5, 0.365);
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
		line-height: 2rem;
	}
	.subtitle span {
		font-weight: 700;
	}
	a {
		background-color: var(--cta);
		color:  var(--whiteGrey);
		font-family: 'Red Hat Display';
		font-size: 1rem;
		font-weight: 700;
		border-radius: 8px;
		text-align: center;
		padding: 15px 20px;
		box-shadow: 0px 10px 10px rgba(62, 62, 62, 0.5);
		z-index: 999;
		max-width: 200px;
 
	}
        a:hover{
                animation: bounce 0.4s ease-in-out;
        }
        	@keyframes bounce {
		0% {
			transform: scale(1) translateY(-2px);
		}
		25% {
			transform: scale(1) translateY(3px);
		}
		50% {
			transform: scale(1) translateY(-1px);
		}
		75% {
			transform: scale(1) translateY(2px);
		}
		100% {
			transform: scale(1) translateY(0);
		}
	}

	@media screen and (max-width: 768px) {
		main {
			padding: 20px;
			height: 1200px;
		}
		.wrapper {
			padding: 20px;
			gap: 20px;
			min-width: 100%;
		}
		.title {
			font-size: 1.5rem;
		}
		.subtitle {
			font-size: 1rem;
			line-height: 43px;
		}
	}
</style>
