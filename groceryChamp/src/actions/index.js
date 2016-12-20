import * as types from '../constants/ActionTypes'

export const addToCart = function(groceryId) {
  // console.log('groceryId', groceryId)
  return ({
    type: types.ADD_TO_CART,
    groceryId
  })
}

export const removeFromCart = function(groceryId, index) {
  console.log('return by groceryId', groceryId)
  return ({
    type: types.RET_FROM_CART,
    groceryId,
    index
  })
}
