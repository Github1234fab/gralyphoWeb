<h2 class="title">Découvrez notre offre</h2>
<div class="wrapper__links">
	<a href="/creation-site-internet">Notre offre de site internet</a>
	<a class="bg-color" href="/creation-application">Notre offre d'application</a>
</div>

<style>
	a {
		font-family: var(--Geologica);
		font-size: var(--m);
		color: var(--whiteGrey);
		background-color: var(--primary);
		font-weight: 700;
		letter-spacing: -1px;
		text-align: center;
		margin-top: 0px;
		padding: 25px;
		border-radius: 8px;
		box-shadow: 0px 30px 20px rgba(0, 0, 0, 0.227);
	}
	.bg-color {
		background-color: var(--cta);
	}
	a:hover {
		background-color: var(--blue);
	}
	.wrapper__links {
		display: flex;
		gap: 20px;
		justify-content: center;
		align-items: center;
		width: 80%;
		margin: 0 auto;
		margin-bottom: 50px;
	}
    .title{
        font-family: var(--Geologica);
        font-size: var(--l);
        color: var(--primary);
        font-weight: 900;
        margin-bottom: 10px;
        letter-spacing: -1px;
        text-align: center;
        line-height: 35px;
        margin-top: 50px;
        padding: 25px
    }

	@media screen and (max-width: 768px) {
		.wrapper__links {
			flex-direction: column;
		}
	}
</style>
