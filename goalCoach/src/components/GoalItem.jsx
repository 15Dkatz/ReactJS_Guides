import React, { Component } from 'react';
import { connect } from 'react-redux';
import { goalRef, completeGoalRef } from '../firebase';

class GoalItem extends Component {
  completeGoal() {
    const { serverKey, title } = this.props.goal;
    const { email } = this.props.user;
    completeGoalRef.push({email, title});
    goalRef.child(serverKey).remove();
  }

  render() {
    const { email, title } = this.props.goal;
    return (
      <div style={{margin: '5px'}}>
        <strong>{title}</strong>
        <span style={{marginRight: '5px'}}> submitted by <em>{email}</em></span>
        <button
          onClick={() => this.completeGoal()}
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
