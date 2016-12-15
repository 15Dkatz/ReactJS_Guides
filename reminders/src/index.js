import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import App from './components/App'

import ReminderReducer from './reducers/reducer_reminders'

// extract store into helper method later
let store = createStore(ReminderReducer)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
