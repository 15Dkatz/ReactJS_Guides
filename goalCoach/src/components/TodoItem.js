import React, { Component } from 'react'
import { connect } from 'react-redux'
import { clearTodo } from '../actions'


class TodoItem extends Component {
  render() {
    let {index, email, title} = this.props;
    return (
      <div>
        {title} | submitted by: {email}
        <button onClick={() => this.props.clearTodo(index, email, title)}>Complete</button>
      </div>
    )
  }
}

function mapStateToProps(state) {return {state}}
// TODO easier way to have a blank mapStateToProps?

export default connect(mapStateToProps, { clearTodo })(TodoItem)
// export default TodoItem
