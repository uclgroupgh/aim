<script>
    export let bgd_image;
    export let title;
    export let subtitle;
    export let btnText;
    export let btnLink;
    export let captionText;
    export let needsScrollTo;
</script>

<style lang="postcss">
    .second_hero {
      @apply bg-cover h-auto p-8 relative;
    }
    .second_hero_card {
      @apply bg-white bg-opacity-90 w-1/2 p-5 h-fit mb-28;
    }
    .second_hero_card_title {
      @apply text-4xl mb-5;
    }
    .second_hero_card_divider {
      @apply w-14 h-1 bg-primary_red rounded-full mb-5;
    }
    .second_hero_card_subtitle {
      @apply text-lg tracking-wide mb-8;
    }
    .second_hero_card_btn {
      @apply block w-fit font-normal text-white text-base cursor-pointer leading-7 px-8 py-3.5 border-b-2 rounded border-primary_red border-[1px] bg-primary_red duration-[250ms] ease-in-out hover:bg-primary_red_dark hover:text-white;
      box-shadow: 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12), 0 3px 1px -2px rgba(0,0,0,.2);
    }
    .second_hero_card_btn_text {
      @apply text-white;
    }
    .second_hero_card_mobile {
      @apply hidden;
    }
    .background_caption {
      @apply bg-gray-footer bg-opacity-90 absolute bottom-0 px-5 py-2.5;
    }
    .background_caption_text {
      @apply text-white text-sm;
    }
    .scroll_to {
      @apply p-2.5 absolute bottom-0 w-fit h-fit bg-black rounded-full flex justify-center items-center right-1/2 translate-x-1/2 translate-y-1/2 cursor-pointer;
    }
    .down_arrow {
      @apply h-8 w-8;
    }

    /* // X-Small devices (portrait phones, less than 576px) */
    @media(min-width: 300px)and (max-width: 575.98px) {
      .second_hero {
        @apply bg-cover h-48 p-0 relative;
      }
      .second_hero_card_mobile {
        @apply bg-off_white w-full p-5 h-fit block;
      }
      .second_hero_card_mobile_title {
        @apply text-4xl mb-5;
      }
      .second_hero_card_mobile_divider {
        @apply w-14 h-1 bg-primary_red rounded-full mb-5;
      }
      .second_hero_card_mobile_subtitle {
        @apply text-base tracking-wide leading-9 mb-8 text-justify;
      }
      .second_hero_card_mobile_btn {
        @apply block w-fit font-normal text-white text-base cursor-pointer leading-7 px-5 py-3.5 border-b-2 rounded border-primary_red border-[1px] bg-primary_red duration-[250ms] ease-in-out hover:bg-primary_red_dark hover:text-white;
        box-shadow: 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12), 0 3px 1px -2px rgba(0,0,0,.2);
      }
      .second_hero_card_mobile_btn_text {
        @apply text-white;
      }
      .second_hero_card {
        @apply hidden;
      }
      .background_caption {
        @apply hidden;
      }
      .scroll_to {
        @apply hidden;
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

<section class="second_hero {bgd_image}">
    <div class="second_hero_card">
        <h1 class="second_hero_card_title">{title}</h1>
        <div class="second_hero_card_divider"></div>
        <p class="second_hero_card_subtitle">{subtitle}</p>
        {#if btnText}
            <a href={btnLink} class="second_hero_card_btn">
                <span class="second_hero_card_btn_text">{btnText}</span>
            </a>
        {/if}
    </div>
    {#if captionText}
      <div class="background_caption">
          <span class="background_caption_text">{captionText}</span>
      </div>
    {/if}
    {#if needsScrollTo}
        <div class="scroll_to">
            <img class="down_arrow" src="/images/down_arrow.png" alt="arrow"/>
        </div>
    {/if}
</section>

<div class="second_hero_card_mobile">
  <h1 class="second_hero_card_mobile_title">{title}</h1>
  <div class="second_hero_card_mobile_divider"></div>
  <p class="second_hero_card_mobile_subtitle">{subtitle}</p>
  {#if btnText}
      <a href={btnLink} class="second_hero_card_mobile_btn">
          <span class="second_hero_card_mobile_btn_text">{btnText}</span>
      </a>
  {/if}
</div>