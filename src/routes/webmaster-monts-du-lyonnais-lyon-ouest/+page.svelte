<script>
	import FaqLink from '../../Components/FaqLink.svelte';
	import Header from '../../sections/Header.svelte';
	import picture from "../../Assets/webmaster.jpeg";
	import Links from "../../Components/LinkSiteApplication.svelte"
	import ButtonCta from '../../Components/ButtonCTA.svelte';

</script>

<Header/>
<div class="container">
    
	<h1 class="title">Webmaster des monts du Lyonnais -  Agence Gralypho Web</h1>
    <h2>Lyon-Ouest</h2>
    <div class="wrapper__img">
<img src={picture} alt="panorama des monts du Lyonnais" class="img">
</div>
	<div class="wrapper__text">
		<h2 class="subtitle">Un Webmaster expert du Web pour vos sites internet</h2>
		<h3 class="subtitle__h3">Votre Partenaire Digital pour Attirer Plus de Clients</h3>
		<p class="paragraph">
            Bienvenue sur la page dédiée à notre service de webmastering à Lyon. Vous êtes artisan, indépendant ou une entreprise locale et vous souhaitez développer votre présence en ligne ? Gralypho est l’agence web qui vous accompagne dans la création et la gestion de votre site internet, l’optimisation de votre référencement, ainsi que la mise en place de solutions digitales sur-mesure.
		</p>
		<h3 class="subtitle__h3">Nos Services : Une Expertise Complète pour Booster Votre Visibilité</h3>
		<p class="paragraph">
            Que vous soyez une petite entreprise ou un artisan, un site internet est désormais un outil indispensable pour gagner en visibilité et attirer de nouveaux clients. Notre équipe de webmasters à Lyon vous aide à créer un site internet moderne, responsive et adapté à vos besoins spécifiques. Nous concevons des sites vitrine, des sites e-commerce, et des solutions sur-mesure en fonction de vos objectifs.
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
		<h2 class="subtitle">Pourquoi Choisir Gralypho pour Gérer Votre Site Internet à Lyon ?</h2>
		<p class="paragraph">
			Une Agence de Proximité
Nous sommes basés à Lyon, et nous comprenons les enjeux spécifiques des entreprises locales. Notre objectif est de vous offrir des solutions qui vous permettent de vous démarquer dans votre secteur. <br>

Des Solutions Sur-Mesure
Chez Gralypho, chaque entreprise est unique. Nous proposons des services sur-mesure, adaptés à vos besoins, à votre secteur d’activité et à votre budget. <br>

Accompagnement Personnalisé
Nous ne nous contentons pas de créer un site pour vous. Nous vous accompagnons tout au long de la gestion de votre présence en ligne. Vous avez des questions ou des besoins spécifiques ? Nous sommes là pour vous aider à chaque étape. <br>

Des Résultats Concrets
Nous mettons tout en œuvre pour que votre site vous aide réellement à développer votre activité. En travaillant sur l’expérience utilisateur, le référencement et la performance de votre site, nous nous assurons que votre investissement soit rentable et productif.


		</p>
	</div>
	<Links/>
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
    .container h2{
        font-family: var(--Geologica);
		font-size: 1.5rem;
		color: var(--primary);
		font-weight: 500;
		letter-spacing: -1px;
		text-align: center;
	
	

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
        width: 500px;
		border-radius: 20px;
		margin-top: 20px;
		box-shadow: 0px 20px 10px 0px rgba(0, 0, 0, 0.269);
    }
</style>
