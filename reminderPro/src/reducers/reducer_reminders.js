// reducers return a piece of the state in a function
// remember to keep them pure!
import {ADD_REMINDER, CLEAR_REMINDERS, DELETE_REMINDER} from '../constants'
import {bake_cookie, read_cookie, delete_cookie} from '../helpers/cookies'

const reminder = (action) => {
  let dueDate = new Date().toString();
  dueDate = action.dueDate ? action.dueDate : dueDate;
  return {
    text: action.text,
    dueDate: dueDate,
    id: Math.random()
  }
}



const removeById = (state = [], id) => {
  const reminders = state.filter(reminder => {
    console.log('reminder.id === id', reminder.id === id);
    return (
      reminder.id !== id
    )
  });
  console.log('new reminders', reminders);
  return reminders;
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
      reminders = [...state, reminder(action)]
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
