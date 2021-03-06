import React, { Component } from 'react';
import './App.css';

import Clock from './Clock';
import { Form, FormControl, Button } from 'react-bootstrap';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deadline: 'December 25, 2017',
      newDeadline: ''
    }
  }

  render() {
    return (
      <div className="App">
        <div className="App-title">Countdown to {this.state.deadline}</div>
        <Clock deadline={this.state.deadline}/>
        <Form inline>
          <FormControl
            type="text"
            className="deadline-input"
            value={this.state.newDeadline}
            onChange={event => this.setState({newDeadline: event.target.value})}
          >
          </FormControl>
          <Button onClick={() => this.changeDeadline()}>
            Change Deadline
          </Button>
        </Form>
      </div>
    )
  }

  changeDeadline() {
    this.setState({deadline: this.state.newDeadline})
  }
}

export default App;
