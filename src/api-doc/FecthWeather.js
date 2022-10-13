

const FecthWeather = async (latitud,longitud) => {
    try {
        /* let longitud = -65.500669
        let latitud = -24.7960685 */
        let url = await fetch(`https://api.open-meteo.com/v1/forecast?current_weather=true&latitude=${latitud}&longitude=${longitud}&timezone=America/Argentina/Jujuy`)
        let tiempoResponse = await url.json()

        console.log(tiempoResponse)
    }
    catch {
        console.log("Error no se cargo la api")
    } 
}

export default FecthWeather;