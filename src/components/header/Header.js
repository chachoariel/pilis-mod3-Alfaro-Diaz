import React from "react";
import Coordenadas from "../ingresarCoord/Coordenadas";
import './header.css'
const Header = () => {
    return(
        <div> 
            <div className="bg-home">
                <div className="nav-header">
                    <div className="logo">
                        <a href=""> <h1>Pronostico</h1> </a>
                    </div>

                    <div className="menu">
                        <ul>
                            <li><a href="">Home</a></li>
                            <li><a href="">Agregar</a></li>
                            <li><a href="">Login</a></li>
                        </ul>
                    </div>
                </div>

                <Coordenadas></Coordenadas>
            </div>
        </div>
    )
}

export default Header;