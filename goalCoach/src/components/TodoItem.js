import React, { Component } from 'react'
import { connect } from 'react-redux'
import { completeTodo } from '../actions'


class TodoItem extends Component {
  render() {
    console.log('props in TodoItem', this.props)
    let {serverKey, email, title} = this.props;
    return (
      <div>
        {title} | submitted by: {email}
        <button onClick={() => this.props.completeTodo(serverKey, email, title)}>Complete</button>
      </div>
    )
  }
}

export default connect(null, { completeTodo })(TodoItem)
