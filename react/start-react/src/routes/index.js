import React from "react";
import Home from "../views/Home";
import Contact from "../views/Home/Contact";
import About from "../views/Home/About";
import AllNotes from "../views/Notes/All.Notes";

const routes = [
  {
    name: "Home",
    component: Home,
    path: "/",
    exact: true,
  },
  {
    name: "Contact",
    component: Contact,
    path: "/contact",
  },
  {
    name: "About",
    component: About,
    path: "/about",
  },
  {
    name: "Notes",
    component: AllNotes,
    path: "/notes",
  },
];

export default routes;
