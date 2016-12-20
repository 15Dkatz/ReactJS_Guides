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
    return (total + '').substring(0, 5);
    // TODO limit the decimal places to 2
    // TODO!!!! HIGH PRIORITY use an actual decimal limiter
    // the above strategy leads to offBy1 race condition
  }


  render() {
    return (
      <div>
        <h3>
          Cart Total: ${this.calculateTotal()}
        </h3>
        {this.props.cart.map(item =>
          <CartItem
            key={Math.random()+Date.now().toString()} // in order to allow multiple of the same item
            title={item.title}
            price={item.price}
          />
        )}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  cart: state.cart
})

export default connect(mapStateToProps, null)(Cart)
