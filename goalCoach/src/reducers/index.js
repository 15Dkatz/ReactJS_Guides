// make a default state here for the user
import { combineReducers } from 'redux';
import user from './reducer_user';
import goals from './reducer_goals';
import completeGoals from './reducer_complete_goals';

export default combineReducers({
  user,
  goals,
  completeGoals
})
