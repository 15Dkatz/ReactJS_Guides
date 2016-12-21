// use SIGNEDIN and SIGNEDOUT from '../actions'
import {SIGNED_IN, SIGNED_OUT, ERROR} from '../constants';

const user = {
  email: null,
  uid: null,
  signedIn: false
}

export default (state = user, action) => {
  switch (action.type) {
    case SIGNED_IN:
      console.log('signed in reducer')
      const {
        email, uid
      } = action.payload // make payload this object in the actual action
      const signedIn = {
        email,
        uid,
        signedIn: true
      }
      return signedIn
    case SIGNED_OUT:
      // const loggedIn = {
      //   email: null,
      //   uid: null,
      //   loggedIn: false
      // }
      // return loggedIn
      return user // simpler to just return the user constant defined above
    case ERROR:
      console.log('error action ', action)
      return state
    default:
      return state
  }
}
