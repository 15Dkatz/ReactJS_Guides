import React from 'react'
import AddTodo from '../components/AddTodo'
import TodoList from '../components/TodoList'
import CompleteTodoList from '../components/CompleteTodoList'

const TodoDashboard = () => (
    <div>
      <AddTodo/>
      <TodoList/>
      <hr/>
      <CompleteTodoList/>
    </div>
)

export default TodoDashboard
