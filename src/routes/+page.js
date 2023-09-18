/** @type {import('./$types').PageLoad} */
export const load = (async ({ fetch }) => {


    const get_app_data = async () => {

		const response1 = await fetch('https://mega.acorns.life/marathon/endpoints/home_hero/getHomeHeros.php');

		const data1 = await response1.json();

		return {
                data1
        };
	};

    return {
        app_data: await get_app_data()
    }

})