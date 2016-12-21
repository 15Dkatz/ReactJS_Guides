import * as types from '../constants'
import { firebaseApp } from '../firebase'
// host the firebase functions within here

function firebaseSuccess(user) {
  console.log('firebase success', user)
  let {email, uid} = user;

  return {
    type: types.SIGNED_IN,
    payload: {
      email,
      uid
    }
  }
}

function firebaseError(error) {
  console.log('firebaseError', error)
  let {code} = error;
  return {
    type: types.ERROR,
    code
  }
}

// TODO export the authentication methods into another folder
export function signUp(email, password) {
  console.log('signUp action')
  console.log('email', email, 'password', password)
  return dispatch => {
    return firebaseApp.auth().createUserWithEmailAndPassword(email, password)
      .then(user => dispatch(firebaseSuccess(user)))
      .catch(error => dispatch(firebaseError(error)))
  };
}

export function signIn(email, password) {
  console.log('signIn action')
  // firebaseApp.auth().signInWithEmailAndPassword...
  return dispatch => {
    return firebaseApp.auth().signInWithEmailAndPassword(email, password)
      .then(user => dispatch(firebaseSuccess(user)))
      .catch(error => dispatch(firebaseError(error)))
  }
}

export function signOut() {
  return {
    type: types.SIGNED_OUT,
    payload: {}
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

export function clearTodo(index, email, title) {
  return {
    type: types.CLEAR_TODO,
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
