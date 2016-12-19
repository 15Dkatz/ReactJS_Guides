import * as types from '../constants/ActionTypes'

export const addToCart = function(productId) {
  console.log('productId', productId)
  return ({
    type: types.ADD_TO_CART,
    productId
  })
}
