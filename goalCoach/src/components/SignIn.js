import React, { Component } from 'react'
import { connect } from 'react-redux'


import { signIn } from '../actions/index'


class SignIn extends Component {
  signIn(email, password) {
    // hook up firebase
    // use firebase's actual method

    // TODO look at the user data that is returned
    // COPY the signature and mock the flow by returning a custom promise

    // then call the prop's method after using mapDispatchToProps
    console.log('email', email, 'password', password, 'props', this.props);

  }


  render() {
    let email, password;

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

export default connect(mapStateToProps, { signIn })(SignIn);

// next step: log the information from the form to an action
// TODO style with Bootstrap
