<script>
    import RegistrationFormTwo from "./RegistrationFormTwo.svelte";
</script>

<style lang="postcss">
    .registration_wrapper {
        @apply bg-registration_wrapper_two_bg bg-contain bg-no-repeat bg-bottom bg-primary_amber flex flex-col w-full min-h-screen pb-48;
    }
    .logo_wrapper {
        @apply h-32 pl-8 pt-10;
    }
    .logo_wrapper img {
        @apply h-full w-auto;
    }
    .form_heading{
        @apply mx-auto w-fit text-white;
    }
    .form_heading h5 {
        @apply text-center text-4xl font-FNB_bold;
    }
    .form_heading h4 {
        @apply text-center mb-3 text-2xl;
    }

    /* // X-Small devices (portrait phones, less than 576px) */
    @media(min-width: 300px)and (max-width: 575.98px) {
        .registration_wrapper {
            @apply flex-col w-full pb-28;
        }
        .logo_wrapper {
            @apply mb-8 mx-auto pl-0;
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
    <div class="logo_wrapper">
        <img src="/images/desktop_header_logo.png" alt="fnb_logo" />
    </div>
    <div class="form_heading">
        <h4>Hello Ghana, let's run again.</h4>
        <h5>Register &nbsp;here</h5>
    </div>
    <RegistrationFormTwo />
</section>