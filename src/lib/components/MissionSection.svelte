<script>
    export let image;
    export let title;
    export let description;
    export let paragraph;
</script>

<style lang="postcss">
    .mission_section {
        @apply relative px-16 pt-40 pb-36 font-saxMono max-w-[1300px] mx-auto;
    }
    h4 {
        @apply text-center text-4xl font-bold mb-24;
    }
    .mission_content {
        @apply flex flex-row gap-24 h-auto;
    }
    .image_wrapper {
        @apply w-5/12 h-auto;
    }
    .image_wrapper img {
        @apply w-full h-full object-cover;
    }
    .text_content_wrapper {
        @apply flex flex-col w-7/12 h-fit;
    }
    .event_info {
        @apply mb-4;
    }
    .event_info, .location_wrapper, .date_wrapper, .event_facts {
        @apply flex flex-row items-center;
    }
    .location_wrapper img, .date_wrapper img {
        @apply h-6 mr-2;
    }
    .location_wrapper span, .date_wrapper span {
        @apply text-lg font-light;
    }
    .location_wrapper {
        @apply mr-6;
    }
    .description {
        @apply text-2xl font-bold mb-10 max-w-lg;
    }
    .paragraph {
        @apply text-mobile-gray text-lg font-light mb-8;
    }
    .participants {
        @apply border-r border-gray-light;
    }
    .participants, .distance {
        @apply px-10 py-4 flex flex-col justify-center;
    }
    .participants h6, .distance h6 {
        @apply text-5xl font-semibold text-primary_turquoise mb-2;
    }
    .participants span, .distance span {
        @apply text-lg font-semibold;
    }

    @media(min-width: 300px)and (max-width: 575.98px) {
        .mission_section {
            @apply px-4 pt-16 pb-16;
        }
        .mission_content {
            @apply flex flex-col gap-10 h-auto;
        }
        h4 {
            @apply text-2xl mb-12;
        }
        .image_wrapper {
            @apply w-full h-auto;
        }
        .text_content_wrapper {
            @apply w-full h-fit;
        }
        .location_wrapper img, .date_wrapper img {
            @apply h-5;
        }
        .location_wrapper span, .date_wrapper span {
            @apply text-base;
        }
        .event_info {
            @apply mb-6 mx-auto;
        }
        .description {
            @apply text-xl font-bold mb-8 max-w-lg text-center;
        }
        .paragraph {
            @apply text-mobile-gray text-base font-light mb-8 text-center;
        }
        .event_facts {
            @apply flex flex-row justify-center;
        }
        .participants h6, .distance h6 {
            @apply text-3xl mb-2;
        }
        .participants, .distance {
            @apply px-4;
        }
    }

    @media(min-width: 577px)and (max-width: 767.98px) {

    }


    @media(min-width: 767.99px)and (max-width: 991.98px) {

    }

    @media(min-width: 991.99px)and (max-width: 1199.98px) {
        
        
    }
</style>

<section class="mission_section">
    <h4>{title}</h4>
    <div class="mission_content">
        <div class="image_wrapper">
            <img src={image} />
        </div>
        <div class="text_content_wrapper">
            <div class="event_info">
                <div class="location_wrapper">
                    <img src="/images/pin.png" alt="location pin"/>
                    <span class="location">Accra</span>
                </div>
                <div class="date_wrapper">
                    <img src="/images/calendar.png" alt="calendar" />
                    <span class="date">11.11.2023</span>
                </div>
            </div>
            <h5 class="description">{description}</h5>
            <p class="paragraph">{paragraph}</p>
            <div class="event_facts">
                <div class="participants">
                    <h6>2000+</h6>
                    <span>Participants</span>
                </div>
                <div class="distance">
                    <h6>42.2km</h6>
                    <span>Run Distance</span>
                </div>
            </div>
        </div>
    </div>
</section>