<script>
    import { fade } from 'svelte/transition';
    import TwoColumnHero from '../../../../lib/components/TwoColumnHero.svelte';
    import Paragragh from '../../../../lib/components/Paragragh.svelte';
</script>

<style lang="postcss">
    .main_impact_component {
        @apply px-72 py-16 bg-impact_gray;
    }
    .call_to_action_component {
        @apply bg-violet px-72 py-16;
    }
    .two_column {
        @apply flex flex-row gap-12;
    }
    .column_card {
        @apply w-1/2 bg-white;
    }
    .impact_header {
        @apply text-3xl text-center mb-6 px-6 leading-9;
    }
    .impact_paragraph {
        @apply mb-16 px-6 leading-8 text-lg;
    }
    .img_wrapper {
        @apply w-full h-60;
    }
    .img_wrapper img {
        @apply object-cover w-full h-full;
    }
    .impact_card_text {
        @apply mx-5 my-7 text-justify leading-7;
    }
    .call_to_action_component h3 {
        @apply text-3xl text-center mb-10 px-6 leading-9 text-white;
    }
    .card_content_btn {
        @apply w-fit font-normal text-primary_red text-sm cursor-pointer leading-7 px-7 py-1 border-b-2 rounded border-primary_red border-[1px] duration-[250ms] ease-in-out hover:bg-primary_red hover:text-white;
        box-shadow: 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12), 0 3px 1px -2px rgba(0,0,0,.2);
    }
    .card_content {
        @apply flex flex-col mx-6 my-9;
    }
    .card_content h4 {
        @apply text-xl mb-6;
    }
</style>

<main transition:fade>
    <TwoColumnHero 
        text_col_bgd={'bg-violet'}
        flex_direction={'flex-row'}
        bgd_image={'bg-impact_hero'}
        subtitle={'At the Accra Marathon, we believe in running for a purpose beyond the finish line.'}
        text_col_header={'Embracing a Legacy of Positive Change'}
    />
    <Paragragh 
        content={'Over the years, our event has transcended its role as a mere race, evolving into a platform that drives transformation, unity, and empowerment. Explore how the Accra Marathon has made an enduring impact on various dimensions.'}
    />
    <div class="main_impact_component">
        <h3 class="impact_header">Whether you're a runner, a supporter, or a partner, your involvement matters.</h3>
        <p class="impact_paragraph">Together, we're writing a story of positive change, unity, and progress that goes beyond the race itself.  Through charity partnerships and fundraising efforts, we've made a tangible difference in the lives of those in need, embodying the true essence of social responsibility.</p>
        <div class="two_column">
            <div class="column_card">
                <div class="img_wrapper">
                    <img src="/images/impact_six.jpg" alt="donating shoes to kids in school" />
                </div>
                <p class="impact_card_text">Beyond the course, the Accra Marathon is committed to giving back. Our initiatives extend to social causes that <b>uplift the lives of the less fortunate.</b></p>
            </div>
            <div class="column_card">
                <div class="img_wrapper">
                    <img src="/images/impact_three.jpg" alt="donating shoes to kids in school" />
                </div>
                <p class="impact_card_text">The event serves as a <b>unifying force.</b> It's a day when neighbors become friends and strangers become supporters, all cheering for a common goal.</p>
            </div>
        </div>
    </div>
    <Paragragh 
        icon_URL={'/images/rising_cedi.png'}
        content={'Through the collective energy of participants, supporters, and sponsors, the Accra Marathon generates significant economic impact for local communities. Every stride taken on our course contributes to the growth of businesses, creating opportunities and fostering sustainable development within the region.'}
    />
    <div class="call_to_action_component">
        <h3> Explore the culture and values of The Accra Marathon and Dansoman Keep Fit Club</h3>
        <div class="two_column">
            <div class="column_card">
                <div class="img_wrapper">
                    <img src="/images/impact_six.jpg" alt="donating shoes to kids in school" />
                </div>
                <div class="card_content">
                    <h4>Values & culture of the Accra Marathon</h4>
                    <a href="/about/values" class="card_content_btn">Explore the values of Accra Maraton</a>
                </div>
            </div>
            <div class="column_card">
                <div class="img_wrapper">
                    <img src="/images/impact_four.jpg" alt="donating shoes to kids in school" />
                </div>
                <div class="card_content">
                    <h4>Values & culture of Dansoman Keep Fit</h4>
                    <a href="https://www.instagram.com/dkfc_rats_rabbits/" class="card_content_btn">Explore the values of DKFC</a>
                </div>
            </div>
        </div>
    </div>
</main>