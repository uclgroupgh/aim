<script>
    export let link_url;
    export let link_text;
    export let remaining_link_text;
</script>

<style lang="postcss">
    .link_span {
        @apply pt-6;
    }
    .link_span_content {
        @apply text-white text-lg;
    }
    .link_span_content a {
        @apply font-semibold underline;
    }

    /* // X-Small devices (portrait phones, less than 576px) */
    @media(min-width: 300px)and (max-width: 575.98px) {
        .link_span {
            @apply pt-4 text-justify pb-4;
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

<div class="link_span">
    <span class="link_span_content"><a href={link_url}>{link_text}</a>{remaining_link_text}</span>
</div>