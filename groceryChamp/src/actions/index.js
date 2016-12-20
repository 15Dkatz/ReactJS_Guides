import * as types from '../constants/ActionTypes'

export const addToCart = function(groceryId) {
  // console.log('groceryId', groceryId)
  return ({
    type: types.ADD_TO_CART,
    groceryId
  })
}
