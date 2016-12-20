import React from 'react'
// import { addToCart } from '../actions'

// NOTE when displaying, make sure to transpile the babel in
// order to show what the es2015 version of the arrow syntax is
const grocery = (title, price, stock) => (
  <div>
    <div>
      {title} on sale for ${price}
    </div>
    Stock: {stock}
  </div>
)

const GroceryItem = (groceryItem) => (
  <div>
    {grocery(groceryItem.title, groceryItem.price, groceryItem.stock)}
    {
      groceryItem.stock > 0 ?
      <button onClick={() => groceryItem.addToCart(groceryItem.id)}>+</button> :
      <button>empty</button> // figure out a better UI for this
    }

  </div>
)

export default GroceryItem
