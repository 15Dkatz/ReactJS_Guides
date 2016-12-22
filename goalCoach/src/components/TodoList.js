import React, { Component } from 'react'
import { connect } from 'react-redux'

import TodoItem from './TodoItem'
import { todoRef } from '../firebase'

class TodoList extends Component {
  constructor(props) {
    super(props)
    this.state = {todos: []}
  }

  componentDidMount() {
    this.listenForItems(todoRef)
  }

  listenForItems(ref) {
    ref.on('value', snap => {
      let todos = [];
      snap.forEach(todo => {
        let {email, title} = todo.val();
        todos.push({
          email,
          title,
          key: todo.key
        })
      })
      this.setState({todos})
    })
  }

  render() {
    // TODO figure out how to show a loader
    return (
      <div>
        {this.state.todos.map((todo, index) =>
          <TodoItem
            key={todo.key}
            serverKey={todo.key}
            title={todo.title}
            email={todo.email}
          />
        )}
      </div>
    )
  }
}

function mapStateToProps(state) {
  let {user, todos} = state.reducer;
  return {user, todos}
}

export default connect(mapStateToProps, null)(TodoList)
