// reducers return a piece of the state in a function
// remember to keep them pure!

import {ADD_REMINDER} from '../constants'


const reminder = (state={}, action) => {
  switch (action.type) {
    case ADD_REMINDER:
      return {
        text: 'switch from strings to action.text later' + Math.random(),
        dueDate: new Date().toString()
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
