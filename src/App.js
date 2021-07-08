import React, { Component } from "react";
import './App.css';


// PAGINAS
import Home from './pages/home.jsx'
import mainNewAccount from './pages/newAccount.jsx'
import VerPerfil from './pages/vProfile.jsx'

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect
} from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/crear-cuenta" component={mainNewAccount} />
          <Route exact path="/mi-cuenta" component={VerPerfil} />
        </Switch>
      </Router>
    );
  }
}

export default App;
