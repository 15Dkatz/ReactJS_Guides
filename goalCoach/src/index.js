import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import reducer from './reducers'
import thunkMiddleware from 'redux-thunk'
import { firebaseApp } from './firebase'
import { logUser } from './actions'

import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import TodoDashboard from './containers/TodoDashboard'

const store = createStore(
  combineReducers({
    reducer,
    routing: routerReducer
  }),
  applyMiddleware(thunkMiddleware)
)

const history = syncHistoryWithStore(browserHistory, store)
// TODO redirect on unauthed
history.listen(location => {
  console.log('new location', location)
  let signedIn = store.getState().reducer.user.signedIn;
  let pathname = location.pathname;
  if (!signedIn && pathname !== '/signin' && pathname !== '/signup') {
    browserHistory.replace('/signin')
  }
})


firebaseApp.auth().onAuthStateChanged(user => {
  if (user) {
    let {email, uid} = user;
    store.dispatch(logUser(email, uid))
    browserHistory.push('/dashboard')
  }
})

render(
  <Provider store={store}>
    <Router path="/" history={history}>
      <Route path="/signin" component={SignIn}/>
      <Route path="/signup" component={SignUp}/>
      <Route path="/dashboard" component={TodoDashboard}/>
    </Router>
  </Provider>,
  document.getElementById('root')
)

// NOTE
// * A shared todo application for your personal team
// * have authentication functionality
// * singup, signin, signout
// * have a global list of todos for the team
// * each todo should have a user who submitted it
// * have a global list of completed todos
// * each global todo has the user who completed it
// challenge portion features (if the above doesn't take enough time):
// * give users the option of creating teams
// * join multiple teams

// NOTE
// * the todos and completed todos should exist in application state
// * the signing in and out can simply exist in component state
// * no need to pollute the application state with only component-concerned data


// NOTE on addTodoToServer
// * necessary to separate the client side addTodoToServer
// from the server side add todo
// otherwise the normal todo would loop over and over again

// TODO
// style with Bootstrap
// personalize to make the todos 'goals'
// rename todos to goals

// NOTE CHALLENGE portion
// be able to make teams of users to assign goals to
// have a feed of signedIn users and assign goals to specific users
// have a dashboard of your specific goals
