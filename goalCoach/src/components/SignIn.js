import React, { Component } from 'react';
import { Link } from 'react-router';
import { firebaseApp } from '../firebase';


class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = { // explain that declaring a variable here becomes a class member
      email: '',
      password: '',
      error: {
        message: ''
      }
    }
  }


  signIn() {
    let { email, password } = this.state;
    firebaseApp.auth().signInWithEmailAndPassword(email, password)
      .catch(error => {
        console.log('error', error)
        this.setState({error})
      })
  }

  render() {
    return (
      <div style={{padding: '5%'}} className="form-inline">
        <h2>Sign In</h2>
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
            onClick={() => this.signIn()}
            className="btn btn-primary"
          >
            Sign In
          </button>
        </div>
        {
          <div>{this.state.error.message}</div>
        }
        <div>
          <Link to={'/signup'}>Sign up instead</Link>
        </div>
      </div>
    )
  }
}

export default SignIn;
