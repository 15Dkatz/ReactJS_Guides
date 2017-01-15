import { SIGNED_IN } from '../constants';

let user = {
  email: null,
  uid: null
}

export default (state = user, action) => {
  switch (action.type) {
    case SIGNED_IN:
      let {email, uid} = action.payload;
      user = {
        email,
        uid
      }
      return user
    default:
      return state
  }
}
