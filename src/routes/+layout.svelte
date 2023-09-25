<script>
    import "../../src/styles/global.css"
    // import Header from '../../lib/components/Header.svelte'
    import Footer from '../../src/lib/components/Footer.svelte'
    import { hero_bg_design_three } from "../lib/stores/store";
    // import Countdown from '../../lib/components/Countdown.svelte'
    import Loader from "../lib/components/Loader.svelte";
    import { loading, location, facebook, youtube, instagram, twitter, contact_email, contact_number, fetch_error } from '../lib/stores/store'
    import { onMount } from "svelte";
    

    const base_url = 'https://accramarathon.com/'
    
    $: $loading = ($location == "") ? true : false;

    onMount(async () => {
      try {
        const [response1, response2] = await Promise.all([
        fetch('https://www.accramarathon.com/manager/endpoints/home_hero/getHomeHeros.php'),
        fetch('https://www.accramarathon.com/manager/endpoints/info/getInfo.php?id=1')
      ]);

      const [data1, data2] = await Promise.all([
        response1.json(),
        response2.json()
      ]);
      $hero_bg_design_three = base_url + data1.data[0].slide1_image
      $location = data2.data.location
      $facebook = data2.data.facebook_url
      $twitter = data2.data.twitter_url
      $instagram = data2.data.instagram_url
      $youtube = data2.data.youtube_url
      $contact_email = data2.data.email
      $contact_number = data2.data.phone
      } catch (error){
        console.log(`The error is: ${error}`);
        $fetch_error = error
      }
      
    })
  </script>

  <style lang="postcss">
    
  </style>
  <!-- <Header /> -->
  <!-- <Countdown /> -->
  {#if $loading}
    <Loader /> 
  {:else}
      <slot />
    <Footer />
  {/if}