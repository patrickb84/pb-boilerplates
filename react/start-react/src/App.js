import SiteNavbar from "./components/SiteNavbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import routes from "./routes";

function App() {
  return (
    <Router>
      <SiteNavbar />
      <Switch>
        {routes.map((route) => {
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
    </Router>
  );
}

export default App;
