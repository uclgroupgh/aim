<style lang="postcss">
    .sponsors {
        @apply bg-off_white px-32 pb-32 pt-16;
    }
    h3 {
        @apply text-3xl font-semibold text-center mb-16;
    }
    .logo_wrapper {
        @apply flex flex-row justify-center items-center gap-20;
    }
    img {
        @apply h-48;
    }

    /* // X-Small devices (portrait phones, less than 576px) */
    @media(min-width: 300px)and (max-width: 575.98px) {
        .sponsors {
            @apply px-8 py-16;
        }
        .logo_wrapper {
            @apply flex-col gap-16;
        }
        img {
            @apply h-32;
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

<section class="sponsors">
    <h3>Thanks to all our partners</h3>
    <div class="logo_wrapper">
        <a href="https://www.instagram.com/dkfc_rats_rabbits/" target="_blank">
            <img src="/images/dkfc_logo.png" alt="Dansoman Keep Fit Club" />
        </a>
        <a href="https://www.firstnationalbank.com.gh/" target="_blank">
            <img src="/images/FNB_new_logo.png" alt="First National Bank"/>
        </a>
    </div>
</section>