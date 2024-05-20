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
			><i class="fa-regular fa-envelope icon"></i></a
		>
		<a href="tel:0672901614" class="contact" target="_blank"
			><i class="fa-solid fa-phone-volume icon"></i></a
		>
		<a
			href="https://doodle.com/bp/marceau3/rv-avec-gralypho-agence-de-conception-web"
			class="contact"
			target="_blank"><i class="fa-solid fa-mug-hot icon"></i></a
		>
	</div>

	<div class="wrapper-media">
		<a href="https://www.facebook.com/profile.php?id=61556314663680" target="_blank"
			><i class="fa-brands fa-square-facebook anim"></i></a
		>
		<a href="https://twitter.com/home?lang=fr" target="_blank"
			><i class="fa-brands fa-square-twitter anim"></i></a
		>
		<a href="https://www.instagram.com/" target="_blank"
			><i class="fa-brands fa-square-instagram anim"></i></a
		>
		<!-- <a href="https://www.tiktok.com/@gralypho" target="_blank"><i class="fa-brands fa-tiktok anim"></i></a
		> -->
	</div>
	<div class="wrapper-gralypho">
		<div class="gralypho">
			<Gralypho />
		</div>
	</div>
	<h4>© {Year} GRALYPHO. <br /> Tous droits réservés.</h4>
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
	.footer h4 {
		margin-top: 30px;
		font-family: epilogue;
		font-weight: 400;
		font-size: 0.6em;
		color: var(--colorC);
		text-align: center;
		margin-bottom: 50px;
	}
	.wrapper-gralypho {
		display: flex;
		align-items: center;
		justify-content: center;
		margin: auto;
		margin-top: 30px;
	}
	.gralypho {
		margin-left: 30px;
	}
	.wrapper-contactez {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		text-align: center;
		border-radius: 8px;
		padding: 40px;
		gap: 10px;
		margin-top: 30px;
	}
	.contact {
		text-decoration: none;
		color: white;
		font-size: 1.5em;
		font-family: poppins;
		width: 50px;
		height: 50px;
		transform: rotate(0deg);
		transition: 0.2s ease-in-out;
		padding: 35px;
		background-color: var(--primary);
		border: rgb(75, 75, 75) solid 1px;
		/* background: linear-gradient(45deg, var(--CTA2), var(--CTA)); */
		border-radius: 10px;
		box-shadow: 0px 0px 10px black;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.contact:hover {
		animation: bounce 0.4s ease-in-out;
		font-weight: 800;
	}

	a {
		color: var(--bleuAcier);
		font-size: 1.8em;
		margin: 0 0px;
		transition: 0.4s ease-in-out;
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
	}
</style>
