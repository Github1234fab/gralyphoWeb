<script>
	import ButtonDifference from '../Components/ButtonDifference.svelte';
</script>

<section class="difference">
	<h1><span>Gralypho</span></h1>
	<h2>Le Web, c'est Notre Métier.</h2>
	<!-- <h3 class="title-h3">

		<span>Passionné par le Web</span> <br> et la programmation informatique, nous créeons des sites webs et des
		applications sur mesure. <br> Notre expertise dans le domaine du Web est sans faille. <br /><br /><span>Installé dans l'Ouest Lyonnais</span> <br> sur les communes de
		Vaugneray et Thurins, l'agence Gralypho fournit ses services localement et dans le monde entier.  
	
		<br />

		<br /> <span>Nous sommes experts </span> <br> en stratgie SEO, en design UX/UI, en création et rédaction de contenu. <br> Nous sommes formés au code informatique et nous sommes en capacité de construire des outils digitaux en sachant  <br>toujours ce qui se passe sous le capot! Ce qui vous garantit une sécurité optimale et un accompagnement serein.<br> 
		<br />
	</h3> -->

	<div class="img"></div>

	<div class="wrapper-text-difference">
		<div class="wrapper-difference__title">
			<h3 class="paragraph">Qui sommes nous ?</h3>
			<h3 class="answer">Des passionnés, formés au code informatique et au développement Web.</h3>
			<br />
			<p>
				Gralypho est une agence digitale, spécialisé dans la
				<span>conception de site Web</span>
				et dans la
				<span>création d'application </span>sur mesure. Notre expertise dans le domaine du Web est
				profonde et solide. Nous sommes implantés dans les monts du Lyonnais, à Vaugneray et Thurins
				et connecté au monde entier !
			</p>
		</div>
		<br />

		<h3 class="paragraph">Quelles sont nos compétences ?</h3>
		<h3 class="answer">
			Seo, Sea, Ux/UI, code côté serveur, code côté client, création de contenu, design, community
			management ...
		</h3>
		<br />

		<p>
			Nous sommes formés aux métiers du Web et au code informatique. C'est à dire que nous disposons
			des connaissances nécessaires en
			<span
				>design UX/UI, en référencement SEAO et SEA, en norme W3C, en création de contenu textuel et
				visuel.
			</span>Cela signifie aussi que nous sommes en capacité de gérer le côté serveur et le côté
			client. En d'autres terme nous savons tout ce qui se passe sous el capot d'une application ou
			d'un site internet !
		</p>
		<br />
		<h3 class="paragraph">Pourquoi nous faire confiance ?</h3>
		<h3 class="answer">Parce que nous savons ce qui se passe sous le capot !</h3>
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
		background-color: rgb(245, 245, 245);
		/* background-image: url('../Assets/bgfour.png'); */
	}
	.img {
		background-image: url('../Assets/png-gralypho/photoDev.jpg');
		background-size: cover;
		background-position: center;
		height: 400px;
		width: 100%;
		grid-column: 2/12;
		grid-row: 4;
		margin-top: 30px;
		border-radius: 15px;
	}

	.difference h1 {
		font-family: Heebo;
		text-transform: uppercase;
		font-size: var(--s);
		color: rgb(26, 25, 25);
		font-weight: 600;
		letter-spacing: -0.04em;
		margin-top: 50px;
		margin-bottom: 20px;
		text-align: center;
		grid-column: 2/12;
		grid-row: 1;
	}
	.difference h2 {
		font-family: 'radio canada big';
		font-size: var(--l);
		color: var(--colorH);
		font-weight: 500;
		margin-bottom: 10px;
		letter-spacing: -0.05em;
		text-align: center;
		line-height: 25px;
		margin-top: 30px;
		grid-column: 2/12;
		grid-row: 2;
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
		color: var(--colorH);
		font-weight: 700;
		letter-spacing: -0.02em;
		text-align: left;
		align-self: flex-start;
		margin-top: 40px;
	}
	.answer {
		font-family: 'Dosis';
		font-size: 1.6rem;
		color: rgb(73, 71, 71);
		font-weight: 400;
		letter-spacing: -0.02em;
		text-align: left;
		align-self: flex-start;
		margin-top: 40px;
	}

	.difference p {
		font-family: epilogue;
		color: grey;
		column-count: 1;
		font-size: var(--m);
		color: grey;
		font-weight: 300;
		line-height: 1.5em;
		width: 100%;
		padding: 0px;
		text-align: left;
	}
	.difference p span {
		font-family: epilogue;
		color: grey;
		column-count: 1;
		font-size: var(--m);
		color: grey;
		font-weight: 300;
		line-height: 1.5em;
		width: 100%;
		padding: 0px;
		text-align: left;
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

</style>
