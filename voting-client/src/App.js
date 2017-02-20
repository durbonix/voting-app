import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import {Voting} from './components'

class App extends Component {
  render() {
    const pair = ['Trainspotting', '28 Days Later']
    return (
      <div className="App">
        <Voting pair={pair}/>
      </div>
    )
  }
}

export default App
