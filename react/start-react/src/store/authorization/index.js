import { CustomException } from '../../utils';
import { UserCollection } from '../user';

/**
 * Login with email and password.
 * @param {str} email
 * @param {str} password
 * @returns user obj
 */
const login = (email, password) => {
  const user = UserCollection.find(u => u.email === email);
  if (!user) {
    throw new CustomException('No account with that email.', 'INCORRECT_EMAIL');
  }
  if (user.password !== password) {
    throw new CustomException('Password is incorrect.', 'INCORRECT_PASSWORD');
  }
  return user;
};

const logout = () => null;

export default { login, logout };
