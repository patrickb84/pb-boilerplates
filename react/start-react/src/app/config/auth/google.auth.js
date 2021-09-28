import { firebaseAuth } from "../firebase";

const {
  auth,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithRedirect,
  getRedirectResult,
} = firebaseAuth;

const provider = new GoogleAuthProvider();

// auth.languageCode = 'it';
// To apply the default browser preference instead of explicitly setting it.
// firebase.auth().useDeviceLanguage();

// Google popup
export const signInGooglePopup = async () => {
  try {
    let result = await signInWithPopup(auth, provider);
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    return user;
  } catch (error) {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);

    console.error({ errorCode, errorMessage, email, credential });
    throw error;
  }
};

// with redirect
export const signInGoogleRedirect = () => signInWithRedirect(auth, provider);

// then after redirect, get google oauth token
export const signInGoogleRedirectToken = async () => {
  try {
    let result = await getRedirectResult(auth);

    // This gives you a Google Access Token. You can use it to access Google APIs.
    const credential = await GoogleAuthProvider.credentialFromResult(result);
    const token = await credential.accessToken;

    // The signed-in user info.
    const user = result.user;

    return { user, token };
  } catch (error) {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);

    console.error({ errorCode, errorMessage, email, credential });
    throw error;
  }
};
