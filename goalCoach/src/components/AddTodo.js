import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

class AddTodo extends Component {
  render() {
    let text;
    let email = this.props.user.email;
    return (
      <div>
        <h4>Add a todo</h4>
        <input
          type="text" placeholder="something to do"
          ref={node => text = node}
        />
        <button onClick={() => this.props.addTodo(text.value, email)}>
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

export default connect(mapStateToProps, { addTodo })(AddTodo)
