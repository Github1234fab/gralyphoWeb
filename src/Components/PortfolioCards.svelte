<script>
	export let titre;
	export let texte;
	export let img;
</script>

<div class="card-portfolio">
	<div class="card-content">
		<h3>{titre}</h3>
		<p>{texte}</p>
	</div>
	<img class="card-img" src={img} alt="" />
</div>

<style>
	.card-portfolio {
		position: relative;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: flex-end;
		width: 280px;
		min-height: 300px;
		background-color: #f1f1f1;
		border-radius: 10px;
		box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
		transition: 0.3s;
		margin: 10px;
		padding: 10px;
		box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.143);
		z-index: 0;
	}
	/* 
	.card:hover {
		box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
		animation: vertical 0.6s ease-in-out;
	} */
	.card-content {
		position: relative;
		display: flex;
		flex-direction: column;
		justify-content: left;
		align-items: left;
		width: 95%;
		padding: 10px;
		z-index: 2;
		background-color: white;
		margin-top: 100px;
		border-radius: 10px;
		opacity: 0;
		transition: opacity 0.7s ease-in-out;
		overflow: hidden;
		box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.813);
	}
	.card-content::after {
		position: absolute;
		content: '\f144';
		top: 0;
		bottom: 0;
		left: 100%;
		right: 0;
		background: var(--blue2);
		width: 20%;
		transition: 0.6s ease-in-out;
		display: flex;
		align-items: center;
		justify-content: center;
		font-family: 'Font Awesome 5 Free';
		font-weight: 900;
		font-size: 20px;
		color: white;
		transition: 1.5s ease-in-out;
		box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.32);
	}
	.card-portfolio:hover .card-content {
		opacity: 1;
	}
	.card-portfolio:hover .card-content::after {
		left: 80%;
	}
	.card-content h3 {
		font-size: var(--m);
		font-family: Heebo;
		font-weight: 700;
		color: var(--jauneB);
		text-align: left;
	}
	.card-content p {
		text-align: left;
		font-size: var(--m);
		font-family: poppins;
		font-weight: 400;
		color: var(--grisF);
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
		border-radius: 10px;
		box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.421);
		z-index: 0;
		opacity: 0.7;
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
