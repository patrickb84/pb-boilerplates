import NavBar from './components/NavBar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// routes
import Home from './views/Home';
import PostIndex from './views/Posts/PostIndex';
import PostCreate from './views/Posts/PostCreate';

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/posts' component={PostIndex} />
        <Route path='/addpost' component={PostCreate} />
      </Switch>
    </Router>
  );
}

export default App;
