import React, { Component } from 'react'
import { connect } from 'react-redux'
import { completeGoal } from '../actions'


class GoalItem extends Component {
  render() {
    const { serverKey, email, title } = this.props;
    return (
      <div style={{margin: '5px'}}>
        <strong>{title}</strong>
        <span style={{marginRight: '5px'}}> submitted by <em>{email}</em></span>
        <button
          onClick={() => this.props.completeGoal(serverKey, email, title)}
          className="btn btn-sm btn-primary"
        >
          Complete
        </button>
      </div>
    )
  }
}

export default connect(null, { completeGoal })(GoalItem)
