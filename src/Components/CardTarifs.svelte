<script>
	import Button from '../Components/ButtonCTA.svelte';
	export let name;
	export let h2;
	export let h3;
	export let h4;
	export let li;
</script>

<main>
	<div class="wrapper__offer">
		<div class="wrapper__offer-infos">
			<p class="name">{name}</p>
			<h2>{h2}</h2>
			<h3>{h3}</h3>
			<div class="details">
				{#each h4 as text}
					<h4>{text}</h4>
				{/each}
			</div>
			<Button />
			<!-- <a href="/#section-form">Obtenir un devis</a> -->
		</div>
		<div class="wrapper__offer-ul">
			<ul>
				<h3>Détails</h3>
				{#each li as item}
					<li>{item}</li>
				{/each}
			</ul>
		</div>
	</div>
</main>

<style>
	main {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		gap: 40px;
		padding: 10px;
		height: auto;
		background-color: var(--primary);
		font-family: epilogue;
		background-color: var(--primary);
		font-family: epilogue;
	}

	.wrapper__offer {
		display: flex;
		align-items: flex-start;
		justify-content: flex-start;
		max-width: 100%;
		height: auto;
		margin: 0 auto;
		padding: 20px;
		gap: 30px;
		border-radius: 8px;
		box-shadow: 0px 0px 5px grey;
	}
	.wrapper__offer-infos {
		display: flex;
		align-items: flex-start;
		justify-content: flex-start;
		flex-direction: column;
		width: 70%;
		gap: 50px;
		height: auto;
		padding: 20px;
		border-radius: 10px 10px 0px 0px;
		background-color: var(--bgCard);
	}
	.wrapper__offer ul {
		background-color: var(--bgCard);
		padding: 20px;
		border-radius: 15px;
		color: var(--whiteGrey);
	}
	.wrapper__offer ul h3 {
		font-size: 1rem;
		font-weight: 600;
		color: var(--primary);
		text-align: center;
		background-color: var(--whiteGrey);
		border: 1px solid grey;
		padding: 20px;
		max-width: 30%;
		margin: 0 auto;
        border-radius: 10px;
        letter-spacing: -1px;
	}

	.wrapper__offer li {
        
		font-size: 1rem;
		font-weight: 300;
		padding: 10px;
		line-height: 30px;
        list-style-type:circle ;
	}
	.wrapper__offer h2 {
		font-family: var(--Red);
		font-size: 3rem;
		letter-spacing: -1px;
		font-weight: 900;
		color: var(--whiteGrey);
		margin-top: 0px;
		white-space: pre-line;
	}
	.wrapper__offer h3 {
		font-size: 1rem;
		letter-spacing: 0px;
		font-weight: 200;
		color: var(--whiteGrey);
	}

	.name {
		font-family: var(--Red);
		font-size: 1.2rem;
		font-weight: 800;
		background-color: var(--blue);
		color: var(--whiteGrey);
		padding: 20px;
		margin-top: 0px;
		border-radius: 5px;
		width: 200px;
		display: flex;
		align-items: center;
		justify-content: center;
		text-align: center;
	}

	.details {
		gap: 10px;
		width: 100%;
		height: auto;
		height: 10%;
		padding: 20px;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		border-radius: 10px 10px 0px 0px;
	}
	.details h4 {
		font-family: var(--Red);
		font-size: 1.2rem;
		font-weight: 600;
		background-color: rgb(87, 13, 59);
		color: var(--whiteGrey);
		padding: 10px 25px;
		border-radius: 8px;
		min-width: 270px;
	}
	/* a {
		background-color: transparent;
		color: var(--whiteGrey);
		border: 1px solid grey;
		font-family: 'Red Hat Display';
		font-size: 1rem;
		font-weight: 700;
		border-radius: 8px;
		text-align: center;
		padding: 15px 20px;
		z-index: 999;
		max-width: 200px;
	}
	a:hover {
		animation: bounce 0.4s ease-in-out;
	} */
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
		.wrapper__offer {
			display: flex;
			flex-direction: column;
			gap: 50px;
			width: 80%;
			margin: 0 auto;
		}
		.details {
			gap: 5px;
			width: 100%;
			height: auto;
			height: 10%;
			padding: 20px;
			display: flex;
			align-items: center;
			justify-content: center;
			flex-direction: column;
			border-radius: 10px 10px 0px 0px;
		}
		.details h4 {
			font-family: var(--Red);
			font-size: 1.2rem;
			font-weight: 600;
			background-color: rgb(87, 13, 59);
			color: var(--whiteGrey);
			padding: 10px 25px;
			border-radius: 8px;
			min-width: 270px;
		}
		.wrapper__offer-infos {
			display: flex;
			align-items: flex-start;
			justify-content: flex-start;
			flex-direction: column;
			width: 100%;
			gap: 40px;
			height: auto;
			padding: 30px;
			border-radius: 10px 10px 0px 0px;
		}
		.wrapper__offer ul {
			display: flex;
			flex-direction: column;
			gap: 0px;
			width: 100%;
			padding: 0;
		}

		.wrapper__offer ul h3 {
			display: flex;
			flex-direction: column;
			gap: 0px;
			width: 50%;
			padding: 0;
			margin: 0 auto;
			padding: 10px;
			border-radius: 10px;
			margin-top: -20px;
		}

		.name {
			font-size: 1rem;
			padding: 20px;
		}
		.wrapper__offer h2 {
			font-size: 2rem;
		}
		.wrapper__offer h3 {
			font-size: 1rem;
		}
		.wrapper__offer li {
			font-size: 0.8rem;
			line-height: 30px;
		}
	}
</style>
