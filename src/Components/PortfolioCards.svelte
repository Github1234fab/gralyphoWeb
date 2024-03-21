<script>
	export let titre;
	export let texte;
	export let img;
	export let lien;
</script>

<div class="card-portfolio">
	<a href={lien} class="card-content" target="_blank">
		<!-- <div class="card-content"> -->
		<h3>{titre}</h3>
		<p>{texte}</p>
		<!-- </div> -->
	</a>
	<img class="card-img" src={img} alt="" />
</div>

<style>
	.card-portfolio {
		position: relative;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		width: 280px;
		min-height: 300px;
		background-color: #f8f6f6;
		border-radius: 10px;
		box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
		transition: 0.3s;
		margin: 10px;
		padding: 10px;
		box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.143);
		border-radius: 40px;
		z-index: 0;
		margin-bottom: 100px;
	}
	.card-portfolio:hover .card-img {
		opacity: 0.2;
	}

	.card-content {
		position: relative;
		display: flex;
		flex-direction: column;
		justify-content: left;
		align-items: left;
		width: 100%;
		min-height: 100px;
		padding: 10px;
		z-index: 2;
		background-color: white;
		border-radius: 40px;
		opacity: 0;
		transition: opacity 0.7s ease-in-out;
		overflow: hidden;
		border: 5px solid var(--greyBg);
		box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.32);
		text-decoration: none;
		color: inherit;
	}
	.card-content::after {
		position: absolute;
		content: '\f144';
		top: 0;
		bottom: 0;
		left: 100%;
		right: 0px;
		background: var(--CTA2);
		width: 50px;
		transition: 0.6s ease-in-out;
		display: flex;
		align-items: center;
		justify-content: center;
		font-family: 'Font Awesome 5 Free';
		font-weight: 900;
		font-size: 20px;
		color: white;
		transition: 0.7s ease-in-out;
		box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.32);
	}

	.card-portfolio:hover .card-content {
		opacity: 1;
	}
	.card-portfolio:hover .card-content::after {
		left: 85%;
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
	}
	.card-img {
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		width: 60%;
		height: 60%;
		margin: auto auto;
		object-fit: cover;
		border-radius: 40px;
		z-index: 0;
		opacity: 1;
		transition: 1.3s ease-in-out;
		padding: 10px;
		box-shadow: inset 0px 0px 10px rgba(0, 0, 0, 0.234);
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
