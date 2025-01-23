<script>
	// export let icon;
	export let title;
	export let p;
	//   export let number;
	import { fade, slide } from 'svelte/transition';
	import arrowUp from '../Assets/png-gralypho/arrowup.svg';
	import arrowDown from '../Assets/png-gralypho/arrowdown.svg';

	let close = false;

	function collapse() {
		close = !close;
	}
</script>

<div class="wrapper {close ? 'active' : ''}">
	<button class="button" on:click={collapse}>
		<h2 class="title">{title}</h2>
		<span class="button-after">
			{#if close}
				<img src={arrowUp} alt="Arrow Up" in:fade={{ duration: 1200 }} />
			{:else}
				<img src={arrowDown} alt="Arrow Down" in:fade={{ duration: 1200 }} />
			{/if}
		</span>
	</button>

	{#if close}
		<span transition:slide={{ duration: 1200 }}>
			<div
				class="content {close ? 'less' : ''} "
				in:fade={{ duration: 1200 }}
				out:fade={{ duration: 1200 }}
			>
				<p class="p">{p}</p>
			</div>
		</span>
	{/if}
</div>

<style>
	.wrapper {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 100vw;
	}
	.button {
		position: relative;
		display: flex;
		align-items: center;
		padding: 20px;
		color: var(--whiteGrey);
		font-size: var(--m);
		font-weight: 500;
		cursor: pointer;
		border-radius: 8px;
		border-top: none;
		border-right: none;
		border-left: none;
		border-bottom: 1px rgb(219, 219, 219) solid;
		background: linear-gradient(90deg, var(--primary) 0%, var(--cta));
		width: 90%;
		height: 100px;
		text-align: left;
		letter-spacing: -1px;
		font-family: epilogue;
		margin-bottom: 10px;
		box-shadow: 0px 10px 10px 0px rgba(0, 0, 0, 0.281);
	}
	.button-after {
		position: absolute;
		content: '{buttonText}';
		color: var(--secondary);
		font-size: 1em;
		font-weight: bolder;
		right: 50px;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 10px;
	}
	.title{
		font-family: epilogue;
		font-size: var(--m);
		font-weight: 500;
		color: var(--whiteGrey);
		letter-spacing: 0px;
		width: 70%;
		line-height: 25px;
	}
	.button-after img {
		margin-top: 12px;
		height: 23px;
	}
	.button-after img:hover {
		animation: bounce 0.4s;
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
	.content {
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		text-align: center;
		padding: 10px;
		border-radius: 5px;
		margin-bottom: 10px;
		border: none;
	}

	.p {
		font-family: var(--Poppins);
		text-align: left;
		font-size: var(--m);
		font-weight: 
		300;
		line-height: 36px;
		color: var(--primary);
		margin: 0px;
		background-color: var(--whiteGrey);
		padding: 30px;
		width: 90%;
	}

	@media screen and (max-width: 768px) {
		.wrapper {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			width: 100vw;
		}
		.button {
			font-size: 1.2em;
			height: 200px;
			line-height: 30px;
		}

		.button-after {
			right: 0px;
			margin-top: -30px;
			line-height: 30px;
		}
	}
</style>
