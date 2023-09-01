<script>
    import { fade } from 'svelte/transition'
    import SecondHero from '../../../lib/components/SecondHero.svelte'
</script>
<main transition:fade>
    <SecondHero 
    bgd_image={'bg-register_hero'}
    title={'Champions'}
    subtitle={'Sharing the results and stories of our past winners and participants'}
    />
</main>