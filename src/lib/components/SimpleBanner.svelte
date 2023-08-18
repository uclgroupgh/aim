<script>
    export let para;
    export let bg_color;
</script>

<style lang="postcss">
    .simple_banner {
        @apply py-16 px-64 mb-8;
    }
    p {
        @apply text-white font-medium text-lg text-center;
    }
</style>

<div class="simple_banner {bg_color}">
    <p>{para}</p>
</div>