<script>
	import FaqLink from '../../Components/FaqLink.svelte';
	import Header from '../../sections/Header.svelte';
</script>

<Header />
<div class="container">
	<h1 class="title">Gralypho, agence web <br> de la région Lyonnaise.</h1>
	<div class="wrapper__img">
		<img
			class="img"
			src="https://fr.maps-lyon.com/img/1200/lyon-carte-de-la-r%C3%A9gion.jpg"
			alt="cart de la région Lyonnaise"
		/>
	</div>
	<div class="wrapper__text">
		<h2 class="subtitle">Annecy, Genève, Lyon, Saint-Etienne, Bourg-en-Bresse, Valence ...</h2>
		<h3 class="subtitle__h3">Les grandes villes de la région Lyonnaise, à moins de 100km de l'ouest Lyonnais.</h3>
		<p class="paragraph">
			La région Lyonnaise est dense et dynamique. Les villes de la région sont proches les unes des
			autres et les échanges sont nombreux.
			<br /> Les entreprises de la région Lyonnaise ont des besoins digitaux variés: des sites web
			Vitrine, des sites internet e-commerce, des sites web corporate, des sites institutionnels,
			des applications sur mesure, tous les besoins sont exprimés.
			<br /> En tant qu'agence Web, nous visons l'excellence et la satisfaction de nos clients. Nous
			sommes à l'écoute de de chaque besoin et nous nous adaptons à chaque demande. Notre coeur de métier
			est la création d'outils digitaux sur mesure.
		</p>
		<h2 class="subtitle">La force du digital, le travail en visio et l'écologie préservée !</h2>
		<h3 class="subtitle__h3">Nous nous dépaçons seulement quand c'est nécessaire.</h3>
		<p class="paragraph">
			L'avantage de notre métier de conception d'outil digitaux est que nous pouvons travailler à
			distance. Nous pouvons donc travailler avec des clients de toute la région Lyonnaise sans nous
			déplacer.
			<br /> Notre premier rendez-vous est gratuit. C'est l'occasion d'effectuer un audi général
			avec notre client afin de comprendre ses besoins et ses attentes. Ce rendez-vous est
			nécessairement en présentiel pour un premier contact plus humain.
			<br /> Ensuite, les différentes étapes de la conception de l'outil digital se font à distance.
			Nous utilisons des outils de visioconférence pour échanger avec nos clients et leur présenter
			les avancées du projet. À la livraison, nous nous rendons une nouvelle fois sur place. <br />
			Ainsi, nous limitons nos déplacements et nous préservons l'environnement.
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
	.wrapper__text {
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
		margin-top: 30px;
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
	.wrapper__img {
		display: flex;
		justify-content: center;
	}
	.img {
		width: auto;
		height: 400px;
		padding: 20px;
	}

	@media screen and (max-width: 768px){
		.img {
		width: auto;
		height: 300px;
		padding: 20px;
	}	
	}
</style>
