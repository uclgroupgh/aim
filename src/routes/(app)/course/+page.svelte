<script>
    import { fade } from 'svelte/transition';
    import ParallaxHeader from '../../../lib/components/ParallaxHeader.svelte';
    import Paragraph from '../../../lib/components/Paragragh.svelte';
    import SectionHeading from '../../../lib/components/SectionHeading.svelte';
</script>
<main transition:fade>
    <ParallaxHeader 
        heading={'Course information'}
        parallax_bgd={'bg-parallax_course_background'}
    />
    <Paragraph 
        content={'Welcome to the heart of the marathon - the Course Information. Here, you\'ll discover the intricacies of the route map that winds through the vibrant streets of Accra, as well as the essential rules that guide the race. Whether you\'re a first-timer or a returning participant, this section is your compass to mastering the course and ensuring a smooth race day experience.'}
    />
    <div id="map"></div>
    <SectionHeading 
        title={'Route map'}
        subtitle={'Below you can see the 2023 Accra Marathon route.'}
    />
</main>