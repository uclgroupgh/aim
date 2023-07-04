<script>
    import ThreeColumnSlider from './ThreeColumnSlider.svelte';
</script>

<style>
    .about_stories {
        @apply pt-16;
    }
    .about_stories_title {
        @apply px-64 text-center text-4xl leading-[3.375rem] mb-9;
    }
    .about_stories_text {
        @apply px-64 text-xl leading-loose tracking-wide pb-16 text-center;
    }

        /* // X-Small devices (portrait phones, less than 576px) */
        @media(min-width: 300px)and (max-width: 575.98px) {
            .about_stories_title {
                padding-left: 1rem;
                padding-right: 1rem;
                margin-bottom: 1.5rem;
            }
            .about_stories_text {
                padding-left: 1rem;
                padding-right: 1rem;
                text-align: justify;
                font-size: 1rem;
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

<section class="about_stories">
    <h2 class="about_stories_title">Our Stories</h2>
    <p class="about_stories_text">Get ready to be inspired as we share heartwarming tales of triumph, personal growth, and the indomitable spirit that drives each individual forward. Discover the diverse stories that weave the vibrant tapestry of the Accra Marathon, highlighting the power of determination, resilience, and the transformative impact of this extraordinary event.</p>

    <ThreeColumnSlider />

</section>