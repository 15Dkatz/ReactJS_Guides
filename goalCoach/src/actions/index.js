import { SIGNED_IN, SET_GOALS, SET_COMPLETED } from '../constants';

export function logUser(email) {
  return {
    type: SIGNED_IN,
    email
  }
}

export function setGoals(goals) {
  return {
    type: SET_GOALS,
    goals
  }
}

export function setCompleted(completeGoals) {
  return {
    type: SET_COMPLETED,
    completeGoals
  }
}