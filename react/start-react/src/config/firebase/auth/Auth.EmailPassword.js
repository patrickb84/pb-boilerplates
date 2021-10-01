import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';

let auth = getAuth();

/**
 * Create firebase email/password user
 * @param {string} email
 * @param {string} password 
 * @returns user
 */
const createUserWithEmail = async (email, password) => {
  try {
    let userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const { user } = userCredential;
    return user;
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;

    console.error(errorCode, errorMessage);
    throw error;
  }
};

/**
 * Sign in to firebase app with email and password
 * @param {string} email
 * @param {string} password
 * @returns
 */
const signInWithEmail = async (email, password) => {
  try {
    let userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    const { user } = userCredential;
    return user;
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;

    console.error(errorCode, errorMessage);
    throw error;
  }
};

export default { createUserWithEmail, signInWithEmail };
