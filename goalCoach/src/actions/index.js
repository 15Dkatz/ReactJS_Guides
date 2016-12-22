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

export function addGoal(email, title) {
  return {
    type: types.ADD_GOAL,
    payload: {
      email,
      title
    }
  }
}

export function completeGoal(serverKey, email, title) {
  return {
    type: types.COMPLETE_GOAL,
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
