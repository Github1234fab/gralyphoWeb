<script>
	import { onMount } from 'svelte';
	import Gralypho from '../Components/Gralypho.svelte';

	let Year;

	onMount(() => {
		Year = new Date().getFullYear();
	});
</script>

<footer class="footer">
	<div class="wrapper-contactez">
		<a href="mailto:gralypho@gmail.com " class="contact" target="_blank"
			>
			<i class="fa-regular fa-envelope icon"></i><p>Mail</p></a
		>
		<a href="tel:0672901614" class="contact" target="_blank"
			>
			<i class="fa-solid fa-phone-volume icon"></i><p>Tel</p></a
		>
		<a
			href="https://doodle.com/bp/marceau3/rv-avec-gralypho-agence-de-conception-web"
			class="contact"
			target="_blank"
			>
			<i class="fa-solid fa-mug-hot icon"></i><p>RV</p></a
		>
		<a
			href="https://fabienmarceau.com/gralyphoPhotography/index.html"
			class="contact"
			target="_blank"
			>
			<i class="fa-solid fa-camera icon"></i><p>Photo</p></a
		>
	</div>

	<div class="wrapper-media">
		<a class="reseaux" href="https://www.facebook.com/profile.php?id=61556314663680" target="_blank"
			><p>Facebook</p><i class="fa-brands fa-square-facebook anim icon "></i></a
		>
		<a class="reseaux"  href="https://twitter.com/home?lang=fr" target="_blank"
			><p>X</p><i class="fa-brands fa-square-twitter anim icon reseaux"></i></a
		>
		<a class="reseaux"  href="https://www.instagram.com/" target="_blank"
			><p>instagram</p><i class="fa-brands fa-square-instagram anim icon reseaux"></i></a
		>
		<!-- <a href="https://www.tiktok.com/@gralypho" target="_blank"><i class="fa-brands fa-tiktok anim"></i></a
		> -->
	</div>
	<div class="wrapper-gralypho">
		<div class="gralypho">
			<Gralypho />
		</div>
	</div>
	<h1>© {Year} GRALYPHO. <br /> Tous droits réservés.</h1>
</footer>

<style>
	.footer {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		height: 100%;
		font-size: 16px;
		background-color: var(--primary);
		color: white;
		font-family: epilogue;
		gap: 0px;
		/* border-top: 1px solid var(--bleuAcier); */
	}
	.footer h1 {
		margin-top: 30px;
		font-family: 'Dosis';
		font-weight: 400;
		font-size: 0.9rem;
		color: white;
		text-align: center;
		margin-bottom: 50px;
	}
	.wrapper-gralypho {
		display: flex;
		align-items: center;
		justify-content: center;
		margin: 0 auto;
		margin-top: 30px;
	}

	.wrapper-contactez {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		text-align: center;
		border-radius: 0px;
		padding: 40px;
		gap: 10px;
		margin-top: 30px;
	
			margin-bottom: 20px;
	}
	.contact {
		text-decoration: none;
		border: none;
		color: rgb(255, 255, 255);
		font-weight: 200;
		font-size: 1rem;
		font-family: poppins;
		width: 60px;
		height: 60px;
		transform: rotate(0deg);
		transition: 0.2s ease-in-out;
		padding: 50px;
		background-color: var(--cta);
		border-radius: 10px;
		box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.331);
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		text-align: center;
		gap: 10px;
	}

	.contact:hover {
		animation: bounce 0.4s ease-in-out;
		font-weight: 800;
	}

	a {
		color: var(--bleuAcier);
		font-size: 1.5rem;
		margin: 0 0px;
		transition: 0.4s ease-in-out;
	}
	.icon {
		color: var(--white);
		font-size: 1.5rem;
	}

	.anim:hover {
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
	.wrapper-media {
		display: flex;
		gap: 10px;
			border-top: 1px dotted  rgb(188, 188, 188);
			border-bottom: 1px dotted rgb(187, 187, 187);
			padding: 20px;
	}
	.reseaux {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		color: white;
		gap: 5px;
	}
	.reseaux p{
color: grey;
font-size: 0.5rem;

	}

	@media screen and (max-width: 768px) {
		.contact {
			font-size: 0.6rem;
			padding: 30px;
			height: 80px;
		}
		.icon{
			font-size: 1.3rem;
		}
			.wrapper-media {
		display: flex;
		gap: 20px;
	}
	}
</style>
