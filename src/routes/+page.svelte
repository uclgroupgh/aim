<script>
    import Hero from '../lib/components/Hero.svelte'
    import { fade } from 'svelte/transition'

    // Hero variables
    // $: hero_bg = data.app_data.data1.data[0].background_color
    // $: hero_slider_image_one = base_url + data.app_data.data1.data[0].slide1_image
    // $: hero_text_left = data.app_data.data1.data[0].slide1_text_right
    // $: hero_text_left_array = hero_text_left.split(" ")
    // $: hero_text_left_one = hero_text_left_array[0]
    // $: hero_text_left_two = hero_text_left_array[1]
    // $: hero_text_right = data.app_data.data1.data[0].slide1_text_left
    // $: hero_text_right_array = hero_text_right.split(" ")
    // $: hero_text_right_one = hero_text_right_array[0]
    // $: hero_text_right_two = hero_text_right_array[1]

    // Mission statement section variables
    // $: mission_image = base_url + data.app_data.data2.data[0].file
    // $: mission_title = data.app_data.data2.data[0].title
    // $: mission_description = data.app_data.data2.data[0].description
    // $: mission_paragraph = data.app_data.data2.data[0].paragraph

    // Map route section variables
    // $: map_image = base_url + data.app_data.data3.data[0].file
    // $: map_title = data.app_data.data3.data[0].title
    // $: map_description = data.app_data.data3.data[0].description
    // $: map_paragraph = data.app_data.data3.data[0].paragraph 



</script>

<svelte:head>
	<title>FNB Accra Marathon 2023 - Celebrating Africa's Premier Running Event</title>
	<meta name="description" content="Welcome to the FNB Accra Marathon - Africa's Premier Running Event! Explore the rich history, community spirit, and the journey of champions. Join us in celebrating the African spirit through sportsmanship, well-being, and social responsibility." />
	<link rel="canonical" href="https://www.accramarathon.com/" />
</svelte:head>

<main transition:fade>
    <Hero
    />
    <!-- <NewsletterSignup /> -->
    <!-- <Video />
    <TextImageLeft />
    <Collage />
    <TextImageRight />
    <Sponsors /> -->
    <!-- <MissionSection
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
    <RegisterSection /> -->
</main>
