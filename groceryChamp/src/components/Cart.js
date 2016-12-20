import React, { Component } from 'react'
import { connect } from 'react-redux'
import CartItem from './CartItem'
// track the items in the Cart
// calculate the dollars in the cart

class Cart extends Component {
  calculateTotal() {
    let total = 0;
    // let cart = this.props.cart;
    let {cart} = this.props
    for (let c = 0; c < cart.length; c++) {
      let item = cart[c];
      total += item.price;
    }
    return total; // TODO limit the decimal places to 2
  }


  render() {
    console.log('props in cart', this.props)

    return (
      <div>
        <h3>
          Cart Total: ${this.calculateTotal()}
        </h3>
        {/*List of items*/}
        {this.props.cart.map(item =>
          // console.log('cartItem', item)
          <CartItem
            key={Math.random()} // in order to allow multiple of the same item
            title={item.title}
            price={item.price}
          />
        )}
        {/*Total price*/}

      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  cart: state.cart
})

export default connect(mapStateToProps, null)(Cart)
