<script>
    import { register } from 'swiper/element/bundle';
    import Stories from '../../lib/data/Stories';
    import { onMount } from 'svelte';
    import Swiper from 'swiper';
    import 'swiper/swiper-bundle.css';

    register();

    let swiperEl, swiperObject, prev_btn, next_btn;

    function goPrev() {
        swiperObject.slidePrev();
    }
    function goNext() {
        swiperObject.slideNext();
    }

    onMount(() => {
        // swiper element
        swiperObject = new Swiper(swiperEl, {
            navigation: {
                nextEl: next_btn,
                prevEl: prev_btn
                },
            loop: true,
            spaceBetween: 20,
            slidesPerView: 3
            });
        })
</script>

<style lang="postcss">
    .three_col_slider {
        @apply relative mx-64 pb-12;
    }
    swiper-container {
        @apply py-16;
    }
    swiper-slide {
        @apply cursor-pointer duration-[250ms] ease-in-out w-1/3;
    }
    swiper-slide:hover {
        box-shadow: 0 16px 24px 2px rgba(0,0,0,.14), 0 6px 30px 5px rgba(0,0,0,.12), 0 8px 10px -5px rgba(0,0,0,.3);
        transform: scale(1.01,1.01);
    }
    .slide_img_wrapper {
        @apply h-48 mb-4;
    }
    .slide_img {
        @apply object-cover w-full h-full;
    }
    .slide_title {
        @apply text-lg font-normal mb-4 px-2;
    }
    .slide_summary {
        @apply text-sm leading-loose mb-6 px-2;
    }
    .prev_btn_wrapper, .next_btn_wrapper {
        @apply absolute top-40 p-2.5 bottom-0 w-fit h-fit bg-med_blue rounded-full flex justify-center items-center cursor-pointer z-10;
    }
    .prev_btn_wrapper {
        @apply -left-5 -translate-x-full;
    }
    .next_btn_wrapper {
        @apply -right-5 translate-x-full;
    }
    .prev_btn, .next_btn {
        @apply h-8 w-8;
    }
    .prev_btn {
        @apply rotate-90;
    }
    .next_btn {
        @apply -rotate-90;
    }
</style>

<div class="three_col_slider">
    <swiper-container
    bind:this={swiperEl}
    >
        {#each Stories as story}
            <swiper-slide>
                <a href="#" class="slide_inner">
                    <div class="slide_img_wrapper">
                        <img class="slide_img" src="/images/{story.imgURL}" alt="an picture of one of our stories"/>
                    </div>
                    <h4 class="slide_title">{story.story_title}</h4>
                    <p class="slide_summary">{story.story_summary}</p>
                </a>
            </swiper-slide>
        {/each}
    </swiper-container>
    <button on:click={goPrev} bind:this={prev_btn} class="prev_btn_wrapper">
        <img class="prev_btn" src="/images/down_arrow.png" alt="previous button"/>
    </button>
    <button on:click={goNext} bind:this={next_btn} class="next_btn_wrapper">
        <img class="next_btn" src="/images/down_arrow.png" alt="previous button"/>
    </button>
</div>