<script>
    import "../../styles/global.css";
    import Header from '../../lib/components/Header.svelte'
    import Footer from '../../lib/components/Footer.svelte'
    import Countdown from '../../lib/components/Countdown.svelte'
  </script>
  
  <Header />
  <Countdown />
    <slot />
  <Footer />