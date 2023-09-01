<script>
    export let card_one_logo;
    export let card_one_bgd;
    export let card_one_title;
    export let card_one_subtitle;
    export let card_one_link_text;
    export let card_one_link_url;
    export let card_two_logo;
    export let card_two_bgd;
    export let card_two_title;
    export let card_two_subtitle;
    export let card_two_link_text;
    export let card_two_link_url;
</script>

<style lang="postcss">
    .two_column_card_grid {
        @apply mb-32 flex flex-row w-full gap-8;
    }
    .card {
        @apply flex flex-row w-1/2;
    }
    .card_image_content {
        @apply h-80 w-1/2 bg-cover bg-center bg-blend-soft-light bg-primary_blue flex items-center justify-center;
    }
    .card_image_content img {
        @apply h-32;
    }
    .card_text_content {
        @apply w-1/2 px-6 py-8 flex flex-col justify-between;
    }
    .card_text_content h3 {
        @apply font-extrabold text-primary_blue uppercase text-3xl mb-4;
    }
    .card_text_subtitle  {
        @apply text-lg mb-6;
    }
    .card_btn {
        @apply w-fit font-normal tracking-wide uppercase bg-primary_red text-white text-sm cursor-pointer leading-7 px-9 py-2.5 border-b-2 rounded border-primary_red border-[1px] duration-[250ms] ease-in-out hover:bg-primary_red_dark hover:border-primary_red_dark;
        box-shadow: 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12), 0 3px 1px -2px rgba(0,0,0,.2);
    }
</style>

<div class="two_column_card_grid">
    <div class="card">
        <div class="card_image_content {card_one_bgd}">
            <img src={card_one_logo} alt="logo"/>
        </div>
        <div class="card_text_content">
            <div class="card_text_title">
                <h3>{card_one_title}</h3>
                <span class="card_text_subtitle">{card_one_subtitle}</span>
            </div>
            <a href={card_one_link_url} class="card_btn">
                <span>{card_one_link_text}</span>
            </a>
        </div>
    </div>
    <div class="card">
        <div class="card_image_content {card_two_bgd}">
            <img src={card_two_logo} alt="logo"/>
        </div>
        <div class="card_text_content">
            <div class="card_text_title">
                <h3>{card_two_title}</h3>
                <span class="card_text_subtitle">{card_two_subtitle}</span>
            </div>
            <a href={card_two_link_url} class="card_btn">
                <span>{card_two_link_text}</span>
            </a>
        </div>
    </div>
</div>