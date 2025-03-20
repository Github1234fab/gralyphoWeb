<script>
	import FaqLink from '../../Components/FaqLink.svelte';
	import Header from '../../sections/Header.svelte';
	import picture from "../../Assets/png-gralypho/monts-du-lyonnais.png";
</script>

<Header/>
<div class="container">
    
	<h1 class="title">Agence Web des monts du Lyonnais</h1>
    <div class="wrapper__img">
<img src={picture} alt="panorama des monts du Lyonnais" class="img">
</div>
	<div class="wrapper__text">
		<h2 class="subtitle">Les acteurs tech de la région de l'ouest Lyonnais</h2>
		<h3 class="subtitle__h3">À 15 km de Lyon, un vivier de pépites.</h3>
		<p class="paragraph">
		Avec des ZA accueillant des entreprises de renom, les monts du Lyonnais constituent un territoire dynamique et innovant, à moins de 15 km de Lyon. <br>Le cadre verdoyant et préservé attire de nombreux visiteurs et si l'authenticité des monts attire, la qualité des prestations des acteurs tech de la région est également un atout majeur.
        Gralypho, agence web implantée au coeur des monts du Lyonnais, a choisi de s'implanter dans cette région pour couvrir les besoins digitaux des entreprises locales, celles de Lyon, ainsi que celles de la région Lyonnaise.
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
			Alliant cadre verdoyant, authentique et préservé, il fait bon vivre et travailler dans les monts du Lyonnais. Nous bénéficions d'un confort de travail optimal tout en étant à moins de trente minutes de Lyon, ce qui nous permet de répondre aux besoins digitaux des entreprises des monts du Lyonnais, de Lyon et de la région Lyonnaise. Pour Gralypho, agence Web, c'est un choix 100% gagnant !
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
	.wrapper__text{
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 80%;
		margin: 0 auto;
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
		margin-top: 50px;
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

    .wrapper__img{
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .img{
        height:100%;
        width: 900px;
		border-radius: 20px;
		margin-top: 20px;
		box-shadow: 0px 20px 10px 0px rgba(0, 0, 0, 0.269);
    }
</style>
