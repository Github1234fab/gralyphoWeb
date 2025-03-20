<script>
	import FaqLink from '../../Components/FaqLink.svelte';
	import Header from '../../sections/Header.svelte';
    import ButtonCta from "../../Components/ButtonCTA.svelte";
	
</script>

<Header/>
<div class="container">
	<h1 class="title">Création de site internet et d'applications PWA.</h1>
	<div class="wrapper__img">
        <img class="img" src="https://images.pexels.com/photos/8430273/pexels-photo-8430273.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Lyon" />
    </div>
	<div class="wrapper__text">
		<h2 class="subtitle">Comment créer un site internet ?</h2>
		<h3 class="subtitle__h3">CMS ? Code ? Hybride ?</h3>
		<p class="paragraph">
			Pour créer un site internet rapidement et très facilement, il y a bien sûr Wordpress ou Wix. 
            <br>. Mais attention, il y a une différence foncdamentale entre l'affichage de quelques pages html sur le web et un "vrai site internet", référencé, dynamique et qui puisse convertir des clients.
            <br> . Un site codé en dur, avec un framework comme Svelte, React ou Angular, vous permettra de créer un site internet sur mesure, qui répondra exactement à vos besoins.
            <br>. Un site codé pour le front et branché à un CMS headless représente une solution efficace et hyper rapide que nous apprécions particulièrement.
		</p>
		<h3 class="subtitle__h3">A qui faire appel pour créer son site internet ?</h3>
		<p class="paragraph">
Le mieux est de passer par un Webmaster, un développeur Web ou une agence Web. Ceux-ci seront de bons conseils, à l'écoute de vos besoins pour vous répsenter des solutiosn digitales adaptées à vos besoins.
		</p>
		<h3 class="subtitle__h3">Vous avez un projet de site internet ?</h3>
		<p class="paragraph">
			Faites appel à notre agence Web pour la création de votre site internet.
            Autour d'un petit café lors d'un premier rendez-vous gratuit, nous pourrons aborder ensemble toutes les questions que vous vous posez à propos de la création de votre site internet.
		</p>
		
        <ButtonCta/>
		
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
