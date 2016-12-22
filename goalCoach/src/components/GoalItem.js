import React, { Component } from 'react'
import { connect } from 'react-redux'
import { completeGoal } from '../actions'


class GoalItem extends Component {
  render() {
    console.log('props in GoalItem', this.props)
    let {serverKey, email, title} = this.props;
    return (
      <div>
        {title} | submitted by: {email}
        <button onClick={() => this.props.completeGoal(serverKey, email, title)}>Complete</button>
      </div>
    )
  }
}

export default connect(null, { completeGoal })(GoalItem)
