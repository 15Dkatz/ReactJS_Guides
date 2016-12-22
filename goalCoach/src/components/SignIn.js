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
  }

  render() {
    let email, password;

    return (
      <form style={{padding: '5%'}} className="form-inline">
        <h2>Sign In</h2>
        <div className="form-group">
          <input className="form-control" style={{marginRight: '5px'}} type="text" placeholder="email" ref={node => {email = node}}/>
          <input className="form-control" style={{marginRight: '5px'}} type="password" placeholder="password" ref={node => {password = node}}/>
          <button
            onClick={() => {this.signIn(email.value, password.value)}}
            className="btn btn-primary"
          >
            Sign In
          </button>
        </div>
        {
          this.state.error != null ?
          <div>{this.state.error.message}</div> :
          <span style={{display: 'none'}}></span>
        }
        <div>
          <Link to={'/signup'}>Sign up instead</Link>
        </div>
      </form>
    )
  }
}

function mapStateToProps(state) {
  return {user: state.reducer.user}
}

export default connect(mapStateToProps, null)(SignIn);
