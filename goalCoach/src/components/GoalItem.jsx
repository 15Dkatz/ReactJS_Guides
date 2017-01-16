import React, { Component } from 'react';
import { connect } from 'react-redux';
import { goalRef, completeGoalRef } from '../firebase';

class GoalItem extends Component {
  completeGoal(serverKey, title) {
    const { email } = this.props.user;
    goalRef.child(serverKey).remove()
    completeGoalRef.push({email, title})
  }

  render() {
    const { serverKey, email, title } = this.props.goal;
    return (
      <div style={{margin: '5px'}}>
        <strong>{title}</strong>
        <span style={{marginRight: '5px'}}> submitted by <em>{email}</em></span>
        <button
          onClick={() => this.completeGoal(serverKey, title)}
          className="btn btn-sm btn-primary"
        >
          Complete
        </button>
      </div>
    )
  }
}

// necessary to get the current user
function mapStateToProps(state) {
  const { user } = state;
  return {
    user
  }
}

export default connect(mapStateToProps, null)(GoalItem)
