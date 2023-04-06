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
        @apply flex items-center justify-center ml-2;
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
                    <img src="/images/facebook_white.png" alt="facebook logo" class="logo_img"/>
                </a>
            </div>
            <div class="social_link">
                <a href="https://www.facebook.com/aimghana/">
                    <img src="/images/instagram_white.png" alt="instagram logo" class="logo_img"/>
                </a>
            </div>
            <div class="social_link">
                <a href="https://www.facebook.com/aimghana/">
                    <img src="/images/twitter_white.png" alt="twitter logo" class="logo_img"/>
                </a>
            </div>
            <div class="social_link">
                <a href="https://www.facebook.com/aimghana/">
                    <img src="/images/youtube_white.png" alt="youtube logo" class="logo_img"/>
                </a>
            </div>
        </div>
    </div>
    <div class="footer_middle">
        <ul class="footer_links_wrapper">
            <li>
                <a href="event" class="link_header">What's New</a>
                <ul class="link_list">
                    <li>
                        <a href="#">Updates</a>
                    </li>
                    <li>
                        <a href="#">News & Events</a>
                    </li>       
                </ul>
            </li>
            <li>
                <a href="event" class="link_header">Contact Us</a>
                <ul class="link_list">
                    <li>
                        <a href="#">info@accramarathon.com</a>
                    </li>
                    <li>
                        <a href="#">055 555 5555</a>
                    </li>
                    <li>
                        <a href="#">Live chat</a>
                    </li>        
                </ul>
            </li>
            <li>
                <a href="event" class="link_header">Dansoman Keep Fit Club</a>
                <ul class="link_list">
                    <li>
                        <a href="#">About the club</a>
                    </li>
                    <li>
                        <a href="#">Join the club</a>
                    </li>        
                </ul>
            </li>
        </ul>
    </div>
    <div class="footer_bottom">
        <span>© Copyright 2023. Accra International Marathon</span>
    </div>
</section>