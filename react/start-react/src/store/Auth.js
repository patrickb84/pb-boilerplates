import { UserCollection } from '../data';

const Auth = {};

Auth.Login = (email, password) => {
  try {
    const user = UserCollection.find(u => u.email === email)[0];

    if (!user) throw new Error('No account found');
    if (user.password !== password) throw new Error('Password incorrect');
    else return user;
    
  } catch (error) {
    console.error(error);
  }
};
