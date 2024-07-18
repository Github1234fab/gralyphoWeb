<script>
    import Typewriter from 'typewriter-effect/dist/core';
    import { onMount } from 'svelte';

    onMount(() => {
        new Typewriter('#typewriter', {
            strings: ["Création de sites internet", "Création d'application", "Gestion des Medias Sociaux", "Refonte", "SEO", "SEA" ,"Design", "Marketing Digital" ],
            autoStart: true,
          loop: true,
            delay: 50, // Vitesse de frappe en millisecondes
            deleteSpeed: 10, 
        });
    });
</script>

<div id="typewriter"></div>