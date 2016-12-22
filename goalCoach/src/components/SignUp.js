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
      <form style={{margin: '5%'}} className="form-inline">
        <h2>Sign Up</h2>
        <div className="form-group">
          <input className="form-control" style={{marginRight: '5px'}} type="text" placeholder="email" ref={node => {email = node}}/>
          <input className="form-control" style={{marginRight: '5px'}} type="password" placeholder="password" ref={node => {password = node}}/>
          <button
            onClick={() => this.signUp(email.value, password.value)}
            className="btn btn-primary"
            type="button"
          >
            Sign Up
          </button>
        </div>
        {
          this.state.error != null ?
          <div>{this.state.error.message}</div> :
          <span style={{display: 'none'}}></span>
        }
        <div>
          <Link to={'/signin'}>Sign in instead</Link>
        </div>
      </form>
    )
  }
}

export default SignUp
