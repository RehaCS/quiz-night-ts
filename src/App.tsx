import React from 'react';
import './App.scss';
import Host from './Host';
import Nav from './Nav';
import User from './User';

function App() {
  return (
    <div>
      <Nav/>
      <div className="App container">
        <Host/> 
        <User/>
      </div>
    </div>
  );
}

export default App;
