import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { firebaseApp } from '../firebase'

import { signIn } from '../actions/index'


class SignIn extends Component {
  signIn(email, password) {
    // hook up firebase
    // use firebase's actual method

    // then call the prop's method after using mapDispatchToProps
    console.log('email', email, 'password', password, 'props', this.props);
    firebaseApp.auth().signInWithEmailAndPassword(email, password)
      .then(
        user =>
        // console.log('this', this, 'success', user)
        this.props.signIn(user.email, user.uid)
      ) //
      .catch(error => console.log('error', error)) // pass the error message through an action
  }


  render() {
    let email;
    let password;

    return (
      <div>
        <h2>SignIn</h2>
        <input type="text" placeholder="email" ref={node => {email = node}}/>
        <input type="password" placeholder="password" ref={node => {password = node}}/>
        {/*TODO re-direct link to the signup component*/}
        <button onClick={() => this.signIn(email.value, password.value)}>
          Sign In
        </button>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    user: state
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({signIn})
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);

// next step: log the information from the form to an action
// TODO style with Bootstrap
