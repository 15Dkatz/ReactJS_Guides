import React, { Component } from 'react'
import { Link } from 'react-router'
import { firebaseApp } from '../firebase'

class SignUp extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  signUp(email, password) {
    console.log('called signup', email, password)
    firebaseApp.auth().createUserWithEmailAndPassword(email, password)
      .catch(error => this.setState(error))
  }

  render() {
    let email, password;
    return (
      <div>
        <h2>Sign Up</h2>
        <input placeholder="email" type="text" ref={node => {email = node}}/>
        <input placeholder="password" type="password" ref={node => {password = node}}/>
        <button onClick={() => this.signUp(email.value, password.value)}>
          Sign Up
        </button>
        {
          this.state.error != null ?
          <div>{this.state.error.message}</div> :
          <span style={{display: 'none'}}></span>
        }
        <div>
          <Link to={'/signin'}>Sign in instead</Link>
        </div>
      </div>
    )
  }
}

export default SignUp
