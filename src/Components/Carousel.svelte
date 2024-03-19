<script>
	import Cards from '../Components/CarousselCards.svelte';
	import flag from '../assets/french2.png';

	let cardsInfo = [
		{
			key: 1,
			title: 'SpaceShip Agency',
			img: flag,
			description: 'kcdjbkzdbckzdhbc'
		},
		{
			key: 2,
			title: 'SpaceShip Agency',
			description: 'kcdjbkzdbckzdhbc',
			img: flag
		},
		{
			key: 3,
			title: 'SpaceShip Agency',
			description: 'kcdjbkzdbckzdhbc',
			img: flag
		},
		{
			key: 4,
			title: 'SpaceShip Agency',
			description: 'kcdjbkzdbckzdhbc',
			img: '../assets/french.png'
		},
		{
			key: 5,
			title: 'SpaceShip Agency',
			description: 'kcdjbkzdbckzdhbc',
			img: '../assets/french.png'
		},
		{
			key: 6,
			title: 'SpaceShip Agency',
			description: 'kcdjbkzdbckzdhbc',
			img: '../assets/french.png'
		},
		{
			key: 7,
			title: 'SpaceShip Agency',
			description: 'kcdjbkzdbckzdhbc',
			img: '../assets/french.png'
		},
		{
			key: 8,
			title: 'SpaceShip Agency',
			description: 'kcdjbkzdbckzdhbc',
			img: '../assets/french.png'
		}
	];
</script>

<div id="carouselExampleIndicators" class="carousel slide dim">
	<div class="carousel-indicators">
		<button
			type="button"
			data-bs-target="#carouselExampleIndicators"
			data-bs-slide-to="0"
			class="active"
			aria-current="true"
			aria-label="Slide 1"
		></button>
		<button
			type="button"
			data-bs-target="#carouselExampleIndicators"
			data-bs-slide-to="1"
			aria-label="Slide 2"
		></button>
		<button
			type="button"
			data-bs-target="#carouselExampleIndicators"
			data-bs-slide-to="2"
			aria-label="Slide 3"
		></button>
	</div>
	<div class="carousel-inner">
		{#each cardsInfo as card, index}
			<div class="carousel-item {index === 0 ? 'active' : ''}">
				<Cards title={card.title} img={card.img} description={card.description} />
			</div>
		{/each}
		<div class="carousel-item active"></div>
	</div>
	<button
		class="carousel-control-prev"
		type="button"
		data-bs-target="#carouselExampleIndicators"
		data-bs-slide="prev"
	>
		<span class="carousel-control-prev-icon" aria-hidden="true"></span>
		<span class="visually-hidden">Previous</span>
	</button>
	<button
		class="carousel-control-next"
		type="button"
		data-bs-target="#carouselExampleIndicators"
		data-bs-slide="next"
	>
		<span class="carousel-control-next-icon" aria-hidden="true"></span>
		<span class="visually-hidden">Next</span>
	</button>
</div>

<style>
	.dim {
		width: 30%;
		margin-top: 300px;
		margin-left: 100px;
	}
</style>
