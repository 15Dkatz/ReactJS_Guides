import React, { Component } from 'react'
import { connect } from 'react-redux'
import { signUp } from '../actions'

class SignUp extends Component {
  render() {
    console.log('props', this.props)
    let email, password;
    return (
      <div>
        <h2>Sign Up</h2>
        <input placeholder="email" type="text" ref={node => {email = node}}/>
        <input placeholder="password" type="password" ref={node => {password = node}}/>
        <button onClick={() => this.props.signUp(email.value, password.value)}>
          Sign Up
        </button>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return state
}

export default connect(mapStateToProps, { signUp })(SignUp)
