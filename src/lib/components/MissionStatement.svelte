<style lang="postcss">
    .mission_statement {
        @apply px-64 pt-16;
    }
    .mission_statement_title {
        @apply text-center text-4xl leading-[3.375rem] mb-9;
    }
    .mission_statement_text {
        @apply text-xl leading-loose tracking-wide pb-16 border-b border-dashed border-gray-light;
    }

    /* // X-Small devices (portrait phones, less than 576px) */
    @media(min-width: 300px)and (max-width: 575.98px) {
        .mission_statement {
            @apply px-4 pt-6;
        }
        .mission_statement_text {
            @apply text-base tracking-wide leading-9 pb-12 text-justify;
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

<section class="mission_statement">
    <h2 class="mission_statement_title">Mission Statement</h2>
    <p class="mission_statement_text">We are dedicated to fostering sportsmanship, promoting healthy lifestyles, and fostering community engagement. By celebrating the vibrant African spirit, we empower individuals to thrive and unite through the power of sports.</p>
</section>