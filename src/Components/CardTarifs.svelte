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


	<div class="wrapper__offer-infos">
		<p class="name">{name} <br /> {tarif}</p>

		<div class="wrapper__offer-infos-product">
			<h2>{h2}</h2>
			<h3>{h3}</h3>

			<div class="details">
				{#each h4 as text}
					<h4>{text}</h4>
				{/each}
				<div class="wrapper__accordeon">
					<Accordeon {li} />
				</div>
			</div>
		</div>
	</div>


<style>
	
	.wrapper__offer-infos {
		display: flex;
		align-items: flex-start;
		justify-content: flex-start;
		flex-direction: column;
		flex: 1 1 calc(30%);
		/* height: 650px; */
		max-height: auto;
		gap: 50px;
		border-radius: 10px;
		border: 1px solid var(--cta);
	}
	.wrapper__offer-infos-product {
		padding: 20px;
		display: flex;
		align-items: flex-start;
		justify-content: flex-start;
		flex-direction: column;
		width: 100%;
		gap: 40px;
		height: auto;
	}
	.wrapper__accordeon {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		margin-top: 40px;
	}

	.wrapper__offer-infos h3 {
		font-family: 'DM sans', sans-serif;
		font-size: 1rem;
		letter-spacing: 0px;
		font-weight: 200;
		color: var(--whiteGrey);
		padding: 0px;
		border-radius: 10px;
		white-space: pre-line;
		padding: 0px;
	}

	.wrapper__offer-infos h2 {
		font-family: var(--Red);
		font-size: 2rem;
		letter-spacing: -1px;
		font-weight: 900;
		color: var(--whiteGrey);
		margin-top: 0px;
		white-space: pre-line;
	}

	.name {
		font-family: var(--Red);
		font-size: 1.5rem;
		font-weight: 600;
		background-color: var(--cta);
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
		gap: 0px;
		width: 100%;
		flex-wrap: wrap;
		height: auto;
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
		color: white;
		border-radius: 8px;
		min-width: 40%;
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


	@media screen and (max-width: 1020px) {
		.wrapper__offer-infos {
			height: 800px;
			flex: 1 1 48%;
		}}

	@media screen and (max-width: 887px) {
		.wrapper__offer-infos {
			height: 700px;
			flex: 1 1 48%;
			
		
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
		}

		.wrapper__offer-infos ul h3 {
			display: flex;
			flex-direction: column;
			gap: 0px;
			width: 50%;
			margin: 20px auto;
			padding: 10px;
			border-radius: 10px;
		}

		.name {
			font-size: 1.2rem;
			padding: 20px;
		}
		.wrapper__offer-infos h2 {
			font-size: 1.5rem;
			line-height: 33px;
		}
		.wrapper__offer-infos h3 {
			font-size: 1rem;
			line-height: 35px;
		}
	}
</style>
