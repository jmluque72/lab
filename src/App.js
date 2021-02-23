import logo from './logo.svg';
import './App.css';
import HomeView from './Pages/HomeView.js'
import Login from './Pages/Login.js'
import Register from './Pages/Register.js'
import Vivo from './Pages/Vivo.js'

import React from 'react'
import { Cookies } from 'react-cookie';

function App() {

  const cookies = new Cookies();
  var is_reg = cookies.get('username')
  var goto = <HomeView />
  if (document.location.href.endsWith('Register')) {
    goto = <Register/>
  } else if (document.location.href.endsWith('Vivo')) {
    goto = <Vivo />
  } else if (!is_reg) {
    goto = <Login/>
   }
  return (
    <div className="App">
      <header>
        {goto}
      </header>
    </div>
  );

}

export default App;
