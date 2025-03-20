<script>
	export let img; // img doit être un tableau
	export let alt;
</script>

<div class="container">
	{#each img as image}
		<img src={image} alt={alt} />
	{/each}
</div>

<style>
	.container {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: row;
		flex-wrap: wrap;
		gap: 10px;
		padding: 10px;
		height: auto;
		background-color: var(--primary);

	}
	img {
		width: 100%;
		height: 100%;
		border-radius: 20px;
		object-fit: cover;
		box-shadow: 0px 0px 5px grey;
flex: 1 1 0;
	}


</style>
