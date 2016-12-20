import * as types from '../constants/ActionTypes'

export const addToCart = function(title, price, stock, id) {
  // console.log('groceryId', groceryId)
  return ({
    type: types.ADD_TO_CART,
    title,
    price,
    stock,
    id
  })
}

export const removeFromCart = function(id, index) {
  console.log('return by groceryId', id)
  return ({
    type: types.RET_FROM_CART,
    id,
    index
  })
}

export const addStock = function(title, price, stock) {
  // console.log('title', title);
  // console.log('price', price);
  // console.log('stock', stock);
  return ({
    type: types.ADD_TO_STOCK,
    title,
    price,
    stock,
    id: Math.random()
  })
}
