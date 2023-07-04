<style lang="postcss">
    .quote_banner {
        @apply bg-about_cofounder h-[105vh] bg-cover px-32 flex flex-row justify-end items-center;
    }
    .quote_wrapper {
        @apply w-1/3 text-white flex flex-col items-center bg-black p-8 bg-opacity-50;
    }
    .quotes {
        @apply h-16 w-16 mb-5;
    }
    .quote_open {
        @apply rotate-180;
    }
    .quote_text {
        @apply mb-5 leading-loose text-center;
    }
    .author_caption {
        @apply text-center leading-relaxed;
    }

    /* // X-Small devices (portrait phones, less than 576px) */
    @media(min-width: 300px)and (max-width: 575.98px) {
        .quote_banner {
            @apply h-auto bg-cover bg-center py-10 px-4;
        }
        .quote_wrapper {
            @apply w-full;
        }
        .quotes {
            @apply h-10 w-10 mb-3;
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

<section class="quote_banner">
    <div class="quote_wrapper">
        <img class="quotes quote_open" src="/images/quotes.png" alt="quotes" />
        <p class="quote_text">We aim to inculcate the habit of distant running in the youth as part of lifestyle change attitude - purely for health reasons.
        </p>
        <img class="quotes quote_close" src="/images/quotes.png" alt="quotes" />
        <span class="author_caption">N.A. Adjin-Tettey,<br/>Co-founder</span>
    </div>
</section>