import React, { Component } from 'react';
import './App.css';

class Clock extends Component {
    render() {
      return (
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
          <div>
            until: {this.props.deadline}
          </div>
        </div>
      )
    }
}

export default Clock;
