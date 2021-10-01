import NavBar from './components/NavBar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// routes
import Home from './views/Home';
import LoginPage from './views/Login/LoginPage';

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/login' component={LoginPage} />
      </Switch>
    </Router>
  );
}

export default App;
