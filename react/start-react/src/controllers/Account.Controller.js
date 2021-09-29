import { useHistory } from 'react-router';
import { signOutApp, authEmail } from '../app/config/auth';
import { useUserContext } from '../providers/UserProvider';

const AccountController = () => {
  const user = useUserContext();
  let history = useHistory();

  // account will be a firestore obj
  const getAccount = () => {
    return user;
  };

  const signInEmail = async (email, password) => {
    try {
      let user = await authEmail.signIn(email, password);
      return user;
    } catch (error) {
      console.error('Email sign in error: ', error);
    }
  };

  const signOut = () => {
    try {
      signOutApp();
      history.push('/');
    } catch (error) {
      console.error('Sign out error: ', error);
    }
  };

  // const signInGoogle = () => {};

  return {
    signInEmail,
    signOut,
    getAccount,
  };
};

export default AccountController;
