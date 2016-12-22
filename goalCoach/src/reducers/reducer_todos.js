import { ADD_TODO, COMPLETE_TODO } from '../constants'
import { todoRef } from '../firebase'

export default (state = [], action) => {
  // read state from firebase
  switch(action.type) {
    case ADD_TODO:
      let {email, title} = action.payload;
      todoRef.push({email, title})
      return [...state, {email, title}]
    case COMPLETE_TODO:
      let serverKey = action.payload.serverKey;
      // let newTodos = state.slice(0, index).concat(state.slice(index+1, state.length))
      // todoRef.set(newTodos)
      // remove this todo from firebase
      // console.log('todoRef', todoRef.)
      todoRef.child(serverKey).remove()
      return [...state];
    default:
      return state;
  }
}
