import { firebaseAuth as fb } from "../firebase";

import authEmail from "./email.auth";
import authGoogle from "./google.auth";

// Sign out
const signOut = () => {
  try {
    fb.auth.signOut();
    return true;
  } catch (error) {
    throw error;
  }
};

export { authEmail, authGoogle, signOut };
export default { ...fb };
