<script>
	export let title;
	export let link;
</script>

<div class="card">
	<h2>{title}</h2>
	<a href={link} target="_blank" class="button linear-gradient">Découvrir</a>
</div>

<style>
	.card {
		border: none;
		flex-shrink: 0;
		border-radius: 8px;
		margin: 8px;
		height: 18em;
		width: 20em;
		user-select: none;
		overflow: hidden;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 10px;
		box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.105);
		background-color: var(--colorC);
	}

	.button {
		text-decoration: none;
		color: white;
		background-color: var(--CTA);
		font-family: kanit;
		font-weight: 400;
		margin-top: 30px;
		margin-left: 0px;
		width: 160px;
		border-radius: 6px;
		text-align: center;
		padding: 20px;
		box-shadow: 0px 0px 10px 2px rgba(76, 76, 76, 0.35);
	}
	.button:hover {
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
	.card h2 {
		z-index: 1;
		font-family: poppins;
		font-weight: 500;
		font-size: var(--m);
		color: var(--CTA);
		padding: 10px;
		text-align: center;
		letter-spacing: -1px;
	
	}
</style>
