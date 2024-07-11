<script>
</script>

<div class="circles">
	<div class="circle"></div>
	<div class="circle"></div>
	<div class="circle"></div>
	<div class="circle"></div>
	<div class="circle"></div>
	<div class="circle"></div>
	<div class="circle"></div>
</div>

<style>
	.circles {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 20px;
	}
	.circle {
		width: 10px;
		height: 10px;
		border-radius: 50%;
		background-color: var(--orange);
		margin-top: 60px;
		/* box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.53); */
	}
	.circles .circle:nth-child(1) {
		animation: scale 2s infinite;
		animation-delay: 0s;
	}
	.circles .circle:nth-child(2) {
		animation: scale 2s infinite;
		animation-delay: 0.5s;
	}
	.circles .circle:nth-child(3) {
		animation: scale 2s infinite;
		animation-delay: 1s;
	}
	.circles .circle:nth-child(4) {
		animation: scale 2s infinite;
		animation-delay: 1.5s;
	}
	.circles .circle:nth-child(5) {
		animation: scale 2s infinite;
		animation-delay: 2s;
	}
	.circles .circle:nth-child(6) {
		animation: scale 2s infinite;
		animation-delay: 2.5s;
	}
	.circles .circle:nth-child(7) {
		animation: scale 2s infinite;
		animation-delay: 3s;
	}

	@keyframes scale {
		0% {
			transform: scale(1);
		}
		50% {
			transform: scale(1.5);
		}
		100% {
			transform: scale(1);
		}
	}

	@media screen and (max-width: 768px) {
		.circles .circle:nth-child(4) {
			display: none;
		}
		.circles .circle:nth-child(5) {
			display: none;
		}
		.circles .circle:nth-child(6) {
			display: none;
		}
		.circles .circle:nth-child(7) {
			display: none;
		}
	}
</style>
