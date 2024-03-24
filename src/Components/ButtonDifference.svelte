<script>
	import { onMount } from 'svelte';

</script>

<div class="wrapper-values">
	<div class="values-button">Pro Digital sécurisé</div>
</div>

<style>
	.wrapper-values {
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 80%;
		height: 100px;
		margin-top: 40px;
		margin-bottom: 0px;
		flex-direction: column;
		gap: 15px;
	}
	.values-button {
		position: relative;
		display: flex;
		justify-content: center;
		align-items: center;
		width: clamp(500px, 30vw, 700px);
		background: linear-gradient(to right, var(--blue2), navy, var(--blue2));
		color: white;
		font-family: poppins;
		font-weight: 600;
		font-size: var(--m);
		border-radius: 80px;
		box-shadow: 0 0 8px 5px navy inset;
		cursor: pointer;
		z-index: 1;
		padding: 25px;
		word-spacing: 30px;
	}

	@media screen and (min-width: 1400px) and (max-width: 2500px) {
	}

	@media screen and (min-width: 1200px) and (max-width: 1400px) {
	}

	@media screen and (min-width: 992px) and (max-width: 1200px) {
	}

	@media screen and (min-width: 768px) and (max-width: 992px) {
	}

	@media screen and (min-width: 576px) and (max-width: 767px) {
	}

	@media screen and (min-width: 300px) and (max-width: 575px) {
			.wrapper-values {
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 100%;
		height: 100px;
		margin-top: 40px;
		margin-bottom: 0px;
		flex-direction: column;
		gap: 0px;
	}
		.values-button {
			display: flex;
			justify-content: center;
			align-items: center;
			width: 100%;
			height: 70px;
			background: linear-gradient(to right, rgb(128, 73, 0), var(--blue2));
			color: white;
			font-family: poppins;
			font-weight: 600;
			font-size: var(--m);
			border-radius: 80px;
			box-shadow: 0 0 8px 3px navy inset;
			cursor: pointer;
			z-index: 1;	
		}
	}
</style>
