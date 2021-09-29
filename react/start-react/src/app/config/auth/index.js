import { firebaseAuth } from '../firebase';

import authEmail from './email.auth';
import authGoogle from './google.auth';

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
