import { UserCollection } from '../data';
import { setUser } from '../providers/AppContextProvider';

export const login = (email, password) => {
  try {
    const user = UserCollection.find(u => u.email === email)[0];

    if (!user) throw new Error('No account found');
    if (user.password !== password) throw new Error('Password incorrect');
    // else return user;
    setUser(user);
  } catch (error) {
    console.error(error);
  }
};

export const logOut = () => {
  setUser(null);
};
