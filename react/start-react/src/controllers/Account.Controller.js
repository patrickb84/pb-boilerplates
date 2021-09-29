import { signOut, authEmail } from "../app/config/auth";

const AccountController = () => {
  const signInEmail = async (email, password) => {
    try {
      let user = authEmail.signIn(email, password);
      return user;
    } catch (error) {
      console.log("signInEmail error: ", { ...error });
    }
  };

  const signInGoogle = () => {};

  return {
    signInEmail,
    signInGoogle,
    signOut,
  };
};

export default AccountController;
