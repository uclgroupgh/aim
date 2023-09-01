<script>
    import { fade } from 'svelte/transition';
    import ParallaxHeader from "../../../lib/components/ParallaxHeader.svelte";
    import Paragragh from '../../../lib/components/Paragragh.svelte';
    import TwoColumnCardGrid from '../../../lib/components/TwoColumnCardGrid.svelte';
</script>
<style lang="postcss">
    hr {
        @apply border-primary_red_dark border-2 mx-64 mb-8;
    }
</style>
<main transition:fade>
    <ParallaxHeader 
        parallax_bgd={'bg-sponsor_hero'}
        heading={'Sponsors'}
    />
    <Paragragh 
        content={'The Accra Marathon would like to extend special thanks to the following sponsors.'}
    />
    <hr/>
    <TwoColumnCardGrid 
        card_one_title={'First National Bank'}
        card_one_subtitle={'Main sponsor of the Accra Marathon'}
        card_one_link_text={'Learn more'}
        card_one_link_url={'https://www.firstnationalbank.com.gh/news-insight/index.html'}
        card_one_bgd={'bg-impact_hero'}
        card_one_logo={'/images/fnb_white.png'}
        card_two_title={'Company Name'}
        card_two_subtitle={'Official beverage sponsor of the Accra Marathon'}
        card_two_link_text={'Learn more'}
        card_two_link_url={'#'}
        card_two_bgd={'bg-impact_hero'}
        card_two_logo={'/images/logo-placeholder.png'}
    />
    <TwoColumnCardGrid 
        card_one_title={'Company Name'}
        card_one_subtitle={'Main apparel sponsor of the Accra Marathon'}
        card_one_link_text={'Learn more'}
        card_one_link_url={'#'}
        card_one_bgd={'bg-impact_hero'}
        card_one_logo={'/images/logo-placeholder.png'}
        card_two_title={'Company Name'}
        card_two_subtitle={'Official sponsor of the Accra Marathon'}
        card_two_link_text={'Learn more'}
        card_two_link_url={'#'}
        card_two_bgd={'bg-impact_hero'}
        card_two_logo={'/images/logo-placeholder.png'}
    />
</main>