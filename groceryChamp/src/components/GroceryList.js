import React, { Component } from 'react'
import { connect } from 'react-redux'
// pass the addToCart function to each Item
// import { bindActionCreators } from 'redux'
import { addToCart } from '../actions'
import GroceryItem from './GroceryItem'

// have a smart GroceryList component that has connected actions

class GroceryList extends Component {
  render() {
    console.log('props', this.props)

    return (
      <div>
        <h3>Groceries</h3>
        {this.props.groceries.map(groceryItem  =>
          <GroceryItem
            key={groceryItem.id}
            id={groceryItem.id}
            title={groceryItem.title}
            price={groceryItem.price}
            stock={groceryItem.stock}
            addToCart={this.props.addToCart}
          />
        )}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
    groceries: state.groceries
})

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({addToCart}, dispatch)
// }

export default connect(mapStateToProps, { addToCart })(GroceryList)
