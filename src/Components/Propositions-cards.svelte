<script>
	export let type;
	export let description;
	export let lien;
	export let layerTxt;
	export let subtitle;

	import { onMount } from 'svelte';

	onMount(() => {
		// Vérification de sécurité pour éviter les plantages si GSAP n'est pas chargé globalement
		if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
			gsap.utils.toArray('.card').forEach((card) => {
				ScrollTrigger.create({
					trigger: card,
					start: 'top 85%',
					onEnter: () => {
						gsap.fromTo(
							card,
							{ x: -2 },
							{
								x: 2,
								duration: 0.08,
								repeat: 8,
								yoyo: true,
								ease: 'power1.inOut'
							}
						);
					}
				});
			});
		}
	});
</script>

<div class="card">
	<div class="layer">{layerTxt}</div>
	
	<div class="wrapper-text">
		<h2>{type}</h2>
		<h3>{subtitle}</h3>
		
		<div class="wrapper__li">
			<ul>
				{#each description as item}
					<li>{item}</li>
				{/each}
			</ul>
		</div>
	</div>
	
	<a href={lien} class="more-btn">En savoir +</a>
</div>

<style>
	.card {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-between;
		flex: 1 1 23%;
		min-width: 260px;
		height: 520px;
		font-family: var(--Red), sans-serif;
		border-radius: 24px;
		z-index: 2;
		position: relative;
		overflow: hidden;
		background: rgba(255, 255, 255, 0.02);
		border: 1px solid rgba(255, 255, 255, 0.05);
		box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
		backdrop-filter: blur(10px);
		-webkit-backdrop-filter: blur(10px);
		transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
		padding-bottom: 2.5rem;
	}

	.card:hover {
		border-color: var(--green, #D6A319);
		transform: translateY(-8px);
		box-shadow: 0 20px 45px rgba(214, 163, 25, 0.12);
		background: rgba(255, 255, 255, 0.04);
	}

	.layer {
		position: absolute;
		font-family: var(--Geologica), sans-serif;
		font-weight: 800;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		top: 0;
		left: 0;
		width: 100%;
		height: 70px;
		color: #ffffff;
		font-size: 0.95rem;
		background: linear-gradient(135deg, var(--green, #D6A319) 0%, #a67c13 100%);
		display: flex;
		align-items: center;
		justify-content: center;
		text-align: center;
		z-index: 3;
		box-shadow: 0 4px 15px rgba(0, 0, 0, 0.25);
	}

	.wrapper-text {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 2rem 1.5rem;
		margin-top: 80px;
		z-index: 2;
		width: 100%;
		flex-grow: 1;
	}

	.wrapper-text h2 {
		font-size: 1.25rem;
		color: #ffffff;
		font-weight: 700;
		font-family: var(--Geologica), sans-serif;
		letter-spacing: -0.02em;
		line-height: 1.4;
		white-space: pre-line;
		text-align: center;
		margin: 0;
	}

	.wrapper-text h3 {
		margin-top: 10px;
		font-size: 0.95rem;
		color: rgba(255, 255, 255, 0.6);
		font-weight: 400;
		font-family: var(--Red), sans-serif;
		line-height: 1.5;
		text-align: center;
	}

	.wrapper__li {
		margin-top: 2.5rem;
		width: 100%;
	}

	.wrapper__li ul {
		list-style: none;
		padding: 0;
		margin: 0;
		display: flex;
		flex-direction: column;
		gap: 12px;
		align-items: center;
	}

	.wrapper__li li {
		font-family: var(--Red), sans-serif;
		font-size: 0.9rem;
		color: rgba(255, 255, 255, 0.8);
		font-weight: 400;
		text-align: center;
		position: relative;
	}

	.wrapper__li li::before {
		content: '▪';
		color: var(--green, #D6A319);
		display: inline-block;
		margin-right: 8px;
		font-size: 1rem;
		vertical-align: middle;
	}

	.more-btn {
		background-color: var(--green, #D6A319);
		color: var(--primary);
		font-family: var(--Geologica), sans-serif;
		font-size: 0.85rem;
		font-weight: 700;
		border-radius: 50px;
		text-align: center;
		padding: 12px 28px;
		box-shadow: 0 4px 15px rgba(214, 163, 25, 0.2);
		z-index: 5;
		text-transform: uppercase;
		letter-spacing: 0.05em;
		transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
		display: inline-block;
		text-decoration: none;
	}

	.more-btn:hover {
		background-color: #ffffff;
		color: var(--primary);
		transform: translateY(-2px);
		box-shadow: 0 8px 20px rgba(255, 255, 255, 0.25);
	}

	@media screen and (max-width: 1357px) {
		.card {
			flex: 1 1 45%;
			height: 500px;
		}
	}

	@media screen and (max-width: 768px) {
		.card {
			flex: 1 1 100%;
			height: 480px;
		}
		.layer {
			font-size: 0.85rem;
			height: 60px;
		}
		.wrapper-text {
			margin-top: 70px;
		}
	}
</style>
