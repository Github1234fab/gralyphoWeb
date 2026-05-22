<script>
	export let title;
	export let p;
	import { fade, slide } from 'svelte/transition';

	let isOpen = false;

	function toggleCollapse() {
		isOpen = !isOpen;
	}
</script>

<div class="faq-accordion-item {isOpen ? 'active' : ''}">
	<button class="accordion-trigger" on:click={toggleCollapse} aria-expanded={isOpen}>
		<h3 class="accordion-title">{title}</h3>
		
		<div class="accordion-icon-box">
			<svg xmlns="http://www.w3.org/2000/svg" class="arrow-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
				<polyline points="6 9 12 15 18 9"></polyline>
			</svg>
		</div>
	</button>

	{#if isOpen}
		<div class="accordion-content-wrapper" transition:slide={{ duration: 400 }}>
			<div class="accordion-content" in:fade={{ duration: 300 }}>
				<p class="accordion-text">{@html p}</p>
			</div>
		</div>
	{/if}
</div>

<style>
	.faq-accordion-item {
		width: 100%;
		max-width: 900px;
		margin: 0 auto 1rem auto;
		background: rgba(255, 255, 255, 0.02);
		border: 1px solid rgba(255, 255, 255, 0.05);
		border-radius: 16px;
		overflow: hidden;
		transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
		backdrop-filter: blur(10px);
		-webkit-backdrop-filter: blur(10px);
	}

	.faq-accordion-item:hover {
		background: rgba(255, 255, 255, 0.04);
		border-color: rgba(255, 255, 255, 0.15);
	}

	.faq-accordion-item.active {
		border-color: var(--green, #D6A319);
		background: rgba(255, 255, 255, 0.03);
		box-shadow: 0 10px 25px rgba(214, 163, 25, 0.06);
	}

	.accordion-trigger {
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: 100%;
		padding: 24px 30px;
		background: transparent;
		border: none;
		cursor: pointer;
		text-align: left;
		gap: 20px;
	}

	.accordion-title {
		font-family: var(--Geologica), sans-serif;
		font-size: 1.05rem;
		font-weight: 700;
		color: #ffffff;
		margin: 0;
		line-height: 1.45;
		letter-spacing: -0.01em;
		transition: color 0.3s ease;
	}
	
	.faq-accordion-item:hover .accordion-title {
		color: var(--green, #D6A319);
	}
	.faq-accordion-item.active .accordion-title {
		color: var(--green, #D6A319);
	}

	.accordion-icon-box {
		color: rgba(255, 255, 255, 0.4);
		display: flex;
		align-items: center;
		justify-content: center;
		width: 36px;
		height: 36px;
		border-radius: 50%;
		background: rgba(255, 255, 255, 0.03);
		border: 1px solid rgba(255, 255, 255, 0.05);
		transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
		flex-shrink: 0;
	}

	.faq-accordion-item:hover .accordion-icon-box {
		color: #ffffff;
		border-color: rgba(255, 255, 255, 0.15);
		background: rgba(255, 255, 255, 0.06);
	}

	.faq-accordion-item.active .accordion-icon-box {
		color: var(--primary);
		background: var(--green, #D6A319);
		border-color: var(--green, #D6A319);
	}

	.arrow-icon {
		width: 18px;
		height: 18px;
		transition: transform 0.35s cubic-bezier(0.4, 0, 0.2, 1);
	}

	.faq-accordion-item.active .arrow-icon {
		transform: rotate(180deg);
	}

	.accordion-content-wrapper {
		width: 100%;
	}

	.accordion-content {
		padding: 0 30px 24px 30px;
		border-top: 1px solid rgba(255, 255, 255, 0.03);
	}

	.accordion-text {
		font-family: var(--Red), sans-serif;
		font-size: 0.95rem;
		font-weight: 300;
		line-height: 1.75;
		color: rgba(255, 255, 255, 0.75);
		margin: 20px 0 0 0;
	}

	/* Styling des liens injectés dynamiquement */
	:global(.accordion-text a) {
		color: var(--green, #D6A319);
		text-decoration: underline;
		font-weight: 600;
		transition: color 0.2s ease;
	}

	:global(.accordion-text a:hover) {
		color: #ffffff;
	}

	@media screen and (max-width: 768px) {
		.accordion-trigger {
			padding: 20px;
		}
		.accordion-content {
			padding: 0 20px 20px 20px;
		}
		.accordion-title {
			font-size: 0.95rem;
		}
	}
</style>
