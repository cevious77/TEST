import React, { Component } from 'react';
import logo from './logo.svg';

import Travel from "./components/Travel"
import travels from "./travels.json"

import './App.css';



class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            <code>C'est de la poudre de PERLIMPINPIN</code> 
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        {travels.map(travel => (
          <Travel {...travel} />
        ))}     
      </div>
   );
 }
}

export default App;
