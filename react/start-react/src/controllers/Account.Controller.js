import { useState } from "react";

const AccountController = () => {
  const [activeUser, setActiveUser] = useState(null); // from elsewhere, like the provider

  const signIn = (email, password) => {
    try {
      // todo:
      const user = {};
      setActiveUser(user);
    } catch (error) {
      // todo:
    }
  };

  const signUp = (email, password, { ...data }) => {
    try {
      // todo:
    } catch (error) {
      // todo:
    }
  };

  const signOut = () => {
    try {
      // todo:
      setActiveUser(null);
    } catch (error) {
      // todo:
    }
  };

  const updatePassword = (userId, newPassword) => {
    try {
      // todo:
    } catch (error) {
      // todo:
    }
  };

  const forgotPassword = () => {
    try {
      // todo:
    } catch (error) {
      // todo:
    }
  };

  const index = (user) => {
    try {
      // todo:
      const settings = {};
      return settings;
    } catch (error) {
      // todo:
    }
  };

  return {
    signIn,
    signUp,
    signOut,
    updatePassword,
    forgotPassword,
    index,
  };
};

export default AccountController;
