<script>
    import { fade } from 'svelte/transition';
    import ParallaxHeader from "../../../lib/components/ParallaxHeader.svelte";
</script>

<main transition:fade>
    <ParallaxHeader 
        parallax_bgd={'bg-sponsor_hero'}
        heading={'Sponsors'}
    />
</main>