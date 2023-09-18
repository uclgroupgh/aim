<script>
    import { fade } from 'svelte/transition'
    import RegistrationWrapperTwo from '../../lib/components/RegistrationWrapperTwo.svelte';
    import { loading, location } from '../../lib/stores/store';
    import { onMount, onDestroy } from 'svelte';

    onMount(async () => {
        // const response2 = await fetch('https://accramarathon.com/manager/endpoints/info/getInfo.php?id=1')
        // const data2 = await response2.json()
        // $location = data2.data[0].location
        // if(data2 == undefined) {
        //     $loading = true;
        // } else {
        //     $loading = false;
        // }
    })
</script>


<main>
    <RegistrationWrapperTwo />
</main>