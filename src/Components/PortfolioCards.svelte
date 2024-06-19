<script>
	export let titre;
	// export let texte;
	export let lien;
	export let type;
</script>

<div class="wrapper-portfolio">
	<div class="card-portfolio">
		<a href={lien} class="card-content" target="_blank">
			<h1>{type}</h1>
			<!-- <p>{texte}</p> -->
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
		cursor: pointer;
		border-radius: 20px;
		
	}
	.wrapper-portfolio h1 {
		font-family: poppins;
		font-size: var(--m);
		color: white;
		font-weight: 200;
		letter-spacing: -0.02em;
		margin-top: 10px;
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
		border: 1px white solid;
		border-radius: 5px;
	}
	.card-portfolio:hover {
		box-shadow: none;
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
		padding: 30px;
		opacity: 1;
		transition: opacity 0.7s ease-in-out;
		overflow: hidden;
		text-decoration: none;
		color: inherit;
		cursor: pointer;
		box-shadow: inset 0px 0px 15px 4px black;
		padding: 50px;
		border-radius: 5px;
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
		background: var(--CTA-jaune);
		transition: 0.6s ease-in-out;
		display: flex;
		align-items: center;
		justify-content: center;
		font-family: 'Font Awesome 5 Free';
		font-weight: 900;
		font-size: 1.5em;
		color: white;
		transition: 0.9s ease-in-out;
		box-shadow: 0px 0px 20px 10px black;
		/* border-radius: 15px 56px 42px 67px; */
	}

	.card-content h3 {
		font-size: var(--l);
		font-family: 'heebo';
		font-weight: 500;
		color: var(--bleuAcier);
		text-align: left;
		text-transform: capitalize;
	}
	/* .card-content p {
		text-align: left;
		font-size: var(--m);
		font-family: poppins;
		font-weight: 400;
		text-align: center;
		color: rgb(229, 229, 229);
		margin-top: 20px;
	} */
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
