// make a default state here for the user
import { combineReducers } from 'redux'
import user from './reducer_user'

const rootReducer = combineReducers({
  user
})

export default rootReducer
