import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './Pages/Main.css'
import Home from './Pages/HomeView'
import Login from './Pages/Login'
import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import 'bootstrap/dist/css/bootstrap.min.css';
import Agenda from './Pages/Agenda';
import Oradores from './Pages/Oradores';
import Evento from './Pages/Evento';
import Consulta from './Pages/Consulta';
import Contacto from './Pages/Contacto';
import Register from './Pages/Register';
import Vivo from './Pages/Vivo';
import App from './App'



const hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
    <Route path="/" component={App} />

      <Route path="/Vivo" component={Vivo} />
    </Switch>
  </Router>,
  document.getElementById("root")

)
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
