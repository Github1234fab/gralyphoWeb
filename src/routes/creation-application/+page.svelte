<script>
	import Header from '../../sections/Header.svelte';
	import Mouse from '../../Components/Mouse.svelte';
	import CardTarifs from '../../Components/CardTarifs.svelte';
	import FaqLink from '../../Components/FaqLink.svelte';

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
</script>

<Header />
<Mouse />

<main>
	<h1 class="title">Notre offre de création d'application</h1>
	{#each pwa as item}
		<CardTarifs name={item.name} h2={item.h2} h3={item.h3} h4={item.h4} li={item.li} tarif={item.tarif} />
	{/each}
	{#each native as item}
		<CardTarifs name={item.name} h2={item.h2} h3={item.h3} h4={item.h4} li={item.li} tarif={item.tarif}/>
	{/each}
	<div class="wrapper__faqLink">
		<FaqLink />
	</div>
</main>

<style>
	main {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		gap: 60px;
		padding: 20px;
		height: auto;
		background-color: var(--primary);
		font-family: epilogue;
	}

	.title {
		font-family: var(--Geologica);
		font-size: 2.5rem;
		color: var(--whiteGrey);
		font-weight: 700;
		text-align: center;
		letter-spacing: -2px;
		margin-top: 50px;
	}
	/* .wrapper__hero {
		display: flex;
		align-items: baseline;
		justify-content: baseline;
		flex-direction: column;
		width: 95%;
		height: auto;
		margin: 0 auto;
		padding: 10px;
		gap: 30px;
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
	.wrapper__hero h3 {
		font-size: 1.5rem;
		letter-spacing: -1px;
		font-weight: 300;
		color: var(--whiteGrey);
	}
	.wrapper__hero p {
		font-family: var(--Red);
		font-size: 1rem;
		font-weight: 400;
		padding: 10px;
		line-height: 30px;
		color: var(--whiteGrey);
	} */

	/* .wrapper__faqLink a {
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
	.wrapper__faqLink {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	} */
</style>
