<script>
    import Typewriter from 'typewriter-effect/dist/core';
    import { onMount } from 'svelte';

    onMount(() => {
        new Typewriter('#typewriter', {
            strings: ["Création de sites internet", "Création d'application", "Gestion des Medias Sociaux", "Refonte", "SEO", "Design" ],
            autoStart: true,
            loop: true,
        });
    });
</script>

<div id="typewriter"></div>