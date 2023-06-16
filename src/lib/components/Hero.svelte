<style lang="postcss">
    .hero {
        @apply h-[80vh] bg-hero bg-no-repeat bg-center bg-cover;
    }
    .hero_content {
        @apply w-full h-full flex flex-col justify-center items-center bg-blend-multiply;
        background-image: linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,0.5));
    }
    .hero_title {
        @apply text-white text-[3rem] font-bold mb-8 capitalize;
    }
    .hero_btn {
        @apply font-normal tracking-wide uppercase text-white text-sm cursor-pointer leading-7 px-9 py-2.5 border-b-2 rounded border-white border-[1px] duration-[250ms] ease-in-out hover:bg-primary_red hover:text-white hover:border-primary_red;
        box-shadow: 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12), 0 3px 1px -2px rgba(0,0,0,.2);
    }

    /* // X-Small devices (portrait phones, less than 576px) */
    @media(min-width: 300px)and (max-width: 575.98px) {
        .hero_title {
            @apply text-4xl text-center leading-normal mb-12;
        }
        .hero_content {
            background-image: linear-gradient(to bottom, rgba(0,0,0,0.7), rgba(0,0,0,0.7));
        }
        .hero_btn {
            @apply text-lg font-medium;
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

<section class="hero">
    <div class="hero_content">
        <h2 class="hero_title">Proudly AIMing to keep Africa alive</h2>
        <a href="/register" class="hero_btn">
            <span>Register</span>
        </a>
    </div>
</section>