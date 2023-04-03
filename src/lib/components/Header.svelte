<script>
	import { fade } from 'svelte/transition';
    import { showRegisterMenu, showEventMenu } from '../../stores/store'

    const handleShowRegisterMenu = () => {
        $showRegisterMenu = true;
    }
    const handleHideRegisterMenu = () => {
        $showRegisterMenu = false;
    }
    const handleShowEventMenu = () => {
        $showEventMenu = true;
    }
    const handleHideEventMenu = () => {
        $showEventMenu = false;
    }

</script>

<style lang="postcss">
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
        @apply absolute top-full w-full bg-gray-lighter border-r-[1px] border-gray-border box-content;
    }
    .link_list_item {
        @apply p-5 border-t-[1px] border-gray-border text-center flex justify-center uppercase tracking-wide cursor-pointer relative ease-in-out hover:bg-gray-border;
    }
    .primary_menu li img {
        @apply h-6 w-6;
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
            <li on:mouseenter={handleShowRegisterMenu} on:mouseleave={handleHideRegisterMenu} class="primary_menu_item">
                <a href="/register" class="link_header">Register</a>
                {#if $showRegisterMenu}
                    <ul class="link_list" in:fade>
                        <li class="link_list_item">
                            <a href="/register">Marathon</a>
                        </li>
                        <li class="link_list_item">
                            <a href="/register">Half Marathon</a>
                        </li>
                        <li class="link_list_item">
                            <a href="/register">Relay</a>
                        </li>
                        <li class="link_list_item">
                            <a href="/register">10K</a>
                        </li>
                        <li class="link_list_item">
                            <a href="/register">5K</a>
                        </li>          
                    </ul>
                {/if}
            </li>
            <li on:mouseenter={handleShowEventMenu} on:mouseleave={handleHideEventMenu} class="primary_menu_item">
                <a href="/event" class="link_header">Event</a>
                {#if $showEventMenu}
                    <ul class="link_list" in:fade>
                        <li class="link_list_item">
                            <a href="/event">Directors' message</a>
                        </li>
                        <li class="link_list_item">
                            <a href="/event">Race map</a>
                        </li>
                        <li class="link_list_item">
                            <a href="/event">Event schedule</a>
                        </li>
                        <li class="link_list_item">
                            <a href="/event">Prize money</a>
                        </li>
                        <li class="link_list_item">
                            <a href="/event">FAQ</a>
                        </li>
                    </ul>
                {/if}
            </li>
            <li class="primary_menu_item">Training</li>
            <li class="primary_menu_item">Results</li>
            <li class="primary_menu_item">News</li>
            <li class="primary_menu_item">Sponsors</li>
            <li class="primary_menu_item">
                <img src="/images/search.png" alt="Magnifying glass"/>
            </li>
        </ul>
    </div>
</section>