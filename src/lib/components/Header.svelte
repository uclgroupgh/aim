<script>
	import { fade } from 'svelte/transition';
    import { showRegisterMenu, showCourseMenu, showHistoryMenu, showTrainingMenu, showChampionsMenu } from '../../stores/store';

    const handleShowCourseMenu = () => {
        $showCourseMenu = true;
    }
    const handleHideCourseMenu = () => {
        $showCourseMenu = false;
    }

    const handleShowHistoryMenu = () => {
        $showHistoryMenu = true;
    }
    const handleHideHistoryMenu = () => {
        $showHistoryMenu = false;
    }

    const handleShowRegisterMenu = () => {
        $showRegisterMenu = true;
    }
    const handleHideRegisterMenu = () => {
        $showRegisterMenu = false;
    }

    const handleShowTrainingMenu = () => {
        $showTrainingMenu = true;
    }
    const handleHideTrainingMenu = () => {
        $showTrainingMenu = false;
    }

    const handleShowChampionsMenu = () => {
        $showChampionsMenu = true;
    }
    const handleHideChampionsMenu = () => {
        $showChampionsMenu = false;
    }
</script>

<style lang="postcss">
    .header {
        @apply z-50;
    }
    .header_top {
        @apply w-full flex flex-row justify-between items-center px-16 my-6;
    }
    .logo_wrapper {
        @apply flex flex-row items-center;
    }
    .logo_img {
        @apply h-12 mr-4;
    }
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
    .header_bottom {
        @apply w-full flex flex-row;
    }
    .primary_menu {
        @apply w-full flex flex-row justify-center items-center bg-gray-lighter font-light;
    }
    .primary_menu_item {
        @apply p-5 border-gray-border grow text-center flex justify-center uppercase tracking-wide cursor-pointer relative border-r-[1px];
    }
    .link_list {
        @apply z-50 absolute top-full w-full bg-gray-lighter border-r-[1px] border-gray-border box-content;
    }
    .link_list_item {
        @apply p-5 border-t-[1px] border-gray-border text-center flex justify-center uppercase tracking-wide cursor-pointer relative ease-in-out hover:bg-gray-border;
    }
    .primary_menu li img {
        @apply h-6 w-6;
    }


    @media(min-width: 300px)and (max-width: 575.98px) {
        .header_bottom {
            @apply hidden;
        }
        .secondary_menu {
            @apply hidden;
        }
        .logo_img {
        @apply h-9 mr-4;
    }
    .logo_title {
        @apply text-base ;
    }
    }

    @media(min-width: 577px)and (max-width: 767.98px) {
        .header_bottom {
            @apply hidden;
        }
        .secondary_menu {
            @apply hidden;
        }
    }

    @media(min-width: 767.99px)and (max-width: 991.98px) {
        
    }

    @media(min-width: 991.99px)and (max-width: 1199.98px) {
        
    }
</style>

<section class="header">
    <div class="header_top">
        <div class="logo_wrapper">
            <img src="/images/logo.png" alt="Accra International Marathon logo" class="logo_img"/>
            <h1 class="logo_title">Accra International Marathon</h1>
        </div>
        <ul class="secondary_menu">
            <li class="link">Contact Us</li>
            <li class="btn">Register Now</li>
        </ul>
    </div>
    <div class="header_bottom">
        <ul class="primary_menu">
            <li class="primary_menu_item">
                <a href="/about" class="link_header">About</a>
                <!-- {#if $showEventMenu}
                    <ul class="link_list" in:fade>
                        <li class="link_list_item">
                            <a href="/event/about">About</a>
                        </li>
                        <li class="link_list_item">
                            <a href="/event/vision">Vision</a>
                        </li>
                        <li class="link_list_item">
                            <a href="/event/vision">Values</a>
                        </li>
                        <li class="link_list_item">
                            <a href="/event/impact">Impact</a>
                        </li>
                    </ul>
                {/if} -->
            </li>
            <li on:mouseenter={handleShowCourseMenu} on:mouseleave={handleHideCourseMenu} class="primary_menu_item">
                <a href="/course" class="link_header">Course</a>
                {#if $showCourseMenu}
                    <ul class="link_list" in:fade>
                        <li class="link_list_item">
                            <a href="/course/map">Route Map</a>
                        </li>
                        <li class="link_list_item">
                            <a href="/course/rules">Rules</a>
                        </li>        
                    </ul>
                {/if}
            </li>
            <li on:mouseenter={handleShowHistoryMenu} on:mouseleave={handleHideHistoryMenu} class="primary_menu_item">
                <a href="/history" class="link_header">History</a>
                {#if $showHistoryMenu}
                    <ul class="link_list" in:fade>
                        <li class="link_list_item">
                            <a href="/history/1980's">1980's</a>
                        </li>
                        <li class="link_list_item">
                            <a href="/history/1990's">1990's</a>
                        </li>
                        <li class="link_list_item">
                            <a href="/history/2000's">2000's</a>
                        </li>
                        <li class="link_list_item">
                            <a href="/history/2010's">2010's</a>
                        </li>
                        <li class="link_list_item">
                            <a href="/history/2020's">2020's</a>
                        </li>          
                    </ul>
                {/if}
            </li>
            <li on:mouseenter={handleShowRegisterMenu} on:mouseleave={handleHideRegisterMenu} class="primary_menu_item">
                <a href="/register" class="link_header">Register</a>
                {#if $showRegisterMenu}
                    <ul class="link_list" in:fade>
                        <li class="link_list_item">
                            <a href="/register/forms">Forms</a>
                        </li>
                        <li class="link_list_item">
                            <a href="/register/requirements">Requirements</a>
                        </li>
                        <li class="link_list_item">
                            <a href="/register/payment">Payment</a>
                        </li>      
                    </ul>
                {/if}
            </li>
            <li on:mouseenter={handleShowTrainingMenu} on:mouseleave={handleHideTrainingMenu} class="primary_menu_item">
                <a href="/training" class="link_header">Training</a>
                {#if $showTrainingMenu}
                    <ul class="link_list" in:fade>
                        <li class="link_list_item">
                            <a href="/training/preparation">Preparing for the Race</a>
                        </li>
                        <li class="link_list_item">
                            <a href="/training/tips">Tips</a>
                        </li>
                        <li class="link_list_item">
                            <a href="/training/routines">Training Routines</a>
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
                        <li class="link_list_item">
                            <a href="/champions/goodwill-messages">Goodwill messages</a>
                        </li>      
                    </ul>
                {/if}
            </li>
            <li class="primary_menu_item">
                <a href="/sponsors" class="link_header">Sponsors</a>
            </li>
        </ul>
    </div>
</section>