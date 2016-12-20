import React from 'react'

const CartItem = (item) => (
  <div>
    {item.title} | ${item.price}
  </div>
)

export default CartItem
