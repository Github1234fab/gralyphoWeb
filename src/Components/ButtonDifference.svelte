<script>
	import { onMount } from 'svelte';

	onMount(() => {
		gsap.to('.values-button', {
			scale: 1,
			opacity: 1,
			ease: 'ease-in-out',
			scrollTrigger: {
				trigger: '.values-button',
				start: 'top 800px',
				end: '-200px',
				scrub: 5
			}
		});
	});
</script>

<div class="wrapper-values">
	<div class="values-button">100% Pro</div>
	<div class="values-button">100% Digital</div>
	<div class="values-button">100% Sécurisé</div>
</div>

<style>
	.wrapper-values {
		display: flex;
		justify-content: space-around;
		align-items: center;
		width: 100%;
		height: 100px;
		margin-top: 80px;
		margin-bottom: 100px;
		flex-direction: column;
		gap: 15px;
	}
	.values-button {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 50%;
		height: 20px;
		background: linear-gradient(to right, navy, var(--blue2));
		color: white;
		font-family: poppins;
		font-weight: 600;
		font-size: var(--m);
		border-radius: 80px;
		box-shadow: 0 0 8px 5px navy inset;
		cursor: pointer;
		z-index: 1;
		padding: 15px;
		transform: scale(0.8);
		opacity: 0.4;
	}
</style>
