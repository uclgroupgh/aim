<script>
    import { facebook, twitter, youtube, instagram, contact_email, contact_number, location } from "../stores/store";
</script>

<style lang="postcss">
    /* Giner template start*/
    .footer {
        @apply bg-white z-50 relative;
    }
    .container {
        @apply max-w-[1300px] px-4 mx-auto py-16;
    }
    .footer_content {
        @apply grid grid-cols-footer_grid_two;
    }
    .footer_col {
        @apply flex flex-col px-4;
    }
    .logo_wrapper {
        @apply mb-12;
    }
    .logo_img {
        @apply h-16;
    }
    .address {
        @apply mb-6 text-lg text-gray font-thin;
    }
    .phone {
        @apply flex flex-row items-center mb-6;
    }
    .phone img {
        @apply h-6 rotate-[270deg];
    }
    .phone span {
        @apply ml-4 text-2xl font-medium;
    }
    .email {
        @apply mb-12 text-primary_turquoise font-medium text-lg;
    }
    .copyright {
        @apply font-thin text-xs text-gray;
    }
    .footer_col_2 h4, .footer_col_3 h4, .footer_col_4 h4 {
        @apply text-xl font-semibold mb-12 h-16;
    }
    .footer_col_2 ul li, .footer_col_3 ul li {
        @apply mb-4 text-base text-gray font-thin;
    }
    .email_input {
        @apply flex flex-row;
    }
    .email_input button {
        @apply bg-primary_turquoise max-h-[50px] max-w-[50px] w-full block;
    }
    .email_input button img {
        @apply h-5 w-5 mx-auto;
    }
    input[type="email"] {
        @apply w-full h-[50px] px-[20px] border border-gray-input-border text-[1.1rem] font-normal;
        -webkit-transition: .35s ease;
        transition: .35s ease;
    }
    input[type="email"]:hover, input[type="email"]:focus {
        @apply outline-0;
        border-color: #00A9AC;
        -webkit-box-shadow: 0px 0px 10px rgba(0,169,172,0.3);
        box-shadow: 0px 0px 10px rgba(0,169,172,0.3);
    }
    .footer_col_4 form p {
        @apply mt-12 text-sm text-gray;
    }
    .footer_col_4 form p a {
        @apply font-bold text-primary_turquoise leading-7;
    } 
    .footer_col_4 {
        @apply flex flex-row justify-evenly items-center;
    }
    .footer_col_4 a {
        @apply h-48;
    }
    .footer_col_4 a img {
        @apply h-full;
    }
    /* Giner template end */

    /* .footer {
        @apply bg-gray-footer;
    } */
    /* .footer_top {
        @apply flex flex-row justify-between items-center mx-32 px-6 py-8 border-[1px] border-b-gray-border border-x-0 border-t-0;
    }
    .logo_wrapper {
        @apply flex flex-row items-center;
    }
    .logo_wrapper .logo_img {
        @apply h-16 mr-4;
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

    @media(min-width: 300px)and (max-width: 575.98px) {
        .footer {
            @apply flex flex-col-reverse;
        }
        .footer_top {
            @apply mx-4 border-0 flex-col pt-4 justify-center;
        }
        .footer_middle {
            @apply hidden;
        }
        .logo_wrapper {
            @apply mb-8;
        }
        .logo_wrapper .logo_img {
            @apply h-14 mr-0;
        }
        .socials_wrapper {
            @apply gap-3;
        }
        .social_link {
            @apply ml-0;
        }
    }

    @media(min-width: 577px)and (max-width: 767.98px) {
        .footer_middle {
            @apply mx-8;
        }
    }

    @media(min-width: 767.99px)and (max-width: 991.98px) {
        
    }

    @media(min-width: 991.99px)and (max-width: 1199.98px) {
        
    } */

    @media(min-width: 300px)and (max-width: 575.98px) {
        
        .footer_content {
            @apply flex flex-col;
        }
        .footer_col {
            @apply flex flex-col px-4;
        }
        .footer_col_2, .footer_col_3 {
            @apply hidden;
        }
        .email {
            @apply mb-8;
        }
        .footer_col_4 {
            @apply mt-6 flex-row-reverse;
        }
        .footer_col_4 a {
            @apply h-28;
        }
        .footer_col_4 a img {
            @apply h-full;
        }
    }
</style>

<section class="footer">
    <div class="container">
        <div class="footer_content">
            <div class="footer_col footer_col_1">
                <a class="logo_wrapper" href="/">
                    <img class="logo_img" src="/images/desktop_header_logo.png" alt="Accra Marathon logo"/>
                </a>
                <p class="address">{$location}</p>
                <ul>
                    <li class="phone">
                        <img src="/images/phone_icon.png" alt="phone icon" />
                        <span>{$contact_number}</span>
                    </li>
                    <li class="email">
                        <span>{$contact_email}</span>
                    </li>
                </ul>
                <span class="copyright">Accra Marathon &#169; 2023. All Rights Reserved</span>
            </div>
            <!-- <div class="footer_col footer_col_2">
                <h4>Event</h4>
                <ul>
                    <li>
                        <a href="#about">About</a>
                    </li>
                    <li>
                        <a href="#">News</a>
                    </li>
                    <li>
                        <a href="#">Key figures</a>
                    </li>
                    <li>
                        <a href="#">Runners' Photo</a>
                    </li>
                    <li>
                        <a href="#results">Results</a>
                    </li>
                    <li>
                        <a href="#partners">Partners</a>
                    </li>
                </ul>
            </div> -->
            <div class="footer_col footer_col_3">
                <h4></h4>
                <ul>
                    <li>
                        <a href={$facebook}>Facebook</a>
                    </li>
                    <li>
                        <a href={$twitter}>Twitter</a>
                    </li>
                    <li>
                        <a href={$instagram}>Instagram</a>
                    </li>
                    <li>
                        <a href={$youtube}>Youtube</a>
                    </li>
                </ul>

            </div>
            <div class="footer_col footer_col_4">
                <!-- <h4>Subscribe to our newsletter. Stay up to date with our latest news and updates.</h4>
                <form>
                    <div class="email_input">
                        <input type="email" placeholder="Email"/>
                        <button type="submit">
                            <img src="/images/paper-plane.png" alt="submit email"/>
                        </button>
                    </div>
                    <p>By clicking the button you agree to the <a href="#">Privacy Policy</a> and <a href="#">Terms and Conditions</a></p>
                </form> -->

                <a target="_blank" href="https://www.firstnationalbank.com.gh/">
                    <img src="/images/fnb_footer_logo.png" alt="fnb_logo"/>
                </a>
                <a href="https://www.instagram.com/dkfc_rats_rabbits/" target="_blank">
                    <img src="/images/dkfc_footer_logo.png" alt="dkfc_logo"/>
                </a>
            </div>
        </div>
    </div>
    <!-- <div class="footer_top">
        <div class="logo_wrapper">
            <img src="/images/accramarathonlogo_white.png" alt="running man" class="logo_img" />
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
        <span>© Copyright 2023. Accra Marathon</span>
    </div> -->
</section>