import { useEffect, useState } from 'react';
import { signInAsync, signOut, onAuthChange } from './Auth.Model';

const AccountController = () => {
  const [activeUser, setActiveUser] = useState(null);
  const signInEmail = async (email, password) => {
    try {
      await signInAsync(email, password);
    } catch (error) {
      console.error(error.message);
    }
  };

  const signOutUser = () => {
    console.log('SIGN OUT');
    signOut();
  };

  return { signInEmail, signOutUser, activeUser };
};

export default AccountController;
