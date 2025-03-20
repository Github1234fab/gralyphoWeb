<script>
	import FaqLink from '../../Components/FaqLink.svelte';
	import Header from '../../sections/Header.svelte';
</script>

<Header/>
<div class="container">
	<h1 class="title">Agence Web de Lyon</h1>
	<div class="wrapper__img">
        <img class="img" src="https://www.aflyon.org/wp-content/uploads/2023/06/bandeau-lyon-vue-fourviere.jpg" alt="Lyon" />
    </div>
	<div class="wrapper__text">
		<h2 class="subtitle">Comment trouver une bonne agence Web à Lyon ?</h2>
		<h3 class="subtitle__h3">La clarté des informations</h3>
		<p class="paragraph">
			Il est important de bien comprendre ce que l'agence Web à Lyon vous propose. Son UX design doit être parfait. L'UX design définit l'ergonomie des pages que vous consultez. Elles doivent
			permettre une navigation simple, aérée, facile, lisible, compréhensible.
		</p>
		<h3 class="subtitle__h3">La qualité des prestations</h3>
		<p class="paragraph">
			Vous devez comprendre que l'agence Web expose des prestations fondées par une vraie expertise
			et que les pages que vous consultez ne consiste pas en un simple remplissage de template, pour
			faire joli et en mettre plein les yeux. Les prestations de création de site internet,
			d'applications Web, de design, de création d'identité visuelles (...) doivent être perçues
			comme des compétences maîtrisées et démontrées.
		</p>
		<h3 class="subtitle__h3">Portfolio</h3>
		<p class="paragraph">
			Le portfolio, contenant des liens vers les réalisations effectuées par l'agence web à Lyon, est essentiel.
			Il vaut mieux accéder à quelques réalisations que vous pouvez physiquement consulter, plutôt
			qu'une suite d'image sans lien qui peuvent être fictifs
		</p>
		<h3 class="subtitle__h3">Avis</h3>
		<p class="paragraph">
			Evidemment les avis sont essentiels, mais ce peut-être des fakes...
		</p>
		<h2 class="subtitle">En résumé</h2>
		<p class="paragraph">
			En conclusion, nous pouvons dire que l'expertise proposée par l'agence web à Lyon, doit être
			quantifiable et vérifiée. Une agence digitale devrait pouvoir prouver qu'elle contient des
			développeurs Web dans son équipe et que le code est une compétence maîtrisée. Surtout si elle
			vous propose un service d'application Web. Consultez le portfolio et assurez-vous que les
			réalisations sont consultables et qu'elles ont bien été réalisées par l'agence.
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

	.wrapper__img{
		margin-top: 50px;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.img{

		width: 80%;
		margin:0 auto;
	}

    @media screen and (max-width: 768px) {
        .img{
            height: 200px;
            margin-top: 20px;
        }
        .wrapper__text {
            width: 90%;
			height: 100%;
        }
    }
</style>
