import React from 'react';
import { render } from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import { routerReducer } from 'react-router-redux';
import { firebaseApp } from './firebase';
import { logUser } from './actions';
import reducer from './reducers';

import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import App from './components/App';

const store = createStore(combineReducers({reducer, routing: routerReducer}));

firebaseApp.auth().onAuthStateChanged(user => {
  if (user) {
    let {email, uid} = user;
    store.dispatch(logUser(email, uid)); // dispatches the logUser action to the reducers
    browserHistory.push('/app');
  } else {
    // handling logouts
    browserHistory.replace('/signin');
  }
})

render(
  <Provider store={store}>
    <Router path="/" history={browserHistory}>
      <Route path="/signin" component={SignIn}/>
      <Route path="/signup" component={SignUp}/>
      <Route path="/app" component={App}/>
    </Router>
  </Provider>,
  document.getElementById('root')
)

// NOTE
// * A shared goal application for your personal team
// * have authentication functionality
// * singup, signin, signout
// * have a global list of goals for the team
// * each goal should have a user who submitted it
// * have a global list of completed goals
// * each global goal has the user who completed it
// challenge portion features (if the above doesn't take enough time):
// * give users the option of creating teams
// * join multiple teams

// NOTE
// * the goals and completed goals should exist in application state
// * the signing in and out can simply exist in component state
// * no need to pollute the application state with only component-concerned data


// NOTE on addTodo -> addTodo // *toServer*
// * necessary to separate the client side addGoalToServer
// from the server side add Goal
// otherwise the normal Goal would loop over and over again

// NOTE CHALLENGE portion
// be able to make teams of users to assign goals to
// have a feed of signedIn users and assign goals to specific users
// have a dashboard of your specific goals
// add a forgot password link that routes to another page
