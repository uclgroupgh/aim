<script>
    import { fade } from 'svelte/transition';
    import SecondHero from '../../../lib/components/SecondHero.svelte';
    import Paragraph from '../../../lib/components/Paragragh.svelte';
    import ImageTextBanner from '../../../lib/components/ImageTextBanner.svelte';
    import SectionHeading from '../../../lib/components/SectionHeading.svelte';
</script>

<main transition:fade>
    <SecondHero 
        title={'Legacy in Motion, The Evolution of the Accra Marathon'}
        subtitle={'Step back in time and explore the remarkable journey of the Accra Marathon, a race that transformed into the iconic Accra Milo Marathon. This is a tale of resilience, collaboration, and the pursuit of excellence that has spanned decades.'}
        bgd_image={'bg-history_hero'}
    />
    <Paragraph 
        content={'Picture three thousand runners, the marathon\'s infamous twenty-six miles, and the test of thirteen water stations. The international Olympic Marathon - an audacious endeavor that beckons athletes to conquer its path. From tired feet to ultimate triumph, this colossal challenge inspired the inception of the Accra Marathon, now a legendary event.'}
    />
    <ImageTextBanner 
        heading={'The Founding Torchbearers'}
        para_text={'The spark of the Accra Marathon was ignited by the Dansoman Keep Fit Club, led by visionaries like the late Carl Reindorf, Sam Nelson, and N.A. Adjin-Tettey. Their goal was clear: to sow the seeds of long-distance running in the hearts of the youth, fostering a transformative shift towards healthier lives.'}
        bgd_image={'bg-dkfc'}
        bgd_color={'bg-primary_yellow'}
    />
    <SectionHeading 
        title={'Inaugural Strides'}
        subtitle={'In 1986, the starting gun marked the birth of the Accra Marathon. A modest 107 athletes answered the call. Sponsored by the State Insurance Company Limited, this inaugural race was both a declaration of intent and an embodiment of determination. Police Sergeant Amegashie claimed victory, etching his name in history.'}
    />
    <SectionHeading 
        title={'A Partnership for Progress'}
        subtitle={'As destiny would have it, Eddie Annan, a member of the Dansoman Keep Fit Club, facilitated a groundbreaking partnership. Nestle Ghana Limited, through Eddie Annan\'s initiative, joined hands with the club to redefine the marathon\'s future. The second edition of the race saw the birth of the Accra Milo Marathon.'}
    />
    <ImageTextBanner 
        heading={'Enduring Partnership'}
        para_text={'This partnership between the Accra Milo Marathon and Nestle Ghana Limited stood strong for twenty-nine years. Their shared vision fueled the marathon\'s growth, turning it into a beacon of health, unity, and community spirit.'}
        bgd_image={'bg-nestle_union'}
        bgd_color={'bg-primary_blue'}
        text_color={'text-white'}
    />
    <Paragraph 
        content={'Today, the Accra Milo Marathon continues to stand as a testament to the power of vision and collaboration. It\'s not just a race; it\'s an embodiment of the Ghanaian spirit - one that persists, evolves, and leaves an indelible mark on the running landscape.'}
    />
</main>