import React from "react";
import './coord.css'
import FecthWeather from "../../api-doc/FecthWeather"
import { useEffect } from "react";
import { useState } from "react";


const Coordenadas = () => {
    
    const [ciudad, setCiudad] = useState("")
    const [lat,setLat] = useState("")
    const [lon,setLon] = useState("")

    const mostrarDatos = () => {
        FecthWeather(lat,lon)
    }

    useEffect(() => {
        document.title = lat;
    },[]);


    return(
        <div className="coord-form">
            <div className="formulario">
                <form>
                    <label htmlFor=""><b>Ingrese el nombre de la ubicacion</b></label><br />
                    <input type="text" id="ciudadNombre" onChange={(event) => setCiudad(event.target.value)}/><br />
                    <label htmlFor=""><b>Ingrese la latitud</b></label><br />
                    <input type="text" id="latitud" onChange={(event) => setLat(event.target.value)}/><br />
                    <label htmlFor=""><b>Ingrese la longitud</b></label> <br />
                    <input type="text" id="longitud" onChange={(event) => setLon(event.target.value)}/><br />
                    <input className="enviar" type="Submit" onClick={() => console.log(lat)}  value="Añadir Lista"/>
                    
                </form>
            </div>
        </div>
    )
}

export default Coordenadas