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

    /* // X-Small devices (portrait phones, less than 576px) */
    @media(min-width: 300px)and (max-width: 575.98px) {
        .registration_wrapper {
            @apply flex-col w-full;
        }
        .img_col {
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

<section class="registration_wrapper">
    <RegistrationForm />
    <div class="img_col">
        <div class="caption">
            <span class="caption_text"></span>
        </div>
    </div>
</section>