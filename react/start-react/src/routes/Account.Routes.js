import Login from "../views/Account/SignIn";
// import SignUp from "../views/Account/SignUp";
import Account from "../views/Account";

const login = {
  key: "signin",
  name: "Sign In",
  component: Login,
  path: "/sign-in",
};

// const signUp = {
//   key: "signup",
//   name: "Sign Up",
//   component: SignUp,
//   path: "/sign-up",
// };

const account = {
  key: "account",
  name: "Account",
  component: Account,
  path: "/Account",
};

// export const index = [login, signUp, account];
export const index = [login];

// const routes = { login, signUp, account };
const routes = { login };
export default routes;
