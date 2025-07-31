<script>
	export let text = '';
	export let link = '';
</script>

<a href={link} class="link-contact">
	<span class="contact">{text}</span>
</a>

<style>
	.link-contact {
		text-decoration: none;
		margin-top: 0.5rem;
		margin-bottom: 2rem;
	}

	.contact {
		border: 1px solid var(--grey);
		padding: 10px 20px;
		border-radius: 20px;
		color: white;
		font-family: var(--Red);
		background-color: var(--green);
		
	}

	.contact:hover {
		background-color: var(--whiteGrey);
		border: 1px solid grey;
		color: var(--primary);
	}

	.contact:active {
		background-color: var(--primary);
		color: var(--whiteGrey);
	}
	.link-contact {
		color: var(--whiteGrey);
		font-size: 1em;
		font-weight: 400;
		text-decoration: none;
	}
	.link-contact:hover {
		color: var(--primary);
	}
</style>
