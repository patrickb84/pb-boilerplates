import { firebaseAuth } from '../firebase';

import authEmail from './auth.email';
import authGoogle from './auth.google';

// Sign out
const signOutApp = () => {
  try {
    firebaseAuth.auth.signOut();
    return true;
  } catch (error) {
    throw error;
  }
};

export { authEmail, authGoogle, signOutApp };
export default firebaseAuth;
