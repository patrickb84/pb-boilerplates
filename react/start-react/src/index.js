import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "@styles/main.scss";
import AppContextProvider from "./providers/AppContextProvider";

ReactDOM.render(
  <AppContextProvider>
    <App />
  </AppContextProvider>,
  document.getElementById("root")
);
