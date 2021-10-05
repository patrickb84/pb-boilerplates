const USER_COLLECTION = [];

const login = (email, password) => {
  const user = USER_COLLECTION.find(u => u.email === email);

  if (!user) {
    throw new Error({
      message: 'No account with that email.',
      code: 'INCORRECT_EMAIL',
    });
  }

  if (user.password !== password) {
    throw new Error({
      message: 'Password is incorrect.',
      code: 'INCORRECT_PASSWORD',
    });
  }

  return user;
};

const logout = () => null;

export default { login, logout };
