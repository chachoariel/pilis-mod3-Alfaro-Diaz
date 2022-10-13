

/* const getClima = async () => {
    const url = "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m,windspeed_10m"
    const res = await fetch(url)
    const user = await res.json();
    return user;
}


export default getClima */

import React from "react";

/* const FetchClima = () => {
    const getClima = async () => {
        let url = "https://api.open-meteo.com/v1/forecast?latitude=-24.183217361024145&longitude=-65.33131945767111&hourly=temperature_2m,relativehumidity_2m,windspeed_10m"
        let res = await fetch(url)
        let user = await res.json();
    }
    return (
        <div>
            <h1>hOLA</h1>
        </div>
    )
    } */





    async function pronosticoTiempo(){
        try {
            let api = '1ee4e8761246e152a287630fdf86cd82';
            let longitud = -65.33131945767111
            let latitud = -24.183217361024145
            let responseTiempo = await fetch(`https://api.open-meteo.com/v1/forecast?current_weather=true&latitude=${latitud}&longitude=${longitud}&timezone=America/Argentina/Jujuy`)
            let tiemporesponse = await responseTiempo.json()
    
            console.log(tiemporesponse)
    
            /* let temperaturaCelsius=(tiemporesponse.main.temp - 273.15).toFixed(1)
            let temperaturaCelsiusMax=(tiemporesponse.main.temp_max - 273.15).toFixed(1)
            let temperaturaCelsiusMin=(tiemporesponse.main.temp_min - 273.15).toFixed(1)
    
    
            nombreCiudad.textContent = tiemporesponse.name;
            temperatura.textContent = temperaturaCelsius+" C°";
            temperaturaMax.textContent ="Maxima "+temperaturaCelsiusMax+" C°";
            temperaturaMin.textContent ="Minima: "+temperaturaCelsiusMin+" C°";
            iconoWeather = tiemporesponse.weather[0].icon
            iconoTiempo.src=`http://openweathermap.org/img/wn/${iconoWeather}@2x.png`
    
            console.log(tiemporesponse.weather[0].icon) */
        }
        catch {
            console.log("Error")
        }
    }
export default pronosticoTiempo;