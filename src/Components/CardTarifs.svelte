<script>
	import Button from '../Components/ButtonCTA.svelte';
	export let name;
	export let h2;
	export let h3;
	export let h4;
	export let li;
	export let tarif;
	import Accordeon from './Accordeon.svelte';
</script>

<main>
	<div class="wrapper__offer">
		<div class="wrapper__offer-infos">
			<p class="name">{name}</p>
<div class="wrapper__offer-infos-product">
			<h2>{h2}</h2>
			<h3>{h3}</h3>
		

			<div class="details">
				{#each h4 as text}
					<h4>{text}</h4>
				{/each}
				<h4 class="tarif">{tarif}</h4>
				<!-- <Button /> -->
				<Accordeon {li} />
			</div>
			</div>
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
		padding: 0px;
		height: auto;
		font-family: epilogue;
	}

	.wrapper__offer {
		display: flex;
		align-items: flex-start;
		justify-content: flex-start;
		height: auto;
		margin: 0 auto;
		padding: 20px;
		gap: 10px;
		border-radius: 8px;
		width: 100%;
	}
	.wrapper__offer-infos {
		display: flex;
		align-items: flex-start;
		justify-content: flex-start;
		flex-direction: column;
		width: 100%;
		gap: 30px;
		height: auto;

		border-radius: 10px;
		border: 1px solid var(--blue);
		box-shadow: 0px 0px 10px 5px var(--blue);
	}
	.wrapper__offer-infos-product{
		padding: 20px;
		display: flex;
		align-items: flex-start;
		justify-content: flex-start;
		flex-direction: column;
		width: 100%;
		gap: 20px;
		height: auto;
	}

	.wrapper__offer h3 {
		font-size: 1rem;
		letter-spacing: 0px;
		font-weight: 200;
		color: var(--whiteGrey);
		/* border: 1px solid grey; */
		padding: 0px;
		border-radius: 10px;
		white-space: pre-line;
		padding:0px;
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

	.name {
		font-family: var(--Red);
		font-size: 1rem;
		font-weight: 600;
		background-color: var(--blue);
		color: var(--whiteGrey);
		padding: 20px;
		margin-top: 30px;
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		text-align: center;
	}

	.details {
		gap: 10px;
		width: 100%;
		flex-wrap: wrap;
		height: auto;
		padding: 0px;
		display: flex;
		align-items: flex-start;
		justify-content: center;
		flex-direction: column;
		border-radius: 10px 10px 0px 0px;
		margin-top: 0px;
	
	}
	.details h4 {
		font-family: var(--Red);
		font-size: 1rem;
		font-weight: 700;
		background-color: var(--blue);
		color: white;
		padding: 12px 25px;
		border-radius: 8px;
		min-width: 40%;
	}
	.tarif {
		margin-bottom: 30px;
		background-color: var(--whiteGrey) !important;
		color: rgb(11, 11, 11) !important;
		font-weight: bold !important;
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
		.wrapper__offer {
			padding: 0px;
		}
		.details {
			gap: 7px;
			height: auto;
			padding: 0px;
			display: flex;
			align-items: flex-start;
			justify-content: flex-start;
			flex-direction: column;
			border-radius: 10px 10px 0px 0px;
			margin-top: 0px;
			width: 100%;
		}
		.details h4 {
			font-family: var(--Red);
			font-size: 1rem;
			font-weight: 600;
			color: var(--whiteGrey);
			padding: 12px;
			border-radius: 8px;
			min-width: 70%;
		}
		.wrapper__offer-infos {
			display: flex;
			align-items: flex-start;
			justify-content: flex-start;
			flex-direction: column;
			width: 100%;
			gap: 30px;
			height: auto;
			padding: 20px;
			border-radius: 10px;
			border: 1px solid var(--blue);
			box-shadow: 0px 0px 10px 5px var(--blue);
		}

		.wrapper__offer ul h3 {
			display: flex;
			flex-direction: column;
			gap: 0px;
			width: 50%;
			margin: 20px auto;
			padding: 10px;
			border-radius: 10px;
		}

		.name {
			font-size: 2rem;
			padding: 20px;
		}
		.wrapper__offer h2 {
			font-size: 2rem;
			line-height: 33px;
		}
		.wrapper__offer h3 {
			font-size: 1rem;
			line-height: 35px;
		}
	}
</style>
