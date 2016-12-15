import { ADD_REMINDER } from '../constants'

export const addReminder = (text, dueDate) => {
  console.log('dueDate', dueDate);
  return {
    type: ADD_REMINDER,
    text, // text: text
    dueDate
  }
}
