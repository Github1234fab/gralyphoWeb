<script>
	// export let icon;
	// export let title;
	  export let li;
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
		<h2 class="title">Détails</h2>
		<!-- <span class="button-after">
			{#if close}
				<img src={arrowUp} alt="Arrow Up" in:fade={{ duration: 1200 }} />
			{:else}
				<img src={arrowDown} alt="Arrow Down" in:fade={{ duration: 1200 }} />
			{/if}
		</span> -->
	</button>

	{#if close}
		<span transition:slide={{ duration: 1200 }}>
			<div
				class="content {close ? 'less' : ''} "
				in:fade={{ duration: 1200 }}
				out:fade={{ duration: 1200 }}
			>
            {#each li as item}
            <li>{item}</li>
        {/each}
			</div>
		</span>
	{/if}
</div>

<style>
	.wrapper {
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: flex-start;
		width: 100%;
	}
	.button {
		position: relative;
		display: flex;
		align-items: center;
		padding: 10px 20px;
		color: var(--whiteGrey);
		font-size: var(--m);
		font-weight: 500;
		cursor: pointer;
		border-radius: 8px;
		border: none;
		text-align: left;
		letter-spacing: -1px;
		font-family: epilogue;
		margin-bottom: 10px;
        border: 1px solid grey;
        background-color: transparent;
	}
	/* .button-after {
		position: absolute;
		content: '{buttonText}';
		color: var(--secondary);
		font-size: 1em;
		font-weight: bolder;
		right: -50px;
		
	} */
    li{
        font-size: 0.8rem;
        color: white;
        align-self: flex-start;
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
	/* .button-after img {
		margin-top: 12px;
		height: 23px;
	}
	.button-after img:hover {
		animation: bounce 0.4s;
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
		border: 1px solid grey;
        background-color: transparent;
	}

	li {
        font-size: 0.8rem;
		font-weight: 300;
		padding: 10px;
		line-height: 20px;
		list-style-type: circle;
        
	}

	@media screen and (max-width: 768px) {
		.wrapper {
			display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: flex-start;
            width: 100%;
		}
		.button {
			position: relative;
		display: flex;
		align-items: center;
		padding: 10px 20px;
		color: var(--whiteGrey);
		font-size: var(--m);
		font-weight: 500;
		cursor: pointer;
		border-radius: 8px;
		border: none;
		text-align: left;
		letter-spacing: -1px;
		font-family: epilogue;
		margin-bottom: 10px;
        border: 1px solid grey;
        background-color: transparent;

		}
       
    
	}
</style>
