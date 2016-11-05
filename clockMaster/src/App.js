import React, { Component } from 'react';
import './App.css';

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
        <div className="Clock">
          <div className="Clock-days">
            15 Days
          </div>
          <div className="Clock-hours">
            20 Hours
          </div>
          <div className="Clock-minutes">
            15 Minutes
          </div>
          <div className="Clock-seconds">
            5 Seconds
          </div>
        </div>
      </div>
    )
  }
}

export default App;
