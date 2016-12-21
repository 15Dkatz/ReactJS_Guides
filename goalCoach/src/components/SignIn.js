import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { signIn } from '../actions/index'


class SignIn extends Component {
  componentWillUpdate() {
    console.log('component updated', this.props)
  }

  render() {
    let email, password;

    return (
      <div>
        <h2>Sign In</h2>
        <input type="text" placeholder="email" ref={node => {email = node}}/>
        <input type="password" placeholder="password" ref={node => {password = node}}/>
        {/*TODO re-direct link to the signup component*/}
        <button
          onClick={() => {
            this.props.signIn(email.value, password.value);
            // this.props.router.go("/dashboard")
          }}>
          Sign In
        </button>
        <div>
          <Link to={'/signup'}>Sign Up</Link>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {user: state.reducer.user}
}

export default connect(mapStateToProps, { signIn })(SignIn);

// next step: log the information from the form to an action
// TODO style with Bootstrap
