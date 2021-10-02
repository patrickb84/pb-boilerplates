import { UserCollection } from "../data";
import { CustomException } from "../utils";

/**
 * Login with email and password.
 * @param {string} email
 * @param {string} password
 * @returns user obj
 */
const login = (email, password) => {
  try {
    const user = UserCollection.find((u) => u.email === email)[0];
    if (!user) {
      throw new CustomException(
        "No account with that email.",
        "INCORRECT_EMAIL"
      );
    }
    if (user.password !== password) {
      throw new CustomException("Password is incorrect.", "INCORRECT_PASSWORD");
    }
    return user;
  } catch (error) {
    error.metadata = { email, password };
    console.error("Login error.", error);
  }
};

export default { login };
