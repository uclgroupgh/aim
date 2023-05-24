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
</style>

<div class="link_span">
    <span class="link_span_content"><a href={link_url}>{link_text}</a>{remaining_link_text}</span>
</div>