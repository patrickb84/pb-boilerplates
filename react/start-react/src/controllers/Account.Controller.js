import auth from "../app/config/auth";

const AccountController = () => {
  const signInEmail = async (email, password) => {
    try {
      let user = await auth.signIn(email, password);
      return user;
    } catch (error) {
      console.log("signInEmail error: ", { ...error });
    }
  };

  const signInGoogle = () => {};

  const signOut = () => {
    auth.signOut();
  };

  return {
    signInEmail,
    signInGoogle,
    signOut,
  };
};

export default AccountController;
