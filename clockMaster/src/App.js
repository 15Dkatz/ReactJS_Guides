import React, { Component } from 'react';
import './App.css';

import Clock from './Clock';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      christmas: 'December 25, 2016'
    }
  }

  render() {
    return (
      <div className="App">
        <div className="App-title">Countdown to Christmas on {this.state.christmas}</div>
        <Clock deadline={this.state.christmas}/>
      </div>
    )
  }
}

export default App;
