<script>
    import { fade } from 'svelte/transition';
    import ParallaxHeader from '../../../lib/components/ParallaxHeader.svelte';
    import Paragraph from '../../../lib/components/Paragragh.svelte';
    import FourColumnFullWidth from '../../../lib/components/FourColumnFullWidth.svelte';
    import SimpleBanner from '../../../lib/components/SimpleBanner.svelte';
    import ThreeColumnSlider from '../../../lib/components/ThreeColumnSlider.svelte';
</script>

<main transition:fade>
    <ParallaxHeader 
        heading={'Training for your race'}
        parallax_bgd={'bg-hero'}
    />
    <div id="routines"></div>
    <Paragraph 
        content={'Preparing for the Accra Marathon is not just about covering the distance; it\'s a transformative journey that tests your limits, fuels your determination, and shapes your character. Whether you\'re a seasoned runner or taking your first steps into the world of marathons, our training guide is here to equip you with insights, routines, and tips to ensure you cross that finish line with pride.  Select your experience to see a training routine customized for your race.'}
    />
    <FourColumnFullWidth />
    <Paragraph 
        content={'Training for a marathon is a transformative endeavor that demands commitment, perseverance, and a touch of courage. As you lace up your shoes and embark on this journey, remember that every step brings you closer to achieving something extraordinary. The Accra Marathon awaits, and with each stride, you\'re writing your own story of triumph.'}
    />
    <div id="preparation"></div>
    <ParallaxHeader 
        heading={'Preparation'}
        parallax_bgd={'bg-about_hero'}
    />
    <SimpleBanner 
        para={'Find the best articles on race preparation below'}
        bg_color={'bg-primary_green'}
    />
    <ThreeColumnSlider />
</main>