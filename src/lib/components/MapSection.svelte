<script>
    export let image;
    export let title;
    export let description;
    export let paragraph;
</script>

<style lang="postcss">
    .map_section {
        @apply relative px-16 pt-24 pb-36 max-w-[1300px] mx-auto;
    }
    h4 {
        @apply text-center text-4xl font-bold mb-24;
    }
    .map_content {
        @apply flex flex-row-reverse gap-10 h-auto;
    }
    .image_wrapper {
        @apply w-7/12 h-auto;
    }
    .image_wrapper img {
        @apply w-full h-full object-cover;
    }
    .text_content_wrapper {
        @apply flex flex-col w-5/12 h-fit;
    }
    .event_info {
        @apply mb-4;
    }
    .event_info, .date_wrapper, .event_facts {
        @apply flex flex-row items-center;
    }
    .date_wrapper img {
        @apply h-6 mr-2;
    }
    .date_wrapper span {
        @apply text-lg font-light;
    }
    .description {
        @apply text-2xl font-bold mb-10 max-w-lg;
    }
    .paragraph {
        @apply text-mobile-gray text-lg font-light mb-8;
    }
    .distance {
        @apply py-4 flex flex-col justify-center;
    }
    .distance h6 {
        @apply text-5xl font-semibold text-primary_turquoise mb-2;
    }
    .distance span {
        @apply text-lg font-semibold;
    }

    
    @media(min-width: 300px)and (max-width: 575.98px) {
        .map_section {
            @apply px-4 pt-16 pb-16;
        }
        h4 {
            @apply text-2xl mb-8;
        }
        .map_content {
            @apply flex-col gap-10 h-auto;
        }
        .image_wrapper {
            @apply w-full h-auto;
        }
        .text_content_wrapper {
            @apply w-full items-center;
        }
        .description {
            @apply text-xl font-bold mb-6 text-center;
        }
        .paragraph {
            @apply text-base font-light text-center mb-6;
        }
        .distance {
            @apply items-center;
        }
        .distance h6 {
            @apply text-4xl;
        }
        .distance span {
            @apply text-base;
        }
    }

    
    @media(min-width: 577px)and (max-width: 767.98px) {

    }

    
    @media(min-width: 767.99px)and (max-width: 991.98px) {

    }

    @media(min-width: 991.99px)and (max-width: 1199.98px) {
        
        
    }
</style>
<section class="map_section">
    <h4>{title}</h4>
    <div class="map_content">
        <div class="image_wrapper">
            <img src={image} />
        </div>
        <div class="text_content_wrapper">
            <h5 class="description">{description}</h5>
            <p class="paragraph">{paragraph}</p>
            <div class="event_facts">
                <div class="distance">
                    <h6>42.2km</h6>
                    <span>Run Distance</span>
                </div>
            </div>
        </div>
    </div>
</section>