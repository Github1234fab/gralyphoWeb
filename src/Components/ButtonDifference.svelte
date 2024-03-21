<script>
	import { onMount } from 'svelte';

	onMount(() => {
		gsap.to('.values-button', {
			scale: 1,
			opacity: 1,
			ease: 'ease-in-out',
			scrollTrigger: {
				trigger: '.values-button',
				start: 'top 900px',
				end: '-200px',
				scrub: 5
			}
		});
	});
</script>

<div class="wrapper-values">
	<div class="values-button"> Pro  Digital   sécurisé</div>
	<!-- <div class="values-button">100% Digital</div>
	<div class="values-button">100% Sécurisé</div> -->
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
		position: relative;
		display: flex;
		justify-content: center;
		align-items: center;
		width: 50%;
		/* height: 30px; */
		background: linear-gradient(to right, var(--blue2), navy, var(--blue2));
		color: white;
		font-family: poppins;
		font-weight: 600;
		font-size: var(--m);
		border-radius: 80px;
		box-shadow: 0 0 8px 5px navy inset;
		cursor: pointer;
		z-index: 1;
		padding: 25px;
		transform: scale(0.8);
		opacity: 0.4;
word-spacing: 30px;
	}
	

	@media screen and (min-width: 1400px) and (max-width: 2500px){


}

@media screen and (min-width: 1200px) and (max-width: 1400px){


}


@media screen and (min-width: 992px) and (max-width: 1200px){


}

@media screen and (min-width: 768px) and (max-width: 992px){


}

@media screen and (min-width: 576px) and (max-width: 767px){


}

@media screen and (min-width: 300px) and (max-width: 575px){
.values-button {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 90%;
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

}


</style>
