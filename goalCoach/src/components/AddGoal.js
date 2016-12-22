import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addGoal } from '../actions'

class AddGoal extends Component {
  render() {
    let text;
    let email = this.props.user.email;
    return (
      <div>
        <h4>Add a goal</h4>
        <input
          type="text" placeholder="something to do"
          ref={node => text = node}
        />
        <button onClick={() => this.props.addGoal(email, text.value)}>
          Submit
        </button>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    user: state.reducer.user
  }
}

export default connect(mapStateToProps, { addGoal })(AddGoal)
