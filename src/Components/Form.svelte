<script>
</script>

<section class="section-form" id="section-form">
	<!-- Halos décoratifs arrière-plan -->
	<div class="glow-orb-form"></div>

	<div class="wrapper-text">
		<h1 class="form-title">Formulaire de contact</h1>
		<h2 class="form-contactez">Discutons de votre projet dès aujourd'hui !</h2>
	</div>

	<div class="coordonnees">
		<a href="mailto:contact@gralypho.com" class="contact-badge">
			<svg class="contact-icon" viewBox="0 0 24 24" width="18" height="18">
				<path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" fill="currentColor"/>
			</svg>
			contact@gralypho.com
		</a>
		<a href="tel:0672901614" class="contact-badge">
			<svg class="contact-icon" viewBox="0 0 24 24" width="18" height="18">
				<path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.57a1 1 0 0 0-1.01.24l-2.2 2.2a15.045 15.045 0 0 1-6.59-6.59l2.2-2.2a1 1 0 0 0 .24-1.01 11.48 11.48 0 0 1-.57-3.53A1 1 0 0 0 7.36 4H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.36a1 1 0 0 0-1-1.01z" fill="currentColor"/>
			</svg>
			06 72 90 16 14
		</a>
	</div>

	<form
		name="contact-form-gralypho"
		method="POST"
		netlify-honeypot="bot-field"
		data-netlify="true"
		class="form-card"
	>
		<input type="hidden" name="form-name" value="contact-form-gralypho" />

		<div class="wrapper-inputs">
			<div class="input-group">
				<input name="nom" type="text" id="nom" required placeholder="Nom" />
			</div>
			<div class="input-group">
				<input name="prenom" type="text" id="prenom" required placeholder="Prénom" />
			</div>
		</div>

		<div class="wrapper-inputs">
			<div class="input-group">
				<input name="email" type="email" id="email" required placeholder="Adresse mail" />
			</div>
			<div class="input-group">
				<input name="telephone" type="tel" id="telephone" required placeholder="Téléphone" />
			</div>
		</div>

		<textarea name="demande" id="demande" class="demande" placeholder="Décrivez-nous brièvement votre projet (votre activité, vos objectifs, etc.)"></textarea>

		<button type="submit" class="submit-btn">Envoyer le message</button>
	</form>
</section>

