import Login from "../views/Account/Login";
import SignUp from "../views/Account/SignUp";
import Settings from "../views/Account/Settings";

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

const settings = {
  key: "settings",
  name: "Settings",
  component: Settings,
  path: "/settings",
};

export const index = [login, signUp, settings];
export default { login, signUp, settings };
