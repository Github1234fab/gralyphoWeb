<script>
	import ButtonDifference from '../Components/ButtonDifference.svelte';
	import ButtonCta from '../Components/ButtonCTA.svelte';
	import video from '../Assets/png-gralypho/videocode.mp4';
</script>

<section class="difference">
	<h1><span>Gralypho</span></h1>
	<h2>Le <span>Web</span>, <br /> c'est notre métier.</h2>

	<!-- <div class="img"></div> -->
	<video  class="video" autoplay muted loop>
		<source src={video} type="video/mp4" />
		<track
			kind="captions"
			src="path/to/captions.vtt"
			srclang="en"
			label="English subtitles"
			default
		/>
		Votre navigateur ne supporte pas l'élément vidéo.
	</video>

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
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		min-height: auto;
		font-size: 16px;
		background-color: var(--whiteGrey);
		z-index: 0;
		position: relative;
		padding: 20px;
	}
	.video {
		width: 100%;
		height: 100%;
		margin-top: 30px;
	}

	.difference h1 {
		font-family: Geologica;
		text-transform: uppercase;
		font-size: var(--s);
		color: var(--secondary);
		font-weight: 600;
		letter-spacing: -0.04em;
		margin-top: 50px;
		margin-bottom: 20px;
		text-align: center;
	}
	.difference h2 {
		font-family: var(--Geologica);
		font-size: var(--l);
		color: var(--primary);
		font-weight: 900;
		margin-bottom: 10px;
		letter-spacing: -1px;
		text-align: center;
		line-height: 40px;
		margin-top: 30px;
	}
	.difference h2 span {
		color: var(--green);
		font-weight: bolder;
		font-size: 3rem;
		font-family: var(--Architects);
		rotate: -5deg;
	}

	.wrapper-difference__title {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		width: 100%;
		text-align: center;
	}
	.wrapper-text-difference {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: 40px;
	}
	.paragraph {
		font-family: var(--Poppins);
		font-size: var(--lm);
		color: var(--primary);
		font-weight: 700;
		letter-spacing: -0.02em;
		text-align: center;
		align-self: center;
		margin-top: 40px;
	}
	.answer {
		font-family: 'Dosis';
		font-size: 1.6rem;
		color: var(--primary);
		font-weight: 200;
		letter-spacing: -0.02em;
		text-align: center;
		align-self: center;
		margin-top: 40px;
	}

	.difference p {
		font-family: var(--Poppins);
		column-count: 1;
		font-size: var(--m);
		color: var(--primary);
		font-weight: 300;
		line-height: 1.5em;
		width: 100%;
		padding: 0px;
		text-align: left;
	}
	.difference p span {
		font-family: epilogue;
		color: var(--primary);
		column-count: 1;
		font-size: var(--m);
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
