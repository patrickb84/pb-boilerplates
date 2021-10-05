import NavBar from './components/NavBar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// routes
import Home from './views/Home';
import LoginPage from './views/Login/LoginPage';
import PostIndex from './views/Post/PostIndex';

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/login' component={LoginPage} />
        <Route path='/posts' component={PostIndex} />
      </Switch>
    </Router>
  );
}

export default App;
