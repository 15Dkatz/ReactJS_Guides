// TODO explain that containers are dumb
// components are smart pieces of the application

import React, { Component } from 'react'
// import other components
import GroceryList from '../components/GroceryList'

class App extends Component {
  render() {
    return (
      <div>
        <h2>Grocery Champ</h2>
        <hr/>
        {/*Groceries component*/}
        {/*Cart component*/}
        <GroceryList />
      </div>
    )
  }
}

export default App


// TODO restyle later!
