<script>
</script>

<section class="section-form " id="section-form">
	<div class="wrapper-text">
		<h3 class="form-title">Formulaire de contact</h3>
		<h1 class="form-contactez">Contactez-nous dès aujourdhui!</h1>
	</div>
	<div class="coordonnees">
		<a href="mailto:gralypho@gmail.com " class="contact-form">
			<i class="fa-regular fa-envelope icon-coordonnees"></i> contact@gralypho.com</a
		>
		<a href="tel:0672901614" class="contact-form"
			><i class="fa-solid fa-phone-volume icon-coordonnees"></i> 0672 901 614</a
		>
	</div>

	<form
		name="contact-form-gralypho"
		method="POST"
		netlify-honeypot="bot-field"
		data-netlify="true"
		class="form"
	>
		<input type="hidden" name="form-name" value="contact-form-gralypho" />

		<div class="wrapper-inputs">
			<input name="nom" type="text" id="nom" required placeholder="Nom" />

			<input name="prenom" type="text" id="prenom" required placeholder="Prénom" />
		</div>

		<div class="wrapper-inputs">
			<input name="email" type="email" id="email" required placeholder="Adresse mail" />

			<input name="telephone" type="tel" id="telephone" required placeholder="Téléphone" />
		</div>

		<textarea name="demande" id="demande" class="demande" placeholder="Votre demande"></textarea>

			<input class="button" type="submit" value="Envoyez" />
	</form>

</section>

<style>
	.section-form {
		display: flex;
		flex-direction: column;
		height: auto;
		width: 100%;
		padding: 20px;
		background-color: var(--bgHero);
		justify-content: center;
		align-items: center;
		box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.781);
	}

	.wrapper-text {
		grid-column: 2/12;
		grid-row: 1;
		display: flex;
		flex-direction: column;
		z-index: 2;
		justify-self: center;
		align-self: center;
		margin-top: 40px;
	}
	.form-title {
		font-family: Heebo;
		text-transform: uppercase;
		font-size: var(--s);
		color: rgb(232, 232, 232);
		/* color: var(--bleuAcier); */
		font-weight: 600;
		margin-bottom: 0px;
		letter-spacing: -0.04em;
		margin-top: 50px;
		text-align: center;
		margin-bottom: 20px;
	}
	.form-contactez {
		color: rgb(232, 232, 232);
		font-family: 'radio canada big';
		font-size: var(--l);
		/* color: var(--primary); */
		font-weight: 500;
		margin-bottom: 0px;
		letter-spacing: -0.04em;
		text-align: center;
	}

	.form {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 20px;
		padding: 20px;
		margin-top: 50px;
		min-width: 80%;
		margin-bottom: 50px;
	}
	.wrapper-inputs {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		gap: 20px;
		width: 90%;
	}
	input {
		background-color: transparent;
		border: 1px solid rgb(217, 216, 216);
		font-family: 'Red Hat Display';
		font-weight: 600;
		padding: 20px;
		border-radius: 15px;
		width: 100%;
		text-align: left;
		color: white;
		font-size: 1rem;
	}
	input:hover {
		animation: bounce 0.4s ease-in-out;
	}
	input::placeholder {
		color: rgb(187, 183, 183);

		font-size: var(--m);
	}
	.demande {
		border: 2px solid rgb(220, 219, 219);
		font-family: 'Red Hat Display';
		font-weight: 400;
		padding: 10px;
		border-radius: 15px;
		width: 90%;
		min-height: 200px;
		background-color: transparent;
		color: white;
		font-size: 1rem;
	}
	.demande:hover {
		animation: bounce 0.4s ease-in-out;
	}
	.demande::placeholder {
		color: rgb(187, 183, 183);
		font-size: 0.7em;
		font-size: var(--m);
	}

	.button {
		border: none;
		background-color: white;
		
		color:  var(--primary);
		font-family: epilogue;
		font-weight: 500;
		padding: 20px 10px;
		border-radius: 8px;
		max-width: 100px;
		box-shadow: 0px 0px 15px 0px rgba(128, 128, 128, 0.14);
		text-align: center;
		margin-top: 0px;
		margin-bottom: 100px;
	}
	.button:hover {
		animation: bounce 0.4s ease-in-out;
	}
	.button:active {
	border: solid white 5px;
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
	.coordonnees {
		grid-column: 2/12;
		grid-row: 2;
		margin-top: 40px;
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 50px;
	}
	.icon-coordonnees {
		/* color: var(--primary); */
		color: rgb(232, 232, 232);
	}
	.contact-form {
		font-family: epilogue;
		font-weight: 500;
		/* color: var(--primary); */
		color: rgb(232, 232, 232);
		letter-spacing: -0.05em;
		font-size: var(--m);
		text-align: center;
		word-spacing: 6px;
	}

	@media screen and (max-width: 768px) {
		.coordonnees {
			flex-direction: column;
			margin-top: 20px;
			gap: 5px;
		}
		.wrapper-inputs {
			display: flex;
			flex-direction: column;
			width: 100vw;
		}
		input {
			width: 90%;
			justify-content: center;
			align-items: center;
		}
		.demande {
			width: 90%;
		}
	}
</style>
