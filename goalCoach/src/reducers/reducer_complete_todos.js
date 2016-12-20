import { CLEAR_TODO, CLEAR_COMPLETED } from '../constants'

export default (state = [], action) => {

  // use a firebase helper to initialize the state with the data in firebase

  switch(action.type) {
    case CLEAR_TODO:
      console.log('add to list of complete todos with action', action)
      let { email, title } = action.payload;
      return [...state, {email, title}]
    case CLEAR_COMPLETED:
      return []
    default:
      return state;
  }
}
