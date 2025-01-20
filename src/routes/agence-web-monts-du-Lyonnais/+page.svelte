<script>
	import FaqLink from '../../Components/FaqLink.svelte';
	import Header from '../../sections/Header.svelte';
</script>

<Header/>
<div class="container">
    
	<h1 class="title">Agence Web des monts du Lyonnais</h1>
    <div class="wrapper__img">
<img src="https://www.montsdulyonnaistourisme.fr/content/uploads/2020/10/ColdelaLuere-Emmanuel_le_Guellec-438x305.jpg" alt="panorama des monts du Lyonnais" class="img">
</div>
	<div class="wrapper__text">
		<h2 class="subtitle">Les acteurs tech de la région de l'ouest Lyonnais</h2>
		<h3 class="subtitle__h3">À 15 km de Lyon, un vivier de pépites.</h3>
		<p class="paragraph">
		Avec des ZA accueillant des entreprises de renom, les monts du Lyonnais constituent un territoire dynamique et innovant, à moins de 15 km de Lyon. <br>Le cadre verdoyant et préservé attire de nombreux visiteurs et si l'authenticité des monts attire, la qualité des prestations des acteurs tech de la région est également un atout majeur.
        Gralypho a choisi de s'implanter dans cette région pour couvrir les besoins digitaux des entreprises locales, de Lyon et de la région Lyonnaise.
		</p>
		<h3 class="subtitle__h3">Un territoire stratégique</h3>
		<p class="paragraph">
			Les monts du Lyonnais sont enclavés à l'ouest de Lyon entre les monts du beaujolais, les monts du Forez et le pilat. Aux portes de la Loire, à la fois proche de l'A7 et de l'A42, pour l'agence Web Gralypho, l'implantation dans les monts du Lyonnais est une stratégie gagnante.
		</p>
		<!-- <h3 class="subtitle__h3">Portfolio</h3>
		<p class="paragraph">
			Le porfolio, contenant des liens vers les réalisations effectuées par l'agence digitale est
			essentiel. Il vaut mieux accéder à quelques réalisations que vous pouvez physiquement
			consulter, plutôt qu'une suite d'image sans lien qui peuvent être fictifs et ne pas refleter
			convenablement le travail de l'agence.
		</p>
		<h3 class="subtitle__h3">Des besoins digitaux variés</h3>
		<p class="paragraph">
			
		</p> -->
		<h2 class="subtitle">Un choix 100% gagnant</h2>
		<p class="paragraph">
			Nous pouvons dire que l'expertise proposée par l'agence web doit être quantifiable et
			vérifiée. Une agence digitale devrait pouvoir prouver qu'elle contient des développeurs Web
			dans son équipe et que le code est une compétence maîtrisée. Surtout si elle vous propose un
			service d'application Web. Consultez le portfolio et assurez-vous que les réalisations sont
			consultables et qu'elles ont bien été réalisées par l'agence.
		</p>
	</div>
	<div class="wrapper__faqLink">
		<FaqLink />
		<a href="/FAQ">FAQ</a>
	</div>
</div>

<style>
	.container {
		height: 100%;
	}
	.title {
		font-family: var(--Geologica);
		font-size: var(--l);
		color: var(--primary);
		font-weight: 900;
		margin-bottom: 10px;
		letter-spacing: -1px;
		text-align: center;
		line-height: 35px;
		margin-top: 50px;
        padding: 25px
	}
	.subtitle {
		font-family: var(--Geologica);
		font-size: 1.5rem;
		color: var(--primary);
		font-weight: 500;
		letter-spacing: -1px;
		text-align: center;
		line-height: 40px;
		margin-top: 30px;
		padding: 25px;
	}
	.subtitle__h3 {
		font-family: var(--Geologica);
		font-size: var(--m);
		color: var(--primary);
		font-weight: 700;
		letter-spacing: -1px;
		text-align: center;
		margin-top: 100px;
	}

	.paragraph {
		font-family: var(--Poppins);
		font-size: var(--m);
		color: var(--primary);
		font-weight: 300;
		letter-spacing: -0.02em;
		text-align: center;
		align-self: center;
		padding: 20px;
	}
	.wrapper__faqLink {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	.wrapper__faqLink a {
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
    }
    .wrapper__img{
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .img{
        height:auto;
        width: auto;
    }
</style>
