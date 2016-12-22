import React from 'react'
import AddTodo from '../components/AddTodo'
import TodoList from '../components/TodoList'
import CompleteTodoList from '../components/CompleteTodoList'
import { firebaseApp } from '../firebase'
import { browserHistory } from 'react-router'

function signOut() {
  firebaseApp.auth().signOut().then(() => {
    browserHistory.replace('/signin')
  }, error => {
    console.log('error', error)
  })
}

const TodoDashboard = () => (
    <div>
      <h3>Todos</h3>
      <AddTodo/>
      <TodoList/>
      <hr/>
      <h3>Completed Todos</h3>
      <CompleteTodoList/>
      <hr/>
      <div>
        <button onClick={() => signOut()}>
          Sign Out
        </button>
      </div>
    </div>
)

export default TodoDashboard
