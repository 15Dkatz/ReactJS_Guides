// TODO remove console.logs!

import { ADD_TO_STOCK, ADD_TO_CART, RET_FROM_CART } from '../constants/ActionTypes'

import initialGroceries from '../api/groceries'

// helper function to calculate inventory

// reduce stock helper method
// third parameter is a boolean flag to reduce or add
const changeStock = (groceries = [], groceryId, reduce) => {
  // return a new list of groceries with the stock of the groceryId reduced
  // let newGroceries = groceries;
  for (var g = 0; g<groceries.length; g++) {
    let grocery = groceries[g];
    if (grocery.id === groceryId) {
      grocery.stock = Number.parseFloat(grocery.stock);
      console.log('grocery.stock', grocery.stock);
      grocery.stock = reduce ? grocery.stock > 0 ? grocery.stock - 1 : 0 : grocery.stock + 1;
      // above line is ===
      // if (reduce) {
      //   grocery.stock = grocery.stock > 0 ? grocery.stock - 1 : 0;
      // } else {
      //   grocery.stock++;
      // }
      groceries[g] = grocery;
      break;
    }
  }
  // console.log('updated groceries', newGroceries)
  return groceries
}

// howo to initialize the state...?
const groceries = (state = initialGroceries, action) => {
  let newGroceries = null;
  switch (action.type) {
    case ADD_TO_STOCK:
      let {title, price, stock, id} = action;
      newGroceries = state.concat({title, price, stock, id});
      console.log('newGroceries', newGroceries)
      return [...newGroceries]
    case ADD_TO_CART:
      // console.log('action', action)
      newGroceries = changeStock(state, action.id, true)
      return [...newGroceries] // TODO make these 3 lines 1
      // TODO explain why you !NEED! the spread operator
    case RET_FROM_CART:
      newGroceries = changeStock(state, action.id, false)
      return [...newGroceries]
    default:
      return state
  }
}

export default groceries
