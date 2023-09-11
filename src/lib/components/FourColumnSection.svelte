<style lang="postcss">
    .four_column_section {
        @apply  relative bg-white py-40 px-16;
        -webkit-clip-path: polygon(100% 0%, 100% 95%, 50% 100%, 0 95%, 0 0, 50% 7%);
        clip-path: polygon(100% 0%, 100% 95%, 50% 100%, 0 95%, 0 0, 50% 7%);
    }
    .four_column_bg {
        @apply absolute top-0 bottom-0 left-0 right-0 bg-four_col bg-[center_top] bg-cover bg-no-repeat;
    }
    .four_column_title {
        @apply text-4xl font-bold text-center mb-16;
    }
    .four_column_grid {
        @apply grid grid-cols-four_cols relative gap-6 max-w-[1300px] mx-auto;
    }
    .col {
        @apply flex flex-col items-center h-auto;
    }
    .col_icon_wrapper {
        @apply mb-6 h-16;
    }
    .col_icon_wrapper img {
        @apply h-full;
    }
    .col h6 {
        @apply text-2xl font-bold mb-6;
    }
    .col p {
        @apply text-center text-lg;
    }

    
    @media(min-width: 300px)and (max-width: 575.98px) {
        .four_column_grid {
            @apply flex flex-col;
        }
    }

   
    @media(min-width: 577px)and (max-width: 767.98px) {

    }

    
    @media(min-width: 767.99px)and (max-width: 991.98px) {

    }

  
    @media(min-width: 991.99px)and (max-width: 1199.98px) {
        
        
    }
</style>
<section class="four_column_section">
    <span class="four_column_bg"></span>
    <h4 class="four_column_title">Reasons to run with us!</h4>
    <div class="four_column_grid">
        <div class="col">
            <div class="col_icon_wrapper">
                <img src="/images/quick_registration.png" alt="icon" />
            </div>
            <h6>Quick registration</h6>
            <p>Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing</p>
        </div>
        <div class="col">
            <div class="col_icon_wrapper">
                <img src="/images/bus-school.png" alt="icon" />
            </div>
            <h6>Delivery to the venue</h6>
            <p>Voluptatibus Molestiae Aperiam Ducimus, Architecto</p>
        </div>
        <div class="col">
            <div class="col_icon_wrapper">
                <img src="/images/water.png" alt="icon" />
            </div>
            <h6>Water for participants</h6>
            <p>Cumque Odio Dolorum Expedita Ea Illo Sit Laboriosam</p>
        </div>
        <div class="col">
            <div class="col_icon_wrapper">
                <img src="/images/nurse.png" alt="icon" />
            </div>
            <h6>Medical staff</h6>
            <p>Consectetur Adipiscing Elit, Sed Eiusmod Tempor</p>
        </div>
    </div>
</section>