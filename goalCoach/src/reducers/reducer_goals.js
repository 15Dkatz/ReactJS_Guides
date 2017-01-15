import { ADD_GOAL, COMPLETE_GOAL } from '../constants'
import { goalRef } from '../firebase'

export default (state = [], action) => {
  switch(action.type) {
    case ADD_GOAL:
      // action.payload = { email, title };
      console.log('action.payload', action.payload);
      goalRef.push(action.payload)
      return [...state, action.payload]
    case COMPLETE_GOAL:
      const { serverKey } = action.payload;
      goalRef.child(serverKey).remove()
      return [...state];
    default:
      return state;
  }
}
