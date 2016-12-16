import React, { Component } from 'react'
// use the conenct function to map the state to props
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addReminder } from '../actions/index'

class App extends Component {
  renderReminders() {
    let reminders = this.props.reminders


    return reminders.map((reminder) => {
      return (
        <li
          key={reminder.id}
          className="list-group-item"
        >
          {reminder.text} | {reminder.dueDate}
        </li>
      )
    })
  }

  render() {
    console.log('app props', this.props);
    let text;
    let dueDate;

    return (
      <ul className="list-group col-sm-4">
        {this.renderReminders()}
        {/*Add an input that passes an action with text, and a date*/}
        <input ref={node => {text = node}}/>
        <input type="datetime-local" ref={node => {dueDate = node}}/>
        {/*button to add random task*/}
        <div onClick={() => {this.props.addReminder(text.value, dueDate.value); console.log("typeof dueDate.value", typeof(dueDate.value))}}>
          Add Reminder
        </div>
      </ul>
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
  return bindActionCreators({addReminder}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
