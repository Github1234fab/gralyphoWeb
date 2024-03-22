<script>
</script>

<!-- <a href="/SuccesForm">Succes</a> -->

<section class="section-form">
	<div class="wrapper-text">
	<h3>Formulaire de contact</h3>
	<h1>Contactez-nous dès aujourdhui!</h1>
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

		<label for="nom">Nom </label>
		<input name="nom" type="text" id="nom" required placeholder="John" />

		<label for="prenom">Prénom </label>
		<input name="prenom" type="text" id="prenom" required placeholder="Doe" />

		<label for="societe">Société (optionnel)</label>
		<input name="societe" type="text" id="societe" placeholder="ikea" />

		<label for="email">Email </label>
		<input name="email" type="email" id="email" required placeholder="johndoe@gmail.com" />

		<label for="telephone">Téléphone </label>
		<input name="telephone" type="tel" id="telephone" required placeholder="01020304" />

		<label for="demande">Votre demande </label>
		<textarea
			name="demande"
			id="demande"
			class="demande"
			placeholder="Votre projet, vos idées, vos questions ..."
		></textarea>

		<input class="button" type="submit" value="Envoyez" />
	</form>
</section>

<style>
	.section-form {
		display: grid;
		grid-template-columns: repeat(12, 1fr);
		grid-template-rows: auto;
		height: auto;
		/* background-color: white; */
		padding: 20px;
		/* background-image: url("../Assets/png-gralypho/cerveau5.png");
		background-size: 50%;
		background-repeat: no-repeat;
		background-position: center top 60%; */
		background-color: var(--bgHero);
	}
	.wrapper-text{
		grid-column: 2/12;
		grid-row: 1;
		display: flex;
		flex-direction: column;
		z-index: 2;
		margin-top: 40px;
	
	}
	.section-form h3{
		font-family: Heebo;
		text-transform: uppercase;
		font-size: var(--m);
		color: var(--jauneB);
		font-weight: 600;
		margin-bottom: 0px;
		letter-spacing: -0.04em;
		text-align: center;
		  margin-bottom: 20px;
	}
	.section-form h1 {
		margin: 0 auto;
		text-align: center;
		font-family: epilogue;
		font-weight: 700;
		font-size: var(--l);
		color: var(--colorC);
		letter-spacing: -0.05em;
	}
	.form {
		grid-column: 2/12;
		grid-row: 3;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 20px;
		padding: 20px;
		margin-top: 50px;
		/* background-color: rgba(255, 255, 255, 0.277);
		backdrop-filter: blur(10px); */
	}
	input {
		border: 1px solid rgb(223, 218, 218);
		font-family: epilogue;
		font-weight: 400;
		padding: 10px;
		border-radius: 8px;
		box-shadow: 0px 0px 8px 0px rgba(186, 185, 185, 0.478);
		width: clamp(300px, 35%, 400px);
		text-align: left;
	}
	input:hover{
		animation: bounce 0.4s ease-in-out;
	}
	input::placeholder {
		color: rgb(187, 183, 183);
		font-size: 0.7em;
	}
	.demande {
		border: 1px solid rgb(223, 218, 218);
		font-family: epilogue;
		font-weight: 400;
		padding: 10px;
		border-radius: 8px;
		width: clamp(300px, 35%, 400px);
		min-height: 200px;
		box-shadow: 0px 0px 15px 0px rgba(128, 128, 128, 0.14);
	
	}
	.demande::placeholder {
		color: rgb(187, 183, 183);
		font-size: 0.7em;
	}
	label {
		border: none;
		font-family: Poppins;
		font-weight: 500;
		color: var(--primary);
		letter-spacing: -0.05em;
			color: var(--colorC);
	}
	.button {
		justify-content: flex-end;
		border: none;
		background-color: var(--CTA);
		color: white;
		font-family: epilogue;
		font-weight: 500;
		padding: 10px;
		border-radius: 8px;
		width: 100px;
		box-shadow: 0px 0px 15px 0px rgba(128, 128, 128, 0.14);
		text-align: center;
	}
	.button:hover{
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
	.coordonnees {
		grid-column: 2/12;
		grid-row: 2;
		margin-top: 40px;
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 20px;
	}
	.icon-coordonnees {
		color: orange;
	}
	.contact-form {
		font-family: epilogue;
		font-weight: 500;
		color: var(--CTA);
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
	
	
	}
</style>
