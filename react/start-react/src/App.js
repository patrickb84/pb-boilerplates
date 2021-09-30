import SiteNavbar from './views/components/SiteNavbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Routes from './routes';

function App() {
  return (
    <Router>
      <SiteNavbar />
      <Switch>
        {Routes.map(route => {
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
