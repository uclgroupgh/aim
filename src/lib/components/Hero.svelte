<script>
    import Countdown from "./Countdown.svelte";
    import { hero_bg_design_three } from "../stores/store";
</script>

<style lang="postcss">
    .hero {
        @apply bg-cover h-[130vh] relative font-FNB bg-center;
    }
    .logo_wrapper {
        @apply h-32 pl-8 pt-10;
    }
    .logo_wrapper img {
        @apply h-full w-auto;
    }
    .hero_text_wrapper {
        @apply h-full w-full absolute top-0 left-0;
    }
    .hero_text_container {
        @apply h-full w-full relative;
    }
    .hero_text_left_wrapper {
        @apply h-72 absolute top-1/3 -translate-y-2/4 left-16;
    }
    .hero_text_left_wrapper img {
        @apply h-full w-auto;
    }
    .hero_text_right_wrapper {
        @apply h-72 absolute top-1/4 right-8;
    }
    .hero_text_right_wrapper img {
        @apply h-full w-auto;
    }
    .button_wrapper {
        @apply h-full w-full flex justify-center items-center relative;
    }
    .button {
        @apply text-4xl rounded-full mt-4 font-FNB_bold font-bold text-primary_turquoise;
    padding: 0.65em 1.5em;
    text-transform: uppercase;
    letter-spacing: 2px;
    background-color: #fff;
    border: none;
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease 0s;
    cursor: pointer;
    outline: none;
    }

    .button:hover {
    @apply bg-primary_amber;
    box-shadow: 0px 15px 20px rgba(250,157,30, 0.4);
    color: #fff;
    transform: translateY(-7px);
    }

    .button:active {
    transform: translateY(-1px);
    }
    
    /* .hero {
        @apply h-[90vh] relative mb-12;
    }
    .abstract_svg {
        @apply absolute top-full w-full z-20;
    }
    .hero_content {
        @apply w-full h-full flex flex-row justify-center items-center px-8 py-2 max-w-[1300px] mx-auto;
    }
    .hero_slide {
        @apply h-full w-full relative;
    }
    .center_img {
        @apply w-full h-full;
    }
    .center_img img {
        @apply mx-auto h-full -translate-x-16;
    }
    .hero_text_right, .hero_text_left, .hero_event  {
        @apply absolute text-white text-[7.5rem] w-full h-full top-0;
    }
    .hero_text_right, .hero_event {
        @apply right-0;
    }
    .hero_text_left {
        @apply left-0;
    }
    .hero_text_right_content {
        @apply font-Paladins_solid absolute top-[45%] left-[53%] leading-[5rem];
    }
    .hero_text_left_content {
        @apply font-Paladins_outline absolute top-[16%] left-[1%] leading-[6rem];
    }
    .hero_event_content {
        @apply text-xl font-saxMono font-semibold tracking-wide absolute top-[30%] left-[65%]; 
    }
    .hero_event_content .amber_text {
        @apply text-primary_amber font-bold;
    } */
    /* Giner template start */
    /* .hero {
        @apply h-[100vh] bg-hero  bg-no-repeat bg-center bg-cover;
    }
    .hero_content {
        @apply w-full h-full flex flex-row justify-center items-center bg-blend-multiply;
        background-image: linear-gradient(to right, rgba(0,0,0,0), rgba(0,0,0,0.5));
    }
    .hero_content_left_col, .hero_content_right_col {
        @apply w-1/2 h-full py-24 flex flex-col items-center;
    }
    .hero_content_left_col {
        @apply pr-24 pl-12 justify-start;
    }
    .hero_content_right_col {
        @apply pl-24 pr-12 justify-center;
    }
    .hero_title {
        @apply text-white text-4xl font-semibold mb-4 capitalize text-center;
    }
    .hero_subtitle {
        @apply text-white text-3xl font-medium mt-16 capitalize text-center leading-10 mb-3;
    }
    .hero_card_divider {
        @apply hidden;
    }
    .main_sponsor {
        @apply flex text-white flex-row w-full justify-center;
    }
    .main_sponsor span {
        @apply text-xs mr-4;
    }
    .main_sponsor_img {
        @apply w-56;
    }
    .hero_btn {
        @apply mt-9 font-normal tracking-wide uppercase text-white text-sm cursor-pointer leading-7 px-9 py-2.5 border-b-2 rounded border-white border-[1px] duration-[250ms] ease-in-out hover:bg-primary_red hover:text-white hover:border-primary_red;
        box-shadow: 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12), 0 3px 1px -2px rgba(0,0,0,.2);
    }
    .hero_content_date {
        @apply text-5xl text-white text-center font-bold leading-relaxed;
    } */

    /* Giner template end */

    /* // X-Small devices (portrait phones, less than 576px) */
    @media(min-width: 300px)and (max-width: 575.98px) {
        /* .hero {
            @apply h-auto;
        }
        .hero_content_left_col {
            @apply px-4 w-full;
        }
        .hero_content_right_col {
            @apply hidden;
        }
        .hero_title {
            @apply text-4xl text-center leading-normal mb-3;
        }
        .hero_subtitle {
            @apply text-3xl text-center leading-normal mt-10 mb-4;
        }
        .hero_content {
            @apply px-4;
            background-image: linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.5));
        }
        .hero_card_divider {
            @apply w-14 h-1 bg-primary_red rounded-full my-5 block;
        }
        .main_sponsor {
            @apply flex-col items-center;
        }
        .main_sponsor span {
            @apply mb-3;
        }
        .hero_btn {
            @apply text-lg font-medium;
        } */

        /* Giner template */
        .hero {
            @apply h-[100vh] bg-primary_turquoise relative mb-12 bg-[center_top];
        }
        .logo_wrapper {
            @apply h-28;
        }
        .hero_text_left_wrapper {
            @apply h-36 absolute top-40 -translate-y-0 left-2;
        }
        .hero_text_left_wrapper img {
            @apply h-full w-auto;
        }
        .hero_text_right_wrapper {
            @apply h-36 absolute top-64 right-4;
        }
        .hero_text_right_wrapper img {
            @apply h-full w-auto;
        }
        .button {
            @apply text-2xl rounded-full mt-6 font-FNB_bold font-bold text-primary_turquoise;
        }
        /* .abstract_svg {
            @apply absolute top-full w-full z-20;
        } */
        /* .hero_content {
            @apply w-full h-full flex flex-row justify-center items-center px-4 py-2 max-w-[1300px] mx-auto;
        } */
        /* .hero_slide {
            @apply h-full w-full relative flex justify-center pt-16;
        } */
        /* .center_img {
            @apply w-auto h-3/5;
        }
        .center_img img {
            @apply mx-auto h-full -translate-x-10;
        } */
        /* .hero_text_right, .hero_text_left, .hero_event  {
            @apply absolute text-white text-[2rem] w-full h-full top-0;
        }
        .hero_text_right, .hero_event {
            @apply right-0;
        } */
        /* .hero_text_left {
            @apply left-0;
        } */
        /* .hero_event_content .amber_text {
            @apply text-primary_amber font-bold block;
        } */
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

<section class="hero" style="background-image: url('{$hero_bg_design_three}');">
    <div class="logo_wrapper">
        <img src="/images/desktop_header_logo.png" alt="FNB Accra Marathon 2023" />
    </div>
    <div class="hero_text_wrapper">
        <div class="hero_text_container">
            <div class="hero_text_left_wrapper">
                <img src="/images/hero_text_left.png" alt="Accra Marathon - Hello Ghana" />
            </div>
            <div class="hero_text_right_wrapper">
                <img src="/images/hero_text_right.png" alt="Accra Marathon - Let's run for a purpose" />
            </div>
        </div>
    </div>
    <div class="button_wrapper">
        <a class="button" href="/register">
            Register
        </a>
    </div>
    <!-- <img class="abstract_svg" src={"/images/home-shape.svg"} alt="abstract shape" />
    <div class="hero_content">
        <div class="hero_slide">
            <div class="center_img">
                <img src={slide_one}/>
            </div>
            <div class="hero_text_left">
                <h5 class="hero_text_left_content">{text_left_one}<br/>&nbsp;{text_left_two}</h5>
            </div>
            <div class="hero_text_right">
                <h5 class="hero_text_right_content">{text_right_one}</h5>
            </div>
            <div class="hero_event">
                <p class="hero_event_content">ACCRA MARATHON<br/><span class="amber_text">11 NOVEMBER 2023</span></p>
            </div>
        </div>
    </div> -->
    <Countdown />
    <!-- <div class="hero_content">
        <div class="hero_content_left_col">
            <h2 class="hero_title">Accra Marathon 2023</h2><br/>
            <div class="main_sponsor">
                <span>presented by</span>
                <div class="main_sponsor_img">
                    <img src="/images/FNB-Logo.png" alt="logo"/>
                </div>
            </div>
            <h2 class="hero_subtitle">Nurturing a nation<br/>of champions.</h2>
            <div class="hero_card_divider"></div>
            <a href="/register" class="hero_btn">
                <span>Register now</span>
            </a>
            <a href="/register" class="hero_btn">
                <span>Make a Donation</span>
            </a>
        </div>
        <div class="hero_content_right_col">
            <h2 class="hero_content_date">Saturday,<br/>November 11,<br/>2023</h2>
        </div>
    </div> -->
</section>