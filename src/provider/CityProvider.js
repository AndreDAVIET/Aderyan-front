import React, {createContext, useState, useEffect} from 'react';
import axios from 'axios';
import {baseUrl} from './../config/config';
axios.defaults.baseURL = baseUrl;

export const CityContext = createContext();

const CityProvider = ({children}) => {
  const [infoVille, setInfoVille] = useState(null);

  useEffect(() => {
    getCity();
  }, []);

  const getCity = async () => {
    console.log('getCity');
    try {
      console.log(baseUrl);
      const data = await axios.get('/ville');
      console.log(data.data);
      setInfoVille(data.data);
    } catch (error) {
      console.log(error, 'rrrrr');
    }
  };

  return (
    <CityContext.Provider value={{getCity, infoVille}}>
      {children}
    </CityContext.Provider>
  );
};

export default CityProvider;
