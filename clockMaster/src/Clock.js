import React, { Component } from 'react';
import './App.css';

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      'days': 0,
      'hours': 0,
      'minutes': 0,
      'seconds': 0
    }
  }

  render() {
    return (
      <div className="Clock">
        <div className="Clock-days">
          {this.state.days} Days
        </div>
        <div className="Clock-hours">
          {this.state.hours} Hours
        </div>
        <div className="Clock-minutes">
          {this.state.minutes} Minutes
        </div>
        <div className="Clock-seconds">
          {this.state.seconds} Seconds
        </div>
        {/*NEXT VIDEO: Add a button to update state of time remaining after fully defining the funciton*/}
        <button onClick={() => {this.getTimeUntil(this.props.deadline)}}>
          Get Time Until {this.props.deadline}
        </button>
      </div>
    )
  }

  // updates days, hours, minutes, and seconds of state according
  // the given deadline
  getTimeUntil(deadline) {
    // calculates the time left in a JS Date object from the deadline to the current time
    let time = Date.parse(deadline) - Date.parse(new Date()); // outputs a huge number around 10 digits length
    let seconds = Math.floor((time/1000)%60);
    let minutes = Math.floor((time/1000/60) % 60);
    let hours = Math.floor((time/1000*60*60) % 24);
    let days = Math.floor(time/(1000*60*60*24));

    // console.log('time', time);
    // console.log('seconds', seconds);
    // console.log('minutes', minutes);
    // console.log('hours', hours);
    // console.log('days', days);

    this.setState({
      days,
      hours,
      minutes,
      seconds
    })
  }

}

export default Clock;
