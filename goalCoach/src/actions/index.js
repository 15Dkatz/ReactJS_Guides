import * as types from '../constants'
// import { firebaseApp } from '../firebase'
// host the firebase functions within here

// TODO export the authentication methods into another folder
export function signUp(email, password, confirm_password) {
  console.log('signUp action')
  console.log('email', email, 'password', password, 'confirm_password', confirm_password)
  let uid = '';

  // firebaseApp.auth().createUser...
  return {
    type: types.SIGNED_IN,
    payload: {
      email,
      uid
    }
  }
}

export function signIn(email, password) {
  console.log('signIn action')
  // firebaseApp.auth().signInWithEmailAndPassword...

  let uid = '';
  return {
    type: types.SIGNED_IN,
    payload: {
      email,
      uid
    }
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
