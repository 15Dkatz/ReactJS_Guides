import React from 'react'

const CartItem = (item) => (
  <div>
    {item.title} | ${item.price}
    <button
      style={{marginLeft: 10}}
      onClick={() => item.removeFromCart(item.id, item.index)}
    >Return</button>
  </div>
)

export default CartItem
