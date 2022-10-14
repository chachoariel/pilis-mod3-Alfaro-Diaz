 import { useContext } from "react";
// import {PlacesContext } from "../../contexts/PlacesContext";

import "./Place.css";
 import { MdLocationOff } from "react-icons/md";
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
        <div className="place">
             <h3>{country}</h3> 
          <div className="target">
            <img className="imagen" src={url_photo} alt="" />
            <div className="targetderecha" >
               <h4>Latitud :  {latitude}</h4>
              <h4>Longitud :  {longitude}</h4>
              <h4>Temperatura  :{temperature}°C</h4>
              <h4>Velocidad del viento : {windspeed}km/h</h4> 
            </div>
          </div> 
          
        </div>
        <div className="place-actions">
          <div className="fav">
             <Link onClick={() => handlePlace()} value={country}>
                  <MdLocationOff className="trash" />
                  <span className="delete">Delete</span>
             
             </Link>
            
             

             {/* <Link className='nav-link' to='place/create'>
                    <MdAddLocationAlt className='add-place'/>
                    Nuevo Lugar
                </Link> */}
    
          </div>
        </div>
      </div>
    );

    
}
export default Place;


