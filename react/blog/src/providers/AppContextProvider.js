import { createContext, useEffect, useContext } from 'react';
import useLocalStorage from '../store/useLocalStorage';

const AppContext = createContext({});

const AppContextProvider = props => {
  const [user, setUser] = useLocalStorage('user', null);

  useEffect(() => {
    console.log('USER:', user);
  }, [user]);

  const values = {
    user,
    setUser,
  };

  return (
    <AppContext.Provider value={values}>{props.children}</AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);

export default AppContextProvider;
