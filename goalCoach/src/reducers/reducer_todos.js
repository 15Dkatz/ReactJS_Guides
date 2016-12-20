import { ADD_TODO } from '../constants'

export default (state = [], action) => {
  switch(action.type) {
    case ADD_TODO:
      let { email, title } = action.payload;
      return [...state, {email, title}]
    default:
      return state;
  }
}
