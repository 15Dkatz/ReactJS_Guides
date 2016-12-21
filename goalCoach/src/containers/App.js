import React, { Component } from 'react'
import { connect } from 'react-redux'


class App extends Component {
  // TODO
  // requireAuth() {
  //   // console.log('nextState', nextState, 'replace', replace)
  //   // console.log('props in requireAuth', this.props)
  //   if (!this.props.user.signedIn) {
  //     console.log('signed out - reroute!')
  //     browserHistory.push('/signin')
  //   } else {
  //     console.log('signed in - continue')
  //   }
  // }
  componentDidMount() {
    console.log('browserHistory', browserHistory)
    browserHistory.listen((location, action) => {
      console.log('Current url', location);
    })
  }


  render() {
    console.log('props in render', this.props)
    return (
      <TodoDashboard/>
    )
  }
}

function mapStateToProps(state) {
  return {user: state.user}
}

export default connect(mapStateToProps, null)(App)
