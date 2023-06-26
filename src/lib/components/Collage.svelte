<style lang="postcss">
    .collage {
        @apply grid grid-cols-three_column w-full grid-rows-three_row h-auto;
    }
    .grid_item {
        @apply cursor-pointer overflow-hidden;
    }
    .grid_item_image {
        @apply h-full object-cover object-center overflow-hidden scale-[1.15] hover:scale-100 duration-[350ms] ease-in-out;
    }

    /* // X-Small devices (portrait phones, less than 576px) */
    @media(min-width: 300px)and (max-width: 575.98px) {
        .collage {
            @apply grid-rows-three_row_mobile;
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

<section class="collage">
    <div class="grid_item">
        <img class="grid_item_image" src="/images/collage2.jpg" alt="facebook image"/>
    </div>
    <div class="grid_item">
        <img class="grid_item_image" src="/images/collage4.jpg" alt="facebook image"/>
    </div>
    <div class="grid_item">
        <img class="grid_item_image" src="/images/collage3.jpg" alt="facebook image"/>
    </div>
    <div class="grid_item">
        <img class="grid_item_image" src="/images/collage3.jpg" alt="facebook image"/>
    </div>
    <div class="grid_item">
        <img class="grid_item_image" src="/images/collage2.jpg" alt="facebook image"/>
    </div>
    <div class="grid_item">
        <img class="grid_item_image" src="/images/collage4.jpg" alt="facebook image"/>
    </div>
    <div class="grid_item">
        <img class="grid_item_image" src="/images/collage4.jpg" alt="facebook image"/>
    </div>
    <div class="grid_item">
        <img class="grid_item_image" src="/images/collage3.jpg" alt="facebook image"/>
    </div>
    <div class="grid_item">
        <img class="grid_item_image" src="/images/collage2.jpg" alt="facebook image"/>
    </div>
</section>