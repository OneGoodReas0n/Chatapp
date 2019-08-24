import React from 'react';
import Home from './containers/Home';
import {Route} from 'react-router'

function App() {
  return (
    <div>
      <Route path='/' exact render={()=> <Home />}/>
      <Route path='/secret' exact render={()=> <Home />}/>
    </div>
  );
}

export default App;
