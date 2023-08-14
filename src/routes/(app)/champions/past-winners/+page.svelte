<script>
    import { fade } from 'svelte/transition';
    import TwoColumnHero from '../../../../lib/components/TwoColumnHero.svelte';
    import Paragragh from '../../../../lib/components/Paragragh.svelte';
    import ParallaxHeader from '../../../../lib/components/ParallaxHeader.svelte';
    import ResultsAccordion from '../../../../lib/components/ResultsAccordion.svelte';
</script>
<main transition:fade>
    <TwoColumnHero
        bgd_image={'bg-past_winners_two_col_hero'}
        text_col_header={'Previous winner results'}
        flex_direction={'flex-row-reverse'}
        btnText={'See the latest results'}
        btnLink={'#results'}
        text_col_bgd={'bg-gray_hero_bg'}
    />
    <Paragragh 
        content={'The Accra Marathon is an annual long-distance running event that was first held in 1987 in Ghana\'s capital city and has since become one of the biggest marathons in West Africa, attracting participants from all over the world.  See all finisher results since 1987.'}
    />
    <ParallaxHeader 
        parallax_bgd={'bg-parallax_past_winners'}
        heading={'Race results'}
    />
    <ResultsAccordion /> 
</main>