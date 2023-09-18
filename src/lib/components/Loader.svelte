<script>

    import { fade } from "svelte/transition";
    import { loading } from "../stores/store";

</script>
<style lang="postcss">
    .loader-wrapper {
        @apply w-full h-screen bg-white flex justify-center items-center fixed top-0 z-50;
    }
    .loader {
    width: 50px;
    height: 50px;
    position: relative;
    z-index: 1;
    transform: translateX(-50%);
    }

    .loader::before, 
    .loader::after {
    content: '';
    position: absolute;
    width: inherit;
    height: inherit;
    border-radius: 50%;
    mix-blend-mode: multiply;
    animation: rotate92523 2s infinite cubic-bezier(0.77, 0, 0.175, 1);
    }

    .loader::before {
    background-color: #00A9AC;
    }

    .loader::after {
    background-color: #FA9D1E;
    animation-delay: 1s;
    }

    @keyframes rotate92523 {
    0%, 100% {
        left: 35px;
    }

    25% {
        transform: scale(.3);
    }

    50% {
        left: 0%;
    }

    75% {
        transform: scale(1);
    }
    }
</style>

<div class="loader-wrapper" transition:fade>
    <div class="loader"></div>
</div>