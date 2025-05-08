<script>
	export let type;
	export let description;
	export let lien;
	export let layerTxt;
	// export let price;
	export let subtitle;

	import { onMount } from 'svelte';

	onMount(() => {
		gsap.utils.toArray('.card').forEach((card) => {
			ScrollTrigger.create({
				trigger: card,
				start: 'top 80%',
				onEnter: () => {
					gsap.fromTo(
						card,
						{ x: -3 },
						{
							x: 3,
							duration: 0.1,
							repeat: 25,
							yoyo: true,
							ease: 'power1.inOut'
						}
					);
				}
			});
		});
	});
</script>

<div class="card">
	<div class="layer">{layerTxt}</div>
	<!-- <div class="price">{price}</div> -->
	<div class="wrapper-text">
		<h2>{type}</h2>
		<h3>{subtitle}</h3>
		<div class="wrapper__li">
			<ul>
				{#each description as item}
					<li>{item}</li>
				{/each}
			</ul>
		</div>
	</div>
	<a href={lien}>En savoir +</a>
</div>

<style>
	.card {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		flex: 1 1 calc(10%);
		height: 650px;
		font-family: epilogue;
		border-radius: 10px;
		z-index: 0;
		position: relative;
		overflow: hidden;
		border: 1px solid #8775555c;
	}


	.card:hover {
		border: 2px solid var(--whiteGrey);
	}

	.layer {
		position: absolute;
		font-family: var(--Red);
		font-weight: 900;
		text-transform: lowercase;
		top: 45px;
		left: 50%;
		height: 100px;
		transform: translate(-50%, -50%);
		width: 100%;
		padding: 15px 20px;
		color: var(--whiteGrey);
		font-size: 1.5rem;
		background-color: #877555;
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
		gap: 0px;
		margin-top: 120px;
		margin-bottom: 30px;
		z-index: 2;
		height: 100%;
		flex-grow: 1;
	}
	.wrapper-text h2 {
		font-size: 1.5rem;
		color: var(--whiteGrey);
		font-weight: 500;
		font-family: epilogue;
		letter-spacing: -1px;
		line-height: 30px;
		white-space: pre-line;
		text-align: center;
	}
	.wrapper-text h3 {
		margin-top: 10px;
		font-size: 1.2rem;
		color: var(--whiteGrey);
		font-weight: 100;
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
		list-style-type: square;
	}
	.wrapper__li {
		margin-top: 50px;
	}

	a {
		background-color: var(--CTA);
		color: var(--whiteGrey);
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

	@media screen and (max-width: 1357px) {
		.card {
			flex: 1 1 calc(45%); /* 2 cartes par ligne */
			height: 550px;
		}
	}

	@media screen and (max-width: 768px) {
		.card {
			flex: 1 1 100%; /* 1 carte par ligne */
			height: 600px;
		}

		.layer{
			font-size: 1.3rem;
		}
		.wrapper-text h2 {
			font-size: 1.3rem;
			line-height: 30px;
			font-weight: 500;
		}
	}
</style>
