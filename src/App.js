import React, { Component } from "react";
import './App.css';


// PAGINAS
import Home from './pages/home.jsx'
import mainNewAccount from './pages/newAccount.jsx'

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
          <Route exact path="/" component={Home} />
          <Route exact path="/newAccount" component={mainNewAccount} />
      </Router>
    );
  }
}

export default App;
