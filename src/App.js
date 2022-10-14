import './App.css';
import {Routes, Route} from 'react-router-dom'
import Home from './routes/Home/Home.jsx';
import PlaceDisplay from './routes/Place/PlaceDisplay.css';
import { useContext, useEffect} from 'react';
// import { getPlaces } from './service';


 import Navigation from './routes/Navigation/Navigation';
// import Login from './routes/Login/lo';
 import PlaceCreation from './routes/Place/PlaceCreation';
import { UserContext } from './context/UserContext';
import { PlacesContext } from './context/PlacesContext';


function App() {
  // const { currentUser, setCurrentUser} = useContext(UserContext)
  const { places, setPlaces } = useContext(PlacesContext)
  // useEffect(() => {
  //   setPlaces([...places,
  //     {
  //       id: places.length + 1,
  //       country: "jujuy",
  //       latitude:-24.198446,
  //       longitude:-65.31877,
  //       temperatura:14.2,
  //       windspeed:4.7,
  //       url_photo:`https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Cerro_de_los_siete_colores.JPG/800px-Cerro_de_los_siete_colores.JPG`,
    
  //   }
  // ])
  // }, []);
  

  return (
      <div className='App'>
        
        <Routes>
            <Route path='/' element={<Navigation/>}>
            <Route index element={<Home/>}/>
             {/* <Route path='login' element={<Login/>}/> */}
            <Route path='place/:id' element={<PlaceDisplay/>}/>
            <Route path='place/create' element={<PlaceCreation/>}/>
          </Route> 
        </Routes>
      </div>
  );
}

export default App;

