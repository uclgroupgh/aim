<style lang="postcss">
    .newsletter_signup {
        @apply bg-[url('/images/newsletter_bg.jpg')] relative bg-primary_red bg-blend-soft-light py-32 relative flex flex-col items-center;
    }
    .running_man {
        @apply absolute left-[5%] top-1/2 -translate-y-1/2;
    }
    .title {
        @apply font-extrabold text-3xl text-white tracking-wide mb-2.5;
    }
    .subtitle {
        @apply text-white font-medium;
    }
    .input_wrapper {
        @apply flex flex-row mt-8;
    }
    .newsletter_input {
        @apply px-4 py-2 w-72 text-primary_red;
    }
    button {
        @apply py-2 px-5 bg-white ml-1 text-primary_red font-medium;
    }
</style>

<section class="newsletter_signup">
    <img src="/images/running_man.png" alt="running man" class="running_man"/>
    <h3 class="title">NEWSLETTER</h3>
    <p class="subtitle">Sign up for our free newsletter</p>
    <div class="input_wrapper">
        <input type="email" class="newsletter_input" placeholder="Your email address"/>
        <button>Sign Up Now</button>
    </div>
</section>