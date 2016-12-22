import { ADD_TODO, COMPLETE_TODO } from '../constants'

export default (state = [], action) => {
  let email, title, index;
  switch(action.type) {
    case ADD_TODO:
      email = action.payload.email;
      title = action.payload.title;
      return [...state, {email, title}]
    case COMPLETE_TODO:
      index = action.payload.index;
      let newTodos = state.slice(0, index).concat(state.slice(index+1, state.length))
      return [...newTodos];
    default:
      return state;
  }
}
