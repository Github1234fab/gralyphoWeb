<script>
	import Header from '../../sections/Header.svelte';
	import Mouse from '../../Components/Mouse.svelte';
	import serviceWeb from '../../Assets/png-gralypho/mediaWeb.png';
</script>


<Mouse />
<Header />
<section class="medias-section">
	<div class="container">
		<img src={serviceWeb} alt="" class="media-img">
	<div class="wrapper-medias">
		<h1>Rédaction</h1>
		<h2>Écrire pour les médias sociaux</h2>
		<p>
			Écrire pour les médias sociaux n'est pas une mince affaire. Nous savons tous que pour se faire
			connaître il faut "poster" sur les réseaux sociaux. Mais "poster" quoi?! Que dire, que faire,
			quoi écrire, comment et sur quel sujet? <br />
			Ça c'est notre métier et nous sommes là pour vous aider. <br /><br />Nous rédigeons pour vous des contenus
			adaptés à votre cible, à votre secteur d'activité, à votre image de marque. <br />Nous savons comment
			écrire pour les réseaux sociaux, comment les utiliser, comment les exploiter. <br /> Nous savons comment
			les faire vivre et comment les faire grandir. <br /> Nous savons comment les faire parler de vous. <br />Nous
			savons comment les faire vous aimer. <br />Nous savons comment les faire vous suivre. <br /> Nous savons comment
			les faire vous acheter. Nous savons comment les faire vous recommander!!
		</p>
	</div>
	<div class="wrapper-contenu">
		<h1>Poster des images et des vidéos</h1>
                <p>Comment réaliser des vidéos, quels contenus poster, quelle qualité d'image, comment les filmer, quel contenu, pour quelle raison, etc? Et il en va de même des images. <br /><br />Nous créons des contenus médias sur mesure et nous les postons sur les réseaux sociaux selon une fréquence que nous déterminons ensemble, selon vos objectifs. <br />C'est un travail en collaboration qui vous permettra de rayonner à coup sûr sur les réseaux sociaux! </p>
	</div>
	<div class="wrapper-campagnes">
		<h1>Campagne publicitaires</h1>
		<p>
			Vous avez sûrement déjà entendu parler de Google AdWords vous permettant de lancer des campagnes payantes pour atteindre ovtre cible en première page des navigateurs web.  <br />Il existe d'autres moyens automatisés pour atteindre votre but. Que ce soit de faire parler de vous, de lancer un évènement, d'anticiper sur une période ou un évènement. Les campagnes publicitaires vous permettent à la fosi d'être visible et de toucher votre cible. Nous sommes là pour vous aider à déterminer la stratégie à adopter, le budget à allouer, les mots clés à utiliser, les médias à cibler, les périodes à privilégier, etc. <br /><br />Nous sommes là pour vous aider à atteindre vos objectifs. 
		</p>
	</div>
	<div class="wrapper-coaching">
		<h1>Formation et coaching</h1>
		
		<p>
			Si vous souhaitez devenir autonome sur les réseaux sociaux, nous vous proposons des formations et du coaching. <br />Nous vous apprenons à utiliser les réseaux sociaux, à les exploiter, à les faire vivre, à les faire grandir.  <br />La formation vous rendra autonome et le coahcing vous apportera l'accompagnement nécessaire pour atteindre votre cible.
		</p>
	</div>
	</div>
</section>

<style>
	.medias-section {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 0px;
		height: auto;
		
	}
	.container {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		margin-bottom: 100px;
		margin-top: 30px;
	}
	.container > * {
		flex-basis: 50%;
	}
	.media-img {
		width: 30%;
		height: auto;
		border-radius: 3%;
		margin-top: 20px;
		margin-bottom: 50px;
	
	}
	
	.wrapper-medias, .wrapper-contenu, .wrapper-campagnes, .wrapper-coaching
	 {
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: flex-start;
		gap: 20px;
		padding: 0px;
		color: var(--textHero);
		margin-top: 30px;
		height: auto;
		width: 60%;
	}

	.wrapper-medias h1, .wrapper-contenu h1, .wrapper-campagnes h1, .wrapper-coaching  h1 {
		font-family: Epilogue;
		font-size: var(--l);
		font-weight: 700;
		text-align: center;
		color: var(--jauneB);
		margin-top: 15px;
		text-transform: uppercase;
	}
	
	@media screen and (max-width: 768px) {
		.wrapper-medias , .wrapper-contenu , .wrapper-campagnes , .wrapper-coaching  
	 {
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: flex-start;
		gap: 20px;
		padding: 0px;
		color: var(--textHero);
		margin-top: 30px;
		height: auto;
		width: 90%;
	}

	.media-img {
		width: 90%;
		height: auto;
		border-radius: 0;
		margin-top: 30px;
	
	}
}
</style>










