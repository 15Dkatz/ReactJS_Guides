import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { firebaseApp } from '../firebase'


class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  signIn(email, password) {
    firebaseApp.auth().signInWithEmailAndPassword(email, password)
      .catch(error => {
        console.log('error', error)
        this.setState({error})
      })
    // export function signIn(email, password) {
    //   console.log('signIn action')
    //   // firebaseApp.auth().signInWithEmailAndPassword...
    //   return dispatch => {
    //     return firebaseApp.auth().signInWithEmailAndPassword(email, password)
    //       .then(user => {
    //         dispatch(firebaseSuccess(user))
    //         console.log('pushing to dashboard')
    //         // browserHistory.push('/dashboard')
    //       })
    //       .catch(error => dispatch(firebaseError(error)))
    //   }
    // }
  }

  render() {
    let email, password;

    return (
      <div>
        <h2>Sign In</h2>
        <input type="text" placeholder="email" ref={node => {email = node}}/>
        <input type="password" placeholder="password" ref={node => {password = node}}/>
        <button
          onClick={() => {
            this.signIn(email.value, password.value);
          }}>
          Sign In
        </button>
        {
          this.state.error != null ?
          <div>{this.state.error.message}</div> :
          <span style={{display: 'none'}}></span>
        }
        <div>
          <Link to={'/signup'}>Sign up instead</Link>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {user: state.reducer.user}
}

export default connect(mapStateToProps, null)(SignIn);

// next step: log the information from the form to an action
// TODO style with Bootstrap
