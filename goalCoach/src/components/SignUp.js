import React, { Component } from 'react'
import { connect } from 'react-redux'
import { signUp } from '../actions'

class SignUp extends Component {
  render() {
    let email, password, confirm_password;
    return (
      <div>
        <h2>Sign Up</h2>
        <input placeholder="email" type="text" ref={node => {email = node}}/>
        <input placeholder="password" type="password" ref={node => {password = node}}/>
        <input placeholder="confirm password" type="password" ref={node => {confirm_password = node}}/>
        <button onClick={() => this.props.signUp(email.value, password.value, confirm_password.value)}>
          Sign Up
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

export default connect(mapStateToProps, { signUp })(SignUp)
