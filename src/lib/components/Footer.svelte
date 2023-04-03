<style lang="postcss">
    .footer {
        @apply bg-gray-footer;
    }
    .footer_top {
        @apply flex flex-row justify-between items-center mx-32 px-6 py-8 border-[1px] border-b-gray-border border-x-0 border-t-0;
    }
    .logo_wrapper {
        @apply flex flex-row items-center;
    }
    .logo_wrapper .logo_img {
        @apply h-12 mr-4;
    }
    .logo_title {
        @apply text-xl font-extralight tracking-wide text-white;
    }
    .socials_wrapper {
        @apply flex flex-row;
    }
    .social_link {
        @apply flex items-center justify-center;
    }
    .social_link .logo_img {
        @apply h-8 w-8;
    }
    .footer_middle {
        @apply mx-32 py-8 border-[1px] border-b-gray-border border-x-0 border-t-0;
    }
    .footer_links_wrapper {
        @apply flex flex-row justify-between px-6;
    }
    .link_header {
        @apply uppercase font-extralight text-sm text-gray-footer-secondary;
    }
    .link_list {
        @apply mt-2.5 text-gray-footer-secondary text-sm font-light;
    }
    .link_list li {
        @apply mb-1;
    }
    .footer_bottom {
        @apply text-center text-white bg-gray-footer text-sm py-5 font-extralight;
    }
</style>

<section class="footer">
    <div class="footer_top">
        <div class="logo_wrapper">
            <img src="/images/logo_white.png" alt="running man" class="logo_img" />
            <h1 class="logo_title">Accra International Marathon</h1>
        </div>
        <div class="socials_wrapper">
            <div class="social_link">
                <a href="https://www.facebook.com/aimghana/">
                    <img src="/images/facebook_white.png" alt="running man" class="logo_img"/>
                </a>
            </div>
        </div>
    </div>
    <div class="footer_middle">
        <ul class="footer_links_wrapper">
            <li>
                <a href="event" class="link_header">Event</a>
                <ul class="link_list">
                    <li>
                        <a href="#">Lorem ipsum</a>
                    </li>
                    <li>
                        <a href="#">Lorem ipsum</a>
                    </li>
                    <li>
                        <a href="#">Lorem ipsum</a>
                    </li>
                    <li>
                        <a href="#">Lorem ipsum</a>
                    </li>
                    <li>
                        <a href="#">Lorem ipsum</a>
                    </li>        
                </ul>
            </li>
            <li>
                <a href="event" class="link_header">Training</a>
                <ul class="link_list">
                    <li>
                        <a href="#">Lorem ipsum</a>
                    </li>
                    <li>
                        <a href="#">Lorem ipsum</a>
                    </li>
                    <li>
                        <a href="#">Lorem ipsum</a>
                    </li>
                    <li>
                        <a href="#">Lorem ipsum</a>
                    </li>
                    <li>
                        <a href="#">Lorem ipsum</a>
                    </li>          
                </ul>
            </li>
            <li>
                <a href="event" class="link_header">Results</a>
                <ul class="link_list">
                    <li>
                        <a href="#">Lorem ipsum</a>
                    </li>
                    <li>
                        <a href="#">Lorem ipsum</a>
                    </li>
                    <li>
                        <a href="#">Lorem ipsum</a>
                    </li>
                    <li>
                        <a href="#">Lorem ipsum</a>
                    </li>
                    <li>
                        <a href="#">Lorem ipsum</a>
                    </li>           
                </ul>
            </li>
            <li>
                <a href="event" class="link_header">News</a>
                <ul class="link_list">
                    <li>
                        <a href="#">Lorem ipsum</a>
                    </li>
                    <li>
                        <a href="#">Lorem ipsum</a>
                    </li>
                    <li>
                        <a href="#">Lorem ipsum</a>
                    </li>
                    <li>
                        <a href="#">Lorem ipsum</a>
                    </li>
                    <li>
                        <a href="#">Lorem ipsum</a>
                    </li>          
                </ul>
            </li>
            <li>
                <a href="event" class="link_header">Sponsors</a>
                <ul class="link_list">
                    <li>
                        <a href="#">Lorem ipsum</a>
                    </li>
                    <li>
                        <a href="#">Lorem ipsum</a>
                    </li>
                    <li>
                        <a href="#">Lorem ipsum</a>
                    </li>
                    <li>
                        <a href="#">Lorem ipsum</a>
                    </li>
                    <li>
                        <a href="#">Lorem ipsum</a>
                    </li>           
                </ul>
            </li>
        </ul>
    </div>
    <div class="footer_bottom">
        <span>© Copyright 2023. Accra International Marathon</span>
    </div>
</section>