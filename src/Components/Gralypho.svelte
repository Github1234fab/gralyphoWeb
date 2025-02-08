<script>
	import gralypho from '../Assets/gralyphoLogoHeader.png';
</script>

<div class="rect">
	<!-- <h2 class="subtitle">Agence Web</h2> -->
	<img class="logo" src={gralypho} alt="logo de Gralypho" />
	<h1 class="title">Gralypho</h1>
</div>

<style>
	.logo {
		width: 45px;
		height: 45px;
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
		font-size: 1rem;
		color: var(--whiteGrey);
		margin-top: 2px;
		font-weight: 600;
		letter-spacing: -1px;
	}

	.rect:hover {
		animation: bounce 0.4s ease-in-out;
	}
	/* .subtitle {
		font-family: var(--Architects);
		color: var(--green);
		font-size: 1rem;
		display: flex;
		justify-content: center;
		align-items: center;
		font-weight: 600;
		border-radius: 4px;
		margin-top: -7px;
		rotate: 0deg;
		margin-left: 0px;
	} */

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
