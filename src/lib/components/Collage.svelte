<style lang="postcss">
    .collage {
        @apply grid grid-cols-three_column w-full grid-rows-three_row h-auto;
    }
    .grid_item {
        @apply cursor-pointer overflow-hidden;
    }
    .grid_item_image {
        @apply object-cover object-center overflow-hidden scale-[1.15] hover:scale-100 duration-[350ms] ease-in-out;
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