<script>
	import { fade, slide } from 'svelte/transition';
	// import bg from "../../Assets/png-gralypho/41.png";
	import Header from '../../sections/Header.svelte';
	import CardsSectionB from '../../Components/CardsSectionB.svelte';
	import Form from '../../Components/Form.svelte';
	import Mouse from '../../Components/Mouse.svelte';

	let collapseTab = [
		{
			title: 'Étude de votre projet',
			p: "Nous étudions votre projet pour vous proposer la meilleure des solutions. Le développement de votre application nécessite plusieurs phases d'approches nécessaires à sa bonne réalisation. Notamment son design, son contenu, son but, la manière de stocker les datas, l'interface utilisateur (ux/ui),  le choix de la techno.  Nous vous proposons un devis gratuit et sans engagement."
		},
		{
			title: 'La programmation',
			p: 'Nous lançons le développement de votre application quand son design, sa navigation et son contenu sont validés par vos soins. Il faudra compter ensuite un délai de un à trois mois pour le développement de votre application, selon son dégré de complexité '
		},
		{
			title: 'Les tests et la mise en ligne',
			p: "La phase de test est assez excitante car c'est la dernière ligne droite avant la mise en service officielle de votrez application.  Les tests côté serveurs et côté clients sont réalisés. Les tests en responsive sont réalisés également. L'application est testée dans son ensemble sur diverses plateformes et dans tous les cas de figures."
		},
		{
			title: 'La vie de votre application',
			p: "Une fois la mise en ligne effectuée, votre application vous appartient et sa vie débute. Vosu pouvez opter pour une gestion personnelle de votre application ou souscrire à un contrat de maintenance. Dans ce cas nous nous occupons de la gestion de votre application, de la gestion des buggs et de son contenu."
		}
	];
</script>

<Header />
<Mouse />

