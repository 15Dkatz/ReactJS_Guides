// use SIGNEDIN and SIGNEDOUT from '../actions'
import {SIGNED_IN, SIGNED_OUT, ERROR} from '../constants';


let user = {
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
      user = {
        email,
        uid,
        signedIn: true
      }
      return user
    case SIGNED_OUT:
      user = {
        email: null,
        uid: null,
        signedIn: false
      }
      // return loggedIn
      return user // simpler to just return the user constant defined above
    case ERROR:
      console.log('error action ', action)
      return state
    default:
      return state
  }
}
