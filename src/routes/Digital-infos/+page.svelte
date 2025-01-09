<script>
	import Header from '../../sections/Header.svelte';
	import digital from '../../Assets/png-gralypho/23.png';
	import Mouse from '../../Components/Mouse.svelte';
	import Button from '../../Components/ButtonCTA.svelte';
</script>

<Mouse />
<Header />

<section class="digital-infos">
	<div class="img"></div>
	<div class="wrapper-digital-infos">
		<h1>Profitez de votre outil Digital, en découvrant tout ce qu'il peut vous apporter !</h1>
		<p>
			Un site internet c'est en fait un outil très puissant. Un outil que nous allons paramétrer,
			que nous allons élaborer pour qu'il puisse faire ce que vous souhaitez: <br /> Convertir de
			nouveaux clients, vendre des produits, proposez un service, analyser des marchés, des
			tendances, gérer vos stocks, vos clients, etc.. <br /><br />Votre site internet ou votre
			application sera en ligne 24/7. Autrement dit, ce sera une hyper présence dont il faut
			absolument profiter. C'est du temps économisé . Du temps pendant lequel votre site travaille
			pour vous, vend pour vous, attire de nouveaux clients pour vous, prend des rendez-vous pour
			vous, présente vos produits pour vous, vos services., etc. <br /><br />
			Déterminer ce que fera votre outil digital est primordial, essentiel. Tout dépend de la stratégie
			que nous définirons ensemble, pour que votre outil vous permette d'atteindre
			<span>votre objectif.</span>
		</p>
		<div class="wrapper-button">
			<Button />
		</div>
	</div>
</section>

<style>
	.digital-infos {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 0px;
		height: 1200px;
	}

	.img {
		flex: 1;
		height: 100%;
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		background-image: url('../../Assets/png-gralypho/23.png');
		background-size: cover;
		background-position: center;
		background-repeat: no-repeat;
	}
	.wrapper-digital-infos {
		flex: 1;
		height: 100%;
		width: 100%;
		flex-direction: column;
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 50px;
		background: var(--gradient);
		opacity: 1;
		padding: 30px;
	}
	.wrapper-digital-infos h1 {
		font-family: var(--Geologica);
		font-size: var(--l);
		color: var(--whiteGrey);
		font-weight: 900;
		margin-bottom: 10px;
		letter-spacing: -1px;
		text-align: center;
		line-height: 50px;
		width: 80%;
	}

	.wrapper-digital-infos p {
		font-family: var(--Poppins);
		font-size: var(--m);
		color: var(--whiteGrey);
		font-weight: 400;
		letter-spacing: -0.02em;
		text-align: justify;
		hyphens: auto;
		align-self: center;
		
	}
	.wrapper-digital-infos p span {
		font-weight: 700;
	}
	.wrapper-button {
		display: flex;
		justify-content: center;
		align-items: center;
		margin-top: 30px;
		margin-bottom: 50px;
	}

	@media screen and (max-width: 768px) {
		.digital-infos {
			height: 1900px;
			flex-direction: column;
		}
	}
</style>
