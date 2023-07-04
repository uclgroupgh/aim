<style lang="postcss">
    .about_three_column {
        @apply py-20 px-64;
    }
    .three_column_wrapper {
        @apply flex flex-row gap-8;
    }
    .column {
        @apply flex-[1];
    }
    .img_wrapper {
        @apply h-48 mb-8 block;
    }
    .col_img {
        @apply object-cover w-full h-full;
    }
    .column_title {
        @apply text-2xl font-light mb-8;
    }
    .col_summary {
        @apply text-sm leading-loose mb-10;
    }
    .col_btn {
        @apply block w-fit h-fit rounded-full p-2.5 cursor-pointer duration-[250ms] ease-in-out mx-auto;
        box-shadow: 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12), 0 3px 1px -2px rgba(0,0,0,.2);
    }
    .col_btn:hover {
        box-shadow: 0 4px 5px 0 rgba(0,0,0,.14), 0 1px 10px 0 rgba(0,0,0,.12), 0 2px 4px -1px rgba(0,0,0,.3);
    }
    .right_blue_arrow {
        @apply h-8 w-8;
    }

    /* // X-Small devices (portrait phones, less than 576px) */
    @media(min-width: 300px)and (max-width: 575.98px) {
        .about_three_column {
            @apply px-4 pt-16;
        }
        .three_column_wrapper {
            @apply flex-col gap-16;
        }
        .column_title {
            @apply text-3xl mb-6;
        }
        .col_summary {
            @apply text-base tracking-wide leading-9 mb-7;
        }
        .col_btn {
            @apply mx-auto;
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

<section class="about_three_column">
    <div class="three_column_wrapper">
        <div class="column">
            <a href="/about/values" class="img_wrapper">
                <img class="col_img" src="/images/values.jpg" alt="Accra Marathon values"/>
            </a>
            <h3 class="column_title">Our Values</h3>
            <p class="col_summary">The Accra Marathon exemplifies competitiveness, community building, well-being, social responsibility, and innovativeness, ensuring a vibrant and inclusive event that inspires individuals and uplifts society.</p>
            <a href="/about/values" class="col_btn">
                <img class="right_blue_arrow" src="/images/right_blue_arrow.png" alt="blue arrow"/>
            </a>
        </div>
        <div class="column">
            <a href="/history" class="img_wrapper">
                <img class="col_img" src="/images/our_history.jpg" alt="Accra Marathon history"/>
            </a>
            <h3 class="column_title">History</h3>
            <p class="col_summary">The Accra Marathon is an annual long-distance running event that takes place in Accra, the capital city of Ghana. It was first held in 1987 and has since become one of the biggest marathons in West Africa.</p>
            <a href="/history" class="col_btn">
                <img class="right_blue_arrow" src="/images/right_blue_arrow.png" alt="blue arrow"/>
            </a>
        </div>
        <div class="column">
            <a href="/about/impact" class="img_wrapper">
                <img class="col_img" src="/images/impact.jpg" alt="Accra Marathon impact"/>
            </a>
            <h3 class="column_title">Impact</h3>
            <p class="col_summary">The Accra Marathon has helped promote health and fitness among people of all ages and abilities. Many people take up running and training for a marathon as a way to improve their health and fitness.</p>
            <a href="/about/impact" class="col_btn">
                <img class="right_blue_arrow" src="/images/right_blue_arrow.png" alt="blue arrow"/>
            </a>
        </div>
    </div>
</section>