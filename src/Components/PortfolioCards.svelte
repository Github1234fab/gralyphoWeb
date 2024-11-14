<script>
	export let titre;
	// export let texte;
	export let lien;
	export let type;
</script>

<div class="wrapper-portfolio">
	<h1 class="title">{type}</h1>
	<a href={lien} class="card-content" target="_blank">
			<h3>{titre}</h3>
		</a>
	<!-- <div class="card-portfolio">
		
	</div> -->
</div>

<style>
	.wrapper-portfolio {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		min-height: 150px;
		min-width: 250px;
		cursor: pointer;
		border-radius: 20px;
		border: 1px solid var(--cta);
	}
	.wrapper-portfolio h3 {
		font-family: var(--Kanit);
		font-size: 1.1rem;
		color: var(--cta);
		font-weight: 400;
		letter-spacing: -0.02em;
		margin-top: -30px;
		text-align: left;	
	}
	/* .card-portfolio {
		min-height: 200px;
		width: 300px;
		transition: 0.3s ease-in-out;
		position: relative;
		display: flex;
		align-self: center;
		align-items: center;
		justify-content: center;
		z-index: 0;
		background-image: url("../Assets/bgTwo.png");
		border-radius: 12px;
		background: url('../Assets/bgTwo.png'), var(--primary);
		background-size: contain;
		box-shadow: inset 0px 0px 7px 7px rgb(0, 0, 0);
	}
	.card-portfolio:hover {
		box-shadow: none;
	}

	.card-portfolio:hover .card-content {
		opacity: 1;
	}
	.card-portfolio:hover .card-content::after {
		transform: translateX(200px);
	} */
	/* .card-portfolio:active .card-content::after {
		transform: translateX(200px);
	} */
	/* .card-content {
		height: 180px;
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
		box-shadow: inset 0px 0px 15px 4px rgba(0, 0, 0, 0.917);
		padding: 50px;
		border-radius: 12px;
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
		transform: translateX(210px);
		background: var(--cta);
		transition: 0.6s ease-in-out;
		display: flex;
		align-items: center;
		justify-content: center;
		font-family: 'Font Awesome 5 Free';
		font-weight: 900;
		font-size: 1.5em;
		color: white;
		transition: 0.9s ease-in-out;
		box-shadow: 0px 0px 20px 20px black;
	}
	.card-content::before {
		z-index: 2;
		position: absolute;
		content: '\f144';
		top: 0;
		bottom: 0;
		right: 0px;
		left: 0px;
		width: 100px;
		left: 0px;
		transform: translateX(200px);
		background: var(--cta);
		transition: 0.6s ease-in-out;
		display: flex;
		align-items: center;
		justify-content: center;
		font-family: 'Font Awesome 5 Free';
		font-weight: 900;
		font-size: 1.5em;
		color: white;
		transition: 0.9s ease-in-out;
		box-shadow: 0px 0px 20px 20px black;
		display: none;
	} */

	.title {
		font-size: 1.3rem;
		font-family: var(--Geologica);
		font-weight: 700;
		color: var(--secondary);
		text-align: center;
		text-transform: capitalize;
		padding: 20px;
		letter-spacing: -1px;
		margin-bottom: 20px;
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
	@media screen and (max-width: 784px) {
		/* .card-portfolio {
			min-width: 200px;
		} */

		.card-content {
			padding: 20px;
		}
		.card-content::after {
			display: none;
		}
		.card-content::before {
			z-index: 2;
			position: absolute;
			content: '\f144';
			bottom: 0;
			right: 0px;
			left: 0px;
			width: 100px;
			top: -1px;
			transform: translateX(200px);
			background: var(--cta);
			transition: 0.6s ease-in-out;
			display: flex;
			align-items: center;
			justify-content: center;
			align-content: center;
			font-family: 'Font Awesome 5 Free';
			text-align: center;
			font-weight: 900;
			font-size: 1.5em;
			color: white;
			transition: 0.9s ease-in-out;
			box-shadow: 0px 0px 20px 20px black;
			display: block;
		}
		.wrapper-portfolio h3 {
			margin-top: 0px;
		}
	}
</style>
