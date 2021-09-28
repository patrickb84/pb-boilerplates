import Home from "../views/Home";
import Contact from "../views/Home/Contact";
import About from "../views/Home/About";

const home = {
  name: "Home",
  component: Home,
  path: "/",
  exact: true,
};

const contact = {
  name: "Contact",
  component: Contact,
  path: "/contact",
};

const about = {
  name: "About",
  component: About,
  path: "/about",
};

export const index = [home, contact, about];
export default { home, contact, about };
