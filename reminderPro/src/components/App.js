import React, { Component } from 'react'
// use the conenct function to map the state to props
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addReminder, deleteReminder, clearReminders } from '../actions/index'
import moment from 'moment'
import '../App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      dueDate: ''
    }
  }

  addReminder() {
    console.log("this.state", this.state);
    const { text, dueDate } = this.state;
    this.props.addReminder(text, dueDate); 
  }

  renderReminders() {
    const reminders = this.props.reminders;
    return (
      <ul className="list-group col-sm-4">
      {
        reminders.map((reminder) => {
          return (
            <li key={reminder.id} className="list-group-item">
              <div className="list-item">
                <div>{reminder.text}</div>
                <div><em>{moment(new Date(reminder.dueDate)).fromNow()}</em></div>
              </div>
              <div
                onClick={() => this.props.deleteReminder(reminder.id)}
                className="delete-button list-item"
              >
                &#x2715;
              </div>
            </li>
          )
        })
      }
      </ul>
    )
  }

  render() {
    // console.log('props', this.props);
    return (
      <div className="App">
        <div className="title">
          Reminder Pro
        </div>
        <form className="form-inline">
          <div className="form-group row">
            <input
              placeholder='I have to...' 
              className="form-control"
              onChange={event => this.setState({text: event.target.value})}
            />
            <input 
              type="datetime-local"  
              className="form-control" 
              onChange={event => this.setState({dueDate: event.target.value})}
            />

            <button 
              type="button" 
              className="btn btn-success" 
              onClick={() => this.addReminder()}
            >
              Add Reminder
            </button>
          </div>
        </form>
        {this.renderReminders()}
        <button className="btn btn-danger" onClick={() => {this.props.clearReminders()}}>
          Clear Reminders
        </button>
      </div>
    )
  }
}


function mapStateToProps(state) {
  return {
    reminders: state
  }
}

// how does this work exactly?
// it maps the addReminder action to the overall dispatch...?
function mapDispatchToProps(dispatch) {
  return bindActionCreators({addReminder, deleteReminder, clearReminders}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
