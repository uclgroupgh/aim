<script>
	import { fade, fly, slide } from 'svelte/transition';
    import { Hamburger } from 'svelte-hamburgers';
    import { showCourseMenu, showTrainingMenu, showChampionsMenu } from '../../stores/store';

    let header_top_height, mobile_menu;
    const toggle_body = () => {
        console.log(mobile_menu.style)
        console.log(header_top_height)
        // if(window.document.body.classList.includes('mobile_nav_active')){
        //     mobile_menu.style.top = header_top_height
        // }
        window.document.body.classList.toggle('mobile_nav_active')
    }
    // const handleShowCourseMenu = () => {
    //     $showCourseMenu = true;
    // }
    // const handleHideCourseMenu = () => {
    //     $showCourseMenu = false;
    // }
    // const handleShowTrainingMenu = () => {
    //     $showTrainingMenu = true;
    // }
    // const handleHideTrainingMenu = () => {
    //     $showTrainingMenu = false;
    // }
    // const handleShowChampionsMenu = () => {
    //     $showChampionsMenu = true;
    // }
    // const handleHideChampionsMenu = () => {
    //     $showChampionsMenu = false;
    // }
    const close_mobile_menu = () => {
        open = false;
        toggle_body();
    }
    
    let open;
    
</script>

<style lang="postcss">
    /* /* :global(body.mobile_nav_active) {
        @apply overflow-hidden fixed;
    } */

    /* Giner template start */
    .header {
        @apply z-50 w-screen bg-primary_turquoise;
    }
    .header_top {
        @apply w-full flex flex-row justify-between items-center px-2 py-5 mx-auto max-w-[1300px];
    }
    .logo_wrapper {
        @apply flex flex-row items-center text-lg;
    }
    .logo_img {
        @apply h-16 mr-4;
    }
    .socials_wrapper {
        @apply flex flex-row;
    }
    .social_link {
        @apply flex items-center justify-center ml-3;
    }
    .social_link .logo_img {
        @apply h-6 w-6;
    }
    .header_bottom {
        @apply w-full flex flex-row justify-between items-center py-6 mx-auto max-w-[1300px] border-t-[1px] border-white border-opacity-30;
    }
    .primary_menu {
        @apply w-auto flex flex-row justify-center items-center font-bold text-white;
    }
    .primary_menu_link {
        @apply px-6 my-1 text-base text-center flex justify-center uppercase tracking-wide cursor-pointer duration-[250ms] ease-in-out hover:text-primary_amber;
    }
    .primary_menu_link:first-of-type {
        @apply pl-0 ml-2;
    }
    .primary_menu_link a {
        @apply tracking-widest;
    }
    .register_btn_wrapper {
        @apply bg-white text-primary_turquoise duration-[250ms] ease-in-out border-white border-2 hover:text-white hover:border-primary_amber hover:border-2 hover:bg-primary_turquoise;
    }
    .register_btn_wrapper a {
        @apply uppercase font-bold tracking-wider w-full h-full py-2.5 px-12 block;
    }
    /* Giner template end */


    /* 
    
    .logo_title {
        @apply text-2xl font-extralight tracking-wide text-primary_red;
    }
    .secondary_menu {
        @apply flex flex-row items-center mx-5 font-extralight;
    }
    .btn {
        @apply font-light text-primary_red text-sm cursor-pointer leading-7 px-7 py-1 border-b-2 rounded border-primary_red border-[1px] duration-[250ms] ease-in-out hover:bg-primary_red hover:text-white;
        box-shadow: 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12), 0 3px 1px -2px rgba(0,0,0,.2);
    }
    .link {
        @apply mx-7 cursor-pointer uppercase text-black text-sm;
    }
    
    
    .link_list {
        @apply z-50 absolute top-full w-full bg-gray-lighter border-r-[1px] border-gray-border box-content;
    }
    .link_list_item {
        @apply border-t-[1px] border-gray-border text-center flex justify-center uppercase tracking-wide cursor-pointer relative duration-[250ms] ease-in-out bg-white hover:bg-gray-lighter;
    }
    .primary_menu_item .link_header, .link_list_item a {
        @apply w-full h-full p-5;
    }
    .primary_menu li img {
        @apply h-6 w-6;
    }
    .mobile_menu_toggle_btn {
        @apply hidden;
    } */


    @media(min-width: 300px)and (max-width: 575.98px) {
        /* .header_top {
            @apply px-6 py-3 my-0 relative;
        }
        .header_bottom {
            @apply hidden;
        }
        .secondary_menu {
            @apply hidden;
        }
        .logo_img {
            @apply h-16;
        }
        .mobile_menu_toggle_btn {
            @apply flex;
        }
        .mobile_menu {
            @apply absolute left-0 right-0 bg-mobile-gray flex flex-col z-50 overflow-y-scroll top-[88px];
            height: calc(100vh - 88px);
        }
        .mobile_menu_link {
            @apply text-white text-xl border-b border-gray-input-label h-fit;
        }
        .mobile_menu_link a {
            @apply w-full h-full px-6 py-3 block;
        }
        .mobile_menu_cta_btns {
            @apply flex flex-col justify-center items-center py-6 gap-3 px-8;
        }
        .mobile_menu_cta_btn {
            @apply flex items-center justify-center w-full font-normal text-white text-xl cursor-pointer leading-7 px-8 py-3.5 border-b-2 rounded  border-[1px] duration-[250ms] ease-in-out;
            box-shadow: 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12), 0 3px 1px -2px rgba(0,0,0,.2);
        }
        .mobile_menu_cta_btn_one {
            @apply bg-med_blue border-med_blue hover:bg-blue;
        }
        .mobile_menu_cta_btn_two {
            @apply bg-primary_red border-primary_red hover:bg-primary_red_dark;
        } */
    }

    @media(min-width: 577px)and (max-width: 767.98px) {
        /* .header_bottom {
            @apply hidden;
        }
        .secondary_menu {
            @apply hidden;
        } */
    }

    @media(min-width: 767.99px)and (max-width: 991.98px) {
        
    }

    @media(min-width: 991.99px)and (max-width: 1199.98px) {
        
    }
