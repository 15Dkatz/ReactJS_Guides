import { ADD_GOAL, COMPLETE_GOAL } from '../constants'
import { goalRef } from '../firebase'

export default (state = [], action) => {
  // read state from firebase
  switch(action.type) {
    case ADD_GOAL:
      let {email, title} = action.payload;
      goalRef.push({email, title})
      return [...state, {email, title}]
    case COMPLETE_GOAL:
      let serverKey = action.payload.serverKey;
      goalRef.child(serverKey).remove()
      return [...state];
    default:
      return state;
  }
}
