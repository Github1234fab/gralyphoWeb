<script>
	import Header from '../../sections/Header.svelte';
	import Mouse from '../../Components/Mouse.svelte';
	import serviceWeb from '../../Assets/png-gralypho/conception.png';
	import SectionF from '../../sections/FSection.svelte';
	import Button from '../../Components/ButtonCTA.svelte';
</script>

<Mouse />
<Header />

<section class="sites-infos-section">
	<div class="container">
		<img
			src={serviceWeb}
			alt="illustration d'un ordinateur sous forme d'un chantier en constructino ou rénovation"
			class="service-img"
		/>
		<div class="wrapper-design" id="#wrapper-design">
			<h1>Design de site Web UX/UI</h1>
			<h2>Les concepts d'UX et d'UI</h2>
			<h3>L'UX</h3>
			<p>
				Nous créons votre site internet en utlisant les techniques d'UX et d'UI. <br />L'UX, c'est
				l'expérience utlisateur. Autrement dit, l'UX englobe la navigation, le chemin que va
				effectuer l'utilisateur du site et l'émotion qu'il ressentira à chaque étape. Ce que l'on
				souhaite c'est qu'il accomplisse une action, comme réserver ou acheter ou laisser un
				commentaire (...). <br />Mais l'utilisateur doit accéder à de l'information également. Et le
				principe de l'UX c'est justement d'identifier l'utilisateur type, ce qu'il vient chercher et
				comment il le trouve. <br />De là ce dégagera une statégie de conception pour que le site
				remplisse son objectif.
			</p>
			<h3>L'UI</h3>
			<p>
				L'UI, c'est le design à proprement parler. <br />Nous construisons pour la création de votre
				site internet un UI KIT. C'est à dire un kit contenant le design des boutons, de leur
				couleur, de leur forme et la couleur de leur texte. <br />Et il en va ainsi pour tous les
				élements de votre site. Les titres, les sections, les liens, les cards, les sliders, les
				collapses (...). <br />
				C'est ce que nous appelons des composants.
			</p>
		</div>
		<div class="wrapper-redaction-web" id="#wrapper-redaction-web">
			<h1>Rédaction des contenus textuels</h1>
			<h2>Écrire pour le Web, c'est un métier!</h2>
			<p>
				Votre site internet contiendra du texte. C'est une obligation et une nécessité. <br />Les
				élements visuels ne peuvent être les seuls présents dans un site Web. Le texte accompagne
				l'utilisateur dans sa navigation. <br />Mais en réalité ce ne sont pas que de simples mots
				décrivant quelque chose. Ces mots vont être un élément clefs pour le bon référencement du
				site, car le robot qui va scanner votre site va analyser ses mots. <br />Derrière les
				syllabes, les lettres, les mots se cache une véritable architecture digitale, une stratégie
				cachée, mais essentielle, névralgique.
			</p>
		</div>
		<div class="wrapper-seo">
			<h1>Référencement SEO et SEA</h1>
			<h2>Naturel ou payant ?</h2>
			<p>
				C'est ce que vous attendez et c'est ce que vous méritez, la première page des navigateurs
				Web! <br /> Mais comment y arriver? Ça c'est notre boulot! Nous sommes expert en
				référencement Web.
				<br />
				Nous connaissons parfaitement les techniques de SEO. Le SEO (Search Engine Optimization) c'est
				le référencement naturel. Le SEA, c'est le référencement payant, notamment à travers des campagnes
				de publicité ciblées sur des médias distincts. <br />Tout est affaire de stratégie, mais
				généralement , le SEO est l'objectif premier, il est déterminant dans la vie de votre futur
				site internet.
			</p>
		</div>
		<div class="wrapper-conception">
			<h1>Conception et stratégie</h1>
			<h2>Template ou sur mesure?</h2>
			<p>
				Concevoir un site internet c'est avant tout déterminer une stratégie et déterminer en
				premier lieu pourquoi? <br /> Quel est le but? Et de là découlera l'identité du site, son
				design, son contenu, son Ux, son UI, etc. Mais doit-on convevoir un site sur mesure, le
				coder entièrement ou doit-on utiliser des outils de conceptions et de réalisation offrant
				notamment l'accès au CMS. <br />C'est une stratégie à déterminer et peser le pour ou le
				contre de chaque technos à utliser, son délai de mise en ligne, de conception, son coût et
				anticiper sur le future de sa vie, sa maintenance.
			</p>
		</div>
		<div class="wrapper-F-section">
			<SectionF />
		</div>
	</div>
</section>

<style>
	.wrapper-F-section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		margin-top: 50px;
		margin-bottom: 0px;
		background-color: white;
	}

	.sites-infos-section {
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
	}
	.container > * {
		flex-basis: 50%;
	}
	.service-img {
		width: 40%;
		border-radius: 3%;
		margin-top: 50px;
	}
	.wrapper-design,
	.wrapper-redaction-web,
	.wrapper-seo,
	.wrapper-conception {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 20px;
		padding: 0px;
		color: var(--textHero);
		margin-top: 30px;
		height: auto;
		width: 60%;
	}

	.wrapper-design h1,
	.wrapper-redaction-web h1,
	.wrapper-seo h1,
	.wrapper-conception h1 {
		font-family: var(--Radio);
		font-size: var(--l);
		font-weight: 700;
		text-align: center;
		color: var(--green);
		margin-top: 15px;
		line-height: 45px;
	
	}
	.wrapper-design h2,
	.wrapper-redaction-web h2,
	.wrapper-seo h2,
	.wrapper-conception h2 {
		font-family: var(--Radio);
		font-size: var(--l);
		font-weight: 700;
		text-align: center;
		color: var(--primary);
		margin-top: 15px;
		letter-spacing: -0.4px;
	}
	.wrapper-design h3 {
		font-family: Heebo;
		font-size: var(--l);
		font-weight: 400;
		text-align: center;
		color: var(--primary);
		margin-top: 15px;
	}
	.wrapper-design p,
	.wrapper-redaction-web p,
	.wrapper-seo p,
	.wrapper-conception p {
		font-family: poppins;
		font-size: var(--m);
		font-weight: 300;
		text-align: left;
		padding: 0px;
	}
	

	@media screen and (max-width: 768px) {
		.wrapper-design,
		.wrapper-redaction-web,
		.wrapper-seo,
		.wrapper-conception {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			gap: 20px;
			padding: 0px;
			color: var(--textHero);
			margin-top: 30px;
			height: auto;
			width: 90%;
		}

		.service-img {
			width: 60%;
			height: auto;
			border-radius: 0;
			margin-top: 30px;
		}
	}
</style>