</style>

<section class="header">

    <div class="header_top">
        <a href="/" class="logo_wrapper">
            <img src="/images/desktop_header_logo.png" alt="Accra Marathon logo" class="logo_img"/>
        </a>
        <div class="socials_wrapper">
            <div class="social_link">
                <a href="https://www.facebook.com/aimghana/">
                    <img src="/images/facebook_white.png" alt="facebook logo" class="logo_img"/>
                </a>
            </div>
            <div class="social_link">
                <a href="https://www.facebook.com/aimghana/">
                    <img src="/images/twitter_white.png" alt="twitter logo" class="logo_img"/>
                </a>
            </div>
            <div class="social_link">
                <a href="https://www.facebook.com/aimghana/">
                    <img src="/images/instagram_white.png" alt="instagram logo" class="logo_img"/>
                </a>
            </div>
            <div class="social_link">
                <a href="https://www.facebook.com/aimghana/">
                    <img src="/images/youtube_white.png" alt="youtube logo" class="logo_img"/>
                </a>
            </div>
        </div>
    </div>
    <div class="header_bottom">
        <ul class="primary_menu">
            <li class="primary_menu_link">
                <a href="">Home</a>
            </li>
            <li class="primary_menu_link">
                <a href="">course</a>
            </li>
            <li class="primary_menu_link">
                <a href="">Training</a>
            </li>
            <li class="primary_menu_link">
                <a href="">Champions</a>
            </li>
            <li class="primary_menu_link">
                <a href="">Sponsors</a>
            </li>
        </ul>
        <div class="register_btn_wrapper">
            <a href="#register">Register</a>
        </div>
    </div>
    <!-- <div class="header_top" bind:clientHeight={header_top_height}>
        <a href="/" class="logo_wrapper">
            <img src="/images/accramarathonlogo.png" alt="Accra Marathon logo" class="logo_img"/>
        </a>
        <ul class="secondary_menu">
            <li class="link">Contact Us</li>
            <li class="btn">Register Now</li>
        </ul>
        <div class="mobile_menu_toggle_btn" on:click={toggle_body}>
            <Hamburger 
            --color="#333333"
            bind:open/>
        </div>
        {#if open}
            <nav bind:this={mobile_menu} class="mobile_menu" transition:slide>

                <div class="mobile_menu_cta_btns">
                    <a on:click={close_mobile_menu} href="/register" class="mobile_menu_cta_btn mobile_menu_cta_btn_one">
                        <span class="mobile_menu_cta_btn_text">Register</span>
                    </a>
                    <a on:click={close_mobile_menu} href="/register" class="mobile_menu_cta_btn mobile_menu_cta_btn_two">
                        <span class="mobile_menu_cta_btn_text">Donate</span>
                    </a>
                </div>
                <ul>
                    <li on:click={close_mobile_menu} class="mobile_menu_link" transition:fly={{ y: -15, delay: 50 * 0 }}>
                        <a href="/about">About</a>
                    </li>
                    <li on:click={close_mobile_menu} class="mobile_menu_link" transition:fly={{ y: -15, delay: 50 * 1 }}>
                        <a href="/course">Course</a>
                    </li>
                    <li on:click={close_mobile_menu} class="mobile_menu_link" transition:fly={{ y: -15, delay: 50 * 2 }}>
                        <a href="/history">History</a>
                    </li>
                    <li on:click={close_mobile_menu} class="mobile_menu_link" transition:fly={{ y: -15, delay: 50 * 4 }}>
                        <a href="/training">Training</a>
                    </li>
                    <li on:click={close_mobile_menu} class="mobile_menu_link" transition:fly={{ y: -15, delay: 50 * 5 }}>
                        <a href="/champions">Champions</a>
                    </li>
                    <li on:click={close_mobile_menu} class="mobile_menu_link" transition:fly={{ y: -15, delay: 50 * 6 }}>
                        <a href="/sponsors">Sponsors</a>
                    </li>
                </ul>
            </nav>
        {/if}
    </div>
    <div class="header_bottom">
        <ul class="primary_menu">
            <li class="primary_menu_item">
                <a href="/about" class="link_header">About</a>
            </li>
            <li on:mouseenter={handleShowCourseMenu} on:mouseleave={handleHideCourseMenu} class="primary_menu_item">
                <a href="/course" class="link_header">Course</a>
                {#if $showCourseMenu}
                    <ul class="link_list" in:fade>
                        <li class="link_list_item">
                            <a href="/course#map">Route Map</a>
                        </li>
                        <li class="link_list_item">
                            <a href="/course#rules">Rules</a>
                        </li>        
                    </ul>
                {/if}
            </li>
            <li class="primary_menu_item">
                <a href="/history" class="link_header">History</a>
            </li>
            <li class="primary_menu_item">
                <a href="/register" class="link_header">Register</a>
            </li>
            <li on:mouseenter={handleShowTrainingMenu} on:mouseleave={handleHideTrainingMenu} class="primary_menu_item">
                <a href="/training" class="link_header">Training</a>
                {#if $showTrainingMenu}
                    <ul class="link_list" in:fade>
                        <li class="link_list_item">
                            <a href="/training#preparation">Preparing for the Race</a>
                        </li>
                        <li class="link_list_item">
                            <a href="/training#routines">Training Routines</a>
                        </li>      
                    </ul>
                {/if}
            </li>
            <li on:mouseenter={handleShowChampionsMenu} on:mouseleave={handleHideChampionsMenu} class="primary_menu_item">
                <a href="/champions" class="link_header">Champions</a>
                {#if $showChampionsMenu}
                    <ul class="link_list" in:fade>
                        <li class="link_list_item">
                            <a href="/champions/past-winners">Previous Winners</a>
                        </li>
                        <li class="link_list_item">
                            <a href="/champions/stories">Marathon Stories</a>
                        </li>    
                    </ul>
                {/if}
            </li>
            <li class="primary_menu_item">
                <a href="/sponsors" class="link_header">Sponsors</a>
            </li>
        </ul>
    </div> -->
</section>