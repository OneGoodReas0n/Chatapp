import React from 'react';
import Home from './containers/Home';
import {Route} from 'react-router'
import LoginForm from './components/loginForm';
import RegistrationForm from './components/registrationForm';
import './styles/index.scss'

function App() {
  return (
    <div>
      <Route path='/' exact render={()=> <Home />}/>
      <Route path='/secret' exact render={()=> <Home />}/>
      <Route path='/login' exact render={()=> <LoginForm />}/>
      <Route path='/signup' exact render={()=> <RegistrationForm />}/>
    </div>
  );
}

export default App;
