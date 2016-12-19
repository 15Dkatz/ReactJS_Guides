// map over a list of groceries and build with a series of GroceryItems


import React, { Component } from 'react'
import { connect } from 'react-redux'

// import {  } from '../actions'
import GroceryItem from '../components/GroceryItem'

// map over grocery.json
import groceries from '../api/groceries'

class GroceriesContainer extends Component {
  render() {
    // console.log('groceries', groceries);

    return (
      <div>
        <h3>Groceries</h3>
        {/*map over the groceries and look at each product*/}
        {groceries.map(groceryItem =>

          <GroceryItem
            key={groceryItem.id}
            title={groceryItem.title}
            price={groceryItem.price}
          />
          // console.log('groceryItem', groceryItem)
        )}
      </div>
    )
  }
}

export default GroceriesContainer
