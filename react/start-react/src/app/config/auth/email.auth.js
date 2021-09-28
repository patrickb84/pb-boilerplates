import { firebaseAuth } from "../firebase";

const { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword } =
  firebaseAuth;

// Create User
export const createUser = async (email, password) => {
  try {
    let userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const { user } = await userCredential;
    return user;
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;

    console.error(errorCode, errorMessage);
    throw error;
  }
};

// Sign in, email/password
export const signIn = async (email, password) => {
  try {
    let userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    const { user } = await userCredential;
    return user;
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;

    console.error(errorCode, errorMessage);
    throw error;
  }
};
