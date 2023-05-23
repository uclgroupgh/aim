<style lang="postcss">
  .about_hero {
    @apply bg-about_hero bg-cover h-auto p-8 relative;
  }
  .about_hero_card {
    @apply bg-white bg-opacity-90 w-1/2 p-5 h-fit mb-28;
  }
  .about_hero_card_title {
    @apply text-4xl mb-5;
  }
  .about_hero_card_divider {
    @apply w-14 h-1 bg-primary_red rounded-full mb-5;
  }
  .about_hero_card_subtitle {
    @apply text-lg tracking-wide mb-8;
  }
  .about_hero_card_btn {
    @apply w-fit font-normal text-white text-base cursor-pointer leading-7 px-8 py-3.5 border-b-2 rounded border-primary_red border-[1px] bg-primary_red duration-[250ms] ease-in-out hover:bg-primary_red_dark hover:text-white;
    box-shadow: 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12), 0 3px 1px -2px rgba(0,0,0,.2);
  }
  .about_hero_card_btn_text {
    @apply text-white;
  }
  .background_caption {
    @apply bg-gray-footer bg-opacity-90 absolute bottom-0 px-5 py-2.5;
  }
  .background_caption_text {
    @apply text-white text-sm;
  }
  .scroll_to_mission {
    @apply p-2.5 absolute bottom-0 w-fit h-fit bg-black rounded-full flex justify-center items-center right-1/2 translate-x-1/2 translate-y-1/2 cursor-pointer;
  }
  .down_arrow {
    @apply h-8 w-8;
  }
</style>

<section class="about_hero">
    <div class="about_hero_card">
        <h1 class="about_hero_card_title">About Us</h1>
        <div class="about_hero_card_divider"></div>
        <p class="about_hero_card_subtitle">The Accra Marathon promotes sportsmanship, healthy living and community engagement in celebrating the African spirit</p>
        <div class="about_hero_card_btn">
            <span class="about_hero_card_btn_text">Read Stories from Participants</span>
        </div>
    </div>
    <div class="background_caption">
        <span class="background_caption_text">Flashback from the 2017 Accra Marathon</span>
    </div>
    <div class="scroll_to_mission">
      <img class="down_arrow" src="/images/down_arrow.png" alt="arrow"/>
    </div>
</section>