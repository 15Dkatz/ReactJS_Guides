import {SIGNED_IN} from '../constants';

let user = {
  email: null,
  uid: null,
  signedIn: false
}

export default (state = user, action) => {
  switch (action.type) {
    case SIGNED_IN:
      let {email, uid} = action.payload // make payload this object in the actual action
      user = {
        email,
        uid,
        signedIn: true
      }
      return user
    default:
      return state
  }
}
