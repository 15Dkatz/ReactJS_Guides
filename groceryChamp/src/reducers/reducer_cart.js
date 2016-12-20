import { ADD_TO_CART, RET_FROM_CART, CLEAR_STORE } from '../constants/ActionTypes'

const cart = (state = [], action) => {
  let newCart;
  switch(action.type) {
    case ADD_TO_CART:
      let {title, price, stock, id} = action;
      return [...state, {title, price, stock, id}]
    case RET_FROM_CART:
      newCart = state.slice(0, action.index).concat(state.slice(action.index+1, state.length));
      return newCart;
    case CLEAR_STORE:
      newCart = []
      return newCart
    default:
      return state
  }
}

export default cart
