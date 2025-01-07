<script>
	import ButtonDifference from '../Components/ButtonDifference.svelte';
	import ButtonCta from '../Components/ButtonCTA.svelte';
	import video from '../Assets/png-gralypho/videocodecomp.mp4';
	import ButtonCTA from '../Components/ButtonCTA.svelte';
</script>

<section class="difference">
	<h1>Le <span>Web</span>, <br /> c'est notre métier.</h1>

	<!-- <div class="img"></div> -->
	<video class="video" autoplay muted loop>
		<source src={video} type="video/mp4" />
		Votre navigateur ne supporte pas l'élément vidéo.
	</video>

	<div class="wrapper-text-difference">
		<div class="wrapper-difference__title">
			<h3 class="paragraph">Qui sommes nous ?</h3>
				<br />
			<p>
				Nous sommes des passionnés du Web , formés au langage informatique et au développement
				Web.Nous avons créé l'agence Gralypho en 2019, qui est une agence digitale, spécialisée dans
				la
				<span>conception de site Web</span>
				et dans la
				<span>création d'application </span>sur mesure. Notre expertise dans le domaine du Web est
				profonde et solide. Nous sommes implantés dans les monts du Lyonnais, à Vaugneray et Thurins
				et connecté au monde entier !
			</p>
		</div>
		<br />

		<h3 class="paragraph">Quelles sont nos compétences ?</h3>
		<br />
		<p>
			Nos compétences sont diverses et variées. Seo, Sea, Ux/UI, code côté serveur, code côté
			client, création de contenu, design, community management ...Nous sommes formés aux métiers du
			Web et au code informatique. C'est à dire que nous disposons des connaissances nécessaires en
			<span
				>design UX/UI, en référencement SEAO et SEA, en norme W3C, en création de contenu textuel et
				visuel.
			</span>Cela signifie aussi que nous sommes en capacité de gérer le côté serveur et le côté
			client. En d'autres terme nous savons tout ce qui se passe sous le capot d'une application ou
			d'un site internet !
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
	<div class="wrapper__cta">
		<ButtonCTA />
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
		background-image: radial-gradient(circle at center center, transparent, rgb(255, 255, 255)),
			linear-gradient(
				309deg,
				rgba(90, 90, 90, 0.05) 0%,
				rgba(90, 90, 90, 0.05) 50%,
				rgba(206, 206, 206, 0.05) 50%,
				rgba(206, 206, 206, 0.05) 100%
			),
			linear-gradient(
				39deg,
				rgba(13, 13, 13, 0.05) 0%,
				rgba(13, 13, 13, 0.05) 50%,
				rgba(189, 189, 189, 0.05) 50%,
				rgba(189, 189, 189, 0.05) 100%
			),
			linear-gradient(
				144deg,
				rgba(249, 249, 249, 0.05) 0%,
				rgba(249, 249, 249, 0.05) 50%,
				rgba(111, 111, 111, 0.05) 50%,
				rgba(111, 111, 111, 0.05) 100%
			),
			linear-gradient(
				166deg,
				rgba(231, 231, 231, 0.05) 0%,
				rgba(231, 231, 231, 0.05) 50%,
				rgba(220, 220, 220, 0.05) 50%,
				rgba(220, 220, 220, 0.05) 100%
			),
			linear-gradient(
				212deg,
				rgba(80, 80, 80, 0.05) 0%,
				rgba(80, 80, 80, 0.05) 50%,
				rgba(243, 243, 243, 0.05) 50%,
				rgba(243, 243, 243, 0.05) 100%
			),
			radial-gradient(circle at center center, hsl(107, 19%, 100%), hsl(107, 19%, 100%));
	}
	.video {
		width: 100%;
		height: 100%;
		margin-top: 30px;
	}

	.difference h1 {
		font-family: var(--Geologica);
		font-size: var(--l);
		color: var(--primary);
		font-weight: 900;
		margin-bottom: 10px;
		letter-spacing: -1px;
		text-align: center;
		line-height: 50px;
		margin-top: 20px;
	}
	.difference h1 span {
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

	.difference p {
		font-family: var(--Poppins);
		column-count: 1;
		font-size: var(--m);
		color: var(--primary);
		font-weight: 300;
		line-height: 1.5em;
		width: 100%;
		padding: 0px;
		text-align: center;
		text-align: justify;
		hyphens: auto;
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
		margin-bottom: 100px;
	}
	.wrapper__cta {
		margin-bottom: 50px;
	}
	.wrapper__cta:hover {
		animation: bounce 0.5s ease-in-out;
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
		.video {
			width: 150%;
			margin-top: 30px;
		}
		.difference p {
			font-family: var(--Poppins);
			font-size: var(--m);
			color: var(--primary);
			font-weight: 300;
			line-height: 1.5em;
			width: 110%;
			padding: 0px;
			text-align: center;
			text-align: justify;
			hyphens: auto;
		}
	}
</style>
