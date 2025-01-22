<script>
	import FaqLink from '../../Components/FaqLink.svelte';
	import Header from '../../sections/Header.svelte';
</script>

<Header/>
<div class="container">
	<h1 class="title">La région Lyonnaise et le web</h1>
	<div class="wrapper__img">
		<img
			class="img"
			src="https://fr.maps-lyon.com/img/1200/lyon-carte-de-la-r%C3%A9gion.jpg"
			alt="cart de la région Lyonnaise"
		/>
	</div>
	<div class="wrapper__text">
		<h2 class="subtitle">Annecy, Genève, Lyon, Saint-Etienne, Bourg-en-Bresse, Valence ...</h2>
		<h3 class="subtitle__h3">De grandes villes, à moins de 100km</h3>
		<p class="paragraph">
		La région Lyonnaise est dense et dynamique. Les villes de la région sont proches les unes des autres et les échanges sont nombreux. 
        <br> Les entreprises de la région Lyonnaise ont des besoins digitaux variés, des sites web Vitrine aux sites internet e-commerce, des sites web corporate au site institutionnel, tous les besoins sont exprimés. 
        <br> En tant qu'agence Web, nous visons l'excellence et la satisfaction de nos clients. La concurrence est rude et nous devons nous démarquer par la qualité de nos prestations.

		</p>
		<!-- <h3 class="subtitle__h3">Applications et outils digitaux</h3>
		<p class="paragraph">
			
		</p>
		<h3 class="subtitle__h3">Portfolio</h3>
		<p class="paragraph">
			Le porfolio, contenant des liens vers les réalisations effectuées par l'agence est essentiel.
			Il vaut mieux accéder à quelques réalisations que vous pouvez physiquement consulter, plutôt
			qu'une suite d'image sans lien qui peuvent être fictifs
		</p>
		<h3 class="subtitle__h3">Avis</h3>
		<p class="paragraph">
			Evidemment les avis sont essentiels, mais là aussi, ce peut-être des fakes...
		</p>
		<h2 class="subtitle">En résumé</h2>
		<p class="paragraph">
			En conclusion, nous pouvons dire que l'expertise proposée par l'agence web doit être
			quantifiable et vérifiée. Une agence digitale devrait pouvoir prouvée qu'elle contient des
			développeurs Web dans son équipe et que le code est une compétence maîtrisée. Surtout si elle
			vous propose un service d'application Web. Consultez le portfolio et assurez-vous que les
			réalisations sont consultables et qu'elles ont bien été réalises par l'agence.
		</p> -->
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
		padding: 20px;
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
    }
    .img{
        width: auto;
        height: 200px;
    }
</style>
