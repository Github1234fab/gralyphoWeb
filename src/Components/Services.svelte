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
	<img class="img-services" src={img} alt="" />
	<a href={lien}><button class="button-service">En savoir +</button></a>
</div>

<style>
	.card-services {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 20px;
		min-height: 600px;
		max-width: 50%;
		background-color: var(--primary);
		overflow: hidden;
		padding: 20px;
		box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.526);
	}
	.wrapper-text {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: flex-start;
		padding: 20px;
	}
	.text-services {
		font-family: var(--Red);
		font-weight: 800;
		color: var(--whiteGrey);
		font-size: var(--l);
		text-align: left;
		/* letter-spacing: -0.05em; */

	}
	.description-services {
		font-family: poppins;
		font-weight: 400;
		color: var(--whiteGrey);
		font-size: var(--s);
		text-align: left;
		letter-spacing: -0em;
		margin-top: 20px;
	}
	.img-services {
		width: auto;
		height: 200px;
	}
	.button-service {
		min-width: 150px;
		height: 50px;
		color: var(--colorC);
		border: 2px solid var(--whiteGrey);
		background-color: var(--cta);
		border-radius: 8px;
		color: var(--whiteGrey);
		font-family: epilogue;
		font-weight: 500;
		font-size: 1rem;
		cursor: pointer;
		box-shadow: 0px 0px 10px rgba(76, 76, 76, 0.35);
		margin-top: 40px;
		margin-bottom: 30px;
	}
	.button-service:hover {
		animation: bounce 0.4s ease-in-out;
	}
	@keyframes bounce {
		0% {
			transform: scale(1) translateY(-2px);
		}
		25% {
			transform: scale(1.1) translateY(-2px);
		}
		50% {
			transform: scale(1) translateY(-2px);
		}
		75% {
			transform: scale(1.1) translateY(-2px);
		}
		100% {
			transform: scale(1) translateY(-2px);
		}
	}

	@media screen and (max-width: 768px) {
		.card-services {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			gap: 20px;
			flex: none;
			max-width: 90%;
			min-height: 0%;
		}
	}
</style>
