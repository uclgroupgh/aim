<style lang="postcss">
    .text_image_left {
        @apply grid grid-cols-text_image_left w-full px-32 py-16;
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
        @apply text-gray font-medium;
    }
    .btn {
        @apply mt-16 flex flex-row items-center font-semibold cursor-pointer;
    }
    .arrow {
        @apply w-8 mr-3;
    }

    @media(min-width: 300px)and (max-width: 575.98px) {
        .text {
            @apply px-8;
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

<section class="text_image_left">
    <div class="image_wrapper">
        <img class="image" src="/images/collage4.jpg"/>
        <img class="fluff" src="/images/fluff.png"/>
    </div>
    <div class="text">
        <h2 class="text_title">MILO Distributes 2000 Sports Boots</h2>
        <p class="text_content">Nestlé Ghana Limited and Alhaji Mohammed Kassim, winner of the 2013 Accra MILO Marathon have donated 2,000 boots to under-privileged children who have shown an inclination for sports, part of the Accra MILO Marathon reward initiative.</p>
        <div class="btn">
            <img src="/images/right-arrow.png" class="arrow"/>
            <span>Learn more</span>
        </div>
    </div>
</section>