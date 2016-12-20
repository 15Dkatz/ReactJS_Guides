import React from 'react'
// NOTE when displaying, make sure to transpile the babel in
// order to show what the es2015 version of the arrow syntax is
const grocery = (title, price, stock) => (
  <div>
    <div>
      <strong>{title}</strong> on sale for ${price}
    </div>
    Stock: {stock}
  </div>
)

const GroceryItem = (groceryItem) => (
  <div style={{marginBottom: 5}}>
    {grocery(groceryItem.title, groceryItem.price, groceryItem.stock)}
    {
      groceryItem.stock > 0 ?
      <button onClick={() => groceryItem.addToCart(groceryItem.title, groceryItem.price, groceryItem.stock, groceryItem.id)}>+</button> :
      <button>out of stock!</button> // figure out a better UI for this
      // TODO make the button unclickable with html
    }

  </div>
)

export default GroceryItem
