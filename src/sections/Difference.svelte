<script>
	import ButtonDifference from '../Components/ButtonDifference.svelte';
</script>

<section class="difference">
	<h1><span>Gralypho</span></h1>
	<h2>Le Web, c'est Notre Métier.</h2>
	<h3 class="title-h3">
		Passionné par le Web et la programmation informatique, nous créeons des sites webs et des
		applications webs pour fournir à votre entreprise <span>un service digital de qualité</span>,
		qui permettra à
		<span>votre business</span>
		de décoller sur le Net ! <br /><br />Installé dans l'Ouest Lyonnais, sur les communes de
		Vaugneray et Thurins, l'agence Gralypho est experte dans le domaine du Web. Notre expertise nous
		permet de concevoir des sites et des applications qui vous ressemblent menant une étude précise
		de votre identité et de vos besoins. Nous aimons créer des
		<span>designs originaux et sur mesure </span> qui correspondront le plus à votre activité!
		<br />

		<br />Nous sommes <span>experts en SEO</span> et le référencement étant le nerf de la guerre, il
		vaut mieux s'adresser à des pros! Un site internet c'est un outil, présent sur le Web 24/7.
		Alors plutôt que créer de simples sites vitrine via des templates existants, nous nous creusons
		la tête pour vous livrer <span> des sites webs et des applications "intelligentes"</span>, qui
		vous rapporterons à coup sûr, de nombreux clients.
		<br />
	</h3>

	<div class="img"></div>

	<div class="wrapper-text-difference">
		<div class="wrapper-difference__title">
			<h3 class="paragraph">Qui sommes nous ?</h3>
			<br />
			<p>
				<span>Gralypho</span> est une agence digitale, spécialisé dans la
				<span>conception de site Web</span>
				et dans la
				<span>création d'application </span>sur mesure. Notre expertise dans le domaine du Web est
				profonde et solide. Nous sommes implantés dans les monts du Lyonnais, à Vaugneray et
				Thurins.
			</p>
		</div>
		<br />

		<h3 class="paragraph">Quelles sont nos compétences ?</h3>
		<br />

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
		<br />
		<p class="marginBottom">
			Faire confiance à <span>l'agence Gralypho</span>, c'est faire le choix de la qualité, de la
			sécurité, de la performance, de la sérénité et de la pérennité. <br />Nous sommes ici pour
			vous accompagner dans la <span>réalisation </span>de votre projet, de sa conception à sa mise
			en ligne.
			<br />Nous sommes là pour vous conseiller, pour vous guider et pour vous former. <br />Nous
			sommes là pour vous aider à atteindre vos
			<span>objectifs</span> et à les dépasser en vous proposant et en concevant des fonctionnalités,
			des outils, des solutions qui vous permettront de vous démarquer de la concurrence, à coup sûr.
		</p>
	</div>
</section>

<style>

	.difference {
		display: grid;
		grid-template-columns: repeat(12, 1fr);
		grid-template-rows: auto;
		height: auto;
		font-size: 16px;
		background-color: white;
		margin: 0px auto;
		width: calc(100vw - 100px);
	}
		.img {
		background-image: url('../Assets/png-gralypho/photo-dev2.jpg');
		background-size: cover;
		background-position: center;
		height: 400px;
		width: 100%;
		grid-column: 2/12;
		grid-row: 4;
		margin-top: 30px;
	}


	.difference h1 {
		font-family: Heebo;
		text-transform: uppercase;
		font-size: var(--m);
		color: var(--bleuAcier);
		font-weight: 600;
		letter-spacing: -0.04em;
		margin-top: 50px;
		margin-bottom: 20px;
		text-align: left;
		grid-column: 2/12;
		grid-row: 1;
	}
	.difference h2 {
		font-family: 'radio canada big';
		font-size: var(--xl);
		color: var(--primary);
		font-weight: 500;
		margin-bottom: 10px;
		letter-spacing: -0.05em;
		text-align: left;
		line-height: 55px;
		margin-top: 30px;
		grid-column: 2/12;
		grid-row: 2;
	}
	.title-h3 {
		font-family: poppins;
		color: grey;
		column-count: 1;
		font-size: 1.1rem;
		color: #2d2d2d;
		font-weight: 300;
		line-height: 1.5em;
		width: 100%;
		padding: 0px;
		text-align: left;
		grid-column: 2/12;
		grid-row: 3;
		margin-top: 30px;
	}
	.title-h3 span {
		font-weight: 700;
		color: var(--CTA-jaune);
	}


	.wrapper-difference__title {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		width: 100%;
		text-align: left;
	}
	.wrapper-text-difference {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: left;
		justify-content: left;
		margin-top: 50px;
		grid-column: 2/12;
		grid-row: 5;
	}
	.paragraph {
		font-family: epilogue;
		font-size: var(--lm);
		color: var(--primary);
		font-weight: 700;
		letter-spacing: -0.02em;
		text-align: left;
		align-self: flex-start;
		margin-top: 40px;
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
		text-align: left;
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
	.marginBottom {
		margin-bottom: 50px;
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
	
		.title-h3 {
			font-family: epilogue;
			font-size: var(--m);
			color: var(--primary);
			font-weight: 300;
			text-align: left;
			line-height: 25px;
			width: 90%;
		}
	}
</style>
