<script>
	import { fade, slide } from 'svelte/transition';
	// import bg from "../../Assets/png-gralypho/41.png";
	import Header from '../../sections/Header.svelte';
	import CardsSectionB from '../../Components/CardsSectionB.svelte';
	import Form from '../../Components/Form.svelte';
	import Mouse from '../../Components/Mouse.svelte';
	import imageApplication from '../../Assets/application-img.jpeg';
	import Button from '../../Components/ButtonCTA.svelte';
	import FaqLink from '../../Components/FaqLink.svelte';


	// let collapseTab = [
	// 	{
	// 		title: 'Étude de votre projet',
	// 		p: "Nous étudions votre projet pour vous proposer la meilleure des solutions. Le développement de votre application nécessite plusieurs phases d'approches nécessaires à sa bonne réalisation. Notamment son design, son contenu, son but, la manière de stocker les datas, l'interface utilisateur (ux/ui),  le choix de la techno.  Nous vous proposons un devis gratuit et sans engagement."
	// 	},
	// 	{
	// 		title: 'La programmation',
	// 		p: 'Nous lançons le développement de votre application quand son design, sa navigation et son contenu sont validés par vos soins. Il faudra compter ensuite un délai de un à trois mois pour le développement de votre application, selon son dégré de complexité '
	// 	},
	// 	{
	// 		title: 'Les tests et la mise en ligne',
	// 		p: "La phase de test est assez excitante car c'est la dernière ligne droite avant la mise en service officielle de votrez application.  Les tests côté serveurs et côté clients sont réalisés. Les tests en responsive sont réalisés également. L'application est testée dans son ensemble sur diverses plateformes et dans tous les cas de figures."
	// 	},
	// 	{
	// 		title: 'La vie de votre application',
	// 		p: 'Une fois la mise en ligne effectuée, votre application vous appartient et sa vie débute. Vous pouvez opter pour une gestion personnelle de votre application ou souscrire à un contrat de maintenance. Dans ce cas nous nous occupons de la gestion de votre application, de la gestion des buggs et de son contenu.'
	// 	}
	// ];
</script>

<Header />
<Mouse />

