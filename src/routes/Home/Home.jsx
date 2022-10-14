import './Home.css';
import Places from "../../components/Place/Places"
import { useContext, useEffect, useState } from 'react';
import { PlacesContext } from "../../context/PlacesContext"
// import { LocationsContext } from "../../contexts/LocationsContext"


const Home = () => {
  const { places, setPlaces } = useContext(PlacesContext)
  
  return (
    <>
      <div className='main-container'>
        <Places places={places}></Places>
      </div>
    </>
  );
};

export default Home;