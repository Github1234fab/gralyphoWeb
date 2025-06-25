<script>
</script>

<section class="faqLink">
	<h2 class="title">Vous vous posez des questions?</h2>
	<p class="subtitle">
		Consultez toutes nos réponses à propos de la création de site internet, de la création d'applications,<br /> des technologies utilisées, des tarifs, du référencement, etc.
	</p>
	<a href="/FAQ">FAQ</a>
</section>

<style>
	.faqLink {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 40px;
		height: auto;
		width: 80%;
		margin: 50px auto;
		background-color: var(--whiteGrey);
		border-radius: 20px;
		z-index: 0;
	}
	.title {
		text-align: center;
		font-family: var(--Geologica);
		font-weight: 400;
		font-size: 2rem;
		color: var(--primary);
		margin-top: 0px;
		letter-spacing: -2px;
		padding: 10px;
		line-height: 50px;
		margin-top: 20px;
	}
	.subtitle {
		text-align: center;
		font-family: var(--Geologica);
		font-weight: 400;
		font-size: 1rem;
		color: var(--primary);
		margin-top: 0px;
		letter-spacing: -1px;
		padding: 10px;
		line-height: 40px;
		margin-bottom: 50px;
	}
	.faqLink a {
		font-family: 'Red Hat Display';
		font-size: var(--m);
		font-weight: 700;
		color: var(--whiteGrey);
		background-color: var(--cta);
		padding: 20px 30px;
		text-decoration: none;
		box-shadow: 0px 20px 10px 0px rgba(0, 0, 0, 0.269);
		margin-bottom: 100px;
		border-radius: 5px;
		margin-top: 0px;
		z-index: 3;
	}
	.faqLink a:hover {
		background-color: var(--green);
		color: var(--whiteGrey);
		box-shadow: 0px 20px 10px 0px rgba(0, 0, 0, 0.269);
		transition: all 0.3s ease-in-out;
		transform: scale(1.05);
	}


	@media screen and (max-width: 768px) {
		.subtitle {
			font-size: 1rem;
			line-height: 30px;
		}
		.faqLink {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			gap: 20px;
			height: auto;
			width: 95%;
		}
	}
</style>