<section class="application-section" in:fade={{ duration: 3000 }}>
	<div class="hero-applications">
		<img
			src={imageApplication}
			alt="illustration d'un bonhomme qui ouvre un portable dans lequel il y a des logos d'applications"
			class="image"
		/>
		<h1>Création <span>d'applications</span></h1>
		<h2>
			L'agence Gralypho crée vos applications sur mesure.
		</h2>
		<Button />
	</div>

	<!-- ++++++++++++LES ÉTAPES++++++++++++++ -->

	<div class="wrapper-application-explication">
		<h2>Notre développement d'application sur mesure</h2>
		

		<h3>Les applications entièrement dédiées à Android ou IOS</h3>
		<p>
			Les applications dédiées à Android ou iOS sont développées spécifiquement pour tirer
			pleinement parti des fonctionnalités et des exigences de chaque système d’exploitation. Cela
			permet d’assurer une performance optimale, une interface adaptée, une compatibilité totale
			avec les appareils ciblés et une expérience utilisateur fluide et intuitive. En exploitant les
			spécificités de chaque plateforme, ces applications offrent une meilleure intégration, des
			mises à jour facilitées et des fonctionnalités avancées pour répondre aux besoins des
			utilisateurs.
		</p>
		<h3>Les applications compatibles Android et IOS</h3>
		<p>
			Les applications compatibles Android et iOS, également appelées applications multiplateformes,
			sont conçues pour fonctionner sur les deux systèmes d’exploitation. Elles permettent de
			toucher un public plus large tout en réduisant les coûts et les délais de développement. En
			utilisant des outils comme React Native ou Flutter, ces applications assurent une expérience
			utilisateur cohérente sur Android et iOS, tout en offrant des performances adaptées et des
			fonctionnalités communes aux deux plateformes.
		</p>
		<h3>Les applications PWA</h3>
		<p>
			Les applications PWA (Progressive Web Apps) sont des applications web qui combinent les
			avantages d’un site internet et d’une application mobile. Elles sont accessibles via un
			navigateur mais peuvent être installées sur un appareil, offrant une expérience utilisateur
			rapide, fluide et hors ligne. Les PWA sont compatibles avec tous les systèmes d’exploitation
			et permettent de réduire les coûts de développement tout en garantissant des performances
			optimales.
		</p>
		<div class="wrapper__creer-une-application">
			<h2>Pourquoi créer votre propre application ?</h2>
			<img
				class="img"
				src="https://www.aquilapp.fr/wp-content/uploads/2023/12/Quest-ce-quune-application-mobile.png.webp"
				alt="smartphone avec des icônes d'applications"
			/>
			<p>
				Créer votre propre application permet de répondre précisément aux besoins de vos
				utilisateurs, de renforcer votre image de marque et d’offrir une expérience personnalisée.
				C’est un excellent moyen d’augmenter votre visibilité, de fidéliser vos clients et de
				générer de nouvelles opportunités grâce à des fonctionnalités uniques adaptées à votre
				activité.
				<br /><br /> Une application peut permettre à un restaurant de gérer ses commandes en ligne,
				à un coach sportif de proposer des séances personnalisées, à une boutique de fidéliser ses clients
				via des notifications, ou encore à une entreprise de faciliter l’accès à ses services en mobilité.
				C’est un outil puissant pour améliorer l’expérience client et se démarquer.
			</p>
		</div>
		<div class="wrapper__creer-une-application">
			<h2>Le choix de la PWA</h2>
			<img
				class="img"
				src="https://www.imagescreations.fr/wp-content/uploads/PWA-Progressive-Web-App.jpeg"
				alt="smartphone avec des icônes d'applications"
			/>
			<p>
				Gralypho, agence web implantée à Lyon et dans l'ouest Lyonnais, est spécialisée dans la création d'application PWA.
				<br>
				Les PWA (Progressive Web Apps) sont des applications web qui combinent les avantages d’un site internet et d’une application mobile.
				Nous utilisons les dernières technologies pour concevoir des PWA performantes, rapides et sécurisées, adaptées à tous les appareils et à tous les systèmes d’exploitation. <br>

