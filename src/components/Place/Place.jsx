 import { useContext } from "react";
// import {PlacesContext } from "../../contexts/PlacesContext";

import "./Place.css";
 import { BsTrashFill } from "react-icons/bs";
import { PlacesContext } from "../../context/PlacesContext";
import { Link } from "react-router-dom";


const Place = ({place}) =>{

    const { places, setPlaces } = useContext(PlacesContext);
    const {id,country,latitude,longitude,temperature,windspeed,url_photo} = place;
  
    //renderiza las tarjetas de las localidades cuyo id sea distinto del que se elimino
    
    const handlePlace = () => {
      const filteredItems = places.filter(function(item)
      {
       return item.id !== id;

      });
      setPlaces(filteredItems);
      console.log("por eliminar ciudad"+filteredItems)

     }
  

    return(

        <div className="place-container">
          <div className="card-container">
            <div className="btn-eliminar">
              <Link onClick={() => handlePlace()} value={country}>
                  <BsTrashFill className="trash" />             
              </Link>
            </div>

            <div className="body-place">
              <div className="img-place">
                <img  src={url_photo} alt="" />
              </div>

              <div className="info-place">
                  <div className="title-place">
                    <h3>{country}</h3>
                  </div>

                  <div className="text-place">
                    <h4>Temperatura: {temperature}°C</h4>
                    <h4>Velocidad del viento: {windspeed}km/h</h4><br />
                    <p>Latitud: {latitude}</p>
                    <p>Longitud: {longitude}</p>
                  </div>

                 
              </div>

            </div>
          </div>



        
            
             

             {/* <Link className='nav-link' to='place/create'>
                    <MdAddLocationAlt className='add-place'/>
                    Nuevo Lugar
                </Link> */}
    
          
        </div>
    );

    
}
export default Place;


