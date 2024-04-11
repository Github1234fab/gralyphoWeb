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
		<!-- <img class="card-img" src={img} alt="" /> -->
		<a href={lien} class="card-content" target="_blank">
			<p>{texte}</p>
			<h3>{titre}</h3>
			
		</a>
	</div>
</div>

<style>
	.wrapper-portfolio {
		display: flex;
		flex-direction: column;
		justify-content: left;
		align-items: left;
		min-height: 200px;
		min-width: 320px;
			border-radius: 15px;
			cursor: pointer;
	}
	.wrapper-portfolio h1 {
		font-family: poppins;
		font-size: var(--m);
		color: var(--primary);
		font-weight: 300;
		margin-bottom: 20px;
		letter-spacing: -0.02em;
		margin-top: 40px;
		text-align: left;
	}
	.card-portfolio {
		min-height: 200px;
		min-width: 320px;
		transition: 0.3s ease-in-out;
		position: relative;
		display: flex;
		align-items: center;
		justify-content: center;
		z-index: 0;
		background-color: var(--orange);
		box-shadow: 0px 0px 10px rgba(85, 85, 85, 0.82);
			border-radius: 15px 15px 45px 65px;
	}
	.card-portfolio:hover {
		box-shadow: none;
			border-radius: 15px 56px 42px 67px;
	}
	.card-portfolio:hover .card-img {
		opacity: 1;
	}
	.card-portfolio:hover .card-content {
		opacity: 1;
	}
	.card-portfolio:hover .card-content::after {
		transform: translateX(220px);
	}
	.card-content {
		height: 200px;
		width: 100%;
		z-index: 2;
		position: relative;
		display: flex;
		flex-direction: column;
		justify-content: left;
		align-items: left;
		padding: 10px;
		background: linear-gradient(45deg, var(--bleuAcier), var(--bgHero));
	border-radius: 15px 56px 42px 67px;
		opacity: 1;
		transition: opacity 0.7s ease-in-out;
		overflow: hidden;
		box-shadow: 0px 0px 10px rgba(221, 220, 220, 0.512);
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
		left: 0px;
		width: 100px;
		left: 0px;
		transform: translateX(330px);
		background: var(--CTA2);
		transition: 0.6s ease-in-out;
		display: flex;
		align-items: center;
		justify-content: center;
		font-family: 'Font Awesome 5 Free';
		font-weight: 900;
		font-size: 1.5em;
		color: white;
		transition: 0.9s ease-in-out;
		box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.32);
			border-radius: 15px 56px 42px 67px;
	}
	.card-img {
		/* border: rgb(209, 209, 209) solid 2px; */

		height: 40%;
		width: 30%;
		position: absolute;
		top: 56%;
		bottom: 0;
		left: 3%;
		right: 0;
		object-fit: cover;
		border-radius: 8px;
		z-index: 3;
		opacity: 0;
		transition: 1.9s ease-in-out;
		padding: 0px;
		box-shadow: inset 0px 0px 10px rgba(0, 0, 0, 0.234);
	}
	.card-content h3 {
		font-size: var(--l);
		font-family: "Red Hat Display";
		font-weight: 700;
		color: white;
		text-align: left;
		margin-left: 5px;
		margin-top: 5px;
		text-transform: uppercase;
	}
	.card-content p {
		text-align: left;
		font-size: var(--m);
		font-family: poppins;
		font-weight: 400;
		color: rgb(229, 229, 229);
		margin-left: 5px;
		width: 50%;
		margin-top: 20px;
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
