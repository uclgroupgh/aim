<script>
    import { onMount } from 'svelte';

    let days = 0;
    let hours = 0;
    let minutes = 0;
    let seconds = 0;
    onMount(() => {
        
        // Set the date we're counting down to
        let countDownDate = new Date("Nov 11, 2023 09:00:00").getTime();
        
        // Update the count down every 1 second
        let x = setInterval(function() {

        // Get today's date and time
        let now = new Date().getTime();

        // Find the distance between now and the count down date
        var time_left = countDownDate - now;

        // Time calculations for days, hours, minutes and seconds
        let days_left = Math.floor(time_left / (1000 * 60 * 60 * 24));
        let hours_left = Math.floor((time_left % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes_left = Math.floor((time_left % (1000 * 60 * 60)) / (1000 * 60));
        let seconds_left = Math.floor((time_left % (1000 * 60)) / 1000);

        // Display the result in the element with id="demo"
            days = days_left;
            hours = hours_left;
            minutes = minutes_left;
            seconds = seconds_left;

        }, 1000);
    })
    </script>

<style lang="postcss">
    .countdown {
        @apply absolute z-30 flex flex-row justify-between items-center right-1/2 top-full translate-x-1/2 -translate-y-44 font-FNB_bold font-black;
    }
    .item {
        @apply p-2.5 min-w-[130px] flex flex-col items-center relative;
    }
    /* .item img {
        @apply absolute -translate-y-1/2 -translate-x-1/2;
    }
    .days img {
        @apply top-[46%] left-[37%];
    }
    .hours img {
        @apply top-[40%] left-[56%];
    }
    .minutes img {
        @apply top-[39%] left-[50%];
    }
    .seconds img {
        @apply top-[60%] left-[50%];
    } */
    span {
        @apply text-xl capitalize text-primary_amber font-bold tracking-wide block z-30;
    }
    h3 {
        @apply text-5xl font-bold text-white tracking-wide mb-1 leading-[1.3em] z-30;
    }
    

    /* // X-Small devices (portrait phones, less than 576px) */
    @media(min-width: 300px)and (max-width: 575.98px) {
        .countdown {
        @apply absolute z-30 grid grid-cols-four_cols gap-14 right-1/2 top-full translate-x-1/2 -translate-y-32;
    }
    .item {
        @apply p-1.5 min-w-[0px] w-full flex flex-col items-center relative;
    }
    /* .item img {
        @apply absolute -translate-y-1/2 -translate-x-1/2;
    }
    .days img {
        @apply top-[46%] left-[37%];
    }
    .hours img {
        @apply top-[40%] left-[56%];
    }
    .minutes img {
        @apply top-[39%] left-[50%];
    }
    .seconds img {
        @apply top-[60%] left-[50%];
    } */
    span {
        @apply text-xs capitalize text-white font-bold tracking-wide block z-30;
    }
    h3 {
        @apply text-3xl font-bold text-primary_amber tracking-wide mb-1 leading-[1.3em] z-30;
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

<!-- Display the countdown timer in an element -->
<section class="countdown">
    <div class="days item">
        <h3>{days}</h3>
        <span>days</span>
    </div>
    <div class="hours item">
        <h3>{hours}</h3>
        <span>hours</span>
    </div>
    <div class="minutes item">
        <h3>{minutes}</h3>
        <span>minutes</span>
    </div>
    <div class="seconds item">
        <h3>{seconds}</h3>
        <span>seconds</span>
    </div>
</section>