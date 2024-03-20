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
		
		margin-top: 50px;
		margin-bottom: 50px;
	}
	.buttons {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 200px;
		height: 5px;
		background: linear-gradient(to right, var(--blue), var(--blue2));
		color: white;
		font-family: epilogue;
		font-weight: 600;
		font-size: var(--m);
		border-radius: 10px;
		box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.748) inset;
		cursor: pointer;
	}
	.buttons::after{
		position: absolute;
		content: '';
		width: 100%;
		height: 100%;
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
