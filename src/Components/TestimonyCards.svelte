<script>
	export let title;
	export let p;
	export let img;
	export let alt;
	export let job;
	import stars from '../Assets/png-gralypho/stars.png';
</script>

<div class="card">
	<div class="wrapper-img">
		<div class="wrapper-text-img">
			<img src={img} {alt} class="img" />
			<h3>{title}</h3>
			<h4>{job}</h4>
			<img src={stars} alt="icon d'étoiles d'appréciation" class="stars" />
		</div>
	</div>
	<div class="wrapper-text">
		<h5><span>"</span> {p} <span>"</span></h5>
	</div>
</div>

<style>
	.card {
		position: relative;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 0px;
		max-width: 350px;
		min-height: 360px;
		font-family: epilogue;
		background-color: transparent;
		margin-top: 30px;
		margin-bottom: 20px;
		flex-shrink: 0;
		box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.135);
		z-index: 0;
	}
	.card:hover {
		animation: bounce 0.4s ease-in-out;
	}

	@keyframes bounce {
		0% {
			transform: scale(1) translateY(-2px);
		}
		25% {
			transform: scale(1) translateY(3px);
		}
		50% {
			transform: scale(1) translateY(-1px);
		}
		75% {
			transform: scale(1) translateY(2px);
		}
		100% {
			transform: scale(1) translateY(0);
		}
	}
	.card h3 {
		font-size: 1.3em;
		color: var(--bg);
		font-weight: 700;
		font-family: kanit;
		text-align: left;
	}
	.card h5 {
		font-family: kanit;
		font-size: 1em;
		color: var(--bg);
		font-weight: 500;
		text-align: center;
		line-height: 20px;
		width: 70%;
		margin: 0 auto;
	}
	.card h5 span {
		font-size: 2em;
		font-family: 'Times New Roman', Times, serif;
	}
	.img {
		width: 90px;
		height: 90px;
		margin-bottom: 4px;
	}

	.card h4 {
		font-size: 0.8em;
		color: var(--bg);
		text-align: left;
	}
	.wrapper-text {
		flex-direction: column;
		padding: 10px;
	}
	.wrapper-img {
		display: flex;
		width: auto;
		height: auto;
		padding: 30px;
		gap: 10px;
		align-items: center;
		padding: 20px;
	}
   
	.wrapper-text-img {
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: flex-start;
		margin-left: 10px;
	}
	.stars {
		background-color: rgb(206, 206, 206);
		border-radius: 8px;
		max-width: 100%;
		height: 20px;
		margin-top: 10px;
	}
</style>
