<style lang="postcss">
    .video {
        @apply relative;
    }
    .header {
        @apply px-32 text-white bg-primary_red pt-16;
    }
    h2 {
        @apply text-3xl mb-5 font-bold;
    }
    p {
        @apply font-semibold text-xl;
    }
    .content {
        @apply relative w-full h-auto before:h-[345px] before:bg-primary_red before:block before:absolute before:w-full before:-z-10;
    }
    video {
        @apply px-32 pt-10 pb-16;
    }
    .mobile_vid_content {
        @apply hidden;
    }

    /* // X-Small devices (portrait phones, less than 576px) */
    @media(min-width: 300px)and (max-width: 575.98px) {
        .header {
            @apply px-4;
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
            <video controls>
                <source src="/images/vid1.mp4" type="video/mp4">
            </video>
        </div>
    </div>
    <div class="content">
        <video controls>
            <source src="/images/vid1.mp4" type="video/mp4">
        </video>
    </div>
</section>