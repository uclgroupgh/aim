<script>
    import { fade } from 'svelte/transition';
    import SecondHero from "../../../lib/components/SecondHero.svelte";
    import ImageTextBanner from '../../../lib/components/ImageTextBanner.svelte';
    import ThreeColumnSlider from '../../../lib/components/ThreeColumnSlider.svelte';
    import SectionHeading from '../../../lib/components/SectionHeading.svelte';

</script>

<main transition:fade>
    <SecondHero
        bgd_image={'bg-stories_hero'}
        title={'Our stories'}
        subtitle={'Join us in celebrating the incredible journeys of past and current participants, highlighting their triumphs, personal growth, and unwavering spirit. Get ready to be inspired and embark on your own remarkable journey with us.'}
        captionText={'At the 2016 Accra Marathon'}
    />
    <SectionHeading 
        title={'Meet Our Champions'}
        subtitle={'Embark on a Legendary Journey: Unveiling the Masters of the Marathon - Meet Our Former Champions'}
    />
    <ThreeColumnSlider />
    <ImageTextBanner
        bgd_image={'bg-story_banner'}
        captionText={'Winners of the 2016 Accra Marathon'}
        bgd_color={'bg-yellow'}
        para_text={'Curious to see the champions who conquered the Accra Marathon? Click here to explore our prestigious gallery of previous winners, relive their victorious moments, and be inspired to make your mark in the upcoming race.'}
        cta_btn_text={'Discover Victorious Champions'}
        cta_btn_link={'/champions/past-winners'}
    />
    <SectionHeading 
        title={'Inspiring Stories of Everyday Champions'}
        subtitle={'Tales of Triumph, Resilience, and Personal Growth from our Incredible Participants'}
    />
    <ThreeColumnSlider />
    <ImageTextBanner 
        bgd_image={'bg-story_banner_2'}
        captionText={'Accra Marathon co-founder N. A. Adjin-Tettey in his youth'}
        bgd_color={'bg-primary_red'}
        quote_text={'Through the Accra Marathon, we strive to unite communities, ignite passion, and inspire greatness. Let us run together, breaking barriers and embrace the power of sport to shape a brighter future.'}
        quote_caption={'- Accra Marathon founder, N.A. Adjin-Tettey'}
        has_link_span
    />
    <SectionHeading 
        title={'Making a difference'}
        subtitle={'Transforming Lives, Empowering Communities: Illuminating the Positive Impact of the Accra Marathon'}
    />
    <ThreeColumnSlider />
</main>