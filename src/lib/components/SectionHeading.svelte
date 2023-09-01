<script>
    export let title;
    export let subtitle;
</script>

<style lang="postcss">
    .section_heading {
        @apply px-64 py-12 text-center;
    }
    .section_heading_title {
        @apply text-4xl leading-[3.375rem];
    }
    .section_heading_subtitle {
        @apply text-lg leading-loose tracking-wide mt-6;
    }

    /* // X-Small devices (portrait phones, less than 576px) */
    @media(min-width: 300px)and (max-width: 575.98px) {
        .section_heading {
            @apply px-4 pt-12 pb-0;
        }
        .section_heading_title {
            @apply text-3xl mb-6;
        }
        .section_heading_subtitle {
            @apply text-base leading-loose tracking-wide text-justify pb-8;
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

<section class="section_heading">
    <h2 class="section_heading_title">{title}</h2>
    {#if subtitle}
        <p class="section_heading_subtitle">{subtitle}</p>
    {/if}
</section>