import { createContext, useState, useEffect, useContext } from 'react';

const AppContext = createContext({});

const AppContextProvider = props => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    console.log('AppContextProvider effect fired.');
  }, []);

  const values = {
    user,
    setUser,
  };

  return (
    <AppContext.Provider value={values}>{props.children}</AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};

export default AppContextProvider;
