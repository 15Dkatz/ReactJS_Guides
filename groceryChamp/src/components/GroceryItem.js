import React, { Component } from 'react'
import { connect } from 'react-redux'
// import { addToCart } from '../actions'

// NOTE when displaying, make sure to transpile the babel in
// order to show what the es2015 version of the arrow syntax is
const grocery = (title, price, stock) => (
  <div>
    {title} | {price} | {stock}
  </div>
)

const GroceryItem = (groceryItem) => (
  <div>
    {grocery(groceryItem.title, groceryItem.price, groceryItem.stock)}
    <button onClick={() => groceryItem.addToCart(groceryItem.id)}>+</button>
  </div>
)

export default GroceryItem
