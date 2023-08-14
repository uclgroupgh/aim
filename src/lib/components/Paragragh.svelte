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
</style>

<div class="para_section">
    {#if icon_URL}
        <img class="icon" src={icon_URL} alt="icon"/>
    {/if}
    <p class="para_content">{content}</p>
</div>