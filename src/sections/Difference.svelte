<script>
	import ButtonDifference from '../Components/ButtonDifference.svelte';
	import imageDiff from '../Assets/png-gralypho/30.png';
</script>

<section class="difference">
	<h1><span>Gralypho</span></h1>
	<h2>Notre <span>Métier</span></h2>
	<h3 class="title-h3">Passionné par le Web et la programmation, nous souhaitons fournir à votre entreprise un service digital de qualité, qui permettra à votre business de décoller sur le Net !<br /></h3>

	<img src={imageDiff} alt="" class="img" />
	<!-- <div class="wrapper">
		<ButtonDifference />
	</div> -->

	<div class="wrapper-text-difference">
	<div class="wrapper-difference__title">
		<h3 class="paragraph">Qui sommes nous ?</h3>
		<p>
			<span>Gralypho</span> est une agence digitale, spécialisé dans la
			<span>conception de site Web</span>
			et dans la
			<span>création d'application </span>sur mesure. Notre expertise dans le domaine du Web est
			profonde et solide.
		</p>
		</div>
		<br />

		<h3 class="paragraph">Quelles sont nos compétences ?</h3>

		<p>
			Nous sommes formés aux métiers du Web. C'est à dire que nos <span>connaissances </span> en
			matières de design UX/UI, de référencement, de normes W3C, d'organisation de contenu textuel
			et visuel sont optimales. Cela signifie aussi que nous sommes
			<span>formés au code informatique</span>. Nous sommes donc en capacité de construire un site
			internet entièrement fait-main et sur mesure et de savoir exactement ce qu'un site Web
			contient, sous le capot!
		</p>
		<br />
		<h3 class="paragraph">Pourquoi nous faire confiance ?</h3>
		<p>
			Faire confiance à <span>l'agence Gralypho</span>, c'est faire le choix de la qualité, de la
			sécurité, de la performance, de la sérénité et de la pérennité. <br />Nous somme ici pour vous
			accompagner dans la <span>réalisation </span>de votre projet, de sa conception à sa mise en
			ligne.
			<br />Nous sommes là pour vous conseiller, pour vous guider et pour vous former. <br />Nous
			sommes là pour vous aider à atteindre vos
			<span>objectifs</span> et à les dépasser en vous proposant et en concevant des fonctionnalités,
			des outils, des solutions qui vous permettront de vous démarquer de la concurrence, à coup sûr.
		</p>
	</div>
</section>

<style>
	.img {
		width: auto;
		max-height: 300px;
		border-radius: 20px;
		margin-top: 50px;
		/* box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.283); */
	}
	.difference {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		height: auto;
		font-size: 16px;
		background-color: white;
		padding: 40px;
		margin: 0px auto;
		width: calc(100vw - 100px);
	}
	.wrapper-difference__title {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		width: 100%;
	}
	

	.difference h1 {
		font-family: Heebo;
		text-transform: uppercase;
		font-size: var(--m);
		color: var(--bleuAcier);
		font-weight: 600;
		letter-spacing: -0.04em;
		margin-top: 0px;
		margin-bottom: 20px;
		text-align: center;
	}
	.difference h2 {
		font-family: epilogue;
		font-size: var(--xl);
		color: var(--primary);
		font-weight: 700;
		margin-bottom: 10px;
		letter-spacing: -0.03em;
		text-align: left;
		line-height: 30px;
	
	}
	.title-h3 {
		font-family: epilogue;
		font-size: var(--m);
		color: var(--primary);
		font-weight: 400;
		margin-bottom: 0px;
		letter-spacing: -0.02em;
		text-align: center;
		line-height: 25px;
		width: 40%;
	
	}
	.difference h2 span {
		color: transparent;
		-webkit-background-image: linear-gradient(to right, navy, var(--blue2) 70%);
		background-image: linear-gradient(to right, navy, var(--blue2) 70%);
		-webkit-background-clip: text;
		background-clip: text;
		font-weight: 900;
	}
	/* .wrapper {
		display: flex;
		width: 100%;
		align-items: center;
		justify-content: center;
		margin-top: 20px;
	} */
	.wrapper-text-difference {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: left;
		justify-content: left;
		margin-top: 50px;
		padding: 30px;
	}
	.paragraph {
		font-family: epilogue;
		font-size: var(--lm);
		color: var(--primary);
		font-weight: 700;
		letter-spacing: -0.02em;
		text-align: left;
		align-self: flex-start;
	}
	.difference p {
		font-family: poppins;
		color: grey;
		column-count: 1;
		font-size: var--(m);
		color: #2d2d2d;
		font-weight: 300;
		line-height: 1.5em;
		width: 100%;
		padding: 0px;
	}
	.difference p span {
		font-family: epilogue;
		color: grey;
		font-size: var--(m);
		color: orange;
		font-weight: 700;
		line-height: 1.5em;
		width: 100%;
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

	@media screen and (max-width: 768px) {
		.difference {
			width: calc(100vw - 10px);
		}
		.difference p {
			column-count: 1;
		}
		.img {
			width: auto;
			max-height: 200px;
			border-radius: 20px;
			margin-top: 50px;
			box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.283);
		}
		.title-h3 {
		font-family: epilogue;
		font-size: var(--m);
		color: var(--primary);
		font-weight: 400;
		margin-bottom: 0px;
		letter-spacing: -0.02em;
		text-align: center;
		line-height: 25px;
		width: 70%;
	
	}
	}
</style>
