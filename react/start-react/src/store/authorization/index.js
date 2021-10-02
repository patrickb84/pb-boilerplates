import { UserCollection } from '../user';
import { CustomException } from '@utils';

/**
 * Login with email and password.
 * @param {string} email
 * @param {string} password
 * @returns user obj
 */
const login = (email, password) => {
  console.log(UserCollection);
  try {
    const user = UserCollection.find(u => u.email === email);
    if (!user) {
      throw new CustomException(
        'No account with that email.',
        'INCORRECT_EMAIL'
      );
    }
    if (user.password !== password) {
      throw new CustomException('Password is incorrect.', 'INCORRECT_PASSWORD');
    }
    return user;
  } catch (error) {
    error.metadata = { email, password };
    throw error;
  }
};

const logout = () => {
  return null;
};

export default { login, logout };
