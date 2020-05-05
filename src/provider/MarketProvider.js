import React, {createContext} from 'react';

export const MarketContext = createContext();

const MarketProvider = ({children}) => {
  const getMarchand = () => {
    return 1;
  };
  return (
    <MarketContext.Provider value={{getMarchand}}>
      {children}
    </MarketContext.Provider>
  );
};

export default MarketProvider;
