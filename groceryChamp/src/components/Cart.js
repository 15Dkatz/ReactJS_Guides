import React, { Component } from 'react'
import { connect } from 'react-redux'
import CartItem from './CartItem'
import { removeFromCart } from '../actions'

class Cart extends Component {
  calculateTotal() {
    let total = 0;
    let {cart} = this.props
    for (let c = 0; c < cart.length; c++) {
      let item = cart[c];
      // total = typeof(item.price) === "number" ? total + item.price : total + Number.parseFloat(item.price);
      total += Number.parseFloat(item.price)
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
        {this.props.cart.map((item, index) =>
          <CartItem
            key={Math.random()+Date.now().toString()} // in order to allow multiple of the same item
            id={item.id}
            index={index}
            title={item.title}
            price={item.price}
            removeFromCart={this.props.removeFromCart}
          />
        )}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  cart: state.cart
})

export default connect(mapStateToProps, { removeFromCart })(Cart)
