// have a notion of a Cart
// the cart contains totals of how many of each item were added
// also subtract from the stock of each item at an ADD_TO_CART
import { combineReducers } from 'redux'

import groceries from './groceries'
import cart from './cart'
// export const
export default combineReducers({
  groceries,
  cart
})
