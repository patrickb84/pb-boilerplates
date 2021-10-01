import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { createUserWithEmail, signInWithEmail } from './Auth.EmailPassword';

let auth = getAuth();

/**
 * (Using firebase auth) Sign out.
 */
const signOut = () => {
  try {
    auth.signOut();
    console.log('Signed out!');
  } catch (error) {
    console.error(error);
  }
};

export default {
  signOut,
  onAuthStateChanged,
  getAuth,
  createUserWithEmail,
  signInWithEmail,
};
