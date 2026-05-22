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

<div class="wrapper__offer-infos card-glow">
	<p class="name">{name} <span class="divider">|</span> <span class="price-val">{tarif}</span></p>

	<div class="wrapper__offer-infos-product">
		<h2>{h2}</h2>
		<h3>{h3}</h3>

		<div class="details">
			<div class="badge-grid">
				{#each h4 as text}
					<span class="detail-badge">{text}</span>
				{/each}
			</div>
			
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
		flex: 1 1 30%;
		min-width: 320px;
		height: auto;
		gap: 20px;
		border-radius: 24px;
		border: 1px solid rgba(255, 255, 255, 0.05);
		background: rgba(255, 255, 255, 0.02);
		backdrop-filter: blur(15px);
		-webkit-backdrop-filter: blur(15px);
		box-shadow: 0 15px 35px rgba(0, 0, 0, 0.25);
		position: relative;
		overflow: hidden;
		transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
		padding-bottom: 1.5rem;
	}

	.wrapper__offer-infos:hover {
		border-color: var(--green, #D6A319);
		transform: translateY(-8px);
		box-shadow: 0 25px 50px rgba(214, 163, 25, 0.12);
		background: rgba(255, 255, 255, 0.04);
	}

	.wrapper__offer-infos-product {
		padding: 2.5rem 2rem;
		display: flex;
		align-items: flex-start;
		justify-content: flex-start;
		flex-direction: column;
		width: 100%;
		gap: 1.5rem;
		height: auto;
		z-index: 2;
	}

	.wrapper__accordeon {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		margin-top: 1.5rem;
	}

	.wrapper__offer-infos h3 {
		font-family: var(--Red), sans-serif;
		font-size: 0.95rem;
		line-height: 1.6;
		font-weight: 400;
		color: rgba(255, 255, 255, 0.65);
		padding: 0;
		margin: 0;
		white-space: pre-line;
	}

	.wrapper__offer-infos h2 {
		font-family: var(--Geologica), sans-serif;
		font-size: 1.4rem;
		letter-spacing: -0.02em;
		font-weight: 700;
		color: #ffffff;
		margin: 0;
		line-height: 1.35;
		white-space: pre-line;
	}

	.name {
		font-family: var(--Geologica), sans-serif;
		font-size: 1.1rem;
		font-weight: 800;
		background: linear-gradient(135deg, var(--green, #D6A319) 0%, #a67c13 100%);
		color: #ffffff;
		padding: 18px 24px;
		margin: 0;
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		text-align: center;
		z-index: 2;
		letter-spacing: 0.05em;
		text-transform: uppercase;
		box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
		gap: 10px;
	}
	
	.divider {
		opacity: 0.4;
	}
	.price-val {
		color: #ffffff;
		font-weight: 900;
	}

	.details {
		width: 100%;
		display: flex;
		flex-direction: column;
		gap: 1rem;
		margin-top: 0.5rem;
	}

	.badge-grid {
		display: flex;
		flex-wrap: wrap;
		gap: 8px;
		width: 100%;
	}

	.detail-badge {
		font-family: var(--Geologica), sans-serif;
		font-size: 0.75rem;
		font-weight: 700;
		color: var(--green, #D6A319);
		background: rgba(214, 163, 25, 0.1);
		border: 1px solid rgba(214, 163, 25, 0.25);
		padding: 6px 14px;
		border-radius: 50px;
		text-transform: uppercase;
		letter-spacing: 0.05em;
	}

	@media screen and (max-width: 1020px) {
		.wrapper__offer-infos {
			flex: 1 1 48%;
		}
	}

	@media screen and (max-width: 887px) {
		.wrapper__offer-infos {
			flex: 1 1 100%;
			width: 100%;
			padding: 0;
			border: 1px solid rgba(255, 255, 255, 0.05);
		}
		.wrapper__offer-infos-product {
			padding: 2rem 1.25rem;
		}
		.name {
			font-size: 1rem;
			padding: 16px;
		}
	}
</style>
