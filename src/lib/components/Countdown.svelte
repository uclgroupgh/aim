<script>
    import { onMount } from 'svelte';

    var days, hours, minutes, seconds;
    onMount(() => {

        // Set the date we're counting down to
        let countDownDate = new Date("Oct 29, 2023 09:00:00").getTime();
        
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
            days.innerHTML = days_left;
            hours.innerHTML = hours_left;
            minutes.innerHTML = minutes_left;
            seconds.innerHTML = seconds_left;

        }, 1000);
    })
</script>

<style lang="postcss">
    .countdown {
        @apply fixed z-30 flex flex-col justify-between items-center right-0 top-1/2 bg-off_white py-3 px-4 -translate-y-1/3;
    }
    .item {
        @apply p-3 border-b-gray-border border-b-[1px] flex flex-col items-center;
    }
    .item:last-of-type {
        @apply border-0;
    }
    span {
        @apply text-[0.6rem] text-gray;
    }
    h3 {
        @apply text-2xl font-bold;
    }
    

    /* // X-Small devices (portrait phones, less than 576px) */
    @media(min-width: 300px)and (max-width: 575.98px) {
        .countdown {
            @apply hidden;
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
        <span>DAYS</span>
        <h3 bind:this={days}></h3>
    </div>
    <div class="hours item">
        <span>HOURS</span>
        <h3 bind:this={hours}></h3>
    </div>
    <div class="minutes item">
        <span>MINUTES</span>
        <h3 bind:this={minutes}></h3>
    </div>
    <div class="seconds item">
        <span>SECONDS</span>
        <h3 bind:this={seconds}></h3>
    </div>
</section>