import React, { Component } from 'react'

// TODO when displaying, make sure to transpile the babel in
// order to show what the es2015 version of the arrow syntax is
const grocery = (title, price) => (
  <div>
    {title} | {price}
  </div>
)

const GroceryItem = (groceryItem) => (
  <div key={groceryItem.id}>
    {grocery(groceryItem.title, groceryItem.price)}
  </div>
)

export default GroceryItem
