<script>
	export let type;
	export let description;
	export let img;
	export let alt;
	export let lien;
	export let layerTxt;
</script>

<div class="card">
	<img src={img} {alt} class="img-card" />
	<div class="layer">{layerTxt}</div>
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
		min-height: 600px;
		font-family: epilogue;
		background: linear-gradient(to top, var(--cta) 0%, var(--primary) 60%);
		margin-top: 30px;
		margin-bottom: 20px;
		flex-shrink: 0;
		box-shadow: 0px 0px 50px rgba(76, 76, 76, 0.95);
		border-radius: 10px;
		z-index: 0;
		position: relative;
		overflow: hidden;
	}
	.layer {
		position: absolute;
		font-family: var(--Architects);
		font-weight: 900;
		top: -85%;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 100%;
		color:white;
		font-size: 2rem;
		background-color: rgb(79, 15, 15);
		display: flex;
		align-items: flex-end;
		justify-content: center;
		padding-bottom: 15px;
		text-align: center;
		z-index: 1;
	}
	.wrapper-text {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: 20px;
		gap: 40px;
		z-index: 2;
		margin-top: 120px;
	}
	.wrapper-text h2 {
		font-size: 1.7rem;
		color: var(--whiteGrey);
		font-weight: 500;
		font-family: epilogue;
		letter-spacing: -1px;
		line-height: 32px;
		white-space: pre-line;
	}
	.wrapper-text p {
		font-family: poppins;
		font-size: var(--m);
		color: var(--whiteGrey);
		font-weight: 400;
		line-height: 30px;
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
		margin-top: 50px;
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
			max-width: 300px;
			min-height: auto;
		}
		.wrapper-text h2 {
			font-size: 1.5rem;
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
