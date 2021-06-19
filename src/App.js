import { Navbar } from './components/Navbar';
import { Home } from './components/Home';
import { Create } from './components/Create';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


function App() {
  const title = 'Welcome to the new blog!';
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className='content' >
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
          </Switch>

        </div>
      </div>
    </Router>
  );
}

export default App;
