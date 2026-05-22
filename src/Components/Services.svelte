<script>
	export let text;
	export let img;
	export let description;
	export let lien;
</script>

<div class="card-services">
	<div class="wrapper-text">
		<h2 class="text-services">{text}</h2>
		<p class="description-services">{description}</p>
	</div>
	
	{#if img}
		<img class="img-services" src={img} alt={text} />
	{/if}
	
	<a href={lien} class="btn-link">
		<button class="button-service">En savoir +</button>
	</a>
</div>

<style>
	.card-services {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
		gap: 1.5rem;
		min-height: 520px;
		width: 100%;
		flex: 1;
		background: rgba(255, 255, 255, 0.02);
		border: 1px solid rgba(255, 255, 255, 0.05);
		border-radius: 24px;
		overflow: hidden;
		padding: 2.5rem 2rem;
		box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
		backdrop-filter: blur(10px);
		-webkit-backdrop-filter: blur(10px);
		transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
	}

	.card-services:hover {
		border-color: var(--green, #D6A319);
		transform: translateY(-8px);
		box-shadow: 0 20px 45px rgba(214, 163, 25, 0.12);
		background: rgba(255, 255, 255, 0.04);
	}

	.wrapper-text {
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
		width: 100%;
	}

	.text-services {
		font-family: var(--Geologica), sans-serif;
		font-weight: 700;
		color: #ffffff;
		font-size: 1.25rem;
		text-align: center;
		margin: 0;
		line-height: 1.4;
	}

	.description-services {
		font-family: var(--Red), sans-serif;
		font-weight: 300;
		color: rgba(255, 255, 255, 0.7);
		font-size: 0.9rem;
		text-align: center;
		line-height: 1.6;
		margin-top: 1rem;
		max-width: 280px;
	}

	.img-services {
		width: auto;
		height: 120px;
		object-fit: contain;
		filter: drop-shadow(0 10px 15px rgba(0, 0, 0, 0.3));
		transition: transform 0.4s ease;
	}
	.card-services:hover .img-services {
		transform: scale(1.08) rotate(2deg);
	}

	.btn-link {
		text-decoration: none;
		margin-top: auto;
		width: 100%;
		display: flex;
		justify-content: center;
	}

	.button-service {
		min-width: 160px;
		height: 46px;
		background-color: var(--green, #D6A319);
		border: none;
		border-radius: 50px;
		color: var(--primary);
		font-family: var(--Geologica), sans-serif;
		font-weight: 700;
		font-size: 0.85rem;
		text-transform: uppercase;
		letter-spacing: 0.05em;
		cursor: pointer;
		box-shadow: 0 4px 15px rgba(214, 163, 25, 0.2);
		transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
	}

	.button-service:hover {
		background-color: #ffffff;
		color: var(--primary);
		box-shadow: 0 8px 20px rgba(255, 255, 255, 0.25);
		transform: translateY(-2px);
	}

	@media screen and (max-width: 768px) {
		.card-services {
			max-width: 100%;
			min-height: auto;
			padding: 2rem 1.5rem;
		}
	}
</style>
