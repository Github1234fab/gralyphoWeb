<script>
	import { onMount } from 'svelte';
	import Gralypho from '../Components/Gralypho.svelte';

	let Year = new Date().getFullYear();

	onMount(() => {
		Year = new Date().getFullYear();
	});
</script>

<footer class="footer">
	<!-- Ligne de séparation lumineuse dorée -->
	<div class="footer-divider"></div>

	<!-- Section 1 : Boutons de contact d'élite -->
	<div class="wrapper-contactez">
		<a href="mailto:gralypho@gmail.com" class="contact-card" target="_blank" rel="noopener noreferrer">
			<div class="icon-circle">
				<i class="fa-regular fa-envelope contact-icon"></i>
			</div>
			<span class="contact-label">Mail</span>
		</a>
		
		<a href="tel:0672901614" class="contact-card" target="_blank" rel="noopener noreferrer">
			<div class="icon-circle">
				<i class="fa-solid fa-phone-volume contact-icon"></i>
			</div>
			<span class="contact-label">Téléphone</span>
		</a>
		
		<a href="https://koalendar.com/e/premier-rv-gratuit-avec-gralypho" class="contact-card" target="_blank" rel="noopener noreferrer">
			<div class="icon-circle">
				<i class="fa-solid fa-mug-hot contact-icon"></i>
			</div>
			<span class="contact-label">Réserver RV</span>
		</a>
		
		<a href="https://fabienmarceau.com/gralyphoPhotography/index.html" class="contact-card" target="_blank" rel="noopener noreferrer">
			<div class="icon-circle">
				<i class="fa-solid fa-camera contact-icon"></i>
			</div>
			<span class="contact-label">Photo</span>
		</a>
	</div>

	<!-- Section 2 : Réseaux Sociaux -->
	<div class="wrapper-media">
		<a class="reseaux" href="https://www.facebook.com/profile.php?id=61556314663680" target="_blank" rel="noopener noreferrer">
			<i class="fa-brands fa-square-facebook media-icon"></i>
			<span class="media-label">Facebook</span>
		</a>
		
		<a class="reseaux" href="https://twitter.com/home?lang=fr" target="_blank" rel="noopener noreferrer">
			<i class="fa-brands fa-square-twitter media-icon"></i>
			<span class="media-label">X / Twitter</span>
		</a>
		
		<a class="reseaux" href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
			<i class="fa-brands fa-square-instagram media-icon"></i>
			<span class="media-label">Instagram</span>
		</a>
	</div>

	<!-- Section 3 : Identité & Copyright -->
	<div class="wrapper-gralypho">
		<div class="gralypho-identity">
			<Gralypho />
			<p class="copyright">© {Year} GRALYPHO. <br />Tous droits réservés. Lyon & Ouest Lyonnais.</p>
			<a href="https://www.jesuisnumerique.fr" class="additionnal-link" target="_blank" rel="noopener noreferrer">Membre de l'Annuaire JeSuisNumérique</a>
		</div>
	</div>
</footer>

<style>
	.footer {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		width: 100%;
		background-color: var(--primary);
		position: relative;
		padding: 5rem 2rem 3rem 2rem;
		overflow: hidden;
		gap: 2.5rem;
	}

	/* Ligne dorée supérieure */
	.footer-divider {
		position: absolute;
		top: 0;
		left: 50%;
		transform: translateX(-50%);
		width: 80%;
		max-width: 1200px;
		height: 1px;
		background: linear-gradient(90deg, rgba(214, 163, 25, 0) 0%, rgba(214, 163, 25, 0.3) 50%, rgba(214, 163, 25, 0) 100%);
	}

	/* Boutons de contact d'élite */
	.wrapper-contactez {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: 1.5rem;
		width: 100%;
		max-width: 800px;
		justify-items: center;
	}

	.contact-card {
		display: flex;
		flex-direction: column;
		align-items: center;
		text-decoration: none;
		gap: 0.75rem;
		width: 100%;
		max-width: 150px;
		transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
	}

	.icon-circle {
		width: 70px;
		height: 70px;
		border-radius: 50%;
		background: rgba(255, 255, 255, 0.02);
		border: 1px solid rgba(255, 255, 255, 0.06);
		display: flex;
		align-items: center;
		justify-content: center;
		box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
		transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
	}

	.contact-icon {
		color: #ffffff;
		font-size: 1.5rem;
		transition: transform 0.3s ease;
	}

	.contact-label {
		font-family: var(--Geologica), sans-serif;
		font-size: 0.85rem;
		font-weight: 600;
		color: rgba(255, 255, 255, 0.7);
		text-align: center;
		transition: color 0.3s ease;
	}

	/* Hover Effects Contact Card */
	.contact-card:hover .icon-circle {
		background: rgba(214, 163, 25, 0.08);
		border-color: var(--green, #D6A319);
		transform: translateY(-5px);
		box-shadow: 0 12px 24px rgba(214, 163, 25, 0.15);
	}

	.contact-card:hover .contact-icon {
		color: var(--green, #D6A319);
		transform: scale(1.1);
	}

	.contact-card:hover .contact-label {
		color: var(--green, #D6A319);
	}

	/* Réseaux Sociaux */
	.wrapper-media {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 3rem;
		padding: 1.5rem 0;
		border-top: 1px solid rgba(255, 255, 255, 0.03);
		border-bottom: 1px solid rgba(255, 255, 255, 0.03);
		width: 100%;
		max-width: 800px;
	}

	.reseaux {
		display: flex;
		align-items: center;
		gap: 8px;
		text-decoration: none;
		color: rgba(255, 255, 255, 0.5);
		transition: all 0.3s ease;
	}

	.media-icon {
		font-size: 1.8rem;
		transition: transform 0.3s ease;
	}

	.media-label {
		font-family: var(--Red), sans-serif;
		font-size: 0.85rem;
		font-weight: 400;
	}

	/* Hover Effects Socials */
	.reseaux:hover {
		color: var(--green, #D6A319);
	}

	.reseaux:hover .media-icon {
		transform: scale(1.15) rotate(4deg);
	}

	/* Identité & Copyright */
	.wrapper-gralypho {
		display: flex;
		justify-content: center;
		align-items: center;
		text-align: center;
		width: 100%;
		padding-top: 1rem;
	}

	.gralypho-identity {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1rem;
	}

	.copyright {
		font-family: var(--Red), sans-serif;
		font-size: 0.8rem;
		font-weight: 300;
		color: rgba(255, 255, 255, 0.4);
		line-height: 1.6;
		margin: 0;
	}

	.additionnal-link {
		font-family: var(--Red), sans-serif;
		font-size: 0.7rem;
		font-weight: 300;
		color: rgba(255, 255, 255, 0.25);
		text-decoration: none;
		transition: color 0.3s ease;
	}

	.additionnal-link:hover {
		color: var(--green, #D6A319);
	}

	/* Media Queries responsive */
	@media screen and (max-width: 768px) {
		.footer {
			padding: 4rem 1.25rem 2.5rem 1.25rem;
			gap: 2rem;
		}

		.wrapper-contactez {
			grid-template-columns: repeat(2, 1fr);
			gap: 1.5rem;
		}

		.icon-circle {
			width: 60px;
			height: 60px;
		}

		.contact-icon {
			font-size: 1.25rem;
		}

		.wrapper-media {
			gap: 1.5rem;
			flex-direction: column;
			align-items: center;
		}
	}
</style>
