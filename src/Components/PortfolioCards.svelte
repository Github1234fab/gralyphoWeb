<script>
	export let titre;
	export let texte;
	export let img;
	export let lien;
	export let type;
</script>

<div class="wrapper-portfolio">
	<h1>{type}</h1>
	<div class="card-portfolio">
		<img class="card-img" src={img} alt="" />
		<a href={lien} class="card-content" target="_blank">
			<h3>{titre}</h3>
			<p>{texte}</p>
		</a>
	</div>
</div>

<style>
	.wrapper-portfolio {
		display: flex;
		flex-direction: column;
		justify-content: left;
		align-items: left;
	}
	.wrapper-portfolio h1 {
		font-family: Epilogue;
		font-size: var(--m);
		color: var(--primary);
		font-weight: 700;
		margin-bottom: 20px;
		letter-spacing: -0.02em;
		margin-top: 40px;
		text-align: left;
	}
	.card-portfolio {
		transition: 0.7s ease-in-out;
		position: relative;
		display: flex;
		align-items: center;
		justify-content: center;
		z-index: 0;
		background-color: transparent;
		min-height: 300px;
		min-width: 300px;

		box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.32);
	}
	.card-portfolio:hover {
		box-shadow: none;
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
		min-height: 250px;
		min-width: 200px;
		padding: 10px;
		background-color: white;
		border-radius: 0px;
		opacity: 0;
		transition: opacity 0.7s ease-in-out;
		overflow: hidden;
		border: 2px solid var(--CTA2);
		box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.32);
		text-decoration: none;
		color: inherit;
		cursor: pointer;
	}
	.card-content::after {
		z-index: 2;
		position: absolute;
		content: '\f144';
		top: 0;
		bottom: 0;
		right: 0px;
		left: 0;
		width: auto;
		left: 250px;
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
		height: 100%;
		object-fit: cover;
		border-radius: 0px;
		z-index: 2;
		opacity: 1;
		transition: 0.7s ease-in-out;
		padding: 0px;
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
