// TODO remove console.logs!

import { ADD_TO_CART } from '../constants/ActionTypes'

import initialGroceries from '../api/groceries'

// helper function to calculate inventory

// reduce stock helper method
const reduceStock = (groceries = [], groceryId) => {
  // return a new list of groceries with the stock of the groceryId reduced
  // let newGroceries = groceries;
  for (var g = 0; g<groceries.length; g++) {
    let grocery = groceries[g];
    if (grocery.id === groceryId) {
      // console.log('reduce stock of', grocery)
      grocery.stock = grocery.stock > 0 ? grocery.stock - 1 : 0;
      groceries[g] = grocery;
      break;
    }
  }
  // console.log('updated groceries', newGroceries)
  return groceries
}

// howo to initialize the state...?
const groceries = (state = initialGroceries, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      // console.log('action', action)
      let newGroceries = reduceStock(state, action.groceryId)
      return [...newGroceries] // TODO make these 3 lines 1
      // TODO explain why you !NEED! the spread operator
    default:
      return state
  }
}

export default groceries
