<script>
	export let img; // img doit être un tableau
	export let alt;
</script>

<div class="container">
	{#each img as image}
		<img src={image} {alt} />
	{/each}
</div>

<style>
	.container {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-wrap: wrap;
		gap: 10px;
		padding: 10px;
		height: 100%;
		background-color: var(--primary);
	}
	img {
		width: 50%;
		height: 250px;
		border-radius: 20px;
		object-fit: cover;
		box-shadow: 0px 0px 5px grey;
		flex: 1 1 0;
	}

	@media screen and (max-width: 768px) {
		.container {
			height: auto;
			width: 100%;
		}
		img {
			width: 40%;
			height: 150px;
			border-radius: 20px;
			object-fit: cover;
			box-shadow: 0px 0px 5px grey;
			flex: 1 1 0;
		}
	}
</style>
