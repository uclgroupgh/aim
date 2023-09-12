<script>
    /** @type {import('./$types').PageData} */
    export let data;
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

    const base_url = 'https://mega.acorns.life/'

    // Hero variables
    $: hero_bg = data.app_data.data1.data[0].background_color
    $: hero_slider_image_one = base_url + data.app_data.data1.data[0].slide1_image
    $: hero_text_left = data.app_data.data1.data[0].slide1_text_right
    $: hero_text_left_array = hero_text_left.split(" ")
    $: hero_text_left_one = hero_text_left_array[0]
    $: hero_text_left_two = hero_text_left_array[1]
    $: hero_text_right = data.app_data.data1.data[0].slide1_text_left
    $: hero_text_right_array = hero_text_right.split(" ")
    $: hero_text_right_one = hero_text_right_array[0]
    $: hero_text_right_two = hero_text_right_array[1]

    // Mission statement section variables
    $: mission_image = base_url + data.app_data.data2.data[0].file
    $: mission_title = data.app_data.data2.data[0].title
    $: mission_description = data.app_data.data2.data[0].description
    $: mission_paragraph = data.app_data.data2.data[0].paragraph

    // Map route section variables
    $: map_image = base_url + data.app_data.data3.data[0].file
    $: map_title = data.app_data.data3.data[0].title
    $: map_description = data.app_data.data3.data[0].description
    $: map_paragraph = data.app_data.data3.data[0].paragraph 

</script>

<main transition:fade>
    <Hero
        bg_color={hero_bg}
        slide_one={hero_slider_image_one}
        text_left_one={hero_text_left_one}
        text_left_two={hero_text_left_two}
        text_right_one={hero_text_right_one}
        text_right_two={hero_text_right_two}
    />
    <!-- <NewsletterSignup /> -->
    <!-- <Video />
    <TextImageLeft />
    <Collage />
    <TextImageRight />
    <Sponsors /> -->
    <MissionSection
        image={mission_image}
        title={mission_title}
        description={mission_description}
        paragraph={mission_paragraph}
     />
    <FourColumnSection />
    <MapSection 
        image={map_image}
        title={map_title}
        description={map_description}
        paragraph={map_paragraph}
    />
    <RegisterSection />
</main>
