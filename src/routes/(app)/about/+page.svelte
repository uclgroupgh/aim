<script>
    import MissionStatement from "../../../lib/components/MissionStatement.svelte";
    import AboutThreeColumn from "../../../lib/components/AboutThreeColumn.svelte";
    import QuoteBanner from "../../../lib/components/QuoteBanner.svelte";
    import AboutStories from "../../../lib/components/AboutStories.svelte";
    import { fade } from 'svelte/transition';
    import SecondHero from "../../../lib/components/SecondHero.svelte";
</script>

<main transition:fade>
    <SecondHero 
        bgd_image={'bg-about_hero'}
        title={'About us'}
        subtitle={'The Accra Marathon promotes sportsmanship, healthy living and community engagement in celebrating the African spirit'}
        btnLink={'/champions/stories'}
        btnText={'Read Stories from Participants'}
        captionText={'Flashback from the 2017 Accra Marathon'}
        needsScrollTo
    />
    <MissionStatement />
    <AboutThreeColumn />
    <QuoteBanner />
    <AboutStories />
</main>