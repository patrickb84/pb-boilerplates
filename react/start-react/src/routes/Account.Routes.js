import Login from "../views/Account/SignIn";
import SignUp from "../views/Account/SignUp";
import Account from "../views/Account";

const login = {
  key: "signin",
  name: "Sign In",
  component: Login,
  path: "/sign-in",
};

const signUp = {
  key: "signup",
  name: "Sign Up",
  component: SignUp,
  path: "/sign-up",
};

const account = {
  key: "account",
  name: "Account",
  component: Account,
  path: "/Account",
};

export const index = [login, signUp, account];

const routes = { login, signUp, account };
export default routes;
