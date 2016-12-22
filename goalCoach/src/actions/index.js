import * as types from '../constants'

export function logUser(email, uid) {
  return {
    type: types.SIGNED_IN,
    payload: {
      email,
      uid
    }
  }
}

export function addTodo(email, title) {
  return {
    type: types.ADD_TODO,
    payload: {
      email,
      title
    }
  }
}

// export function addTodoToServer(email, title) {
//   return {
//     type: types.ADD_TODO_TO_SERVER,
//     payload: {
//       email,
//       title
//     }
//   }
// }

export function completeTodo(serverKey, email, title) {
  return {
    type: types.COMPLETE_TODO,
    payload: {
      serverKey,
      email,
      title
    }
  }
}

export function clearCompleted() {
  return {
    type: types.CLEAR_COMPLETED
  }
}
