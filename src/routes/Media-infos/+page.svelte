<script>
	import Header from '../../sections/Header.svelte';
	import Mouse from '../../Components/Mouse.svelte';
	import serviceWeb from '../../Assets/png-gralypho/mediaWeb.png';
	import Button from '../../Components/ButtonCTA.svelte';
</script>

<Mouse />
<Header />
<section class="medias-section">
	<div class="container">
		<img src={serviceWeb} alt="" class="media-img" />
		<div class="wrapper-medias">
			<h1>Rédaction</h1>
			<p>
				Écrire pour les médias sociaux n'est pas une mince affaire. Nous savons tous que pour se
				faire connaître il faut "poster" sur les réseaux sociaux. Mais "poster" quoi?! Que dire, que
				faire, quoi écrire, comment et sur quel sujet? <br />
				Ça c'est notre métier et nous sommes là pour vous aider. <br /><br />Nous rédigeons pour
				vous des contenus adaptés à votre cible, à votre secteur d'activité, à votre image de
				marque. <br />Nous savons comment écrire pour les réseaux sociaux, comment les utiliser,
				comment les exploiter. <br /> Nous savons comment les faire vivre et comment les faire
				grandir. <br /> Nous savons comment les faire parler de vous. <br />Nous savons comment les
				faire vous aimer. <br />Nous savons comment les faire vous suivre. <br /> Nous savons comment
				les faire vous acheter. Nous savons comment les faire vous recommander!!
			</p>
			<div class="wrapper-button">	<Button /></div>
		
		</div>
		<div class="wrapper-medias">
			<h1>Poster des images et des vidéos</h1>
			<p>
				Comment réaliser des vidéos, des photos? Quels contenus poster, quelle qualité d'image,
				comment les filmer, quel contenu, pour quelle raison, etc? <br /><br />Nous créons des
				contenus médias sur mesure et nous les postons sur les réseaux sociaux selon une fréquence
				que nous déterminons ensemble, selon vos objectifs. <br />C'est un travail en collaboration
				qui vous permettra de rayonner à coup sûr sur les réseaux sociaux!
			</p>
			<div class="wrapper-button">	<Button /></div>
		</div>
		<div class="wrapper-medias">
			<h1>Campagne publicitaires</h1>
			<p>
				Vous avez sûrement déjà entendu parler de Google AdWords vous permettant de lancer des
				campagnes payantes pour atteindre ovtre cible en première page des navigateurs web. <br />Il
				existe d'autres moyens automatisés pour atteindre votre but. Que ce soit de faire parler de
				vous, de lancer un évènement, d'anticiper sur une période ou un évènement. Les campagnes
				publicitaires vous permettent à la fois d'être visible et de toucher votre coeur de cible.
				Nous sommes là pour vous aider à déterminer la stratégie à adopter, le budget à allouer, les
				mots clés à utiliser, les médias à cibler, les périodes à privilégier, etc. <br /><br />Nous
				sommes là pour vous aider à atteindre vos objectifs.
			</p>
	<div class="wrapper-button">	<Button /></div>
		</div>
		<div class="wrapper-medias">
			<h1>Formation et coaching</h1>

			<p>
				Si vous souhaitez devenir autonome sur les réseaux sociaux, nous vous proposons des
				formations et du coaching. <br />Nous vous apprenons à utiliser les réseaux sociaux, à les
				exploiter, à les faire vivre, à les faire grandir. <br />La formation vous rendra autonome
				et le coaching vous apportera l'accompagnement nécessaire pour atteindre votre cible.
			</p>
	<div class="wrapper-button">	<Button /></div>
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
	.media-img {
		max-width: 50%;
		max-height: 100%;
		border-radius: 3%;
		margin-top: 20px;
		margin-bottom: 50px;
	}

	.wrapper-medias h1 {
		font-family: var(--Radio);
		font-size: var(--l);
		font-weight: 700;
		text-align: center;
		color: var(--primary);
		margin-top: 15px;
		margin-bottom: 30px;
		line-height: 39px;
	}
	.wrapper-medias {
		font-family: var(--Poppins);
		text-align: center;
		color: var(--primay);
		margin-top: 15px;
		max-width: 80%;
		min-height: 100%;
	}
	.wrapper-button{
		display: flex;
		justify-content: center;
		align-items: center;
		margin-top: 50px;
		margin-bottom: 30px;
	}
</style>
