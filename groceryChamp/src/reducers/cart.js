import { ADD_TO_CART, RET_FROM_CART } from '../constants/ActionTypes'
import groceries from '../api/groceries'

const addToCartById = (groceries, id) => {
  for (var g=0; g<groceries.length; g++) {
    let grocery = groceries[g];
    if (grocery.id === id) {
      // console.log('add to cart: ', grocery);
      return grocery;
    }
  }
  // return groceries[0]; //default
}

const cart = (state = [], action) => {
  switch(action.type) {
    case ADD_TO_CART:
      return [...state, addToCartById(groceries, action.groceryId)]
    case RET_FROM_CART:
      // console.log('action', action, 'state', state)
      let newCart = state.slice(0, action.index).concat(state.slice(action.index+1, state.length));
      return newCart;
    default:
      return state
  }
}

export default cart
