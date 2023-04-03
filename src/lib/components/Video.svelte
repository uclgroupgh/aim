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
</style>

<section class="video">
    <div class="header">
        <h2>On Your Marks..., Get Set..., Go!</h2>
        <p>Take a look back at the start of the Accra International Marathon Half Marathon 2017.</p>
    </div>
    <div class="content">
        <video controls>
            <source src="/images/vid1.mp4" type="video/mp4">
        </video>
    </div>
</section>