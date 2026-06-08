<script>
	import collaborationLocale from '../Assets/collaboration-locale.png';
</script>

<section class="method-section">
	<div class="wrapper__text2">
		<div class="method-split-container">
			<div class="method-image-side">
				<img class="method-img" src={collaborationLocale} alt="Collaboration locale et humaine avec l'agence" />
			</div>
			<div class="method-content-side">
				<h3>Une approche <strong class="accent-text">humaine & transparente</strong> pour votre réussite</h3>
				<div class="steps-list">
					<div class="step-item">
						<div class="step-header">
							<span class="step-icon">🤝</span>
							<h4 class="step-title">Collaboration de Proximité</h4>
						</div>
						<p class="step-desc">Nous travaillons main dans la main avec vous. Pas de plateforme offshore, vous échangez directement avec les créateurs de votre site.</p>
					</div>
					<div class="step-item">
						<div class="step-header">
							<span class="step-icon">⚙️</span>
							<h4 class="step-title">Zéro Abonnement Contraint</h4>
						</div>
						<p class="step-desc">Pas de frais cachés ou d'engagements obligatoires sur 24 mois. Vous restez propriétaire à 100% de votre outil et de votre nom de domaine.</p>
					</div>
					<div class="step-item">
						<div class="step-header">
							<span class="step-icon">📈</span>
							<h4 class="step-title">Résultats Mesurables</h4>
						</div>
						<p class="step-desc">Nous configurons vos outils de statistiques et votre fiche Google Business pour suivre vos appels et visites en temps réel.</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	.method-section {
		width: 100%;
		display: flex;
		justify-content: center;
		padding: 2rem 0;
		box-sizing: border-box;
	}

	.wrapper__text2 {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 100%;
		max-width: 1000px;
		z-index: 5;
		padding: 2.5rem;
		background: rgba(255, 255, 255, 0.02);
		border: 1px solid rgba(255, 255, 255, 0.05);
		border-radius: 24px;
		backdrop-filter: blur(15px);
		-webkit-backdrop-filter: blur(15px);
		box-shadow: 0 30px 60px rgba(0, 0, 0, 0.3);
		box-sizing: border-box;
	}
	
	.wrapper__text2 h3 {
		font-family: var(--Geologica), sans-serif;
		font-weight: 300;
		font-size: clamp(0.95rem, 1.8vw, 1.15rem);
		text-align: center;
		line-height: 1.8;
		color: rgba(255, 255, 255, 0.9);
		margin: 0;
	}
	
	.accent-text {
		color: var(--green, #d6a319);
		font-weight: 600;
	}

	.method-split-container {
		display: grid;
		grid-template-columns: 0.95fr 1.05fr;
		gap: 3.5rem;
		align-items: center;
		width: 100%;
	}
	
	.method-image-side {
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	
	.method-img {
		width: 100%;
		max-width: 440px;
		height: auto;
		border-radius: 24px;
		border: 1px solid rgba(255, 255, 255, 0.08);
		box-shadow: 0 20px 50px rgba(0, 0, 0, 0.4);
		display: block;
	}
	
	.method-content-side {
		display: flex;
		flex-direction: column;
		gap: 2rem;
		align-items: flex-start;
		text-align: left;
	}
	
	.method-content-side h3 {
		text-align: left;
	}
	
	.steps-list {
		display: flex;
		flex-direction: column;
		gap: 1.25rem;
		width: 100%;
	}
	
	.step-item {
		background: rgba(255, 255, 255, 0.015);
		border: 1px solid rgba(255, 255, 255, 0.05);
		padding: 1.5rem;
		border-radius: 18px;
		display: flex;
		flex-direction: column;
		gap: 8px;
		transition: all 0.3s ease;
		box-sizing: border-box;
	}
	
	.step-item:hover {
		background: rgba(255, 255, 255, 0.035);
		border-color: rgba(214, 163, 25, 0.3);
		transform: translateX(5px);
		box-shadow: 0 10px 25px rgba(214, 163, 25, 0.08);
	}
	
	.step-item:hover .step-icon {
		transform: scale(1.1);
		background: rgba(214, 163, 25, 0.15);
	}
	
	.step-header {
		display: flex;
		align-items: center;
		gap: 15px;
	}
	
	.step-icon {
		width: 44px;
		height: 44px;
		background: rgba(214, 163, 25, 0.08);
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 1.15rem;
		color: var(--green, #d6a319);
		transition: transform 0.4s ease, background 0.4s ease;
		flex-shrink: 0;
	}
	
	.step-title {
		font-family: var(--Geologica), sans-serif;
		font-size: 1.1rem;
		font-weight: 700;
		color: #ffffff;
		margin: 0;
	}
	
	.step-desc {
		font-family: var(--Red), sans-serif;
		font-size: 0.88rem;
		font-weight: 300;
		line-height: 1.6;
		color: rgba(255, 255, 255, 0.7);
		margin: 0;
	}

	/* Media Queries */
	@media screen and (max-width: 1024px) {
		.method-split-container {
			grid-template-columns: 1fr;
			gap: 2.5rem;
		}

		.method-image-side {
			order: 2; /* Place image below the text block on mobile */
		}

		.method-content-side {
			align-items: center;
			text-align: center;
		}

		.method-content-side h3 {
			text-align: center;
		}
	}

	@media screen and (max-width: 768px) {
		.method-section {
			padding: 2rem 1rem 4rem 1rem;
		}
		.wrapper__text2 {
			padding: 1.5rem;
			gap: 1.5rem;
		}
	}
</style>
