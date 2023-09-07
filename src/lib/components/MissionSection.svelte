<style lang="postcss">
    .mission_section {
        @apply relative px-16 pt-40 pb-36 font-saxMono;
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
</style>

<section class="mission_section">
    <h4>Our mission</h4>
    <div class="mission_content">
        <div class="image_wrapper">
            <img src="/images/mission_statement.jpg" />
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
            <h5 class="description">Od tempor incididunt ut labore aliqua. ullamco laboris nisi ut aliquip.</h5>
            <p class="paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusm od tempor incididunt ut labore et dolore magna aliqua. Ut enim minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>
            <div class="event_facts">
                <div class="participants">
                    <h6>2000+</h6>
                    <span>Participants</span>
                </div>
                <div class="distance">
                    <h6>42.4km</h6>
                    <span>Run Distance</span>
                </div>
            </div>
        </div>
    </div>
</section>