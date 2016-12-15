import { ADD_REMINDER } from '../constants'

export const addReminder = (text) => {
  return {
    type: ADD_REMINDER,
    text // text: text
  }
}
