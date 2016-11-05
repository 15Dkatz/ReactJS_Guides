import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-title">Countdown to Christmas</div>
        <div className="Clock">
          <div className="Clock-day">
            15 Days
          </div>
          <div className="Clock-hour">
            20 Hours
          </div>
          <div className="Clock-minute">
            15 Minutes
          </div>
          <div className="Clock-second">
            5 Seconds
          </div>
        </div>
      </div>
    )
  }
}

export default App;
