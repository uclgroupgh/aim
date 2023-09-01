<style lang="postcss">
    .text_image_left {
        @apply grid grid-cols-text_image_left w-full px-32 py-32;
    }
    .image_wrapper {
        @apply w-[120%] relative h-[28rem];
    }
    .image {
        @apply w-[110%] h-full absolute -translate-y-10 object-cover object-center z-10;
    }
    .fluff {
        @apply absolute z-10 bottom-0 left-0 w-1/2;
    }
    .text {
        @apply flex flex-col py-16 px-32 bg-off_white;
    }
    .text_title {
        @apply text-3xl capitalize font-bold mb-5;
    }
    .text_content {
        @apply text-gray font-medium text-justify;
    }
    .btn {
        @apply mt-16 flex flex-row items-center font-semibold cursor-pointer;
    }
    .arrow {
        @apply w-8 mr-3;
    }

    @media(min-width: 300px)and (max-width: 575.98px) {
        .text_image_left {
            @apply flex flex-col px-4 py-16;
        }
        .image_wrapper {
            @apply w-full relative h-[20rem];
        }
        .image {
            @apply w-full h-full relative object-cover object-center z-10;
        }
        .text {
            @apply px-6 mt-6 py-8;
        }
        .text_title {
            @apply text-2xl;
        }
        .text_content {
            @apply text-lg text-justify;
        }
        .btn {
            @apply mt-8;
        }
    }

    @media(min-width: 577px)and (max-width: 767.98px) {
        .text {
            @apply px-8;
        }
    }

    @media(min-width: 767.99px)and (max-width: 991.98px) {
        
    }

    @media(min-width: 991.99px)and (max-width: 1199.98px) {
        
    }
</style>
<section class="wrapper">
    <div class="text_image_left">
        <div class="image_wrapper">
            <img class="image" src="/images/collage4.jpg"/>
            <img class="fluff" src="/images/fluff.png"/>
        </div>
        <div class="text">
            <h2 class="text_title">The Accra Marathon heads to a New Home</h2>
            <p class="text_content">After 30 years of a partnership between Dansoman Keep Fit Club (DKFC) and Nestle Ghana, the Accra Milo Marathon a household name and one of the biggest sporting events across the West African sub-region now heads to a new home. The organizers of the event paid a courtesy call to Nestle, their longtime partner as the event celebrates 30 years in Ghana. In the meeting, the Club’s chairperson expressed the Club’s gratitude for the support Nestle has given to the Marathon over the years. He said, “we cut our teeth with you and it is only proper that as we celebrate 30 years we acknowledge the support Nestle has given to us”.</p>
            <div class="btn">
                <img src="/images/right-arrow.png" class="arrow"/>
                <span>Learn more</span>
            </div>
        </div>
    </div>
</section>