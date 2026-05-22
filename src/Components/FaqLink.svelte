<script>
</script>

<section class="faqLink">
	<!-- Halo lumineux interne -->
	<div class="inner-glow"></div>

	<h2 class="title">Vous vous posez des questions ?</h2>
	
	<p class="subtitle">
		Consultez toutes nos réponses d'experts à propos de la création de sites internet, d'applications mobiles, des technologies utilisées, de nos tarifs, et des meilleures stratégies de référencement SEO.
	</p>
	
	<a href="/FAQ" class="faq-btn">Accéder à la FAQ</a>
</section>

<style>
	.faqLink {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 2rem;
		height: auto;
		width: 100%;
		max-width: 900px;
		margin: 4rem auto;
		background: rgba(255, 255, 255, 0.02);
		border: 1px solid rgba(255, 255, 255, 0.05);
		backdrop-filter: blur(10px);
		-webkit-backdrop-filter: blur(10px);
		box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
		border-radius: 28px;
		padding: 4.5rem 3rem;
		position: relative;
		overflow: hidden;
		text-align: center;
	}

	.inner-glow {
		position: absolute;
		top: -50%;
		left: -50%;
		width: 200%;
		height: 200%;
		background: radial-gradient(circle at center, rgba(20, 129, 186, 0.03) 0%, transparent 60%);
		pointer-events: none;
	}

	.title {
		text-align: center;
		font-family: var(--Geologica), sans-serif;
		font-weight: 800;
		font-size: clamp(1.5rem, 2.5vw, 2.2rem);
		color: #ffffff;
		margin: 0;
		letter-spacing: -0.02em;
		line-height: 1.3;
		z-index: 2;
	}

	.subtitle {
		text-align: center;
		font-family: var(--Red), sans-serif;
		font-weight: 300;
		font-size: 0.95rem;
		color: rgba(255, 255, 255, 0.7);
		margin: 0;
		line-height: 1.7;
		max-width: 700px;
		z-index: 2;
	}

	.faq-btn {
		font-family: var(--Geologica), sans-serif;
		font-size: 0.85rem;
		font-weight: 700;
		color: var(--primary);
		background-color: var(--green, #D6A319);
		padding: 14px 36px;
		text-decoration: none;
		text-transform: uppercase;
		letter-spacing: 0.05em;
		box-shadow: 0 10px 20px rgba(214, 163, 25, 0.15);
		border-radius: 50px;
		z-index: 3;
		transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
		display: inline-block;
	}

	.faq-btn:hover {
		background-color: #ffffff;
		color: var(--primary);
		box-shadow: 0 15px 30px rgba(255, 255, 255, 0.2);
		transform: translateY(-2px);
	}

	@media screen and (max-width: 768px) {
		.faqLink {
			padding: 2.5rem 1.5rem;
			gap: 1.5rem;
			width: 100%;
		}
		.faq-btn {
			width: 100%;
			text-align: center;
		}
	}
</style>
