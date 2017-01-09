import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addGoal } from '../actions'

class AddGoal extends Component {
  // TODO change to onChange and net ref
  render() {
    let text;
    let email = this.props.user.email;
    return (
      <form className="form-inline">
        <div className="form-group">
          <input
            type="text" placeholder="Add a goal"
            ref={node => text = node}
            className="form-control"
            style={{marginRight: '5px'}}
          />
          <button
            onClick={() => this.props.addGoal(email, text.value)}
            className="btn btn-success"
            type="button"
          >
            Submit
          </button>
        </div>
      </form>
    )
  }
}

function mapStateToProps(state) {
  return {
    user: state.reducer.user
  }
}

export default connect(mapStateToProps, { addGoal })(AddGoal)
