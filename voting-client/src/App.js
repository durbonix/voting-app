import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import {Voting} from './components'

class App extends Component {
  render() {
    const pair = ['Trainspotting 2', '28 Days Later', 'Sunshine']
    return (
      <div className="App">
        <Voting pair={pair} hasVoted="Trainspotting"/>
      </div>
    )
  }
}

export default App
