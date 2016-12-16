// reducers return a piece of the state in a function
// remember to keep them pure!
/*eslint-disable no-unused-vars*/

import {ADD_REMINDER} from '../constants'
// import cookie from 'react-cookie'
import {bake_cookie, read_cookie, delete_cookie} from '../helpers/cookies'
let nextReminderId = 0;

const reminder = (state={}, action) => {
  switch (action.type) {
    case ADD_REMINDER:
      nextReminderId++;
      let dueDate = new Date().toString();
      dueDate = action.dueDate ? action.dueDate : dueDate;
      // let dueDate = new Date(action.dueDate) || ; // make sure it's not null
      return {
        text: action.text,
        dueDate: dueDate,
        id: nextReminderId
      }
    // TODO figure out why the initial state parameter is necessary
    default:
      return state
  }
}

const reminders = (state = [], action) => {
  // cookies.delete_cookie('reminders');
  // if reminders exists in cookies, set reminders to cookies
  let reminders = null;
  console.log('reminders in cookies', read_cookie('reminders'));
  // make sure the cookies reminders are set to state
  reminders = read_cookie('reminders');
  state = reminders;
  // necessary to make sure the reminderId is at the correct instance
  nextReminderId += reminders.length;

  switch (action.type) {
    case ADD_REMINDER:
      // cookie.save('reminders', reminders)
      reminders = [...state, reminder(undefined, action)]
      bake_cookie('reminders', reminders);
      return reminders
    default:
      return state
  }
}

export default reminders
