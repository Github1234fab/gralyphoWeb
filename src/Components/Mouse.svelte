<script>
	import { spring } from 'svelte/motion';
	const mouseCoords = spring({ x: 0, y: 0 });
	const onMouseMove = (event) => {
		$mouseCoords = { x: event.x, y: event.y };
	};
</script>

<svelte:window on:mousemove={onMouseMove} />

<div class="container">
	<div class="cursor" style:--x={`${$mouseCoords.x}px`} style:--y={`${$mouseCoords.y}px`} />
</div>

<style>
	:global(body) {
		width: 100vw;
		height: 200vh;
	}

	:global(*),
	:global(body) {
		padding: 0;
		margin: 0;
	}

	.container {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		pointer-events: none;
		cursor: none;
		z-index: 99999;
	}

	.cursor {
		z-index: 99999;
		cursor: none;
		position: absolute;
		top: 0;
		left: 0;
		background-color: rgba(255, 255, 255, 0.151);
		border: solid 1px white;
		backdrop-filter: blur(2px);
		width: 55px;
		height: 55px;
		/* border-radius: 50%; */
		box-shadow: 0px 0px 15px 2px rgba(76, 76, 76, 0.5);

		transform: translate(-50%, -50%) translate(var(--x, 0px), var(--y, 0px));
	}
</style>
