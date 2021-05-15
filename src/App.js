import logo from './logo.svg';
import './App.css';
import HomeView from './Pages/HomeView.js'
import Login from './Pages/Login.js'
import Register from './Pages/Register.js'
import Cargando from './Pages/Cargando.js'
import Chart from './Pages/Chart.js'
import SendQuestions from './Pages/SendQuestions.js'
import Form from './Pages/Form.js'

import React from 'react'
import { Cookies } from 'react-cookie';

function App() {

  const cookies = new Cookies();
  var is_reg = cookies.get('username')
  var goto = <Cargando />
  
  if (document.location.href.endsWith('Form')) {
    return (
      <Form/>
    )
  }
  if (document.location.href.endsWith('Register')) {
    goto = <Register/>
  } else if (document.location.href.endsWith('Chart')) {
    goto = <Chart />
  } else if (document.location.href.endsWith('SendQuestions')) {
    goto = <SendQuestions />

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
