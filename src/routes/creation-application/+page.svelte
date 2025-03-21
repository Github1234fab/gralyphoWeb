<script>
	import Header from '../../sections/Header.svelte';
	import Mouse from '../../Components/Mouse.svelte';
	import CardTarifs from '../../Components/CardTarifs.svelte';
	import FaqLink from '../../Components/FaqLink.svelte';
	import Images from '../../Components/ImagesBlocks.svelte';
	import Bird from '../../Assets/bird3.jpeg';
	import Woman from '../../Assets/smartphoneTech.jpeg';
	import Smartphone from '../../Assets/compteur7.jpeg';

	let pwa = [
		{
			name: 'PWA',
			h2: 'Application Web,\n multiplateforme, \n légère à prix doux',
			h3: 'Idéal pour : Entreprise, indépendant, commerce, évènementiel, Institution',
			h4: ['Délai : 15 jours', 'IOS, Android et Web', ' Notification push'],

			li: ['Accessible sans téléchargement', 'Compatible multi-plateforme (mobile, tablette, desktop)', 'Performante & rapide avec mise en cache', 'SEO-friendly et indexable par Google', 'Mode hors-ligne grâce au Service Worker', "Mises à jour instantanées sans validation d'un store", 'Coût de développement réduit (un seul code à maintenir)', 'Notifications push disponibles', 'Sécurisée via HTTPS'],
			tarif: '6999 €'
		}
	];

	let native = [
		{
			name: 'NATIVE',
			h2: 'Application native, \n IOS et ANDROID, \n puissante et performante',
			h3: 'Idéal pour : Indépendant, créateur, artiste, marque, identité forte',
			h4: ['Délai : 3 semaines', 'Android et Ios', ' Notification push'],
			li: [
				'Expérience utilisateur optimisée et fluide',
				'Accès complet aux fonctionnalités du téléphone (GPS, Bluetooth, NFC, caméra...)',
				'Meilleures performances pour les apps lourdes (jeux, AR/VR, montage vidéo)',
				'Notifications push plus puissantes et sans restrictions',
				'Mode hors-ligne complet avec stockage local avancé',
				'Présence sur les stores (App Store & Google Play), gage de crédibilité',
				'Monétisation facilitée via achats in-app et abonnements',
				'Sécurité renforcée grâce aux validations des stores'
			],
			tarif: '9999 €'
		}
	];

	let images = [Bird, Woman, Smartphone];
</script>

<Header />
<Mouse />


<main>
	<div class="wrapper__images">
		<Images img={images} alt="image" />
	</div>
	<div class="wrapper__hero">
		<h1 class="title">Applications</h1>
		<h2>PWA ou native ?</h2>
		<p>Il existe deux grands types d'applications, les PWA et les natives. Les premières sont des applications web, accessibles depuis un navigateur, qui s'adaptent à tous les supports. Les secondes sont des applications mobiles, téléchargeables sur les stores, qui offrent une expérience utilisateur optimale, car elles sont dédiées à un seul support. Les PWA sont plus rapides à développer et moins chères, tandis que les applications natives sont plus performantes et plus puissantes. Le choix entre les deux dépend de vos besoins et de votre budget.
		</p>
		

	
		<div class="wrapper__component">
			<h2>Notre offre d'applications PWA</h2>
				
		<p>
		L'application PWA est plus légère, plus rapide à développer et donc, moins chère. Elle est accessible depuis un navigateur et se télécharge depuis celui-ci sur votre smartphone. Elle s'adapte à tous les supports, c'est sa grande force. Elle est performante et rapide, SEO-friendly et indexable par Google. Elle permet de mettre en cache les données pour un mode hors-ligne et de recevoir des notifications push. Elle est sécurisée via HTTPS et son coût de développement est réduit. Elle est idéale pour les entreprises, les indépendants, les commerces, les évènementiels et les institutions. Une application PWA peut se télécharger depuis microsoft application PWA, car Microsoft a intégré les PWA dans son store.
		</p>
		{#each pwa as item}
		<CardTarifs name={item.name} h2={item.h2} h3={item.h3} h4={item.h4} li={item.li} tarif={item.tarif} />
	{/each}
	
	</div>

		<div class="wrapper__component">
			<h2>Notre offre avec CMS Headless</h2>
					
		<p>
			L'application native est plus puissante et performante. Elle est dédiée à un seul support, soit IOS, soit Android. Elle offre une expérience utilisateur optimale et fluide.
			Elle permet un accès complet aux fonctionnalités du téléphone (GPS, Bluetooth, NFC, etc) et offre de meilleures performances pour les applications lourdes (jeux, AR/VR, montage vidéo). Elle permet des notifications push plus puissantes et sans restrictions, un mode hors-ligne complet avec stockage local avancé et une présence sur les stores (App Store & Google Play), gage de crédibilité. Elle facilite la monétisation via des achats in-app et des abonnements et offre une sécurité renforcée grâce aux validations des stores. Elle est idéale pour les indépendants, les créateurs, les artistes, les marques et les identités fortes.
		</p>
		{#each native as item}
		<CardTarifs name={item.name} h2={item.h2} h3={item.h3} h4={item.h4} li={item.li} tarif={item.tarif}/>
	{/each}
	</div>
		<div class="wrapper__faqLink">
			<FaqLink />
		</div>
	</div>
</main>

<style>
	main {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		padding: 15px;
		height: auto;
		background-color: var(--primary);
	}

	.title {
		font-family: var(--Geologica);
		font-size: 5.5rem;
		color: var(--whiteGrey);
		font-weight: 700;
		text-align: left;
		letter-spacing: -2px;
		margin-top: 50px;
	}
	.wrapper__hero {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		width: 100%;
		height: auto;
		padding: 10px;
		margin-top: 50px;
		gap: 40px;
		border-radius: 8px;
		color: var(--primary);
		box-shadow: inset 0px 0px 10px 1px rgba(0, 0, 0, 0.528);
	}
	 .wrapper__hero h2 {
		font-family: var(--Red);
		font-size: 1.2rem;
		letter-spacing: -1px;
		font-weight: 900;
		color: var(--whiteGrey);
		margin-top: 10px;
	} 
	
	.wrapper__hero p {
		font-family: var(--Red);
		font-size: 1rem;
		font-weight: 400;
		padding: 10px;
		line-height: 30px;
		color: var(--whiteGrey);
		width: 80%;
		text-align: justify;
	}
	.wrapper__component {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		width: 100%;
		height: auto;
		padding: 10px;
		margin-top: 60px;
		gap: 40px;
		border-radius: 8px;
		color: var(--primary);
		box-shadow: inset 0px 0px 10px 1px rgba(0, 0, 0, 0.528);
	}
	.wrapper__component h2 {
		font-family: var(--Red);
		font-size: 3rem;
		letter-spacing: -1px;
		font-weight: 900;
		color: var(--whiteGrey);
		margin-top: 10px;
	}

	@media screen and (max-width: 768px) {
		.title {
			font-size: 3rem;
		}
		.wrapper__hero {
			margin-top: 200px;
		}
	}
	@media screen and (max-width: 375px) {
		.wrapper__hero {
			margin-top:120px;
		}
		.wrapper__hero p {
			width: 100%;
		}
		.wrapper__component h2 {
		font-family: var(--Red);
		font-size: 2.7rem;
		letter-spacing: -1px;
		font-weight: 900;
		color: var(--whiteGrey);
		margin-top: 10px;
	}
	}
	
</style>

























