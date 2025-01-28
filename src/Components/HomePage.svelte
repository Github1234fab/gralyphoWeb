<script>
	import ButtonCta from './ButtonCTA.svelte';
	import { onMount } from 'svelte';

	// onMount(() => {
	// 	const text = document.querySelectorAll('.text');
	// 	text.forEach((text) => {
	// 		gsap.to(text, {
	// 			x: 0,
	// 			opacity: 1,
	// 			ease: 'power4',
	// 			scrollTrigger: {
	// 				trigger: text,
	// 				start: 'top 80%',
	// 				en: 'top 50%',
	// 				scrub: 2
	// 			}
	// 		});
	// 	});
	// });

	onMount(() => {
		const cta = document.querySelectorAll('.wrapper__button-cta');
		cta.forEach((cta) => {
			gsap.to(cta, {
				x: 0,
				opacity: 1,
				ease: 'power4',
				scrollTrigger: {
					trigger: cta,
					start: 'top 80%',
					en: 'top 50%',
					scrub: true
				}
			});
		});
	});
</script>

<main class="main">
	<h1 class="title">
		Création de sites internet sur mesure <br /> <span>Professionnels et entreprises</span>
	</h1>

	<div class="container ctn__A">
		<div class="wrapper__section-text">
			<h2 class="subtitle">
				Vous cherchez à créer un site internet
				<br />qui reflète votre entreprise et attire vos clients ?
			</h2>
			<div class="wrapper__img">
				<div class="img bg__A"></div>
			</div>
			<p class="text">
				Notre agence web, spécialisée dans la création de site internet sur mesure, vous accompagne
				dans la réalisation de votre projet digital. <br /><span
					>Votre futur site internet sera conçu sur trois piliers fondamentaux:
				</span> <br />

				<span>L'UX design: </span>c'est à dire l'expérience de vos utilisateurs sur votre site (
				facilité de navigation, informations facilement accessibles, moyen de contact mis en
				évidence, etc).

				<br />

				<span>Le SEO</span> ou plus communément appelé, le référencement : <br /> Vous souhaitez
				être premier dans les résultats de Google (<a
					target="_blank"
					href="https://fr.wikipedia.org/wiki/R%C3%A9sultats_d%27un_moteur_de_recherche">SERP</a
				>), mais tout le monde, vos concurrents y comprit, souhaitent obtenir ce même résultat. Il
				s'agit alors d'appliquer différentes techniques de SEO pour apparaître en première page.

				<br />

				<span>Les fonctionnalites: </span> <br />Votre site internet peut vous permettre de
				collecter des données, de vendre des produits, de proposer des devis en ligne, de prendre
				des RV, de gérer vos stocks, de tenir un blog (très utile pour le
				<a
					target="_blank"
					href="https://fr.wikipedia.org/wiki/Optimisation_pour_les_moteurs_de_recherche">SEO</a
				>), etc. Ces fonctionnalités sont essentielles et très stratégiques.
			</p>
			<div class="wrapper__button-cta">
				<p class="button__text">
					<span>Contactez-nous dès aujourd’hui pour discuter de votre projet !</span>
				</p>
				<ButtonCta />
			</div>
		</div>
	</div>

	<!-- =============================================================== -->

	<div class="container ctn__B">
		<div class="wrapper__section-text">
			<h2 class="subtitle">Quel est le tarif pour un site internet professionnel ?</h2>
			<div class="wrapper__img">
				<div class="img bg__B"></div>
			</div>
			<p class="text">
				Le coût d’un site internet professionnel dépend de nombreux facteurs comme : la complexité
				du design, de l' <a
					target="_blank"
					href="https://fr.wikipedia.org/wiki/Exp%C3%A9rience_utilisateur">UX</a
				>
				, le nombre de pages, les fonctionnalités spécifiques (boutique en ligne, réservation, etc.),
				les exigences SEO, les objectifs marketings et vos besoins en termes de maintenance.
				<br />Chez Gralypho, nous proposons des solutions adaptées à tous les budgets, avec une
				transparence totale sur les prix.
			</p>
			<div class="wrapper__button-cta">
				<p class="button__text">
					<span>Demandez un devis gratuit dès maintenant.</span>
				</p>
				<ButtonCta />
			</div>
		</div>
	</div>

	<!-- =============================================================== -->

	<div class="container ctn__C">
		<div class="wrapper__section-text">
			<h2 class="subtitle">Quel est le délai pour obtenir un site internet sur mesure ?</h2>
			<div class="wrapper__img">
				<div class="img bg__C"></div>
			</div>
			<p class="text">
				La création d’un site sur mesure peut prendre <span>entre 4 et 8 semaines</span>, selon la
				complexité du projet et votre disponibilité pour valider les étapes (design (UX et
				<a target="_blank" href="https://en.wikipedia.org/wiki/User_interface_design">UI</a>
				), contenu, SEO, développement, etc). Voici les principales étapes :
				<li>Proposition d’un design unique.</li>
				<li>Validation du design et des fonctionnalités.</li>
				<li>Intégration, création du contenu et optimisation SEO.</li>
				<li>Développement et intégration des fonctionnalités.</li>
				<li>Tests, ajustements et mise en ligne.</li>
			</p>
			<div class="wrapper__button-cta">
				<p class="button__text">
					<span>Contactez-nous dès aujourd’hui pour discuter de votre projet  et des délais possibles!</span>
				</p>
				<ButtonCta />
			</div>
		</div>
	</div>

	<!-- =============================================================== -->

	<div class="container ctn__D">
		<div class="wrapper__section-text">
			<h2 class="subtitle">Pourquoi faire appel à une agence web ?</h2>
			<div class="wrapper__img">
				<div class="img bg__D"></div>
			</div>
			<p class="text">
				Confier votre projet à une agence web à Lyon, c’est bénéficier de l’expertise d’une équipe dédiée à
				chaque aspect de votre site : Un design professionnel et adapté à votre identité. Un site
				optimisé pour le référencement (SEO) dès sa création. Des fonctionnalités modernes pour
				répondre aux attentes de vos clients. Un accompagnement de A à Z, même après la mise en
				ligne. Un site internet conçu par une agence, c’est l’assurance d’un résultat professionnel
				qui vous démarque de vos concurrents. <br />
			</p>
			<div class="wrapper__button-cta">
				<p class="button__text">
					<span>Prenez rendez-vous pour discuter de vos besoins. </span>
				</p>
				<ButtonCta />
			</div>
		</div>
	</div>

	<!-- =============================================================== -->

	<div class="container ctn__E">
		<div class="wrapper__section-text">
			<h2 class="subtitle">
				Est-ce que mon site internet professionnel <br /> sera référencé en premier sur Google ?
			</h2>
			<div class="wrapper__img">
				<div class="img bg__E"></div>
			</div>
			<p class="text">
				Le SEO est le nerf de la guerre et ses technqiues évoluent sans cesse et surtout en ce
				moment. Pour quelle raison ? Parce que l'IA est arrivée et que les moteurs de recherche sont
				de plus en plus performants pour comprendre les intentions de recherche des internautes. <br
				/><br />
				<span>Voici quelques éléments qui peuvent vous aider à être premier sur Google :</span>
				<li>Un site rapide et responsive.</li>
				<li>Un contenu de qualité et optimisé pour le SEO.</li>
				<li>Des backlinks de qualité.</li>
				<li>Une stratégie de contenu et de netlinking.</li>
				<li>Une optimisation technique et sémantique.</li>
			</p>
			<div class="wrapper__button-cta">
				<p class="button__text">
					<span
						>Contactez-nous pour en savoir plus sur nos solutions SEO et obtenir un audit gratuit de
						votre site internet.</span
					>
				</p>
				<ButtonCta />
			</div>
		</div>
	</div>

	<!-- =============================================================== -->

	<div class="container ctn__F">
		<div class="wrapper__section-text">
			<h2 class="subtitle">
				Vaut-il mieux créer son site web soi-même avec l’IA <br /> ou en faisant appel à une agence Web ?
			</h2>
			<div class="wrapper__img">
				<div class="img bg__F"></div>
			</div>
			<p class="text">
				Avec les nombreuses options disponibles aujourd’hui, il peut être tentant de créer votre
				site vous-même ou d’utiliser une IA. Cependant, ces solutions présentent des limites. <br />
				Certes le résultat peut être rapide, mais attention, le web reste un métier et de nombreuses
				phases techniques sont encore essentielles (SEO, rédaction du contenu, le design UX et UI, l'intégration,
				le déploiement, les backlinks, etc.) L'agence web Gralypho vous propose un site unique, performant
				et adapté à vos besoins spécifiques. <br />
			</p>
			<div class="wrapper__button-cta">
				<p class="button__text">
					<span
						>Conctactez-nous pour parlez à un expert et comprendre l'avantage d'un site créé par une agence Web.</span
					>
				</p>
				<ButtonCta />
			</div>
		</div>
	</div>

	<!-- =============================================================== -->

	<div class="container ctn__G">
		<div class="wrapper__section-text">
			<h2 class="subtitle">
				Est-ce que je pourrai modifier des éléments sur mon site internet <br /> une fois qu'il me sera
				livré ?
			</h2>
			<div class="wrapper__img">
				<div class="img bg__G"></div>
			</div>
			<p class="text">
				Absolument! Nous concevons tous nos sites pour qu’ils soient faciles à gérer. Grâce à des
				outils intuitifs (comme WordPress, Wix ou un CMS personnalisé), vous pourrez modifier les
				textes et images. Ajouter de nouvelles pages ou articles. Mettre à jour vos informations en
				quelques clics. Nous vous proposons également des formations pour vous aider à prendre en
				main votre site, une fois livré.
			</p>
			<div class="wrapper__button-cta">
				<p class="button__text">
					<span
						>Contactez-nous pour que nous puissions l'administration de votre site.</span
					>
				</p>
				<ButtonCta />
			</div>
		</div>
	</div>

	<!-- =============================================================== -->

	<div class="container ctn__H">
		<div class="wrapper__section-text">
			<h2 class="subtitle">Est-ce que je serai propriétaire de mon site internet ?</h2>
			<div class="wrapper__img">
				<div class="img bg__H"></div>
			</div>

			<p class="text">
				Oui. Lorsque nous réalisons un site internet, vous en êtes le propriétaire exclusif. Cela
				signifie que : Vous avez accès à tous les fichiers et codes sources. Vous pouvez changer
				d’hébergeur ou d’agence si nécessaire. Vous n’êtes pas lié par un abonnement à long terme.
				Chez Gralypho, nous croyons en la transparence et en votre indépendance.
				<br />
			</p>
			<div class="wrapper__button-cta">
				<p class="button__text">
					<span
						>Contactez-nous pour évoquer la propriété de votre site.</span
					>
				</p>
				<ButtonCta />
			</div>
		</div>
	</div>

	<!-- <div class="container ctn__I">
		<div class="wrapper__section-text">
			<h2 class="subtitle">Quizz : De quel type de site internet avez-vous besoin ?</h2>
			<div class="wrapper__img">
				<div class="img bg__I"></div>
			</div>
			<p class="text">
				Vous hésitez entre un site vitrine, un e-commerce ou une plateforme sur mesure ? Répondez à
				notre quizz rapide et découvrez la solution qui répondra à vos objectifs.
				<br />Questionnaire : Quel est votre objectif principal (présenter vos services, vendre en
				ligne, etc.) ? Quel est votre budget ? Quelle est votre échéance ?
			</p>
			<div class="wrapper__button-cta">
				<ButtonCta />
			</div>
		</div>
	</div> -->

	<!-- =============================================================== -->

	<div class="container ctn__J">
		<div class="wrapper__section-text">
			<h2 class="subtitle">Confiez nous la création de votre site internet sur mesure.</h2>
			<div class="wrapper__img">
				<div class="img bg__J"></div>
			</div>
			<p class="text">
				Faites confiances à nos experts pour obtenir un outil performant et personnalisé. Avec
				l'agence web Gralyho, vous bénéficiez d’un accompagnement complet et d’une qualité professionnelle à
				chaque étape de conception de votre site web.
				<br />

				<br />
			</p>
			<div class="wrapper__button-cta">
				<p class="button__text">
					<span>Contactez-nous ou demandez un devis gratuit dès aujourd’hui !</span>
				</p>
				<ButtonCta />
			</div>
		</div>
	</div>
