<script>
</script>

<section class="section-form" id="section-form">
	<div class="wrapper-text">
		<h1 class="form-title">Formulaire de contact</h1>
		<h2 class="form-contactez">Contactez-nous dès aujourdhui!</h2>
	</div>
	<div class="coordonnees">
		<a href="mailto:gralypho@gmail.com " class="contact-form"> Mail
			<i class="fa-regular fa-envelope icon-coordonnees"></i> :  contact@gralypho.com</a
		>
		<a href="tel:0672901614" class="contact-form"
			> Téléphone <i class="fa-solid fa-phone-volume icon-coordonnees"></i> :  0672 901 614</a
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

		<button type="submit">Envoyez</button>
	</form>
</section>

<style>
	.section-form {
		display: flex;
		flex-direction: column;
		height: auto;
		width: 100%;
		padding: 20px;
		background-color: var(--primary);
		justify-content: center;
		align-items: center;
		background-image: var(--primary);
		/* background-image: url("../Assets/bgthree.png"); */
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
		font-family: var(--Geologica);
		text-transform: uppercase;
		font-size: var(--s);
		color: var(--whiteGrey);
		font-weight: 600;
		margin-bottom: 0px;
		letter-spacing: -0.04em;
		margin-top: 50px;
		text-align: center;
		margin-bottom: 20px;
	}
	.form-contactez {
		color: var(--whiteGrey);
		font-family: var(--Geologica);
		font-size: var(--l);
		/* color: var(--primary); */
		font-weight: 900;
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
		font-weight: bolder;
		padding: 20px;
		border-radius: 15px;
		width: 100%;
		text-align: left;
		color: var(--whiteGrey);
		font-size: 1.2rem;
	}
	input:hover {
		animation: bounce 0.4s ease-in-out;
	}
	input::placeholder {
		color: rgb(209, 209, 209);
		font-weight: 300;
		font-size: var(--m);
	}
	.demande {
		border: 2px solid rgb(220, 219, 219);
		font-family: 'Red Hat Display';
		font-weight: 800;
		padding: 10px;
		border-radius: 15px;
		width: 90%;
		min-height: 200px;
		background-color: transparent;
		color: rgb(255, 255, 255);
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

	button {
		border: none;
		background-color:transparent;
		font-size: var(--m);
		border: 1px solid white;
		color: var(--whiteGrey);
		font-family: epilogue;
		font-weight: 600;
		padding: 25px 30px;
		border-radius: 15px;
		text-align: center;
		margin-top: 40px;
		margin-bottom: 10px;
	}
	button:hover {
		animation: bounce 0.4s ease-in-out;
	}
	button:active {
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
		color: rgb(255, 255, 255);
	}
	.contact-form {
		font-family: epilogue;
		font-weight: 500;
		/* color: var(--primary); */
		color: rgb(255, 255, 255);
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
