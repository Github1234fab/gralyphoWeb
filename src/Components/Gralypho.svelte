<div class="rect">
	<h1 class="title">Gralypho</h1>
	<h2 class="subtitle">Agence Web</h2>
</div>

<style>
	.rect {
		display: flex;
		flex-direction: column;
		min-width: 20%;
		height: 40px;
		font-weight: 600;
		justify-content: center;
		align-items: center;
		border-radius: 5px;
		margin-left: 0px;
	}
	.title {
		font-family: "Baumans";
		font-size: 1.5rem;
		color: var(--whiteGrey);
		margin-top: 2px;
		font-weight: 900;
	}

	.rect:hover {
		animation: bounce 0.4s ease-in-out;
	}
	.subtitle {
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
