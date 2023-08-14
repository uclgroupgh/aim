<script>
    export let heading;
    export let parallax_bgd;
</script>
<style>
    .parallax {
        @apply min-h-[40vh] bg-fixed bg-center bg-no-repeat bg-cover flex flex-col justify-center bg-black bg-blend-soft-light;
    }
    .parallax h1 {
        @apply px-64 text-6xl font-bold text-white;
    }
</style>


<div class="parallax_header_section">
    <div class="parallax {parallax_bgd}">
        <h1>{heading}</h1>
    </div>
</div>