<br> Nous sommes spécialisés dans le développement des application PWA, parce que nous pensons qu'elles constituent l'avenir de l'application. <br><br>
Les applications PWA ressemblent à un site web normal. Mais il est possible très simplement, en un click, de télécharger l'application. Le site internet se transforme dès lors en une application. 
<br><br> Les applications PWA ne souffrent pas du conlfit android/ios. <br><br> Elles sont compatibles avec tous les navigateurs, tous les systèmes d'exploitation et tous les appareils. 
<br> Elles sont également très légères et ne prennent pas de place sur le téléphone de l'utilisateur. 
<br><br>Elles comportent maintenant toutes les fonctionnalités des application natives (accès au smartphone, à la caméra, au gps, aux notifications push, etc.).
<br>Elles sont également très rapides et très fluides. Elles sont moins intrusives puisque l'utilisateur n'est pas obligé de les télécharger depuis un store. Elles sont également moins coûteuses à développer. Elles offrent une expérience d'installation fluide et légère pour les utilisateurs et fonctionnent hors réseaux cellulaire.</p>
		
			
		</div>
	</div>

	<!-- %%%%%TESTIMONIAL%%%%% -->

	<div class="wrapper-testimonial">
		<h2>"La seule limite à ce que vous pouvez réaliser est celle que vous imaginez."</h2>
		<h3>Roy T. Bennett</h3>
	</div>

	<div class="wrapper__faqLink">
		<FaqLink />
		<a href="/FAQ/#application">FAQ</a>
	</div>

	<!-- ++++++++++++LES ÉTAPES++++++++++++++ -->
	<!-- 
	<div class="wrapper-collapse">
		<h1>Les étapes de développement de votre Application.</h1>
		{#each collapseTab as tab}
			<CardsSectionB title={tab.title} p={tab.p} />
		{/each}
	</div> -->

	<div class="wrapper-form">
		<Form />
	</div>
</section>

<style>
	.application-section {
		display: grid;
		grid-template-columns: repeat(12, 1fr);
		grid-template-rows: auto;
		height: auto;
		font-size: 16px;
	}

	.hero-applications {
		grid-column: 1/13;
		grid-row: 1;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		height: auto;
		background: linear-gradient(
			to top,
			var(--whiteGrey) 68%,
			var(--cta) 30%,
			var(--cta) 40%,
			var(--primary) 80%
		);
		padding: 20px;
		
	}
	.image {
		max-width: 40%;
		min-width: 40%;
		z-index: 2;
		border-radius: 20px;
		box-shadow: 0px 20px 10px 0px rgba(0, 0, 0, 0.269);
		margin-top: 40px;
	}

	.hero-applications h1 {
		text-align: center;
		font-family: var(--Geologica);
		font-weight: 900;
		font-size: 2.5rem;
		color: var(--primary);
		margin-top: 0px;
		letter-spacing: -2px;
		padding: 0px;
		line-height: 50px;
		margin-top: 70px;
	}
	.hero-applications h1 span {
		color: var(--cta);
	}
	.hero-applications h2 {
		font-family: var(--Red);
		font-weight: 500;
		font-size: var(--m);
		color: var(--primary);
		text-align: center;
		margin-top: 20px;
		margin-bottom: 50px;
		width: 80%;
	}

	.wrapper-testimonial {
		grid-column: 1/13;
		grid-row: 3;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		height: 400px;
		background: var(--gradient);
	}

	.wrapper-testimonial h2 {
		font-family: 'Poppins';
		font-weight: 500;
		font-size: var(--m);
		color: white;
		text-align: center;
		margin-top: 70px;
		width: 90%;
	}
	.wrapper-testimonial h3 {
		font-family: poppins;
		font-weight: 300;
		font-size: var(--m);
		color: var(--whiteGrey);
		text-align: center;
		margin-bottom: 50px;
	}

	.wrapper__faqLink {
		grid-column: 1/13;
		grid-row: 4;
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
	.wrapper-application-explication {
		grid-column: 1/13;
		grid-row: 2;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		margin-top: 100px;
		margin-bottom: 50px;
	}
	.wrapper-application-explication h2 {
		text-align: center;
		font-family: 'Red Hat Display';
		font-size: var(--l);
		font-weight: 700;
		color: var(--primary);
		letter-spacing: -1px;
		padding: 15px;
	}
	.wrapper-application-explication h3 {
		text-align: center;
		font-family: 'Red Hat Display';
		font-size: var(--lm);
		font-weight: 600;
		color: var(--primary);
		letter-spacing: -1px;
		padding: 15px;
		margin-top: 50px;
	}


	.wrapper-application-explication p {
		font-family: 'poppins';
		font-weight: 300;
		font-size: var(--m);
		color: var(--primary);
		text-align: center;
		margin-top: 50px;
		width: 60%;
	}

	.wrapper-form {
		grid-column: 1/13;
		grid-row: 5;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		background-color: var(--bgHero);
	}
	.wrapper__creer-une-application {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		margin-top: 200px;
	}
	.wrapper__creer-une-application p{
	padding: 40px;
	}
	.wrapper__creer-une-application h2{
width: 70%;
	}


	@keyframes bounce {
		0% {
			transform: scale(1) translateY(-2px);
		}
		25% {
			transform: scale(1) translateY(3px);
		}
		50% {
			transform: scale(1) translateY(-1px);
		}
		75% {
			transform: scale(1) translateY(2px);
		}
		100% {
			transform: scale(1) translateY(0);
		}
	}

	.img {
		height: 300px;
		width: 400px;
		padding: 40px;
	}

	@media screen and (max-width: 767px) {
		.hero-applications {
			height: 800px;
			background-color: red;
		}
		.image {
			min-width: 80%;
		}
	}
</style>
