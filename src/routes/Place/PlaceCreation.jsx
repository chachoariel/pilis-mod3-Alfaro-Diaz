
import "./PlaceCreation.css";
import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { PlacesContext } from "../../context/PlacesContext";
import {getPlaces} from "../../service"


const PlaceCreation = () => {
  const { places, setPlaces } = useContext(PlacesContext)
  const navigate = useNavigate();

  const onSubmit = (data) => {
    
    console.log("aqui");
    getPlaces(data.latitude,data.longitude)
      .then((d) =>  {
        const placeNew ={
          id: places.length + 1,
          country: data.country,
          latitude:data.latitude,
          longitude:data.longitude,
          temperature:d.current_weather.temperature,
          windspeed:d.current_weather.windspeed,
          url_photo:data.url_photo,
        }
        setPlaces([...places, placeNew])
        console.log(d);
       })
      .catch((err) => console.log(err));
    console.log("termino");
    
    navigate('/')
  }

  const { register, handleSubmit, formState: { errors } } = useForm()
  console.log(errors);
  
  
  return (
    <div className='sign-in-container estilos'>

        <span>Complete el Formulario</span>
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
          <input className="form-control" name="ciudad" type="text" placeholder="Ciudad" {...register("country", {required: true, maxLength: 80})} />         
          
          <input className="form-control" type="text" placeholder="Latitud" {...register("latitude", {required: true})} />
          
          <input className="form-control" type="text" placeholder="Longitud" {...register("longitude", {required: true})} />
          
          <input className="form-control" type="text" placeholder="Url imagen" {...register("url_photo", {required: true})} />
          
          <input className="btn btn-light " type="submit" />
   
    </form>
    </div>
  );
}


export default PlaceCreation;

