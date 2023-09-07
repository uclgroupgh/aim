<style lang="postcss">
    .map_section {
        @apply relative px-16 pt-24 pb-36 font-saxMono;
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
</style>
<section class="map_section">
    <h4>Race route</h4>
    <div class="map_content">
        <div class="image_wrapper">
            <img src="/images/map.jpg" />
        </div>
        <div class="text_content_wrapper">
            <h5 class="description">Od tempor incididunt ut labore aliqua. ullamco laboris nisi ut aliquip.</h5>
            <p class="paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusm od tempor incididunt ut labore et dolore magna aliqua. Ut enim minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>
            <div class="event_facts">
                <div class="distance">
                    <h6>42.4km</h6>
                    <span>Run Distance</span>
                </div>
            </div>
        </div>
    </div>
</section>