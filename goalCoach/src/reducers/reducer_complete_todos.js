import { COMPLETE_TODO, CLEAR_COMPLETED } from '../constants'
import { completeTodoRef } from '../firebase'

export default (state = [], action) => {

  // use a firebase helper to initialize the state with the data in firebase

  switch(action.type) {
    case COMPLETE_TODO:
      console.log('add to list of complete todos with action', action)
      let { email, title } = action.payload;
      completeTodoRef.push({email, title});
      return [...state, {email, title}]
    case CLEAR_COMPLETED:
      completeTodoRef.set([]) // TODO check if this works
      return []
    default:
      return state;
  }
}
