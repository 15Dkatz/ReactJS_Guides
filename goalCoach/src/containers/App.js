import React from 'react'
import SignIn from '../components/SignIn'
import SignUp from '../components/SignUp'
import AddTodo from '../components/AddTodo'
import TodoList from '../components/TodoList'
import CompleteTodoList from '../components/CompleteTodoList'

const App = () => (
  <div>
    <SignIn />
    <hr/>
    <SignUp />
    <hr/>
    <AddTodo />
    <TodoList />
    <hr/>
    <CompleteTodoList />
  </div>
)

export default App
