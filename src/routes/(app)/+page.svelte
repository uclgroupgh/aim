<script>
    import Hero from '../../lib/components/Hero.svelte'
    import Collage from '../../lib/components/Collage.svelte'
    import Video from '../../lib/components/Video.svelte'
    import TextImageLeft from '../../lib/components/TextImageLeft.svelte'
    import TextImageRight from '../../lib/components/TextImageRight.svelte'
    import NewsletterSignup from '../../lib/components/NewsletterSignup.svelte'
    import Sponsors from '../../lib/components/Sponsors.svelte'
    import { fade } from 'svelte/transition'
    import MissionSection from '../../lib/components/MissionSection.svelte';
    import FourColumnSection from '../../lib/components/FourColumnSection.svelte';
    import RegisterSection from '../../lib/components/RegisterSection.svelte';
    import MapSection from '../../lib/components/MapSection.svelte';
</script>

<main transition:fade>
    <Hero />
    <!-- <NewsletterSignup /> -->
    <!-- <Video />
    <TextImageLeft />
    <Collage />
    <TextImageRight />
    <Sponsors /> -->
    <MissionSection />
    <FourColumnSection />
    <MapSection />
    <RegisterSection />
</main>