</main>

<style>
	.main {
		display: flex;
		flex-direction: column;
		background: var(--gradient-white);
	}
	.container {
		display: flex;
		justify-content: center;
		align-items: center;
		height: auto;
		margin-bottom: 200px;
	}
	.wrapper__section-text {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 20px;
		margin-left: auto;
		margin-right: auto;
		gap: 20px;
		flex: 1;
	}
	.wrapper__button-cta {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		margin-bottom: 0px;
		padding: 20px;
		width: 40%;
		opacity: 0.4;
		transform: translateX(-200px);
		background-color: var(--green);
		margin-top: 30px;
	}
	.wrapper__img {
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 20px;
		margin: 20px auto;
		flex: 1;
		position: relative;
		z-index: 1;
	}
	.wrapper__img::before {
		content: '';
		position: absolute;
		width: 200px;
		height: 200px;
		top: 0;
		left: -30px;
		background-color: rgba(5, 10, 56, 0.75);
		backdrop-filter: blur(20px);
		border-radius: 50%;
		z-index: 0;
		box-shadow: 0px 40px 20px 0px rgba(0, 0, 0, 0.293);
	}

	.title {
		font-size: var(--xl);
		text-align: center;
		font-family: var(--Geologica);
		font-weight: 800;
		letter-spacing: -2px;
		margin-top: 100px;
		line-height: 50px;
		color: var(--whiteGrey);
		margin-bottom: 0px;
	}
	.title span {
		font-family: var(--Poppins);
		color: var(--green);
		font-weight: 500;
		letter-spacing: 0px;
		font-size: var(--m);
	}
	.subtitle {
		font-size: 1.8rem;
		letter-spacing: -1px;
		line-height: 45px;
		font-weight: 600;
		text-align: center;
		font-family: var(--Geologica);
		color: var(--whiteGrey);
		width: 70%;
	}
	.text {
		font-family: var(--Poppins);
		font-size: var(--m);
		color: var(--whiteGrey);
		font-weight: 400;
		letter-spacing: -0.02em;
		line-height: 40px;
		width: 50%;
		text-align: justify;
		hyphens: auto;
		
		/* opacity: 0.4;
		transform: translateX(200px); */
	}
	.text span {
		font-weight: 700;
	}

	.button__text {
		font-family: var(--Poppins);
		font-size: var(--m);
		color: var(--primary);
		font-weight: 700;
		letter-spacing: -0.02em;
		line-height: 40px;
		width: 60%;
		text-align: center;
		padding: 20px;
	}

	a {
		text-decoration: underline;
		color: var(--green);
	}
	.img {
		width: 250px;
		height: 250px;
		border-radius: 50%;
		background-size: cover;
		background-repeat: no-repeat;
		background-position: center;
		background-color: rgba(255, 255, 255, 0.151);
		backdrop-filter: blur(20px);
		padding: 20px;
		box-shadow: 0px 40px 20px 0px rgba(0, 0, 0, 0.293);
	}
	.bg__A {
		background-image: url('../Assets/png-gralypho/BillyWinner.png');
	}
	.bg__B {
		background-image: url('../Assets/png-gralypho/money.png');
	}
	.bg__C {
		background-image: url('../Assets/png-gralypho/timing.png');
	}
	.bg__D {
		background-image: url('../Assets/png-gralypho/web-agency.png');
	}
	.bg__E {
		background-image: url('../Assets/png-gralypho/google-visuel.png');
	}
	.bg__F {
		background-image: url('../Assets/png-gralypho/question.png');
	}
	.bg__G {
		background-image: url('../Assets/png-gralypho/icon-change.png');
	}
	.bg__H {
		background-image: url('../Assets/png-gralypho/clefs.png');
	}
	/* .bg__I {
		background-image: url('../Assets/png-gralypho/design.png');
	} */
	.bg__J {
		background-image: url('../Assets/png-gralypho/confiance.png');
	}

	@media screen and (max-width: 768px) {
		.container {
			height: auto;
		}
		.img {
			width: 250px;
			height: 250px;
			border-radius: 50%;
			background-size: contain;
			background-repeat: no-repeat;
			background-position: center;
			background-color: rgba(255, 255, 255, 0.151);
			backdrop-filter: blur(20px);
			padding: 20px;
			box-shadow: 0px 40px 20px 0px rgba(0, 0, 0, 0.293);
		}
		.text {
			width: 100%;
		}
		.text span {
			width: 100%;
		}
		.text{
			width: 85%;
		}
		.wrapper__button-cta {
			width: 100%;
		}

		.wrapper__img::before {
			top: -20px;
			left: 30px;
		}
		.wrapper__img {
			margin-top: 50px;
		}
		.title {
			font-size: 2.3rem;
			line-height: 45px;
			padding: 20px;
			margin-top: 50px;
			margin-bottom: -20px;
		}
		.title span {
			font-size: 1.2rem;
		}
		.subtitle {
			font-size: 1.5rem;
			line-height: 40px;
			width: 90%;
		}
		.button__text {
			width: 100%;
		}
		
		.subtitle{
			font-size: 1.8rem;
		}

	}
</style>
