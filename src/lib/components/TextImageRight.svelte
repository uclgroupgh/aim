<style lang="postcss">
    .text_image_right {
        @apply grid grid-cols-text_image_right w-full px-32 py-16;
    }
    .image_wrapper {
        @apply w-[120%] relative h-[28rem];
    }
    .image {
        @apply w-[110%] h-full absolute -translate-y-10 -translate-x-20 object-cover object-center z-10;
    }
    .fluff {
        @apply absolute z-10 -bottom-10 right-10 w-1/2;
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
        .text_image_right {
            @apply flex flex-col px-4;
        }
        .image_wrapper {
            @apply w-full relative h-[20rem] mt-12;
        }
        .image {
            @apply w-full h-full relative object-cover object-center z-10 translate-y-0 translate-x-0;
        }
        .text {
            @apply px-6 py-8;
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

<section class="text_image_right">
    <div class="text">
        <h2 class="text_title">AIMing to reduce plastic waste</h2>
        <p class="text_content">An eco-friendly race is what we seek to achieve at the 18th edition of the race and we are partnering with @plastic_punch as each participant AIMs to reduce plastic waste and give our habitat a chance of survival.<br /><br />Purchase your refillable bottle at the race packet pick up for only GHS10.</p>
        <div class="btn">
            <img src="/images/right-arrow.png" alt="right arrow" class="arrow"/>
            <span>Learn more</span>
        </div>
    </div>
    <div class="image_wrapper">
        <img class="image" src="/images/collage4.jpg" alt="Ghanaian women holding a 10km sign"/>
        <img class="fluff" src="/images/fluff.png" alt="decorative geometric logo"/>
    </div>
</section>