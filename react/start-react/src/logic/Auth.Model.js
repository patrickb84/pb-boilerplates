import firebaseAuth, { authEmail, signOutApp } from '../app/config/auth';

const { auth, onAuthStateChanged } = firebaseAuth;

export const onAuthChange = onAuthStateChanged(auth, user => {
    if (user) {
      // https://firebase.google.com/docs/reference/js/firebase.User
      const uid = user.uid;
      console.log('USER IN', user.email, uid);
    } else {
      console.log('USER OUT');
    }
  });

export const signInAsync = async (email, password) => {
  let user = await authEmail.signIn(email, password);
  console.log(user);
  return user;
};

export const signUp = (email, password, { ...info }) => {
  // todo
};

export const signOut = signOutApp;

export const resetPassword = () => {};
