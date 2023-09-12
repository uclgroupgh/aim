/** @type {import('./$types').PageLoad} */
export const load = (async ({ fetch }) => {


    const get_app_data = async () => {

		const [response1, response2, response3, response4] = await Promise.all([
            fetch('https://mega.acorns.life/marathon/endpoints/home_hero/getHomeHeros.php'),
            fetch('https://mega.acorns.life/marathon/endpoints/about_hero/getAboutHeros.php'),
            fetch('https://mega.acorns.life/marathon/endpoints/route_hero/getRouteHeros.php'),
            fetch('https://mega.acorns.life/marathon/endpoints/info/getInfos.php')
        ])

		const [data1, data2, data3, data4] = await Promise.all([
            response1.json(),
            response2.json(),
            response3.json(),
            response4.json()
        ])

		return {
                data1,
                data2,
                data3,
                data4
        };
	};

    return {
        app_data: await get_app_data()
    }

})