<script>
	export let titre;
	export let texte;
	export let img;
	export let lien;
</script>

<div class="card-portfolio">
	<a href={lien} class="card-content" target="_blank">
		<h3>{titre}</h3>
		<p>{texte}</p>
	</a>
	<img class="card-img" src={img} alt="" />
</div>

<style>
	.card-portfolio {
		position: relative;
		display: flex;
		align-items: center;
		justify-content: center;
		z-index: 0;
	}
	.card-portfolio:hover .card-img {
		opacity: 0;
	}
	.card-portfolio:hover .card-content {
		opacity: 1;
	}
	.card-portfolio:hover .card-content::after {
		left: 80%;
	}
	.card-content {
		z-index: 2;
		position: relative;
		display: flex;
		flex-direction: column;
		justify-content: left;
		align-items: left;
		width: 100%;
		height: 300px;
		padding: 30px;
		background-color: white;
		border-radius: 40px;
		opacity: 0;
		transition: opacity 0.7s ease-in-out;
		overflow: hidden;
		border: 5px solid var(--greyBg);
		box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.32);
		text-decoration: none;
		color: inherit;
		cursor: pointer;
	}
	.card-content::after {
		position: absolute;
		content: '\f144';
		top: 0;
		bottom: 0;
		left: 100%;
		right: 0px;
		background: var(--CTA2);
		transition: 0.6s ease-in-out;
		display: flex;
		align-items: center;
		justify-content: center;
		font-family: 'Font Awesome 5 Free';
		font-weight: 900;
		font-size: 1.5em;
		color: white;
		transition: 0.7s ease-in-out;
		box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.32);

	}
	.card-img {
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		width: 100%;
		height: 300px;
		object-fit: cover;
		border-radius: 40px;
		z-index: 1;
		opacity: 1;
		transition: 0.7s ease-in-out;
		padding: 10px;
		box-shadow: inset 0px 0px 10px rgba(0, 0, 0, 0.234);
	}
	.card-content h3 {
		font-size: var(--m);
		font-family: Heebo;
		font-weight: 700;
		color: var(--jauneB);
		text-align: left;
		margin-left: 5px;
		margin-top: 5px;
	}
	.card-content p {
		text-align: left;
		font-size: var(--m);
		font-family: poppins;
		font-weight: 400;
		color: var(--grisF);
		margin-left: 5px;
		width: 50%;
	}
	@keyframes vertical {
		0% {
			transform: translateY(0);
		}
		50% {
			transform: translateY(10px);
		}
		100% {
			transform: translateY(0);
		}
	}
</style>
