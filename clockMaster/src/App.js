import React, { Component } from 'react';
import './App.css';

import Clock from './Clock';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deadline: 'December 25, 2016',
      newDeadline: ''
    }
  }

  render() {
    return (
      <div className="App">
        <div className="App-title">Countdown to {this.state.deadline}</div>
        <Clock deadline={this.state.deadline}/>
        <div className="App-deadline">
          <input
            type="text"
            className="deadline-input"
            value={this.state.newDeadline}
            onChange={event => this.setState({newDeadline: event.target.value})}
          />
          <button
            onClick={() => this.changeDeadline()}
            className="deadline-btn"
          >
            Change Deadline
          </button>
        </div>
      </div>
    )
  }

  changeDeadline() {
    this.setState({deadline: this.state.newDeadline})
  }
}

export default App;
