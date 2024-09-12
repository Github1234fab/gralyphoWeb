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
		{title}
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
		padding: 40px;
		color: var(--colorH);
		font-size: var(--m);
		font-weight: 500;
		cursor: pointer;
		border-radius: 8px;
		border-top: none;
		border-right: none;
		border-left: none;
		border-bottom: 1px rgb(219, 219, 219) solid;
		background-color: white;
		width: 90%;
		/* box-shadow: 0px 0px 15px 4px rgb(0 0 0 / 10%); */
		height: 100px;
		text-align: left;
		letter-spacing: -1px;
		font-family: epilogue;
		margin-bottom: 10px;
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
		font-family: Heebo;
		text-align: left;
		font-size: var(--m);
		font-weight: 300;
		color: var(--primary);
		margin: 0px;
		background-color: var(--whiteGrey);
		padding: 30px;
		width: 90%;
		/* border-radius: 14px 22px 17px 38px; */
		/* box-shadow: 0px 0px 15px 4px rgb(0 0 0 / 10%); */
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
			font-size: 1em;
		}

		.button-after {
			right: 0px;
			margin-top: -30px;
		}
	}
</style>
