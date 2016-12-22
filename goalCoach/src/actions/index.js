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

export function addTodo(title, email) {
  return {
    type: types.ADD_TODO,
    payload: {
      title,
      email
    }
  }
}

export function completeTodo(index, email, title) {
  return {
    type: types.COMPLETE_TODO,
    payload: {
      index,
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
