import * as types from '../constants';

export function logUser(email, uid) {
  return {
    type: types.SIGNED_IN,
    email,
    uid
  }
}

export function setGoals(goals) {
  return {
    type: types.SET_GOALS,
    goals
  }
}

export function setCompleted(completeGoals) {
  return {
    type: types.SET_COMPLETED,
    completeGoals
  }
}