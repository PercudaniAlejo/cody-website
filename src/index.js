import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import './components/NewAccount/newAccout.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import Footer from './components/FOOTER/footer'
ReactDOM.render(
  <React.StrictMode>
    <App />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
