import { ADD_REMINDER, CLEAR_REMINDERS } from '../constants'

export const addReminder = (text, dueDate) => {
  console.log('dueDate', dueDate);
  return {
    type: ADD_REMINDER,
    text, // text: text
    dueDate
  }
}

export const clearReminders = () => {
  return {
    type: CLEAR_REMINDERS
  }
}
