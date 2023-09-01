<script>
    export let content;
    export let icon_URL;
</script>

<style lang="postcss">
    .para_section {
        @apply px-64 pt-16 flex flex-col items-center;
    }
    .icon {
        @apply h-24 w-24 my-4;
    }
    .para_content {
        @apply text-xl leading-loose tracking-wide pb-12;
    }

    /* // X-Small devices (portrait phones, less than 576px) */
    @media(min-width: 300px)and (max-width: 575.98px) {
        .para_section {
            @apply px-4 pt-8 flex flex-col items-center;
        }
        .para_content {
            @apply text-justify;
        }
        .icon {
            @apply hidden;
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

<div class="para_section">
    {#if icon_URL}
        <img class="icon" src={icon_URL} alt="icon"/>
    {/if}
    <p class="para_content">{content}</p>
</div>