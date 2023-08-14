<script>
    export let flex_direction;
    export let bgd_image;
    export let btnText;
    export let btnLink;
    export let text_col_header;
    export let text_col_bgd;
    export let subtitle;

    const smooth_scroll = (e) => {
        if(btnLink.startsWith('#')){
            e.preventDefault()
            const anchor = document.getElementById(btnLink.slice(1))
            window.scrollTo({
                top: anchor.offsetTop,
                behavior: 'smooth'
            })
        }
	}
</script>

<style lang="postcss">
    .two_column_hero {
        @apply h-[65vh] flex;
    }
    .img_col, .text_col {
        @apply w-1/2 h-full;
    }
    .img_col {
        @apply bg-center bg-no-repeat bg-cover;
    }
    .text_col {
        @apply px-12 flex flex-col justify-center items-center;
    }
    .text_col h1 {
        @apply text-white font-bold text-4xl opacity-90;
    }
    .subtitle {
        @apply mt-8 text-white text-base tracking-wide leading-7;
    }
    .two_column_text_col_btn {
      @apply block w-fit font-normal text-white text-base cursor-pointer leading-7 mt-12 px-8 py-3.5 border-b-2 rounded border-white border-[1px] bg-transparent duration-[250ms] ease-in-out hover:bg-white hover:text-black;
      box-shadow: 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12), 0 3px 1px -2px rgba(0,0,0,.2);
    }
</style>

<section class="two_column_hero {flex_direction}">
    <div class="img_col {bgd_image}"></div>
    <div class="text_col {text_col_bgd}">
        {#if text_col_header}
            <h1>{text_col_header}</h1>
        {/if}
        {#if subtitle}
            <p class="subtitle">{subtitle}</p>
        {/if}
        {#if btnText}
            <a href={btnLink} on:click={smooth_scroll} class="two_column_text_col_btn">
                <span class="two_column_text_col_btn_text">{btnText}</span>
            </a>
        {/if}
    </div>
</section>