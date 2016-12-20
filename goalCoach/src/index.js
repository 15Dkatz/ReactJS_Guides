import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'

import App from './containers/App'

const store = createStore(reducer)

render(
  <Provider store={store}>
    <App/>
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


// TODO
// look up redux router to dynamically send routes based on redux state
