<script>
	export let type;
	export let description;
	export let img;
	export let alt;
	export let lien;
</script>

<div class="card">
	<img src={img} {alt} class="img-card" />
	<div class="wrapper-text">
		<h2>{type}</h2>
		<p>{description}</p>
		<a href={lien}>En savoir +</a>
	</div>
</div>

<style>
	.card {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		max-width: 400px;
		min-height: 400px;
		font-family: epilogue;
		background-color: transparent;
		margin-top: 30px;
		margin-bottom: 20px;
		flex-shrink: 0;
		box-shadow: 0px 30px 10px 2px rgba(76, 76, 76, 0.35);
		background-color: var(--primary);
	}
	.wrapper-text {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: 20px;
		gap: 50px;
	}
	.wrapper-text h2 {
		font-size: var(--l);
		color: var(--whiteGrey);
		font-weight: 700;
		font-family: epilogue;
		text-align: center;
		letter-spacing: -1px;
	}
	.wrapper-text p {
		font-family: poppins;
		font-size: var(--m);
		color: var(--whiteGrey);
		font-weight: 400;
		text-align: center;
		line-height: 30px;
		padding: 0px;
		border: none;
		border-radius: 20px;
		z-index: 2;
	}
	.img-card {
		margin-top: -30px;
		max-width: 500px;
		max-height: 150px;
		object-fit: contain;
	}
	a {
		background-color: var(--green);
		color: var(--primary);
		font-family: 'Red Hat Display';
		font-size: 1rem;
		font-weight: 700;
		border-radius: 10px;
		text-align: center;
		padding: 15px 20px;
		box-shadow: 0px 0px 10px 2px rgba(76, 76, 76, 0.35);
		z-index: 999;
    margin-bottom: 20px;
	}
	a:hover {
		background-color: var(--primary);
		color: var(--green);
		border: 1px solid grey;
		transition: 0.4s ease-in-out;
	}

	@media screen and (max-width: 768px) {
		.card {
			width: 300px;
			min-height: auto;
		}
		.wrapper-text h2 {
			font-size: var(--l);
		}
		.wrapper-text p {
			font-size: var(--m);
		}
		.img-card {
			margin-top: 50px;
			max-width: 500px;
			max-height: 100px;
			object-fit: 100%;
			border-radius: 10px;
		}
	}
</style>
