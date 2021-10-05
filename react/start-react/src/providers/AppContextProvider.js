import { createContext, useEffect, useContext } from 'react';
import auth from '../store/authorization';
import useLocalStorage from '../services/useLocalStorage';

const AppContext = createContext({});

const AppContextProvider = props => {
  const [user, setUser] = useLocalStorage('user', null);

  useEffect(() => {
    console.log('USER:', user);
  }, [user]);

  const login = (email, password) => {
    let user = auth.login(email, password);
    if (user) setUser(user);
  };

  const logout = () => {
    setUser(auth.logout);
  };

  const values = {
    user,
    login,
    logout,
  };

  return (
    <AppContext.Provider value={values}>{props.children}</AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);

export default AppContextProvider;
