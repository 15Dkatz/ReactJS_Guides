// make a default state here for the user
import { combineReducers } from 'redux'
import user from './reducer_user'
import todos from './reducer_todos'

export default combineReducers({
  user,
  todos
})
