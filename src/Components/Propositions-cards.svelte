<script>
	export let type;
	export let description;
	export let lien;
	export let layerTxt;
	export let price;
</script>

<div class="card">
	<div class="layer">{layerTxt}</div>
	<div class="price">{price}</div>
	<div class="wrapper-text">
		<h2>{type}</h2>
		<ul>
			{#each description as item}
				<li>{item}</li>
			{/each}
		</ul>
	</div>
	<a href={lien}>En savoir +</a>
</div>

<style>
	.card {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-between;
		width: 100%;
		height: 100%;
		font-family: epilogue;
		background-color: #171717;
		flex-grow: 1;
		border-radius: 10px;
		z-index: 0;
		position: relative;
		overflow: hidden;
	}
	.price{
		position: absolute;
		font-family: var(--Red);
		font-weight: 900;
		text-transform: uppercase;
		top: -70px;
		left: -90px;
		width: 50%;
		height: 20%;
		bottom: 0;
		padding-top: 100px;
		transform: rotate(-45deg);
		color: white;
		border-radius: 5px;
		font-size: 1.3rem;
		background-color: red;
		display: flex;
		align-items: center;
		justify-content: center;
		text-align: center;
		z-index: 0;
	}
	.layer {
		position: absolute;
		font-family: var(--Red);
		font-weight: 800;
		text-transform: uppercase;
		top: 20px;
		left: 25%;
		width: 50%;
		height: 10%;
		color: white;
		border-radius: 5px;
		font-size: 0.7rem;
		background-color: var(--blue);
		display: flex;
		align-items: center;
		justify-content: center;
		text-align: center;
		z-index: 1;
	}
	.wrapper-text {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: baseline;
		padding: 20px;
		gap: 30px;
		margin-top: 120px;
		margin-bottom: 30px;
		z-index: 2;
		height: 100%;
		flex-grow: 1;
	}
	.wrapper-text h2 {
		font-size: 1.7rem;
		color: var(--whiteGrey);
		font-weight: 500;
		font-family: epilogue;
		letter-spacing: -1px;
		line-height: 33px;
		white-space: pre-line;
		text-align: center;
	}

	.wrapper-text li {
		font-family: poppins;
		font-size: var(--m);
		color: var(--whiteGrey);
		font-weight: 200;
		text-align: left;
		border: none;
		border-radius: 20px;
		z-index: 2;
		margin-left: 20px;
		margin-top: 10px;
		list-style-type: square;

	}

	a {
		background-color: var(--green);
		color: var(--primary);
		font-family: 'Red Hat Display';
		font-size: 1rem;
		font-weight: 700;
		border-radius: 10px;
		text-align: center;
		margin-top: auto;
		padding: 15px 20px;
		box-shadow: 0px 0px 10px 2px rgba(76, 76, 76, 0.35);
		z-index: 999;
		margin-bottom: 50px;
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
		/* .wrapper-text p {
			font-size: var(--m);
		} */
	}
</style>
