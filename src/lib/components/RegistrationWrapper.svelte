<script>
    import RegistrationForm from "./RegistrationForm.svelte";
</script>

<style lang="postcss">
    .registration_wrapper {
        @apply flex flex-row w-full h-screen;
    }
    .img_col {
        @apply bg-register_hero bg-center bg-cover w-1/2 h-full;
    }
</style>

<section class="registration_wrapper">
    <RegistrationForm />
    <div class="img_col">
        <div class="caption">
            <span class="caption_text"></span>
        </div>
    </div>
</section>