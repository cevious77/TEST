import React, { Component } from 'react';
import logo from './logo.svg';

import Travel from "./components/Travel"

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
        <Travel 
        destination= "MacarenaLand"
        country= "Un endroit fait pour les adeptes de la macarena, venez comme vous voulez HEYYYYYYYY MACARENAAAAA"
        photo= "https://images.ecosia.org/UqZY5wgTVnF1Iim_rmx8TtYSY3w=/0x390/smart/https%3A%2F%2Fwww.turismobr.com%2Fwp-content%2Fuploads%2F2017%2F01%2Fcristo-redentor.jpg"
        distance= "Attention aux femmes zizi"
        />
        <Travel 
        destination = "VodkaLand"
        country = "Jus de patates POOOOOOOOOWEEEEEEER !!!"
        photo = "https://images.ecosia.org/kl4BUbn7KY9TIpBHv0cnOUBj00s=/0x390/smart/https%3A%2F%2Fcache.magicmaman.com%2Fdata%2Fphoto%2Fw2000_ci%2F1bk%2Fmoscou-vue-ville-russie.jpg"
        distance = "Cyka Blyat"
        />
      </div>
    );
  }
}

export default App;
