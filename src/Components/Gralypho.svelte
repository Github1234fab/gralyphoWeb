<script>
	import gralypho from '../Assets/logoGralypho.jpeg';
</script>

<div class="rect">
	
	<img class="logo" src={gralypho} alt="logo de Gralypho" />
	<h1 class="title">Gralypho</h1>
</div>

<style>
	.logo {
		width: 50px;
		height: 50px;
		border-radius: 8px;
	}
	.rect {
		display: flex;
		gap: 0px;
		min-width: 20%;
		height: 40px;
		font-weight: 600;
		justify-content: center;
		align-items: center;
		border-radius: 5px;
		margin-left: 0px;
	}
	.title {
		font-family: var(--Poppins);
		font-size: 0.8rem;
		color: var(--whiteGrey);
		margin-top: 0px;
		font-weight: 600;
		letter-spacing: -1px;
		margin-left: 5px;
	}

	.rect:hover {
		animation: bounce 0.4s ease-in-out;
	}

	@keyframes bounce {
		0% {
			transform: scale(1) translateY(-2px);
		}
		25% {
			transform: scale(1) translateY(3px);
		}
		50% {
			transform: scale(1) translateY(-1px);
		}
		75% {
			transform: scale(1) translateY(2px);
		}
		100% {
			transform: scale(1) translateY(0);
		}
	}
</style>
