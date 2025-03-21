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
		flex-direction: row;
		flex-wrap: wrap;
		gap: 10px;
		padding: 10px;
		height: 200px;
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
    /* img:nth-child(3n) { width: 300px; height: 300px; }
img:nth-child(2n) { width: 200px; height: 250px; }
img:nth-child(5n) { width: 250px; height: 200px; } */

    @media screen and (max-width: 768px) {
        .container {
            height: 200px;
           max-width: 500px;
        }
    }
    @media screen and (max-width: 420px) {
		.container{
			height: 140px;
		}
	}
</style>
