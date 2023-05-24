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
</style>

<section class="about_stories">
    <h2 class="about_stories_title">Our Stories</h2>
    <p class="about_stories_text">Get ready to be inspired as we share heartwarming tales of triumph, personal growth, and the indomitable spirit that drives each individual forward. Discover the diverse stories that weave the vibrant tapestry of the Accra Marathon, highlighting the power of determination, resilience, and the transformative impact of this extraordinary event.</p>

    <ThreeColumnSlider />

</section>