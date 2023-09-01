<script>
    import { onMount } from "svelte";

    import videojs from 'video.js';
    import 'video.js/dist/video-js.css';
    import '../../styles/video.css';

    let desktop_video, mobile_video;

    onMount(() => {
        videojs(desktop_video, {
            controls: true,
            autoplay: false,
            preload: 'auto',
            poster: '/images/story3.jpg',
            aspectRatio: '16:9'
        });
        videojs(mobile_video, {
            controls: true,
            autoplay: false,
            preload: 'auto',
            poster: '/images/story3.jpg',
            aspectRatio: '16:9'
        });
        
        var player = videojs(desktop_video);

        player.addClass('vjs-custom');
    })
        

</script>

<style lang="postcss">
    .video {
        @apply relative;
    }
    .header {
        @apply px-32 text-primary_blue pt-16 text-center;
    }
    h2 {
        @apply text-3xl mb-5 font-bold;
    }
    p {
        @apply font-semibold text-xl;
    }
    .content {
        @apply pt-12 mb-16 min-h-[25vh] w-[60%] mx-auto flex items-center justify-center;
    }
    .mobile_vid_content {
        @apply hidden;
    }

    /* // X-Small devices (portrait phones, less than 576px) */
    @media(min-width: 300px)and (max-width: 575.98px) {
        .header {
            @apply px-4;
        }
        p {
            @apply mb-8;
        }
        .content {
            @apply hidden;
        }
        .mobile_vid_content {
            @apply block;
        }
        .mobile_vid_content video {
            @apply px-0;
        }
    }

    /* // Small devices (landscape phones, less than 768px) */
    @media(min-width: 577px)and (max-width: 767.98px) {

    }

    /* // Medium devices (tablets, less than 992px) */
    @media(min-width: 767.99px)and (max-width: 991.98px) {

    }

    /* // Large devices (desktops, less than 1200px) */
    @media(min-width: 991.99px)and (max-width: 1199.98px) {
        
        
    }
</style>

<section class="video">
    <div class="header">
        <h2>On Your Marks..., Get Set..., Go!</h2>
        <p>Take a look back at a prior promo for the Accra Marathon.</p>
        <div class="mobile_vid_content">
            <video-js bind:this={mobile_video} class="vjs-custom">
                <source src="/images/vid1.mp4" type="video/mp4">
            </video-js>
        </div>
    </div>
    <div class="content">

        <video-js bind:this={desktop_video}>
            <source src="/images/vid1.mp4" type="video/mp4">
        </video-js>
      

        <!-- <video controls poster="/images/story3.jpg">
            <source src="/images/vid1.mp4" type="video/mp4">
        </video> -->
    </div>
</section>