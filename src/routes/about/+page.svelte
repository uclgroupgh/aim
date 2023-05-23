<script>
    import AboutHero from "../../lib/components/AboutHero.svelte";
    import MissionStatement from "../../lib/components/MissionStatement.svelte";
    import AboutThreeColumn from "../../lib/components/AboutThreeColumn.svelte";
    import QuoteBanner from "../../lib/components/QuoteBanner.svelte";
    import AboutStories from "../../lib/components/AboutStories.svelte";
    import { fade } from 'svelte/transition';
</script>

<main transition:fade>
    <AboutHero />
    <MissionStatement />
    <AboutThreeColumn />
    <QuoteBanner />
    <AboutStories />
</main>