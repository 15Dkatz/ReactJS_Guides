import React, { Component } from 'react'
import { connect } from 'react-redux'
import { completeGoal } from '../actions'


class GoalItem extends Component {
  render() {
    console.log('props in GoalItem', this.props)
    let {serverKey, email, title} = this.props;
    return (
      <div style={{margin: '2px'}}>
        <div><strong>{title}</strong></div>
        <span style={{marginRight: '2px'}}><em>submitted by {email}</em></span>
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
