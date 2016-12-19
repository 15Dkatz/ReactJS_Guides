export const SIGNED_IN = 'SIGNED_IN'
export const SIGNED_OUT = 'SIGNED_OUT'

export function signIn(email, uid) {
  console.log('signIn action')
  return {
    type: SIGNED_IN,
    payload: {
      email,
      uid
    }
  }
}

export function signOut() {
  return {
    type: SIGNED_OUT,
    payload: {}
  }
}
