import React from "react";
import './body.css'
import image from '../../assets/img/img-body.jpg'
const Body = () => {
    return (
        <div>
            <div className="homeBody">
                <div className="home">
                    <div className="title-home">
                        <h2>Climatizate</h2>
                    </div>

                    <div className="text-home">
                        <p>En esta página web podrás saber el clima de cualquier parte del mundo. Podras saber la temperatura y la vellocidad del viento.</p>
                        <p>Primero deberas loguearte para armar tu lista de climas de diferentes partes del mundo!.</p>
                        <p><b>¿Cómo funciona?.</b> Es muy fácil de usar, debes ingresar la latitud y longitud de cualquier ciudad del mundo y listo! Obtendrás al instante los datos del clima y podras armar varias listas para armar tu viaje y estar prevenidos en cualquier momento, gracias a la tecnologia <a href="https://open-meteo.com/en">Open-meteo</a>.</p>


                    </div>
                </div>

                <div className="img-body">
                    <img src={image} alt="imagen-mundo" />
                </div>
            </div>
        </div>
    )
}

export default Body