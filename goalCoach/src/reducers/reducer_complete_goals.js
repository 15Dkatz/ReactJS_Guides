import { COMPLETE_GOAL, CLEAR_COMPLETED } from '../constants'
import { completeGoalRef } from '../firebase'

export default (state = [], action) => {
  switch(action.type) {
    case COMPLETE_GOAL:
      console.log('add to list of complete goals with action', action)
      let { email, title } = action.payload;
      completeGoalRef.push({email, title});
      return [...state, {email, title}]
    case CLEAR_COMPLETED:
      completeGoalRef.set([]) // TODO check if this works
      return []
    default:
      return state;
  }
}
