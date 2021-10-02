import { createContext, useState, useEffect, useContext } from "react";
import auth from "../store/Auth";

const AppContext = createContext({});

const AppContextProvider = (props) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    console.log("AppContextProvider effect fired.");
  }, []);

  const login = (email, password) => {
    try {
      let user = auth.login(email, password);
      if (user) setUser(user);
    } catch (error) {
      console.error("In AppContextProvider.", error);
    }
  };

  const values = {
    user,
    login,
  };

  return (
    <AppContext.Provider value={values}>{props.children}</AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);

export default AppContextProvider;
