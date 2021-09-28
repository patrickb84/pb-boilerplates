import { firebaseAuth as fb } from "../firebase";

import { createUser, signIn } from "./email.auth";
import {
  signInGooglePopup,
  signInGoogleRedirect,
  signInGoogleRedirectToken,
} from "./google.auth";

// Sign out
const signOut = () => {
  try {
    fb.auth.signOut();
    return true;
  } catch (error) {
    throw error;
  }
};

export default {
  auth: fb.auth,
  signOut,
  createUser,
  signIn,
  signInGooglePopup,
  signInGoogleRedirect,
  signInGoogleRedirectToken,
  onAuthStateChanged,
};
