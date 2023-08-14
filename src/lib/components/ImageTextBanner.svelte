<script>
    import LinkSpan from "./LinkSpan.svelte";

    export let bgd_image;
    export let captionText;
    export let bgd_color;
    export let text_color;
    export let para_text;
    export let cta_btn_text;
    export let cta_btn_link;
    export let quote_text;
    export let quote_caption;
    export let has_link_span;
    export let heading;
</script>

<style lang="postcss">
    .image_text_banner {
        @apply w-full h-auto flex flex-row;
    }
    .image_col {
        @apply bg-cover bg-center h-auto relative w-2/5;
    }
    .image_col_caption {
      @apply bg-white bg-opacity-90 absolute bottom-0 px-5 py-2.5;
    }
    .image_col_caption_text {
      @apply text-black text-xs italic;
    }
    .text_col {
        @apply w-3/5  px-16 py-20 flex flex-col items-center;
    }
    .text_col_heading {
        @apply text-3xl font-semibold mb-6;
    }
    .text_col_para {
        @apply text-xl tracking-wide leading-loose mb-8 text-center;
    }
    .text_col_btn {
        @apply block w-fit font-normal text-base cursor-pointer leading-7 px-8 py-3.5 border-b-2 rounded border-black border-[1px] bg-yellow duration-[250ms] ease-in-out hover:bg-black hover:text-white;
        box-shadow: 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12), 0 3px 1px -2px rgba(0,0,0,.2);
    }
    .quote_wrapper {
        @apply text-white flex flex-col items-center;
    }
    .quotes {
        @apply h-16 w-16 mb-5;
    }
    .quote_open {
        @apply rotate-180;
    }
    .quote_text {
        @apply mb-5 leading-loose text-center;
    }
    .author_caption {
        @apply text-center leading-relaxed mb-5;
    }

    /* // X-Small devices (portrait phones, less than 576px) */
    @media(min-width: 300px)and (max-width: 575.98px) {
        .image_text_banner {
            @apply flex-col h-auto;
        }
        .image_col {
            @apply h-[50vh] w-full;
        }
        .image_col_caption {
            @apply hidden;
        }
        .text_col {
            @apply w-full h-auto px-4 py-8;
        }
        .text_col_para {
            @apply text-base mb-6 text-justify leading-8;
        }
        .text_col_btn {
            @apply px-6;
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

<section class="image_text_banner">
    <div class="image_col {bgd_image}">
        {#if captionText}
            <div class="image_col_caption">
                <span class="image_col_caption_text">{captionText}</span>
            </div>
        {/if}
    </div>
    <div class="text_col {bgd_color} {text_color}">
        {#if heading}
            <h2 class="text_col_heading">{heading}</h2>
        {/if}
        {#if para_text}
            <p class="text_col_para">{para_text}</p>
        {/if}
        {#if cta_btn_text}
            <a href={cta_btn_link} class="text_col_btn">
                <span class="text_col_btn_content">{cta_btn_text}</span>
            </a>
        {/if}
        {#if quote_text}
            <div class="quote_wrapper">
                <img class="quotes quote_open" src="/images/quotes.png" alt="quotes" />
                <p class="quote_text">{quote_text}
                </p>
                <span class="author_caption">{quote_caption}</span>
                <img class="quotes quote_close" src="/images/quotes.png" alt="quotes" />
            </div>
        {/if}
        {#if has_link_span}
            <LinkSpan 
                link_url={'/history'}
                link_text={'Read about our history'}
                remaining_link_text={' and our founder, Nii Ayikai Adjin-Tettey.'}
            />
        {/if}
    </div>
</section>