// use SIGNEDIN and SIGNEDOUT from '../actions'
import {SIGNED_IN, SIGNED_OUT} from '../actions';

const user = {
  email: null,
  uid: null,
  signedIn: false
}

export default (state = user, action) => {
  switch (action.type) {
    case SIGNED_IN:
      const {
        email, uid
      } = action.payload // make payload this object in the actual action
      const signedIn = {
        email,
        uid,
        signedIn: true
      }
      console.log('signed In reducer')
      return signedIn

    case SIGNED_OUT:
      // const loggedIn = {
      //   email: null,
      //   uid: null,
      //   loggedIn: false
      // }
      // return loggedIn
      return user // simpler to just return the user constant defined above
    default:
      return state
  }
}
