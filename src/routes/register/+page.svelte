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

<svelte:head>
	<title>FNB Accra Marathon 2023 - Register here today!</title>
	<meta name="description" content="Secure Your Spot at the FNB Accra Marathon - Register Today! Join thousands of runners for an unforgettable race experience. Don't miss out, sign up now!" />
	<link rel="canonical" href="https://www.accramarathon.com/register/" />
</svelte:head>

<main>
    <RegistrationWrapperTwo />
</main>