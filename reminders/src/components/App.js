import React, { Component } from 'react'
// use the conenct function to map the state to props
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addReminder } from '../actions/index'

class App extends Component {
  renderReminders() {
    return this.props.reminders.map((reminder) => {
      return (
        <li
          key={reminder.text}
          className="list-group-item"
        >
          {reminder.text} | {reminder.dueDate}
        </li>
      )
    })
  }

  render() {
    console.log('app props', this.props);
    return (
      <ul className="list-group col-sm-4">
        {this.renderReminders()}
        {/*button to add random task*/}
        <div onClick={() => this.props.addReminder()}>
          Add random
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