<!-- <section class="sites-infos-section">
	<div class="container">
		<img src={serviceWeb} alt="" class="service-img" />
		<div class="wrapper-design">
			<h1>Design de site Web UX/UI</h1>
			<h2>Les concepts d'UX et d'UI</h2>
			<h3>L'UX</h3>
			<p>
				Nous créons votre site internet en utlisant les techniques d'UX et d'UI.  <br>L'UX, c'est
				l'expérience utlisateur. Autrement dit, l'UX englobe la navigation, le chemin que va
				effectuer l'utilisateur du site et l'émotion qu'il ressentira à chaque étape. Ce que l'on
				souhaite c'est qu'il accomplisse une action, comme réserver ou acheter ou laisser un
				commentaire (...).  <br>Mais l'utilisateur doit accéder à de l'information également. Et le
				principe de l'UX c'est justement d'identifier l'utilisateur type, ce qu'il vient chercher et
				comment il le trouve. <br>De là ce dégagera une statégie de conception pour que le site
				remplisse son objectif.
			</p>
			<h3>L'UI</h3>
			<p>
				L'UI, c'est le design à proprement parler. <br>Nous construisons pour la création de votre site
				internet un UI KIT. C'est à dire un kit contenant le design des boutons, de leur couleur, de
				leur forme et la couleur de leur texte. <br>Et il en va ainsi pour tous les élements de votre
				site. Les titres, les sections, les liens, les cards, les sliders, les collapses (...). <br>
				C'est ce que nous appelons des composants.
			</p>
		</div>
		<div class="wrapper-redaction-web">
			<h1>Rédaction des contenus textuels</h1>
			<h2>Écrire pour le Web, c'est un métier!</h2>
			<p>
				Votre site internet contiendra du texte. C'est une obligation et une nécessité. <br>Les élements
				visuels ne peuvent être les seuls présents dans un site Web. Le texte accompagne l'utilisateur
				dans sa navigation. <br>Mais en réalité ce ne sont pas que de simples mots décrivant quelque
				chose. Ces mots vont être un élément clefs pour le bon référencement du site, car le robot
				qui va scanner votre site va analyser ses mots. <br>Derrière les syllabes, les lettres, les mots
				se cache une véritable architecture digitale, une stratégie cachée, mais essentielle,
				névralgique.
			</p>
		</div>
		<div class="wrapper-seo">
			<h1>Référencement SEO et SEA</h1>
			<h2>Naturel ou payant ?</h2>
			<p>
				C'est ce que vous attendez et c'est ce que vous méritez, la première page des navigateurs
				Web! <br> Mais comment y arriver? Ça c'est notre boulot! Nous sommes expert en référencement Web.
				<br>
				Nous connaissons parfaitement les techniques de SEO. Le SEO (Search Engine Optimization)
				c'est le référencement naturel. Le SEA, c'est le référencement payant, notamment à travers
				des campagnes de publicité ciblées sur des médias distincts. <br>Tout est affaire de stratégie,
				mais généralement , le SEO est l'objectif premier, il est déterminant dans la vie de votre
				futur site internet.
			</p>
		</div>
		<div class="wrapper-conception">
			<h1>Conception et stratégie</h1>
			<h2>Template ou sur mesure?</h2>
			<p>
				Concevoir un site internet c'est avant tout déterminer une stratégie et déterminer en
				premier lieu pourquoi? <br>	Quel est le but? Et de là découlera l'identité du site, son design,
				son contenu, son Ux, son UI, etc. Mais doit-on convevoir un site sur mesure, le coder
				entièrement ou doit-on utiliser des outils de conceptions et de réalisation offrant
				notamment l'accès au CMS. <br>C'est une stratégie à déterminer et peser le pour ou le contre de
				chaque technos à utliser, son délai de mise en ligne, de conception, son coût et anticiper
				sur le future de sa vie, sa maintenance.
			</p>
		</div>
	</div>
</section> -->


