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
        @apply h-48 mb-8;
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
        @apply w-fit h-fit rounded-full p-2.5 cursor-pointer duration-[250ms] ease-in-out;
        box-shadow: 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12), 0 3px 1px -2px rgba(0,0,0,.2);
    }
    .col_btn:hover {
        box-shadow: 0 4px 5px 0 rgba(0,0,0,.14), 0 1px 10px 0 rgba(0,0,0,.12), 0 2px 4px -1px rgba(0,0,0,.3);
    }
    .right_blue_arrow {
        @apply h-8 w-8;
    }
</style>

<section class="about_three_column">
    <div class="three_column_wrapper">
        <div class="column">
            <div class="img_wrapper">
                <img class="col_img" src="/images/values.jpg" alt="Accra Marathon values"/>
            </div>
            <h3 class="column_title">Our Values</h3>
            <p class="col_summary">The Accra Marathon exemplifies competitiveness, community building, well-being, social responsibility, and innovativeness, ensuring a vibrant and inclusive event that inspires individuals and uplifts society.</p>
            <div class="col_btn">
                <img class="right_blue_arrow" src="/images/right_blue_arrow.png" alt="blue arrow"/>
            </div>
        </div>
        <div class="column">
            <div class="img_wrapper">
                <img class="col_img" src="/images/our_history.jpg" alt="Accra Marathon history"/>
            </div>
            <h3 class="column_title">History</h3>
            <p class="col_summary">The Accra Marathon is an annual long-distance running event that takes place in Accra, the capital city of Ghana. It was first held in 1987 and has since become one of the biggest marathons in West Africa.</p>
            <div class="col_btn">
                <img class="right_blue_arrow" src="/images/right_blue_arrow.png" alt="blue arrow"/>
            </div>
        </div>
        <div class="column">
            <div class="img_wrapper">
                <img class="col_img" src="/images/impact.jpg" alt="Accra Marathon impact"/>
            </div>
            <h3 class="column_title">Impact</h3>
            <p class="col_summary">The Accra Marathon has helped promote health and fitness among people of all ages and abilities. Many people take up running and training for a marathon as a way to improve their health and fitness.</p>
            <div class="col_btn">
                <img class="right_blue_arrow" src="/images/right_blue_arrow.png" alt="blue arrow"/>
            </div>
        </div>
    </div>
</section>