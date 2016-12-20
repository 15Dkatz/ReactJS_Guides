import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './containers/App'

import reducer from './reducers'

const store = createStore(reducer);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

// TODO
// [] boostrap this!

// challenge portion:
// add a feature where users can return an item from their cart
// add a feature where *managers can add items to the grocery store
