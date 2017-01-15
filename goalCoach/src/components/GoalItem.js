import React, { Component } from 'react';
import { connect } from 'react-redux';
import { completeGoal } from '../actions';


class GoalItem extends Component {
  completeGoal(serverKey, title) {
    let currentUser = this.props.user;
    this.props.completeGoal(serverKey, currentUser.email, title);
  }

  render() {
    const { serverKey, email, title } = this.props;
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

export default connect(mapStateToProps, { completeGoal })(GoalItem)
