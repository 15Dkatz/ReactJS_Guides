// reducers return a piece of the state in a function
// remember to keep them pure!
import {ADD_REMINDER, CLEAR_REMINDERS, DELETE_REMINDER} from '../constants'
import {bake_cookie, read_cookie, delete_cookie} from '../helpers/cookies'

const reminder = (state = {}, action) => {
  switch (action.type) {
    case ADD_REMINDER:
      let dueDate = new Date().toString();
      dueDate = action.dueDate ? action.dueDate : dueDate;
      // let dueDate = new Date(action.dueDate) || ; // make sure it's not null
      return {
        text: action.text,
        dueDate: dueDate,
        id: Date.now().toString() + Math.random()
      }
    // TODO figure out why the initial state parameter is necessary
    default:
      return state
  }
}



const removeById = (state = [], id) => {
  for (var i in state) {
    if (state[i].id === id) {
      state.splice(i, 1); // remove
      break;
    }
  }
  return state;
}

const reminders = (state = [], action) => {
  // delete_cookie('reminders');
  // if reminders exists in cookies, set reminders to cookies
  let reminders = null;
  // make sure the cookies reminders are set to state
  reminders = read_cookie('reminders');
  state = reminders;
  // necessary to make sure the reminderId is at the correct instance
  switch (action.type) {
    case ADD_REMINDER:
      reminders = [...state, reminder(undefined, action)]
      bake_cookie('reminders', reminders);
      return reminders
    case DELETE_REMINDER:
      reminders = removeById(state, action.id);
      bake_cookie('reminders', reminders); // overwrite the existing cookie
      return reminders;
    case CLEAR_REMINDERS:
      reminders = [];
      delete_cookie('reminders');
      return reminders;
    default:
      return state
  }
}

export default reminders
