// TODO explain that containers are dumb
// components are smart pieces of the application

import React, { Component } from 'react'
import AddStockForm from '../components/AddStockForm'
import GroceryList from '../components/GroceryList'
import Cart from '../components/Cart'

class App extends Component {
  render() {
    return (
      <div>
        <h2>Grocery Champ</h2>
        <hr/>
        <AddStockForm />
        <hr/>
        <GroceryList />
        <hr/>
        {/*Cart component*/}
        <Cart />
      </div>
    )
  }
}

export default App


// TODO restyle later!
