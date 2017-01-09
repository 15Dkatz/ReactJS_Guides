import React, { Component } from 'react'
import { Link } from 'react-router'
import { firebaseApp } from '../firebase'

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      error: {
        message: '' // test by filling this string with something like 'sign up error' to show off the error form
      }
    }
  }

  signUp() {
    let { email, password } = this.state;
    console.log('called signup', email, password)
    firebaseApp.auth().createUserWithEmailAndPassword(email, password)
      .catch(error => {
        console.log('error', error);
        this.setState({error});
      })
  }

  render() {
    return (
      <div style={{margin: '5%'}} className="form-inline">
        <h2>Sign Up</h2>
        <div className="form-group">
          <input
            className="form-control"
            style={{marginRight: '5px'}}
            type="text"
            placeholder="email"
            onChange={event => this.setState({email: event.target.value})}
          />
          <input
            className="form-control"
            style={{marginRight: '5px'}}
            type="password"
            placeholder="password"
            onChange={event => this.setState({password: event.target.value})}
          />
          <button
            onClick={() => this.signUp()}
            className="btn btn-primary"
            type="button"
          >
            Sign Up
          </button>
        </div>
        {
          <div>{this.state.error.message}</div>
        }
        <div>
          <Link to={'/signin'}>Sign in instead</Link>
        </div>
      </div>
    )
  }
}

export default SignUp
