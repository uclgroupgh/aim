<script>
    import { fade } from 'svelte/transition';
    import SecondHero from '../../../../lib/components/SecondHero.svelte';
    import Paragragh from '../../../../lib/components/Paragragh.svelte';
    import SectionHeading from '../../../../lib/components/SectionHeading.svelte';
    import ImageTextBanner from '../../../../lib/components/ImageTextBanner.svelte';
</script>

<main transition:fade>
    <SecondHero 
        bgd_image={'bg-values_hero'}
        title={'Accra Marathon\'s Core Values'}
        subtitle={'Our Guiding Pillars'}
        needsScrollTo
    />
    <Paragragh 
        content={'At the heart of the Accra Marathon beats a set of core values that shape our actions, aspirations, and impact. These values illuminate the path we tread, reminding us of our commitment to excellence, inclusivity, and a positive influence on the community.'}
    />
    <ImageTextBanner 
        bgd_image={'bg-stories_hero'}
        bgd_color={'bg-yellow'}
        heading={'Competitiveness'}
        para_text={'We embrace the spirit of competition as a driving force for growth and self-improvement. The Accra Marathon stands as a testament to the power of setting and achieving goals, inspiring runners to push their limits and reach new heights.'}
    />
    <SectionHeading 
        title={'Building Community'}
    />
    <Paragragh 
        content={'Community lies at the center of our journey. The Accra Marathon isn\'t just an event; it\'s a convergence of diverse individuals united by a shared passion. We believe in fostering connections, forming bonds, and nurturing a collective sense of belonging.'}
    />
    <SectionHeading 
        title={'Well-being'}
    />
    <Paragragh 
        content={'Health is wealth, and the Accra Marathon promotes holistic well-being. We champion physical fitness, mental resilience, and a balanced lifestyle. Every step taken in training and on the course embodies our commitment to vitality and lasting wellness.'}
    />
    <ImageTextBanner 
        bgd_image={'bg-stories_hero'}
        bgd_color={'bg-blue'}
        text_color={'text-white'}
        heading={'Innovativeness'}
        para_text={'The Accra Marathon thrives on innovation. We constantly seek new ways to enhance participant experiences, embrace technological advancements, and improve the event\'s overall impact. Innovation is the compass guiding us into the future.'}
    />
</main>