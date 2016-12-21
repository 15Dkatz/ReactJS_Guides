import React, { Component } from 'react'
import { browserHistory, Router, Route } from 'react-router'
import { connect } from 'react-redux'
import SignIn from '../components/SignIn'
import SignUp from '../components/SignUp'
import TodoDashboard from '../containers/TodoDashboard'

class App extends Component {
  // <div>
  //   <SignIn />
  //   <hr/>
  //   <SignUp />
  //   <hr/>
  //   <AddTodo />
  //   <TodoList />
  //   <hr/>
  //   <CompleteTodoList />
  // </div>

  // TODO
  requireAuth(nextState, replace) {
    console.log('nextState', nextState, 'replace', replace)
    console.log('props in requireAuth', this.props)
    if (!this.props.user.signedIn) {
      console.log('signed out - reroute!')
      replace({
        pathname: '/signin'
        // state: { nextPathname: nextState.location.pathname }
      })
    } else {
      console.log('signed in - continue')
    }
  }

  render() {
    console.log('props in render', this.props)
    return (
      <Router path="/" history={browserHistory}>
        <Route path="/signin" component={SignIn}/>
        <Route path="/dashboard" component={TodoDashboard} onEnter={this.requireAuth.bind(this)}/>
      </Router>
    )
  }
}

function mapStateToProps(state) {
  return {user: state.user}
}

export default connect(mapStateToProps, null)(App)
