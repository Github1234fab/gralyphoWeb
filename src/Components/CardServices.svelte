<script>
	import { onMount } from 'svelte';
	export let title;
	export let lien;
	export let p;
	export let icon;

	function redirectToLink() {
		window.location.href = lien;
	}

	let rotation = false;

	function changeToTrue() {
		rotation = true;
	}
	function changeToFalse() {
		rotation = false;
	}

	onMount(() => {
		// Sécurité s'assurant du repli si GSAP n'est pas chargé globalement
		if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
			document.querySelectorAll('.icon').forEach((el) => {
				gsap.to(el, {
					scale: 1,
					ease: 'power1.inOut',
					duration: 3,
					scrollTrigger: {
						trigger: el,
						start: 'top 90%',
						end: 'top 50%',
						scrub: 2
					}
				});
			});

			document.querySelectorAll('.card-services').forEach((el) => {
				gsap.to(el, {
					x: 0,
					opacity: 1,
					ease: 'power1.inOut',
					duration: 1,
					scrollTrigger: {
						trigger: el,
						start: 'top 90%',
						end: 'top 50%',
						scrub: 1
					}
				});
			});
		} else {
			// Fallback : Rendre la carte et l'icône directement visibles
			const cards = document.querySelectorAll('.card-services');
			cards.forEach(c => {
				c.style.transform = 'none';
				c.style.opacity = '1';
			});
			const icons = document.querySelectorAll('.icon');
			icons.forEach(i => {
				i.style.transform = 'scale(1)';
			});
		}
	});
</script>

<button 
	class="card-services" 
	on:click={redirectToLink} 
	on:mouseenter={changeToTrue} 
	on:mouseleave={changeToFalse}
>
	<div class="wrapper-text-service">
		<div class="wrapper-icon">
			<img class="icon" src={icon} alt={title} />
		</div>
		<h2>{title}</h2>
		<p class="p">{p}</p>
		<a href={lien} class="lien">En savoir +</a>
	</div>
</button>

<style>
	.card-services {
		display: flex;
		align-items: center;
		justify-content: center;
		background: rgba(255, 255, 255, 0.02);
		border: 1px solid rgba(255, 255, 255, 0.05);
		padding: 3rem 2rem;
		min-height: 380px;
		width: 45%;
		min-width: 320px;
		border-radius: 24px;
		backdrop-filter: blur(10px);
		-webkit-backdrop-filter: blur(10px);
		transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
		cursor: pointer;
		opacity: 0.85; /* Prêt pour l'animation GSAP, fallback géré en JS */
		box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
	}

	.card-services:hover {
		background: rgba(255, 255, 255, 0.04);
		border-color: var(--green, #D6A319);
		transform: translateY(-8px);
		opacity: 1 !important;
		box-shadow: 0 20px 40px rgba(214, 163, 25, 0.1);
	}

	.wrapper-text-service {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 1.5rem;
		width: 100%;
	}

	.wrapper-icon {
		background: rgba(255, 255, 255, 0.03);
		border: 1px solid rgba(255, 255, 255, 0.06);
		width: 80px;
		height: 80px;
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		transition: all 0.4s ease;
	}

	.card-services:hover .wrapper-icon {
		background: rgba(214, 163, 25, 0.1);
		border-color: var(--green, #D6A319);
		box-shadow: 0 0 15px rgba(214, 163, 25, 0.2);
	}

	.icon {
		width: 40px;
		height: 40px;
		object-fit: contain;
		filter: invert(1) brightness(1); /* Rendre les icônes blanches élégantes */
		transition: transform 0.4s ease;
	}

	.card-services:hover .icon {
		transform: scale(1.1);
	}

	.card-services h2 {
		font-family: var(--Geologica), sans-serif;
		font-weight: 700;
		color: #ffffff;
		font-size: 1.4rem;
		text-align: center;
		letter-spacing: -0.02em;
		margin: 0;
	}

	.p {
		font-family: var(--Red), sans-serif;
		font-weight: 300;
		font-size: 0.95rem;
		color: rgba(255, 255, 255, 0.7);
		text-align: center;
		line-height: 1.6;
		margin: 0;
		max-width: 320px;
	}

	.lien {
		font-family: var(--Geologica), sans-serif;
		border: 2px solid rgba(255, 255, 255, 0.15);
		background-color: transparent;
		min-width: 140px;
		font-weight: 700;
		color: #ffffff;
		font-size: 0.85rem;
		text-transform: uppercase;
		letter-spacing: 0.05em;
		padding: 12px 24px;
		border-radius: 50px;
		transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
		text-decoration: none;
		text-align: center;
		margin-top: 0.5rem;
	}

	.card-services:hover .lien {
		background-color: var(--green, #D6A319);
		border-color: var(--green, #D6A319);
		color: var(--primary);
		box-shadow: 0 5px 15px rgba(214, 163, 25, 0.3);
	}

	@media screen and (max-width: 768px) {
		.card-services {
			width: 100%;
			max-width: 100%;
			min-width: 100%;
			padding: 2rem 1.5rem;
		}
	}
</style>
