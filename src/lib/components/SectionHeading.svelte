<script>
    export let title;
    export let subtitle;
</script>

<style lang="postcss">
    .section_heading {
        @apply px-64 pt-16 text-center;
    }
    .section_heading_title {
        @apply text-4xl leading-[3.375rem] mb-6;
    }
    .section_heading_subtitle {
        @apply text-lg leading-loose tracking-wide;
    }
</style>

<section class="section_heading">
    <h2 class="section_heading_title">{title}</h2>
    <p class="section_heading_subtitle">{subtitle}</p>
</section>