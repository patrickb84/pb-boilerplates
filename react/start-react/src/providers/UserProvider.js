import { createContext, useContext, useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

const UserContext = createContext(null);

const UserProvider = props => {
  const [user, setUser] = useState({});

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, user => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        // ...
        console.log(uid);
        setUser({ ...user });
      } else {
        // User is signed out
        // ...
        console.log('No user');
        setUser(null);
      }
    });
  }, []);

  return (
    <UserContext.Provider value={user}>{props.children}</UserContext.Provider>
  );
};

export const useUserContext = () => {
  return useContext(UserContext);
};

export default UserProvider;
