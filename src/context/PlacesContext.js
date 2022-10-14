import { createContext, useState } from "react";

export const PlacesContext = createContext({
  places: [],
  setPlaces: () => {}
})

export const PlacesProvider = ({ children }) => {
  const [places, setPlaces] = useState([]);
  const value = { places, setPlaces };

  return <PlacesContext.Provider value={value}>{children}</PlacesContext.Provider>;
}