<section class="application-section" in:fade={{ duration: 3000 }}>
	<div class="hero-applications">
		<h1>Création<br /><span>d'applications</span></h1>
		<h3>
			L'agence Gralypho crée vos applications sur mesure pour offir à vos utilisateurs une
			expérience unique.
		</h3>
	</div>

	<!-- ++++++++++++LES ÉTAPES++++++++++++++ -->

	<div class="wrapper-application-explication">
		<h2>Progressive Web App (PWA)</h2>
		<h1>Notre développement d'applis.</h1>
		<p>
			Nous développons des application en PWA. Cela signifie que les applications  PWA se téléchargent
			uniquement depuis un site Web. Pourquoi faire ce choix? Parce qu'une application IOS (apple)
			ne se code pas comme une application ANDROID (google), même si maintenant certain frameworks
			le permettent, comme ReactNative. Mais parfois une application ne se trouve pas sur ANDROID
			mais est disponible sur IOS, et vice-versa. Pour se tenir à l'abrit des rivalités des Gafas et de leur
			rivalités, nous faisons le choix des applications PWA. Elles présentent certains avantages:
		</p>
		<ol>
			<li>
				Elles offrent une expérience d'installation fluide et légère pour les utilisateurs, tout en
				offrant les avantages d'une application native sur le web.
			</li>
			<li>
				Les applications PWA se téléchargent depuis votre site internet. C'est une bonne manière de
				conserver l'uitlisateur sur le site et de le fidéliser. De son côté, l'expérience est très
				fluide.
			</li>
			<li>
				Leurs mise à jour sont automatiques, car elles sont effectuées depuis le site Web par le
				développeur de l'application. Quand l'application est mise à jour par le développeur, votre
				application se met à jour automatiquement.
			</li>
		</ol>
	</div>

	<!-- %%%%%TESTIMONIAL%%%%% -->

	<div class="wrapper-testimonial">
		<h2>"La seule limite à ce que vous pouvez réaliser est celle que vous imaginez."</h2>
		<h3>Roy T. Bennett</h3>
	</div>

	<!-- ++++++++++++LES ÉTAPES++++++++++++++ -->

	<div class="wrapper-collapse">
		<h1>Les étapes de développement de votre Appli.</h1>
		{#each collapseTab as tab}
			<CardsSectionB title={tab.title} p={tab.p} />
		{/each}
	</div>

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
		background-color: var(--primary);
	}
	.hero-applications h1 {
		text-align: center;
		font-family: Epilogue;
		font-weight: 900;
		font-size: clamp(3rem, 8vw, 13rem);
		color: rgb(255, 255, 255);
		margin-top: 0px;
		letter-spacing: -1px;
		padding: 0px;
		line-height: clamp(3rem, 8vw, 8.2rem);
		margin-top: 70px;
	}
	.hero-applications h1 span {
		color: var(--bleuAcier);
	}
	.hero-applications h3 {
		font-family: poppins;
		font-weight: 300;
		font-size: var(--m);
		color: rgb(224, 222, 222);
		text-align: center;
		margin-top: 50px;
		margin-bottom: 100px;
		width: 80%;
	}

	.wrapper-testimonial {
		grid-column: 1/13;
		grid-row: 3;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		background-image: linear-gradient(
				45deg,
				rgba(254, 246, 210, 0.53) 0%,
				rgba(254, 246, 210, 0.53) 14.286%,
				rgba(221, 240, 216, 0.53) 14.286%,
				rgba(221, 240, 216, 0.53) 28.572%,
				rgba(188, 233, 223, 0.53) 28.572%,
				rgba(188, 233, 223, 0.53) 42.858%,
				rgba(156, 227, 229, 0.53) 42.858%,
				rgba(156, 227, 229, 0.53) 57.144%,
				rgba(123, 220, 235, 0.53) 57.144%,
				rgba(123, 220, 235, 0.53) 71.42999999999999%,
				rgba(90, 214, 242, 0.53) 71.43%,
				rgba(90, 214, 242, 0.53) 85.71600000000001%,
				rgba(57, 207, 248, 0.53) 85.716%,
				rgba(57, 207, 248, 0.53) 100.002%
			),
			linear-gradient(
				135deg,
				rgb(246, 99, 200) 0%,
				rgb(246, 99, 200) 12.5%,
				rgb(223, 98, 196) 12.5%,
				rgb(223, 98, 196) 25%,
				rgb(199, 97, 192) 25%,
				rgb(199, 97, 192) 37.5%,
				rgb(176, 96, 188) 37.5%,
				rgb(176, 96, 188) 50%,
				rgb(152, 95, 184) 50%,
				rgb(152, 95, 184) 62.5%,
				rgb(129, 94, 180) 62.5%,
				rgb(129, 94, 180) 75%,
				rgb(105, 93, 176) 75%,
				rgb(105, 93, 176) 87.5%,
				rgb(82, 92, 172) 87.5%,
				rgb(82, 92, 172) 100%
			);
	}

	.wrapper-testimonial h2 {
		font-family: 'architects daughter';
		font-weight: 900;
		font-size: var(--l);
		color: white;
		text-align: center;
		margin-top: 70px;
		width: 90%;
	}
	.wrapper-testimonial h3 {
		font-family: poppins;
		font-weight: 300;
		font-size: var(--m);
		color: rgb(240, 237, 237);
		text-align: center;
		margin-bottom: 50px;
	}
	.wrapper-collapse {
		grid-column: 1/13;
		grid-row: 4;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		margin-bottom: 50px;
		background-color: var(--greyBg);
	}
	.wrapper-collapse h1 {
		text-align: center;
		font-family: epilogue;
		font-size: var(--l);
		font-weight: 700;
		color: var(--bleuAcier);
		margin-top: 50px;
		letter-spacing: -1px;
		margin-bottom: 50px;
		padding: 15px;
	}
	.wrapper-application-explication {
		grid-column: 1/13;
		grid-row: 2;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		margin-bottom: 50px;
	}
	.wrapper-application-explication h1 {
		text-align: center;
		font-family: epilogue;
		font-size: var(--xl);
		font-weight: 700;
		color: var(--bleuAcier);
		letter-spacing: -1px;
		padding: 15px;
	}
	.wrapper-application-explication h2 {
		font-family: 'epilogue';
		font-weight: 700;
		font-size: var(--m);
		color: var(--jauneB);
		text-align: center;
		margin-top: 50px;
		margin-bottom: 20px;
		width: 90%;
	}
	.wrapper-application-explication p {
		font-family: 'poppins';
		font-weight: 300;
		font-size: var(--m);
		color: var(--bleuAcier);
		text-align: center;
		margin-top: 50px;
		width: 60%;
	}
	.wrapper-application-explication ol {
		font-family: 'poppins';
		font-weight: 300;
		font-size: var(--m);
		color: var(--bleuAcier);
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

	@media screen and (min-width: 1400px) and (max-width: 2500px) {
	}

	@media screen and (min-width: 1200px) and (max-width: 1400px) {
	}

	@media screen and (min-width: 992px) and (max-width: 1200px) {
	}

	@media screen and (min-width: 768px) and (max-width: 992px) {
	}

	@media screen and (min-width: 576px) and (max-width: 767px) {
		.wrapper-application-explication p {
			width: 90%;
		}
		.wrapper-application-explication ol {
			width: 90%;
		}
	}

	@media screen and (min-width: 300px) and (max-width: 575px) {
		.wrapper-application-explication p {
			width: 90%;
		}
		.wrapper-application-explication ol {
			width: 90%;
		}
	}
</style>
