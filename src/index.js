import React from 'react';
import ReactDOM from 'react-dom';
import './components/index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import reportWebVitals from './reportWebVitals';
import Header from './components/Header';
import Home from './components/Home';
import Showpackages from './components/Showpackages';

import Showevents from './components/Showevents';
import Footer from './components/Footer';

ReactDOM.render(
  <React.StrictMode>
    
    <Header/>
    <Home/>
    <div className="container">
      
      <Showpackages/>
      <Showevents/>
      
    </div>
    <Footer/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
