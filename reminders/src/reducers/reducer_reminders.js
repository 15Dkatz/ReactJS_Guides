// reducers return a piece of the state in a function
// remember to keep them pure!

import {ADD_REMINDER} from '../constants'

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
    default:
      return state
  }
}

const reminders = (state = [], action) => {
  switch (action.type) {
    case ADD_REMINDER:
      return [
        ...state,
        reminder(undefined, action)
      ]
    default:
      return state
  }
}

// export default function() {
//   return [
//     {text: 'Get groceries', dueDate: new Date().toString()},
//     {text: 'Finish cs220 project', dueDate: new Date(2016, 12, 15, 9, 30, 0).toString()}
//   ]
// }
export default reminders
