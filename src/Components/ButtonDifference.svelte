<script>
</script>

<div class="wrapper-buttons">
	<div class="buttons">100% PRO</div>
	<div class="buttons">100% SOLUTIONS</div>
	<div class="buttons">100% SECURISÉ</div>
</div>

<style>
	.wrapper-buttons {
		display: flex;
		justify-content: space-around;
		align-items: center;
		width: 100%;
		height: 100px;
		background-color: var(--greyBg);
		border-radius: 20px;
		box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
		margin-top: 50px;
		margin-bottom: 50px;
	}
	.buttons {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 200px;
		height: 50px;
		background: linear-gradient(to right, var(--titleHero), var(--blue2));
		color: white;
		font-family: epilogue;
		font-weight: 600;
		font-size: var(--m);
		border-radius: 10px;
		box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
		cursor: pointer;
	}

	@media screen and (max-width: 768px) {
		.wrapper-buttons {
			flex-direction: column;
			height: 200px;
		}
		.buttons {
			width: 80%;
			margin-top: 10px;
		}
	}
</style>
