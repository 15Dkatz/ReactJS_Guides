import React, { Component } from 'react'
// use the conenct function to map the state to props
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addReminder, deleteReminder, clearReminders } from '../actions/index'
import moment from 'moment'

class App extends Component {
  renderReminders() {
    let reminders = this.props.reminders


    return reminders.map((reminder) => {
      return (
        <li key={reminder.id} className="list-group-item">
          <div className="list-item">
            <div>{reminder.text}</div>
            <div><em>{moment(new Date(reminder.dueDate)).fromNow()}</em></div>
          </div>
          <div
            onClick={() => this.props.deleteReminder(reminder.id)}
            className="delete-button list-item"
          >&#x2715;</div>
        </li>
      )
    })
  }

  render() {
    console.log('props', this.props)

    let text;
    let dueDate;

    return (
      <div className="App">
        <div className="title">
          Reminders
        </div>
        <form className="form-inline">
          <div className="form-group">
            <input ref={node => {text = node}} placeholder='I have to...' className="form-control"/>
            <input type="datetime-local"  className="form-control" ref={node => {dueDate = node}}/>
          </div>
          <button type="button" className="btn btn-success" onClick={() => {this.props.addReminder(text.value, dueDate.value); console.log("typeof dueDate.value", typeof(dueDate.value))}}>
            Add Reminder
          </button>
        </form>
        <ul className="list-group col-sm-4">
          {this.renderReminders()}
        </ul>
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
