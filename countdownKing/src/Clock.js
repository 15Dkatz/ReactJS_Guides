import React, { Component } from 'react';
import './App.css';

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      timer: 0
    }
  }

  componentWillMount() {
    this.getTimeUntil(this.props.deadline);
  }

  componentDidMount() {
    setInterval(() => {
      this.getTimeUntil(this.props.deadline)
    }, 1000);
  }

  render() {
    return (
      <div className="Clock">
        <div className="Clock-days">
          {this.state.days} Day(s)
        </div>
        <div className="Clock-hours">
          {this.state.hours} Hour(s)
        </div>
        <div className="Clock-minutes">
          {this.state.minutes} Minute(s)
        </div>
        <div className="Clock-seconds">
          {this.state.seconds} Second(s)
        </div>
      </div>
    )
  }

  leading0(num) {
    // if (num < 10) {
      // console.log('num is less than 10!', num);
      // return '0' + num;
    // }
    // return num; //explain that this code is equivalent
    return num < 10 ? '0' + num : num;
  }

  // updates days, hours, minutes, and seconds of state according
  // the given deadline
  getTimeUntil(deadline) {
    // calculates the time left in a JS Date object from the deadline to the current time
    let time = Date.parse(deadline) - Date.parse(new Date()); // outputs a huge number around 10 digits length
    let seconds = Math.floor((time/1000)%60);
    let minutes = Math.floor((time/1000/60) % 60);
    let hours = Math.floor(time/(1000*60*60) % 24); // the off by one is for daylight savings
    let days = Math.floor(time/(1000*60*60*24));

    days = this.leading0(days);
    hours = this.leading0(hours);
    minutes = this.leading0(minutes);
    seconds = this.leading0(seconds);

    this.setState({
      days,
      hours,
      minutes,
      seconds
    })
  }

}

export default Clock;
