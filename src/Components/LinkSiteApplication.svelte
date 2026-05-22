<h2 class="title">Découvrez nos <span class="gold-text">offres d'élite</span></h2>

<div class="wrapper__links">
	<a href="/creation-site-internet" class="outline-btn">Notre offre site internet</a>
	<a href="/creation-application" class="gold-btn">Notre offre application mobile</a>
</div>

<style>
	.title {
		font-family: var(--Geologica), sans-serif;
		font-size: clamp(1.4rem, 2.5vw, 2rem);
		color: #ffffff;
		font-weight: 800;
		margin-bottom: 2rem;
		letter-spacing: -0.02em;
		text-align: center;
		margin-top: 4rem;
	}

	.gold-text {
		color: var(--green, #D6A319);
	}

	.wrapper__links {
		display: flex;
		gap: 1.5rem;
		justify-content: center;
		align-items: center;
		width: 100%;
		max-width: 800px;
		margin: 0 auto 4rem auto;
	}

	a {
		font-family: var(--Geologica), sans-serif;
		font-size: 0.9rem;
		font-weight: 700;
		text-align: center;
		padding: 16px 32px;
		border-radius: 50px;
		text-decoration: none;
		text-transform: uppercase;
		letter-spacing: 0.05em;
		transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
		display: inline-block;
		width: 48%;
		min-width: 260px;
	}

	.outline-btn {
		border: 2px solid rgba(255, 255, 255, 0.15);
		background-color: transparent;
		color: #ffffff;
	}
	.outline-btn:hover {
		background-color: #ffffff;
		color: var(--primary);
		transform: translateY(-2px);
		box-shadow: 0 10px 20px rgba(255, 255, 255, 0.15);
	}

	.gold-btn {
		background-color: var(--green, #D6A319);
		color: var(--primary);
		box-shadow: 0 10px 20px rgba(214, 163, 25, 0.15);
	}
	.gold-btn:hover {
		background-color: #ffffff;
		color: var(--primary);
		transform: translateY(-2px);
		box-shadow: 0 10px 20px rgba(255, 255, 255, 0.2);
	}

	@media screen and (max-width: 768px) {
		.wrapper__links {
			flex-direction: column;
			gap: 1rem;
		}
		a {
			width: 100%;
		}
	}
</style>
