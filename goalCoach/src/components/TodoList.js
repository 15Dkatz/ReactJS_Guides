import React, { Component } from 'react'
import { connect } from 'react-redux'

import TodoItem from './TodoItem'


class TodoList extends Component {
  render() {
    return (
      <div>
        <h2>Todos</h2>
        {this.props.todos.map((todo, index) =>
          <TodoItem
            key={index}
            index={index}
            title={todo.title}
            email={todo.email}
          />
        )}
      </div>
    )
  }
}

function mapStateToProps(state) {
  let {user, todos} = state;
  return {user, todos}
}

export default connect(mapStateToProps, null)(TodoList)
