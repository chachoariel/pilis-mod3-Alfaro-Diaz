import React from "react";
import './cardClima.css'
import image from '../../assets/icons/borrar.png'


const CardClima = () => {
    return(
        <div className="card-clima">
            <div className="card-body">
                <div className="descr-card">
                    <h3>San Salvador de Jujuy</h3>
                    <h4>Argentina</h4>
                    <br />
                    
                    <p>Latitud: -45.76564</p>
                    <p>Longitud: 34.546567</p>
                </div>

                <div className="clima-card">
                    <h3>Temperatura</h3>
                    <h4>15° C</h4>
                    <br />
                    <h4>Velocidad del tiempo</h4>
                    <h4>14,5 km/h</h4>
                </div>
            </div>

            <div className="delete">
                <img src={image} alt="" />
            </div>
        </div>
    )
}

export default CardClima;