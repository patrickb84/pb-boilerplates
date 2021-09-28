import SiteNavbar from "./components/SiteNavbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Routes from "./routes";
import UserProvider, { useUserContext } from "./providers/UserProvider";
import { useEffect } from "react";

function App() {
  const user = useUserContext();

  useEffect(() => {
    console.log("App.js", { user });
  }, []);

  return (
    <Router>
      <UserProvider>
        <SiteNavbar />
        <Switch>
          {Routes.map((route) => {
            return (
              <Route
                key={route.name}
                exact={route.exact}
                path={route.path}
                component={route.component}
              />
            );
          })}
        </Switch>
      </UserProvider>
    </Router>
  );
}

export default App;
