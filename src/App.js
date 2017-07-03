import React, { Component } from 'react';
import './App.css';
import OpeningCrawl from './OpeningCrawl/OpeningCrawl';
import Main from './Main/Main';

const tempCrawl = 'Episode IV, A NEW HOPE It is a period of civil war. Rebel spaceships, striking from a hidden base, have won their first victory against the evil Galactic Empire. During the battle, Rebel spies managed to steal secret plans to the Empires ultimate weapon, the DEATH STAR, an armored space station with enough power to destroy an entire planet. Pursued by the Empires sinister agents, Princess Leia races home aboard her starship, custodian of the stolen plans that can save her people and restore freedom to the galaxy….'

class App extends Component {

  constructor() {
    super();
    this.state = {
      filmData: {}
    }
  }

  componentWillMount() {
    let randNum = Math.floor(Math.random() * ((7 - 1) + 1)) + 1

    fetch(`http://swapi.co/api/films/${randNum}/`)
    .then((resp) => resp.json())
    .then(data => {
      this.setState({filmData: data})
    })
  }

  render() {
    return (
      <div className="App">
        <OpeningCrawl filmData={ this.state.filmData }/>
        <Main />
      </div>
    );
  }
}

export default App;
