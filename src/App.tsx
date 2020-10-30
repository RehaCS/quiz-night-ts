import React from 'react';
import './App.scss';
import Host from './Host';
import Nav from './Nav';
import User from './User';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Home';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Nav />

        <div className="App container">
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path='/host' component={Host} />
            <Route path='/user' component={User} />
          </Switch>
        </div>



      </BrowserRouter>
      <footer className="footer">
        <div className="content has-text-centered">
            <p><strong>RayBeem &amp; Co Ltd</strong></p>
        </div>
      </footer>
    </div>
  );
}

export default App;