<style>
	.section-form {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
		width: 100%;
		padding: 6rem 2rem;
		background: radial-gradient(circle at 50% 100%, #0d172e 0%, var(--primary) 70%);
		justify-content: center;
		align-items: center;
		position: relative;
		overflow: hidden;
	}

	.glow-orb-form {
		position: absolute;
		bottom: -150px;
		left: 50%;
		transform: translateX(-50%);
		width: 600px;
		height: 600px;
		background: radial-gradient(circle, rgba(214, 163, 25, 0.08) 0%, transparent 60%);
		border-radius: 50%;
		pointer-events: none;
		filter: blur(80px);
	}

	.wrapper-text {
		display: flex;
		flex-direction: column;
		align-items: center;
		z-index: 2;
		text-align: center;
		margin-bottom: 2.5rem;
	}

	.form-title {
		font-family: var(--Geologica), sans-serif;
		text-transform: uppercase;
		font-size: 0.8rem;
		color: var(--green, #D6A319);
		font-weight: 700;
		letter-spacing: 0.15em;
		margin-bottom: 10px;
	}

	.form-contactez {
		color: #ffffff;
		font-family: var(--Geologica), sans-serif;
		font-size: clamp(1.8rem, 3.5vw, 2.5rem);
		font-weight: 900;
		letter-spacing: -0.02em;
		margin: 0;
	}

	.coordonnees {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
		gap: 1.5rem;
		margin-bottom: 3.5rem;
		z-index: 2;
	}

	.contact-badge {
		font-family: var(--Geologica), sans-serif;
		font-weight: 600;
		color: #ffffff;
		font-size: 0.95rem;
		text-decoration: none;
		display: inline-flex;
		align-items: center;
		gap: 10px;
		background: rgba(255, 255, 255, 0.03);
		border: 1px solid rgba(255, 255, 255, 0.07);
		padding: 10px 24px;
		border-radius: 50px;
		transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
		box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
	}

	.contact-badge:hover {
		background: rgba(214, 163, 25, 0.1);
		border-color: var(--green, #D6A319);
		color: var(--green, #D6A319);
		transform: translateY(-2px);
		box-shadow: 0 10px 20px rgba(214, 163, 25, 0.15);
	}

	.contact-icon {
		transition: transform 0.3s ease;
	}
	.contact-badge:hover .contact-icon {
		transform: scale(1.1);
	}

	/* Form Card Styling */
	.form-card {
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
		padding: 3.5rem 3rem;
		background: rgba(255, 255, 255, 0.02);
		border: 1px solid rgba(255, 255, 255, 0.05);
		border-radius: 28px;
		backdrop-filter: blur(15px);
		-webkit-backdrop-filter: blur(15px);
		box-shadow: 0 30px 60px rgba(0, 0, 0, 0.35);
		width: 100%;
		max-width: 800px;
		z-index: 2;
	}

	.wrapper-inputs {
		display: flex;
		flex-direction: row;
		gap: 1.5rem;
		width: 100%;
	}

	.input-group {
		flex: 1;
		width: 100%;
	}

	input {
		background-color: rgba(255, 255, 255, 0.02);
		border: 1px solid rgba(255, 255, 255, 0.1);
		font-family: var(--Red), sans-serif;
		font-weight: 400;
		padding: 18px 24px;
		border-radius: 16px;
		width: 100%;
		color: #ffffff;
		font-size: 1.05rem;
		transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
		outline: none;
	}

	input:focus {
		border-color: var(--green, #D6A319);
		background-color: rgba(255, 255, 255, 0.04);
		box-shadow: 0 0 15px rgba(214, 163, 25, 0.15);
	}

	input::placeholder {
		color: rgba(255, 255, 255, 0.4);
		font-weight: 300;
		font-size: 0.95rem;
	}

	.demande {
		background-color: rgba(255, 255, 255, 0.02);
		border: 1px solid rgba(255, 255, 255, 0.1);
		font-family: var(--Red), sans-serif;
		font-weight: 400;
		padding: 20px 24px;
		border-radius: 16px;
		width: 100%;
		min-height: 180px;
		color: #ffffff;
		font-size: 1.05rem;
		transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
		outline: none;
		resize: vertical;
	}

	.demande:focus {
		border-color: var(--green, #D6A319);
		background-color: rgba(255, 255, 255, 0.04);
		box-shadow: 0 0 15px rgba(214, 163, 25, 0.15);
	}

	.demande::placeholder {
		color: rgba(255, 255, 255, 0.4);
		font-weight: 300;
		font-size: 0.95rem;
	}

	.submit-btn {
		border: none;
		background-color: var(--green, #D6A319);
		color: var(--primary);
		font-family: var(--Geologica), sans-serif;
		font-size: 0.95rem;
		font-weight: 700;
		text-transform: uppercase;
		letter-spacing: 0.05em;
		padding: 18px 36px;
		border-radius: 50px;
		transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
		cursor: pointer;
		margin-top: 1.5rem;
		align-self: center;
		min-width: 240px;
		box-shadow: 0 10px 20px rgba(214, 163, 25, 0.2);
	}

	.submit-btn:hover {
		background-color: #ffffff;
		color: var(--primary);
		transform: translateY(-2px);
		box-shadow: 0 15px 30px rgba(255, 255, 255, 0.2);
	}

	.submit-btn:active {
		transform: translateY(0);
	}

	@media screen and (max-width: 768px) {
		.section-form {
			padding: 4rem 1.25rem;
		}
		.coordonnees {
			flex-direction: column;
			gap: 10px;
			width: 100%;
		}
		.contact-badge {
			width: 100%;
			justify-content: center;
		}
		.form-card {
			padding: 2rem 1.5rem;
			gap: 1.25rem;
		}
		.wrapper-inputs {
			flex-direction: column;
			gap: 1.25rem;
		}
		.submit-btn {
			width: 100%;
			margin-top: 1rem;
		}
	}
</style>
